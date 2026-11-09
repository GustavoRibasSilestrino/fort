import * as THREE from 'three';
import { WEAPONS, RARITY, MATS } from './config.js';
import { raycast, lineOfSight } from './physics.js';
import { allPieces, damagePiece, isPiece, hooks as pieceHooks } from './pieces.js';
import { heightAt } from './terrain.js';
import { impact, tracer, explosionFx, debris } from './fx.js';
import { sfx } from './audio.js';
import { emit } from './events.js';
import { S } from './state.js';

// ===== Testes de raio contra atores =====
function raySphere(ox, oy, oz, dx, dy, dz, cx, cy, cz, r) {
  const lx = ox - cx, ly = oy - cy, lz = oz - cz;
  const b = lx * dx + ly * dy + lz * dz;
  const c = lx * lx + ly * ly + lz * lz - r * r;
  const disc = b * b - c;
  if (disc < 0) return -1;
  const s = Math.sqrt(disc);
  let t = -b - s;
  if (t < 0) t = -b + s;
  return t;
}
function rayCylinder(ox, oy, oz, dx, dy, dz, cx, cz, r, y0, y1) {
  const a = dx * dx + dz * dz;
  if (a < 1e-9) return -1;
  const lx = ox - cx, lz = oz - cz;
  const b = lx * dx + lz * dz;
  const c = lx * lx + lz * lz - r * r;
  const disc = b * b - a * c;
  if (disc < 0) return -1;
  const s = Math.sqrt(disc);
  let t = (-b - s) / a;
  if (t < 0) t = (-b + s) / a;
  if (t < 0) return -1;
  const y = oy + dy * t;
  if (y < y0 || y > y1) return -1;
  return t;
}

export const HIT = { t: 0, kind: 'none', actor: null, head: false, c: null, wkind: '', x: 0, y: 0, z: 0 };

export function traceShot(ox, oy, oz, dx, dy, dz, range, shooter) {
  let tmax = range, kind = 'none', actor = null, head = false, coll = null, wkind = '';
  const w = raycast(ox, oy, oz, dx, dy, dz, range);
  if (w) { tmax = w.t; kind = 'world'; wkind = w.kind; coll = w.c; }
  const list = S.actors;
  for (let i = 0; i < list.length; i++) {
    const a = list[i];
    if (a === shooter || !a.alive || a.mode === 'bus' || a.mode === 'dead') continue;
    const vx = a.x - ox, vy = a.y + 0.9 - oy, vz = a.z - oz;
    const t0 = vx * dx + vy * dy + vz * dz;
    if (t0 < -1.5 || t0 > tmax + 1.5) continue;
    const qx = vx - dx * t0, qy = vy - dy * t0, qz = vz - dz * t0;
    if (qx * qx + qy * qy + qz * qz > 6) continue;
    const hy = a.y + a.height - 0.2;
    const th = raySphere(ox, oy, oz, dx, dy, dz, a.x, hy, a.z, 0.27);
    const tb = rayCylinder(ox, oy, oz, dx, dy, dz, a.x, a.z, 0.44, a.y, a.y + a.height - 0.4);
    let t = -1, hd = false;
    if (th >= 0 && (tb < 0 || th <= tb + 0.15)) { t = th; hd = true; } else if (tb >= 0) { t = tb; }
    if (t >= 0 && t < tmax) { tmax = t; kind = 'actor'; actor = a; head = hd; coll = null; }
  }
  HIT.t = tmax; HIT.kind = kind; HIT.actor = actor; HIT.head = head; HIT.c = coll; HIT.wkind = wkind;
  HIT.x = ox + dx * tmax; HIT.y = oy + dy * tmax; HIT.z = oz + dz * tmax;
  return HIT;
}

// ===== Dano =====
export function damageActor(v, dmg, attacker, head, wname) {
  if (!v.alive || v.mode === 'bus' || v.mode === 'dead') return;
  if (v.god) {
    if (attacker && attacker.isPlayer && attacker !== v) emit('hitmarker', { head, dmg, killed: false, x: v.x, y: v.y + 1.8, z: v.z });
    if (v.isPlayer) emit('playerHurt', { dmg, attacker });
    return;
  }
  let rem = dmg;
  if (v.shield > 0) { const s = Math.min(v.shield, rem); v.shield -= s; rem -= s; }
  v.hp -= rem;
  v.lastHurtBy = attacker;
  v.lastHurtAt = S.time;
  if (v.isPlayer) emit('playerHurt', { dmg, attacker });
  if (attacker && attacker.isPlayer && attacker !== v) {
    emit('hitmarker', { head, dmg, killed: v.hp <= 0, x: v.x, y: v.y + 1.8, z: v.z });
  }
  if (v.hp <= 0) { v.hp = 0; killActor(v, attacker, wname); }
}

export function killActor(v, attacker, wname) {
  if (!v.alive) return;
  v.alive = false;
  v.mode = 'dead';
  v.deadAt = S.time;
  if (attacker && attacker !== v) attacker.kills++;
  emit('kill', { victim: v, attacker, weapon: wname });
  if (attacker && attacker.isPlayer) sfx.kill();
}

// ===== Tiro =====
const _d = new THREE.Vector3(), _r = new THREE.Vector3(), _u = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);
const _m = new THREE.Vector3();

export function shoot(shooter, wkey, rarity, ox, oy, oz, dir, spread, dmgMult, muzzle) {
  const W = WEAPONS[wkey];
  if (W.projectile) { launchRocket(shooter, wkey, rarity, ox, oy, oz, dir, muzzle); return; }
  _r.crossVectors(dir, _up).normalize();
  _u.crossVectors(_r, dir).normalize();
  const rarMult = RARITY[rarity].dmg;
  const isPlayer = shooter.isPlayer;
  for (let p = 0; p < W.pellets; p++) {
    const sx = (Math.random() + Math.random() - 1) * spread * 1.6;
    const sy = (Math.random() + Math.random() - 1) * spread * 1.6;
    _d.copy(dir).addScaledVector(_r, sx).addScaledVector(_u, sy).normalize();
    const h = traceShot(ox, oy, oz, _d.x, _d.y, _d.z, W.range, shooter);
    if (muzzle) tracer(muzzle.x, muzzle.y, muzzle.z, h.x, h.y, h.z, p === 0 || W.pellets === 1 ? '#fff3b0' : '#ffe9a0', W.pellets > 1 ? 0.018 : 0.035);
    if (h.kind === 'actor') {
      let dmg = W.dmg * rarMult * dmgMult;
      if (W.pellets > 1) dmg *= 1 - Math.min(1, Math.max(0, (h.t - 8) / (W.range - 8))) * 0.65;
      if (h.head) dmg *= W.head;
      impact(h.x, h.y, h.z, 'flesh');
      damageActor(h.actor, dmg, shooter, h.head, W.name);
      if (isPlayer) { sfx.hit(); }
    } else if (h.kind === 'world') {
      const o = h.c && h.c.owner;
      if (o) {
        if (isPiece(o)) {
          damagePiece(o, W.struct * rarMult * (isPlayer ? 1 : 0.5));
          impact(h.x, h.y, h.z, 'dust', '#d9b98a');
        } else impact(h.x, h.y, h.z, 'dust', '#8a6a3a');
      } else impact(h.x, h.y, h.z, 'spark');
    } else if (h.kind === 'none') {
      // nada
    }
  }
}

// ===== Foguetes =====
const rockets = [];
let rocketGeo = null, rocketMat = null;
function launchRocket(shooter, wkey, rarity, ox, oy, oz, dir, muzzle) {
  if (!rocketGeo) {
    rocketGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.7, 8); rocketGeo.rotateX(Math.PI / 2);
    rocketMat = new THREE.MeshLambertMaterial({ color: '#c9d2dc' });
  }
  // o foguete sai do cano mas mira no ponto da mira
  const h = traceShot(ox, oy, oz, dir.x, dir.y, dir.z, 400, shooter);
  const sx = muzzle ? muzzle.x : ox, sy = muzzle ? muzzle.y : oy, sz = muzzle ? muzzle.z : oz;
  const d = new THREE.Vector3(h.x - sx, h.y - sy, h.z - sz);
  if (d.lengthSq() < 4) d.copy(dir); d.normalize();
  const m = new THREE.Mesh(rocketGeo, rocketMat);
  m.position.set(sx, sy, sz);
  m.lookAt(sx + d.x, sy + d.y, sz + d.z);
  S.scene.add(m);
  rockets.push({ m, x: sx, y: sy, z: sz, dx: d.x, dy: d.y, dz: d.z, owner: shooter, rarity, t: 0, speed: 62 });
  S.shake = Math.max(S.shake, shooter.isPlayer ? 0.25 : 0);
}

export function updateRockets(dt) {
  for (let i = rockets.length - 1; i >= 0; i--) {
    const r = rockets[i];
    const step = r.speed * dt;
    const h = traceShot(r.x, r.y, r.z, r.dx, r.dy, r.dz, step + 0.4, r.owner);
    r.t += dt;
    if (h.kind !== 'none' || r.t > 7) {
      const px = h.kind !== 'none' ? h.x - r.dx * 0.3 : r.x, py = h.kind !== 'none' ? h.y - r.dy * 0.3 : r.y, pz = h.kind !== 'none' ? h.z - r.dz * 0.3 : r.z;
      explode(px, py, pz, 7, WEAPONS.rocket.dmg * RARITY[r.rarity].dmg, r.owner, 'Lança-Foguetes');
      S.scene.remove(r.m);
      rockets.splice(i, 1);
      continue;
    }
    r.x += r.dx * step; r.y += r.dy * step; r.z += r.dz * step;
    r.m.position.set(r.x, r.y, r.z);
    impact(r.x - r.dx * 0.5, r.y - r.dy * 0.5, r.z - r.dz * 0.5, 'dust', '#bbbbbb');
    if (Math.random() < 0.7) impact(r.x - r.dx * 0.6, r.y - r.dy * 0.6, r.z - r.dz * 0.6, 'spark');
  }
}

export function explode(x, y, z, radius, dmg, attacker, wname) {
  explosionFx(x, y, z, radius);
  const p = S.player;
  const dist = p ? Math.hypot(p.x - x, p.z - z) : 999;
  const vol = Math.max(0, 1 - dist / 300);
  sfx.explosion(vol * 1.2, 0);
  for (const a of S.actors) {
    if (!a.alive || a.mode === 'bus') continue;
    const d = Math.hypot(a.x - x, a.y + 0.9 - y, a.z - z);
    if (d > radius + 0.5) continue;
    let k = 1 - (d / (radius + 0.5)) * 0.75;
    if (!lineOfSight(x, y + 0.2, z, a.x, a.y + 1.0, a.z)) k *= 0.45;
    if (a === attacker) k *= 0.55;
    damageActor(a, dmg * k, attacker, false, wname);
    if (a.isPlayer) { a.vy += 6 * k; S.shake = Math.max(S.shake, 0.6); }
  }
  const toKill = [];
  for (const pc of allPieces) {
    const c = pc.center();
    const d = Math.hypot(c[0] - x, c[1] - y, c[2] - z);
    if (d < radius + 2.2) toKill.push([pc, 450 * (1 - d / (radius + 2.6))]);
  }
  for (const [pc, dm] of toKill) damagePiece(pc, dm);
}

// efeito quando uma peca quebra
export function initCombatHooks() {
  pieceHooks.onDestroy = (p) => {
    const c = p.center();
    debris(c[0], c[1], c[2], '#' + p.color.getHexString(), 16);
    const pl = S.player;
    const d = pl ? Math.hypot(pl.x - c[0], pl.z - c[2]) : 999;
    sfx.breakPiece(Math.max(0, 1 - d / 120), 0);
  };
}
