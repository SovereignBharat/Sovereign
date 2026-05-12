import { NextResponse } from "next/server";
import {
  encodeSession,
  SESSION_COOKIE,
  validateSignIn,
  type SignInPayload,
} from "../../../../lib/auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload: SignInPayload = {
    email: String(formData.get("email") ?? "").toLowerCase(),
    password: String(formData.get("password") ?? ""),
  };

  const errors = validateSignIn(payload);
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
      id: `demo-${payload.email}`,
      name: payload.email.split("@")[0] || "Sovereign reader",
      email: payload.email,
      role: "reader",
      language: "English",
      location: "India",
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
