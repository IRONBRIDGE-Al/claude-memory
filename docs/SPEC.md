# SPEC.md — claude-memory

## Vision
Simplest possible persistent memory layer for Claude. A git repo. Markdown files. A tool that reads them and generates a boot prompt.

## Principles
1. Files over databases — memory is markdown
2. Explicit over implicit — written intentionally
3. Portable — any Claude interface, any git host
4. Composable — standalone or part of a larger agent system

## File Structure
CLAUDE.md | context/ | logs/sessions/ | team/ (optional)

## Validation
Same architecture as DiffMem (production WhatsApp agent, thousands of conversations).

## Monetization
- Core: open source, free forever
- Hosted console: freemium
- IronBridge: bundled in all user packages
- Team: paid multi-agent memory
- Enterprise: private deployment + audit logs