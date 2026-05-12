import { authRoles, languageOptions } from "../lib/auth";

type AuthCardProps = {
  mode: "sign-in" | "sign-up";
};

export function AuthCard({ mode }: AuthCardProps) {
  const isSignUp = mode === "sign-up";
  const action = isSignUp ? "/api/auth/sign-up" : "/api/auth/sign-in";

  return (
    <section className="auth-card" aria-labelledby="auth-title">
      <div className="auth-copy">
        <p className="eyebrow">Secure access</p>
        <h1 id="auth-title">
          {isSignUp
            ? "Create your Sovereign account."
            : "Welcome back to Sovereign."}
        </h1>
        <p>
          {isSignUp
            ? "Join as a reader or creator with language, location, and DPDP consent controls built into the first step."
            : "Sign in to continue reading local stories, manage your profile, or draft with the creator workspace."}
        </p>
      </div>

      <form className="auth-form" action={action} method="post">
        {isSignUp ? (
          <label>
            Full name
            <input
              name="name"
              autoComplete="name"
              minLength={2}
              placeholder="Ananya Rao"
              required
            />
          </label>
        ) : null}

        <label>
          Email
          <input
            name="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>

        <label>
          Password
          <input
            name="password"
            autoComplete={isSignUp ? "new-password" : "current-password"}
            minLength={isSignUp ? 8 : undefined}
            placeholder="••••••••"
            required
            type="password"
          />
        </label>

        {isSignUp ? (
          <>
            <fieldset className="role-options">
              <legend>Account type</legend>
              {authRoles.map((role) => (
                <label key={role.value}>
                  <input
                    defaultChecked={role.value === "reader"}
                    name="role"
                    type="radio"
                    value={role.value}
                  />
                  <span>
                    <strong>{role.label}</strong>
                    <small>{role.description}</small>
                  </span>
                </label>
              ))}
            </fieldset>

            <div className="form-grid-two">
              <label>
                Preferred language
                <select name="language" required>
                  {languageOptions.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Locality
                <input
                  name="location"
                  placeholder="City, district, or state"
                  required
                />
              </label>
            </div>

            <label className="consent-row">
              <input name="consent" required type="checkbox" value="true" />
              <span>
                I consent to Sovereign processing my account data for
                authentication and publishing controls.
              </span>
            </label>
          </>
        ) : null}

        <button className="button button-primary auth-submit" type="submit">
          {isSignUp ? "Create account" : "Sign in"}
        </button>
      </form>

      <p className="auth-switch">
        {isSignUp ? "Already have an account?" : "New to Sovereign?"}{" "}
        <a href={isSignUp ? "/sign-in" : "/sign-up"}>
          {isSignUp ? "Sign in" : "Create an account"}
        </a>
      </p>
    </section>
  );
}
