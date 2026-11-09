import * as THREE from 'three';
import { S } from './state.js';

// Particulas, rastros de bala e explosoes
const MAXP = 700;
let pm, tracers = [], blasts = [];
const px = new Float32Array(MAXP), py = new Float32Array(MAXP), pz = new Float32Array(MAXP);
const vx = new Float32Array(MAXP), vy = new Float32Array(MAXP), vz = new Float32Array(MAXP);
const life = new Float32Array(MAXP), maxLife = new Float32Array(MAXP), size = new Float32Array(MAXP), grav = new Float32Array(MAXP);
let head = 0;
const dummy = new THREE.Object3D();
const _col = new THREE.Color();

export function initFx(scene) {
  const geo = new THREE.BoxGeometry(1, 1, 1);
  pm = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ color: '#ffffff' }), MAXP);
  pm.frustumCulled = false;
  dummy.scale.set(0, 0, 0); dummy.updateMatrix();
  for (let i = 0; i < MAXP; i++) { pm.setMatrixAt(i, dummy.matrix); pm.setColorAt(i, _col.set('#ffffff')); }
  scene.add(pm);

  const tgeo = new THREE.BoxGeometry(1, 1, 1);
  for (let i = 0; i < 40; i++) {
    const m = new THREE.Mesh(tgeo, new THREE.MeshBasicMaterial({ color: '#fff3b0', transparent: true, opacity: 0.9, depthWrite: false }));
    m.visible = false; m.frustumCulled = false; m.userData.t = 0;
    scene.add(m); tracers.push(m);
  }
  const sg = new THREE.SphereGeometry(1, 14, 10);
  for (let i = 0; i < 6; i++) {
    const m = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ color: '#ff9a2a', transparent: true, opacity: 0.8, depthWrite: false }));
    m.visible = false; m.userData.t = 0; m.userData.r = 1;
    scene.add(m); blasts.push(m);
  }
}

export function burst(x, y, z, color, n, speed, lifeT, sz, gravity = 12, spreadY = 0.6) {
  _col.set(color);
  for (let k = 0; k < n; k++) {
    const i = head; head = (head + 1) % MAXP;
    px[i] = x; py[i] = y; pz[i] = z;
    const a = Math.random() * 6.283, u = (Math.random() - 0.3) * 2 * spreadY, s = speed * (0.35 + Math.random() * 0.65);
    const r = Math.sqrt(Math.max(0, 1 - u * u));
    vx[i] = Math.cos(a) * r * s; vz[i] = Math.sin(a) * r * s; vy[i] = u * s + speed * 0.25;
    life[i] = maxLife[i] = lifeT * (0.6 + Math.random() * 0.4);
    size[i] = sz * (0.6 + Math.random() * 0.8);
    grav[i] = gravity;
    pm.setColorAt(i, _col);
  }
  pm.instanceColor.needsUpdate = true;
}

// faisca / poeira de impacto
export function impact(x, y, z, kind = 'dust', color = '#cfc6a8') {
  if (kind === 'spark') burst(x, y, z, '#ffd36a', 6, 5, 0.25, 0.07, 10);
  else if (kind === 'flesh') burst(x, y, z, '#ff4d4d', 7, 3.5, 0.4, 0.09, 12);
  else burst(x, y, z, color, 7, 3, 0.45, 0.12, 8);
}

export function tracer(ax, ay, az, bx, by, bz, color = '#fff3b0', width = 0.035, lifeT = 0.07) {
  const dx = bx - ax, dy = by - ay, dz = bz - az;
  const len = Math.hypot(dx, dy, dz);
  if (len < 0.5) return;
  let m = null;
  for (const t of tracers) if (!t.visible) { m = t; break; }
  if (!m) m = tracers[0];
  m.visible = true; m.userData.t = lifeT; m.userData.max = lifeT;
  m.material.color.set(color);
  m.position.set((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2);
  m.scale.set(width, width, len);
  m.lookAt(bx, by, bz);
}

export function explosionFx(x, y, z, radius) {
  let m = blasts.find((b) => !b.visible) || blasts[0];
  m.visible = true; m.userData.t = 0.45; m.userData.r = radius;
  m.position.set(x, y, z);
  m.scale.setScalar(0.5);
  burst(x, y, z, '#ff7a1f', 40, radius * 2.2, 0.8, 0.5, -1, 0.9);
  burst(x, y, z, '#ffd24a', 30, radius * 2.8, 0.55, 0.35, 2, 0.9);
  burst(x, y, z, '#4a4a4a', 28, radius * 1.4, 1.4, 0.7, -2, 0.9);
  burst(x, y, z, '#8a7a5a', 20, radius * 2.4, 0.9, 0.3, 14, 0.6);
  S.shake = Math.max(S.shake, Math.min(1, 14 / (1 + dist2Player(x, y, z))));
}
function dist2Player(x, y, z) {
  const p = S.player;
  return p ? Math.hypot(p.x - x, p.y - y, p.z - z) : 100;
}

export function debris(x, y, z, color, n = 14) {
  burst(x, y, z, color, n, 5, 0.9, 0.2, 18, 0.9);
}

export function updateFx(dt) {
  if (!pm) return;
  for (let i = 0; i < MAXP; i++) {
    if (life[i] > 0) {
      life[i] -= dt;
      if (life[i] <= 0) { dummy.scale.set(0, 0, 0); dummy.position.set(0, -999, 0); dummy.updateMatrix(); pm.setMatrixAt(i, dummy.matrix); continue; }
      vy[i] -= grav[i] * dt;
      px[i] += vx[i] * dt; py[i] += vy[i] * dt; pz[i] += vz[i] * dt;
      const s = size[i] * (0.25 + 0.75 * (life[i] / maxLife[i]));
      dummy.position.set(px[i], py[i], pz[i]);
      dummy.scale.set(s, s, s);
      dummy.rotation.set(life[i] * 5, life[i] * 3, 0);
      dummy.updateMatrix();
      pm.setMatrixAt(i, dummy.matrix);
    }
  }
  pm.instanceMatrix.needsUpdate = true;
  for (const t of tracers) {
    if (!t.visible) continue;
    t.userData.t -= dt;
    if (t.userData.t <= 0) t.visible = false;
    else t.material.opacity = 0.9 * (t.userData.t / t.userData.max);
  }
  for (const b of blasts) {
    if (!b.visible) continue;
    b.userData.t -= dt;
    if (b.userData.t <= 0) { b.visible = false; continue; }
    const k = 1 - b.userData.t / 0.45;
    b.scale.setScalar(0.5 + b.userData.r * Math.sqrt(k));
    b.material.opacity = 0.8 * (1 - k);
  }
}
