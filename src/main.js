import * as THREE from 'three';
import { S } from './state.js';
import { buildGround } from './terrain.js';
import { buildSky, updateSky } from './sky.js';
import * as pieces from './pieces.js';
import { updatePieces } from './pieces.js';
import * as physics from './physics.js';
import * as combat from './combat.js';
import { initFx, updateFx } from './fx.js';
import { initCombatHooks, updateRockets } from './combat.js';
import { player, updatePlayer, ps } from './player.js';
import { createBot, createDummy } from './bots.js';
import { startMode, updateMode, M } from './modes.js';
import { initHud, updateHud, showHud, showEnd } from './hud.js';
import { initInput, requestLock, endFrame, input, keys, pressed, mouse } from './input.js';
import { initAudio, sfx, resumeAudio } from './audio.js';
import { loadSettings, saveSettings, initSettingsUI } from './settings.js';
import { on } from './events.js';
import { NET, joinLobby, leaveLobby, invite, answerInvite } from './net.js';

const $ = (id) => document.getElementById(id);
const canvas = $('c');
let renderer, scene, camera;
let running = false, ready = false;
let last = performance.now();
const params = new URLSearchParams(location.search);
const tick = () => new Promise((r) => setTimeout(r, 0));

function applyQuality(q) {
  const dpr = window.devicePixelRatio || 1;
  renderer.setPixelRatio(q === 'high' ? Math.min(dpr, 2) : q === 'medium' ? Math.min(dpr, 1.5) : 1);
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.shadowMap.enabled = q !== 'low';
  if (S.sun) {
    S.sun.castShadow = q !== 'low';
    const size = q === 'high' ? 2048 : 1024;
    if (S.sun.shadow.mapSize.x !== size) {
      S.sun.shadow.mapSize.set(size, size);
      if (S.sun.shadow.map) { S.sun.shadow.map.dispose(); S.sun.shadow.map = null; }
    }
  }
}

async function init() {
  loadSettings();
  const q = S.settings.quality;
  $('diffIn').value = S.settings.diff || 'normal';

  renderer = new THREE.WebGLRenderer({ canvas, antialias: q !== 'low', powerPreference: 'high-performance' });
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(S.settings.fov || 80, innerWidth / innerHeight, 0.15, 2600);
  S.renderer = renderer; S.scene = scene; S.camera = camera; S.player = player;
  $('loadBar').style.width = '30%';
  await tick();

  buildSky(scene, q);
  buildGround(scene, renderer);
  initFx(scene);
  initCombatHooks();
  S.actors.push(player);
  scene.add(player.model.root);
  createBot();
  createDummy();
  initHud();
  initInput(canvas, onLockChange);
  initSettingsUI((quality) => applyQuality(quality));
  applyQuality(q);
  $('loadBar').style.width = '100%';
  await tick();

  on('playerHurt', () => sfx.hurt());
  on('duelOver', ({ win, score }) => {
    if (win) sfx.victory();
    setTimeout(() => {
      try { document.exitPointerLock(); } catch (e) { /* ignorar */ }
      $('pause').classList.add('hidden');
      showEnd({ victory: win, score, time: S.matchTime });
    }, 2300);
  });

  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight, false);
  });

  $('loading').classList.add('hidden');
  ready = true;
  window.__g = { S, player, M, THREE, keys, pressed, mouse, input, scene, camera, pieces, physics, ps, combat };
  const auto = params.get('autostart');
  if (auto) { S.noLock = true; startGame(auto === 'duel' ? 'duel' : 'freebuild'); }
  requestAnimationFrame(frame);
}

function startGame(type, online = false) {
  if (!ready || running) return;
  S.settings.diff = $('diffIn').value;
  saveSettings();
  initAudio(S.settings.volume);
  $('menu').classList.add('hidden');
  $('lobby').classList.add('hidden'); $('inviteBox').classList.add('hidden');
  showHud(true);
  startMode(type, S.settings.diff, online);
  S.paused = false;
  running = true;
  if (!S.noLock) {
    requestLock(canvas);
    setTimeout(() => { if (!input.locked && running && S.phase !== 'over') $('pause').classList.remove('hidden'); }, 900);
  }
}

function onLockChange(locked) {
  if (locked) { $('pause').classList.add('hidden'); $('settings').classList.add('hidden'); resumeAudio(); return; }
  if (running && S.phase !== 'over') $('pause').classList.remove('hidden');
}

function simulate(dt) {
  S.time += dt; S.dt = dt;
  if (S.phase === 'playing') S.matchTime += dt;
  updatePlayer(dt);
  updateMode(dt);
  updateRockets(dt);
  updatePieces(dt);
  updateFx(dt);
  updateSky(dt, camera.position);
  updateHud(dt);
  endFrame();
}
// usado nos testes automatizados: avanca a simulacao sem depender do requestAnimationFrame
window.__step = (n = 1, dt = 1 / 60) => { for (let i = 0; i < n; i++) simulate(dt); };

function frame(now) {
  requestAnimationFrame(frame);
  let dt = (now - last) / 1000;
  last = now;
  if (dt > 0.05) dt = 0.05;
  const active = running && (input.locked || S.noLock);
  if (active) simulate(dt);
  else if (running) { updateSky(0, camera.position); endFrame(); }
  renderer.render(scene, camera);
}

$('freeBtn').addEventListener('click', () => startGame('freebuild'));
// ===== X1 online =====
let pendingInvite = null;
function renderPeers() {
  const box = $('peerList'); box.innerHTML = '';
  if (!NET.room) return;
  if (NET.peers.size === 0) { box.innerHTML = '<div class="snote">Ninguém online ainda nesta sala... peça para seu amigo entrar com o mesmo código.</div>'; return; }
  for (const [id, p] of NET.peers) {
    const row = document.createElement('div'); row.className = 'peer' + (p.busy ? ' busy' : '');
    row.innerHTML = '<span></span>'; row.firstChild.textContent = p.name;
    const small = document.createElement('small'); small.textContent = p.busy ? 'em partida' : 'online'; row.firstChild.appendChild(small);
    if (!p.busy) { const b = document.createElement('button'); b.className = 'btn small'; b.textContent = 'CONVIDAR X1'; b.onclick = () => invite(id); row.appendChild(b); }
    box.appendChild(row);
  }
}
NET.onLobby = renderPeers;
NET.onInvite = (id, name) => { pendingInvite = id; $('inviteTxt').textContent = `${name} te convidou para um X1!`; $('inviteBox').classList.remove('hidden'); };
NET.onStart = () => startGame('duel', true);
$('onlineBtn').addEventListener('click', () => { $('netName').value = S.settings.name && S.settings.name !== 'Jogador' ? S.settings.name : ($('netName').value || ''); $('lobby').classList.remove('hidden'); });
$('netClose').addEventListener('click', () => { leaveLobby(); $('lobby').classList.add('hidden'); $('inviteBox').classList.add('hidden'); });
$('netJoin').addEventListener('click', () => {
  const name = ($('netName').value || 'Jogador').trim().slice(0, 14) || 'Jogador';
  saveSettings();
  try { joinLobby($('netLobby').value, name); $('netStatus').textContent = 'Online na sala "' + NET.lobby + '". Procurando amigos...'; renderPeers(); }
  catch (e) { $('netStatus').textContent = 'Erro ao conectar: ' + (e && e.message ? e.message : e); }
});
$('invYes').addEventListener('click', () => { if (pendingInvite) answerInvite(pendingInvite, true); pendingInvite = null; $('inviteBox').classList.add('hidden'); });
$('invNo').addEventListener('click', () => { if (pendingInvite) answerInvite(pendingInvite, false); pendingInvite = null; $('inviteBox').classList.add('hidden'); });
$('duelBtn').addEventListener('click', () => startGame('duel'));
$('resumeBtn').addEventListener('click', () => requestLock(canvas));
$('pause').addEventListener('click', (e) => { if (e.target.id === 'pause') requestLock(canvas); });
$('menuBtn').addEventListener('click', (e) => { e.stopPropagation(); location.reload(); });
$('againBtn').addEventListener('click', () => location.reload());

init().catch((e) => {
  console.error(e);
  $('loading').innerHTML = '<div style="font-size:22px;padding:20px">Erro ao carregar: ' + (e && e.message ? e.message : e) + '</div>';
});
