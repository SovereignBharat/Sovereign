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

## Sign-up and authentication

The frontend includes a first-pass authentication flow:

- `/sign-up` collects name, email, password, account type, preferred language, locality, and DPDP consent.
- `/sign-in` accepts returning users and creates a demo HTTP-only session cookie.
- `/dashboard` reads the session cookie and shows reader, creator, and privacy next steps.
- `/api/auth/sign-up`, `/api/auth/sign-in`, and `/api/auth/sign-out` provide form endpoints for the flow.

This is a lightweight local scaffold. Replace the demo cookie session with the production auth provider and database-backed user records before launch.

## Next steps

- Connect featured stories to the Sovereign article API or CMS.
- Add language and location filters backed by real content indexes.
- Replace demo session handling with the production authentication provider and database-backed users.
- Wire creator actions to authentication and the editor workspace.
- Add end-to-end tests once package installation is available in CI.
