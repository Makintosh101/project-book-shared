# @project-book/shared

Shared TypeScript helpers used by both **Project Book** (agency app) and **Crew Book** (freelancer app).

This package exists so the two apps cannot drift on:
- Crew avatar resolution rules
- Crew display-name derivation
- Crew "required fields" logic for onboarding gates
- Dial-code constants for international phone input
- The Supabase `Database` type (snapshot of the agency repo's generated `types.ts`)

## Install

This package is published to **GitHub Packages** under the `@project-book` scope.

In the consuming project, create or extend `.npmrc`:

```
//npm.pkg.github.com/:_authToken=${PACKAGES_TOKEN}
@project-book:registry=https://npm.pkg.github.com
```

Then in Lovable, add `PACKAGES_TOKEN` in **Workspace Settings → Build Secrets** (the token is a GitHub PAT with `read:packages`).

```sh
bun add @project-book/shared@<exact-version>
```

> Always pin an exact version. Never use `^` or `~` — drift between the agency and crew apps must be intentional.

## Usage

```ts
import {
  resolveCrewAvatarUrl,
  deriveCrewDisplayName,
  isCrewProfileTier1Complete,
  DIAL_CODES,
} from "@project-book/shared";

import type { Database } from "@project-book/shared";
```

Subpath imports work too if you want to keep bundle splitting tight:

```ts
import { resolveCrewAvatarUrl } from "@project-book/shared/crew-avatar";
```

## Versioning

Semantic versioning, with one extra rule:

- **Any change to `src/supabase-types.ts` is a minor bump.** It mirrors the agency repo's auto-generated `src/integrations/supabase/types.ts` and changes whenever a migration runs.
- The agency repo MUST follow this checklist on every migration PR:
  1. Run the migration locally.
  2. Wait for `src/integrations/supabase/types.ts` to regenerate.
  3. Copy the new file into `project-book-shared/src/supabase-types.ts`.
  4. Bump the package version (minor unless types didn't change).
  5. Publish to GitHub Packages.
  6. Update `package.json` in **both** the agency app and the crew app.

## Building

```sh
bun install
bun run build      # emits ./dist with .js + .d.ts
bun run typecheck
```

CI: see `.github/workflows/publish.yml` for the publish-on-tag flow.

## Module map

| Subpath | What it exports |
|---|---|
| `.` (default) | All helpers + `Database` / `Json` types |
| `./crew-avatar` | `resolveCrewAvatarUrl`, `CrewAvatarFields` |
| `./crew-display-name` | Display-name derivation helpers |
| `./crew-required-fields` | Tier 1 / Tier 2 onboarding gate helpers |
| `./dial-codes` | International dial code list |
| `./supabase-types` | `Database`, `Json` (types only) |

## Adding a new helper

1. Add the file under `src/`.
2. Re-export it from `src/index.ts`.
3. Add an entry to the `exports` map in `package.json`.
4. Bump the version, publish, update consumers.

## Removing a helper

Bump a **major** version. Both consumers must update in lockstep — there is only one Supabase backend, so divergence is not an option.
