#!/usr/bin/env node
// Instalador interativo da skill design-pro / Interactive installer.
// Uso: node install.mjs   |   npx github:SEU-USUARIO/design-pro
import { createInterface } from 'node:readline/promises';
import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const root = dirname(fileURLToPath(import.meta.url));
const rl = createInterface({ input: process.stdin });
const queue = [];
let waiting = null;
let closed = false;
rl.on('line', (l) => { if (waiting) { const w = waiting; waiting = null; w(l); } else queue.push(l); });
rl.on('close', () => { closed = true; if (waiting) { const w = waiting; waiting = null; w(''); } });
const ask = (q) => new Promise((res) => {
  process.stdout.write(q);
  if (queue.length) return res(queue.shift().trim());
  if (closed) return res('');
  waiting = (l) => res(l.trim());
});

const T = {
  pt: {
    target: 'Onde instalar?\n  1) Global do Claude Code (~/.claude)\n  2) Somente neste projeto (./.claude)\n  3) Outra pasta de skills (informar caminho)\nEscolha [1]: ',
    path: 'Caminho da pasta de skills: ',
    optIntro: '\nA skill padrão design-pro já inclui o resumo das 4 skills de origem. Você também pode instalar as originais (mais profundas). Responda uma por uma.',
    yn: ' Instalar? (s/N): ',
    yes: ['s', 'sim', 'y', 'yes'],
    copied: 'Skill design-pro instalada em',
    cmdsDone: 'Comandos /dp-* criados em',
    running: 'Executando:',
    failed: 'Falhou (siga manualmente):',
    done: '\nPronto! Abra seu agente e descreva o site que quer. Digite /dp-ajuda para ver todos os comandos.',
    mcpIntro: '\nConectores (opcionais, para a IA desenhar e testar sozinha):'
  },
  en: {
    target: 'Where to install?\n  1) Claude Code global (~/.claude)\n  2) This project only (./.claude)\n  3) Other skills folder (enter path)\nChoose [1]: ',
    path: 'Skills folder path: ',
    optIntro: '\nThe default design-pro skill already bundles a summary of the 4 source skills. You can also install the originals (deeper). Answer one by one.',
    yn: ' Install? (y/N): ',
    yes: ['y', 'yes', 's', 'sim'],
    copied: 'design-pro skill installed at',
    cmdsDone: '/dp-* commands created at',
    running: 'Running:',
    failed: 'Failed (run manually):',
    done: '\nDone! Open your agent and just describe the site you want. Type /dp-help to list all commands.',
    mcpIntro: '\nConnectors (optional, so the AI can design and test on its own):'
  }
};

console.log('design-pro — instalador / installer\n');
let lang = (await ask('Idioma dos comandos / Command language: 1) Português  2) English [1]: ')) === '2' ? 'en' : 'pt';
const t = T[lang];

const choice = await ask(t.target);
let skillsBase, commandsBase;
if (choice === '2') {
  skillsBase = resolve('.claude', 'skills'); commandsBase = resolve('.claude', 'commands');
} else if (choice === '3') {
  skillsBase = resolve(await ask(t.path)); commandsBase = null;
} else {
  skillsBase = join(homedir(), '.claude', 'skills'); commandsBase = join(homedir(), '.claude', 'commands');
}

// 1) Copia a skill padrão
const dest = join(skillsBase, 'design-pro');
mkdirSync(dest, { recursive: true });
cpSync(join(root, 'skills', 'design-pro'), dest, { recursive: true, force: true });
cpSync(join(root, 'CREDITS.md'), join(dest, 'CREDITS.md'), { force: true });
writeFileSync(join(dest, '.design-pro.json'), JSON.stringify({ lang }, null, 2));
console.log(`${t.copied} ${dest}`);

// 2) Cria comandos /dp-* (Claude Code) no idioma escolhido
if (commandsBase) {
  mkdirSync(commandsBase, { recursive: true });
  const { commands } = JSON.parse(readFileSync(join(root, 'skills', 'design-pro', 'commands.json'), 'utf8'));
  for (const c of commands) {
    const name = c[lang];
    const desc = c['desc_' + lang];
    const body = `---\ndescription: ${desc}\nargument-hint: [alvo/target]\n---\nUse a skill design-pro e execute o comando "${c.en}" (${c.pt}). Argumentos do usuário: $ARGUMENTS\n${c.en === 'help' ? '\nImprima a tabela de comandos de commands.json no idioma configurado (nome, descrição).\n' : ''}`;
    writeFileSync(join(commandsBase, `dp-${name}.md`), body);
  }
  console.log(`${t.cmdsDone} ${commandsBase}`);
}

// 3) Skills opcionais, uma por uma
const cfg = JSON.parse(readFileSync(join(root, 'skills.json'), 'utf8'));
const run = (cmd) => {
  console.log(`${t.running} ${cmd}`);
  try { execSync(cmd, { stdio: 'inherit' }); } catch { console.log(`${t.failed} ${cmd}`); }
};
console.log(t.optIntro);
for (const s of cfg.optional_skills) {
  const a = (await ask(`\n• ${s.name} — ${s['desc_' + lang]}\n  ${s.cmd}\n${t.yn}`)).toLowerCase();
  if (t.yes.includes(a)) run(s.cmd);
}
console.log(t.mcpIntro);
for (const m of cfg.mcp) {
  const a = (await ask(`\n• ${m.name} — ${m['desc_' + lang]}\n  ${m.cmd}\n${t.yn}`)).toLowerCase();
  if (t.yes.includes(a)) run(m.cmd);
}

rl.close();
console.log(t.done);
