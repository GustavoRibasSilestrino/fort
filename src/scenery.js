import * as THREE from 'three';
import { WORLD_HALF } from './config.js';

// Cenario decorativo (sem colisao) fora da arena: arvores low-poly, pedras e colinas
let group = null;

function rngFactory(seed) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
}

export function buildScenery(scene, half) {
  if (group) {
    scene.remove(group);
    group.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }
  group = new THREE.Group();
  const rnd = rngFactory(1234);
  const lim = WORLD_HALF - 8;
  const inner = half + 10;
  const spots = [];
  for (let tries = 0; tries < 2600 && spots.length < 420; tries++) {
    const x = (rnd() * 2 - 1) * lim, z = (rnd() * 2 - 1) * lim;
    if (Math.max(Math.abs(x), Math.abs(z)) < inner) continue;
    let ok = true;
    for (let k = Math.max(0, spots.length - 60); k < spots.length; k++) if (Math.hypot(spots[k][0] - x, spots[k][1] - z) < 9) { ok = false; break; }
    if (ok) spots.push([x, z, 0.8 + rnd() * 1.1, rnd()]);
  }
  const n = spots.length;
  const trunkG = new THREE.CylinderGeometry(0.35, 0.5, 3, 6); trunkG.translate(0, 1.5, 0);
  const leafG1 = new THREE.ConeGeometry(2.6, 4.2, 7); leafG1.translate(0, 4.2, 0);
  const leafG2 = new THREE.ConeGeometry(2.0, 3.4, 7); leafG2.translate(0, 6.4, 0);
  const trunk = new THREE.InstancedMesh(trunkG, new THREE.MeshLambertMaterial({ color: '#8a5a33', flatShading: true }), n);
  const leaf1 = new THREE.InstancedMesh(leafG1, new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true }), n);
  const leaf2 = new THREE.InstancedMesh(leafG2, new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true }), n);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pos = new THREE.Vector3(), c = new THREE.Color();
  const greens = ['#3fae3a', '#2f9a43', '#58c04a', '#2a8a4a', '#6ccf55'];
  for (let i = 0; i < n; i++) {
    const [x, z, s, r] = spots[i];
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r * 6.28);
    sc.set(s, s * (0.9 + r * 0.4), s); pos.set(x, 0, z);
    m4.compose(pos, q, sc);
    trunk.setMatrixAt(i, m4); leaf1.setMatrixAt(i, m4); leaf2.setMatrixAt(i, m4);
    c.set(greens[(r * 97 | 0) % greens.length]);
    leaf1.setColorAt(i, c); leaf2.setColorAt(i, c.clone().multiplyScalar(1.12));
  }
  for (const m of [trunk, leaf1, leaf2]) { m.castShadow = false; m.receiveShadow = false; group.add(m); }

  // pedras
  const rockG = new THREE.DodecahedronGeometry(1, 0);
  const rocks = new THREE.InstancedMesh(rockG, new THREE.MeshLambertMaterial({ color: '#b9bcc4', flatShading: true }), 90);
  let rc = 0;
  for (let tries = 0; tries < 600 && rc < 90; tries++) {
    const x = (rnd() * 2 - 1) * lim, z = (rnd() * 2 - 1) * lim;
    if (Math.max(Math.abs(x), Math.abs(z)) < inner) continue;
    const s = 0.8 + rnd() * 2.6;
    q.setFromEuler(new THREE.Euler(rnd(), rnd() * 6, rnd()));
    m4.compose(pos.set(x, s * 0.35, z), q, sc.set(s * 1.3, s * 0.8, s));
    rocks.setMatrixAt(rc++, m4);
  }
  rocks.count = rc;
  group.add(rocks);

  // colinas arredondadas ao fundo
  const hillMat = new THREE.MeshLambertMaterial({ color: '#58c24a', flatShading: true });
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2 + rnd() * 0.3, r = 330 + rnd() * 50;
    const h = new THREE.Mesh(new THREE.SphereGeometry(30 + rnd() * 30, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), hillMat);
    h.position.set(Math.cos(a) * r, -1, Math.sin(a) * r);
    h.scale.y = 0.45 + rnd() * 0.3;
    group.add(h);
  }
  scene.add(group);
}
