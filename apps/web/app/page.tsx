import { featuredStories, languages, platformStats } from "../lib/content";

const navItems = ["Latest", "Languages", "About"];

const publishingPrinciples = [
  {
    title: "AI-native publishing workflow",
    body: "Use AI to assist drafting, editing, summaries, translations, metadata, moderation checks, and format adaptation while keeping human judgment at the center.",
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
    title: "Boostable distribution",
    body: "Let creators boost a published item to selected audiences, locations, topics, and languages while separating paid reach from organic performance.",
  },
  {
    title: "Multimodal formats",
    body: "Publish more than blogs: long-form essays, short posts, reports, visual stories, video, audio, interviews, briefings, and newsletters from one system.",
  },
];

const platformHubs = [
  {
    title: "Publishing+ hub",
    body: "Create, edit, translate, package, schedule, boost, and distribute every public format from one professional publishing layer.",
    metrics: ["Articles", "Reports", "Video", "Audio", "Newsletters", "Boosts"],
  },
  {
    title: "Engagement tracking hub",
    body: "Track how audiences interact with content across reads, watch time, listens, shares, saves, comments, follows, boost clicks, and return visits.",
    metrics: ["Reads", "Watch time", "Listens", "Shares", "Saves", "Boost CTR"],
  },
  {
    title: "Performance tracking hub",
    body: "Measure distribution and growth through SEO performance, referrals, geography, languages, retention, conversions, boosted reach, and content velocity.",
    metrics: ["SEO", "Referrals", "Geo", "Languages", "Retention", "Boost ROI"],
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
            Publishing+ • Engagement tracking • Performance intelligence • Boosts
          </p>
          <h1>A professional publishing platform with intelligence built in.</h1>
          <p className="hero-lede">
            Sovereign helps creators, editors, institutions, journalists, researchers,
            and civic voices publish any serious format while tracking engagement,
            performance, SEO, languages, geography, audience growth, and boosted distribution from one hub.
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
          <h2>Publish, boost, measure, and improve every format from one system.</h2>
          <p>
            Sovereign combines AI-native publishing, multilingual distribution,
            SEO structure, geolocation context, boost campaigns, engagement analytics,
            and performance tracking without turning the product into a noisy feed.
          </p>
          <div className="metadata-grid">
            <span>Publishing+</span>
            <span>Engagement</span>
            <span>Performance</span>
            <span>Boost posts</span>
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
          <h2>One place for essays, reports, audio, video, explainers, and local updates.</h2>
          <p>
            Sovereign keeps the audience experience focused while giving publishers
            the flexibility to publish many formats with professional metadata,
            discovery, engagement tracking, boost options, and performance intelligence.
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
          <h2>Publishing plus the intelligence layer publishers need.</h2>
          <p>
            Sovereign is not only where content goes live. It is where teams
            understand what was published, who engaged, where it travelled, what
            was boosted, and how each format performed.
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
            The product stays focused on publishing while making the core layer
            intelligent, multilingual, search-friendly, location-aware,
            analytics-native, boost-ready, and format-flexible.
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
        <h2>A Publishing+ platform, not another noisy social feed.</h2>
        <p>
          Sovereign is designed as a professional publishing space for ideas,
          reporting, commentary, media, briefings, research, and public-interest
          updates. The goal is to keep the audience experience focused while
          making every published item easier to create, translate, optimize,
          distribute, boost, measure, and improve through engagement and performance data.
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
