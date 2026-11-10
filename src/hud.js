import { NET } from './net.js';
import { WEAPONS, RARITY, CONSUMABLES, MATS, AMMO } from './config.js';
import { player, ps } from './player.js';
import { S } from './state.js';
import { on } from './events.js';
import { angleDiff } from './util.js';
import { binds, keyName } from './bind.js';
import { isEditing } from './edit.js';
import * as THREE from 'three';

const $ = (id) => document.getElementById(id);
const els = {};
let lastSig = '', fpsT = 0, fpsN = 0;
const SHORT = { pistol: 'PISTOLA', smg: 'SUBMET.', ar: 'RIFLE', shotgun: 'ESCOP.', sniper: 'SNIPER', rocket: 'FOGUETE' };
const _v = new THREE.Vector3();

export function initHud() {
  for (const id of ['crosshair', 'hitmarker', 'progress', 'progText', 'progBar', 'toasts', 'gain', 'buildHelp', 'editTip', 'pieceBar', 'pieceFill', 'pieceLbl', 'shBar', 'shNum', 'hpBar', 'hpNum', 'mats', 'buildBar', 'ammo', 'hotbar', 'fps', 'dmgFlash', 'dmgdir', 'scope', 'hud', 'score', 'scoreMe', 'scoreBot', 'scoreSub', 'hints']) els[id] = $(id);

  on('hitmarker', ({ head, killed, dmg, x, y, z }) => {
    const h = els.hitmarker;
    h.className = 'show' + (killed ? ' kill' : head ? ' head' : '');
    clearTimeout(h._t);
    h._t = setTimeout(() => { h.className = ''; }, 90);
    damageNumber(x, y, z, Math.round(dmg), head);
  });
  on('playerHurt', ({ attacker }) => {
    els.dmgFlash.classList.add('on');
    setTimeout(() => els.dmgFlash.classList.remove('on'), 90);
    if (attacker && attacker !== player) {
      const yawTo = Math.atan2(-(attacker.x - player.x), -(attacker.z - player.z));
      els.dmgdir.style.transform = `rotate(${-angleDiff(ps.camYaw, yawTo)}rad)`;
      els.dmgdir.classList.add('on');
      clearTimeout(els.dmgdir._t);
      els.dmgdir._t = setTimeout(() => els.dmgdir.classList.remove('on'), 120);
    }
  });
  on('toast', (t) => toast(t, false, 2200));
  on('gain', ({ mat, n }) => {
    const g = els.gain;
    g.textContent = `+${n} ${MATS[mat].name}`; g.style.color = MATS[mat].color; g.classList.add('show');
    clearTimeout(g._t); g._t = setTimeout(() => g.classList.remove('show'), 700);
  });
}

export function toast(text, big = false, ms = 2200) {
  const d = document.createElement('div');
  d.className = 'toast' + (big ? ' big' : '');
  d.textContent = text;
  els.toasts.appendChild(d);
  while (els.toasts.children.length > 4) els.toasts.removeChild(els.toasts.firstChild);
  setTimeout(() => d.remove(), ms);
}

function damageNumber(x, y, z, dmg, head) {
  _v.set(x + (Math.random() - 0.5) * 0.5, y + 0.3, z).project(S.camera);
  if (_v.z > 1) return;
  const d = document.createElement('div');
  d.className = 'dnum' + (head ? ' head' : '');
  d.textContent = dmg;
  d.style.left = (_v.x * 0.5 + 0.5) * innerWidth + 'px';
  d.style.top = (-_v.y * 0.5 + 0.5) * innerHeight + 'px';
  els.hud.appendChild(d);
  requestAnimationFrame(() => { d.style.transform = 'translateY(-50px)'; d.style.opacity = '0'; });
  setTimeout(() => d.remove(), 850);
}

const fmtTime = (s) => { s = Math.max(0, Math.floor(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };

const SVG = {
  wood: '<svg viewBox="0 0 48 40"><g fill="#c98f4f" stroke="#6b4423" stroke-width="2"><ellipse cx="14" cy="28" rx="9" ry="9"/><ellipse cx="32" cy="28" rx="9" ry="9"/><ellipse cx="23" cy="14" rx="9" ry="9"/></g><g fill="#e9c58b"><circle cx="14" cy="28" r="4"/><circle cx="32" cy="28" r="4"/><circle cx="23" cy="14" r="4"/></g></svg>',
  stone: '<svg viewBox="0 0 48 40"><g stroke="#4a2418" stroke-width="2"><rect x="5" y="10" width="38" height="20" rx="1" fill="#c8553a"/><path d="M5 20H43M17 10V20M31 20V30M24 10V20" fill="none"/></g><rect x="7" y="12" width="9" height="6" fill="#e0775a"/></svg>',
  metal: '<svg viewBox="0 0 48 40"><path d="M10 6H38V12H29V28H38V34H10V28H19V12H10Z" fill="#c6ccd4" stroke="#6b7480" stroke-width="2"/></svg>',
  wall: '<svg viewBox="0 0 48 48"><path d="M10 14L34 8V36L10 42Z" fill="rgba(180,235,255,.55)" stroke="#e9fbff" stroke-width="2.5" stroke-linejoin="round"/></svg>',
  floor: '<svg viewBox="0 0 48 48"><path d="M24 12L44 24L24 36L4 24Z" fill="rgba(180,235,255,.55)" stroke="#e9fbff" stroke-width="2.5" stroke-linejoin="round"/></svg>',
  ramp: '<svg viewBox="0 0 48 48"><path d="M6 38V30H16V22H26V14H36V6H42V38Z" fill="rgba(180,235,255,.55)" stroke="#e9fbff" stroke-width="2.5" stroke-linejoin="round"/></svg>',
  roof: '<svg viewBox="0 0 48 48"><path d="M24 6L42 32L24 40L6 32Z" fill="rgba(180,235,255,.55)" stroke="#e9fbff" stroke-width="2.5" stroke-linejoin="round"/><path d="M24 6V40M6 32L42 32" stroke="#e9fbff" stroke-width="1.5" fill="none"/></svg>',
  tools: '<svg viewBox="0 0 48 48"><path d="M10 38L34 14M14 10L38 34" stroke="#e9fbff" stroke-width="4" stroke-linecap="round"/><circle cx="38" cy="10" r="4" fill="#e9fbff"/></svg>',
};
const keyLbl = (a) => `<div class="kb">${keyName(binds[a])}</div>`;

function slotHtml(i, s, sel) {
  const wrap = (inner) => `<div class="sw ${sel ? 'selw' : ''}">${inner}<div class="kb">${i + 1}</div></div>`;
  if (!s) return wrap(`<div class="slot empty"></div>`);
  if (s.kind === 'pickaxe') return wrap(`<div class="slot ${sel ? 'sel' : ''}"><span class="ico">⛏</span></div>`);
  if (s.kind === 'weapon') {
    const c = RARITY[s.rarity].color;
    return wrap(`<div class="slot ${sel ? 'sel' : ''}" style="border-color:${c};background:linear-gradient(180deg,rgba(10,10,40,.85),${c}88)"><span style="color:#fff">${SHORT[s.wkey]}</span><span class="c">${s.mag}</span></div>`);
  }
  const d = CONSUMABLES[s.ckey];
  return wrap(`<div class="slot ${sel ? 'sel' : ''}" style="border-color:${d.color}"><span style="color:${d.color}">${d.short}</span><span class="c">${s.count}</span></div>`);
}

export function updateHud(dt) {
  const p = player, inv = p.inv;
  if (!els.hud) return;
  els.hpBar.style.width = Math.max(0, p.hp) + '%';
  els.hpNum.textContent = Math.ceil(Math.max(0, p.hp));
  els.shBar.style.width = Math.max(0, p.shield) + '%';
  els.shNum.textContent = Math.ceil(Math.max(0, p.shield));

  const sig = inv.slots.map((s) => (s ? `${s.kind}${s.wkey || s.ckey || ''}${s.rarity ?? ''}${s.mag ?? ''}${s.count ?? ''}` : '-')).join('|') + inv.sel;
  if (sig !== lastSig) {
    lastSig = sig;
    els.hotbar.innerHTML = inv.slots.map((s, i) => slotHtml(i, s, i === inv.sel)).join('');
  }
  const s = inv.slots[inv.sel];
  if (s && s.kind === 'weapon' && !ps.buildMode) {
    const W = WEAPONS[s.wkey];
    els.ammo.innerHTML = `${s.mag} <small>/ ${inv.ammo[W.ammo] > 900 ? '∞' : inv.ammo[W.ammo]}</small><span class="wn">${W.name.toUpperCase()}</span>`;
  } else els.ammo.innerHTML = '';
  els.mats.innerHTML = ['wood', 'stone', 'metal'].map((m) => `<div class="mi ${ps.buildMat === m ? 'sel' : ''}">${SVG[m]}<div class="inf">${S.infMats ? '∞' : inv.mats[m]}</div></div>`).join('');
  const piece = (a, t, ico) => `<div class="bi ${ps.buildMode && ps.buildType === t ? 'sel' : ''}"><div class="box">${SVG[ico]}</div>${keyLbl(a)}</div>`;
  const bb = `<div class="bi tog ${ps.buildMode ? 'sel' : ''}"><div class="box">${SVG.tools}</div>${keyLbl('buildToggle')}</div>` + piece('wall', 'wall', 'wall') + piece('floor', 'floor', 'floor') + piece('stairs', 'ramp', 'ramp') + piece('roof', 'roof', 'roof');
  if (bb !== els.buildBar._h) { els.buildBar._h = bb; els.buildBar.innerHTML = bb; }

  const alive = p.mode !== 'dead';
  let xh = 'xh-pickaxe';
  if (!alive || ps.scoped) xh = 'none';
  else if (isEditing()) xh = 'xh-edit';
  else if (ps.buildMode) xh = 'xh-build';
  else if (s && s.kind === 'weapon') xh = 'xh-' + s.wkey;
  else if (s && s.kind === 'cons') xh = 'xh-cons';
  if (els.crosshair.className !== xh) els.crosshair.className = xh;
  els.crosshair.style.setProperty('--sp', ps.crossSpread.toFixed(1) + 'px');
  els.scope.classList.toggle('hidden', !ps.scoped);

  let prog = -1, ptxt = '';
  if (ps.reloadT > 0) { prog = 1 - ps.reloadT / ps.reloadTotal; ptxt = 'RECARREGANDO'; }
  else if (ps.useT > 0) { prog = ps.useT / ps.useTotal; ptxt = 'USANDO ' + (s && s.ckey ? CONSUMABLES[s.ckey].name.toUpperCase() : ''); }
  els.progress.classList.toggle('hidden', prog < 0);
  if (prog >= 0) { els.progText.textContent = ptxt; els.progBar.style.width = Math.round(prog * 100) + '%'; }

  const bh = els.buildHelp;
  let bhHtml = '';
  if (bhHtml !== bh._html) { bh._html = bhHtml; bh.innerHTML = bhHtml; }
  bh.classList.toggle('hidden', !bhHtml);

  // rotulos perto da mira durante a edicao (CONFIRMAR / REDEFINIR), como no Fortnite
  let tip = '';
  if (isEditing() && alive) {
    const mode = S.settings.editConfirm || 'auto';
    const ck = mode === 'auto' ? 'SOLTE O CLIQUE' : mode === 'release' ? 'SOLTE ' + keyName(binds.edit) : keyName(binds.edit);
    tip = `<span><b>${ck}</b>CONFIRMAR</span><span><b>${keyName(binds.editReset)}</b>REDEFINIR</span><span><b>BOTÃO DIR.</b>CANCELAR</span>`;
  }
  if (tip !== els.editTip._h) { els.editTip._h = tip; els.editTip.innerHTML = tip; }
  els.editTip.classList.toggle('hidden', !tip);

  // barra de vida da peca que esta na mira
  const ap = !isEditing() && alive ? ps.aimPiece : null;
  els.pieceBar.classList.toggle('hidden', !ap);
  if (ap) {
    els.pieceFill.style.width = Math.max(0, Math.min(100, (ap.hp / ap.maxHp) * 100)).toFixed(0) + '%';
    els.pieceFill.style.background = ap.prog < 1 ? '#f2c230' : '#5fd04b';
    const lbl = ap.owner === 'player' ? `<b>${keyName(binds.edit)}</b>EDITAR` : '';
    if (lbl !== els.pieceLbl._h) { els.pieceLbl._h = lbl; els.pieceLbl.innerHTML = lbl; }
  }

  // placar do duelo / dica do freebuild
  const duel = S.mode === 'duel' && S.duel;
  els.score.classList.toggle('hidden', !duel);
  els.hints.classList.toggle('hidden', S.mode !== 'freebuild');
  if (S.mode === 'freebuild') {
    const k = (a) => `<i>${keyName(binds[a])}</i>`;
    const html = `<b>FREEBUILD</b><br>${k('buildToggle')} construir &nbsp; ${k('wall')} parede &nbsp; ${k('floor')} piso &nbsp; ${k('stairs')} escada &nbsp; ${k('roof')} cone<br>${k('edit')} editar &nbsp; ${k('material')} material &nbsp; ${k('slide')} deslizar &nbsp; ${k('clearAll')} limpar &nbsp; ${k('dummy')} boneco`;
    if (html !== els.hints._html) { els.hints._html = html; els.hints.innerHTML = html; }
  }
  if (duel) {
    els.scoreMe.textContent = S.duel.score[0];
    els.scoreBot.textContent = S.duel.score[1];
    els.scoreSub.textContent = `Rodada ${S.duel.round} • primeiro a ${S.duel.goal} • ${fmtTime(S.matchTime)}`;
  }

  fpsT += dt; fpsN++;
  if (fpsT > 0.5) { els.fps.textContent = Math.round(fpsN / fpsT) + ' FPS'; fpsT = 0; fpsN = 0; }
}

export function showHud(v) { els.hud.classList.toggle('hidden', !v); }

export function showEnd({ victory, score, time }) {
  $('endTitle').textContent = victory ? 'VITÓRIA!' : 'DERROTA';
  $('endTitle').className = victory ? 'win' : 'lose';
  $('endSub').textContent = NET.inMatch || S.duel.online ? (victory ? 'Você venceu o x1!' : 'Seu amigo venceu desta vez!') : (victory ? 'Você venceu o duelo!' : 'O bot venceu desta vez. Treine mais no Freebuild!');
  $('endPlace').textContent = `${score[0]} x ${score[1]}`;
  $('endKills').textContent = score[0];
  $('endTime').textContent = fmtTime(time);
  $('end').classList.remove('hidden');
}
