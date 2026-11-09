import { ACTIONS, binds, setBind, resetBinds, keyName, loadBinds } from './bind.js';
import { input } from './input.js';
import { S } from './state.js';
import { setVolume } from './audio.js';

// Configuracoes gerais (sensibilidade, FOV, corrida automatica...) + tela de remapeamento de teclas
const STORE = 'fortbuild_settings';
const DEFAULTS = { sens: 1, adsSens: 1, scopeSens: 1, invertY: false, autoSprint: true, fov: 80, camDist: 1.6, editConfirm: 'auto', quality: 'medium', volume: 0.7, diff: 'normal' };
const hooks = { onQuality: null };
const $ = (id) => document.getElementById(id);

export function loadSettings() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(STORE) || '{}'); } catch (e) { saved = {}; }
  if (saved.v !== 4) { delete saved.camDist; saved.editConfirm = 'auto'; saved.v = 4; }
  Object.assign(S.settings, DEFAULTS, saved);
  loadBinds();
}
export function saveSettings() {
  try { localStorage.setItem(STORE, JSON.stringify(S.settings)); } catch (e) { /* ignorar */ }
}

function sliderRow(parent, label, key, min, max, step, hint = '') {
  const row = document.createElement('div');
  row.className = 'srow';
  row.innerHTML = `<div class="sl"><span>${label}</span>${hint ? `<small>${hint}</small>` : ''}</div><input type="range" min="${min}" max="${max}" step="${step}"><input type="number" min="${min}" max="${max}" step="${step}">`;
  const [rng, num] = row.querySelectorAll('input');
  const set = (v, fromNum) => {
    v = Math.min(max, Math.max(min, parseFloat(v)));
    if (Number.isNaN(v)) return;
    S.settings[key] = v;
    rng.value = v;
    if (!fromNum) num.value = (Math.round(v * 100) / 100).toString();
    saveSettings();
    if (key === 'volume') setVolume(v);
  };
  rng.value = S.settings[key]; num.value = (Math.round(S.settings[key] * 100) / 100).toString();
  rng.addEventListener('input', () => set(rng.value, false));
  num.addEventListener('change', () => { set(num.value, false); });
  parent.appendChild(row);
}

function checkRow(parent, label, key, hint = '') {
  const row = document.createElement('label');
  row.className = 'srow chk';
  row.innerHTML = `<div class="sl"><span>${label}</span>${hint ? `<small>${hint}</small>` : ''}</div><input type="checkbox">`;
  const cb = row.querySelector('input');
  cb.checked = !!S.settings[key];
  cb.addEventListener('change', () => { S.settings[key] = cb.checked; saveSettings(); });
  parent.appendChild(row);
}

let note = null;
function buildControls() {
  const root = $('tab-controls');
  root.innerHTML = '';
  note = document.createElement('div');
  note.className = 'snote';
  note.textContent = 'Clique em uma tecla e aperte a nova tecla (ou um botão lateral do mouse). Esc cancela, Backspace remove a tecla.';
  root.appendChild(note);
  const reset = document.createElement('button');
  reset.className = 'btn sec small';
  reset.textContent = 'RESTAURAR PADRÕES';
  reset.addEventListener('click', () => { resetBinds(); buildControls(); });
  root.appendChild(reset);
  let group = '';
  for (const a of ACTIONS) {
    if (a.group !== group) {
      group = a.group;
      const h = document.createElement('h3');
      h.textContent = group;
      root.appendChild(h);
    }
    const row = document.createElement('div');
    row.className = 'krow';
    const lab = document.createElement('span');
    lab.textContent = a.label;
    const btn = document.createElement('button');
    btn.className = 'kbtn' + (binds[a.id] ? '' : ' empty');
    btn.textContent = keyName(binds[a.id]);
    btn.addEventListener('click', () => {
      document.querySelectorAll('.kbtn.wait').forEach((b) => b.classList.remove('wait'));
      btn.classList.add('wait'); btn.textContent = 'PRESSIONE…';
      input.capture = (code) => {
        if (code === 'Escape') { buildControls(); return; }
        if (code === 'Backspace') { setBind(a.id, ''); buildControls(); return; }
        const freed = setBind(a.id, code);
        buildControls();
        if (freed) { note.textContent = `${keyName(code)} já estava em “${freed}” — essa ação ficou sem tecla.`; note.classList.add('warn'); }
      };
    });
    const box = document.createElement('div');
    box.className = 'kbox';
    for (const q of a.quick || []) {
      const qb = document.createElement('button');
      qb.className = 'kbtn quick';
      qb.textContent = q.label;
      qb.title = 'Usar ' + q.label;
      qb.addEventListener('click', () => { const freed = setBind(a.id, q.code); buildControls(); if (freed) { note.textContent = `${keyName(q.code)} já estava em “${freed}” — essa ação ficou sem tecla.`; note.classList.add('warn'); } });
      box.appendChild(qb);
    }
    box.appendChild(btn);
    row.append(lab, box);
    root.appendChild(row);
  }
}

function buildMouse() {
  const root = $('tab-mouse');
  root.innerHTML = '';
  sliderRow(root, 'Sensibilidade do mouse', 'sens', 0.1, 5, 0.05, 'Valor maior = a câmera gira mais rápido');
  sliderRow(root, 'Sensibilidade ao mirar (botão direito)', 'adsSens', 0.2, 3, 0.05, 'Multiplicador aplicado ao mirar');
  sliderRow(root, 'Sensibilidade da luneta (sniper)', 'scopeSens', 0.2, 3, 0.05, 'Multiplicador aplicado na luneta');
  checkRow(root, 'Inverter eixo Y', 'invertY');
}

function buildGame() {
  const root = $('tab-game');
  root.innerHTML = '';
  checkRow(root, 'Corrida automática', 'autoSprint', 'Ligada: você corre ao andar para frente e a tecla de deslizar faz o slide. Desligada: segure a tecla de correr.');
  sliderRow(root, 'Campo de visão (FOV)', 'fov', 60, 110, 1);
  sliderRow(root, 'Distância da câmera', 'camDist', 0.9, 4.5, 0.1, 'Menor = câmera mais perto do personagem');
  const er = document.createElement('div');
  er.className = 'srow';
  er.innerHTML = `<div class="sl"><span>Como confirmar a edição</span><small>Automático: aplica assim que você solta o clique, sem apertar a tecla de editar de novo</small></div><select><option value="auto">Automático (ao soltar o clique)</option><option value="release">Ao soltar a tecla de editar (segurar)</option><option value="press">Apertando a tecla de editar de novo</option></select>`;
  const es = er.querySelector('select');
  es.value = S.settings.editConfirm || 'auto';
  es.addEventListener('change', () => { S.settings.editConfirm = es.value; saveSettings(); });
  root.appendChild(er);
  sliderRow(root, 'Volume', 'volume', 0, 1, 0.05);
  const row = document.createElement('div');
  row.className = 'srow';
  row.innerHTML = `<div class="sl"><span>Qualidade gráfica</span><small>Baixa desliga as sombras (mais FPS)</small></div><select><option value="high">Alta</option><option value="medium">Média</option><option value="low">Baixa</option></select>`;
  const sel = row.querySelector('select');
  sel.value = S.settings.quality;
  sel.addEventListener('change', () => { S.settings.quality = sel.value; saveSettings(); if (hooks.onQuality) hooks.onQuality(sel.value); });
  root.appendChild(row);
}

export function openSettings() {
  buildControls(); buildMouse(); buildGame();
  $('settings').classList.remove('hidden');
}
export function closeSettings() {
  input.capture = null;
  $('settings').classList.add('hidden');
}

export function initSettingsUI(onQuality) {
  hooks.onQuality = onQuality;
  document.querySelectorAll('#settings .tabs button').forEach((b) => b.addEventListener('click', () => {
    document.querySelectorAll('#settings .tabs button').forEach((x) => x.classList.toggle('on', x === b));
    for (const t of ['controls', 'mouse', 'game']) $('tab-' + t).classList.toggle('hidden', t !== b.dataset.tab);
    input.capture = null;
  }));
  $('setClose').addEventListener('click', closeSettings);
  document.querySelectorAll('.openSettings').forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); openSettings(); }));
}
