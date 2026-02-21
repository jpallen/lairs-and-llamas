# Lairs & LLamas

A D&D 5e campaign management system with an Ink-based TUI powered by the Claude Agent SDK.

## Project Structure

- `SYSTEM.md` — DM system prompt (rules, workflow, campaign instructions)
- `Campaign/index.md` — Campaign locations, NPCs (YAML blocks), DM secrets
- `CharacterSheets/` — Player character sheets (Aldric, Brynn, Pip)
- `Rules/` — Complete D&D 5e reference (883 markdown files: spells, monsters, classes, etc.)
- `JOURNAL.md` — Running session log
- `roll_dice.py` — CLI dice roller (`python roll_dice.py 2d10 1d20`)
- `src/` — TypeScript/Ink TUI application

## TUI Application (`src/`)

Built with Ink (React for CLI) and `@anthropic-ai/claude-agent-sdk`.

### Running

```bash
npm start              # Normal mode
npm start -- --debug   # Show Claude's thinking in grey
npm start -- --dice    # Dice component demo
```

### Architecture

- `src/index.tsx` — Entry point, reads SYSTEM.md, handles CLI flags
- `src/App.tsx` — Root layout with parchment-style border (80 char max, centered)
- `src/hooks/useClaudeSession.ts` — Claude SDK integration (query lifecycle, streaming, session resume via `resume: sessionId`)
- `src/components/MessageHistory.tsx` — Scrollable viewport with user messages right-aligned, assistant left-aligned, no auto-scroll
- `src/components/InputBar.tsx` — Text input at bottom
- `src/components/ToolCallBar.tsx` — Shows latest tool call above input
- `src/components/Markdown.tsx` — Basic markdown rendering (bold, italic, code, headings, lists, hr)
- `src/components/Dice.tsx` — Die component with Unicode symbols and rolling animation
- `src/components/DiceRollLine.tsx` — Inline dice roll display, auto-detects roll_dice.py output
- `src/debug.ts` — File-based debug logger (writes to `debug.log`, tail -f in another terminal)

### SDK Configuration

- Model: `opus`
- Tools: Claude Code preset (Read, Write, Edit, Bash, Glob, Grep, etc.)
- Permissions: `bypassPermissions` (DM needs full file access)
- Settings: loads project settings (`settingSources: ["project"]`) for Stop hook
- Streaming: `includePartialMessages: true`

### Color Scheme

Warm parchment theme — oranges, reds, browns:
- Border: `#8B4513` (saddle brown)
- User messages: `#CD853F` (peru)
- Assistant text: `#D2691E` (chocolate)
- Code/headings: `#B8860B` (dark goldenrod)
- Thinking (debug): `#808080` (grey)

### Dice Integration

When Claude calls `roll_dice.py` via Bash, the TUI:
1. Detects the tool_use by matching command string
2. Parses output format: `2d10: [7, 3] = 10`
3. Shows Unicode die symbols with 1.2s rolling animation before settling
4. Die symbols: △(d4) ▢(d6) ◇(d8) ⬨(d10) ⬠(d12) ⬡(d20)

## Game State Hook

`.claude/settings.json` contains a Stop hook that audits game state — checks character sheets, campaign notes, and journal are updated after each turn.
