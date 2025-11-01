import Image from "next/image";
import { players } from "@/data/players";

export const metadata = {
  title: "Squad - Islanders Cricket Club",
  description:
    "Meet the Top 5 performers of Islanders Cricket Club with detailed statistics and performance highlights.",
};

export default function SquadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Top Performers
            </p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Islanders Cricket Squad
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Meet our Top 5 players with comprehensive statistics from the 2025 season.
              Leading performers across batting, bowling, and fielding categories.
            </p>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-12">
            {players.map((player, index) => (
              <article
                key={player.slug}
                id={player.slug}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
                  {/* Player Image */}
                  <div className="relative h-80 bg-gradient-to-br from-emerald-50 to-gray-100 lg:h-auto">
                    {player.image ? (
                      <Image
                        src={player.image}
                        alt={player.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <p className="text-gray-400">Photo Coming Soon</p>
                      </div>
                    )}
                    {/* Rank Badge */}
                    <div className="absolute left-4 top-4 rounded-full bg-emerald-600 px-4 py-2 text-lg font-bold text-white shadow-lg">
                      #{index + 1}
                    </div>
                  </div>

                  {/* Player Details */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {player.name}
                      </h2>
                      <p className="mt-2 text-lg font-medium text-emerald-600">
                        {player.role}
                      </p>
                      <p className="mt-2 text-base text-gray-700">
                        {player.highlight}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {player.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Statistics Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Matches */}
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                          Matches
                        </p>
                        <p className="mt-2 text-3xl font-bold text-gray-900">
                          {player.totalStats.matches}
                        </p>
                      </div>

                      {/* Runs */}
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                          Total Runs
                        </p>
                        <p className="mt-2 text-3xl font-bold text-emerald-600">
                          {player.totalStats.runs}
                        </p>
                      </div>

                      {/* Average */}
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                          Batting Average
                        </p>
                        <p className="mt-2 text-3xl font-bold text-gray-900">
                          {player.totalStats.average.toFixed(2)}
                        </p>
                      </div>

                      {/* Wickets (if applicable) */}
                      {player.totalStats.wickets && (
                        <>
                          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                              Wickets
                            </p>
                            <p className="mt-2 text-3xl font-bold text-emerald-600">
                              {player.totalStats.wickets}
                            </p>
                          </div>
                          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                              Economy Rate
                            </p>
                            <p className="mt-2 text-3xl font-bold text-gray-900">
                              {player.totalStats.economy?.toFixed(2)}
                            </p>
                          </div>
                        </>
                      )}

                      {/* Catches (if applicable) */}
                      {player.totalStats.catches && (
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            Catches
                          </p>
                          <p className="mt-2 text-3xl font-bold text-gray-900">
                            {player.totalStats.catches}
                          </p>
                        </div>
                      )}

                      {/* Dot Balls (if applicable) */}
                      {player.totalStats.dotBalls && (
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            Dot Balls
                          </p>
                          <p className="mt-2 text-3xl font-bold text-gray-900">
                            {player.totalStats.dotBalls}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Spotlight Achievement */}
                    <div className="mt-6 rounded-lg border-2 border-amber-300 bg-amber-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                        {player.spotlight.label}
                      </p>
                      <p className="mt-2 text-2xl font-bold text-gray-900">
                        {player.spotlight.value}
                      </p>
                      {player.spotlight.context && (
                        <p className="mt-2 text-sm text-gray-700">
                          {player.spotlight.context}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Stats Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Season Statistics Summary
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Combined performance metrics from all Top 5 players
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-emerald-50 p-6 text-center">
              <p className="text-5xl font-bold text-emerald-600">
                {players.reduce((sum, p) => sum + p.totalStats.runs, 0)}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-600">
                Total Runs
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-6 text-center">
              <p className="text-5xl font-bold text-emerald-600">
                {players.reduce((sum, p) => sum + (p.totalStats.wickets || 0), 0)}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-600">
                Total Wickets
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-6 text-center">
              <p className="text-5xl font-bold text-emerald-600">
                {players.reduce((sum, p) => sum + (p.totalStats.catches || 0), 0)}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-600">
                Total Catches
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-6 text-center">
              <p className="text-5xl font-bold text-emerald-600">
                {(
                  players.reduce((sum, p) => sum + p.totalStats.average, 0) /
                  players.length
                ).toFixed(2)}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-600">
                Average Score
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
