import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sovereignbharat.in"),
  title: {
    default: "Sovereign — India's Open Publishing Platform",
    template: "%s | Sovereign",
  },
  description:
    "Sovereign is a multilingual, location-first publishing platform for authoritative Indian opinions, civic writing, local reporting, and community knowledge.",
  keywords: [
    "Sovereign",
    "Indian publishing platform",
    "multilingual publishing",
    "local journalism India",
    "public opinion India",
    "creator platform India",
  ],
  authors: [{ name: "SovereignBharat Contributors" }],
  creator: "SovereignBharat",
  publisher: "SovereignBharat",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sovereign — Voices from every corner of India",
    description:
      "Discover, write, and publish multilingual stories shaped by place, language, trust, and community.",
    url: "/",
    siteName: "Sovereign",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign — India's Open Publishing Platform",
    description:
      "A multilingual, location-first platform for serious public voices across India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
