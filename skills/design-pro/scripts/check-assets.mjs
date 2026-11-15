#!/usr/bin/env node
// Uso: node check-assets.mjs <pasta> — confere imagens (<300KB, WebP), vídeos (WebM) e alt em HTML.
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = process.argv[2] || '.';
const IMG = new Set(['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp', '.avif']);
const VID = new Set(['.mp4', '.mov', '.avi', '.mkv', '.webm', '.m4v']);
const LIMIT = 300 * 1024;
const problems = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.git')) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) { walk(p); continue; }
    const ext = extname(name).toLowerCase();
    if (IMG.has(ext)) {
      if (ext !== '.webp') problems.push(`FORMATO  ${p}: use WebP (atual ${ext})`);
      if (st.size > LIMIT) problems.push(`PESO     ${p}: ${(st.size / 1024).toFixed(0)} KB (> 300 KB)`);
    } else if (VID.has(ext)) {
      if (ext !== '.webm') problems.push(`VÍDEO    ${p}: converta para WebM (atual ${ext})`);
    } else if (ext === '.html' || ext === '.htm') {
      const html = readFileSync(p, 'utf8');
      for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
        if (!/\balt\s*=/.test(m[0])) problems.push(`ALT      ${p}: <img> sem alt → ${m[0].slice(0, 80)}`);
        if (!/\bwidth\s*=/.test(m[0]) || !/\bheight\s*=/.test(m[0])) problems.push(`CLS      ${p}: <img> sem width/height → ${m[0].slice(0, 80)}`);
      }
    }
  }
}

walk(root);
if (problems.length === 0) { console.log('OK: nenhum problema encontrado.'); process.exit(0); }
console.log(problems.join('\n'));
console.log(`\n${problems.length} problema(s).`);
process.exit(1);
