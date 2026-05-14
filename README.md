# Sovereign: India's Open Publishing Platform for Authoritative Opinions

**Tagline:** *Voices from every corner. Truths told locally.*

A decentralized, multilingual publishing platform built for India — where geography, language, and community shape what you read. Write once. Reach millions across Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Bengali, English, and more.

## What Makes Sovereign Different

| Feature | Why It Matters |
|---------|---|
| **Location-First** | Discover stories from your city, state, region. Local context, local voices, local impact. |
| **Multilingual Native** | Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Bengali, Punjabi, Assamese, English — auto-translated, SEO-indexed per language. |
| **Multi-Modal Content** | Articles, video essays, podcasts, photo essays, live discussions, annotations — all first-class. |
| **AI-Assisted Editor** | LangChain Open Canvas workspace for drafting, revising, and exporting creator articles. |
| **Community-Owned** | Readers follow writers, highlight excerpts, tip creators, build reading lists. No algorithmic ranker — just discovery by location, language, topic. |
| **SEO-Optimized** | Every article is hreflang-tagged, location-tagged, language-tagged. Ranks in Google, Bing, DuckDuckGo for local searches. |
| **DPDP-Compliant** | India's personal data protection law (DPDP Act 2023) embedded into architecture from day one. |
| **Open Source** | Self-hosted, fork-friendly, no vendor lock-in. Run your own instance or join the network. |

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+
- Docker and Docker Compose, optional but recommended

### Clone and install

```bash
git clone https://github.com/SovereignBharat/Sovereign.git
cd Sovereign
pnpm install
cp .env.example .env.local
```

### Run locally

```bash
docker-compose up -d
pnpm web:dev
# Open http://localhost:3000
```

### Useful commands

```bash
pnpm web:dev         # run the public frontend locally
pnpm web:build       # build the Next.js app
pnpm web:type-check  # type-check the frontend
pnpm editor:setup    # set up the optional Open Canvas editor
```

## Environment Setup

Create `.env.local` from `.env.example` and set the values needed by your local services.

```bash
DATABASE_URL=postgresql://user:pass@localhost:5432/sovereign
NEXTAUTH_SECRET=<generate-with-openssl-rand-base64-32>
NEXTAUTH_URL=http://localhost:3000
MEILISEARCH_HOST=http://localhost:7700
MEILISEARCH_KEY=masterKey
POSTGIS_ENABLED=true
```

## Public Frontend

Sovereign includes a Next.js public frontend in `apps/web` for reader discovery, multilingual platform positioning, creator onboarding, sign-up/sign-in flows, and DPDP-aware trust messaging.

See [`docs/public-frontend.md`](./docs/public-frontend.md) for frontend details.

## Editor Workspace

Sovereign includes an optional LangChain Open Canvas editor wrapper in `apps/editor`. Use it when creators need an AI-assisted canvas for drafting and revising articles before publishing them through Sovereign.

See [`docs/open-canvas-editor.md`](./docs/open-canvas-editor.md) and [`apps/editor/README.md`](./apps/editor/README.md) for editor setup, environment, and production notes.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js + React |
| Backend | Node.js + Express |
| Database | PostgreSQL + PostGIS |
| Search | Meilisearch |
| Auth | NextAuth.js + JWT |
| Payments | Razorpay |
| Infra | Docker, Kubernetes-ready |
| i18n | next-i18next + i18next |

## Roadmap

- Core article publishing
- Location-based discovery
- Multilingual publishing
- Creator onboarding
- SEO and sitemap generation
- Creator monetization with Razorpay tips
- Advanced search and filters
- Optional AI-assisted editor workflow

## Support

- **Docs:** [`/docs`](./docs)
- **Issues:** [GitHub Issues](https://github.com/SovereignBharat/Sovereign/issues)
- **Discussions:** [GitHub Discussions](https://github.com/SovereignBharat/Sovereign/discussions)
- **Email:** hello@sovereignbharat.in

---

**Made with ❤️ for India. Decentralized. Transparent. Owned by creators.**
