import * as THREE from 'three';
import { WEAPONS, GRAVITY } from './config.js';
import { makeActor } from './actors.js';
import { moveActor, lineOfSight, supportAt } from './physics.js';
import { shoot } from './combat.js';
import { damagePiece } from './pieces.js';
import { buildTargetFor, placePiece } from './build.js';
import { sfx } from './audio.js';
import { rr, angleDiff, clamp } from './util.js';
import { S } from './state.js';

// Bot de duelo (1v1) e boneco de treino (freebuild)
const DIFF = {
  easy:   { react: 0.9,  spread: 0.05,  dmg: 0.4,  build: 0.3,  speed: 4.3, aimErr: 0.45 },
  normal: { react: 0.5,  spread: 0.032, dmg: 0.6,  build: 0.7,  speed: 5.0, aimErr: 0.25 },
  hard:   { react: 0.28, spread: 0.02,  dmg: 0.85, build: 1.0,  speed: 5.6, aimErr: 0.12 },
};
const WEAPON_KEYS = ['ar', 'shotgun', 'smg', 'sniper'];

export let bot = null;
export let dummy = null;
const _m = new THREE.Vector3(), _d = new THREE.Vector3();

function weapon(k) { return { kind: 'weapon', wkey: k, rarity: 3, mag: WEAPONS[k].mag }; }

export function createBot() {
  bot = makeActor({ name: 'Bot' });
  bot.ai = {};
  S.scene.add(bot.model.root);
  S.actors.push(bot);
  bot.model.root.visible = false;
  bot.alive = false; bot.mode = 'dead';
  return bot;
}

export function respawnBot(x, z, yaw, diff = 'normal') {
  const b = bot;
  b.x = x; b.y = 0; b.z = z; b.vx = b.vy = b.vz = 0;
  b.yaw = yaw; b.alive = true; b.mode = 'ground'; b.grounded = true;
  b.hp = 100; b.shield = 100; b.crouch = false; b.height = 1.8; b.kills = 0; b.god = false;
  b.weapon = weapon('ar');
  b.model.root.visible = true;
  b.model.root.rotation.set(0, yaw, 0);
  b.model.hold('ar', 3);
  b.ai = {
    d: DIFF[diff] || DIFF.normal,
    fireCd: 0, reloadT: 0, switchT: 0, strafeDir: 1, strafeT: 0, buildCd: 0, hurtT: 0, lastHp: 200,
    orders: [], boxed: false, healT: 0, heals: 2, boxPieces: [], mats: 999,
    scanT: 0, visible: false, lastSeen: -9, reactT: 0, jumpT: rr(1, 3),
    stuckT: 0, lastX: x, lastZ: z, checkT: 0, unstuck: 0, burst: 0, pause: 0, wallCd: 0,
  };
}

function chooseWeapon(b, dist) {
  const ai = b.ai;
  let k = 'ar';
  if (dist < 11) k = 'shotgun'; else if (dist < 20) k = 'smg'; else if (dist > 75) k = 'sniper';
  if (b.weapon.wkey !== k) {
    b.weapon = weapon(k);
    b.model.hold(k, 3);
    ai.switchT = 0.55; ai.reloadT = 0;
  }
}

function idealRange(k) { return k === 'shotgun' ? 8 : k === 'smg' ? 13 : k === 'sniper' ? 45 : 20; }

function positionalShot(b, wkey) {
  const p = S.player;
  const d = Math.hypot(b.x - p.x, b.z - p.z);
  const vol = Math.pow(Math.max(0, 1 - d / 160), 1.4) * 0.9;
  const yaw = S.camera.rotation.y;
  const pan = d > 1 ? ((b.x - p.x) * Math.cos(yaw) - (b.z - p.z) * Math.sin(yaw)) / d : 0;
  sfx.shot(wkey, vol, pan * 0.8);
}

function queueBox(b) {
  const ai = b.ai;
  ai.boxed = true; ai.healT = 3.2; ai.boxPieces = [];
  for (let d = 0; d < 4; d++) ai.orders.push({ type: 'wall', dir: d, tag: d });
  ai.orders.push({ type: 'floor', ceiling: true });
}

function processOrders(b, dt, yawToTarget) {
  const ai = b.ai;
  ai.buildCd -= dt;
  if (ai.buildCd > 0 || ai.mats < 10) return;
  const o = ai.orders.shift();
  if (!o) return;
  const t = buildTargetFor(b, yawToTarget, 0, o.type, 'wood', { dir: o.dir, ceiling: o.ceiling });
  const piece = placePiece(t, 'bot');
  if (piece) {
    ai.mats -= 10;
    ai.buildCd = 0.12;
    if (o.tag !== undefined) ai.boxPieces.push({ piece, dir: o.dir });
    const p = S.player;
    const d = Math.hypot(b.x - p.x, b.z - p.z);
    if (d < 120) sfx.build((b.x - p.x) / Math.max(1, d) * 0.5);
  }
}

function botFire(b, t, dt, dist, visible) {
  const ai = b.ai, w = b.weapon, W = WEAPONS[w.wkey];
  if (ai.reloadT > 0) { ai.reloadT -= dt; if (ai.reloadT <= 0) w.mag = W.mag; return; }
  ai.fireCd -= dt; ai.switchT -= dt;
  if (w.mag <= 0) { ai.reloadT = W.reload * 1.1; return; }
  if (ai.reactT > 0) { ai.reactT -= dt; return; }
  if (ai.pause > 0) { ai.pause -= dt; return; }
  if (ai.fireCd > 0 || ai.switchT > 0) return;
  if (dist > W.range * 0.8) return;
  const desired = Math.atan2(-(t.x - b.x), -(t.z - b.z));
  if (Math.abs(angleDiff(b.yaw, desired)) > 0.14) return;
  const ox = b.x, oy = b.y + 1.55, oz = b.z;
  const e = ai.d.aimErr;
  const tx = t.x + rr(-e, e), ty = t.y + t.height * 0.62 + rr(-e, e), tz = t.z + rr(-e, e);
  _d.set(tx - ox, ty - oy, tz - oz).normalize();
  const spread = W.spread * 0.8 + ai.d.spread + dist * 0.0003;
  const mz = b.model.muzzleWorld(_m);
  shoot(b, w.wkey, w.rarity, ox, oy, oz, _d, spread, ai.d.dmg, mz);
  b.model.doFlash();
  w.mag--;
  ai.fireCd = W.rate * (W.auto ? 1.2 : 1.45) + rr(0, 0.05);
  if (W.auto) { ai.burst++; if (ai.burst >= (W.rate < 0.1 ? 9 : 5) + ((Math.random() * 3) | 0)) { ai.burst = 0; ai.pause = rr(0.25, 0.7); } }
  positionalShot(b, w.wkey);
}

export function updateBot(dt) {
  const b = bot;
  if (!b || !b.alive) { updateDead(b); return; }
  const ai = b.ai, t = S.player;
  const frozen = S.freeze || S.freezeAI || !t.alive;
  let wx = 0, wz = 0, speed = ai.d.speed, aiming = false, aimPitch = 0, jump = false;

  if (!frozen) {
    const dx = t.x - b.x, dz = t.z - b.z;
    const dist = Math.hypot(dx, dz) || 1;
    const yawTo = Math.atan2(-dx, -dz);
    const ux = dx / dist, uz = dz / dist, rx = uz, rz = -ux;
    // visao
    ai.scanT -= dt;
    if (ai.scanT <= 0) {
      ai.scanT = 0.12;
      const was = ai.visible;
      ai.visible = lineOfSight(b.x, b.y + 1.55, b.z, t.x, t.y + 1.0, t.z);
      if (ai.visible) { ai.lastSeen = S.time; if (!was) ai.reactT = ai.d.react * rr(0.6, 1.2); }
    }
    // dano recebido
    const hpNow = b.hp + b.shield;
    if (hpNow < ai.lastHp - 0.5) ai.hurtT = 1.2;
    ai.lastHp = hpNow;
    ai.hurtT -= dt; ai.wallCd -= dt;

    b.yaw += clamp(angleDiff(b.yaw, yawTo), -9 * dt, 9 * dt);
    aiming = true;
    aimPitch = Math.atan2((t.y + 1.0) - (b.y + 1.5), dist);
    chooseWeapon(b, dist);

    const heightDiff = t.y - b.y;
    if (ai.boxed) {
      // protegido numa caixa: cura e depois abre uma parede
      ai.healT -= dt;
      if (ai.healT <= 0 && ai.orders.length === 0) {
        ai.boxed = false; ai.heals--;
        b.shield = Math.min(100, b.shield + 50);
        // abre a parede virada para o jogador
        const dTo = Math.abs(dx) > Math.abs(dz) ? (dx > 0 ? 0 : 2) : (dz > 0 ? 1 : 3);
        for (const bp of ai.boxPieces) if (bp.dir === dTo) damagePiece(bp.piece, 9999);
        ai.boxPieces = [];
      }
    } else {
      const ideal = idealRange(b.weapon.wkey);
      if (ai.visible) {
        if (dist > ideal * 1.3) { wx += ux; wz += uz; } else if (dist < ideal * 0.55) { wx -= ux; wz -= uz; }
        ai.strafeT -= dt;
        if (ai.strafeT <= 0) { ai.strafeDir = Math.random() < 0.5 ? -1 : 1; ai.strafeT = rr(0.6, 1.8); }
        wx += rx * ai.strafeDir * 0.9; wz += rz * ai.strafeDir * 0.9;
        ai.jumpT -= dt;
        if (ai.jumpT <= 0) { jump = true; ai.jumpT = rr(1.0, 3.0); }
      } else {
        wx += ux; wz += uz;
      }
      // rampa para alcancar quem esta no alto
      if (heightDiff > 2.0 && dist < 50 && b.grounded && ai.orders.length === 0 && ai.mats >= 10 && ai.d.build > 0.2) {
        ai.orders.push({ type: 'ramp' });
        wx = ux; wz = uz;
      }
      // parede de cobertura
      if (ai.visible && ai.hurtT > 0 && ai.wallCd <= 0 && Math.random() < ai.d.build * dt * 2.5 && heightDiff < 2) {
        ai.orders.push({ type: 'wall' });
        ai.wallCd = rr(1.2, 2.5) / ai.d.build;
      }
      // fica fraco: faz uma caixa para se curar
      if (hpNow < 70 && ai.hurtT > 0 && ai.heals > 0 && ai.d.build >= 0.6 && ai.orders.length === 0) queueBox(b);
    }
    processOrders(b, dt, yawTo);

    // tiro: com visao, ou "suprimindo" paredes quando esta perto
    const canSee = ai.visible;
    const nearBlock = !canSee && dist < 42 && S.time - ai.lastSeen < 6 && !ai.boxed;
    if (!ai.boxed && (canSee || nearBlock)) {
      if (nearBlock) { if (ai.reactT <= 0) ai.reactT = 0; }
      botFire(b, t, dt, dist, canSee);
    }

    // preso?
    ai.checkT -= dt;
    if (ai.checkT <= 0) {
      ai.checkT = 0.6;
      if ((wx !== 0 || wz !== 0) && Math.hypot(b.x - ai.lastX, b.z - ai.lastZ) < 0.35) { ai.unstuck = rr(0.6, 1.2); ai.strafeDir = Math.random() < 0.5 ? -1 : 1; }
      ai.lastX = b.x; ai.lastZ = b.z;
    }
    if (ai.unstuck > 0) {
      ai.unstuck -= dt;
      const l2 = Math.hypot(wx, wz) || 1;
      const nx = wx / l2, nz = wz / l2;
      wx = nx * 0.3 + nz * ai.strafeDir; wz = nz * 0.3 - nx * ai.strafeDir;
      jump = Math.random() < 0.06;
    }
  } else {
    ai && ai.orders && (ai.orders.length = 0);
  }

  const l = Math.hypot(wx, wz);
  if (l > 0.001) { wx = wx / l * speed; wz = wz / l * speed; }
  const k = b.grounded ? 10 : 2;
  b.vx += (wx - b.vx) * Math.min(1, k * dt);
  b.vz += (wz - b.vz) * Math.min(1, k * dt);
  if (!b.grounded) b.vy -= GRAVITY * dt;
  if (jump && b.grounded) { b.vy = 8.5; b.grounded = false; }
  moveActor(b, dt);
  b.speed2d = Math.hypot(b.vx, b.vz);
  const m = b.model;
  m.root.position.set(b.x, b.y, b.z);
  m.root.rotation.y = b.yaw;
  const vfwd = b.vx * -Math.sin(b.yaw) + b.vz * -Math.cos(b.yaw);
  m.animate(dt, { speed: b.speed2d, vfwd, grounded: b.grounded, vy: b.vy, aim: aiming, pitch: aimPitch, swing: -1, crouch: false, run: b.speed2d > 6.2 && !aiming, reloading: ai.reloadT > 0 });
}

function updateDead(b) {
  if (!b || !b.model) return;
  const m = b.model;
  const t = S.time - (b.deadAt || 0);
  if (b.mode === 'dead' && b.deadAt !== undefined && t < 0.6) {
    m.root.rotation.x = -Math.PI / 2 * Math.min(1, t / 0.5);
  }
}

// ===== Boneco de treino =====
export function createDummy() {
  dummy = makeActor({ name: 'Boneco' });
  dummy.isDummy = true;
  S.scene.add(dummy.model.root);
  S.actors.push(dummy);
  dummy.model.root.visible = false;
  dummy.alive = false; dummy.mode = 'dead';
  dummy.model.hold('pickaxe', 0);
  return dummy;
}

export function placeDummy(x, z, yaw) {
  const d = dummy;
  d.x = x; d.z = z; d.y = supportAt(x, z, 50, 0.1);
  d.yaw = yaw; d.vx = d.vy = d.vz = 0; d.grounded = true;
  d.alive = true; d.mode = 'ground'; d.hp = 150; d.shield = 0; d.god = false;
  d.model.root.visible = true;
  d.model.root.rotation.set(0, yaw, 0);
  d.model.root.position.set(x, d.y, z);
  d.spawn = { x, z, yaw };
  d.enabled = true;
}

export function removeDummy() {
  const d = dummy;
  d.enabled = false; d.alive = false; d.mode = 'dead'; d.deadAt = undefined;
  d.model.root.visible = false;
}

export function updateDummy(dt) {
  const d = dummy;
  if (!d || !d.enabled) return;
  if (!d.alive) {
    const t = S.time - d.deadAt;
    if (t < 0.5) d.model.root.rotation.x = -Math.PI / 2 * Math.min(1, t / 0.4);
    if (t > 2.2) placeDummy(d.spawn.x, d.spawn.z, d.spawn.yaw);
    return;
  }
  d.shield = 0;
  if (d.hp < 150) d.hp = Math.min(150, d.hp + 12 * dt);
  d.model.animate(dt, { speed: 0, mode: 'ground', aim: false, pitch: 0, swing: -1, crouch: false });
}
