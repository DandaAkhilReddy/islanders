import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  navigationLinks,
  siteFooter,
  siteIdentity,
} from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteIdentity.name} | ${siteIdentity.tagline}`,
  description:
    "Official Islanders Cricket Club digital hub featuring tournament achievements, leadership spotlights, and analytics-powered storytelling.",
  keywords: [
    "Islanders Cricket Club",
    "CCPL",
    "San Antonio League",
    "cricket analytics",
    "Akhil Reddy Danda",
    "Dr. Vishnu Reddy",
  ],
  openGraph: {
    title: `${siteIdentity.name} — ${siteIdentity.tagline}`,
    description:
      "A championship-ready showcase blending photo intelligence, performance analytics, and team culture.",
    url: "https://islanders-cricket.netlify.app",
    siteName: siteIdentity.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteIdentity.name} — ${siteIdentity.tagline}`,
    description:
      "Season highlights, leadership spotlights, and analytics dashboards for the Islanders Cricket Club.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-slate-950/80">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300"
              >
                Islanders Cricket
              </Link>
              <div className="hidden items-center gap-6 text-sm md:flex">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-medium text-slate-200 transition hover:text-amber-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex max-w-xs items-center gap-3 overflow-x-auto text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 md:hidden">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="shrink-0 transition hover:text-amber-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="hidden md:block">
                <Link
                  href={siteIdentity.cta.href}
                  className="rounded-full border border-amber-400/60 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:bg-amber-300/20"
                >
                  {siteIdentity.cta.label}
                </Link>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="border-t border-white/10 bg-slate-950/80">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                  {siteFooter.ethos}
                </p>
                <p className="mt-3 max-w-xl text-sm text-slate-300">
                  {siteFooter.copy}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2 text-sm text-slate-300 md:text-right">
                {siteFooter.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-amber-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <p className="border-t border-white/5 py-4 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} {siteIdentity.name}. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
