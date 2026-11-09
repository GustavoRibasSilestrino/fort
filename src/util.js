import * as THREE from 'three';

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
export const rr = (a, b) => a + Math.random() * (b - a);
export const ri = (a, b) => Math.floor(a + Math.random() * (b - a + 1));
export const pick = (arr) => arr[(Math.random() * arr.length) | 0];
export const TAU = Math.PI * 2;

export function angleDiff(a, b) {
  let d = b - a;
  while (d > Math.PI) d -= TAU;
  while (d < -Math.PI) d += TAU;
  return d;
}

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function weightedPick(table) {
  let total = 0;
  for (const k in table) total += table[k];
  let r = Math.random() * total;
  for (const k in table) { r -= table[k]; if (r <= 0) return k; }
  return Object.keys(table)[0];
}
export function weightedIndex(arr) {
  let total = 0;
  for (const v of arr) total += v;
  let r = Math.random() * total;
  for (let i = 0; i < arr.length; i++) { r -= arr[i]; if (r <= 0) return i; }
  return 0;
}

// ---------- Ruido (Perlin 2D) ----------
const GRAD = [[1, 1], [-1, 1], [1, -1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]];
export class Noise2D {
  constructor(seed = 1) {
    const rnd = mulberry32(seed);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); const t = p[i]; p[i] = p[j]; p[j] = t; }
    this.perm = new Uint8Array(512);
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }
  noise(x, y) {
    const p = this.perm;
    const fx = Math.floor(x), fy = Math.floor(y);
    const X = fx & 255, Y = fy & 255;
    x -= fx; y -= fy;
    const u = x * x * x * (x * (x * 6 - 15) + 10);
    const v = y * y * y * (y * (y * 6 - 15) + 10);
    const aa = p[p[X] + Y], ab = p[p[X] + Y + 1], ba = p[p[X + 1] + Y], bb = p[p[X + 1] + Y + 1];
    const g = (h, a, b) => { const q = GRAD[h & 7]; return q[0] * a + q[1] * b; };
    const x1 = g(aa, x, y) + u * (g(ba, x - 1, y) - g(aa, x, y));
    const x2 = g(ab, x, y - 1) + u * (g(bb, x - 1, y - 1) - g(ab, x, y - 1));
    return x1 + v * (x2 - x1);
  }
  fbm(x, y, oct = 4, lac = 2, gain = 0.5) {
    let amp = 1, f = 1, sum = 0, norm = 0;
    for (let i = 0; i < oct; i++) { sum += this.noise(x * f, y * f) * amp; norm += amp; amp *= gain; f *= lac; }
    return sum / norm;
  }
}

// ---------- Construtor de geometria (caixas com cor por vertice) ----------
const _ca = new THREE.Color(), _cb = new THREE.Color();
export class GeomBuilder {
  constructor() { this.pos = []; this.nor = []; this.col = []; }
  _v(x, y, z, nx, ny, nz, c) {
    this.pos.push(x, y, z); this.nor.push(nx, ny, nz); this.col.push(c.r, c.g, c.b);
  }
  // quad no sentido anti-horario visto de fora
  _quad(a, b, c, d, n, y0, y1, cTop, cBot) {
    const col = (v) => {
      const t = y1 > y0 ? clamp((v[1] - y0) / (y1 - y0), 0, 1) : 1;
      return _ca.copy(cBot).lerp(cTop, t).clone();
    };
    const ca = col(a), cb = col(b), cc = col(c), cd = col(d);
    this._v(a[0], a[1], a[2], n[0], n[1], n[2], ca);
    this._v(b[0], b[1], b[2], n[0], n[1], n[2], cb);
    this._v(c[0], c[1], c[2], n[0], n[1], n[2], cc);
    this._v(a[0], a[1], a[2], n[0], n[1], n[2], ca);
    this._v(c[0], c[1], c[2], n[0], n[1], n[2], cc);
    this._v(d[0], d[1], d[2], n[0], n[1], n[2], cd);
  }
  addBox(x0, y0, z0, x1, y1, z1, cTop, cBot = cTop) {
    const q = (a, b, c, d, n) => this._quad(a, b, c, d, n, y0, y1, cTop, cBot);
    q([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0]);
    q([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0]);
    q([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], [0, 1, 0]);
    q([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0]);
    q([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1]);
    q([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1]);
  }
  // face convexa qualquer, orientada para longe de "centro"
  addFace(verts, color, center) {
    const [a, b, c] = verts;
    let ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    let vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    let mx = 0, my = 0, mz = 0;
    for (const v of verts) { mx += v[0]; my += v[1]; mz += v[2]; }
    mx /= verts.length; my /= verts.length; mz /= verts.length;
    let vs = verts;
    if ((mx - center[0]) * nx + (my - center[1]) * ny + (mz - center[2]) * nz < 0) { vs = verts.slice().reverse(); nx = -nx; ny = -ny; nz = -nz; }
    for (let i = 1; i < vs.length - 1; i++) {
      for (const v of [vs[0], vs[i], vs[i + 1]]) this._v(v[0], v[1], v[2], nx, ny, nz, color);
    }
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.computeBoundingSphere();
    g.computeBoundingBox();
    return g;
  }
}

export function tint(hex, f) {
  const c = new THREE.Color(hex);
  c.multiplyScalar(f);
  return c;
}
