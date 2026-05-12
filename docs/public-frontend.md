# Public Frontend

The Sovereign public frontend lives in `apps/web` and provides the first production-oriented reader and creator-facing UI for the platform.

## Experience goals

- Present Sovereign as a location-first public publishing platform.
- Highlight multilingual discovery and regional context.
- Introduce creator onboarding and the Open Canvas drafting workflow.
- Surface DPDP-aware trust and privacy messaging in the public experience.

## Local commands

```bash
pnpm web:dev         # run the Next.js development server
pnpm web:build       # build the public frontend
pnpm web:type-check  # run TypeScript checks for the web app
```

## App structure

- `apps/web/app/layout.tsx` defines global metadata and the root document shell.
- `apps/web/app/page.tsx` builds the landing page sections.
- `apps/web/app/globals.css` contains responsive styling and design tokens.
- `apps/web/lib/content.ts` keeps homepage content data typed and reusable.

## Next steps

- Connect featured stories to the Sovereign article API or CMS.
- Add language and location filters backed by real content indexes.
- Wire creator actions to authentication and the editor workspace.
- Add end-to-end tests once package installation is available in CI.
