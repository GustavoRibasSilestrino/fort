import * as THREE from 'three';
import { WORLD_HALF } from './config.js';
import { blob, paint, move, merge, noise } from './organic.js';

// Cenario decorativo (sem colisao) fora da arena: arvores organicas, pedras e montanhas
let group = null, mountains = null;

function rngFactory(seed) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
}

// tronco curvo e afilado
function trunk(h, r0, r1, bend, color, seed) {
  const g = new THREE.CylinderGeometry(r1, r0, h, 9, 8, true);
  g.deleteAttribute('uv');
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i) + h / 2, t = y / h;
    p.setX(i, p.getX(i) + Math.sin(t * 2.4 + seed) * bend * t + noise.noise(y * 0.9, seed) * 0.06);
    p.setZ(i, p.getZ(i) + Math.cos(t * 1.9 + seed) * bend * 0.6 * t);
    p.setY(i, y);
  }
  g.computeVertexNormals();
  paint(g, color, new THREE.Color(color).multiplyScalar(1.25), 0.1, 0, h, seed);
  return g;
}

function branch(x, y, z, len, rx, rz, color) {
  const g = new THREE.CylinderGeometry(0.07, 0.16, len, 6, 2, true);
  g.deleteAttribute('uv');
  g.translate(0, len / 2, 0);
  g.rotateX(rx); g.rotateZ(rz);
  g.translate(x, y, z);
  paint(g, color, color, 0.04, 0, 3);
  return g;
}

function oakGeo(seed, greenA, greenB) {
  const parts = [trunk(3.4, 0.55, 0.22, 0.5, '#6b4a2f', seed)];
  parts.push(branch(0.1, 2.4, 0, 1.8, 0.9, -0.7, '#6b4a2f'), branch(-0.1, 2.8, 0.1, 1.6, -0.8, 0.8, '#6b4a2f'));
  const spots = [[0, 5.0, 0, 2.5], [1.8, 4.3, 0.4, 1.9], [-1.9, 4.4, -0.3, 2.0], [0.4, 4.1, 1.8, 1.8], [-0.5, 4.3, -1.9, 1.9], [0.2, 6.2, 0.1, 1.7], [1.6, 5.6, -1.2, 1.5], [-1.5, 5.5, 1.1, 1.5]];
  spots.forEach(([x, y, z, r], k) => {
    const b = blob(r, 2, 0.34, seed + k, 1, 0.82, 1);
    paint(b, greenA, greenB, 0.12, -r, r, seed + k);
    parts.push(move(b, x, y, z));
  });
  return merge(parts);
}

function pineGeo(seed) {
  const parts = [trunk(2.2, 0.4, 0.18, 0.15, '#5a3d27', seed)];
  const tiers = [[1.6, 3.4, 3.6], [1.2, 3.0, 4.9], [0.9, 2.5, 6.0], [0.6, 2.0, 7.0]];
  tiers.forEach(([r, h, y], k) => {
    const c = new THREE.ConeGeometry(r * 1.9, h, 10, 3, true);
    c.deleteAttribute('uv');
    const p = c.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const t = (p.getY(i) + h / 2) / h;
      const n = noise.noise(p.getX(i) * 1.3 + k * 4, p.getZ(i) * 1.3 + seed) * 0.35;
      p.setX(i, p.getX(i) * (1 + n * 0.5)); p.setZ(i, p.getZ(i) * (1 + n * 0.5));
      p.setY(i, p.getY(i) - (1 - t) * 0.15 * (1 + n));
    }
    c.computeVertexNormals();
    paint(c, '#1f6a3a', '#3f9a55', 0.1, -h / 2, h / 2, seed + k);
    parts.push(move(c, 0, y, 0));
  });
  return merge(parts);
}

function birchGeo(seed) {
  const parts = [trunk(4.2, 0.28, 0.12, 0.35, '#ece8dc', seed)];
  [[0, 5.2, 0, 1.7], [0.9, 4.6, 0.5, 1.2], [-0.9, 4.8, -0.4, 1.3], [0.1, 6.1, 0.2, 1.1]].forEach(([x, y, z, r], k) => {
    const b = blob(r, 2, 0.38, seed + k, 1, 1.15, 1);
    paint(b, '#7fc24a', '#b4dc62', 0.12, -r, r, seed + k);
    parts.push(move(b, x, y, z));
  });
  return merge(parts);
}

export function buildScenery(scene, half) {
  if (group) {
    scene.remove(group);
    group.traverse((o) => { if (o.isInstancedMesh) o.dispose(); });
  }
  group = new THREE.Group();
  const rnd = rngFactory(1234);
  const lim = WORLD_HALF - 8;
  const inner = half + 10;
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });

  const variants = [
    { g: oakGeo(1, '#3d9a3a', '#7fd04c'), n: 120 },
    { g: oakGeo(2, '#2f8a3e', '#62c04c'), n: 100 },
    { g: pineGeo(3), n: 110 },
    { g: birchGeo(4), n: 70 },
  ];
  const spots = [];
  for (let tries = 0; tries < 4000 && spots.length < 400; tries++) {
    const x = (rnd() * 2 - 1) * lim, z = (rnd() * 2 - 1) * lim;
    if (Math.max(Math.abs(x), Math.abs(z)) < inner) continue;
    if (noise.fbm(x * 0.012, z * 0.012, 3) < -0.05 && rnd() > 0.15) continue;   // bosques agrupados
    let ok = true;
    for (let k = Math.max(0, spots.length - 80); k < spots.length; k++) if (Math.hypot(spots[k][0] - x, spots[k][1] - z) < 7) { ok = false; break; }
    if (ok) spots.push([x, z, 0.75 + rnd() * 0.9, rnd()]);
  }
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pos = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  let idx = 0;
  for (const v of variants) {
    const take = spots.slice(idx, idx + v.n); idx += v.n;
    if (!take.length) continue;
    const im = new THREE.InstancedMesh(v.g, mat, take.length);
    take.forEach(([x, z, s, r], i) => {
      q.setFromAxisAngle(up, r * 6.28);
      m4.compose(pos.set(x, -0.05, z), q, sc.set(s, s * (0.9 + r * 0.35), s));
      im.setMatrixAt(i, m4);
    });
    group.add(im);
  }

  // pedras irregulares e suaves
  const rg = blob(1, 2, 0.35, 9, 1.3, 0.75, 1);
  paint(rg, '#8c8f98', '#c1c4cc', 0.1, -1, 1);
  const rocks = new THREE.InstancedMesh(rg, mat, 90);
  let rc = 0;
  for (let tries = 0; tries < 600 && rc < 90; tries++) {
    const x = (rnd() * 2 - 1) * lim, z = (rnd() * 2 - 1) * lim;
    if (Math.max(Math.abs(x), Math.abs(z)) < inner) continue;
    const s = 0.8 + rnd() * 2.4;
    q.setFromEuler(new THREE.Euler(rnd() * 0.4, rnd() * 6, rnd() * 0.4));
    m4.compose(pos.set(x, s * 0.2, z), q, sc.set(s, s, s));
    rocks.setMatrixAt(rc++, m4);
  }
  rocks.count = rc;
  group.add(rocks);

  scene.add(group);
  if (!mountains) { mountains = buildMountains(); scene.add(mountains); }
}

// cordilheira em anel: relevo por ruido (cristas suaves), cor por altitude e inclinacao
function buildMountains() {
  const NA = 280, NR = 34, R0 = 380, R1 = 1050;
  const verts = [], cols = [], idx = [];
  const c = new THREE.Color(), cSnow = new THREE.Color('#cfd8e6'), cRock = new THREE.Color('#6e6a62'), cSlope = new THREE.Color('#8a8a74'), cDark = new THREE.Color('#3b7d3c');
  const hAt = (x, z) => {
    const r = Math.hypot(x, z);
    const near = THREE.MathUtils.smoothstep(r, R0, 520);
    const far = THREE.MathUtils.smoothstep(r, 460, 760);
    const hills = (noise.fbm(x * 0.006, z * 0.006, 4) * 0.5 + 0.5) * 45 * near;
    const ridge = 1 - Math.abs(noise.fbm(x * 0.0032 + 9, z * 0.0032, 5));
    const mts = Math.pow(ridge, 2.2) * 330 * far * (0.55 + 0.6 * (noise.fbm(x * 0.002, z * 0.002, 2) * 0.5 + 0.5));
    return hills + mts;
  };
  for (let ir = 0; ir <= NR; ir++) {
    const r = R0 + (R1 - R0) * Math.pow(ir / NR, 1.15);
    for (let ia = 0; ia <= NA; ia++) {
      const a = (ia / NA) * Math.PI * 2;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const h = hAt(x, z);
      verts.push(x, h - 0.6, z);
      const e = 3;
      const sl = Math.min(1, Math.hypot(hAt(x + e, z) - h, hAt(x, z + e) - h) / e / 1.1);
      if (h > 190 && sl < 0.9) c.set('#f3f6fb').lerp(cSnow, sl);
      else if (h > 120) c.set('#8f8a80').lerp(cRock, sl);
      else if (h > 55) c.set('#5f8a4a').lerp(cSlope, sl * 1.1);
      else c.set('#4f9a3f').lerp(cDark, noise.noise(x * 0.01, z * 0.01) * 0.5 + 0.5);
      c.offsetHSL(0, 0, noise.noise(x * 0.05, z * 0.05) * 0.03);
      cols.push(c.r, c.g, c.b);
    }
  }
  for (let ir = 0; ir < NR; ir++) for (let ia = 0; ia < NA; ia++) {
    const a = ir * (NA + 1) + ia, b = a + 1, d = a + NA + 1, e = d + 1;
    idx.push(a, d, b, b, d, e);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
}
