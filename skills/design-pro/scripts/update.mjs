#!/usr/bin/env node
// Uso: node update.mjs --check | --apply
// Compara version.json local com o do GitHub (repo definido em version.json).
import { readFileSync, writeFileSync, existsSync, cpSync, mkdtempSync, rmSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const here = dirname(fileURLToPath(import.meta.url));
const skillDir = join(here, '..');
const local = JSON.parse(readFileSync(join(skillDir, 'version.json'), 'utf8'));
const mode = process.argv[2] || '--check';
const branch = local.branch || 'main';
const rawUrl = `https://raw.githubusercontent.com/${local.repo}/${branch}/skills/design-pro/version.json`;

const cmp = (a, b) => {
  const x = a.split('.').map(Number), y = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) { if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0); }
  return 0;
};

let remote;
try {
  const r = await fetch(rawUrl);
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  remote = await r.json();
} catch (e) {
  console.log(JSON.stringify({ status: 'error', message: `Não foi possível consultar ${rawUrl}: ${e.message}`, hint: 'Verifique se "repo" em version.json está correto e se há rede.' }));
  process.exit(2);
}

const hasUpdate = cmp(remote.version, local.version) > 0;
if (mode === '--check') {
  console.log(JSON.stringify({ status: hasUpdate ? 'update-available' : 'up-to-date', local: local.version, remote: remote.version, changelog: remote.changelog || '' }));
  process.exit(0);
}

if (mode === '--apply') {
  if (!hasUpdate) { console.log(JSON.stringify({ status: 'up-to-date', local: local.version })); process.exit(0); }
  const tmp = mkdtempSync(join(tmpdir(), 'design-pro-'));
  try {
    execSync(`git clone --depth 1 --branch ${branch} https://github.com/${local.repo}.git "${tmp}/repo"`, { stdio: 'ignore' });
    const cfg = join(skillDir, '.design-pro.json');
    const keep = existsSync(cfg) ? readFileSync(cfg, 'utf8') : null;
    cpSync(join(tmp, 'repo', 'skills', 'design-pro'), skillDir, { recursive: true, force: true });
    if (keep) writeFileSync(cfg, keep); // preserva idioma escolhido
    console.log(JSON.stringify({ status: 'updated', from: local.version, to: remote.version }));
  } catch (e) {
    console.log(JSON.stringify({ status: 'error', message: e.message }));
    process.exit(2);
  } finally { rmSync(tmp, { recursive: true, force: true }); }
}
