import { featuredStories, languages, platformStats } from "../lib/content";

const navItems = ["Latest", "Languages", "About"];

const publishingPrinciples = [
  {
    title: "AI-native publishing workflow",
    body: "Use AI to assist drafting, editing, summaries, translations, metadata, moderation checks, and format adaptation while keeping human judgment at the center.",
  },
  {
    title: "Independent authoritative content",
    body: "Sovereign is built for serious public work: authoritative essays, reports, analysis, briefings, explainers, media, and civic knowledge — not random blogging.",
  },
  {
    title: "Multilingual by default",
    body: "Support Indian languages as first-class publishing surfaces for articles, reports, newsletters, podcasts, videos, explainers, and community updates.",
  },
  {
    title: "SEO-native distribution",
    body: "Structure every published item with clean titles, descriptions, schema, slugs, canonical URLs, language variants, and search-ready metadata.",
  },
  {
    title: "Geolocation-aware context",
    body: "Organize content by place, region, language, and public relevance so audiences can discover publishing rooted in where life happens.",
  },
  {
    title: "Analytics-native publishing",
    body: "Give creators and editors useful engagement signals such as reads, watch time, listens, shares, saves, geography, language, referrals, and retention.",
  },
  {
    title: "Contextual and social organic amplification",
    body: "Help important work travel through relevance, trusted communities, influencers, channel partners, institutions, and thought leaders — without ads or paid-feed clutter.",
  },
  {
    title: "Multimodal formats",
    body: "Publish long-form essays, short posts, reports, visual stories, video, audio, interviews, briefings, newsletters, and civic updates from one system.",
  },
];

const platformHubs = [
  {
    title: "Publishing+ hub",
    body: "Create, edit, translate, package, schedule, and distribute independent authoritative content across every serious public format.",
    metrics: ["Articles", "Reports", "Video", "Audio", "Newsletters", "Briefings"],
  },
  {
    title: "Engagement tracking hub",
    body: "Track how audiences interact with content across reads, watch time, listens, shares, saves, comments, follows, partner shares, and return visits.",
    metrics: ["Reads", "Watch time", "Listens", "Shares", "Saves", "Partner shares"],
  },
  {
    title: "Performance tracking hub",
    body: "Measure distribution and growth through SEO performance, referrals, geography, languages, retention, conversions, organic amplification, and content velocity.",
    metrics: ["SEO", "Referrals", "Geo", "Languages", "Retention", "Organic reach"],
  },
  {
    title: "Contextual amplification network",
    body: "Coordinate non-ad distribution through relevant communities, influencers, channel partners, subject experts, newsletters, institutions, and thought leaders who can carry authoritative work to the right audiences.",
    metrics: ["Context", "Influencers", "Partners", "Experts", "Communities", "Attribution"],
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
            Publish with Sovereign
          </a>
        </div>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            Independent authoritative content • AI-native • Organic amplification
          </p>
          <h1>Sovereign is a publishing platform for independent authoritative content.</h1>
          <p className="hero-lede">
            Built for India’s serious public voices — creators, editors, institutions,
            journalists, researchers, civic leaders, and domain experts publishing
            analysis, reports, explainers, media, and knowledge with multilingual reach,
            geolocation context, SEO-native structure, engagement tracking, and contextual social amplification.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#latest">
              Explore published work
            </a>
            <a className="button button-secondary" href="/sign-up">
              Start publishing
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Publishing preview">
          <div className="card-toolbar">
            <span />
            <span />
            <span />
          </div>
          <p className="card-kicker">Publishing intelligence</p>
          <h2>Publish, contextualize, amplify, measure, and improve authoritative work.</h2>
          <p>
            Sovereign combines AI-native publishing, multilingual distribution,
            SEO structure, geolocation context, social organic amplification,
            engagement analytics, and performance tracking without ads, random posts, or a noisy feed.
          </p>
          <div className="metadata-grid">
            <span>Authoritative</span>
            <span>Independent</span>
            <span>Organic reach</span>
            <span>Contextual</span>
            <span>Geo-aware</span>
            <span>Multimodal</span>
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
          <p className="eyebrow">Latest publishing</p>
          <h2>One place for serious essays, reports, media, explainers, and local knowledge.</h2>
          <p>
            Sovereign keeps the audience experience focused while giving publishers
            the infrastructure to publish authoritative work with professional metadata,
            discovery, engagement tracking, contextual amplification, and performance intelligence.
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

      <section className="section-shell language-section" aria-label="Platform hubs">
        <div className="section-heading">
          <p className="eyebrow">Platform hubs</p>
          <h2>Publishing plus the intelligence layer authoritative creators need.</h2>
          <p>
            Sovereign is not only where content goes live. It is where teams
            understand what was published, who engaged, where it travelled, which
            communities amplified it, and how each format performed.
          </p>
        </div>
        <div className="story-grid">
          {platformHubs.map((hub) => (
            <article className="story-card" key={hub.title}>
              <h3>{hub.title}</h3>
              <p>{hub.body}</p>
              <footer>
                {hub.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell language-section" aria-label="Publishing principles">
        <div className="section-heading">
          <p className="eyebrow">Platform principles</p>
          <h2>Built for modern publishing from creation to distribution to insight.</h2>
          <p>
            The product stays focused on independent authoritative publishing while making
            the core layer AI-native, multilingual, search-friendly, location-aware,
            analytics-native, organically amplified, and format-flexible.
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
            The platform is built to support serious publishing across Indian
            languages while preserving regional context, format quality, and
            editorial standards.
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
        <h2>A platform for independent authoritative content, not random blogging.</h2>
        <p>
          Sovereign is designed as a professional publishing space for ideas,
          reporting, commentary, media, briefings, research, and public-interest
          knowledge. The goal is to keep the audience experience focused while
          making every published item easier to create, translate, optimize,
          distribute through trusted communities, measure, and improve through engagement and performance data.
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
