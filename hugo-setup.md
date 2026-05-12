# Hugo SEO-Friendly Setup

This file documents the setup of a Hugo-based user-facing site for the Sovereign project.

## 1. Install Hugo
Follow official instructions: https://gohugo.io/getting-started/installing/

## 2. Create a New Hugo Site
```bash
hugo new site sovereign-hugo
cd sovereign-hugo
```

## 3. Add Theme (Ananke)
```bash
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
```

Update `config.toml`:
```toml
baseURL = "https://yourdomain.com/"
languageCode = "en-us"
title = "Sovereign Opinions"
theme = "ananke"

[params]
description = "Publish and read authoritative opinions on Sovereign platform."
```

## 4. Create Content
```bash
hugo new posts/my-first-opinion.md
```
Front matter example:
```yaml
---
title: "My First Opinion"
date: 2026-05-12T12:00:00+00:00
draft: false
---
Content goes here.
```

## 5. Run Locally
```bash
hugo server -D
```
Preview: http://localhost:1313/

## 6. SEO Enhancements
- Semantic headings.
- Meta description in `config.toml`.
- Open Graph & Twitter Card in `layouts/partials/head.html`.
- Canonical URLs.

## 7. Deploy
- Build static site: `hugo`
- Deploy `public/` folder to Netlify, Vercel, or GitHub Pages.