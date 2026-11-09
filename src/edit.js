import * as THREE from 'three';
import { G, SLOPE } from './config.js';
import { S } from './state.js';
import { raycast, ROOF_PEAK } from './physics.js';
import { isPiece, setMask, FULL_MASK, GRID } from './pieces.js';
import { mouse } from './input.js';
import { hit, down } from './bind.js';
import { emit } from './events.js';
import { sfx } from './audio.js';

// Modo de edicao (estilo Fortnite): grade de tiles sobre uma peca sua.
// Parede, piso e cone: 3x3. Escada: 2x2. Clique (ou arraste) para tirar/devolver partes.
// Confirmacao configuravel: automatica ao soltar o clique, ao soltar a tecla de editar, ou apertando a tecla de novo.
export const E = { active: false, piece: null, mask: [], hover: -1, paint: null, skip: false, dirty: false, wasDown: false, nc: 3, nr: 3 };
let group = null, tiles = [];
const _d = new THREE.Vector3();
const MATS = {
  on: new THREE.MeshBasicMaterial({ color: '#3da5ff', transparent: true, opacity: 0.38, side: THREE.DoubleSide, depthTest: false, depthWrite: false }),
  off: new THREE.MeshBasicMaterial({ color: '#ff4d5a', transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthTest: false, depthWrite: false }),
  hover: new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthTest: false, depthWrite: false }),
};

export function isEditing() { return E.active; }

function quad(p00, p10, p11, p01) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([...p00, ...p10, ...p11, ...p01], 3));
  g.setIndex([0, 1, 2, 0, 2, 3]);
  return g;
}

// ponto no mundo para (u,v) de uma escada, na superficie dos degraus
function stairPoint(p, u, v, lift) {
  const r = p.uvRect(u, u, v, v);
  return [r[0], p.y + SLOPE * u + lift, r[1]];
}

function buildTiles() {
  clearTiles();
  group = new THREE.Group();
  const p = E.piece;
  const [nc, nr] = GRID[p.type];
  E.nc = nc; E.nr = nr;
  const cam = S.camera.position;
  tiles = [];
  const tw = G / nc, th = G / nr, gap = 0.06;
  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      let m;
      if (p.type === 'wall') {
        const wh = 3 / nr;
        const geo = new THREE.PlaneGeometry(tw - 0.1, wh - 0.1);
        m = new THREE.Mesh(geo, MATS.on);
        if (p.axis === 'x') {
          const pos = p.j * G, side = Math.sign(cam.z - pos) || 1;
          m.position.set(p.i * G + (c + 0.5) * tw, p.y + (r + 0.5) * wh, pos + side * 0.07);
        } else {
          const pos = p.i * G, side = Math.sign(cam.x - pos) || 1;
          m.rotation.y = Math.PI / 2;
          m.position.set(pos + side * 0.07, p.y + (r + 0.5) * wh, p.j * G + (c + 0.5) * tw);
        }
      } else if (p.type === 'floor') {
        m = new THREE.Mesh(new THREE.PlaneGeometry(tw - 0.1, th - 0.1), MATS.on);
        m.rotation.x = -Math.PI / 2;
        m.position.set(p.i * G + (c + 0.5) * tw, p.y + 0.07, p.j * G + (r + 0.5) * th);
      } else if (p.type === 'roof') {
        m = new THREE.Mesh(new THREE.PlaneGeometry(tw - 0.1, th - 0.1), MATS.on);
        m.rotation.x = -Math.PI / 2;
        m.position.set(p.i * G + (c + 0.5) * tw, p.y + ROOF_PEAK * 0.62, p.j * G + (r + 0.5) * th);
      } else { // escada: quadrados inclinados sobre os degraus
        const ua = r * th + gap, ub = (r + 1) * th - gap, va = c * tw + gap, vb = (c + 1) * tw - gap;
        m = new THREE.Mesh(quad(stairPoint(p, ua, va, 0.12), stairPoint(p, ub, va, 0.12), stairPoint(p, ub, vb, 0.12), stairPoint(p, ua, vb, 0.12)), MATS.on);
      }
      m.renderOrder = 9;
      m.frustumCulled = false;
      group.add(m);
      tiles.push(m);
    }
  }
  S.scene.add(group);
}
function clearTiles() {
  if (group) { S.scene.remove(group); group.children.forEach((m) => { if (m.geometry) m.geometry.dispose(); }); group = null; tiles = []; }
}

export function startEdit() {
  const c = S.camera;
  c.getWorldDirection(_d);
  const r = raycast(c.position.x, c.position.y, c.position.z, _d.x, _d.y, _d.z, 18);
  const o = r && r.c && r.c.owner;
  if (!isPiece(o) || o.owner !== 'player') { emit('toast', 'Mire em uma construção sua para editar'); return false; }
  E.active = true; E.piece = o; E.mask = o.mask.slice(); E.hover = -1; E.paint = null; E.skip = true; E.dirty = false; E.wasDown = false;
  buildTiles();
  sfx.empty();
  return true;
}

export function endEdit(apply) {
  if (!E.active) return;
  if (apply) {
    if (!E.mask.some(Boolean)) emit('toast', 'Deixe ao menos uma parte');
    else if (E.mask.some((v, i) => v !== E.piece.mask[i])) { setMask(E.piece, E.mask); sfx.build(); }
  }
  E.active = false; E.piece = null; E.paint = null; E.dirty = false;
  clearTiles();
}

function hoverTile() {
  const p = E.piece, c = S.camera, o = c.position;
  c.getWorldDirection(_d);
  const { nc, nr } = E;
  let t, col, row;
  if (p.type === 'wall') {
    const wh = 3 / nr;
    let a, b;
    if (p.axis === 'x') { if (Math.abs(_d.z) < 1e-5) return -1; t = (p.j * G - o.z) / _d.z; if (t < 0 || t > 40) return -1; a = o.x + _d.x * t - p.i * G; b = o.y + _d.y * t - p.y; }
    else { if (Math.abs(_d.x) < 1e-5) return -1; t = (p.i * G - o.x) / _d.x; if (t < 0 || t > 40) return -1; a = o.z + _d.z * t - p.j * G; b = o.y + _d.y * t - p.y; }
    col = Math.floor(a / (G / nc)); row = Math.floor(b / wh);
  } else if (p.type === 'floor' || p.type === 'roof') {
    const py = p.type === 'floor' ? p.y : p.y + ROOF_PEAK * 0.62;
    if (Math.abs(_d.y) < 1e-5) return -1;
    t = (py - o.y) / _d.y; if (t < 0 || t > 40) return -1;
    col = Math.floor((o.x + _d.x * t - p.i * G) / (G / nc)); row = Math.floor((o.z + _d.z * t - p.j * G) / (G / nr));
  } else { // escada: interseccao com o plano inclinado
    const ux = p.dir === 0 ? 1 : p.dir === 2 ? -1 : 0, uz = p.dir === 1 ? 1 : p.dir === 3 ? -1 : 0;
    const refx = p.dir === 2 ? p.i * G + G : p.i * G, refz = p.dir === 3 ? p.j * G + G : p.j * G;
    const den = _d.y - SLOPE * (ux * _d.x + uz * _d.z);
    if (Math.abs(den) < 1e-5) return -1;
    t = (p.y + SLOPE * (ux * (o.x - refx) + uz * (o.z - refz)) - o.y) / den;
    if (t < 0 || t > 40) return -1;
    const x = o.x + _d.x * t, z = o.z + _d.z * t;
    const u = ux * (x - refx) + uz * (z - refz);
    const v = (p.dir === 0 || p.dir === 2) ? z - p.j * G : x - p.i * G;
    row = Math.floor(u / (G / nr)); col = Math.floor(v / (G / nc));
  }
  if (col < 0 || col >= nc || row < 0 || row >= nr) return -1;
  return row * nc + col;
}

export function updateEdit(dt = 0.016) {
  if (!E.active) return;
  if (E.piece.dead) { endEdit(false); return; }
  const mode = S.settings.editConfirm || 'auto';
  if (E.skip) { E.skip = false; return; }   // a mesma tecla que abriu a edicao nao confirma
  if (mouse.rp) { endEdit(false); return; }
  if (mode === 'press' && hit('edit')) { endEdit(true); return; }
  if (mode === 'auto' && hit('edit')) { endEdit(true); return; }
  if (mode === 'release' && !down('edit')) { endEdit(true); return; }
  if (hit('editReset')) { E.mask = FULL_MASK(E.piece.type); E.dirty = false; E.paint = null; E.autoT = 0; sfx.empty(); }
  const h = hoverTile();
  if (h >= 0) {
    if (mouse.lp) { E.paint = !E.mask[h]; E.mask[h] = E.paint; E.dirty = true; sfx.ammo(); }
    else if (mouse.l && E.paint !== null && E.mask[h] !== E.paint) { E.mask[h] = E.paint; E.dirty = true; sfx.ammo(); }
  }
  if (!mouse.l) E.paint = null;
  E.hover = h;
  for (let i = 0; i < tiles.length; i++) tiles[i].material = i === h ? MATS.hover : E.mask[i] ? MATS.on : MATS.off;
  // modo automatico: ao soltar o clique depois de alterar, aplica logo em seguida (uma folga curta permite redefinir com o scroll)
  if (mode === 'auto') {
    if (mouse.l) E.autoT = 0;
    else if (E.wasDown && E.dirty) E.autoT = 0.3;
    if (E.autoT > 0) { E.autoT -= dt; if (E.autoT <= 0) { endEdit(true); return; } }
  }
  E.wasDown = mouse.l;
}
