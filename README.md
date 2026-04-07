# 🧠 claude-memory

> Git-backed persistent memory for Claude. Your AI never forgets.

**Built by [IronBridge](https://ironbridge-jade.vercel.app) — the AI agent deployment platform.**

---

## The Problem

You spend days building context with Claude. Decisions made. Architecture designed. Preferences established.

Then you open a new conversation — and you're back to zero.

Claude's built-in memory is shallow. It remembers your name, not that you decided to use GoClaw over LiteLLM last Tuesday and why.

**Complex projects need structured memory. This is it.**

---

## What It Does

Uses a git repo as Claude's persistent memory layer.

- ✅ **Version controlled** — every memory change is a commit
- ✅ **Structured** — markdown files organize decisions, status, priorities
- ✅ **Instant restore** — one paste and Claude has full context
- ✅ **Team-ready** — share memory across humans and AI agents
- ✅ **Auditable** — full history of what Claude knew and when
- ✅ **Yours** — no vendor lock-in, just markdown in git

---

## Quick Start

### Option 1 — Web Console (fastest, no install)
Open: **[ironbridge-jade.vercel.app/memory-boot.html](https://ironbridge-jade.vercel.app/memory-boot.html)**
Connect your repo → Click Boot → Copy → Paste into Claude. Done in 15 seconds.

### Option 2 — CLI
```bash
npm install -g claude-memory
claude-memory init    # scaffold memory structure
claude-memory boot    # generate boot prompt
claude-memory log     # write session log
```

### Option 3 — Just CLAUDE.md
Copy `templates/solo/CLAUDE.md` into your repo. Fill it in. Paste raw URL to Claude at session start.

**Raw URL format:**
`https://raw.githubusercontent.com/YOUR-ORG/YOUR-REPO/main/CLAUDE.md`

---

## File Structure

```
your-memory-repo/
├── CLAUDE.md              ← Master boot file. Paste this URL to Claude first.
├── context/
│   ├── decisions.md       ← Key decisions + why
│   ├── status.md          ← Current state
│   └── priorities.md      ← What matters now
├── team/
│   └── [agent].md         ← Agent/team member briefs
└── logs/
    ├── sessions/          ← Session logs (what happened, what's next)
    └── decisions/         ← Decision log with timestamps
```

---

## The Boot Prompt

Running `claude-memory boot` or using the web console generates:

```
=== MEMORY BOOT — 2026-04-07 ===

--- CLAUDE.MD ---
Project: IronBridge
Status: GO — 4 agents live on Railway
Decisions: GoClaw confirmed, pricing written, 6 platforms decided
Priorities: pricing approval, onboarding wizard, GoClaw install

--- OPS/COMMAND-CENTER.MD ---
[37 completed tasks, team status, pending gates]

=== END BOOT ===
Pick up where we left off.
```

Paste this. Claude is fully caught up.

---

## For IronBridge Agent Teams

claude-memory was built alongside IronBridge — a multi-agent AI deployment platform.

When you run a team of AI agents, they all read from the same memory repo:
- Dick (Orchestrator) reads CLAUDE.md + command-center.md at session start
- Brooks writes health logs every 10 min → logs/health/
- Rachel writes intel reports every 6 hrs → logs/intel/
- All agents write session logs → logs/sessions/

**The repo is the team's brain. Every agent reads and writes to the same source of truth.**

Use the IronBridge template: `templates/ironbridge/`

---

## Roadmap

- [x] Core memory file structure
- [x] Web console (boot prompt generator + session log writer)
- [x] CLI (claude-memory init, boot, log)
- [x] IronBridge multi-agent template
- [ ] GitHub App (auto-commit session logs)
- [ ] MCP server (agents read/write memory via MCP — no manual paste)
- [ ] VS Code extension
- [ ] Hosted version (console.claude-memory.dev)

---

## Why Git?

Free. Private. Already where your code lives. Every change is versioned.

Independently validated: DiffMem ships the same architecture in production for a WhatsApp agent serving thousands of conversations.

Your memory is markdown. Readable by humans. Readable by Claude. Version controlled. Yours forever.

---

MIT License · Built by [IronBridge](https://ironbridge-jade.vercel.app)