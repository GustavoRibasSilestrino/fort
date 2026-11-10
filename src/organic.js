import * as THREE from 'three';
import { mergeVertices, mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Noise2D } from './util.js';

export const noise = new Noise2D(7);

// pinta a geometria com cor por vertice (gradiente vertical + ruido)
export function paint(geo, base, top, jitter = 0.08, yMin = -1, yMax = 1, seed = 0) {
  const pos = geo.attributes.position, col = new Float32Array(pos.count * 3);
  const a = new THREE.Color(base), b = new THREE.Color(top), c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const t = THREE.MathUtils.clamp((pos.getY(i) - yMin) / (yMax - yMin || 1), 0, 1);
    c.copy(a).lerp(b, t);
    const n = noise.noise(pos.getX(i) * 1.7 + seed, pos.getZ(i) * 1.7 + pos.getY(i) * 1.3) * jitter;
    c.offsetHSL(n * 0.15, n * 0.5, n);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}

// esfera irregular e suave ("bola de folhas", nuvem, pedra)
export function blob(radius, detail = 2, bump = 0.25, seed = 0, sx = 1, sy = 1, sz = 1) {
  let g = new THREE.IcosahedronGeometry(radius, detail);
  g.deleteAttribute('normal'); g.deleteAttribute('uv');
  g = mergeVertices(g, 1e-3);
  const p = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = noise.fbm(v.x * 0.9 + seed * 5.1, v.y * 0.9 + v.z * 0.7 + seed * 3.3, 3) * bump;
    v.multiplyScalar(1 + n);
    p.setXYZ(i, v.x * sx, v.y * sy, v.z * sz);
  }
  g.computeVertexNormals();
  return g;
}

export function move(geo, x, y, z, s = 1, ry = 0) {
  const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), new THREE.Vector3(s, s, s));
  geo.applyMatrix4(m);
  return geo;
}

// junta varias geometrias pintadas em uma so (1 draw call)
export function merge(list) {
  const clean = list.map((g) => { const c = g.index ? g.clone() : g.clone(); c.deleteAttribute('uv'); return c; });
  return mergeGeometries(clean, false);
}
