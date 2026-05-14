import type { Metadata } from "next";

const siteUrl = "https://sovereignbharat.in";

const article = {
  slug: "what-local-publishing-can-do-for-public-life",
  title: "What Local Publishing Can Do for Public Life",
  subtitle:
    "A sample Sovereign article page for essays, analysis, and thoughtful public writing.",
  author: "Sovereign Editorial",
  date: "2026-05-14",
  displayDate: "May 14, 2026",
  readTime: "6 min read",
  location: "India",
  language: "en-IN",
  languageLabel: "English",
  category: "Editorial",
  format: "Article",
};

export const metadata: Metadata = {
  title: article.title,
  description: article.subtitle,
  alternates: {
    canonical: `/articles/${article.slug}`,
  },
  openGraph: {
    title: article.title,
    description: article.subtitle,
    type: "article",
    authors: [article.author],
    publishedTime: article.date,
    locale: "en_IN",
    url: `/articles/${article.slug}`,
  },
};

export default function ArticlePage() {
  const articleUrl = `${siteUrl}/articles/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.subtitle,
    articleSection: article.category,
    inLanguage: article.language,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    isAccessibleForFree: true,
    contentLocation: {
      "@type": "Place",
      name: article.location,
    },
    author: {
      "@type": "Organization",
      name: article.author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Sovereign",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.png`,
      },
    },
    keywords: [
      "publishing",
      "public life",
      "India",
      "local context",
      "multilingual publishing",
      "civic writing",
    ],
    potentialAction: {
      "@type": "ReadAction",
      target: articleUrl,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="site-header">
        <a className="brand" href="/" aria-label="Sovereign home">
          <span className="brand-mark">S</span>
          <span>Sovereign</span>
        </a>
        <nav className="desktop-nav" aria-label="Article navigation">
          <a href="/#latest">Latest</a>
          <a href="/#languages">Languages</a>
          <a href="/#about">About</a>
        </nav>
      </header>

      <article className="section-shell" style={{ maxWidth: "820px", paddingTop: "4rem" }}>
        <p className="eyebrow">{article.category} • {article.format}</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 0.95, margin: "0 0 1.25rem" }}>
          {article.title}
        </h1>
        <p className="hero-lede" style={{ marginBottom: "1.5rem" }}>
          {article.subtitle}
        </p>

        <div className="story-meta" style={{ marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>{article.author}</span>
          <span>{article.displayDate}</span>
          <span>{article.readTime}</span>
          <span>{article.location}</span>
          <span>{article.languageLabel}</span>
        </div>

        <div style={{ fontSize: "1.12rem", lineHeight: 1.85 }}>
          <p>
            Sovereign is designed for publishing that deserves attention:
            articles, essays, analysis, explainers, interviews, reports, audio,
            video, and grounded public-interest updates. A publishing platform
            should make reading and discovery feel calm, credible, and intentional.
          </p>
          <p>
            The article experience keeps the focus on the published work itself.
            Metadata such as author, date, reading time, content format, location,
            language, and category gives readers and search systems useful context
            without overwhelming the page.
          </p>
          <p>
            As the platform grows, this template can connect to a database or CMS
            so every published item has its own URL, SEO metadata, structured data,
            author details, language variants, location context, and engagement analytics.
          </p>
          <h2>Publishing principles</h2>
          <p>
            A professional publishing platform needs a clear promise: serious formats,
            careful framing, AI-assisted workflows, multilingual support, SEO-native
            structure, geolocation-aware discovery, and analytics that help creators
            understand what audiences actually value.
          </p>
          <h2>Next step</h2>
          <p>
            The next layer is connecting this article template to real content types,
            including article, report, video, podcast, newsletter, briefing, and visual story.
          </p>
        </div>
      </article>
    </main>
  );
}
