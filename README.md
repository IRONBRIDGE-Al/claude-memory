# 🧠 claude-memory

**Git-backed persistent memory for Claude. Your AI never forgets.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Works with Claude](https://img.shields.io/badge/Works%20with-Claude-orange)](https://claude.ai)

---

## The Problem

You spend three days building context with Claude. Deep technical discussions, decisions made, architecture designed, preferences established. Then you open a new conversation and you're back to zero. Again.

Claude's built-in memory helps — but it's shallow. It remembers your name, not your system architecture. It remembers you like bullet points, not that you decided to use GoClaw over LiteLLM last Tuesday and why.

**Complex projects need structured memory. This is it.**

---

## What claude-memory Is

A lightweight system that uses a **git repository as Claude's persistent memory layer**.

- ✅ Version controlled — every memory change is a commit
- ✅ Structured — files organize what you know, what you decided, what's next
- ✅ Instant restore — one-click boot prompt generation
- ✅ Team-ready — share memory across a team or agent system
- ✅ Auditable — full history of what Claude knew and when
- ✅ Yours — no vendor lock-in, it's just markdown files in a git repo

---

## How It Works

```
Your Project Repo (private)
├── CLAUDE.md          ← Master boot file. Claude reads this first.
├── context/
│   ├── decisions.md   ← Key decisions made and why
│   ├── status.md      ← Current state of the project
│   └── priorities.md  ← What matters right now
├── team/              ← (optional) Agent/team member briefs
└── logs/
    └── sessions/      ← Session logs written after each conversation
```

At the start of any new Claude conversation:
1. Open the Memory Console (web UI) or run `claude-memory boot`
2. Get a structured boot prompt generated from your files
3. Paste it into Claude
4. Claude has full context instantly

At the end of each conversation:
1. Claude writes a session log (what was decided, what's next)
2. Commit it
3. Next session picks up exactly where you left off

---

## Quick Start

### Option 1 — Use the Web Console (no install)
Open the Memory Console: [console.claude-memory.dev](https://console.claude-memory.dev)
Connect your GitHub repo. Click Boot. Copy. Paste into Claude.

### Option 2 — CLI
```bash
npm install -g claude-memory
claude-memory init          # scaffold memory repo structure
claude-memory boot          # generate boot prompt from your files
claude-memory log "session" # write a session log
```

### Option 3 — Template (fastest)
1. Click "Use this template" on the [claude-memory-template](https://github.com/IRONBRIDGE-Al/claude-memory-template) repo
2. Fill in `CLAUDE.md` with your project context
3. Use the web console to generate boot prompts

---

## The Boot Prompt

When you run `claude-memory boot`, it generates something like this:

```
=== MEMORY BOOT — 2026-04-07 ===

Project: IronBridge — AI agent deployment platform
Status: GO — team active, building onboarding wizard

Key decisions:
- GoClaw confirmed as primary agent platform
- 6 platforms: Telegram, X, Discord, WhatsApp, Slack, Web
- Pricing: Free / $10 / $50 / $200 Founder tier

Latest session (2026-04-07):
- GO signal issued, STANDBY lifted
- Sterling (BNKR agent) defined
- Product gaps identified and attack plan written

Current priorities:
1. Oscar: agent revival runbook
2. Paul: onboarding wizard (3 questions)
3. Dick: pricing approval with Owner

Pick up where we left off.
=== END BOOT ===
```

Paste this. Claude is fully caught up. No re-explaining.

---

## For Teams and Multi-Agent Systems

claude-memory was designed alongside [IronBridge](https://ironbridge-jade.vercel.app) — a multi-agent AI deployment platform. When you run a team of AI agents, they all read from the same memory repo. Human and AI share one source of truth.

Every agent:
- Reads from `/team/[agent-name].md` at session start
- Writes to `/logs/sessions/[date]-[agent]-session.md` at session end
- Routes decisions through `/logs/decision-log.md`

The repo is the team's brain. Claude is one member of that team.

---

## Architecture

```
claude-memory
├── packages/
│   ├── cli/           ← Node.js CLI (claude-memory init, boot, log)
│   ├── console/       ← Web UI (React, deployed to Vercel)
│   └── core/          ← Shared logic (file parsing, prompt generation)
├── templates/
│   ├── solo/          ← Single user template
│   ├── team/          ← Multi-agent team template
│   └── ironbridge/    ← Full IronBridge agent system template
└── docs/
    └── SPEC.md        ← Full specification
```

---

## Roadmap

- [x] Core memory file structure
- [x] Web console (boot prompt generator)
- [ ] CLI (`claude-memory init`, `boot`, `log`)
- [ ] GitHub App (auto-commit session logs)
- [ ] Multi-repo support (team memory across multiple projects)
- [ ] MCP server (agents read/write memory via MCP protocol)
- [ ] Hosted version (console.claude-memory.dev)
- [ ] VS Code extension

---

## Why Git?

Git is the most battle-tested versioned storage system on earth. It's free. It's private. It's already where your code lives. And it validates the architecture — [DiffMem](https://github.com/Growth-Kinetics/DiffMem) independently arrived at the same solution and ships it in production for a WhatsApp agent serving thousands of conversations.

Your memory is just markdown. Readable by humans. Readable by Claude. Version controlled. Yours forever.

---

## License

MIT — use it, fork it, build on it.

Built by [IronBridge](https://ironbridge-jade.vercel.app) | Inspired by DiffMem, mem0, and too many lost conversations