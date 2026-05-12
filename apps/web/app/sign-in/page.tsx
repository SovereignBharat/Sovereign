import { AuthCard } from "../../components/AuthCard";

export const metadata = {
  title: "Sign in — Sovereign",
  description:
    "Sign in to Sovereign to manage your reading profile or creator workspace.",
};

export default function SignInPage() {
  return <AuthCard mode="sign-in" />;
}
