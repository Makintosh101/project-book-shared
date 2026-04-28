# Changelog

All notable changes to `@project-book/shared`.

## 0.1.0 — 2026-04-28

Initial scaffold extracted from the Project Book monorepo ahead of the Crew Book app split (see `docs/05-decisions/ADR-crew-book-app-split.md` in the agency repo).

### Added
- `crew-avatar` — `resolveCrewAvatarUrl` + `CrewAvatarFields`
- `crew-display-name` — display-name derivation helpers
- `crew-required-fields` — Tier 1 / Tier 2 onboarding gate helpers
- `dial-codes` — international dial code constants
- `supabase-types` — re-export of `Database` + `Json` from the agency repo's generated `types.ts` snapshot

### Notes
- Pinned consumers must use this exact version; no semver ranges.
- Next bump expected when the agency repo runs its next migration that changes `types.ts`.
