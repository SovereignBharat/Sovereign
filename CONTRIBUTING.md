# Contributing to Sovereign

Thank you for your interest in contributing to Sovereign! This document outlines how to get started.

## Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read and follow our [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## Quick Links

- **Issues:** [Bug reports & feature requests](https://github.com/SovereignBharat/Sovereign/issues)
- **Discussions:** [Questions & ideas](https://github.com/SovereignBharat/Sovereign/discussions)
- **Docs:** [/docs](./docs)
- **Architecture:** [ARCHITECTURE.md](./ARCHITECTURE.md)

## Getting Started

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/Sovereign.git
cd Sovereign
git remote add upstream https://github.com/SovereignBharat/Sovereign.git
```

### 2. Setup Dev Environment

```bash
pnpm install
docker-compose up -d
npm run db:migrate
npm run db:seed
npm run dev
```

Open http://localhost:3000 to see the app.

### 3. Create a Feature Branch

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/bug-you-found
# or
git checkout -b docs/improve-docs
```

### 4. Make Changes

- Write code, tests, docs
- Follow code style (we use Prettier + ESLint)
- Keep commits atomic and descriptive

### 5. Test Locally

```bash
npm run lint          # Check style
npm run type-check    # Check types
npm run test          # Run unit & integration tests
npm run test:e2e      # Run end-to-end tests (optional)
```

### 6. Push & Open PR

```bash
git push origin feat/your-feature-name
```

Then open a PR on GitHub. The PR template will guide you.

## Code Style

### Formatting

We use **Prettier** for code formatting. Format before committing:

```bash
npm run format
```

Or set up auto-format in your editor:

**VS Code** (`.vscode/settings.json`):
```json
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```

### Linting

We use **ESLint** with strict rules:

```bash
npm run lint       # Check for issues
npm run lint:fix   # Auto-fix some issues
```

### TypeScript

All code must be fully typed. No `any` without justification (and a `// @ts-ignore` comment explaining why).

```typescript
// Good
function greet(name: string): string {
  return `Hello, ${name}`;
}

// Bad
function greet(name) {
  return `Hello, ${name}`;
}
```

## Testing

We expect tests for:
- New features
- Bug fixes (regression tests)
- API changes
- Critical paths (auth, data integrity)

### Write Tests

Tests go in `/tests` folder, organized by type:

```
tests/
  api/          # API endpoint tests
  integration/  # Multi-service tests
  e2e/          # End-to-end browser tests
  fixtures/     # Test data
```

**Unit Test Example** (`apps/api/src/services/ArticleService.test.ts`):
```typescript
import { describe, it, expect } from 'vitest';
import { ArticleService } from './ArticleService';

describe('ArticleService', () => {
  it('should create an article with valid data', async () => {
    const service = new ArticleService();
    const article = await service.create({
      title: 'Test',
      content: 'Test content',
      language: 'en',
      authorId: 'user-1'
    });
    expect(article).toHaveProperty('id');
    expect(article.title).toBe('Test');
  });
});
```

### Run Tests

```bash
npm run test                # Run all tests once
npm run test:watch         # Watch mode (re-run on change)
npm run test:coverage      # Coverage report
npm run test:e2e           # Playwright/Cypress tests
```

## Documentation

Documentation matters! Please update docs when:
- You add a new feature
- You change behavior
- You refactor something complex

Docs live in `/docs` and should be Markdown:

- **API.md** — REST endpoints
- **ARCHITECTURE.md** — Tech decisions
- **DEVELOPMENT.md** — Local setup
- **DATABASE_SCHEMA.md** — Data models
- **DPDP_COMPLIANCE.md** — Privacy & compliance
- **DEPLOYMENT.md** — Production setup
- **ROADMAP.md** — Feature timeline

### Writing Good Docs

- Use clear, active voice
- Provide examples
- Link to related docs
- Update table of contents if you add sections

## Commit Messages

We follow **Conventional Commits**:

```
feat: add location-based article discovery
^--^
fix: resolve authentication timeout issue
docs: update deployment guide
style: format code with Prettier
refactor: simplify article search logic
test: add tests for Razorpay integration
chore: update dependencies
```

**Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

- **type:** feat, fix, docs, style, refactor, test, chore
- **scope:** optional, e.g. `(api)`, `(auth)`, `(database)`
- **subject:** Present tense, lowercase, no period
- **body:** Explain *why*, not what (optional but recommended)
- **footer:** Issue references, breaking changes (optional)

**Example:**
```
feat(articles): add multilingual slug generation

Implement automatic slug generation for Hindi, Tamil, and other
Indian languages using transliteration. This ensures SEO-friendly
URLs for non-Latin scripts.

Fixes #123
Closes #456
```

## Pull Request Process

1. **Pre-commit checks** — Run locally first:
   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```

2. **Keep PR focused** — One feature or bug fix per PR. If you find an unrelated bug, open a separate issue.

3. **Provide context** — Use the PR template to explain:
   - What you changed and why
   - How to test it
   - Any breaking changes
   - Related issues/discussions

4. **Respond to feedback** — Maintainers may request changes. That's normal! We're building together.

5. **Merge** — Once approved, a maintainer will merge. You'll see your name in the commit history 🎉

## Areas We Need Help

- **Frontend:** UI improvements, accessibility, mobile optimization
- **Backend:** Performance, caching, async processing
- **Infrastructure:** Deployment scripts, monitoring, DevOps
- **Docs:** Better examples, translated docs (Hindi, Tamil, etc)
- **Translations:** New languages, community content
- **Testing:** Test coverage improvements, e2e test suite
- **Security:** Vulnerability reports, audit improvements

See [Issues](https://github.com/SovereignBharat/Sovereign/issues) and [Projects](https://github.com/SovereignBharat/Sovereign/projects) for what's being worked on.

## Reporting Bugs

Found a bug? [Open an issue](https://github.com/SovereignBharat/Sovereign/issues/new?template=bug.md) with:

1. **Description** — What you were trying to do
2. **Expected behavior** — What should happen
3. **Actual behavior** — What actually happened
4. **Steps to reproduce** — Minimal, repeatable steps
5. **Environment** — OS, Node version, browser, etc
6. **Logs/screenshots** — If applicable

**Security bugs:** Please email security@sovereignbharat.in instead of opening a public issue.

## Suggesting Features

Have an idea? [Start a discussion](https://github.com/SovereignBharat/Sovereign/discussions) or [open a feature request](https://github.com/SovereignBharat/Sovereign/issues/new?template=feature.md) with:

1. **Use case** — Why is this useful?
2. **Proposed behavior** — How would it work?
3. **Alternatives** — Other ways to solve this?
4. **Additional context** — Mockups, examples, research

## Need Help?

- **Questions:** [GitHub Discussions](https://github.com/SovereignBharat/Sovereign/discussions)
- **Email:** hello@sovereignbharat.in
- **Docs:** [/docs](./docs)

---

## Legal

By contributing to Sovereign, you agree that your contributions will be licensed under the MIT License. You also grant SovereignBharat a perpetual license to use your contributions in any way.

---

**Thank you for making Sovereign better!** 🙏
