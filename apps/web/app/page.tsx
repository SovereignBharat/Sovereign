import { featuredStories, languages, platformStats } from "../lib/content";

const navItems = ["Latest", "Languages", "About"];

const publishingPrinciples = [
  {
    title: "AI-native editorial workflow",
    body: "Use AI to assist drafting, summaries, translations, metadata, and editorial checks while keeping human judgment at the center.",
  },
  {
    title: "Multilingual by default",
    body: "Support Indian languages as first-class publishing surfaces, not afterthoughts attached to an English-first site.",
  },
  {
    title: "SEO-native distribution",
    body: "Structure every piece with clean titles, descriptions, schema, slugs, canonical URLs, and language-aware discovery.",
  },
  {
    title: "Geolocation-aware context",
    body: "Organize stories by place, region, language, and public relevance so readers can discover writing rooted in where life happens.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sovereign home">
          <span className="brand-mark">S</span>
          <span>Sovereign</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-cta" href="/sign-up">
            Submit a piece
          </a>
        </div>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            AI-native • Multilingual • SEO-native • Location-aware
          </p>
          <h1>A professional publishing home for serious Indian writing.</h1>
          <p className="hero-lede">
            Sovereign publishes essays, analysis, local stories, and public-interest
            opinion through an AI-assisted editorial workflow built for Indian
            languages, search discovery, and geographic context.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#latest">
              Read latest pieces
            </a>
            <a className="button button-secondary" href="/sign-up">
              Submit writing
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Editorial preview">
          <div className="card-toolbar">
            <span />
            <span />
            <span />
          </div>
          <p className="card-kicker">Publishing intelligence</p>
          <h2>Every article carries language, SEO, and location context.</h2>
          <p>
            Writers can prepare strong drafts, multilingual versions, metadata,
            regional tags, summaries, and search-ready article pages without
            turning the publication into a noisy social feed.
          </p>
          <div className="metadata-grid">
            <span>AI assisted</span>
            <span>11+ languages</span>
            <span>SEO ready</span>
            <span>Geo-aware</span>
          </div>
        </aside>
      </section>

      <section
        className="stats-bar section-shell"
        aria-label="Publication statistics"
      >
        {platformStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="latest" className="section-shell split-section">
        <div>
          <p className="eyebrow">Latest writing</p>
          <h2>Read essays, explainers, and opinion with editorial clarity.</h2>
          <p>
            Sovereign keeps the site simple: a strong front page, a focused
            stream of published pieces, and clear paths for readers and writers.
          </p>
        </div>
        <div className="story-grid">
          {featuredStories.map((story) => (
            <article className="story-card" key={story.title}>
              <div className="story-meta">
                <span>{story.category}</span>
                <span>{story.readTime}</span>
              </div>
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
              <footer>
                <span>{story.location}</span>
                <span>{story.language}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell language-section" aria-label="Publishing principles">
        <div className="section-heading">
          <p className="eyebrow">Platform principles</p>
          <h2>Built for modern publishing from the first draft to discovery.</h2>
          <p>
            The product stays focused on publishing while making the core layer
            intelligent, multilingual, search-friendly, and grounded in place.
          </p>
        </div>
        <div className="story-grid">
          {publishingPrinciples.map((principle) => (
            <article className="story-card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="languages" className="section-shell language-section">
        <div className="section-heading">
          <p className="eyebrow">Languages</p>
          <h2>Publishing for India's multilingual public sphere.</h2>
          <p>
            The publication is built to support serious writing across Indian
            languages while preserving regional context and editorial quality.
          </p>
        </div>
        <div className="language-grid">
          {languages.map((language) => (
            <article key={language.label}>
              <strong>{language.nativeName}</strong>
              <span>{language.label}</span>
              <small>{language.region}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell privacy-band">
        <p className="eyebrow">About Sovereign</p>
        <h2>A publication, not another noisy social feed.</h2>
        <p>
          Sovereign is designed as a professional publishing space for ideas,
          reporting, commentary, and public-interest writing. The goal is to
          keep the reader experience focused while making every article easier
          to write, translate, optimize, and discover by location.
        </p>
      </section>

      <footer className="site-footer section-shell">
        <span>© 2026 SovereignBharat contributors</span>
        <a href="https://github.com/SovereignBharat/Sovereign">
          Open source on GitHub
        </a>
      </footer>
    </main>
  );
}
