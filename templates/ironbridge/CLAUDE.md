# CLAUDE.md — IronBridge Template
# Use this as your CLAUDE.md for any IronBridge-style agent project

## QUICK RESTORE
Fetch at session start:
https://raw.githubusercontent.com/YOUR-ORG/YOUR-REPO/main/CLAUDE.md
https://raw.githubusercontent.com/YOUR-ORG/YOUR-REPO/main/ops/command-center.md

---

## PROJECT
Name: [Project name]
Mission: [One sentence]
Status: [Current phase]
Platform: [Where it lives]

## THE TEAM
[Name] — [Role] — [Status: LIVE/STANDBY/POST-M2]

## KEY DECISIONS
- [Decision] — [Date] — [Why]

## GATE SYSTEM
GREEN: Act now, log after
YELLOW: Present to [lead] before acting
RED: [Owner name] approval only

## PENDING DECISIONS
- [Decision needed] — [Who decides] — [Gate level]

## CURRENT PRIORITIES
1. [Most urgent]
2. [Second]
3. [Third]

## KEYS & ACCESS
(Keep sensitive keys as env vars — reference only)
- Memory repo: github.com/YOUR-ORG/YOUR-REPO
- Deploy: [platform]
- Site: [URL]

## CLAUDE WORK RULES
- Fetch this file + command-center.md at session start
- Write session log at session end (logs/sessions/[date].md)
- Stamp completed tasks with date + witness
- Use API calls not UI clicking for all file operations