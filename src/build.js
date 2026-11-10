import { G, H, STEP } from './config.js';
import { supportAt, raycast } from './physics.js';
import { findAnchor, pieceExists, createPiece, skirtFor, isPiece, allPieces } from './pieces.js';

// Logica de construcao: o jogador constroi onde a MIRA aponta (buildTargetAim);
// o bot usa o alvo relativo a propria celula (buildTargetFor).
export const DX = [1, 0, -1, 0], DZ = [0, 1, 0, -1];

export function dirFromYaw(yaw) {
  const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
  return Math.abs(fx) > Math.abs(fz) ? (fx > 0 ? 0 : 2) : (fz > 0 ? 1 : 3);
}

function latticeY(ci, cj, desired, mode) {
  const anchor = findAnchor(ci, cj, desired);
  const origin = anchor ? anchor.y : supportAt((ci + 0.5) * G, (cj + 0.5) * G, desired + 0.7, 0.1);
  const k = mode === 'floor' ? Math.floor((desired - origin + 0.12) / H) : Math.round((desired - origin) / H);
  return origin + Math.max(-1, k) * H;
}

const clampN = (v, a, b) => (v < a ? a : v > b ? b : v);

// ===== Construcao pela mira =====
// cam: posicao da camera; dir: direcao da mira (unitaria); a: ator (para o nivel e o alcance)
export function buildTargetAim(a, cam, dir, camYaw, type, mat) {
  const standY = a.grounded ? a.y : supportAt(a.x, a.z, a.y + STEP);
  const pci = Math.floor(a.x / G), pcj = Math.floor(a.z / G);

  // 1) ponto para onde a mira aponta
  let Px, Py, Pz, hitPiece = null, hitTop = false, hitTerrain = false, hit = false;
  const r = raycast(cam.x, cam.y, cam.z, dir.x, dir.y, dir.z, 30);
  if (r) {
    hit = true;
    Px = cam.x + dir.x * r.t; Py = cam.y + dir.y * r.t; Pz = cam.z + dir.z * r.t;
    if (r.kind === 'terrain') hitTerrain = true;
    else {
      const o = r.c && r.c.owner;
      if (isPiece(o)) hitPiece = o;
      if (r.kind === 'box' && r.c && Math.abs(Py - r.c.y1) < 0.07) hitTop = true;
    }
  } else if (dir.y < -0.02) {
    const t = (standY - cam.y) / dir.y;
    const tt = t > 0 && t < 26 ? t : 10;
    Px = cam.x + dir.x * tt; Py = cam.y + dir.y * tt; Pz = cam.z + dir.z * tt;
    if (t > 0 && t < 26) hitTerrain = true;
  } else { Px = cam.x + dir.x * 10; Py = cam.y + dir.y * 10; Pz = cam.z + dir.z * 10; }
  // ponto do lado "livre" (da camera) da superficie atingida
  const Qx = Px - dir.x * 0.12, Qy = Py - dir.y * 0.12, Qz = Pz - dir.z * 0.12;

  // 2) nivel (altura) de referencia
  let yRef;
  if (hitTerrain) yRef = standY;
  else if (hitPiece && hitTop) yRef = r.c.y1;
  else if (hitPiece && (hitPiece.type === 'ramp' || hitPiece.type === 'roof')) yRef = hitPiece.y;
  else yRef = hit ? Qy : Math.max(Qy, standY);
  yRef = clampN(yRef, standY - H, standY + 2 * H + 0.5);

  const ci = Math.floor(Qx / G);
  const cj = Math.floor(Qz / G);
  const fx = Qx - ci * G, fz = Qz - cj * G;       // posicao dentro da celula

  if (type === 'wall') {
    const y = latticeY(ci, cj, yRef, 'floor');
    // bordas da celula, da mais proxima para a mais distante
    const edges = [
      { d: fx, axis: 'z', i: ci, j: cj }, { d: G - fx, axis: 'z', i: ci + 1, j: cj },
      { d: fz, axis: 'x', i: ci, j: cj }, { d: G - fz, axis: 'x', i: ci, j: cj + 1 },
    ].sort((p, q) => p.d - q.d);
    const pick = edges[0];   // sempre a borda mais proxima do ponto mirado
    return { type: 'wall', axis: pick.axis, i: pick.i, j: pick.j, y, mat };
  }

  if (type === 'floor' || type === 'roof') {
    const i = ci, j = cj;
    const y = latticeY(i, j, yRef, 'round');
    return { type, i, j, y, mat };
  }

  // escada: sobe no sentido para onde a camera olha; pode ficar em cima de um piso
  const dirN = dirFromYaw(camYaw);
  const i = ci, j = cj;
  const y = latticeY(i, j, yRef, 'round');
  return { type: 'ramp', i, j, dir: dirN, y, mat };
}

// ===== Alvo relativo ao ator (usado pelo bot) =====
export function buildTargetFor(a, yaw, pitch, type, mat, opts = {}) {
  const ci = Math.floor(a.x / G), cj = Math.floor(a.z / G);
  const dir = opts.dir !== undefined ? opts.dir : dirFromYaw(yaw);
  const standY = a.grounded ? a.y : supportAt(a.x, a.z, a.y + STEP);
  let t;
  if (type === 'wall') {
    let i, j, axis;
    if (dir === 0) { axis = 'z'; i = ci + 1; j = cj; } else if (dir === 2) { axis = 'z'; i = ci; j = cj; }
    else if (dir === 1) { axis = 'x'; i = ci; j = cj + 1; } else { axis = 'x'; i = ci; j = cj; }
    t = { type: 'wall', axis, i, j, y: latticeY(ci, cj, standY + (pitch > 0.75 ? H : 0), 'round'), variant: 'solid' };
  } else if (type === 'floor') {
    if (opts.ceiling) t = { type: 'floor', i: ci, j: cj, y: latticeY(ci, cj, standY + H, 'round') };
    else {
      const fi = ci + DX[dir], fj = cj + DZ[dir];
      t = { type: 'floor', i: fi, j: fj, y: latticeY(fi, fj, standY, 'round') };
    }
  } else {
    const fi = ci + DX[dir], fj = cj + DZ[dir];
    t = { type: 'ramp', i: fi, j: fj, dir, y: latticeY(fi, fj, standY, 'round') };
  }
  t.mat = mat;
  return t;
}

export function placePiece(t, owner = 'player') {
  if (pieceExists(t)) return null;
  return createPiece({ ...t, owner, skirt: t.type === 'roof' || t.type === 'ramp' ? 0 : skirtFor(t.i, t.j, t.y) });
}

// ===== Construcao relativa ao jogador: sempre para onde a camera aponta (frente / lados), 1 chunk =====
export function buildTargetRel(a, yaw, pitch, type, mat) {
  const pci = Math.floor(a.x / G), pcj = Math.floor(a.z / G);
  const d = dirFromYaw(yaw);
  let base = Math.floor((a.y + 0.4) / H) * H;      // nivel (andar) em que o jogador esta
  let fwd = base;                                  // nivel das pecas a frente
  let dd = d;                                      // direcao usada por piso/escada/cone
  for (const p of allPieces) {
    if (p.type === 'ramp' && p.i === pci && p.j === pcj && a.y >= p.y - 0.3 && a.y <= p.y + H + 0.3) {
      base = p.y;
      if (d === (p.dir + 2) % 4) fwd = p.y;        // olhando escada abaixo
      else { dd = p.dir; fwd = p.y + H; }          // subindo: o que vem a frente e o patamar do topo, na mesma camada
      break;
    }
  }
  const fi = pci + DX[dd], fj = pcj + DZ[dd];
  const up = pitch > 0.45;                         // olhando para cima: peca por cima da cabeca
  // ja existe uma escada na celula da frente?
  let ahead = null;
  for (const p of allPieces) if (p.type === 'ramp' && p.i === fi && p.j === fj && Math.abs(p.y - fwd) < 0.3) { ahead = p; break; }
  // candidatos em ordem de preferencia: fica o primeiro lugar que ainda nao tem uma peca IGUAL.
  // Pecas diferentes (piso, escada, cone) podem dividir o mesmo quadrado; iguais vao para a camada de cima.
  let cands;
  if (type === 'wall') {
    let axis, i, j;
    if (d === 0) { axis = 'z'; i = pci + 1; j = pcj; } else if (d === 2) { axis = 'z'; i = pci; j = pcj; }
    else if (d === 1) { axis = 'x'; i = pci; j = pcj + 1; } else { axis = 'x'; i = pci; j = pcj; }
    cands = [{ type: 'wall', axis, i, j, y: base }, { type: 'wall', axis, i, j, y: base + H }];
  } else if (type === 'floor') {
    if (up) cands = [{ type: 'floor', i: pci, j: pcj, y: base + H }];
    else if (ahead && ahead.dir === dd) cands = [
      { type: 'floor', i: fi + DX[dd], j: fj + DZ[dd], y: fwd + H },   // patamar no topo da escada da frente
      { type: 'floor', i: fi, j: fj, y: fwd },                        // embaixo da escada, no mesmo quadrado
      { type: 'floor', i: fi, j: fj, y: fwd + H },                    // por cima da escada
    ];
    else if (ahead) cands = [{ type: 'floor', i: fi, j: fj, y: fwd + H }, { type: 'floor', i: fi, j: fj, y: fwd }];
    else cands = [{ type: 'floor', i: fi, j: fj, y: fwd }, { type: 'floor', i: fi, j: fj, y: fwd + H }];
  } else if (type === 'roof') {
    // cone: no mesmo quadrado/camada do piso e da escada da frente; se ja tem cone ali, vai para cima
    if (up) cands = [{ type: 'roof', i: pci, j: pcj, y: base + H }];
    else cands = [{ type: 'roof', i: fi, j: fj, y: fwd }, { type: 'roof', i: fi, j: fj, y: fwd + H }];
  } else {
    cands = [{ type: 'ramp', i: fi, j: fj, dir: dd, y: fwd }, { type: 'ramp', i: fi, j: fj, dir: dd, y: fwd + H }];
  }
  let t = cands.find((c) => !pieceExists(c)) || cands[0];
  t.mat = mat;
  return t;
}
