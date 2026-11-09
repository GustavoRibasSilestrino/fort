import { keys, pressed } from './input.js';

// Teclas remapeaveis. Cada acao tem uma tecla padrao (codigo de KeyboardEvent.code ou "Mouse3"/"Mouse4"/"Mouse1")
export const ACTIONS = [
  { id: 'forward', label: 'Andar para frente', group: 'Movimento', def: 'KeyW' },
  { id: 'back', label: 'Andar para trás', group: 'Movimento', def: 'KeyS' },
  { id: 'left', label: 'Esquerda', group: 'Movimento', def: 'KeyA' },
  { id: 'right', label: 'Direita', group: 'Movimento', def: 'KeyD' },
  { id: 'jump', label: 'Pular', group: 'Movimento', def: 'Space' },
  { id: 'slide', label: 'Deslizar (correndo)', group: 'Movimento', def: 'ShiftLeft' },
  { id: 'crouch', label: 'Agachar', group: 'Movimento', def: 'KeyF' },
  { id: 'sprint', label: 'Correr (se a corrida automática estiver desligada)', group: 'Movimento', def: 'KeyE' },
  { id: 'reload', label: 'Recarregar', group: 'Combate', def: 'KeyR' },
  { id: 'slot1', label: 'Picareta (item 1)', group: 'Combate', def: 'Digit1' },
  { id: 'slot2', label: 'Item 2', group: 'Combate', def: 'Digit2' },
  { id: 'slot3', label: 'Item 3', group: 'Combate', def: 'Digit3' },
  { id: 'slot4', label: 'Item 4', group: 'Combate', def: 'Digit4' },
  { id: 'slot5', label: 'Item 5', group: 'Combate', def: 'Digit5' },
  { id: 'slot6', label: 'Item 6', group: 'Combate', def: 'Digit6' },
  { id: 'buildToggle', label: 'Modo construção (liga/desliga)', group: 'Construção', def: 'KeyQ' },
  { id: 'wall', label: 'Parede', group: 'Construção', def: 'KeyZ' },
  { id: 'floor', label: 'Piso', group: 'Construção', def: 'KeyX' },
  { id: 'stairs', label: 'Escada', group: 'Construção', def: 'KeyC' },
  { id: 'roof', label: 'Cone (telhado)', group: 'Construção', def: 'KeyV' },
  { id: 'material', label: 'Trocar material', group: 'Construção', def: 'KeyT' },
  { id: 'edit', label: 'Editar construção', group: 'Edição', def: 'KeyG' },
  { id: 'editReset', label: 'Redefinir edição (desfaz as partes tiradas)', group: 'Edição', def: 'Wheel', quick: [{ label: 'SCROLL ↕', code: 'Wheel' }] },
  { id: 'clearAll', label: 'Limpar construções (Freebuild)', group: 'Modo livre', def: 'KeyY' },
  { id: 'dummy', label: 'Boneco de treino (Freebuild)', group: 'Modo livre', def: 'KeyB' },
];

export const binds = {};
const STORE = 'fortbuild_binds';

export function loadBinds() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(STORE) || '{}'); } catch (e) { saved = {}; }
  // valor antigo (H) nao conta como escolha do jogador: o padrao agora e o scroll
  if (saved.editReset === 'KeyH') delete saved.editReset;
  for (const a of ACTIONS) binds[a.id] = a.id in saved ? saved[a.id] : a.def;
}
function saveBinds() {
  // guarda so o que foi mudado em relacao ao padrao, assim novos padroes continuam valendo
  const diff = {};
  for (const a of ACTIONS) if (binds[a.id] !== a.def) diff[a.id] = binds[a.id];
  try { localStorage.setItem(STORE, JSON.stringify(diff)); } catch (e) { /* ignorar */ }
}

// atribui uma tecla; se ja estiver em uso por outra acao, essa outra fica sem tecla. Devolve o nome da acao desalocada.
export function setBind(id, code) {
  let freed = null;
  for (const a of ACTIONS) {
    if (a.id !== id && binds[a.id] === code) { binds[a.id] = ''; freed = a.label; }
  }
  binds[id] = code;
  saveBinds();
  return freed;
}
export function resetBinds() {
  for (const a of ACTIONS) binds[a.id] = a.def;
  saveBinds();
}

export const down = (id) => !!binds[id] && !!keys[binds[id]];
export const hit = (id) => !!binds[id] && !!pressed[binds[id]];

export function keyName(code) {
  if (!code) return '—';
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'NUM ' + code.slice(6);
  const map = {
    Space: 'ESPAÇO', ShiftLeft: 'SHIFT', ShiftRight: 'SHIFT DIR', ControlLeft: 'CTRL', ControlRight: 'CTRL DIR', AltLeft: 'ALT', AltRight: 'ALT GR',
    Tab: 'TAB', CapsLock: 'CAPS', Backspace: 'BACKSPACE', Enter: 'ENTER', Escape: 'ESC', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→',
    Backquote: '`', Minus: '-', Equal: '=', BracketLeft: '[', BracketRight: ']', Semicolon: ';', Quote: "'", Comma: ',', Period: '.', Slash: '/', Backslash: '\\',
    Wheel: 'SCROLL ↕', WheelUp: 'SCROLL ↑', WheelDown: 'SCROLL ↓',
    Mouse1: 'MOUSE MEIO', Mouse3: 'MOUSE 4', Mouse4: 'MOUSE 5', Delete: 'DEL', Insert: 'INS', Home: 'HOME', End: 'END', PageUp: 'PGUP', PageDown: 'PGDN',
  };
  return map[code] || code.toUpperCase();
}
