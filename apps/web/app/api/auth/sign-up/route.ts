import { NextResponse } from "next/server";
import {
  encodeSession,
  SESSION_COOKIE,
  validateSignUp,
  type AuthRole,
  type SignUpPayload,
} from "../../../../lib/auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload: SignUpPayload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? "").toLowerCase(),
    password: String(formData.get("password") ?? ""),
    role: String(formData.get("role") ?? "reader") as AuthRole,
    language: String(formData.get("language") ?? ""),
    location: String(formData.get("location") ?? ""),
    consent: formData.get("consent") === "true",
  };

  const errors = validateSignUp(payload);
  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const response = NextResponse.redirect(
    new URL("/dashboard", request.url),
    303,
  );
  response.cookies.set(
    SESSION_COOKIE,
    encodeSession({
      id: crypto.randomUUID(),
      name: payload.name,
      email: payload.email,
      role: payload.role,
      language: payload.language,
      location: payload.location,
    }),
    {
      httpOnly: true,
      sameSite: "lax",
      secure: new URL(request.url).protocol === "https:",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    },
  );

  return response;
}
