import Link from "next/link";
import { achievements, futureRoadmap, specialMoments } from "@/data/site";

export const metadata = {
  title: "Islanders Cricket Achievements",
  description:
    "Tournament outcomes, trophy moments, and the competitive edge driving Islanders Cricket Club forward.",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Championship Journey
            </p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Achievements
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From Corpus Christi to San Antonio, celebrating our victories and
              competitive spirit across every season.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="bg-gray-50 py-16" id="timeline">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {achievements.map((entry) => (
              <article
                key={entry.league}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="border-b border-gray-200 bg-gradient-to-r from-emerald-50 to-amber-50 px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    {entry.league}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    {entry.status}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-base text-gray-700">{entry.narrative}</p>
                  <ul className="mt-6 space-y-3">
                    {entry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700"
                      >
                        <span className="text-emerald-600">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Special Moments */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Highlights
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Signature Moments
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {specialMoments.map((moment) => (
              <div
                key={moment.title}
                className="rounded-xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                  {moment.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {moment.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="bg-gradient-to-br from-amber-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Up Next
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Innovation Roadmap
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-4">
              {futureRoadmap.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-amber-200 bg-white p-5 shadow-sm"
                >
                  <span className="text-amber-600">→</span>
                  <span className="text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/analytics"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                View Analytics Engine
              </Link>
              <Link
                href="/gallery#executive-summary"
                className="inline-flex items-center justify-center rounded-lg border-2 border-emerald-600 px-6 py-3 text-base font-semibold text-emerald-600 transition hover:bg-emerald-50"
              >
                Executive Summary
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
