#!/usr/bin/env bash
set -euo pipefail

OPEN_CANVAS_REPO="${OPEN_CANVAS_REPO:-https://github.com/langchain-ai/open-canvas.git}"
OPEN_CANVAS_REF="${OPEN_CANVAS_REF:-main}"
OPEN_CANVAS_DIR="${OPEN_CANVAS_DIR:-open-canvas}"

cd "$(dirname "$0")/.."

if [ ! -d "$OPEN_CANVAS_DIR/.git" ]; then
  git clone "$OPEN_CANVAS_REPO" "$OPEN_CANVAS_DIR"
fi

cd "$OPEN_CANVAS_DIR"
git fetch --tags origin "$OPEN_CANVAS_REF"
git checkout "$OPEN_CANVAS_REF"

corepack enable >/dev/null 2>&1 || true
yarn install

if [ ! -f .env ] && [ -f .env.example ]; then
  cp .env.example .env
  echo "Created apps/editor/$OPEN_CANVAS_DIR/.env from upstream example."
fi

if [ ! -f apps/web/.env ] && [ -f apps/web/.env.example ]; then
  cp apps/web/.env.example apps/web/.env
  echo "Created apps/editor/$OPEN_CANVAS_DIR/apps/web/.env from upstream example."
fi

cat <<MSG

Open Canvas is checked out in apps/editor/$OPEN_CANVAS_DIR.
Next steps:
  1. Fill in API keys and Supabase settings in:
     - apps/editor/$OPEN_CANVAS_DIR/.env
     - apps/editor/$OPEN_CANVAS_DIR/apps/web/.env
  2. Build once: pnpm editor:build
  3. Start agents: pnpm editor:dev:agents
  4. Start web UI: pnpm editor:dev:web

MSG
