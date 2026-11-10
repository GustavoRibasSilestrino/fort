import { S } from './state.js';
import { createPiece, destroyPiece, updatePieces } from './pieces.js';
import { updateSky } from './sky.js';
import { buildScenery } from './scenery.js';
import { player } from './player.js';

// Cenario da tela inicial: um forte que se constroi sozinho atras do menu, com a camera girando devagar.
const DOOR = [true, false, true, true, false, true, true, true, true];
const WINDOW = [true, true, true, true, false, true, true, true, true];
const wall = (axis, i, j, y, mask) => ({ type: 'wall', axis, i, j, y, mask });
const PLAN = [
  // torre, terreo
  wall('x', 0, 0, 0), wall('z', 0, 0, 0), wall('z', 1, 0, 0), wall('x', 0, 1, 0, WINDOW),
  { type: 'floor', i: 0, j: 0, y: 5 },
  // anexo ao lado
  wall('x', 1, 0, 0), wall('z', 2, 0, 0, WINDOW), wall('x', 1, 1, 0, DOOR),
  { type: 'floor', i: 1, j: 0, y: 5 },
  // torre, segundo andar
  wall('x', 0, 0, 5), wall('z', 0, 0, 5), wall('z', 1, 0, 5, WINDOW), wall('x', 0, 1, 5, DOOR),
  // escada + sacada
  { type: 'ramp', i: 0, j: 2, dir: 3, y: 0 },
  { type: 'floor', i: 0, j: 1, y: 5 },
  // cones: um sobre o piso do anexo (mesmo quadrado) e um no topo da torre
  { type: 'roof', i: 1, j: 0, y: 5 },
  { type: 'roof', i: 0, j: 0, y: 10 },
];
const MATS_CYCLE = ['wood', 'stone', 'metal'];
const BUILD_TIME = { wood: 3.0, stone: 4.6, metal: 6.0 };
const CENTER = { x: 8, y: 6.2, z: 7 };
const STEP_T = 0.28, HOLD_T = 8, UNDO_T = 0.06;

let on = false, still = false;
// enquadramento: fracao da tela (a partir do centro) onde o forte fica, e largura livre a direita do menu
const view = { f: 0, g: 1 };
function measure() {
  const col = document.querySelector('.menu-col');
  const W = innerWidth || 1;
  const r = col ? col.getBoundingClientRect() : null;
  if (!r || !r.width || W < 821) { view.f = 0; view.g = 1; return; }
  const free = Math.max(0, W - r.right);
  view.g = Math.max(0.3, free / W);
  view.f = ((r.right + free / 2) - W / 2) / (W / 2);
}
window.addEventListener('resize', measure);
let built = [], next = 0, timer = 0, phase = 'build', cycle = 0, t = 0;

function place(prog) {
  const mat = MATS_CYCLE[cycle % MATS_CYCLE.length];
  const p = createPiece({ ...PLAN[next], mat, owner: 'menu', skirt: 0, prog });
  if (p) built.push(p);
  next++;
}

export function startMenuScene() {
  on = true;
  still = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  buildScenery(S.scene, 75);
  S.shadowFocus = { x: CENTER.x, y: 0, z: CENTER.z };
  const m = player.model;
  m.root.visible = true;
  m.root.position.set(21.5, 0, 11);
  m.root.rotation.set(0, 1.3, 0);
  m.hold(null);
  m.setBuild(true);
  built = []; next = 0; timer = 0.4; phase = 'build'; cycle = 0; t = 0;
  if (still) { while (next < PLAN.length) place(1); phase = 'done'; }
  S.camera.fov = 48; S.camera.updateProjectionMatrix();
  measure();
}

export function stopMenuScene() {
  if (!on) return;
  on = false;
  for (const p of built) destroyPiece(p, true);
  built = [];
  player.model.setBuild(false);
}

export function updateMenuScene(dt) {
  if (!on) return;
  const cam = S.camera;
  if (!still) {
    t += dt;
    timer -= dt;
    if (phase === 'build' && timer <= 0) {
      place(0);
      if (next >= PLAN.length) { phase = 'hold'; timer = BUILD_TIME[MATS_CYCLE[cycle % 3]] + HOLD_T; } else timer = STEP_T;
    } else if (phase === 'hold' && timer <= 0) {
      phase = 'undo'; timer = UNDO_T;
    } else if (phase === 'undo' && timer <= 0) {
      const p = built.pop();
      if (p) { destroyPiece(p, true); timer = UNDO_T; } else { phase = 'build'; next = 0; cycle++; timer = 0.7; }
    }
    updatePieces(dt);
  }
  // orbita lenta; em telas largas o forte fica a direita, fora da coluna do menu
  const a = 0.78 + Math.sin(t * 0.11) * 0.3;
  const thf = Math.tan((cam.fov * Math.PI) / 360) * cam.aspect;      // tangente de meio campo de visao horizontal
  const R = Math.min(60, Math.max(29, 21 / (1.8 * view.g * thf)));
  const px = CENTER.x + Math.sin(a) * R, pz = CENTER.z + Math.cos(a) * R;
  const shift = R * view.f * thf;
  cam.position.set(px, 5.2 + Math.sin(t * 0.07) * 0.5, pz);
  cam.lookAt(CENTER.x - Math.cos(a) * shift, CENTER.y, CENTER.z + Math.sin(a) * shift);
  player.model.animate(dt, { speed: 0, vfwd: 0, grounded: true, vy: 0, aim: false, pitch: 0.12, swing: -1, crouch: false, slide: false, run: false, reloading: false });
  updateSky(dt, cam.position);
}
