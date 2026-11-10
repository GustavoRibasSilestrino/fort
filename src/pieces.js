import * as THREE from 'three';
import { G, H, TH, SLOPE, MATS } from './config.js';
import { GeomBuilder, clamp } from './util.js';
import { boxCollider, rampCollider, roofCollider, removeCollider, ROOF_PEAK } from './physics.js';
import { heightAt } from './terrain.js';
import { S } from './state.js';

// Pecas de construcao estilo Fortnite: parede, piso, escada ("ramp") e cone ("roof").
// Todas tem uma grade de "tiles" editavel: parede/piso/cone 3x3, escada 2x2.
export const PIECE_MAT = new THREE.MeshLambertMaterial({ vertexColors: true });
export const allPieces = new Set();
const byKey = new Map();
const cols = new Map();
export const hooks = { onDestroy: null };
export const T = 0.3;          // espessura da colisao de parede/piso
const BW = 0.18;               // largura das vigas da moldura
export const TYPES = ['wall', 'floor', 'ramp', 'roof'];
export const GRID = { wall: [3, 3], floor: [2, 2], ramp: [2, 2], roof: [2, 2] }; // [colunas, linhas]
export const isPiece = (o) => !!o && TYPES.includes(o.type) && !!o.colliders;
export const FULL_MASK = (type = 'wall') => new Array(GRID[type][0] * GRID[type][1]).fill(true);


// ===== Visual estilo Fortnite =====
// painel translucido da peca em construcao ("planta")
export const GLASS_MAT = new THREE.MeshBasicMaterial({ color: '#e3f1ff', transparent: true, opacity: 0.46, depthWrite: false, side: THREE.DoubleSide });
const WHITE = new THREE.Color('#ffffff');
const FB = 0.2, FD = 0.17;     // viga da moldura: largura e meia-profundidade
const SB = 0.05, SD = 0.12;    // montante interno
// tempo para a peca ficar pronta e fracao da vida com que ela nasce
export const BUILD = { wood: { time: 3.0, start: 0.6 }, stone: { time: 4.6, start: 0.35 }, metal: { time: 6.0, start: 0.25 } };
const PAL = {
  wood:  { frame: '#e2b47a', fill: ['#c9823f', '#b8702f', '#d6924f', '#a9622a', '#cc8a48', '#bd7838'] },
  stone: { frame: '#cfcbc0', fill: ['#b7b0a4', '#a69f93', '#c4beb2', '#968f84', '#b0a99d'] },
  metal: { frame: '#a4adb7', fill: ['#8f9aa7', '#a5afba', '#7f8a97', '#b3bcc6'] },
};
const palOf = (p) => PAL[p.mat] || PAL.wood;
const fillColor = (pal, rnd) => new THREE.Color(pal.fill[(rnd() * pal.fill.length) | 0]).multiplyScalar(0.93 + rnd() * 0.14);
// aleatorio deterministico por peca (o mesmo desenho ao refazer a malha)
function rngOf(p) {
  let st = (Math.imul(p.i, 73856093) ^ Math.imul(p.j, 19349663) ^ Math.imul((p.y * 100) | 0, 83492791) ^ Math.imul(p.type.charCodeAt(0), 2654435) ^ (p.axis === 'x' ? 5 : 9) ^ Math.imul(p.dir || 0, 40503)) >>> 0 || 1;
  return () => { st = (Math.imul(st, 1664525) + 1013904223) >>> 0; return st / 4294967296; };
}
// viga de secao retangular entre dois pontos (para longarinas e espigoes inclinados)
function addBeam(b, p0, p1, w, h, color) {
  let dx = p1[0] - p0[0], dy = p1[1] - p0[1], dz = p1[2] - p0[2];
  const L = Math.hypot(dx, dy, dz) || 1; dx /= L; dy /= L; dz /= L;
  let sx = dz, sz = -dx;
  let sl = Math.hypot(sx, sz);
  if (sl < 1e-4) { sx = 1; sz = 0; sl = 1; }
  sx /= sl; sz /= sl;
  let ux = dy * sz, uy = dz * sx - dx * sz, uz = -dy * sx;
  if (uy < 0) { ux = -ux; uy = -uy; uz = -uz; }
  const hw = w / 2, hh = h / 2;
  const c = (p, a, e) => [p[0] + sx * a * hw + ux * e * hh, p[1] + uy * e * hh, p[2] + sz * a * hw + uz * e * hh];
  const A = [c(p0, -1, -1), c(p0, 1, -1), c(p0, 1, 1), c(p0, -1, 1)], B = [c(p1, -1, -1), c(p1, 1, -1), c(p1, 1, 1), c(p1, -1, 1)];
  const ctr = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2, (p0[2] + p1[2]) / 2];
  b.addFace(A, color, ctr); b.addFace(B, color, ctr);
  for (let k = 0; k < 4; k++) { const n = (k + 1) % 4; b.addFace([A[k], A[n], B[n], B[k]], color, ctr); }
}

let pid = 0;

// retangulos (em tiles) que cobrem os tiles presentes: tudo, ou faixas por linha
function maskRects(m, nc, nr) {
  if (m.every(Boolean)) return [{ c0: 0, c1: nc - 1, r0: 0, r1: nr - 1 }];
  const out = [];
  for (let r = 0; r < nr; r++) {
    let c = 0;
    while (c < nc) {
      if (!m[r * nc + c]) { c++; continue; }
      let e = c;
      while (e + 1 < nc && m[r * nc + e + 1]) e++;
      out.push({ c0: c, c1: e, r0: r, r1: r });
      c = e + 1;
    }
  }
  return out;
}

// vigas na borda dos tiles presentes: segmentos {kind:'h'|'v', line, i0, i1, side}
function edgeBeams(m, nc, nr) {
  const P = (c, r) => c >= 0 && c < nc && r >= 0 && r < nr && m[r * nc + c];
  const out = [];
  for (const kind of ['h', 'v']) {
    const lines = kind === 'h' ? nr : nc, span = kind === 'h' ? nc : nr;
    for (let line = 0; line <= lines; line++) {
      let cur = null;
      for (let i = 0; i < span; i++) {
        const a = kind === 'h' ? P(i, line - 1) : P(line - 1, i);
        const b = kind === 'h' ? P(i, line) : P(line, i);
        const side = a === b ? 0 : b ? 1 : -1;
        if (cur && side === cur.side) { cur.i1 = i; continue; }
        if (cur) { out.push(cur); cur = null; }
        if (side !== 0) cur = { kind, line, i0: i, i1: i, side };
      }
      if (cur) out.push(cur);
    }
  }
  return out;
}

export class Piece {
  constructor(o) {
    Object.assign(this, o);
    this.id = ++pid;
    this.hp = this.maxHp;
    this.colliders = [];
    this.dead = false;
    this.mesh = null;
    this.mask = o.mask ? o.mask.slice() : FULL_MASK(o.type);
  }

  get grid() { return GRID[this.type]; }

  // converte (u: ao longo da subida, v: largura) da escada numa area [x0,z0,x1,z1]
  uvRect(ua, ub, va, vb) {
    const x0 = this.i * G, z0 = this.j * G, x1 = x0 + G, z1 = z0 + G;
    switch (this.dir) {
      case 0: return [x0 + ua, z0 + va, x0 + ub, z0 + vb];
      case 2: return [x1 - ub, z0 + va, x1 - ua, z0 + vb];
      case 1: return [x0 + va, z0 + ua, x0 + vb, z0 + ub];
      default: return [x0 + va, z1 - ub, x0 + vb, z1 - ua];
    }
  }

  // ----- colisao -----
  colBoxes() {
    const out = [];
    const sk = this.skirt || 0;
    const tw = G / 3;
    if (this.type === 'wall') {
      for (const r of maskRects(this.mask, 3, 3)) {
        const a0 = r.c0 * tw, a1 = (r.c1 + 1) * tw;
        const y0 = this.y + r.r0 * TH - (r.r0 === 0 ? sk : 0), y1 = this.y + (r.r1 + 1) * TH;
        if (this.axis === 'x') out.push([this.i * G + a0, y0, this.j * G - T / 2, this.i * G + a1, y1, this.j * G + T / 2]);
        else out.push([this.i * G - T / 2, y0, this.j * G + a0, this.i * G + T / 2, y1, this.j * G + a1]);
      }
    } else if (this.type === 'floor') {
      const fw = G / 2;
      for (const r of maskRects(this.mask, 2, 2)) {
        out.push([this.i * G + r.c0 * fw, this.y - T - sk, this.j * G + r.r0 * fw, this.i * G + (r.c1 + 1) * fw, this.y, this.j * G + (r.r1 + 1) * fw]);
      }
    }
    return out;
  }

  center() {
    if (this.type === 'wall') return this.axis === 'x' ? [this.i * G + G / 2, this.y + H / 2, this.j * G] : [this.i * G, this.y + H / 2, this.j * G + G / 2];
    return [this.i * G + G / 2, this.y + (this.type === 'ramp' ? H / 2 : this.type === 'roof' ? ROOF_PEAK / 2 : 0), this.j * G + G / 2];
  }

  // ----- visual (estilo Fortnite) -----
  // Cada peca tem 3 camadas: moldura de vigas (sempre visivel), painel translucido azulado ("planta")
  // e o preenchimento (tabuas / tijolos / chapas) que vai aparecendo enquanto a peca se constroi.
  // C = { frame: GeomBuilder, glass: GeomBuilder, fills: [{ th, fn(builder) }] }
  parts(C) {
    if (this.type === 'wall') this.partsWall(C);
    else if (this.type === 'floor') this.partsFloor(C);
    else if (this.type === 'ramp') this.partsStairs(C);
    else this.partsRoof(C);
  }

  partsWall(C) {
    const m = this.mask, tw = G / 3, pal = palOf(this), rnd = rngOf(this);
    const fc = new THREE.Color(pal.frame), fd = fc.clone().multiplyScalar(0.8);
    const wb = (b, a0, a1, y0, y1, half, col, col2) => {
      if (this.axis === 'x') b.addBox(this.i * G + a0, this.y + y0, this.j * G - half, this.i * G + a1, this.y + y1, this.j * G + half, col, col2 || col);
      else b.addBox(this.i * G - half, this.y + y0, this.j * G + a0, this.i * G + half, this.y + y1, this.j * G + a1, col, col2 || col);
    };
    const P = (c, r) => c >= 0 && c < 3 && r >= 0 && r < 3 && m[r * 3 + c];
    // moldura externa e bordas dos buracos
    for (const e of edgeBeams(m, 3, 3)) {
      if (e.kind === 'h') {
        const y0 = e.side > 0 ? e.line * TH : e.line * TH - FB, y1 = e.side > 0 ? e.line * TH + FB : e.line * TH;
        wb(C.frame, e.i0 * tw, (e.i1 + 1) * tw, y0, y1, FD, fc, fd);
      } else {
        const a0 = e.side > 0 ? e.line * tw : e.line * tw - FB, a1 = e.side > 0 ? e.line * tw + FB : e.line * tw;
        wb(C.frame, a0, a1, e.i0 * TH, (e.i1 + 1) * TH, FD, fc, fd);
      }
    }
    // montantes e travessas internas, entre tiles vizinhos
    for (let r = 0; r < 3; r++) for (let c = 1; c < 3; c++) if (P(c - 1, r) && P(c, r)) wb(C.frame, c * tw - SB, c * tw + SB, r * TH, (r + 1) * TH, SD, fd, fd);
    for (let c = 0; c < 3; c++) for (let r = 1; r < 3; r++) if (P(c, r - 1) && P(c, r)) wb(C.frame, c * tw, (c + 1) * tw, r * TH - SB, r * TH + SB, SD, fd, fd);
    // painel translucido
    for (const r of maskRects(m, 3, 3)) wb(C.glass, r.c0 * tw, (r.c1 + 1) * tw, r.r0 * TH, (r.r1 + 1) * TH, 0.03, WHITE);
    // preenchimento por tile
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (!m[r * 3 + c]) continue;
        const a0 = c * tw, a1 = (c + 1) * tw, y0 = r * TH, y1 = (r + 1) * TH;
        const add = (pa0, pa1, ya, yb, half) => {
          if (pa1 - pa0 < 0.1) return;
          const col = fillColor(pal, rnd), dk = col.clone().multiplyScalar(0.84);
          C.fills.push({ th: 0.03 + rnd() * 0.94, fn: (b) => wb(b, pa0, pa1, ya, yb, half, col, dk) });
        };
        if (this.mat === 'stone') {            // tijolos em fiadas desencontradas
          const rows = 4, rh = (y1 - y0) / rows, bw = (a1 - a0) / 3;
          for (let k = 0; k < rows; k++) {
            let st = a0 - ((k + r) % 2 ? bw / 2 : 0);
            while (st < a1 - 0.01) { add(Math.max(a0, st) + 0.025, Math.min(a1, st + bw) - 0.025, y0 + k * rh + 0.025, y0 + (k + 1) * rh - 0.025, 0.12); st += bw; }
          }
        } else if (this.mat === 'metal') {     // chapas
          const rh = (y1 - y0) / 2;
          for (let k = 0; k < 2; k++) {
            const mid = a0 + (a1 - a0) * 0.5;
            add(a0 + 0.04, mid - 0.03, y0 + k * rh + 0.04, y0 + (k + 1) * rh - 0.04, 0.09);
            add(mid + 0.03, a1 - 0.04, y0 + k * rh + 0.04, y0 + (k + 1) * rh - 0.04, 0.09);
          }
        } else {                               // tabuas horizontais de madeira
          const rows = 5, rh = (y1 - y0) / rows;
          for (let k = 0; k < rows; k++) {
            const ya = y0 + k * rh + 0.025, yb = y0 + (k + 1) * rh - 0.025;
            if (rnd() < 0.55) {
              const s = a0 + (a1 - a0) * (0.3 + rnd() * 0.4);
              add(a0 + 0.03, s - 0.02, ya, yb, 0.1); add(s + 0.02, a1 - 0.03, ya, yb, 0.1);
            } else add(a0 + 0.03, a1 - 0.03, ya, yb, 0.1);
          }
        }
      }
    }
  }

  partsFloor(C) {
    const m = this.mask, tw = G / 2, pal = palOf(this), rnd = rngOf(this);
    const fc = new THREE.Color(pal.frame), fd = fc.clone().multiplyScalar(0.8);
    const x0 = this.i * G, z0 = this.j * G, y = this.y;
    const P = (c, r) => c >= 0 && c < 2 && r >= 0 && r < 2 && m[r * 2 + c];
    for (const e of edgeBeams(m, 2, 2)) {
      if (e.kind === 'h') {
        const za = e.side > 0 ? z0 + e.line * tw : z0 + e.line * tw - FB;
        C.frame.addBox(x0 + e.i0 * tw, y - T - 0.14, za, x0 + (e.i1 + 1) * tw, y, za + FB, fc, fd);
      } else {
        const xa = e.side > 0 ? x0 + e.line * tw : x0 + e.line * tw - FB;
        C.frame.addBox(xa, y - T - 0.14, z0 + e.i0 * tw, xa + FB, y, z0 + (e.i1 + 1) * tw, fc, fd);
      }
    }
    // barrotes internos
    for (let r = 0; r < 2; r++) if (P(0, r) && P(1, r)) C.frame.addBox(x0 + tw - SB, y - T - 0.08, z0 + r * tw, x0 + tw + SB, y - 0.01, z0 + (r + 1) * tw, fd, fd);
    for (let c = 0; c < 2; c++) if (P(c, 0) && P(c, 1)) C.frame.addBox(x0 + c * tw, y - T - 0.08, z0 + tw - SB, x0 + (c + 1) * tw, y - 0.01, z0 + tw + SB, fd, fd);
    for (const r of maskRects(m, 2, 2)) C.glass.addBox(x0 + r.c0 * tw, y - 0.1, z0 + r.r0 * tw, x0 + (r.c1 + 1) * tw, y - 0.05, z0 + (r.r1 + 1) * tw, WHITE);
    // placas do piso
    const n = this.mat === 'wood' ? 4 : 2, cs = tw / n;
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 2; c++) {
        if (!m[r * 2 + c]) continue;
        const xa = x0 + c * tw, za = z0 + r * tw;
        for (let a = 0; a < n; a++) {
          for (let k = 0; k < n; k++) {
            const col = fillColor(pal, rnd).multiplyScalar((a + k) % 2 ? 0.94 : 1.04), dk = col.clone().multiplyScalar(0.78);
            const bx0 = xa + a * cs + 0.03, bz0 = za + k * cs + 0.03, bx1 = xa + (a + 1) * cs - 0.03, bz1 = za + (k + 1) * cs - 0.03;
            C.fills.push({ th: 0.03 + rnd() * 0.94, fn: (b) => b.addBox(bx0, y - 0.17, bz0, bx1, y, bz1, col, dk) });
          }
        }
      }
    }
  }

  // escada com longarinas e degraus, vazia por baixo
  partsStairs(C) {
    const m = this.mask, nc = 2, nr = 2, tw = G / nc, th = G / nr, yb = this.y;
    const pal = palOf(this), rnd = rngOf(this);
    const fc = new THREE.Color(pal.frame), fd = fc.clone().multiplyScalar(0.8);
    const SW = 0.3;
    const P3 = (u, v, dy = 0) => { const r = this.uvRect(u, u, v, v); return [r[0], yb + SLOPE * u + dy, r[1]]; };
    const sbox = (b, ua, ub, va, vb, ya, yb2, col, col2) => { const r = this.uvRect(ua, ub, va, vb); b.addBox(r[0], ya, r[1], r[2], yb2, r[3], col, col2 || col); };
    for (const e of edgeBeams(m, nc, nr)) {
      if (e.kind === 'v') {          // longarina inclinada na lateral
        const v = e.side > 0 ? e.line * tw + SW / 2 : e.line * tw - SW / 2;
        addBeam(C.frame, P3(e.i0 * th, v, -0.2), P3((e.i1 + 1) * th, v, -0.2), SW, 0.4, fc);
      } else {                       // travessa na ponta de baixo / de cima
        const u = e.side > 0 ? e.line * th + 0.13 : e.line * th - 0.13;
        const yy = yb + SLOPE * u;
        sbox(C.frame, u - 0.13, u + 0.13, e.i0 * tw, (e.i1 + 1) * tw, yy - 0.4, yy, fd, fd);
      }
    }
    for (const r of maskRects(m, nc, nr)) {
      const ua = r.r0 * th, ub = (r.r1 + 1) * th, va = r.c0 * tw, vb = (r.c1 + 1) * tw;
      C.glass.addFace([P3(ua, va, -0.12), P3(ub, va, -0.12), P3(ub, vb, -0.12), P3(ua, vb, -0.12)], WHITE, [this.i * G + G / 2, yb - 60, this.j * G + G / 2]);
    }
    // faixas de colunas presentes por linha (ao longo da subida)
    const rowRuns = [];
    for (let r = 0; r < nr; r++) {
      const runs = [];
      let cc = 0;
      while (cc < nc) {
        if (!m[r * nc + cc]) { cc++; continue; }
        let e = cc;
        while (e + 1 < nc && m[r * nc + e + 1]) e++;
        runs.push([cc * tw, (e + 1) * tw]);
        cc = e + 1;
      }
      rowRuns.push(runs);
    }
    const N = 14, d = G / N, rise = SLOPE * d;
    for (let k = 0; k < N; k++) {
      const ua = k * d, ub = (k + 1) * d;
      const r = Math.min(nr - 1, Math.floor(((k + 0.5) * d) / th));
      const top = yb + SLOPE * (k + 0.5) * d;
      for (const [va, vb] of rowRuns[r]) {
        const col = fillColor(pal, rnd).multiplyScalar(k % 2 ? 0.95 : 1.05), dk = col.clone().multiplyScalar(0.72);
        C.fills.push({
          th: 0.03 + rnd() * 0.94,
          fn: (b) => {
            sbox(b, ua, ub, va + SW, vb - SW, top - 0.13, top, col, dk);        // degrau
            sbox(b, ua, ua + 0.08, va + SW, vb - SW, top - rise, top - 0.1, dk, dk); // espelho
          },
        });
      }
    }
  }

  // cone: piramide com vigas nas quinas, oca por baixo; editavel em 2x2
  partsRoof(C) {
    const x0 = this.i * G, z0 = this.j * G, x1 = x0 + G, z1 = z0 + G, yb = this.y, hh = G / 2;
    const cx = x0 + hh, cz = z0 + hh, apex = yb + ROOF_PEAK, m = this.mask;
    const pal = palOf(this), rnd = rngOf(this);
    const fc = new THREE.Color(pal.frame), fd = fc.clone().multiplyScalar(0.8);
    const surf = (x, z) => yb + ROOF_PEAK * (1 - Math.min(Math.max(Math.abs(x - cx), Math.abs(z - cz)), hh) / hh);
    const A = [cx, apex, cz], inside = [cx, yb + 0.3, cz], above = [cx, apex + 9, cz];
    for (const e of edgeBeams(m, 2, 2)) {
      if (e.kind === 'h') {
        const z = z0 + e.line * hh, xa = x0 + e.i0 * hh, xb = x0 + (e.i1 + 1) * hh;
        if (e.line === 1) addBeam(C.frame, [xa, surf(xa, z) - 0.05, z], [xb, surf(xb, z) - 0.05, z], 0.22, 0.22, fc);
        else { const za = e.line === 0 ? z : z - FB; C.frame.addBox(xa, yb - 0.22, za, xb, yb + 0.14, za + FB, fc, fd); }
      } else {
        const x = x0 + e.line * hh, za = z0 + e.i0 * hh, zb = z0 + (e.i1 + 1) * hh;
        if (e.line === 1) addBeam(C.frame, [x, surf(x, za) - 0.05, za], [x, surf(x, zb) - 0.05, zb], 0.22, 0.22, fc);
        else { const xa = e.line === 0 ? x : x - FB; C.frame.addBox(xa, yb - 0.22, za, xa + FB, yb + 0.14, zb, fc, fd); }
      }
    }
    const lerp3 = (p, q, t) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t];
    const down = (p, d) => [p[0], p[1] - d, p[2]];
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 2; c++) {
        if (!m[r * 2 + c]) continue;
        const K = [c ? x1 : x0, yb, r ? z1 : z0];
        addBeam(C.frame, [K[0], K[1] - 0.04, K[2]], [cx, apex - 0.04, cz], 0.22, 0.24, fc);   // espigao da quina
        const tris = [[K, [cx, yb, K[2]]], [K, [K[0], yb, cz]]];
        for (const [k0, pm] of tris) {
          C.glass.addFace([down(k0, 0.1), down(pm, 0.1), down(A, 0.1)], WHITE, inside);
          const n = 5;
          for (let s = 0; s < n; s++) {
            const t0 = s / n, t1 = (s + 1) / n;
            const q0 = lerp3(k0, A, t0), q1 = lerp3(pm, A, t0), q2 = lerp3(pm, A, t1), q3 = lerp3(k0, A, t1);
            const verts = s === n - 1 ? [q0, q1, A] : [q0, q1, q2, q3];
            const col = fillColor(pal, rnd).multiplyScalar(s % 2 ? 0.93 : 1.05), dk = col.clone().multiplyScalar(0.7);
            C.fills.push({
              th: 0.03 + rnd() * 0.94,
              fn: (b) => { b.addFace(verts, col, inside); b.addFace(verts.map((p) => down(p, 0.16)), dk, above); },
            });
          }
        }
      }
    }
  }
}

// ===== Registro =====
const colKey = (i, j) => i + ',' + j;
export function pieceKey(o) {
  return `${o.type}|${o.axis || ''}|${o.i}|${o.j}|${Math.round(o.y * 4)}|${o.dir ?? ''}`;
}
// Regra do Fortnite: no mesmo quadrado e na mesma camada cabem um piso, uma escada e um cone (um de cada),
// e em cada borda cabe uma parede. Nunca duas pecas IGUAIS no mesmo lugar (a escada conta uma so, em qualquer direcao).
export function slotKey(o) {
  const y = Math.round(o.y * 4);
  if (o.type === 'wall') return `w|${o.axis}|${o.i}|${o.j}|${y}`;
  return `${o.type === 'floor' ? 'f' : o.type === 'ramp' ? 's' : 'c'}|${o.i}|${o.j}|${y}`;
}
const bySlot = new Map();
export function pieceExists(o) { return byKey.has(pieceKey(o)) || bySlot.has(slotKey(o)); }
export function pieceAt(o) { return byKey.get(pieceKey(o)) || null; }

function makeColliders(p) {
  if (p.type === 'ramp' || p.type === 'roof') {
    const g = GRID[p.type], nc = g[0], nr = g[1];
    const x0 = p.i * G, z0 = p.j * G;
    for (const r of maskRects(p.mask, nc, nr)) {
      let fp;
      if (p.type === 'ramp') {
        const tw = G / nc, th = G / nr;
        fp = p.uvRect(r.r0 * th, (r.r1 + 1) * th, r.c0 * tw, (r.c1 + 1) * tw);
      } else {
        const t = G / nc;
        fp = [x0 + r.c0 * t, z0 + r.r0 * t, x0 + (r.c1 + 1) * t, z0 + (r.r1 + 1) * t];
      }
      const c = p.type === 'ramp' ? rampCollider(x0, z0, p.dir, p.y, p, fp) : roofCollider(x0, z0, p.y, p, fp);
      p.colliders.push(c);
    }
  } else for (const bx of p.colBoxes()) p.colliders.push(boxCollider(bx[0], bx[1], bx[2], bx[3], bx[4], bx[5], p));
}
function buildGeometry(p) {
  const C = { frame: new GeomBuilder(), glass: new GeomBuilder(), fills: [] };
  p.parts(C);
  C.fills.sort((a, b) => a.th - b.th);
  const b = C.frame;
  p.baseCount = b.pos.length / 3;
  p.stages = [];
  for (const f of C.fills) { f.fn(b); p.stages.push(f.th, b.pos.length / 3); }
  return { solid: b.build(), glass: C.glass.pos.length ? C.glass.build() : null };
}
// mostra so o preenchimento ja "construido"
function applyProgress(p) {
  if (!p.mesh) return;
  let n = p.baseCount;
  const st = p.stages;
  for (let k = 0; k < st.length; k += 2) { if (st[k] <= p.prog) n = st[k + 1]; else break; }
  p.mesh.geometry.setDrawRange(0, n);
}
function dropGlass(p) {
  if (p.glass) { S.scene.remove(p.glass); p.glass.geometry.dispose(); p.glass = null; }
}
function makeMesh(p) {
  const g = buildGeometry(p);
  if (p.mesh) { p.mesh.geometry.dispose(); p.mesh.geometry = g.solid; }
  else {
    p.mesh = new THREE.Mesh(g.solid, PIECE_MAT);
    p.mesh.castShadow = true;
    p.mesh.receiveShadow = true;
    S.scene.add(p.mesh);
  }
  dropGlass(p);
  if (p.prog < 1 && g.glass) {
    p.glass = new THREE.Mesh(g.glass, GLASS_MAT);
    p.glass.renderOrder = 3;
    S.scene.add(p.glass);
  } else if (g.glass) g.glass.dispose();
  applyProgress(p);
}

// pecas ainda em construcao: avanca o progresso, a vida e o preenchimento
const building = new Set();
export function updatePieces(dt) {
  for (const p of building) {
    if (p.dead) { building.delete(p); continue; }
    const B = BUILD[p.mat] || BUILD.wood;
    const before = p.prog;
    p.prog = Math.min(1, p.prog + dt / B.time);
    p.hp = Math.min(p.maxHp, p.hp + p.maxHp * (1 - B.start) * (p.prog - before));
    applyProgress(p);
    if (p.prog >= 1) { dropGlass(p); building.delete(p); }
  }
}

export function createPiece(o) {
  const mat = o.mat && MATS[o.mat] ? MATS[o.mat] : null;
  if (o.maxHp === undefined) o.maxHp = mat ? mat.hp : 400;
  if (!o.color) o.color = new THREE.Color(mat ? mat.color : '#cccccc').multiplyScalar(0.97 + Math.random() * 0.06);
  if (!o.trim) o.trim = new THREE.Color(mat ? mat.trim || mat.color : '#999999');
  const p = new Piece(o);
  p.key = pieceKey(p);
  p.slot = slotKey(p);
  if (byKey.has(p.key) || bySlot.has(p.slot)) return null;
  byKey.set(p.key, p);
  bySlot.set(p.slot, p);
  allPieces.add(p);
  const ck = colKey(p.i, p.j);
  let set = cols.get(ck);
  if (!set) cols.set(ck, (set = new Set()));
  set.add(p);
  // nasce como "planta": moldura + painel, com parte da vida; vai se completando sozinha
  const B = BUILD[p.mat] || BUILD.wood;
  p.prog = o.prog !== undefined ? o.prog : 0;
  p.hp = p.maxHp * (B.start + (1 - B.start) * p.prog);
  makeColliders(p);
  makeMesh(p);
  if (p.prog < 1) building.add(p);
  return p;
}

// aplica uma nova mascara (edicao): refaz colisao e malha
export function setMask(p, mask) {
  if (p.dead) return;
  p.mask = mask.slice();
  for (const c of p.colliders) removeCollider(c);
  p.colliders = [];
  makeColliders(p);
  makeMesh(p);
}

export function clearAllPieces() {
  for (const p of Array.from(allPieces)) destroyPiece(p, true);
}
export function flushChunks() {}

export function destroyPiece(p, silent = false) {
  if (p.dead) return;
  p.dead = true;
  for (const c of p.colliders) removeCollider(c);
  allPieces.delete(p);
  byKey.delete(p.key);
  if (bySlot.get(p.slot) === p) bySlot.delete(p.slot);
  const set = cols.get(colKey(p.i, p.j));
  if (set) set.delete(p);
  if (p.mesh) { S.scene.remove(p.mesh); p.mesh.geometry.dispose(); p.mesh = null; }
  dropGlass(p);
  building.delete(p);
  if (!silent && hooks.onDestroy) hooks.onDestroy(p);
}

export function damagePiece(p, dmg) {
  if (p.dead) return false;
  p.hp -= dmg;
  if (p.hp <= 0) { destroyPiece(p); return true; }
  return false;
}

// peca mais proxima (no mesmo "reticulado vertical") para alinhar construcoes novas
export function findAnchor(ci, cj, y) {
  let best = null, bd = 1e9;
  for (let a = -1; a <= 1; a++) {
    for (let b = -1; b <= 1; b++) {
      const set = cols.get(colKey(ci + a, cj + b));
      if (!set) continue;
      for (const p of set) {
        const d = Math.abs(p.y - y);
        if (d < bd) { bd = d; best = p; }
      }
    }
  }
  return best;
}

export function hasPieceBelow(i, j, y) {
  for (let a = -1; a <= 0; a++) {
    for (let b = -1; b <= 0; b++) {
      const set = cols.get(colKey(i + a, j + b));
      if (!set) continue;
      for (const p of set) if (Math.abs(p.y - (y - H)) < 0.6) return true;
    }
  }
  return false;
}

// caixa (aabb) aproximada de uma peca, para saber se duas pecas se encostam
function aabbOf(o) {
  const x0 = o.i * G, z0 = o.j * G, y = o.y;
  if (o.type === 'wall') return o.axis === 'x' ? [x0, y, z0 - T / 2, x0 + G, y + H, z0 + T / 2] : [x0 - T / 2, y, z0, x0 + T / 2, y + H, z0 + G];
  if (o.type === 'floor') return [x0, y - T, z0, x0 + G, y, z0 + G];
  if (o.type === 'ramp') return [x0, y, z0, x0 + G, y + H, z0 + G];
  return [x0, y, z0, x0 + G, y + ROOF_PEAK, z0 + G];
}
// Regra de construcao: so pode colocar uma peca encostada em outra ja existente.
// A primeira peca (sem vizinhas) so pode ser no chao, ao lado de onde o jogador esta.
// so vale construir na frente e nos lados (nao atras): sem girar 360
function inFront(t, a, yaw) {
  const bx = aabbOf(t);
  const cx = (bx[0] + bx[3]) / 2 - a.x, cz = (bx[2] + bx[5]) / 2 - a.z;
  const d = Math.hypot(cx, cz);
  if (d < 1.0) return true;
  const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
  return (cx * fx + cz * fz) / d > -0.17;
}
// escada: so as pontas (embaixo e em cima) conectam; as outras pecas usam a caixa inteira
function connBoxes(o) {
  if (o.type !== 'ramp') return [aabbOf(o)];
  const x0 = o.i * G, z0 = o.j * G, x1 = x0 + G, z1 = z0 + G, y = o.y, w = 0.25;
  const slab = [x0, y + H - 0.4, z0, x1, y + H, z1];   // por cima da escada tambem conecta (piso, cone, outra escada)
  switch (o.dir) {
    case 0: return [slab, [x0, y - 0.2, z0, x0 + w, y + 0.2, z1]];
    case 2: return [slab, [x1 - w, y - 0.2, z0, x1, y + 0.2, z1]];
    case 1: return [slab, [x0, y - 0.2, z0, x1, y + 0.2, z0 + w]];
    default: return [slab, [x0, y - 0.2, z1 - w, x1, y + 0.2, z1]];
  }
}
const boxHit = (b, q, e) => b[0] - e <= q[3] && b[3] + e >= q[0] && b[1] - e <= q[4] && b[4] + e >= q[1] && b[2] - e <= q[5] && b[5] + e >= q[2];
export function canPlace(t, a) {
  const tb = connBoxes(t), e = 0.2;
  const pci = Math.floor(a.x / G), pcj = Math.floor(a.z / G);
  for (const p of allPieces) {
    for (const q of connBoxes(p)) for (const b of tb) if (boxHit(b, q, e)) return true;
  }
  const dci = t.type === 'wall' && t.axis === 'z' ? Math.min(Math.abs(t.i - 1 - pci), Math.abs(t.i - pci)) : Math.abs(t.i - pci);
  const dcj = t.type === 'wall' && t.axis === 'x' ? Math.min(Math.abs(t.j - 1 - pcj), Math.abs(t.j - pcj)) : Math.abs(t.j - pcj);
  return dci <= 1 && dcj <= 1 && Math.abs(t.y - a.y) < 0.8;
}

// Se o alvo da mira nao encaixa em nenhuma peca, procura o encaixe valido mais proximo da mira
// (ex.: olhando para o ceu, o piso vai para a ponta da escada).
export function findSnap(type, a, cam, dir, mat, prefDir, yaw) {
  const near = [];
  for (const p of allPieces) {
    const c = p.center();
    if (Math.hypot(c[0] - a.x, c[2] - a.z) < 34) near.push(p);
  }
  if (near.length > 120) near.length = 120;
  const seen = new Set(), cands = [];
  const add = (o) => {
    o.type = type; o.mat = mat;
    const k = pieceKey(o);
    if (seen.has(k)) return;
    seen.add(k);
    const bx = aabbOf(o);
    const cx = (bx[0] + bx[3]) / 2, cy = (bx[1] + bx[4]) / 2, cz = (bx[2] + bx[5]) / 2;
    const vx = cx - cam.x, vy = cy - cam.y, vz = cz - cam.z;
    const t = vx * dir.x + vy * dir.y + vz * dir.z;
    const qx = vx - dir.x * t, qy = vy - dir.y * t, qz = vz - dir.z * t;
    let score = Math.hypot(qx, qy, qz);
    if (t < 0) score += 40 + -t;
    if (type === 'ramp' && o.dir !== prefDir) score += 1.5;
    o.score = score;
    cands.push(o);
  };
  const cells = [];
  const pci = Math.floor(a.x / G), pcj = Math.floor(a.z / G);
  for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) cells.push([pci + di, pcj + dj, 0]);
  for (const p of near) cells.push([p.i, p.j, p.y]);
  for (const [pi, pj, py] of cells) {
    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        const i = pi + di, j = pj + dj;
        for (const y of py === 0 ? [0, H] : [py - H, py, py + H]) {
          if (type === 'wall') {
            add({ axis: 'x', i, j, y }); add({ axis: 'x', i, j: j + 1, y });
            add({ axis: 'z', i, j, y }); add({ axis: 'z', i: i + 1, j, y });
          } else if (type === 'ramp') {
            for (let d = 0; d < 4; d++) add({ i, j, y, dir: d });
          } else add({ i, j, y });
        }
      }
    }
  }
  cands.sort((p, q) => p.score - q.score);
  for (const o of cands) {
    if (o.score > 60) break;
    if (!pieceExists(o) && canPlace(o, a, yaw)) return o;
  }
  return null;
}

export function skirtFor(i, j, y) {
  if (hasPieceBelow(i, j, y)) return 0;
  if (y > 0.9) return 0;   // piso no alto fica fino, sem virar um bloco
  const m = Math.min(
    heightAt(i * G, j * G), heightAt((i + 1) * G, j * G), heightAt(i * G, (j + 1) * G), heightAt((i + 1) * G, (j + 1) * G),
  );
  return clamp(y - m + 0.15, 0, 3);
}

// Geometria "fantasma" da previa: moldura + painel da peca (sem o preenchimento)
export function ghostGeometry(o) {
  const tmp = new Piece({ ...o, maxHp: 1 });
  const b = new GeomBuilder();
  tmp.parts({ frame: b, glass: b, fills: [] });
  return b.build();
}
