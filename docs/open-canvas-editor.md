# LangChain Open Canvas Editor Integration

Sovereign includes `apps/editor` as an integration wrapper for LangChain Open Canvas. The wrapper intentionally keeps upstream Open Canvas source out of the repository and clones it into an ignored local checkout at `apps/editor/open-canvas`.

## Why this approach

- Keeps the core Sovereign monorepo small.
- Allows teams to pin `OPEN_CANVAS_REPO` and `OPEN_CANVAS_REF` to a fork, tag, or commit.
- Avoids mixing Open Canvas' Yarn-based monorepo with Sovereign's pnpm/Turbo workspace.
- Makes the editor optional for deployments that only need publishing and reading surfaces.

## Root commands

```bash
pnpm editor:setup       # clone and install Open Canvas
pnpm editor:build       # build the upstream Open Canvas monorepo
pnpm editor:dev:agents  # run the LangGraph agent server
pnpm editor:dev:web     # run the Open Canvas web app
```

## Expected content workflow

1. A creator opens the Open Canvas editor.
2. They create or revise article content with AI-assisted quick actions.
3. They export the final artifact as Markdown.
4. Sovereign imports or stores that Markdown alongside article metadata such as author, language, location, tags, and consent state.

## Production considerations

Before exposing Open Canvas in production, decide how Sovereign will handle:

- Authentication handoff between Sovereign and Supabase/Open Canvas.
- Storage and retention rules for drafts, chat history, memories, and artifacts.
- DPDP notices and consent records for AI-assisted processing.
- Model provider data processing terms.
- A maintained fork, since the upstream Open Canvas repository is archived.
