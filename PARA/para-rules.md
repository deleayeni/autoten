# PARA Rules — How to Use This System

**Audience:** Claude agents working in this repo (and humans). Read this before touching any `PARA/` folder.

## TL;DR

- **Multi-step tasks** → create a numbered folder in `PARA/project/` (e.g. `1-contact-info-fix/`) with `task-description.md`, `context.md`, `todo.md` at minimum
- **Lectures / reference material** → write into `PARA/resources/<topic>/`, following the folder's `_0.md` TOC
- **Current-state docs** (page inventories, schema snapshots) → update `PARA/area/<domain>/`
- **Done or dropped projects** → move the whole folder to `PARA/archive/`

## The four folders

### `project/` — active work

Tasks with a goal and an end. Each task = one folder. Temporary by nature — the folder gets moved to `archive/` when the task ships or is dropped.

### `area/` — ongoing responsibilities

Living inventories of things that exist and need to stay current. No deadline. Examples:
- `AutoTen-Frontend/` — page/component/styling inventory
- `AutoTen-Business/` — brand, roadmap, KPIs
- `AutoTen-Data/` — schema, RLS, data flow

Updated by rescan-and-rewrite, not hand-editing. See each Area's `_0.md`.

### `resources/` — reference material

Topic-organized knowledge base. Claude writes lectures here that Dele reads to learn. Each folder has a `_0.md` table of contents listing planned lectures in reading order.

Currently: `TypeScript/`, `React/`, `Nextjs/`, `Styling-and-Design-System/`, `Supabase-and-Data/`, `Browser-and-Accessibility/`, `Web-Security/`, `Tooling-and-Deploy/`.

### `archive/` — done or dropped

Completed projects live here. Never delete — archive. Old context is sometimes load-bearing.

## Conventions

### Project folder naming

- **Format:** `N-kebab-case-name` where N is an incrementing integer starting at 1
- **Examples:** `1-contact-info-fix`, `2-vdp-implementation`, `3-lead-capture-form`
- **Zero-padding:** use `01-`, `02-` once there are 10+ projects (for clean sorting)
- **Naming rule:** describe the **outcome**, not the task. "contact-info-fix" ✓, "update-contact-page" ✗
- **Picking the next number:** list existing `project/` + `archive/` contents; pick one higher than the max

### Standard project files

Inside each project folder:

| File | When | Answers the question |
|---|---|---|
| `task-description.md` | ✅ Always | "What are we trying to achieve and when are we done?" — Goal, Scope, Success criteria, Why, Related. Stable once written. |
| `context.md` | ✅ Almost always | "Where is the relevant code/docs I need to know about?" — pointers to `src/*` files, Area docs, Resource notes. In-repo only. |
| `research.md` | When there's outside input | "What did other sources say?" — pasted advice from other agents, articles, design refs, screenshots. External material only. |
| `plan.md` | For anything non-trivial | "What's the approach?" — phased thinking, sequencing, tradeoffs. Evolves as you learn. |
| `todo.md` | For anything with steps | "What concrete actions remain?" — a tight checklist of ticked-off items. |
| `rejected-ideas.md` | As ideas are dropped | "What did we consider and decide not to do, and why?" — stops agents re-proposing the same bad ideas. |
| `implementation-log/` | Only for multi-round tasks | Subfolder with `1-first-pass.md`, `2-fixes.md`, etc. Don't create up front — add it when a task actually gets messy. |

**Key distinctions to watch:**

- `context.md` vs `research.md` — context = files **inside** the repo; research = input from **outside** (other AI, articles, screenshots)
- `plan.md` vs `todo.md` — plan = narrative ("Phase 1: hero. Phase 2: new sections."); todo = punch list ("[ ] Make headline bigger")
- `task-description.md` vs `plan.md` — task-description is stable (rarely changes); plan evolves

### File naming inside any folder

- `_0.md` = the overview/index in **area/** and **resource/** folders (not used in project/ — see above)
- `_N-topic.md` = numbered sub-docs in a resource folder (e.g. `_3-server-vs-client.md`)
- `topic.md` = flat named docs in an area (e.g. `components.md`, `styling.md`)
- **Project folders** use the named files listed above (`task-description.md`, `todo.md`, etc.) — no `_0.md` prefix

## Rules for Claude agents

### When the user starts a new task

1. **Decide: does it warrant a project folder?**
   - ✅ Yes if: multiple file changes, multiple conversation turns expected, design decisions needed, or the work spans sessions
   - ❌ No if: one-shot fix, question, simple debugging, reading/exploring
2. If yes: **propose the folder name + number BEFORE creating it.** Wait for agreement.
3. Once agreed, create the core files:
   - `task-description.md` — the brief (Goal, Scope, Success criteria, Why, Related)
   - `context.md` — in-repo pointers to relevant files/docs
   - `research.md` — paste any external input (other agents, articles, design refs)
   - `plan.md` — approach / phased thinking
   - `todo.md` — concrete checklist
4. As work progresses:
   - Append to `rejected-ideas.md` whenever you consider something and decide against it
   - Create `implementation-log/` only if the task enters a second implementation round

### When writing a lecture

- Location: `PARA/resources/<topic>/`
- Use the reading order in that folder's `_0.md`
- **Cite real files from `src/`** — don't use generic examples. Dele learns from his own code.
- Name: `_N-topic.md` matching the TOC entry

### When updating an Area

- Don't rewrite unless asked ("rescan and update" or similar)
- If you notice drift during other work, flag it at the top of the file rather than silently fixing it
- Keep Areas honest — document gaps, known bugs, and unknowns, not aspirations

### When finishing a project

- Ask the user whether to move the folder to `archive/`
- If yes, move the whole folder intact
- Update any Area files that became stale because of the shipped work

## Connections to the rest of the repo

- [CLAUDE.md](../CLAUDE.md) — project-level Claude instructions. CLAUDE.md wins on conflicts unless explicitly overridden here.
- Memory system lives outside the repo (in `~/.claude/projects/.../memory/`) — for stable user preferences that apply across projects. PARA is for project-specific content.

## Update policy

Update this file when the rules change. Don't document aspirational rules — only the ones actually followed.
