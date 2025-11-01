import Image from "next/image";
import Link from "next/link";
import { siteIdentity, sponsorProfiles } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Simple */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Hero Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  Islanders Cricket Club 2025
                </p>
                <h1 className="mt-4 text-5xl font-bold leading-tight text-gray-900 sm:text-6xl">
                  {siteIdentity.name}
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  {siteIdentity.tagline}
                </p>
              </div>

              <p className="text-lg leading-relaxed text-gray-700">
                From the shores of Corpus Christi, Texas, we are proud to be the only
                island-based cricket team — Islanders by name, Islanders by spirit.
              </p>

              {/* Elegant Sponsor Acknowledgment */}
              <div className="sponsor-badge-float inline-flex items-center gap-3 rounded-full border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-amber-50 px-6 py-3 shadow-sm">
                <span className="text-2xl">✨</span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    Championed By
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    Dr. Vishnu Reddy & Dr. Veena Reddy
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/squad"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  View Our Squad
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-emerald-600 px-6 py-3 text-base font-semibold text-emerald-600 transition hover:bg-emerald-50"
                >
                  Photo Gallery
                </Link>
              </div>
            </div>

            {/* Hero Image - Premium Multi-layered Effects */}
            <div className="hero-image-container relative h-[400px] lg:h-[500px]">
              {/* Main Image with Premium Ken Burns */}
              <Image
                src="/media/events/hero-san-antonio-team.jpeg"
                alt="Islanders Cricket Club Team"
                fill
                className="hero-image-premium object-cover"
                priority
              />

              {/* Animated Gradient Overlay */}
              <div className="hero-gradient-overlay" />

              {/* Shine Sweep Effect */}
              <div className="hero-shine-effect" />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section - Premium Dual Portrait Design */}
      <section className="sponsor-bg-animated py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Championship Sponsors
            </p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Powered by Passion & Commitment
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Meet the visionaries investing in Islanders Cricket excellence
            </p>
          </div>

          {/* Dual Portrait Cards */}
          <div className="grid gap-8 lg:grid-cols-2">
            {sponsorProfiles.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className={`sponsor-card-3d relative overflow-hidden rounded-2xl bg-white shadow-xl ${
                  index === 0 ? "sponsor-entrance-left" : "sponsor-entrance-right"
                }`}
              >
                {/* Shimmer Border Effect (appears on hover) */}
                <div className="sponsor-border-shimmer" />

                {/* Portrait Section */}
                <div className="sponsor-portrait-container relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-emerald-50">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="sponsor-portrait-hover object-cover"
                    priority={index === 0}
                  />
                  {/* Vignette Overlay */}
                  <div className="sponsor-vignette" />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="sponsor-text-cascade space-y-4">
                    {/* Title Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-amber-100 px-4 py-2">
                      <span className="text-lg">✨</span>
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        {sponsor.title}
                      </p>
                    </div>

                    {/* Name */}
                    <h3 className="text-3xl font-bold text-gray-900">
                      {sponsor.name}
                    </h3>

                    {/* Contribution Description */}
                    <p className="text-base leading-relaxed text-gray-700">
                      {sponsor.contribution}
                    </p>

                    {/* Focus Areas - Compact Grid */}
                    <div className="mt-6 space-y-2">
                      {sponsor.focusAreas.slice(0, 3).map((focus, idx) => (
                        <div
                          key={focus}
                          className="sponsor-focus-item flex items-start gap-3 rounded-lg border border-emerald-100 bg-emerald-50/50 px-4 py-3"
                        >
                          <span className="mt-0.5 text-emerald-600">✓</span>
                          <span className="text-sm text-gray-700">{focus}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quote with Reveal Animation */}
                    <blockquote className="sponsor-quote mt-6 border-l-4 border-emerald-600 bg-gradient-to-r from-emerald-50 to-transparent pl-5 pr-4 py-4">
                      <p className="text-base italic leading-relaxed text-gray-800">
                        "{sponsor.quote}"
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div className="mt-12 text-center">
            <Link
              href="/sponsors"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:shadow-xl hover:scale-105"
            >
              Explore Full Sponsor Story
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Follow Our Journey
          </h2>
          <p className="mt-4 text-lg text-emerald-100">
            Stay updated with match results, player stats, and team news
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-emerald-600 shadow-sm transition hover:bg-gray-50"
            >
              View Gallery
            </Link>
            <Link
              href="/achievements"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-800"
            >
              Our Achievements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
