# AGENTS.md

## Project Role

This repository is the shared classroom-tools workspace for Codex and OpenCode.

## Shared Rules

- Keep changes focused on the user's request.
- Prefer simple, maintainable classroom tools over broad frameworks.
- Do not commit secrets, local assistant state, or private credentials.
- Keep work notes updated in Obsidian:
  `G:\我的雲端硬碟\secondbrain\Projects\my-classroom-tools\工作筆記.md`
- Use Firebase project `ai-agent48` for database-backed demos unless the user asks for another project.
- Put each tool under `tools/<tool-name>/`.

## Startup Workflow

1. Check `git status --short`.
2. Read the Obsidian work note.
3. Fetch GitHub updates, but do not pull automatically if there are local changes.
4. Summarize current state and suggested next step.

## Shutdown Workflow

1. Summarize changed files.
2. Update the Obsidian work note.
3. Stage only relevant files.
4. Commit with a clear message.
5. Push to GitHub.

## Safety

- Never commit `.env`, credentials, tokens, `.claude/`, `.codex/`, or OpenCode local state.
- Firebase web config can be public, but service account keys must never be committed.

