#!/usr/bin/env node
// claude-memory CLI v0.1.0
// github.com/IRONBRIDGE-Al/claude-memory
import { program } from 'commander';
import chalk from 'chalk';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

program.name('claude-memory').description('Git-backed persistent memory for Claude').version('0.1.0');

program.command('init').description('Scaffold memory structure in current directory').action(() => {
  ['context','logs/sessions','team'].forEach(d => mkdirSync(d, { recursive: true }));
  const files = {
    'CLAUDE.md': '# CLAUDE.md\n## READ THIS FIRST.\n\n## PROJECT\nName: \nStatus: \n\n## KEY DECISIONS\n- \n\n## PRIORITIES\n1. \n2. \n3. ',
    'context/status.md': '# STATUS\n\nLast updated: \n\n## Now\n\n## Next\n',
    'context/decisions.md': '# DECISIONS\n\n| Decision | What | Why | Date |\n|----------|------|-----|------|\n',
    'context/priorities.md': '# PRIORITIES\n\n1. \n2. \n3. ',
  };
  for (const [p,c] of Object.entries(files)) {
    if (!existsSync(p)) { writeFileSync(p,c); console.log(chalk.green('  ✓ ') + p); }
    else console.log(chalk.yellow('  ~ ') + p + ' (exists)');
  }
  console.log('\n' + chalk.bold('claude-memory initialized! Fill in CLAUDE.md then run: claude-memory boot'));
});

program.command('boot').description('Generate boot prompt from memory files').option('-o, --output <file>').action((opts) => {
  const load = (f) => { try { return readFileSync(f, 'utf8'); } catch { return ''; } };
  const claude = load('CLAUDE.md'), status = load('context/status.md');
  const decisions = load('context/decisions.md'), priorities = load('context/priorities.md');
  let session = '';
  try {
    const ss = readdirSync('logs/sessions').filter(f=>f.endsWith('.md')).sort().reverse();
    if (ss.length) session = readFileSync(join('logs/sessions',ss[0]),'utf8').slice(0,400);
  } catch {}
  const prompt = `=== CLAUDE MEMORY BOOT — ${new Date().toISOString().slice(0,10)} ===\n\n${claude.slice(0,1200)}\n\n=== STATUS ===\n${status.slice(0,400)}\n\n=== DECISIONS ===\n${decisions.slice(0,400)}\n\n=== PRIORITIES ===\n${priorities.slice(0,200)}\n\n=== LAST SESSION ===\n${session||'None yet.'}\n\nPick up where we left off.\n=== END BOOT ===`;
  if (opts?.output) { writeFileSync(opts.output, prompt); console.log('Written to: ' + opts.output); }
  else { console.log('\n' + chalk.cyan(prompt) + '\n\n' + chalk.gray('Paste into Claude.')); }
});

program.command('log [title]').description('Create session log').action((title) => {
  const d = new Date().toISOString().slice(0,10);
  const f = `logs/sessions/${d}-${(title||'session').replace(/\s+/g,'-')}.md`;
  mkdirSync('logs/sessions',{recursive:true});
  writeFileSync(f, `# SESSION LOG — ${d}\n## ${title||'Session'}\n\n### What we worked on\n- \n\n### Decisions\n- \n\n### Next priorities\n1. \n2. \n3. \n`);
  console.log(chalk.green('Created: ') + f);
});

program.command('status').description('Show memory state').action(() => {
  ['CLAUDE.md','context/status.md','context/decisions.md'].forEach(f =>
    console.log((existsSync(f)?chalk.green('✓ '):chalk.red('✗ ')) + f));
  try {
    const n = readdirSync('logs/sessions').filter(f=>f.endsWith('.md')).length;
    console.log(chalk.green(`✓ logs/sessions/ (${n} sessions)`));
  } catch { console.log(chalk.yellow('~ logs/sessions/ (not found)')); }
});

program.parse();