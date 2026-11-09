export const keys = {};
export const pressed = {};
export const mouse = { dx: 0, dy: 0, l: false, r: false, lp: false, rp: false, wheel: 0 };
// capture: funcao chamada com o proximo codigo de tecla/botao (usada na tela de configuracoes)
export const input = { locked: false, capture: null };

const BLOCK = new Set(['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'F3', 'F5']);

export function initInput(canvas, onLockChange) {
  window.addEventListener('keydown', (e) => {
    if (input.capture) {
      e.preventDefault(); e.stopImmediatePropagation();
      const cb = input.capture; input.capture = null; cb(e.code);
      return;
    }
    if (input.locked && (BLOCK.has(e.code) || e.code.startsWith('Digit') || e.code.startsWith('Key') || e.ctrlKey)) e.preventDefault();
    if (!e.repeat) pressed[e.code] = true;
    keys[e.code] = true;
  }, true);
  window.addEventListener('keyup', (e) => { keys[e.code] = false; });
  window.addEventListener('blur', () => { for (const k in keys) keys[k] = false; mouse.l = mouse.r = false; });
  window.addEventListener('mousemove', (e) => {
    if (!input.locked) return;
    mouse.dx += e.movementX || 0;
    mouse.dy += e.movementY || 0;
  });
  window.addEventListener('mousedown', (e) => {
    const extra = e.button === 1 || e.button === 3 || e.button === 4;
    if (input.capture && extra) {
      e.preventDefault(); e.stopImmediatePropagation();
      const cb = input.capture; input.capture = null; cb('Mouse' + e.button);
      return;
    }
    if (!input.locked) return;
    e.preventDefault();
    if (e.button === 0) { mouse.l = true; mouse.lp = true; }
    else if (e.button === 2) { mouse.r = true; mouse.rp = true; }
    else if (extra) { keys['Mouse' + e.button] = true; pressed['Mouse' + e.button] = true; }
  });
  window.addEventListener('mouseup', (e) => {
    if (e.button === 0) mouse.l = false;
    else if (e.button === 2) mouse.r = false;
    else if (e.button === 1 || e.button === 3 || e.button === 4) { keys['Mouse' + e.button] = false; if (input.locked) e.preventDefault(); }
  });
  window.addEventListener('auxclick', (e) => { if (input.locked) e.preventDefault(); });
  window.addEventListener('contextmenu', (e) => e.preventDefault());
  window.addEventListener('wheel', (e) => {
    const dir = Math.sign(e.deltaY);
    if (input.capture) {
      e.preventDefault();
      const cb = input.capture; input.capture = null; cb(dir < 0 ? 'WheelUp' : 'WheelDown');
      return;
    }
    if (!input.locked || !dir) return;
    mouse.wheel += dir;
    pressed.Wheel = true; pressed[dir < 0 ? 'WheelUp' : 'WheelDown'] = true;
  }, { passive: false });
  document.addEventListener('pointerlockchange', () => {
    input.locked = document.pointerLockElement === canvas;
    if (!input.locked) { mouse.l = mouse.r = false; for (const k in keys) keys[k] = false; }
    onLockChange(input.locked);
  });
}

export function requestLock(canvas) {
  try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* ignorar */ }
}

export function endFrame() {
  for (const k in pressed) pressed[k] = false;
  mouse.dx = 0; mouse.dy = 0; mouse.lp = false; mouse.rp = false; mouse.wheel = 0;
}
