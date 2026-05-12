import { cookies } from "next/headers";
import { decodeSession, SESSION_COOKIE } from "../../lib/auth";

export const metadata = {
  title: "Dashboard — Sovereign",
};

export default function DashboardPage() {
  const user = decodeSession(cookies().get(SESSION_COOKIE)?.value);

  if (!user) {
    return (
      <main className="dashboard-shell">
        <section className="dashboard-card">
          <p className="eyebrow">Authentication required</p>
          <h1>Sign in to open your dashboard.</h1>
          <p>
            Your dashboard keeps reader preferences, creator tools, location
            context, and privacy controls together.
          </p>
          <a className="button button-primary" href="/sign-in">
            Sign in
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="dashboard-shell">
      <section className="dashboard-card">
        <p className="eyebrow">Signed in</p>
        <h1>Welcome, {user.name}.</h1>
        <p>
          Your {user.role} account is configured for {user.language} stories
          around {user.location}.
        </p>
        <div className="dashboard-grid">
          <article>
            <strong>Reading profile</strong>
            <span>
              Follow writers, save highlights, and tune local discovery.
            </span>
          </article>
          <article>
            <strong>Creator tools</strong>
            <span>Open Canvas drafting and article publishing workflow.</span>
          </article>
          <article>
            <strong>Privacy controls</strong>
            <span>
              Manage consent, data export, and account deletion requests.
            </span>
          </article>
        </div>
        <form action="/api/auth/sign-out" method="post">
          <button className="button button-secondary" type="submit">
            Sign out
          </button>
        </form>
      </section>
    </main>
  );
}
