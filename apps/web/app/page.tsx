import { featuredStories, languages, platformStats } from "../lib/content";

const navItems = ["Latest", "Languages", "About"];

const publishingPrinciples = [
  {
    title: "One site, multi-tenant platform",
    body: "Run many authors, publications, institutions, expert columns, and partner channels under one Sovereign discovery layer instead of fragmenting audiences across separate sites.",
  },
  {
    title: "Premium reading experience",
    body: "Deliver a polished, distraction-free reading and writing experience with the elegance of a leading publishing network and the seriousness of an authoritative editorial platform.",
  },
  {
    title: "AI-native editorial operations",
    body: "Assist drafting, editing, summarization, translation, metadata, moderation review, and format adaptation while preserving human editorial accountability.",
  },
  {
    title: "Independent authoritative content",
    body: "Sovereign is built for serious public work: evidence-aware essays, reports, analysis, briefings, explainers, media, and civic knowledge — not casual blogging.",
  },
  {
    title: "Accountable authorship",
    body: "Authors should be able to stand behind their views, provide context, and respond to informed questions with clarity, evidence, and editorial responsibility.",
  },
  {
    title: "Multilingual publishing infrastructure",
    body: "Support Indian languages as first-class publishing surfaces for articles, reports, newsletters, podcasts, videos, explainers, and institutional updates.",
  },
  {
    title: "SEO-native distribution",
    body: "Structure every published item with precise titles, descriptions, schema, slugs, canonical URLs, language variants, and search-ready metadata.",
  },
  {
    title: "Geolocation-aware context",
    body: "Organize content by place, region, language, and public relevance so audiences can discover work rooted in real local and national contexts.",
  },
  {
    title: "Analytics-native publishing",
    body: "Give creators, editors, tenants, and institutions meaningful engagement signals across reads, watch time, listens, shares, saves, geography, language, referrals, and retention.",
  },
  {
    title: "Contextual and social organic amplification",
    body: "Help important work travel through relevance, trusted communities, influencers, channel partners, institutions, and thought leaders — without advertisements or paid-feed clutter.",
  },
  {
    title: "Multimodal publishing formats",
    body: "Publish long-form essays, short posts, reports, visual stories, video, audio, interviews, briefings, newsletters, and civic updates from one system.",
  },
];

const platformHubs = [
  {
    title: "Publishing+ hub",
    body: "Create, edit, translate, package, schedule, and distribute independent authoritative content across serious public formats and tenant workspaces.",
    metrics: ["Authors", "Publications", "Reports", "Video", "Audio", "Briefings"],
  },
  {
    title: "Tenant management hub",
    body: "Give each publication, institution, author collective, or partner channel its own workspace, roles, content pipeline, audience view, and editorial controls inside one site.",
    metrics: ["Workspaces", "Roles", "Pipelines", "Channels", "Permissions", "Branding"],
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
            Medium++ for India • One site • Multi-tenant publishing
          </p>
          <h1>A polished publishing platform for accountable public knowledge.</h1>
          <p className="hero-lede">
            Sovereign gives authors, publications, institutions, expert communities,
            and partner channels their own publishing workspaces inside one unified
            site — with AI-native editorial operations, multilingual reach,
            geolocation context, SEO-native structure, engagement tracking,
            performance intelligence, and contextual organic amplification.
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
          <p className="card-kicker">Multi-tenant publishing intelligence</p>
          <h2>One Sovereign site. Many authoritative voices, publications, and institutions.</h2>
          <p>
            Each tenant can publish and measure its own work while readers discover
            everything through one premium Sovereign experience — without advertisements,
            random posts, or a noisy social feed.
          </p>
          <div className="metadata-grid">
            <span>One site</span>
            <span>Multi-tenant</span>
            <span>Premium UX</span>
            <span>Accountable</span>
            <span>Organic reach</span>
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
          <p className="eyebrow">Unified publishing network</p>
          <h2>One destination for serious essays, reports, media, explainers, and local knowledge.</h2>
          <p>
            Sovereign keeps the audience experience focused while giving each tenant
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
            Sovereign is not only where content goes live. It is where tenants
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
            the core layer premium, multi-tenant, AI-native, multilingual,
            search-friendly, location-aware, analytics-native, organically amplified,
            and format-flexible.
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
            languages while preserving regional context, format quality, tenant identity,
            and editorial standards.
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
        <h2>One platform for independent authoritative content, not random blogging.</h2>
        <p>
          Sovereign is designed as a professional multi-tenant publishing platform
          for ideas, reporting, commentary, media, briefings, research, and
          public-interest knowledge. The goal is to keep the audience experience unified
          while giving each author, publication, institution, and partner channel the tools
          to create, translate, optimize, distribute, measure, and improve its work.
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
