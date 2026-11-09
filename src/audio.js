// Sons sintetizados (sem arquivos externos)
let ctx = null, master = null, noiseBuf = null;
let windGain = null, engineGain = null;
let volume = 0.7;

export function initAudio(vol = 0.7) {
  volume = vol;
  if (ctx) { master.gain.value = vol; if (ctx.state === 'suspended') ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = vol;
  const comp = ctx.createDynamicsCompressor();
  master.connect(comp); comp.connect(ctx.destination);
  const len = ctx.sampleRate * 2;
  noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  // vento (queda livre)
  const ws = ctx.createBufferSource(); ws.buffer = noiseBuf; ws.loop = true;
  const wf = ctx.createBiquadFilter(); wf.type = 'bandpass'; wf.frequency.value = 600; wf.Q.value = 0.5;
  windGain = ctx.createGain(); windGain.gain.value = 0;
  ws.connect(wf); wf.connect(windGain); windGain.connect(master); ws.start();
  // motor do onibus
  const eo = ctx.createOscillator(); eo.type = 'sawtooth'; eo.frequency.value = 62;
  const ef = ctx.createBiquadFilter(); ef.type = 'lowpass'; ef.frequency.value = 220;
  engineGain = ctx.createGain(); engineGain.gain.value = 0;
  eo.connect(ef); ef.connect(engineGain); engineGain.connect(master); eo.start();
}
export function setVolume(v) { volume = v; if (master) master.gain.value = v; }
export function resumeAudio() { if (ctx && ctx.state === 'suspended') ctx.resume(); }

export function setWind(v) { if (windGain) windGain.gain.value += (Math.min(1, v) * 0.35 - windGain.gain.value) * 0.1; }
export function setEngine(v) { if (engineGain) engineGain.gain.value += (v * 0.18 - engineGain.gain.value) * 0.1; }

function out(pan) {
  if (!ctx) return null;
  if (!pan) return master;
  const p = ctx.createStereoPanner();
  p.pan.value = Math.max(-1, Math.min(1, pan));
  p.connect(master);
  return p;
}

function noise(dest, { dur = 0.15, f0 = 3000, f1 = 600, q = 0.7, gain = 0.5, type = 'lowpass', delay = 0 }) {
  const t = ctx.currentTime + delay;
  const s = ctx.createBufferSource(); s.buffer = noiseBuf;
  s.loop = true;
  const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q;
  f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  s.connect(f); f.connect(g); g.connect(dest);
  s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.05);
}
function tone(dest, { f0 = 440, f1 = 440, dur = 0.1, type = 'sine', gain = 0.3, delay = 0 }) {
  const t = ctx.currentTime + delay;
  const o = ctx.createOscillator(); o.type = type;
  o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(dest);
  o.start(t); o.stop(t + dur + 0.05);
}

const SHOT = {
  pistol:  (d, v) => { noise(d, { dur: 0.12, f0: 4200, f1: 700, gain: 0.55 * v }); tone(d, { f0: 220, f1: 70, dur: 0.1, gain: 0.5 * v }); },
  smg:     (d, v) => { noise(d, { dur: 0.09, f0: 5000, f1: 900, gain: 0.45 * v }); tone(d, { f0: 260, f1: 90, dur: 0.07, gain: 0.35 * v }); },
  ar:      (d, v) => { noise(d, { dur: 0.15, f0: 3400, f1: 500, gain: 0.6 * v }); tone(d, { f0: 170, f1: 55, dur: 0.12, gain: 0.55 * v }); },
  shotgun: (d, v) => { noise(d, { dur: 0.32, f0: 2600, f1: 200, gain: 0.9 * v }); tone(d, { f0: 140, f1: 38, dur: 0.22, gain: 0.8 * v }); },
  sniper:  (d, v) => { noise(d, { dur: 0.55, f0: 3000, f1: 150, gain: 0.95 * v }); tone(d, { f0: 120, f1: 28, dur: 0.4, gain: 0.9 * v }); noise(d, { dur: 0.6, f0: 900, f1: 120, gain: 0.25 * v, delay: 0.12 }); },
  rocket:  (d, v) => { noise(d, { dur: 0.5, f0: 1800, f1: 200, gain: 0.7 * v, type: 'bandpass' }); tone(d, { f0: 100, f1: 40, dur: 0.3, gain: 0.7 * v }); },
};

export const sfx = {
  shot(kind, vol = 1, pan = 0) { if (!ctx || vol < 0.02) return; const d = out(pan); (SHOT[kind] || SHOT.ar)(d, vol); },
  explosion(vol = 1, pan = 0) {
    if (!ctx || vol < 0.02) return; const d = out(pan);
    noise(d, { dur: 1.3, f0: 1800, f1: 60, gain: 1.1 * vol }); tone(d, { f0: 90, f1: 22, dur: 0.9, gain: 1.0 * vol });
    noise(d, { dur: 0.5, f0: 6000, f1: 800, gain: 0.5 * vol, type: 'highpass' });
  },
  hit() { if (!ctx) return; tone(master, { f0: 1500, f1: 1200, dur: 0.05, type: 'square', gain: 0.18 }); },
  headshot() { if (!ctx) return; tone(master, { f0: 2200, f1: 1800, dur: 0.07, type: 'square', gain: 0.25 }); tone(master, { f0: 1100, f1: 900, dur: 0.1, type: 'triangle', gain: 0.2 }); },
  kill() { if (!ctx) return; tone(master, { f0: 600, f1: 900, dur: 0.12, type: 'triangle', gain: 0.35 }); tone(master, { f0: 900, f1: 1400, dur: 0.18, type: 'triangle', gain: 0.35, delay: 0.1 }); },
  hurt() { if (!ctx) return; tone(master, { f0: 180, f1: 90, dur: 0.18, type: 'sawtooth', gain: 0.3 }); noise(master, { dur: 0.15, f0: 900, f1: 200, gain: 0.25 }); },
  pickup() { if (!ctx) return; tone(master, { f0: 700, f1: 1000, dur: 0.08, type: 'triangle', gain: 0.25 }); tone(master, { f0: 1000, f1: 1500, dur: 0.1, type: 'triangle', gain: 0.25, delay: 0.07 }); },
  ammo() { if (!ctx) return; tone(master, { f0: 500, f1: 560, dur: 0.05, type: 'square', gain: 0.1 }); },
  chest() { if (!ctx) return; for (let i = 0; i < 5; i++) tone(master, { f0: 600 + i * 160, f1: 700 + i * 170, dur: 0.18, type: 'triangle', gain: 0.22, delay: i * 0.07 }); },
  build(pan = 0) { if (!ctx) return; const d = out(pan); noise(d, { dur: 0.12, f0: 1200, f1: 200, gain: 0.5 }); tone(d, { f0: 180, f1: 110, dur: 0.1, gain: 0.35, type: 'triangle' }); },
  breakPiece(vol = 1, pan = 0) { if (!ctx || vol < 0.03) return; const d = out(pan); noise(d, { dur: 0.5, f0: 2600, f1: 150, gain: 0.7 * vol }); tone(d, { f0: 120, f1: 50, dur: 0.3, gain: 0.5 * vol, type: 'triangle' }); },
  pickaxe(kind = 'wood') {
    if (!ctx) return;
    if (kind === 'metal') { tone(master, { f0: 1800, f1: 1400, dur: 0.14, type: 'square', gain: 0.18 }); noise(master, { dur: 0.08, f0: 6000, f1: 2000, gain: 0.25, type: 'highpass' }); }
    else { noise(master, { dur: 0.14, f0: 1600, f1: 250, gain: 0.55 }); tone(master, { f0: 200, f1: 100, dur: 0.1, type: 'triangle', gain: 0.4 }); }
  },
  swing() { if (!ctx) return; noise(master, { dur: 0.15, f0: 1500, f1: 600, gain: 0.12, type: 'bandpass' }); },
  reload() { if (!ctx) return; tone(master, { f0: 300, f1: 200, dur: 0.05, type: 'square', gain: 0.12 }); tone(master, { f0: 500, f1: 400, dur: 0.06, type: 'square', gain: 0.12, delay: 0.5 }); },
  empty() { if (!ctx) return; tone(master, { f0: 800, f1: 700, dur: 0.04, type: 'square', gain: 0.1 }); },
  heal() { if (!ctx) return; tone(master, { f0: 500, f1: 900, dur: 0.25, type: 'sine', gain: 0.25 }); tone(master, { f0: 750, f1: 1300, dur: 0.3, type: 'sine', gain: 0.2, delay: 0.1 }); },
  step(v = 1) { if (!ctx) return; noise(master, { dur: 0.06, f0: 700, f1: 200, gain: 0.07 * v }); },
  land() { if (!ctx) return; noise(master, { dur: 0.15, f0: 600, f1: 120, gain: 0.25 }); },
  storm() { if (!ctx) return; tone(master, { f0: 330, f1: 330, dur: 0.4, type: 'sine', gain: 0.2 }); tone(master, { f0: 262, f1: 262, dur: 0.5, type: 'sine', gain: 0.2, delay: 0.35 }); },
  victory() { if (!ctx) return; [523, 659, 784, 1047, 1319].forEach((f, i) => tone(master, { f0: f, f1: f, dur: 0.5, type: 'triangle', gain: 0.3, delay: i * 0.14 })); },
  eliminated() { if (!ctx) return; [392, 330, 262, 196].forEach((f, i) => tone(master, { f0: f, f1: f * 0.98, dur: 0.4, type: 'sawtooth', gain: 0.18, delay: i * 0.18 })); },
  slide() { if (!ctx) return; noise(master, { dur: 0.45, f0: 1400, f1: 250, gain: 0.3, type: 'bandpass' }); },
  jump() { if (!ctx) return; noise(master, { dur: 0.12, f0: 800, f1: 300, gain: 0.1, type: 'bandpass' }); },
  glider() { if (!ctx) return; noise(master, { dur: 0.35, f0: 2000, f1: 500, gain: 0.35, type: 'bandpass' }); },
};
