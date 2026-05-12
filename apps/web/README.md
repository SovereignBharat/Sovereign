# Sovereign Web

`@sovereign/web` is the public-facing frontend for the Sovereign publishing platform. It introduces the reader discovery surface, multilingual positioning, creator workflow, and trust/privacy messaging.

## Commands

```bash
pnpm --filter @sovereign/web dev
pnpm --filter @sovereign/web build
pnpm --filter @sovereign/web type-check
```

The app uses Next.js App Router and lives in `apps/web/app`.

## Authentication routes

- `/sign-up` creates a reader or creator profile with language, locality, and consent fields.
- `/sign-in` creates a demo HTTP-only session cookie for local development.
- `/dashboard` displays the signed-in state and links account concepts to reader, creator, and privacy controls.
- `/api/auth/sign-up`, `/api/auth/sign-in`, and `/api/auth/sign-out` are form endpoints for the local scaffold.

Replace the demo session cookie with production auth storage before launch.
