import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import {
  navigationLinks,
  siteFooter,
  siteIdentity,
} from "@/data/site";
import MobileMenu from "@/components/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-slate-950/80">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300"
              >
                <div className="relative h-10 w-10">
                  <Image
                    src="/media/logo.jpeg"
                    alt="Islanders Cricket Club Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                Islanders Cricket
              </Link>

              {/* Desktop Navigation */}
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

              {/* Desktop CTA Button */}
              <div className="hidden md:block">
                <Link
                  href={siteIdentity.cta.href}
                  className="rounded-full border border-amber-400/60 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:bg-amber-300/20"
                >
                  {siteIdentity.cta.label}
                </Link>
              </div>

              {/* Mobile Menu Component */}
              <MobileMenu />
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

            {/* Developer Credits */}
            <div className="border-t border-white/5 py-6 text-center">
              <p className="text-sm text-slate-400">
                Website designed and developed by{" "}
                <a
                  href="https://www.linkedin.com/in/akhil-reddy-danda-1a74b214b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-300 transition hover:text-amber-300"
                >
                  Akhil Reddy Danda
                </a>
              </p>
              <p className="mt-2 text-sm text-slate-400">
                For enquiries:{" "}
                <a
                  href="mailto:akhilreddydanda3@gmail.com"
                  className="font-semibold text-slate-300 transition hover:text-amber-300"
                >
                  akhilreddydanda3@gmail.com
                </a>
              </p>
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
