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

              <p className="text-base text-gray-600">
                Powered by Dr. Vishnu V. Reddy and Dr. Veena Reddy's $50,000+ investment
                in professional cricket excellence.
              </p>

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

            {/* Hero Image */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:h-[500px]">
              <Image
                src="/media/events/hero-san-antonio-team.jpeg"
                alt="Islanders Cricket Club Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Sponsors</h2>
            <p className="mt-4 text-lg text-gray-600">
              Powered by community support and dedication
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {sponsorProfiles.map((sponsor) => (
              <div
                key={sponsor.name}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-48 w-full bg-gradient-to-br from-emerald-50 to-amber-50">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                    {sponsor.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {sponsor.name}
                  </h3>
                  <p className="mt-3 text-base text-gray-700">
                    {sponsor.contribution}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {sponsor.focusAreas.map((focus) => (
                      <li
                        key={focus}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-emerald-600">✓</span>
                        {focus}
                      </li>
                    ))}
                  </ul>

                  <blockquote className="mt-4 border-l-4 border-emerald-600 pl-4 italic text-gray-700">
                    "{sponsor.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/sponsors"
              className="inline-flex items-center text-base font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Learn More About Our Sponsors →
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
