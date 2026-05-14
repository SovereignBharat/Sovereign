import type { Metadata } from "next";

const article = {
  title: "What Local Publishing Can Do for Public Life",
  subtitle:
    "A sample Sovereign article page for essays, analysis, and thoughtful public writing.",
  author: "Sovereign Editorial",
  date: "May 14, 2026",
  readTime: "6 min read",
  location: "India",
  language: "English",
  category: "Editorial",
};

export const metadata: Metadata = {
  title: article.title,
  description: article.subtitle,
  openGraph: {
    title: article.title,
    description: article.subtitle,
    type: "article",
    authors: [article.author],
    locale: "en_IN",
  },
};

export default function ArticlePage() {
  return (
    <main>
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
        <p className="eyebrow">{article.category}</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 0.95, margin: "0 0 1.25rem" }}>
          {article.title}
        </h1>
        <p className="hero-lede" style={{ marginBottom: "1.5rem" }}>
          {article.subtitle}
        </p>

        <div className="story-meta" style={{ marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>{article.author}</span>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
          <span>{article.location}</span>
          <span>{article.language}</span>
        </div>

        <div style={{ fontSize: "1.12rem", lineHeight: 1.85 }}>
          <p>
            Sovereign is designed for writing that deserves attention: essays,
            analysis, explainers, interviews, and grounded opinion. A publishing
            site should make reading feel calm, credible, and intentional.
          </p>
          <p>
            The article experience keeps the focus on the piece itself. Metadata
            such as author, date, reading time, location, language, and category
            gives readers context without overwhelming the page.
          </p>
          <p>
            As the publication grows, this template can connect to a database or
            CMS so every story has its own URL, SEO metadata, author details,
            language version, and editorial classification.
          </p>
          <h2>Editorial principles</h2>
          <p>
            A professional publication needs a clear promise: serious writing,
            careful framing, and a reader experience that avoids the noise of a
            social feed. Sovereign should feel like a place where public ideas
            are edited, preserved, and easy to discover.
          </p>
          <h2>Next step</h2>
          <p>
            The next layer is connecting this article template to real posts,
            then adding author pages and structured data for each published
            piece.
          </p>
        </div>
      </article>
    </main>
  );
}
