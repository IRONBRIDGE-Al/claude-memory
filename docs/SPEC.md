# SPEC.md — claude-memory specification

## Vision
The simplest possible persistent memory layer for Claude.
A git repo. Some markdown files. A tool that reads them and generates a boot prompt.
That's it.

## Core Principles
1. **Files over databases** — memory is markdown. Human-readable, AI-readable, git-trackable.
2. **Explicit over implicit** — memory is written intentionally, not extracted automatically.
3. **Portable** — works with any Claude interface, any git host, any deployment.
4. **Composable** — works standalone or as a layer in a larger agent system.

## File Structure (standard layout)
```
memory-repo/
├── CLAUDE.md           ← Master boot file. Always read first.
├── context/
│   ├── status.md       ← Current state of the project
│   ├── decisions.md    ← Key decisions and reasoning
│   └── priorities.md   ← What matters right now (top 3)
├── team/               ← (optional) One file per agent/team member
│   └── [name].md
└── logs/
    ├── sessions/       ← One file per conversation
    │   └── YYYY-MM-DD-[title]-session.md
    └── decisions/      ← (optional) Formal decision records
```

## Boot Prompt Format
The boot prompt is a compressed, structured summary generated from memory files.
Target length: 500-1500 tokens. Long enough to restore context. Short enough to not waste context window.

Structure:
1. Project identity (name, owner, status)
2. Key decisions (what's settled)
3. Current priorities (what matters now)
4. Latest session summary (what just happened)
5. "Pick up where we left off."

## Session Log Format
After each significant conversation:
- What was worked on
- Decisions made
- What was built/changed
- Next session priorities
- Notes for Claude

## Integration Points
- **CLI** — generate boot prompts locally
- **Web Console** — UI for teams and non-technical users
- **MCP Server** — agents read/write memory via MCP protocol (roadmap)
- **GitHub App** — auto-commit session logs (roadmap)

## Monetization (IronBridge model)
- Open source core (this repo) — free forever
- Hosted console — freemium
- IronBridge bundle — included in all IronBridge user packages
- Team features — paid tiers for multi-agent memory
- Enterprise — private deployment, audit logs, SSO

## Validation
Architecture validated by DiffMem (github.com/Growth-Kinetics/DiffMem):
production WhatsApp agent, thousands of conversations, same git+markdown approach.