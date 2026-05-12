import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sovereign — India's Open Publishing Platform",
  description:
    "A multilingual, location-first publishing platform for authoritative Indian opinions, local reporting, and community knowledge.",
  openGraph: {
    title: "Sovereign — Voices from every corner",
    description:
      "Discover, write, and publish multilingual stories shaped by place, language, and community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
