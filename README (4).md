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

## Architecture at a Glance

```
┌─────────────────────────────────────────────────────────────┐
│                   Frontend (Next.js SSR)                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Multilingual UI | Location Picker | Reader Dashboard │   │
│  │ Article Editor  | Social Timeline  | Tip System      │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
          ┌─────────────────┼─────────────────┐
          ↓                 ↓                 ↓
    ┌──────────┐      ┌──────────┐      ┌──────────┐
    │ REST API │      │GraphQL   │      │ WebSub   │
    │(Node.js) │      │Endpoint  │      │(PubSub)  │
    └──────────┘      └──────────┘      └──────────┘
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ↓
          ┌─────────────────────────────────┐
          │  PostgreSQL (Geospatial)       │
          │  ├─ Articles                    │
          │  ├─ Users (anonymized DPDP)    │
          │  ├─ Comments & Highlights      │
          │  ├─ Location Index (PostGIS)   │
          │  └─ Social Graph               │
          └─────────────────────────────────┘
                            │
          ┌─────────────────┼─────────────────┐
          ↓                 ↓                 ↓
    ┌──────────┐      ┌──────────┐      ┌──────────┐
    │  Meilisearch │ │ Algolia  │      │ Typesense │
    │(Full-Text)   │ │(Optional)│      │(Optional) │
    └──────────┘      └──────────┘      └──────────┘
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ↓
          ┌─────────────────────────────────┐
          │  CDN (Cloudflare / Bunny)      │
          │  + Signed URLs for Media       │
          └─────────────────────────────────┘
```

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Docker & Docker Compose (optional but recommended)

### Clone & Install

```bash
git clone https://github.com/SovereignBharat/Sovereign.git
cd Sovereign
npm install
cp .env.example .env.local
```

### Run Locally (Docker)

```bash
docker-compose up -d
npm run dev
# Open http://localhost:3000
```

### Environment Setup

```bash
# .env.local
DATABASE_URL=postgresql://user:pass@localhost:5432/sovereign
NEXTAUTH_SECRET=<generate-with-openssl-rand-base64-32>
NEXTAUTH_URL=http://localhost:3000

# Meilisearch (optional)
MEILISEARCH_HOST=http://localhost:7700
MEILISEARCH_KEY=masterKey

# Media CDN
CDN_URL=https://media.sovereign.local
CLOUDFLARE_ACCOUNT_ID=<your-account>
CLOUDFLARE_API_TOKEN=<your-token>

# Geospatial (PostGIS)
POSTGIS_ENABLED=true
```

### First Article

```bash
npm run seed
# Creates demo articles in Hindi, Tamil, English with location tags
```

---

## Key Features

### 1. Location-Based Discovery
- **PostGIS integration** — Find articles within 50km, 500km, or across your state
- **Pincode-aware** — Articles auto-tagged with pincode (no PII stored)
- **State/District/City tiers** — Discover hyper-local stories

### 2. Multilingual Publishing
- **Native Support:** Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Bengali, Punjabi, Assamese, English
- **Auto-Detection:** Browser language → fallback to English
- **hreflang Tags:** SEO-friendly, language-specific indexing
- **Transliteration:** English → Devanagari / Latin script conversion on-the-fly

### 3. Multi-Modal Content
| Content Type | Support | Status |
|---|---|---|
| Article (Markdown + Rich Text) | ✅ | GA |
| Audio/Podcast Embed | ✅ | GA |
| Video (YouTube, Vimeo, self-hosted) | ✅ | GA |
| Photo Essays (Lightbox) | ✅ | Beta |
| Live Discussions (WebRTC + Agora) | 🚧 | Early Access |
| Annotations & Marginalia | 🚧 | Roadmap |

### 4. Social & Community
- **Follow Writers** — Get notified of new articles
- **Highlight & Annotate** — Save excerpts, private notes
- **Reading List** — Curate your own collections
- **Tips & Support** — Razorpay/UPI integration for direct creator payments
- **Comments & Discussions** — Threaded, moderated, with context

### 5. SEO & Discoverability
- **Schema.org Compliance** — Article, NewsArticle, BlogPosting
- **Sitemap Generation** — Per-language, per-location
- **Open Graph Tags** — Rich social cards
- **Canonical Tags** — Language variants handled correctly
- **Structured Data** — JSON-LD for articles, authors, publish dates

### 6. DPDP-Compliant Privacy
- **Zero-Knowledge Reading** — No tracking without consent
- **Tokenized Sessions** — No long-lived user IDs in URLs
- **Data Minimization** — Only collect: email, name, location (state-level max)
- **Right to Erasure** — One-click account deletion
- **Sub-processor Transparency** — All integrations (CDN, payment, email) documented

---

## Editor Workspace

Sovereign includes an optional LangChain Open Canvas editor wrapper in `apps/editor`. Use it when creators need an AI-assisted canvas for drafting and revising articles before publishing them through Sovereign.

```bash
pnpm editor:setup       # clone and install LangChain Open Canvas locally
pnpm editor:build       # build the Open Canvas workspace
pnpm editor:dev:agents  # run LangGraph agents
pnpm editor:dev:web     # run the editor UI
```

See [`docs/open-canvas-editor.md`](./docs/open-canvas-editor.md) and [`apps/editor/README.md`](./apps/editor/README.md) for setup, environment, and production notes.

## Project Structure

```
Sovereign/
├── README.md                          # This file
├── ARCHITECTURE.md                    # Deep dive: tech stack, design decisions
├── CONTRIBUTING.md                    # Contributor guidelines
├── CODE_OF_CONDUCT.md                 # Community standards
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                     # Test, lint, build
│   │   ├── deploy.yml                 # CD to staging/production
│   │   └── security.yml               # SAST, dependency scan, DPDP audit
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug.md
│   │   ├── feature.md
│   │   └── privacy-audit.md
│   └── pull_request_template.md
│
├── apps/
│   ├── web/                           # Next.js frontend + SSR
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   │   ├── [[...slug]].tsx    # Dynamic article routing
│   │   │   │   ├── api/               # API routes (auth, comments, etc)
│   │   │   │   ├── [lang]/            # Language-specific routes
│   │   │   │   └── admin/             # Creator dashboard
│   │   │   ├── components/
│   │   │   │   ├── ArticleEditor/     # Rich text + media uploader
│   │   │   │   ├── LocationPicker/    # Geospatial UI
│   │   │   │   ├── LanguageSwitch/    # i18n toggle
│   │   │   │   ├── SocialFeed/        # Timeline view
│   │   │   │   └── Reader/            # Article reader (dark mode, font size, etc)
│   │   │   ├── lib/
│   │   │   │   ├── api.ts             # API client
│   │   │   │   ├── i18n.ts            # Multilingual setup
│   │   │   │   ├── geo.ts             # Geospatial helpers
│   │   │   │   └── dpdp.ts            # Privacy utilities
│   │   │   ├── styles/
│   │   │   │   └── globals.css        # Tailwind + custom themes
│   │   │   └── public/
│   │   │       └── locales/           # i18n JSON files
│   │   ├── next.config.js
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── api/                           # Node.js Express backend
│       ├── src/
│       │   ├── routes/
│       │   │   ├── articles.ts        # CRUD + search
│       │   │   ├── users.ts           # Auth, profile
│       │   │   ├── comments.ts        # Comments + moderation
│       │   │   ├── location.ts        # Geospatial queries
│       │   │   ├── social.ts          # Follow, tips, lists
│       │   │   └── admin.ts           # Moderation, analytics
│       │   ├── middleware/
│       │   │   ├── auth.ts            # JWT + NextAuth session
│       │   │   ├── dpdp.ts            # Consent + audit logs
│       │   │   └── rateLimit.ts       # DDoS protection
│       │   ├── services/
│       │   │   ├── ArticleService.ts
│       │   │   ├── SearchService.ts   # Meilisearch integration
│       │   │   ├── GeoService.ts      # PostGIS queries
│       │   │   ├── MailService.ts     # SendGrid/AWS SES
│       │   │   ├── PaymentService.ts  # Razorpay/UPI
│       │   │   └── CDNService.ts      # Media upload/CDN
│       │   ├── db/
│       │   │   ├── schema.prisma      # Database schema
│       │   │   ├── migrations/        # Version control for schema
│       │   │   └── seeders/           # Demo data
│       │   ├── utils/
│       │   │   ├── logger.ts
│       │   │   ├── errorHandler.ts
│       │   │   └── validators.ts
│       │   └── server.ts              # Express setup
│       ├── Dockerfile
│       ├── .dockerignore
│       └── package.json
│
├── packages/
│   ├── shared/                        # Shared TypeScript types, utils
│   │   ├── src/
│   │   │   ├── types/
│   │   │   │   ├── article.ts
│   │   │   │   ├── user.ts
│   │   │   │   ├── location.ts
│   │   │   │   └── index.ts
│   │   │   ├── utils/
│   │   │   │   ├── slugs.ts           # URL-safe slugs
│   │   │   │   ├── markdown.ts        # Markdown → HTML
│   │   │   │   ├── i18n.ts            # Shared i18n logic
│   │   │   │   └── validators.ts
│   │   │   └── index.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── ui/                            # Reusable UI components (Storybook)
│       ├── src/
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   ├── Avatar.tsx
│       │   ├── LocationPicker.tsx
│       │   ├── LanguageSwitch.tsx
│       │   ├── RichTextEditor.tsx
│       │   ├── MediaUploader.tsx
│       │   └── index.ts
│       ├── .storybook/                # Storybook config
│       ├── tsconfig.json
│       └── package.json
│
├── infra/
│   ├── docker-compose.yml             # Local dev stack
│   ├── docker-compose.prod.yml        # Production stack
│   ├── k8s/
│   │   ├── deployment.yaml            # Kubernetes manifests
│   │   ├── service.yaml
│   │   ├── ingress.yaml
│   │   └── configmap.yaml
│   ├── terraform/
│   │   ├── main.tf                    # AWS/GCP infrastructure
│   │   ├── database.tf
│   │   ├── cdn.tf
│   │   ├── networking.tf
│   │   └── variables.tf
│   ├── nginx/                         # Reverse proxy config
│   │   ├── sovereign.conf
│   │   └── ssl/                       # TLS certs
│   └── monitoring/
│       ├── prometheus.yml
│       ├── grafana/
│       │   ├── dashboards/
│       │   └── provisioning/
│       └── alerting-rules.yml
│
├── docs/
│   ├── API.md                         # OpenAPI / REST endpoints
│   ├── ARCHITECTURE.md                # Technical deep dive
│   ├── DPDP_COMPLIANCE.md             # Privacy audit trail
│   ├── DEPLOYMENT.md                  # Step-by-step deploy guides
│   ├── DEVELOPMENT.md                 # Local dev setup
│   ├── DATABASE_SCHEMA.md             # Prisma + PostGIS
│   ├── SEO.md                         # hreflang, sitemap, structured data
│   ├── MULTILINGUAL.md                # Language support, transliteration
│   ├── MONETIZATION.md                # Tip system, future revenue models
│   └── ROADMAP.md                     # Feature timeline
│
├── tests/
│   ├── api/
│   │   ├── articles.test.ts
│   │   ├── auth.test.ts
│   │   ├── location.test.ts
│   │   └── social.test.ts
│   ├── integration/
│   │   ├── end-to-end.test.ts
│   │   └── dpdp-audit.test.ts
│   ├── e2e/                           # Playwright/Cypress
│   │   ├── create-article.spec.ts
│   │   ├── location-discovery.spec.ts
│   │   └── multilingual.spec.ts
│   └── fixtures/
│       └── sample-articles.json
│
├── .github/
│   └── ... (see above)
│
├── .env.example                       # Template
├── .gitignore
├── docker-compose.yml                 # Quick-start
├── package.json                       # Monorepo root
├── pnpm-workspace.yaml                # pnpm + monorepo
├── turbo.json                         # Build system config
├── tsconfig.json                      # Root TypeScript config
└── LICENSE                            # MIT

```

---

## Database Schema (Core)

```sql
-- Articles (multilingual)
CREATE TABLE articles (
  id UUID PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  author_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  excerpt TEXT,
  content JSONB NOT NULL,          -- Rich text + media refs
  language VARCHAR(5) NOT NULL,     -- 'hi', 'ta', 'te', 'en', etc
  status VARCHAR(20) DEFAULT 'draft', -- 'draft', 'published', 'archived'
  
  -- SEO & Metadata
  metadata JSONB,                   -- tags, canonical_url, og_image, etc
  seo_score INT,
  
  -- Location (PostGIS)
  location_point GEOGRAPHY(POINT),  -- WHERE user published from
  location_pincode VARCHAR(6),      -- State-level anonymization
  location_state VARCHAR(50),       -- For discovery
  location_latitude FLOAT,
  location_longitude FLOAT,
  location_radius_km INT DEFAULT 50,
  
  -- Timestamps & Stats
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  view_count INT DEFAULT 0,
  comment_count INT DEFAULT 0,
  like_count INT DEFAULT 0,
  
  -- Soft delete (DPDP)
  deleted_at TIMESTAMP,
  
  FULLTEXT INDEX (title, excerpt, content)
);

-- Create spatial index for location queries
CREATE INDEX idx_articles_location ON articles USING GIST(location_point);
CREATE INDEX idx_articles_state ON articles(location_state);
CREATE INDEX idx_articles_published ON articles(published_at DESC);

-- Users (minimal DPDP compliance)
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  email_verified BOOLEAN DEFAULT false,
  
  -- Profile (optional, anonymizable)
  name VARCHAR(255),
  bio TEXT,
  avatar_url TEXT,
  
  -- Auth
  auth_provider VARCHAR(50),        -- 'credentials', 'google', 'github'
  auth_provider_id VARCHAR(255),
  password_hash VARCHAR(255),       -- null for OAuth-only users
  
  -- Location (state-level only)
  state VARCHAR(50),
  language_preference VARCHAR(5) DEFAULT 'en',
  
  -- Privacy & DPDP
  consent_level VARCHAR(20),        -- 'minimal', 'functional', 'analytics'
  consent_given_at TIMESTAMP,
  data_deletion_requested_at TIMESTAMP,
  gdpr_export_requested_at TIMESTAMP,
  
  -- Account status
  is_creator BOOLEAN DEFAULT false,
  is_moderator BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP              -- Soft delete for GDPR
);

-- Comments & Discussions
CREATE TABLE comments (
  id UUID PRIMARY KEY,
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  parent_comment_id UUID REFERENCES comments(id), -- Threaded
  
  content TEXT NOT NULL,
  edited_at TIMESTAMP,
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'approved', 'spam'
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP
);

-- Highlights & Annotations (reader engagement)
CREATE TABLE highlights (
  id UUID PRIMARY KEY,
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  
  text_snippet TEXT NOT NULL,
  quote_position INT,               -- Character offset in article
  
  -- Optional private note
  note TEXT,
  is_private BOOLEAN DEFAULT true,
  
  created_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP
);

-- Social Graph (follows)
CREATE TABLE follows (
  id UUID PRIMARY KEY,
  follower_id UUID REFERENCES users(id) ON DELETE CASCADE,
  following_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(follower_id, following_id)
);

-- Reading Lists (curated collections)
CREATE TABLE reading_lists (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  is_public BOOLEAN DEFAULT false,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE reading_list_items (
  id UUID PRIMARY KEY,
  list_id UUID REFERENCES reading_lists(id) ON DELETE CASCADE,
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
  position INT,
  created_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(list_id, article_id)
);

-- Tips & Payments (Razorpay integration)
CREATE TABLE tips (
  id UUID PRIMARY KEY,
  article_id UUID REFERENCES articles(id),
  from_user_id UUID REFERENCES users(id),
  to_user_id UUID REFERENCES users(id),
  
  amount INT,                       -- In paise (1 INR = 100 paise)
  currency VARCHAR(3) DEFAULT 'INR',
  
  razorpay_payment_id VARCHAR(255),
  razorpay_order_id VARCHAR(255),
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'completed', 'failed'
  
  message TEXT,
  is_anonymous BOOLEAN DEFAULT false,
  
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);

-- Media (articles can reference)
CREATE TABLE media (
  id UUID PRIMARY KEY,
  upload_user_id UUID REFERENCES users(id),
  
  filename VARCHAR(255) NOT NULL,
  mime_type VARCHAR(100),
  file_size INT,
  
  -- CDN info
  cdn_url TEXT,
  cdn_provider VARCHAR(50),        -- 'cloudflare', 'bunny', 'aws'
  cdn_key VARCHAR(255),
  
  -- Image metadata
  width INT,
  height INT,
  alt_text VARCHAR(500),
  
  -- Virus scan
  scan_status VARCHAR(20),          -- 'pending', 'clean', 'infected'
  
  created_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP
);

-- Audit Log (DPDP compliance)
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  action VARCHAR(100),             -- 'article_created', 'profile_updated', 'data_exported', etc
  resource_type VARCHAR(50),        -- 'article', 'user', 'comment', etc
  resource_id UUID,
  
  changes JSONB,                    -- What changed (for updates)
  ip_address INET,
  user_agent TEXT,
  
  created_at TIMESTAMP DEFAULT NOW()
);

-- Ensure audit logs are immutable
CREATE OR REPLACE FUNCTION enforce_audit_log_immutability()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'UPDATE' OR TG_OP = 'DELETE' THEN
    RAISE EXCEPTION 'Audit logs are immutable';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_log_immutability BEFORE UPDATE OR DELETE ON audit_logs
FOR EACH ROW EXECUTE FUNCTION enforce_audit_log_immutability();
```

---

## Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | Next.js 14 + React 18 | SSR, SEO, fast cold starts |
| **Backend** | Node.js + Express | Event-driven, async-friendly |
| **Database** | PostgreSQL + PostGIS | Geospatial queries, JSONB flexibility |
| **Search** | Meilisearch (primary), Algolia (backup) | Fast full-text, multilingual support |
| **Auth** | NextAuth.js + JWT | OAuth2 + credentials, DPDP-compliant sessions |
| **Media** | Cloudflare Images / Bunny CDN | Global CDN, image optimization, DLP |
| **Payment** | Razorpay | UPI, cards, wallets for Indian users |
| **Email** | SendGrid / AWS SES | Transactional + newsletters |
| **Monitoring** | Prometheus + Grafana + Sentry | Observability, error tracking |
| **Infra** | Docker + Kubernetes (or Render/Railway) | Container-native, cloud-agnostic |
| **i18n** | next-i18next + i18next | 11 Indian languages + English |

---

## Getting Started as a Contributor

### Setup

```bash
# Install dependencies
pnpm install

# Setup database
npm run db:migrate
npm run db:seed

# Run dev server
npm run dev

# Run tests
npm run test

# Lint & format
npm run lint
npm run format
```

### PR Workflow

1. Fork this repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Write tests, code, docs
4. Push and open a PR (template auto-fills)
5. CI runs: lint, test, build, security scan
6. Code review + merge

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## Deployment

### Quick Deploy (Render / Railway / Vercel)

```bash
# 1. Add Sovereign as a git remote
git remote add sovereign https://github.com/SovereignBharat/Sovereign.git

# 2. Connect your Render/Railway account
vercel link
# or
render deploy

# 3. Set environment variables (see .env.example)

# 4. Deploy
git push vercel main
```

### Self-Hosted (Coolify / Docker Swarm)

See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) for:
- AWS EC2 + RDS setup
- Kubernetes manifests
- SSL/TLS with Let's Encrypt
- Scaling strategies

---

## Roadmap (Q2 2026)

### Q2 (Now)
- ✅ Core article publishing (15 languages)
- ✅ Location-based discovery
- ✅ Basic social (follow, comments)
- 🚧 SEO & sitemap generation

### Q3
- 📋 Video essay support (Vimeo embed)
- 📋 Live discussions (WebRTC)
- 📋 Creator monetization (Razorpay tips)
- 📋 Advanced search (filters, facets)

### Q4
- 📋 Recommendations engine (non-algorithmic, topic-based)
- 📋 Annotation layer (margin notes)
- 📋 Newsletter integration (Substack-like)
- 📋 Creator analytics dashboard

### 2027
- 📋 Federated reading (ActivityPub for interop)
- 📋 Paid memberships (subscription tiers)
- 📋 Marketplace (sell exclusive access)

---

## Governance & Community

- **License:** MIT (fork-friendly, commercial use allowed)
- **Code of Conduct:** [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- **Contributor Agreement:** See [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Security:** Report vulnerabilities to security@sovereignbharat.in (not public issues)

---

## FAQ

**Q: Can I run my own instance (fork this)?**  
A: Yes. MIT license. Fork, customize, deploy. We ask that you keep attribution and upstream improvements in mind.

**Q: Is this a Medium competitor?**  
A: No. Medium is US-centric, algorithmic. Sovereign is India-first, location-first, community-driven. Different problem.

**Q: What about monetization for writers?**  
A: Phase 1: Tips (Razorpay). Phase 2: Subscriptions. Phase 3: Marketplace (exclusive access). Not forced.

**Q: Is this GDPR-compliant?**  
A: Yes, also DPDP (India). We minimize data, offer deletions, transparency. See [docs/DPDP_COMPLIANCE.md](./docs/DPDP_COMPLIANCE.md).

**Q: How does search work?**  
A: Full-text (Meilisearch) + filters (language, location, date, author). No algorithmic ranking. Users curate via following & lists.

**Q: Can I translate articles into other languages?**  
A: Not auto yet (future feature). Writers can publish in multiple languages upfront.

---

## Support

- **Docs:** [/docs](./docs)
- **Issues:** [GitHub Issues](https://github.com/SovereignBharat/Sovereign/issues)
- **Discussions:** [GitHub Discussions](https://github.com/SovereignBharat/Sovereign/discussions)
- **Email:** hello@sovereignbharat.in

---

**Made with ❤️ for India. Decentralized. Transparent. Owned by creators.**

*Version 0.1.0 — Alpha. Breaking changes may occur. See [CHANGELOG.md](./CHANGELOG.md).*
