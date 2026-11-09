import { build, context } from 'esbuild';

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
