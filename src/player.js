import * as THREE from 'three';
import { GRAVITY, WEAPONS, CONSUMABLES, MATS, STEP, G } from './config.js';
import { clamp, lerp, TAU } from './util.js';
import { makeActor } from './actors.js';
import { Inventory } from './inventory.js';
import { moveActor, raycast, supportAt } from './physics.js';
import { ghostGeometry, damagePiece, pieceExists, isPiece, allPieces, canPlace, findSnap } from './pieces.js';
import { buildTargetAim, placePiece } from './build.js';
import { shoot, traceShot, damageActor } from './combat.js';
import { startEdit, updateEdit, endEdit, isEditing } from './edit.js';
import { impact, debris } from './fx.js';
import { sfx } from './audio.js';
import { mouse, input } from './input.js';
import { down, hit } from './bind.js';
import { emit } from './events.js';
import { S } from './state.js';
import { sendBuild, sendState } from './net.js';

export const player = makeActor({ name: 'Você', isPlayer: true });
player.inv = new Inventory();

export const ps = {
  camYaw: 0, camPitch: 0,
  fireCd: 0, fireBuf: 0, reloadT: 0, reloadTotal: 0, switchT: 0,
  bloom: 0, recoil: 0, sinceShot: 9,
  swingT: -1, hitDone: false,
  useT: 0, useTotal: 0,
  aiming: false, aimK: 0, scoped: false,
  buildMode: false, buildType: 'wall', buildMat: 'wood', buildTarget: null, buildValid: false,
  stepDist: 0, fov: 80, camDist: 3.8, buildCd: 0,
  sprinting: false, crossSpread: 0,
  sliding: false, slideT: 0, slideSpeed: 0, slideX: 0, slideZ: 0, airT: 0,
};

const _f = new THREE.Vector3(), _m = new THREE.Vector3();

// ===== Inventario inicial =====
export function giveLoadout(kind) {
  const inv = new Inventory();
  const w = (k) => ({ kind: 'weapon', wkey: k, rarity: 3, mag: WEAPONS[k].mag });
  if (kind === 'freebuild') inv.slots = [{ kind: 'pickaxe' }, w('ar'), w('shotgun'), w('sniper'), w('smg'), w('rocket')];
  else inv.slots = [{ kind: 'pickaxe' }, w('ar'), w('shotgun'), w('smg'), w('sniper'), { kind: 'cons', ckey: 'shield_big', count: 3 }];
  for (const k in inv.ammo) inv.ammo[k] = 999;
  const m = kind === 'freebuild' ? 9999 : 999;
  inv.mats = { wood: m, stone: m, metal: m };
  inv.sel = kind === 'freebuild' ? 0 : 1;
  player.inv = inv;
}

export function respawnPlayer(x, z, yaw) {
  const p = player;
  p.x = x; p.y = 0; p.z = z; p.vx = p.vy = p.vz = 0;
  p.alive = true; p.mode = 'ground'; p.grounded = true; p.hp = 100; p.shield = S.mode === 'duel' ? 100 : 0;
  p.crouch = false; p.height = 1.8; p.kills = 0;
  p.god = S.mode === 'freebuild';
  p.model.root.visible = true;
  p.model.root.rotation.set(0, yaw, 0);
  p.model.root.scale.set(1, 1, 1);
  ps.camYaw = yaw; ps.camPitch = 0;
  ps.reloadT = 0; ps.useT = 0; ps.swingT = -1; ps.aiming = false; ps.aimK = 0; ps.scoped = false;
  ps.fireCd = 0; ps.switchT = 0; ps.bloom = 0; ps.recoil = 0; ps.camDist = 3.8;
  ps.sliding = false; ps.sprinting = false;
  endEdit(false);
  setBuildMode(false);
  for (const s of player.inv.slots) if (s && s.kind === 'weapon') s.mag = WEAPONS[s.wkey].mag;
}

export function fwdVec(yaw, pitch, out) {
  const cp = Math.cos(pitch);
  return out.set(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp);
}
function curSlot() { return player.inv.slots[player.inv.sel]; }
function curWeapon() { const s = curSlot(); return s && s.kind === 'weapon' ? s : null; }

// ===== Camera =====
const camPos = new THREE.Vector3();
function updateCamera(dt) {
  const p = player, c = S.camera;
  const w = curWeapon();
  const W = w ? WEAPONS[w.wkey] : null;
  const yaw = ps.camYaw, pitch = ps.camPitch;
  const baseFov = S.settings.fov || 80;
  ps.scoped = false;

  if (p.mode === 'dead') {
    const t = S.time * 0.35;
    c.position.set(p.x + Math.sin(t) * 7, p.y + 4, p.z + Math.cos(t) * 7);
    c.lookAt(p.x, p.y + 0.6, p.z);
    S.shadowFocus = { x: p.x, y: p.y, z: p.z };
    return;
  }

  ps.aimK = lerp(ps.aimK, ps.aiming ? 1 : 0, Math.min(1, dt * 12));
  const eyeH = ps.sliding ? 0.95 : p.crouch ? 1.2 : 1.55;
  const px = p.x, py = p.y + eyeH, pz = p.z;
  fwdVec(yaw, pitch, _f);
  const rx = Math.cos(yaw), rz = -Math.sin(yaw);
  // camera dinamica: perto de construcoes aproxima, longe afasta
  let nearD = 1e9;
  for (const pc of allPieces) {
    const cc = pc.center();
    const d = Math.hypot(cc[0] - p.x, cc[2] - p.z);
    if (d < nearD) nearD = d;
  }
  const nearT = nearD < 4 ? 0.62 : nearD > 16 ? 1.12 : 1.12 - 0.5 * (1 - (nearD - 4) / 12) ** 1.3;
  ps.nearK = lerp(ps.nearK === undefined ? 1 : ps.nearK, nearT, Math.min(1, dt * 3));
  const camBase = (S.settings.camDist || 2.2) * ps.nearK;
  const dist = ps.buildMode || isEditing() ? camBase + 0.4 : lerp(camBase, camBase * 0.82, ps.aimK);
  const shoulder = lerp(0.5, 0.7, ps.aimK);
  const ox = px + rx * shoulder, oy = py, oz = pz + rz * shoulder;
  let dx = -_f.x * dist, dy = -_f.y * dist + 0.2, dz = -_f.z * dist;
  const len = Math.hypot(dx, dy, dz);
  dx /= len; dy /= len; dz /= len;
  let allowed = len;
  const r = raycast(ox, oy, oz, dx, dy, dz, len);
  if (r) allowed = Math.max(0.5, r.t - 0.3);
  ps.camDist = allowed < ps.camDist ? allowed : lerp(ps.camDist, allowed, Math.min(1, dt * 5));
  const cd = Math.min(ps.camDist, len);
  camPos.set(ox + dx * cd, oy + dy * cd, oz + dz * cd);
  if (camPos.y < 0.25) camPos.y = 0.25;

  if (W && W.scope && ps.aimK > 0.9 && ps.aiming) {
    ps.scoped = true;
    camPos.set(px + _f.x * 0.25, py + _f.y * 0.25, pz + _f.z * 0.25);
  }
  if (S.shake > 0) {
    const s = S.shake * 0.25;
    camPos.x += (Math.random() - 0.5) * s; camPos.y += (Math.random() - 0.5) * s; camPos.z += (Math.random() - 0.5) * s;
    S.shake = Math.max(0, S.shake - dt * 2.2);
  }
  c.position.copy(camPos);
  c.rotation.set(pitch, yaw, 0, 'YXZ');

  let fovT = baseFov;
  if (W && ps.aimK > 0.01) fovT = lerp(baseFov, baseFov * W.zoom, ps.aimK);
  if (ps.sprinting && Math.hypot(p.vx, p.vz) > 7) fovT += 4;
  if (ps.sliding) fovT += 6;
  if (W && W.scope && ps.aiming) fovT = lerp(baseFov, 24, ps.aimK);
  ps.fov = lerp(ps.fov, fovT, Math.min(1, dt * 10));
  if (Math.abs(c.fov - ps.fov) > 0.01) { c.fov = ps.fov; c.updateProjectionMatrix(); }
  S.shadowFocus = { x: p.x, y: 0, z: p.z };
}

function look() {
  if (!input.locked) return;
  const w = curWeapon();
  const W = w ? WEAPONS[w.wkey] : null;
  const st = S.settings;
  let sens = 0.0022 * st.sens;
  if (ps.aiming && W) sens *= W.scope ? 0.3 * st.scopeSens : 0.7 * st.adsSens;
  ps.camYaw -= mouse.dx * sens;
  ps.camPitch = clamp(ps.camPitch + (st.invertY ? 1 : -1) * mouse.dy * sens, -1.45, 1.45);
  if (ps.camYaw > Math.PI) ps.camYaw -= TAU; else if (ps.camYaw < -Math.PI) ps.camYaw += TAU;
}

// ===== Movimento =====
function endSlide() {
  if (!ps.sliding) return;
  ps.sliding = false;
  const p = player;
  p.crouch = down('crouch');
  p.height = p.crouch ? 1.3 : 1.8;
}

function startSlide(hv) {
  const p = player;
  ps.sliding = true; ps.slideT = 0; ps.airT = 0;
  const l = hv || 1;
  ps.slideX = p.vx / l; ps.slideZ = p.vz / l;
  ps.slideSpeed = Math.max(hv, 8.2) * 1.4;
  p.crouch = true; p.height = 1.1;
  sfx.slide && sfx.slide();
}

function groundMove(dt, frozen) {
  const p = player;
  const yaw = ps.camYaw;
  const fx = -Math.sin(yaw), fz = -Math.cos(yaw), rx = Math.cos(yaw), rz = -Math.sin(yaw);
  let ix = 0, iz = 0;
  if (!frozen) {
    if (down('forward')) iz += 1; if (down('back')) iz -= 1; if (down('right')) ix += 1; if (down('left')) ix -= 1;
  }
  const moving = ix !== 0 || iz !== 0;
  const hv0 = Math.hypot(p.vx, p.vz);

  // agachar (segurando) quando nao esta deslizando
  if (!ps.sliding) {
    const wantCrouch = down('crouch') && !frozen;
    if (wantCrouch !== p.crouch) { p.crouch = wantCrouch; p.height = wantCrouch ? 1.3 : 1.8; }
  }
  // corrida: automatica (segurando W) ou segurando a tecla de correr
  const wantRun = S.settings.autoSprint ? true : down('sprint');
  ps.sprinting = wantRun && iz > 0 && !ps.aiming && !p.crouch && !ps.sliding && ps.sinceShot > 0.35 && ps.useT <= 0 && !frozen;

  // deslizar: tecla de deslizar (ou agachar) enquanto corre
  if (!frozen && !ps.sliding && p.grounded && hv0 > 6.2 && (hit('slide') || (hit('crouch') && ps.sprinting))) startSlide(hv0);

  if (ps.sliding) {
    ps.slideT += dt;
    // direcao quase fixa; A/D curva de leve
    if (ix !== 0 && p.grounded) {
      const a = -ix * 0.9 * dt, c = Math.cos(a), s = Math.sin(a);
      const nx = ps.slideX * c - ps.slideZ * s, nz = ps.slideX * s + ps.slideZ * c;
      ps.slideX = nx; ps.slideZ = nz;
    }
    if (p.grounded) {
      ps.airT = 0;
      const ahead = supportAt(p.x + ps.slideX * 0.8, p.z + ps.slideZ * 0.8, p.y + STEP);
      const drop = p.y - ahead;
      if (drop > 0.15) ps.slideSpeed = Math.min(20, ps.slideSpeed + 15 * dt); // descendo escada/rampa: acelera
      else ps.slideSpeed -= 6.2 * dt;                                         // atrito
      p.vx = ps.slideX * ps.slideSpeed; p.vz = ps.slideZ * ps.slideSpeed;
    } else {
      ps.airT += dt;
    }
    // termina quando perde velocidade, sai do chao, pula ou aperta deslizar de novo
    if (ps.slideSpeed < 4.4 || ps.airT > 0.35 || (keysJump() && p.grounded) || (hit('slide') && ps.slideT > 0.25)) endSlide();
  }

  if (!ps.sliding) {
    let sp = 5.6;
    if (ps.sprinting) sp = 8.2;
    if (p.crouch) sp *= 0.55;
    if (ps.aiming) sp *= 0.7;
    if (ps.useT > 0) sp *= 0.6;
    let wx = 0, wz = 0;
    if (moving) {
      const l = Math.hypot(ix, iz);
      wx = (fx * iz + rx * ix) / l * sp; wz = (fz * iz + rz * ix) / l * sp;
    }
    const k = p.grounded ? 13 : 2.5;
    p.vx += (wx - p.vx) * Math.min(1, k * dt);
    p.vz += (wz - p.vz) * Math.min(1, k * dt);
  }
  if (!p.grounded) p.vy -= GRAVITY * dt;
  if (!frozen && keysJump() && p.grounded && (!p.crouch || ps.sliding)) { p.vy = 8.7; p.grounded = false; sfx.jump(); }
  p.yaw = yaw;
  const wasGrounded = p.grounded;
  moveActor(p, dt);
  if (!wasGrounded && p.grounded) sfx.land();
  const hv = Math.hypot(p.vx, p.vz);
  if (p.grounded && hv > 1 && !ps.sliding) {
    ps.stepDist += hv * dt;
    if (ps.stepDist > 2.3) { ps.stepDist = 0; sfx.step(p.crouch ? 0.4 : 1); }
  }
  p.speed2d = hv;
}
const keysJump = () => down('jump');

// ===== Armas =====
function startReload() {
  const w = curWeapon();
  if (!w || ps.reloadT > 0) return;
  const W = WEAPONS[w.wkey];
  if (w.mag >= W.mag) return;
  ps.reloadT = ps.reloadTotal = W.reload;
  sfx.reload();
}
function finishReload() {
  const w = curWeapon();
  if (!w) return;
  w.mag = WEAPONS[w.wkey].mag;
}

function fireWeapon(w) {
  const p = player, W = WEAPONS[w.wkey];
  const c = S.camera;
  c.getWorldDirection(_f);
  let spread = W.spread;
  if (ps.aiming) spread *= W.scope ? 0.02 : 0.45;
  if (Math.hypot(p.vx, p.vz) > 2) spread *= 1.35;
  if (p.crouch && !ps.sliding) spread *= 0.7;
  if (!p.grounded) spread *= 1.5;
  spread += ps.bloom;
  const mz = p.model.muzzleWorld(_m);
  shoot(p, w.wkey, w.rarity, c.position.x, c.position.y, c.position.z, _f, spread, 1, mz);
  ps.bloom = Math.min(0.05, ps.bloom + W.spread * 0.18 + 0.002);
  const kick = W.kick * (ps.aiming ? 0.6 : 1) * (0.8 + Math.random() * 0.4);
  ps.camPitch += kick; ps.recoil += kick;
  ps.camYaw += (Math.random() - 0.5) * kick * 0.8;
  p.model.doFlash();
  sfx.shot(w.wkey, 1, 0);
  S.shake = Math.max(S.shake, W.kick * 6);
  ps.sinceShot = 0;
}

function pickaxeHit() {
  const p = player, c = S.camera;
  c.getWorldDirection(_f);
  const h = traceShot(p.x, p.y + 1.5, p.z, _f.x, _f.y, _f.z, 3.1, p);
  if (h.kind === 'actor') {
    damageActor(h.actor, 20, p, h.head, 'Picareta');
    impact(h.x, h.y, h.z, 'flesh');
    sfx.pickaxe('wood');
    return;
  }
  if (h.kind === 'world') {
    const o = h.c && h.c.owner;
    if (isPiece(o)) {
      if (!S.infMats && o.mat) {
        const before = player.inv.mats[o.mat];
        player.inv.addMats(o.mat, 10);
        const n = player.inv.mats[o.mat] - before;
        if (n > 0) emit('gain', { mat: o.mat, n });
      }
      damagePiece(o, S.mode === 'freebuild' ? 160 : 55);
      impact(h.x, h.y, h.z, 'dust', '#c9a070');
      sfx.pickaxe(o.mat === 'metal' ? 'metal' : 'wood');
    } else { impact(h.x, h.y, h.z, 'dust', '#a89a70'); sfx.pickaxe('wood'); }
  }
}

function applyConsumable(s) {
  const p = player, d = CONSUMABLES[s.ckey];
  if (d.heal) p.hp = Math.min(Math.max(p.hp, d.capHp), p.hp + d.heal);
  if (d.shield) p.shield = Math.min(Math.max(p.shield, d.capSh), p.shield + d.shield);
  sfx.heal();
  s.count--;
  if (s.count <= 0) player.inv.removeSlot(player.inv.sel);
}

function selectSlot(i) {
  const inv = player.inv;
  if (i < 0 || i > 5 || !inv.slots[i]) return;
  if (ps.buildMode) setBuildMode(false);
  if (inv.sel === i) return;
  inv.sel = i;
  ps.reloadT = 0; ps.useT = 0; ps.swingT = -1; ps.switchT = 0.28; ps.fireBuf = 0;
}

function weaponLogic(dt) {
  const p = player;
  const s = curSlot();
  ps.fireCd -= dt; ps.switchT -= dt; ps.sinceShot += dt;
  ps.bloom = Math.max(0, ps.bloom - dt * 0.05);
  if (ps.sinceShot > 0.12 && ps.recoil > 0) {
    const rec = Math.min(ps.recoil, ps.recoil * dt * 5 + 0.0005);
    ps.recoil -= rec; ps.camPitch -= rec * 0.7;
  }
  ps.aiming = false;
  if (ps.buildMode || !s) return;
  if (s.kind === 'weapon') {
    const W = WEAPONS[s.wkey];
    ps.aiming = mouse.r && ps.reloadT <= 0 && ps.switchT <= 0;
    if (ps.reloadT > 0) { ps.reloadT -= dt; if (ps.reloadT <= 0) finishReload(); }
    if (mouse.lp) ps.fireBuf = 0.2;
    ps.fireBuf -= dt;
    const want = W.auto ? mouse.l : ps.fireBuf > 0;
    if (want && ps.fireCd <= 0 && ps.reloadT <= 0 && ps.switchT <= 0) {
      if (s.mag > 0) { fireWeapon(s); s.mag--; ps.fireCd = W.rate; ps.fireBuf = 0; }
      else { startReload(); ps.fireCd = 0.2; }
    }
    if (hit('reload')) startReload();
    if (s.mag === 0 && ps.reloadT <= 0 && ps.fireCd <= 0) startReload();
  } else if (s.kind === 'pickaxe') {
    if (ps.swingT >= 0) {
      ps.swingT += dt / 0.55;
      if (!ps.hitDone && ps.swingT >= 0.4) { ps.hitDone = true; pickaxeHit(); }
      if (ps.swingT >= 1) ps.swingT = -1;
    } else if (mouse.l && ps.switchT <= 0) { ps.swingT = 0; ps.hitDone = false; sfx.swing(); }
  } else if (s.kind === 'cons') {
    const d = CONSUMABLES[s.ckey];
    const canUse = (d.heal && p.hp < d.capHp) || (d.shield && p.shield < d.capSh);
    if (mouse.l && canUse && ps.switchT <= 0) {
      if (ps.useT <= 0) ps.useTotal = d.time;
      ps.useT += dt;
      if (ps.useT >= d.time) { ps.useT = 0; applyConsumable(s); }
    } else ps.useT = 0;
  }
}

// ===== Construcao =====
let ghost = null, ghostKey = '', ghostOk, ghostBad;
function ensureGhost() {
  if (ghost) return;
  ghostOk = new THREE.MeshBasicMaterial({ color: '#4dff88', transparent: true, opacity: 0.4, depthWrite: false, side: THREE.DoubleSide });
  ghostBad = new THREE.MeshBasicMaterial({ color: '#ff4d4d', transparent: true, opacity: 0.4, depthWrite: false, side: THREE.DoubleSide });
  ghost = new THREE.Mesh(new THREE.BufferGeometry(), ghostOk);
  ghost.frustumCulled = false;
  ghost.renderOrder = 8;
  S.scene.add(ghost);
}
export function setBuildMode(on) {
  if (on === ps.buildMode) return;
  ps.buildMode = on;
  ps.swingT = -1; ps.useT = 0; ps.aiming = false;
  if (on) ensureGhost(); else if (ghost) ghost.visible = false;
}

function buildLogic(dt) {
  const p = player, inv = p.inv;
  ps.buildCd -= dt;
  S.camera.getWorldDirection(_f);
  let t = buildTargetAim(p, S.camera.position, _f, ps.camYaw, ps.buildType, ps.buildMat);
  if (pieceExists(t) || !canPlace(t, p, ps.camYaw)) {
    const sn = findSnap(ps.buildType, p, S.camera.position, _f, ps.buildMat, t.dir, ps.camYaw);
    if (sn) t = sn;
  }
  const cost = 10;
    ps.buildValid = !pieceExists(t) && canPlace(t, p, ps.camYaw) && (S.infMats || inv.mats[ps.buildMat] >= cost);
  ps.buildTarget = t;
  ensureGhost();
  const key = `${t.type}|${t.axis || ''}|${t.i}|${t.j}|${Math.round(t.y * 4)}|${t.dir ?? ''}`;
  if (key !== ghostKey) { ghost.geometry.dispose(); ghost.geometry = ghostGeometry(t); ghostKey = key; }
  ghost.visible = true;
  ghost.material = ps.buildValid ? ghostOk : ghostBad;
  if (mouse.l && ps.buildCd <= 0) {
    ps.buildCd = 0.09;
    if (ps.buildValid) {
      const piece = placePiece(t, 'player');
      if (piece) {
        if (!S.infMats) inv.mats[ps.buildMat] -= cost;
        sendBuild(t);
        sfx.build();
        const c = piece.center();
        debris(c[0], Math.max(0.3, c[1] - 0.8), c[2], MATS[ps.buildMat].color, 4);
      }
    } else if (mouse.lp) sfx.empty();
  }
}

function inputActions() {
  const inv = player.inv;
  for (let i = 0; i < 6; i++) if (hit('slot' + (i + 1))) selectSlot(i);
  if (mouse.wheel !== 0) {
    let i = inv.sel;
    for (let k = 0; k < 6; k++) { i = (i + mouse.wheel + 6) % 6; if (inv.slots[i]) { selectSlot(i); break; } }
  }
  if (hit('buildToggle')) setBuildMode(!ps.buildMode);
  if (hit('wall')) { ps.buildType = 'wall'; setBuildMode(true); }
  if (hit('floor')) { ps.buildType = 'floor'; setBuildMode(true); }
  if (hit('stairs')) { ps.buildType = 'ramp'; setBuildMode(true); }
  if (hit('roof')) { ps.buildType = 'roof'; setBuildMode(true); }
  if (hit('material')) { ps.buildMat = ps.buildMat === 'wood' ? 'stone' : ps.buildMat === 'stone' ? 'metal' : 'wood'; ghostKey = ''; }
  if (ps.buildMode && mouse.rp) setBuildMode(false);
}

function syncModel(dt) {
  const p = player, m = p.model;
  m.root.position.set(p.x, p.y, p.z);
  m.root.rotation.y = ps.sliding ? Math.atan2(-ps.slideX, -ps.slideZ) : p.yaw;
  const s = curSlot();
  let hk = null, hr = 0;
  if (ps.buildMode || isEditing() || (s && s.kind === 'cons')) hk = null;
  else if (s && s.kind === 'weapon') { hk = s.wkey; hr = s.rarity; }
  else hk = 'pickaxe';
  m.hold(hk, hr);
  const hv = Math.hypot(p.vx, p.vz);
  const vfwd = p.vx * -Math.sin(p.yaw) + p.vz * -Math.cos(p.yaw);
  m.animate(dt, {
    speed: hv, vfwd: ps.sliding ? hv : vfwd, grounded: p.grounded, vy: p.vy, aim: ps.aiming, pitch: ps.camPitch, swing: ps.swingT,
    crouch: p.crouch && !ps.sliding, slide: ps.sliding, run: ps.sprinting, reloading: ps.reloadT > 0,
  });
  m.root.visible = !ps.scoped;
}

export function updatePlayer(dt) {
  const p = player;
  if (p.mode === 'dead') {
    const t = S.time - (p.deadAt || 0);
    p.model.root.rotation.x = -Math.PI / 2 * Math.min(1, t / 0.5);
    p.model.hold(null);
    ps.sliding = false;
    updateCamera(dt);
    return;
  }
  const frozen = !!S.freeze;
  look();
  groundMove(dt, frozen);
  updateCamera(dt);
  if (!frozen) {
    if (hit('edit') && !isEditing()) { setBuildMode(false); startEdit(); }
    if (isEditing()) {
      ps.aiming = false; ps.swingT = -1;
      updateEdit(dt);
      ps.sinceShot += dt;
    } else {
      inputActions();
      weaponLogic(dt);
      if (ps.buildMode) buildLogic(dt);
    }
    const s = curSlot();
    p.weapon = s && s.kind === 'weapon' ? s : null;
  } else { ps.aiming = false; }
  if (p.god) p.hp = 100;
  // abertura da mira: cresce com o disparo, movimento e pulo
  const moveSp = Math.hypot(p.vx, p.vz);
  let spT = ps.bloom * 650 + (moveSp > 2 ? 5 : 0) + (p.grounded ? 0 : 7);
  if (ps.aiming) spT *= 0.4;
  ps.crossSpread += (Math.min(36, spT) - ps.crossSpread) * Math.min(1, dt * 14);
  syncModel(dt);
  { const sl = curSlot(); sendState(dt, p, ps, sl && sl.kind === 'weapon' ? sl.wkey : 'pickaxe'); }
}
