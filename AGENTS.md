# AGENTS.md (asset-tracker)

## Scope
- This repository is managed as a full-stack project.
- Git root: `C:\Users\dssong\Desktop\toyProjects\asset-tracker`
- Current app path: `backend/asset-tracker-backend`
- New frontend can be added under `frontend/` (recommended).

## Document Policy
- Markdown docs are tracked in Git for now.
- Keep docs at repo root or `docs/` with clear names.
- Major rule/process changes should update this file in the same PR.
- Technical stack details are maintained in `TECH_STACK.md` (separate file).

## Issue Log Policy
- All user-reported issues/questions in this repo should be logged.
- Log directory: `issues/`
- File naming: `YYYY-MM-DD.md` (local date basis)
- If the daily file exists, append a new item; if not, create it.
- Minimum fields per item:
  - Time
  - User Issue
  - Action Taken
  - Result / Status

## Working Rules
- Stay within requested scope; avoid unrelated refactors.
- Do not hide root causes with broad fallback/null-handling.
- Fix config/path/build issues at config level first, then code.
- If requirements are unclear, leave a short TODO and ask.

## Git Rules
- Default branch: `main`
- Feature branch: `feature/<name>`
- Bugfix branch: `fix/<name>`
- Prefer branch + PR flow over direct `main` commits.

## Commit Checklist
- Run `git status` from repo root.
- Stage only intended files.
- Run minimum relevant checks before commit:
  - Backend: build/test
  - Frontend: lint/test/build (when frontend exists)

## Exclusions / Safety
- Do not commit secrets (tokens, passwords, keys, `.env` secrets).
- Do not commit IDE/cache/build artifacts unless explicitly needed.
- Keep generated files out unless they are required for reproducible builds.
