import {
  creatorWorkflow,
  featuredStories,
  languages,
  platformStats,
} from "../lib/content";

const navItems = ["Discover", "Languages", "Creators", "Privacy"];

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
          <a href="/sign-in">Sign in</a>
          <a className="header-cta" href="/sign-up">
            Start writing
          </a>
        </div>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            Now live • Built in India • Open publishing for public voices
          </p>
          <h1>India deserves a publishing platform that starts with place, language, and trust.</h1>
          <p className="hero-lede">
            Sovereign helps writers, journalists, researchers, and civic voices
            publish authoritative opinions for Indian readers — across local
            languages, local communities, and public-interest topics.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#discover">
              Explore the platform
            </a>
            <a className="button button-secondary" href="/sign-up">
              Become a creator
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Featured publishing preview">
          <div className="card-toolbar">
            <span />
            <span />
            <span />
          </div>
          <p className="card-kicker">Creator preview</p>
          <h2>Write once. Reach India in many languages.</h2>
          <p>
            Draft essays, add local context, prepare translations, and publish
            with privacy-aware checks designed for a serious public platform.
          </p>
          <div className="metadata-grid">
            <span>Kannada</span>
            <span>Bengaluru</span>
            <span>Public Health</span>
            <span>DPDP Ready</span>
          </div>
        </aside>
      </section>

      <section
        className="stats-bar section-shell"
        aria-label="Platform statistics"
      >
        {platformStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="discover" className="section-shell split-section">
        <div>
          <p className="eyebrow">Public platform</p>
          <h2>Discover stories by place, language, and public relevance.</h2>
          <p>
            Readers can browse local reporting, civic explainers, and opinion
            pieces through state, district, city, and topic signals. Every
            article is designed for SEO, accessibility, and multilingual reach.
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

      <section id="languages" className="section-shell language-section">
        <div className="section-heading">
          <p className="eyebrow">Languages</p>
          <h2>Built for India's multilingual public sphere.</h2>
          <p>
            Publish in one language, localize thoughtfully, and preserve
            regional context with language-aware metadata and reader controls.
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

      <section id="creators" className="section-shell creator-panel">
        <div>
          <p className="eyebrow">Creator workspace</p>
          <h2>From AI-assisted draft to accountable publication.</h2>
          <p>
            The frontend introduces the public experience while connecting
            creators to the optional LangChain Open Canvas editor wrapper for
            rich drafting and revision workflows.
          </p>
        </div>
        <ol>
          {creatorWorkflow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section id="privacy" className="section-shell privacy-band">
        <p className="eyebrow">Trust & privacy</p>
        <h2>DPDP-aware publishing controls from day one.</h2>
        <p>
          Sovereign keeps consent, retention, and user controls visible as
          platform primitives—not afterthoughts. The public UI highlights
          privacy commitments alongside local discovery and creator tools.
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
