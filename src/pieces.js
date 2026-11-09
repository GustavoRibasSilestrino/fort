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

  // ----- visual -----
  fill(b) {
    if (this.type === 'wall') this.fillWall(b);
    else if (this.type === 'floor') this.fillFloor(b);
    else if (this.type === 'ramp') this.fillStairs(b);
    else this.fillRoof(b);
  }

  fillWall(b) {
    const tw = G / 3, m = this.mask, c = this.color, tr = this.trim;
    const box = (a0, a1, b0, b1, half, col) => {
      const y0 = this.y + b0 * TH, y1 = this.y + b1 * TH;
      if (this.axis === 'x') b.addBox(this.i * G + a0, y0, this.j * G - half, this.i * G + a1, y1, this.j * G + half, col, col);
      else b.addBox(this.i * G - half, y0, this.j * G + a0, this.i * G + half, y1, this.j * G + a1, col, col);
    };
    const wood = this.mat === 'wood';
    if (wood) this.fillLogs(b, box);
    else for (const r of maskRects(m, 3, 3)) box(r.c0 * tw, (r.c1 + 1) * tw, r.r0, r.r1 + 1, 0.08, c);
    const rail = wood ? new THREE.Color('#5a3720') : tr;
    for (const e of edgeBeams(m, 3, 3)) {
      if (e.kind === 'h') {
        const bw = BW * 1.4 / TH;
        const b0 = e.side > 0 ? e.line : e.line - bw, b1 = e.side > 0 ? e.line + bw : e.line;
        box(e.i0 * tw, (e.i1 + 1) * tw, b0, b1, T / 2, rail);
      } else {
        const a0 = e.side > 0 ? e.line * tw : e.line * tw - BW, a1 = e.side > 0 ? e.line * tw + BW : e.line * tw;
        box(a0, a1, e.i0, e.i1 + 1, T / 2, rail);
      }
    }
  }

  // parede de madeira: toras verticais tortas, de cores variadas (como uma cerca de troncos)
  fillLogs(b, box) {
    const tw = G / 3, m = this.mask;
    const seed = (this.i * 73856093) ^ (this.j * 19349663) ^ ((this.y * 100) | 0) ^ (this.axis === 'x' ? 5 : 9);
    let st = seed >>> 0 || 1;
    const rnd = () => { st = (st * 1664525 + 1013904223) >>> 0; return st / 4294967296; };
    const PAL = ['#8b5a3c', '#a8693f', '#c47a4a', '#6b4129', '#d08a5a', '#7a4a2e', '#b87445', '#935c38'];
    const N = 15, slot = G / N;
    // sem tabua de fundo: as frestas entre as toras sao vazadas
    const slotOff = new Array(N);
    for (let k = 0; k < N; k++) {
      const col = new THREE.Color(PAL[(rnd() * PAL.length) | 0]).multiplyScalar(0.9 + rnd() * 0.2);
      const w = slot * (0.5 + rnd() * 0.2) * 0.5;
      const cx = (k + 0.5) * slot;
      const tile = Math.min(2, Math.floor(cx / tw));
      let off = (rnd() - 0.5) * slot * 0.5;
      for (let r = 0; r < 3; r++) {
        const next = (rnd() - 0.5) * slot * 0.6;
        if (m[r * 3 + tile]) {
          const hw = w;
          // cada segmento: tora de 2 camadas (miolo claro + laterais escuras) para dar volume arredondado
          box(cx + off - hw, cx + off + hw, r, r + 1, 0.1, col.clone().multiplyScalar(0.8));
          box(cx + off - hw * 0.55, cx + off + hw * 0.55, r, r + 1, 0.125, col);
          // nos / veios
          if (rnd() < 0.4) box(cx + off - hw * 0.4, cx + off + hw * 0.4, r + 0.3 + rnd() * 0.4, r + 0.36 + rnd() * 0.4, 0.13, col.clone().multiplyScalar(0.6));
        }
        off = next;
      }
    }
  }

  fillFloor(b) {
    const tw = G / 2, m = this.mask, c = this.color, tr = this.trim;
    const sk = this.skirt || 0;
    const x0 = this.i * G, z0 = this.j * G;
    for (const r of maskRects(m, 2, 2)) {
      // tabuas (estilo "plastico"): faixas com cor levemente diferente e frestas finas
      const xa = x0 + r.c0 * tw, xb = x0 + (r.c1 + 1) * tw, za = z0 + r.r0 * tw, zb = z0 + (r.r1 + 1) * tw;
      const wood = this.mat === 'wood';
      if (!wood) b.addBox(xa, this.y - T - sk, za, xb, this.y - 0.02, zb, tr, tr);   // madeira: piso vazado entre as tabuas
      const n = Math.max(1, Math.round((xb - xa) / 0.5)), sw = (xb - xa) / n, gp = wood ? 0.07 : 0.015;
      for (let k = 0; k < n; k++) {
        const col = c.clone().multiplyScalar(k % 2 ? 0.93 : 1.05 + ((k * 7) % 5) * 0.01);
        b.addBox(xa + k * sw + gp, this.y - (wood ? T : 0.08), za, xa + (k + 1) * sw - gp, this.y, zb, col, col);
      }
    }
    const dn = this.y - T - 0.2 - sk;
    for (const e of edgeBeams(m, 2, 2)) {
      if (e.kind === 'h') {
        const za = e.side > 0 ? z0 + e.line * tw : z0 + e.line * tw - BW, zb = e.side > 0 ? z0 + e.line * tw + BW : z0 + e.line * tw;
        b.addBox(x0 + e.i0 * tw, dn, za, x0 + (e.i1 + 1) * tw, this.y, zb, tr, tr);
      } else {
        const xa = e.side > 0 ? x0 + e.line * tw : x0 + e.line * tw - BW, xb = e.side > 0 ? x0 + e.line * tw + BW : x0 + e.line * tw;
        b.addBox(xa, dn, z0 + e.i0 * tw, xb, this.y, z0 + (e.i1 + 1) * tw, tr, tr);
      }
    }
  }

  // escada com degraus e longarinas, vazia por baixo; editavel em 2x2
  fillStairs(b) {
    const N = 12, d = G / N, rise = SLOPE * d, yb = this.y;
    const c = this.color, tr = this.trim;
    const light = c.clone().multiplyScalar(1.08);
    const SW = 0.24, nc = 2, nr = 2, tw = G / nc, th = G / nr;
    const sb = (ua, ub, va, vb, ya, yb2, col, col2) => {
      const r = this.uvRect(ua, ub, va, vb);
      b.addBox(r[0], ya, r[1], r[2], yb2, r[3], col, col2 || col);
    };
    // faixas de colunas presentes por linha (ao longo da subida)
    const rowRuns = [];
    for (let r = 0; r < nr; r++) {
      const runs = [];
      let cc = 0;
      while (cc < nc) {
        if (!this.mask[r * nc + cc]) { cc++; continue; }
        let e = cc;
        while (e + 1 < nc && this.mask[r * nc + e + 1]) e++;
        runs.push([cc * tw, (e + 1) * tw]);
        cc = e + 1;
      }
      rowRuns.push(runs);
    }
    for (let k = 0; k < N; k++) {
      const ua = k * d, ub = (k + 1) * d;
      const r = Math.min(nr - 1, Math.floor(((k + 0.5) * d) / th));
      const top = yb + SLOPE * (k + 0.5) * d;
      for (const [va, vb] of rowRuns[r]) {
        sb(ua, ub, va + SW, vb - SW, top - 0.12, top, k % 2 ? light : c, tr);   // degrau
        sb(ua, ua + 0.07, va + SW, vb - SW, top - rise, top - 0.1, tr, tr);      // espelho
        sb(ua, ub, va, va + SW, top - 0.42, top, tr, tr);                         // longarina
        sb(ua, ub, vb - SW, vb, top - 0.42, top, tr, tr);
      }
    }
  }

  // cone: telhado em piramide, oco por baixo; editavel em 3x3
  fillRoof(b) {
    const x0 = this.i * G, z0 = this.j * G, x1 = x0 + G, z1 = z0 + G, yb = this.y;
    const cx = x0 + G / 2, cz = z0 + G / 2, apex = yb + ROOF_PEAK;
    const c = this.color, tr = this.trim;
    const dn = 0.28;
    const full = this.mask.every(Boolean);
    if (full) {
      const corners = [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
      const out = [cx, yb + 0.3, cz];
      for (let k = 0; k < 4; k++) {
        const a = corners[k], e = corners[(k + 1) % 4];
        const shade = c.clone().multiplyScalar(k % 2 ? 0.92 : 1.05);
        b.addFace([[a[0], yb, a[1]], [e[0], yb, e[1]], [cx, apex, cz]], shade, out);
        b.addFace([[a[0], yb - dn, a[1]], [e[0], yb - dn, e[1]], [cx, apex - dn * 1.6, cz]], tr, [cx, apex + 9, cz]);
      }
      const bt = 0.22;
      b.addBox(x0, yb - dn, z0, x1, yb + 0.12, z0 + bt, tr, tr);
      b.addBox(x0, yb - dn, z1 - bt, x1, yb + 0.12, z1, tr, tr);
      b.addBox(x0, yb - dn, z0 + bt, x0 + bt, yb + 0.12, z1 - bt, tr, tr);
      b.addBox(x1 - bt, yb - dn, z0 + bt, x1, yb + 0.12, z1 - bt, tr, tr);
      return;
    }
    // editado: telhado feito tile a tile
    const hh = G / 2, tw = G / 2;
    const surf = (x, z) => yb + ROOF_PEAK * (1 - Math.min(Math.max(Math.abs(x - cx), Math.abs(z - cz)), hh) / hh);
    const out = [cx, yb + 0.2, cz];
    for (let r = 0; r < 2; r++) {
      for (let cc = 0; cc < 2; cc++) {
        if (!this.mask[r * 2 + cc]) continue;
        const xa = x0 + cc * tw, xb = xa + tw, za = z0 + r * tw, zb = za + tw, xm = (xa + xb) / 2, zm = (za + zb) / 2;
        const A = [xa, surf(xa, za), za], B = [xb, surf(xb, za), za], C = [xb, surf(xb, zb), zb], D = [xa, surf(xa, zb), zb], M = [xm, surf(xm, zm), zm];
        const tri = (p, q, s, col) => {
          b.addFace([p, q, s], col, out);
          b.addFace([[p[0], p[1] - dn, p[2]], [q[0], q[1] - dn, q[2]], [s[0], s[1] - dn, s[2]]], tr, [cx, apex + 9, cz]);
        };
        const shade = c.clone().multiplyScalar((r + cc) % 2 ? 0.94 : 1.04);
        tri(A, B, M, shade); tri(B, C, M, shade); tri(C, D, M, shade); tri(D, A, M, shade);
      }
    }
    for (const e of edgeBeams(this.mask, 2, 2)) {
      if (e.kind === 'h') {
        const za = z0 + e.line * tw;
        const xa = x0 + e.i0 * tw, xb = x0 + (e.i1 + 1) * tw;
        const h = Math.max(surf(xa, za), surf(xb, za), surf((xa + xb) / 2, za));
        const lo = Math.min(surf(xa, za), surf(xb, za));
        b.addBox(xa, lo - dn, e.side > 0 ? za : za - BW, xb, h + 0.05, e.side > 0 ? za + BW : za, tr, tr);
      } else {
        const xa = x0 + e.line * tw;
        const za = z0 + e.i0 * tw, zb = z0 + (e.i1 + 1) * tw;
        const h = Math.max(surf(xa, za), surf(xa, zb), surf(xa, (za + zb) / 2));
        const lo = Math.min(surf(xa, za), surf(xa, zb));
        b.addBox(e.side > 0 ? xa : xa - BW, lo - dn, za, e.side > 0 ? xa + BW : xa, h + 0.05, zb, tr, tr);
      }
    }
  }
}

// ===== Registro =====
const colKey = (i, j) => i + ',' + j;
export function pieceKey(o) {
  return `${o.type}|${o.axis || ''}|${o.i}|${o.j}|${Math.round(o.y * 4)}|${o.dir ?? ''}`;
}
// "chunk": 1 peca por espaco. Parede = uma por borda/nivel; piso, escada e cone dividem o mesmo espaco da celula/nivel.
export function slotKey(o) {
  return o.type === 'wall' ? `w|${o.axis}|${o.i}|${o.j}|${Math.round(o.y * 4)}` : `f|${o.i}|${o.j}|${Math.round(o.y * 4)}`;
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
function makeMesh(p) {
  const b = new GeomBuilder();
  p.fill(b);
  if (p.mesh) { p.mesh.geometry.dispose(); p.mesh.geometry = b.build(); return; }
  p.mesh = new THREE.Mesh(b.build(), PIECE_MAT);
  p.mesh.castShadow = true;
  p.mesh.receiveShadow = true;
  S.scene.add(p.mesh);
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
  makeColliders(p);
  makeMesh(p);
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
  switch (o.dir) {
    case 0: return [[x1 - w, y + H - 0.4, z0, x1, y + H, z1], [x0, y - 0.2, z0, x0 + w, y + 0.2, z1]];
    case 2: return [[x0, y + H - 0.4, z0, x0 + w, y + H, z1], [x1 - w, y - 0.2, z0, x1, y + 0.2, z1]];
    case 1: return [[x0, y + H - 0.4, z1 - w, x1, y + H, z1], [x0, y - 0.2, z0, x1, y + 0.2, z0 + w]];
    default: return [[x0, y + H - 0.4, z0, x1, y + H, z0 + w], [x0, y - 0.2, z1 - w, x1, y + 0.2, z1]];
  }
}
const boxHit = (b, q, e) => b[0] - e <= q[3] && b[3] + e >= q[0] && b[1] - e <= q[4] && b[4] + e >= q[1] && b[2] - e <= q[5] && b[5] + e >= q[2];
export function canPlace(t, a, yaw) {
  if (yaw !== undefined && !inFront(t, a, yaw)) return false;
  const tb = connBoxes(t), e = 0.2;
  const pci = Math.floor(a.x / G), pcj = Math.floor(a.z / G);
  // camada: so na mesma altura do jogador (ou um andar acima se empilhando / continuando a escada)
  const lvl = Math.floor((a.y + 0.4) / H) * H;
  if (t.type === 'wall') {
    const same = Math.abs(t.y - lvl) < 0.3;
    const stack = Math.abs(t.y - (lvl + H)) < 0.3 && bySlot.has(slotKey({ type: 'wall', axis: t.axis, i: t.i, j: t.j, y: t.y - H }));
    if (!same && !stack) return false;
  } else if (t.y < lvl - 0.3 || t.y > lvl + H + 0.3) return false;
  // alcance: apenas 1 chunk (celula) ao redor de onde o jogador esta
  const cells = t.type === 'wall' ? (t.axis === 'x' ? [[t.i, t.j - 1], [t.i, t.j]] : [[t.i - 1, t.j], [t.i, t.j]]) : [[t.i, t.j]];
  if (!cells.some(([ci, cj]) => Math.abs(ci - pci) <= 1 && Math.abs(cj - pcj) <= 1)) return false;
  for (const p of allPieces) {
    if (t.type === 'ramp' && p.type === 'wall' && Math.abs(p.y - t.y) < 0.5) {   // nao fechar a propria escada
      const ends = t.dir === 0 || t.dir === 2 ? p.axis === 'z' && p.j === t.j && (p.i === t.i || p.i === t.i + 1) : p.axis === 'x' && p.i === t.i && (p.j === t.j || p.j === t.j + 1);
      if (ends) return false;
    }
    if (p.type === 'ramp' && Math.abs(p.y - t.y) < 0.5) {
      // parede nao pode fechar as pontas da escada
      if (t.type === 'wall') {
        const ends = p.dir === 0 || p.dir === 2 ? t.axis === 'z' && t.j === p.j && (t.i === p.i || t.i === p.i + 1) : t.axis === 'x' && t.i === p.i && (t.j === p.j || t.j === p.j + 1);
        if (ends) return false;
      }
    }
    // piso/cone em cima da escada: so quando o jogador esta subindo nela
    if ((t.type === 'floor' || t.type === 'roof') && p.type === 'ramp' && p.i === t.i && p.j === t.j && t.y > p.y + 0.5) {
      if (!(pci === p.i && pcj === p.j && a.y > p.y + 0.3)) return false;
    }
  }
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

// Geometria "fantasma" para a previa da construcao
export function ghostGeometry(o) {
  const tmp = new Piece({ ...o, maxHp: 1 });
  const b = new GeomBuilder();
  const white = new THREE.Color('#ffffff');
  tmp.color = white; tmp.trim = white;
  tmp.fill(b);
  return b.build();
}
