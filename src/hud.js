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
  for (const id of ['crosshair', 'hitmarker', 'progress', 'progText', 'progBar', 'toasts', 'gain', 'buildHelp', 'shBar', 'shNum', 'hpBar', 'hpNum', 'mats', 'ammo', 'hotbar', 'fps', 'dmgFlash', 'dmgdir', 'scope', 'hud', 'score', 'scoreMe', 'scoreBot', 'scoreSub', 'hints']) els[id] = $(id);

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

function slotHtml(i, s, sel) {
  const n = `<span class="n">${i + 1}</span>`;
  if (!s) return `<div class="slot empty">${n}</div>`;
  if (s.kind === 'pickaxe') return `<div class="slot ${sel ? 'sel' : ''}">${n}<span class="ico">⛏</span></div>`;
  if (s.kind === 'weapon') {
    const c = RARITY[s.rarity].color;
    return `<div class="slot ${sel ? 'sel' : ''}" style="border-color:${c};background:linear-gradient(180deg,rgba(10,10,40,.85),${c}55)">${n}<span style="color:${c}">${SHORT[s.wkey]}</span><span class="c">${s.mag}</span></div>`;
  }
  const d = CONSUMABLES[s.ckey];
  return `<div class="slot ${sel ? 'sel' : ''}" style="border-color:${d.color}">${n}<span style="color:${d.color}">${d.short}</span><span class="c">${s.count}</span></div>`;
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
    els.ammo.innerHTML = `${s.mag} <small>/ ${inv.ammo[W.ammo] > 900 ? '∞' : inv.ammo[W.ammo]}</small>`;
  } else els.ammo.innerHTML = '';
  els.mats.innerHTML = ['wood', 'stone', 'metal'].map((m) => `<div class="mat ${ps.buildMat === m ? 'sel' : ''}"><i style="background:${MATS[m].color}"></i>${S.infMats ? '∞' : inv.mats[m]}</div>`).join('');

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
  if (isEditing() && alive) {
    const mode = S.settings.editConfirm || 'auto';
    const conf = mode === 'auto' ? '<div class="bp"><b>SOLTAR O CLIQUE</b>aplica</div>' : mode === 'release' ? `<div class="bp"><b>SOLTAR ${keyName(binds.edit)}</b>aplica</div>` : `<div class="bp"><b>${keyName(binds.edit)}</b>confirmar</div>`;
    bhHtml = `<div class="bp sel">EDITANDO</div><div class="bp"><b>CLIQUE</b>tirar / devolver parte</div>${conf}<div class="bp"><b>${keyName(binds.editReset)}</b>redefinir</div><div class="bp"><b>BOTÃO DIR.</b>cancelar</div>`;
  } else if (ps.buildMode && alive) {
    bhHtml = [['wall', 'wall', 'Parede'], ['floor', 'floor', 'Piso'], ['stairs', 'ramp', 'Escada'], ['roof', 'roof', 'Cone']].map(([a, t, n]) => `<div class="bp ${ps.buildType === t ? 'sel' : ''}"><b>${keyName(binds[a])}</b>${n}</div>`).join('') + `<div class="bp"><b>${keyName(binds.material)}</b>${MATS[ps.buildMat].name}</div>`;
  }
  if (bhHtml !== bh._html) { bh._html = bhHtml; bh.innerHTML = bhHtml; }
  bh.classList.toggle('hidden', !bhHtml);

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
  $('endSub').textContent = victory ? 'Você venceu o duelo!' : 'O bot venceu desta vez. Treine mais no Freebuild!';
  $('endPlace').textContent = `${score[0]} x ${score[1]}`;
  $('endKills').textContent = score[0];
  $('endTime').textContent = fmtTime(time);
  $('end').classList.remove('hidden');
}
