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


      {/* Navigation */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Link
              href="/squad"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              ← Back to Squad
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
