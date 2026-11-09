import { G, H, SLOPE, STEP, SNAP, WORLD_HALF } from './config.js';
import { heightAt } from './terrain.js';

// ===== Grade espacial de colisores =====
const CS = 8;
const GN = 140;
const OFF = GN / 2;
const grid = new Array(GN * GN);
let stamp = 0;
let cid = 0;
export const STAIR_TH = 0.4;      // espessura da escada (aberta por baixo)
export const ROOF_PEAK = 2.5;     // altura do cone/telhado
export const ROOF_TH = 0.35;
let worldLimit = WORLD_HALF - 2;
export function setWorldLimit(v) { worldLimit = v; }

const cellIdx = (ix, iz) => (ix < 0 || iz < 0 || ix >= GN || iz >= GN ? -1 : iz * GN + ix);

export function addCollider(c) {
  c.id = ++cid;
  c.stamp = 0;
  c.cellList = [];
  const ix0 = Math.floor(c.x0 / CS) + OFF, ix1 = Math.floor(c.x1 / CS) + OFF;
  const iz0 = Math.floor(c.z0 / CS) + OFF, iz1 = Math.floor(c.z1 / CS) + OFF;
  for (let iz = iz0; iz <= iz1; iz++) {
    for (let ix = ix0; ix <= ix1; ix++) {
      const i = cellIdx(ix, iz);
      if (i < 0) continue;
      (grid[i] || (grid[i] = [])).push(c);
      c.cellList.push(i);
    }
  }
  return c;
}

export function removeCollider(c) {
  if (!c || !c.cellList) return;
  for (const i of c.cellList) {
    const arr = grid[i];
    if (!arr) continue;
    const k = arr.indexOf(c);
    if (k >= 0) { arr[k] = arr[arr.length - 1]; arr.pop(); }
  }
  c.cellList = null;
  c.removed = true;
}

export function boxCollider(x0, y0, z0, x1, y1, z1, owner) {
  return addCollider({ kind: 0, x0, y0, z0, x1, y1, z1, owner });
}
// rampa: x0,z0 = canto da celula; dir 0:+x 1:+z 2:-x 3:-z (sentido da subida); yb = topo da borda baixa
// bx*/bz* = celula inteira (referencia da inclinacao); x0..z1 = area (tile) que de fato existe, para pecas editadas
export function rampCollider(cx0, cz0, dir, yb, owner, fp) {
  const x0 = fp ? fp[0] : cx0, z0 = fp ? fp[1] : cz0, x1 = fp ? fp[2] : cx0 + G, z1 = fp ? fp[3] : cz0 + G;
  return addCollider({ kind: 1, x0, z0, x1, z1, bx0: cx0, bz0: cz0, bx1: cx0 + G, bz1: cz0 + G, y0: yb - STAIR_TH, y1: yb + H, yb, dir, th: STAIR_TH, owner });
}
// cone / telhado em piramide (kind 2)
export function roofCollider(cx0, cz0, yb, owner, fp) {
  const x0 = fp ? fp[0] : cx0, z0 = fp ? fp[1] : cz0, x1 = fp ? fp[2] : cx0 + G, z1 = fp ? fp[3] : cz0 + G;
  return addCollider({ kind: 2, x0, z0, x1, z1, bx0: cx0, bz0: cz0, bx1: cx0 + G, bz1: cz0 + G, y0: yb - ROOF_TH, y1: yb + ROOF_PEAK, yb, peak: ROOF_PEAK, th: ROOF_TH, owner });
}
// altura da superficie de cima de uma escada/cone num ponto (x,z)
export function slabSurface(c, x, z) {
  if (c.kind === 1) {
    let u = rampU(c, x, z);
    u = u < 0 ? 0 : u > G ? G : u;
    return c.yb + SLOPE * u;
  }
  const hh = G / 2, cx = (c.bx0 + c.bx1) / 2, cz = (c.bz0 + c.bz1) / 2;
  const m = Math.min(Math.max(Math.abs(x - cx), Math.abs(z - cz)), hh);
  return c.yb + c.peak * (1 - m / hh);
}

export function rampU(c, x, z) {
  switch (c.dir) {
    case 0: return x - c.bx0;
    case 1: return z - c.bz0;
    case 2: return c.bx1 - x;
    default: return c.bz1 - z;
  }
}

export function queryAABB(x0, z0, x1, z1, out) {
  out.length = 0;
  stamp++;
  const ix0 = Math.floor(x0 / CS) + OFF, ix1 = Math.floor(x1 / CS) + OFF;
  const iz0 = Math.floor(z0 / CS) + OFF, iz1 = Math.floor(z1 / CS) + OFF;
  for (let iz = iz0; iz <= iz1; iz++) {
    for (let ix = ix0; ix <= ix1; ix++) {
      const i = cellIdx(ix, iz);
      if (i < 0) continue;
      const arr = grid[i];
      if (!arr) continue;
      for (let k = 0; k < arr.length; k++) {
        const c = arr[k];
        if (c.stamp !== stamp) { c.stamp = stamp; out.push(c); }
      }
    }
  }
  return out;
}

// ===== Altura do apoio sob um ponto =====
const _sup = [];
export function supportAt(x, z, maxY, r = 0.3) {
  let best = heightAt(x, z);
  queryAABB(x - r, z - r, x + r, z + r, _sup);
  for (let k = 0; k < _sup.length; k++) {
    const c = _sup[k];
    if (c.kind === 0) {
      if (c.y1 <= maxY && c.y1 > best && x >= c.x0 - r && x <= c.x1 + r && z >= c.z0 - r && z <= c.z1 + r) best = c.y1;
    } else if (x >= c.x0 && x <= c.x1 && z >= c.z0 && z <= c.z1) {
      const s = slabSurface(c, x, z);
      if (s <= maxY && s > best) best = s;
    }
  }
  return best;
}

// Altura da superficie "solida" mais alta num ponto (para posicionar coisas no chao)
export function surfaceTop(x, z) {
  return supportAt(x, z, 1e9, 0.1);
}

// ===== Movimento de atores =====
const _h = [];
// ator com o centro dentro da escada e sem altura: move ao longo do sentido de subida ate a cabeca caber
function stairsPushUp(a, c, head) {
  let u = rampU(c, a.x, a.z);
  u = u < 0 ? 0 : u > G ? G : u;
  const uNeed = (head - 0.05 + c.th - c.yb) / SLOPE;
  if (uNeed <= u || uNeed >= G) return false;
  const d = uNeed - u + 0.01;
  if (c.dir === 0) a.x += d; else if (c.dir === 2) a.x -= d; else if (c.dir === 1) a.z += d; else a.z -= d;
  return true;
}
function resolveHoriz(a) {
  const r = a.radius;
  const feet = a.y, head = a.y + a.height;
  queryAABB(a.x - r, a.z - r, a.x + r, a.z + r, _h);
  for (let it = 0; it < 2; it++) {
    let any = false;
    for (let k = 0; k < _h.length; k++) {
      const c = _h[k];
      if (c.y0 >= head - 0.05) continue;
      if (c.kind === 0 && c.y1 <= feet + STEP) continue;
      const px = a.x < c.x0 ? c.x0 : a.x > c.x1 ? c.x1 : a.x;
      const pz = a.z < c.z0 ? c.z0 : a.z > c.z1 ? c.z1 : a.z;
      const dx = a.x - px, dz = a.z - pz;
      const d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue;
      if (c.kind !== 0) {
        // escada/cone: laje fina; da para passar por baixo se houver altura
        const s = slabSurface(c, px, pz);
        if (s <= feet + STEP) continue;
        if (s - c.th >= head - 0.05) continue;
      }
      if (d2 > 1e-9) {
        const d = Math.sqrt(d2);
        const pen = (r - d) / d;
        a.x += dx * pen; a.z += dz * pen;
      } else if (c.kind === 1 && stairsPushUp(a, c, head)) {
        // embaixo da escada, sem altura: empurra so ate onde a cabeca cabe (nao joga o jogador para fora)
      } else {
        const l = a.x - c.x0, rt = c.x1 - a.x, f = a.z - c.z0, b = c.z1 - a.z;
        const m = Math.min(l, rt, f, b);
        if (m === l) a.x = c.x0 - r; else if (m === rt) a.x = c.x1 + r; else if (m === f) a.z = c.z0 - r; else a.z = c.z1 + r;
      }
      any = true;
    }
    if (!any) break;
  }
}

const _c2 = [];
function ceilingAbove(a, headY) {
  const r = a.radius * 0.8;
  let best = Infinity;
  queryAABB(a.x - r, a.z - r, a.x + r, a.z + r, _c2);
  for (let k = 0; k < _c2.length; k++) {
    const c = _c2[k];
    if (!(a.x >= c.x0 - r && a.x <= c.x1 + r && a.z >= c.z0 - r && a.z <= c.z1 + r)) continue;
    const bottom = c.kind === 0 ? c.y0 : slabSurface(c, a.x, a.z) - c.th;
    if (bottom >= headY - 0.1 && bottom < best) best = bottom;
  }
  return best;
}

function stepVertical(a, dt) {
  const sup = supportAt(a.x, a.z, a.y + STEP);
  let ground = sup;
  a.inWater = false;
  if (ground < -0.9) { ground = -0.9; a.inWater = true; }
  if (a.grounded && a.vy <= 0) {
    if (ground >= a.y - SNAP) { a.y = ground; a.vy = 0; return; }
    a.grounded = false;
  }
  let ny = a.y + a.vy * dt;
  if (a.vy <= 0 && ny <= ground) { a.y = ground; a.vy = 0; a.grounded = true; return; }
  if (a.vy > 0) {
    const ceil = ceilingAbove(a, a.y + a.height);
    if (ny + a.height > ceil) { ny = ceil - a.height; a.vy = 0; }
  }
  a.y = ny;
  a.grounded = false;
}

// Move o ator com colisao. Usa a.vx,a.vy,a.vz (a gravidade e aplicada por quem chama)
export function moveActor(a, dt) {
  const len = Math.hypot(a.vx * dt, a.vz * dt);
  const n = Math.max(1, Math.ceil(Math.max(len / 0.25, Math.abs(a.vy * dt) / 0.25)));
  const sdt = dt / n;
  const lim = worldLimit;
  for (let i = 0; i < n; i++) {
    if (a.vx !== 0 || a.vz !== 0) {
      a.x += a.vx * sdt; resolveHoriz(a);
      a.z += a.vz * sdt; resolveHoriz(a);
      if (a.x > lim) a.x = lim; else if (a.x < -lim) a.x = -lim;
      if (a.z > lim) a.z = lim; else if (a.z < -lim) a.z = -lim;
    }
    stepVertical(a, sdt);
  }
}

// ===== Raycast no mundo =====
export const RAY = { t: 0, kind: '', c: null };
const _ARRAY_EPS = 1e-9;

function rayBox(c, ox, oy, oz, ix, iy, iz) {
  let t1 = (c.x0 - ox) * ix, t2 = (c.x1 - ox) * ix;
  let tmin = Math.min(t1, t2), tmax = Math.max(t1, t2);
  t1 = (c.y0 - oy) * iy; t2 = (c.y1 - oy) * iy;
  tmin = Math.max(tmin, Math.min(t1, t2)); tmax = Math.min(tmax, Math.max(t1, t2));
  t1 = (c.z0 - oz) * iz; t2 = (c.z1 - oz) * iz;
  tmin = Math.max(tmin, Math.min(t1, t2)); tmax = Math.min(tmax, Math.max(t1, t2));
  if (tmin > tmax || tmax < 0) return -1;
  return tmin >= 0 ? tmin : -1;
}

function clipPlane(nx, ny, nz, d, ox, oy, oz, dx, dy, dz, st) {
  const denom = nx * dx + ny * dy + nz * dz;
  const dist = d - (nx * ox + ny * oy + nz * oz);
  if (Math.abs(denom) < 1e-12) { if (dist < 0) st.miss = true; return; }
  const t = dist / denom;
  if (denom < 0) { if (t > st.near) st.near = t; } else if (t < st.far) st.far = t;
}
const _st = { near: 0, far: 0, miss: false };
function rayRamp(c, ox, oy, oz, dx, dy, dz) {
  const st = _st;
  st.near = -Infinity; st.far = Infinity; st.miss = false;
  clipPlane(-1, 0, 0, -c.x0, ox, oy, oz, dx, dy, dz, st);
  clipPlane(1, 0, 0, c.x1, ox, oy, oz, dx, dy, dz, st);
  clipPlane(0, 0, -1, -c.z0, ox, oy, oz, dx, dy, dz, st);
  clipPlane(0, 0, 1, c.z1, ox, oy, oz, dx, dy, dz, st);
  const th = c.th;
  // laje inclinada: entre o plano de cima e o plano de baixo (deslocado por th)
  switch (c.dir) {
    case 0:
      clipPlane(-SLOPE, 1, 0, c.yb - SLOPE * c.bx0, ox, oy, oz, dx, dy, dz, st);
      clipPlane(SLOPE, -1, 0, SLOPE * c.bx0 - c.yb + th, ox, oy, oz, dx, dy, dz, st); break;
    case 1:
      clipPlane(0, 1, -SLOPE, c.yb - SLOPE * c.bz0, ox, oy, oz, dx, dy, dz, st);
      clipPlane(0, -1, SLOPE, SLOPE * c.bz0 - c.yb + th, ox, oy, oz, dx, dy, dz, st); break;
    case 2:
      clipPlane(SLOPE, 1, 0, c.yb + SLOPE * c.bx1, ox, oy, oz, dx, dy, dz, st);
      clipPlane(-SLOPE, -1, 0, -c.yb - SLOPE * c.bx1 + th, ox, oy, oz, dx, dy, dz, st); break;
    default:
      clipPlane(0, 1, SLOPE, c.yb + SLOPE * c.bz1, ox, oy, oz, dx, dy, dz, st);
      clipPlane(0, -1, -SLOPE, -c.yb - SLOPE * c.bz1 + th, ox, oy, oz, dx, dy, dz, st); break;
  }
  if (st.miss || st.near > st.far || st.near < 0) return -1;
  return st.near;
}

// cone/telhado: piramide cheia (convexa) limitada pela celula
function rayRoof(c, ox, oy, oz, dx, dy, dz) {
  const st = _st;
  st.near = -Infinity; st.far = Infinity; st.miss = false;
  clipPlane(-1, 0, 0, -c.x0, ox, oy, oz, dx, dy, dz, st);
  clipPlane(1, 0, 0, c.x1, ox, oy, oz, dx, dy, dz, st);
  clipPlane(0, 0, -1, -c.z0, ox, oy, oz, dx, dy, dz, st);
  clipPlane(0, 0, 1, c.z1, ox, oy, oz, dx, dy, dz, st);
  clipPlane(0, -1, 0, -(c.yb - c.th), ox, oy, oz, dx, dy, dz, st);
  const hh = G / 2, cx = (c.bx0 + c.bx1) / 2, cz = (c.bz0 + c.bz1) / 2, k = c.peak / hh;
  clipPlane(k, 1, 0, c.yb + c.peak + k * cx, ox, oy, oz, dx, dy, dz, st);
  clipPlane(-k, 1, 0, c.yb + c.peak - k * cx, ox, oy, oz, dx, dy, dz, st);
  clipPlane(0, 1, k, c.yb + c.peak + k * cz, ox, oy, oz, dx, dy, dz, st);
  clipPlane(0, 1, -k, c.yb + c.peak - k * cz, ox, oy, oz, dx, dy, dz, st);
  if (st.miss || st.near > st.far || st.near < 0) return -1;
  return st.near;
}

// Retorna RAY (reaproveitado) ou null. d deve estar normalizado.
export function raycast(ox, oy, oz, dx, dy, dz, maxT) {
  if (Math.abs(dx) < _ARRAY_EPS) dx = dx < 0 ? -_ARRAY_EPS : _ARRAY_EPS;
  if (Math.abs(dy) < _ARRAY_EPS) dy = dy < 0 ? -_ARRAY_EPS : _ARRAY_EPS;
  if (Math.abs(dz) < _ARRAY_EPS) dz = dz < 0 ? -_ARRAY_EPS : _ARRAY_EPS;
  const ix = 1 / dx, iy = 1 / dy, iz = 1 / dz;
  let best = maxT, hit = null, kind = '';
  stamp++;
  const st = stamp;
  let cx = Math.floor(ox / CS), cz = Math.floor(oz / CS);
  const stepX = dx > 0 ? 1 : -1, stepZ = dz > 0 ? 1 : -1;
  const tDX = CS / Math.abs(dx), tDZ = CS / Math.abs(dz);
  let tMX = ((dx > 0 ? (cx + 1) * CS - ox : ox - cx * CS)) / Math.abs(dx);
  let tMZ = ((dz > 0 ? (cz + 1) * CS - oz : oz - cz * CS)) / Math.abs(dz);
  let t = 0;
  let guard = 0;
  while (t < best && guard++ < 400) {
    const gi = cellIdx(cx + OFF, cz + OFF);
    if (gi >= 0) {
      const arr = grid[gi];
      if (arr) {
        for (let k = 0; k < arr.length; k++) {
          const c = arr[k];
          if (c.stamp === st) continue;
          c.stamp = st;
          const tt = c.kind === 0 ? rayBox(c, ox, oy, oz, ix, iy, iz) : c.kind === 1 ? rayRamp(c, ox, oy, oz, dx, dy, dz) : rayRoof(c, ox, oy, oz, dx, dy, dz);
          if (tt >= 0 && tt < best) { best = tt; hit = c; kind = c.kind === 0 ? 'box' : 'slab'; }
        }
      }
    } else if (cx + OFF < -1 || cz + OFF < -1 || cx + OFF > GN || cz + OFF > GN) break;
    if (tMX < tMZ) { t = tMX; tMX += tDX; cx += stepX; } else { t = tMZ; tMZ += tDZ; cz += stepZ; }
  }
  // terreno
  let tt = 0, prev = 0;
  while (tt < best) {
    tt += Math.min(0.5 + tt * 0.012, 3);
    if (tt > best) tt = best;
    const px = ox + dx * tt, py = oy + dy * tt, pz = oz + dz * tt;
    if (py < heightAt(px, pz)) {
      let a = prev, b = tt;
      for (let i = 0; i < 6; i++) {
        const m = (a + b) * 0.5;
        if (oy + dy * m < heightAt(ox + dx * m, oz + dz * m)) b = m; else a = m;
      }
      best = b; hit = null; kind = 'terrain';
      break;
    }
    prev = tt;
    if (py > 80 && dy >= 0) break;
  }
  if (best >= maxT && kind === '') return null;
  RAY.t = best; RAY.kind = kind; RAY.c = hit;
  return RAY;
}

export function lineOfSight(ax, ay, az, bx, by, bz) {
  let dx = bx - ax, dy = by - ay, dz = bz - az;
  const d = Math.hypot(dx, dy, dz);
  if (d < 0.01) return true;
  dx /= d; dy /= d; dz /= d;
  return raycast(ax, ay, az, dx, dy, dz, d - 0.3) === null;
}
