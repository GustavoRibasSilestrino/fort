import { build, context } from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';

const watch = process.argv.includes('--watch');
const opts = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  outfile: 'game.js',
  minify: !watch,
  sourcemap: watch,
  target: ['chrome110', 'firefox110', 'safari16'],
  logLevel: 'info',
};

if (watch) {
  const ctx = await context(opts);
  await ctx.watch();
  console.log('Observando alteracoes...');
} else {
  await build(opts);
}

// FortBuild.html = index.html com o game.js embutido (arquivo unico)
if (!watch) {
  const html = readFileSync('index.html', 'utf8');
  const js = readFileSync('game.js', 'utf8').replace(/<\/script/gi, '<\/script');
  writeFileSync('FortBuild.html', html.replace('<script src="game.js"></script>', () => '<script>' + js + '</script>'));
}
