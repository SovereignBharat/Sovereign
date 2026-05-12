export type AuthRole = "reader" | "creator";

export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
  role: AuthRole;
  language: string;
  location: string;
  consent: boolean;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: AuthRole;
  language: string;
  location: string;
};

export const SESSION_COOKIE = "sovereign_session";

export const authRoles: Array<{
  value: AuthRole;
  label: string;
  description: string;
}> = [
  {
    value: "reader",
    label: "Reader",
    description:
      "Follow writers, save stories, and manage privacy preferences.",
  },
  {
    value: "creator",
    label: "Creator",
    description:
      "Draft with Open Canvas, publish articles, and reach local readers.",
  },
];

export const languageOptions = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Marathi",
  "Gujarati",
  "Bengali",
  "Punjabi",
  "Assamese",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSignUp(payload: SignUpPayload): string[] {
  const errors: string[] = [];

  if (payload.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  if (!emailPattern.test(payload.email)) {
    errors.push("Enter a valid email address.");
  }

  if (payload.password.length < 8) {
    errors.push("Password must be at least 8 characters.");
  }

  if (!authRoles.some((role) => role.value === payload.role)) {
    errors.push("Choose a valid account type.");
  }

  if (!payload.language) {
    errors.push("Choose a preferred language.");
  }

  if (payload.location.trim().length < 2) {
    errors.push("Add a city, district, or state for local discovery.");
  }

  if (!payload.consent) {
    errors.push("Consent is required to create an account.");
  }

  return errors;
}

export function validateSignIn(payload: SignInPayload): string[] {
  const errors: string[] = [];

  if (!emailPattern.test(payload.email)) {
    errors.push("Enter a valid email address.");
  }

  if (!payload.password) {
    errors.push("Password is required.");
  }

  return errors;
}

export function encodeSession(user: SessionUser): string {
  return encodeURIComponent(JSON.stringify(user));
}

export function decodeSession(value: string | undefined): SessionUser | null {
  if (!value) {
    return null;
  }

  try {
    const decoded = decodeURIComponent(value);
    const parsed = JSON.parse(decoded) as SessionUser;

    if (!parsed.email || !parsed.id) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}
