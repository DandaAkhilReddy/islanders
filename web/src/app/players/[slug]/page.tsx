import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { players } from "@/data/players";

export async function generateStaticParams() {
  return players.map((player) => ({
    slug: player.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const player = players.find((p) => p.slug === params.slug);

  if (!player) {
    return {
      title: "Player Not Found",
    };
  }

  return {
    title: `${player.name} - Islanders Cricket Club`,
    description: player.highlight,
  };
}

export default function PlayerPage({ params }: { params: { slug: string } }) {
  const player = players.find((p) => p.slug === params.slug);

  if (!player) {
    notFound();
  }

  const playerRank = players.findIndex((p) => p.slug === params.slug) + 1;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[400px_1fr]">
            {/* Player Image */}
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-gray-100 shadow-2xl">
                {player.image ? (
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <p className="text-gray-400">Photo Coming Soon</p>
                  </div>
                )}
              </div>
              {/* Rank Badge */}
              <div className="absolute left-6 top-6 rounded-full bg-emerald-600 px-5 py-3 text-xl font-bold text-white shadow-lg">
                #{playerRank}
              </div>
            </div>

            {/* Player Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  {player.dominantSkill}
                </p>
                <h1 className="mt-2 text-5xl font-bold text-gray-900">
                  {player.name}
                </h1>
                <p className="mt-3 text-2xl font-medium text-emerald-600">
                  {player.role}
                </p>
              </div>

              <p className="text-lg leading-relaxed text-gray-700">
                {player.highlight}
              </p>

              {/* Player Details */}
              <div className="grid gap-4 sm:grid-cols-2">
                {player.battingStyle && (
                  <div>
                    <p className="text-sm font-medium text-gray-500">Batting Style</p>
                    <p className="mt-1 text-base font-semibold text-gray-900">
                      {player.battingStyle}
                    </p>
                  </div>
                )}
                {player.bowlingStyle && (
                  <div>
                    <p className="text-sm font-medium text-gray-500">Bowling Style</p>
                    <p className="mt-1 text-base font-semibold text-gray-900">
                      {player.bowlingStyle}
                    </p>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {player.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Statistics */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Career Statistics</h2>
            <p className="mt-2 text-lg text-gray-600">
              Complete performance breakdown for the 2025 season
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Matches */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                Matches Played
              </p>
              <p className="mt-3 text-4xl font-bold text-gray-900">
                {player.totalStats.matches}
              </p>
            </div>

            {/* Runs */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                Total Runs
              </p>
              <p className="mt-3 text-4xl font-bold text-emerald-600">
                {player.totalStats.runs}
              </p>
            </div>

            {/* Average */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                Batting Average
              </p>
              <p className="mt-3 text-4xl font-bold text-gray-900">
                {player.totalStats.average.toFixed(2)}
              </p>
            </div>

            {/* Wickets */}
            {player.totalStats.wickets && (
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                  Wickets Taken
                </p>
                <p className="mt-3 text-4xl font-bold text-emerald-600">
                  {player.totalStats.wickets}
                </p>
              </div>
            )}

            {/* Economy */}
            {player.totalStats.economy && (
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                  Economy Rate
                </p>
                <p className="mt-3 text-4xl font-bold text-gray-900">
                  {player.totalStats.economy.toFixed(2)}
                </p>
              </div>
            )}

            {/* Catches */}
            {player.totalStats.catches && (
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                  Catches
                </p>
                <p className="mt-3 text-4xl font-bold text-gray-900">
                  {player.totalStats.catches}
                </p>
              </div>
            )}

            {/* Dot Balls */}
            {player.totalStats.dotBalls && (
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                  Dot Balls Bowled
                </p>
                <p className="mt-3 text-4xl font-bold text-gray-900">
                  {player.totalStats.dotBalls}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Spotlight Achievement */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border-4 border-amber-400 bg-gradient-to-br from-amber-50 to-white p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-amber-400 p-3">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                  {player.spotlight.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {player.spotlight.value}
                </p>
                {player.spotlight.context && (
                  <p className="mt-3 text-lg text-gray-700">
                    {player.spotlight.context}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/top-5"
              className="inline-flex items-center justify-center rounded-lg border-2 border-emerald-600 px-8 py-3 text-base font-semibold text-emerald-600 transition hover:bg-emerald-50"
            >
              ← Back to Top 5
            </Link>
            <Link
              href="/squad"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              View Full Squad
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
