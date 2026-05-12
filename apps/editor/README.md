# Sovereign Editor: LangChain Open Canvas

This workspace adds [LangChain Open Canvas](https://github.com/langchain-ai/open-canvas) as the AI-assisted editor for Sovereign creators. Open Canvas provides a document/code canvas, chat-driven edits, quick actions, artifact versioning, markdown rendering, and LangGraph-powered agents.

> Note: the upstream `langchain-ai/open-canvas` repository was archived by LangChain on 2026-02-26. This wrapper keeps the integration isolated so Sovereign can pin a fork or commit later without changing the rest of the monorepo.

## Local setup

From the repository root:

```bash
pnpm editor:setup
```

The setup script clones Open Canvas into `apps/editor/open-canvas`, installs upstream dependencies with Yarn, and creates local `.env` files from the upstream examples when they are available.

## Configure environment

Fill in the generated Open Canvas environment files before running the editor:

- `apps/editor/open-canvas/.env` for LangGraph agents and model provider keys.
- `apps/editor/open-canvas/apps/web/.env` for the Next.js frontend, Supabase auth, and public runtime settings.

Minimum services normally required by Open Canvas:

- Supabase project URL and anonymous key for authentication.
- At least one supported model provider key, such as OpenAI or Anthropic.
- Optional LangSmith tracing settings.

## Run the editor

Open Canvas uses two local processes. Run these in separate terminals after setup and configuration:

```bash
pnpm editor:build
pnpm editor:dev:agents
pnpm editor:dev:web
```

Default local endpoints:

- Web editor: <http://localhost:3000>
- LangGraph API: <http://localhost:54367>
- LangGraph Studio: <https://smith.langchain.com/studio?baseUrl=http://localhost:54367>

## Sovereign integration contract

Treat Open Canvas as the authoring surface for article drafts while Sovereign remains the publishing system of record:

1. Creators draft or revise content in Open Canvas.
2. The final artifact is exported as Markdown or code from Open Canvas.
3. Sovereign stores the published article, language metadata, location metadata, and DPDP consent records in its own API/CMS layer.
4. Future work can automate artifact import/export once the Sovereign article API is implemented.

## Maintenance

Use these environment variables to point setup at a maintained fork or specific ref:

```bash
OPEN_CANVAS_REPO=https://github.com/your-org/open-canvas.git \
OPEN_CANVAS_REF=your-branch-or-tag \
pnpm editor:setup
```

Remove the local checkout when needed:

```bash
pnpm --filter @sovereign/editor clean
```
