import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import { person } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

// TODO — after deploying, set this to your real domain so social cards and
// canonical URLs resolve absolutely. Vercel gives you one automatically.
const SITE_URL = "https://zaeem-ather.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${person.name} — ${person.role}`,
    template: `%s | ${person.name}`,
  },
  description: person.tagline,
  openGraph: {
    title: `${person.name} — ${person.role}`,
    description: person.tagline,
    url: SITE_URL,
    siteName: person.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — ${person.role}`,
    description: person.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The font variables must live on <html>, not <body>: Tailwind's `@theme`
    // emits --font-display/--font-sans onto :root, and those reference
    // --font-fraunces et al. A custom property is substituted at
    // computed-value time on the element that declares it, so if the fonts are
    // declared one level down on <body>, --font-display resolves against an
    // undefined variable and every serif heading silently falls back to
    // system sans.
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
