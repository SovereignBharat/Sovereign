import { AuthCard } from "../../components/AuthCard";

export const metadata = {
  title: "Sign up — Sovereign",
  description:
    "Create a Sovereign reader or creator account with language, location, and consent controls.",
};

export default function SignUpPage() {
  return <AuthCard mode="sign-up" />;
}
