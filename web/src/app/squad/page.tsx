import Image from "next/image";
import Link from "next/link";
import { players, leadership } from "@/data/players";

export const metadata = {
  title: "Squad - Islanders Cricket Club",
  description:
    "Meet the complete Islanders Cricket Club squad with detailed statistics and performance highlights from the 2025 season.",
};

export default function SquadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Complete Squad 2025
            </p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Islanders Cricket Squad
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From the shores of Corpus Christi, Texas — our complete team roster
              with comprehensive statistics and player profiles.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Structure */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
              Leadership Structure
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Principal & Chief Mentor
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  {leadership.principal}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Director & Mentor
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  {leadership.director}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Captain
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  {leadership.captain}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Vice Captain
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  {leadership.viceCaptain}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Associate Vice Captain
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  {leadership.associateVC}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Quality Directors
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  {leadership.qualityDirectors.join(" & ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Squad</h2>
            <p className="mt-4 text-lg text-gray-600">
              All 14 players with complete statistics and performance data
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {players.map((player) => (
              <Link
                key={player.slug}
                href={`/players/${player.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                {/* Player Image */}
                <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-emerald-50 to-gray-100">
                  {player.image ? (
                    <Image
                      src={player.image}
                      alt={player.name}
                      fill
                      className="object-cover transition group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <p className="text-gray-400">Photo Coming Soon</p>
                    </div>
                  )}
                </div>

                {/* Player Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {player.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">
                    {player.role}
                  </p>

                  {/* Batting/Bowling Style */}
                  <div className="mt-3 space-y-1">
                    {player.battingStyle && (
                      <p className="text-xs text-gray-600">
                        <span className="font-medium">Batting:</span> {player.battingStyle}
                      </p>
                    )}
                    {player.bowlingStyle && (
                      <p className="text-xs text-gray-600">
                        <span className="font-medium">Bowling:</span> {player.bowlingStyle}
                      </p>
                    )}
                  </div>

                  {/* Key Stats */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-gray-50 p-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        Matches
                      </p>
                      <p className="mt-1 text-2xl font-bold text-gray-900">
                        {player.totalStats.matches}
                      </p>
                    </div>
                    <div className="rounded-lg bg-emerald-50 p-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-emerald-700">
                        Runs
                      </p>
                      <p className="mt-1 text-2xl font-bold text-emerald-600">
                        {player.totalStats.runs}
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        Average
                      </p>
                      <p className="mt-1 text-2xl font-bold text-gray-900">
                        {player.totalStats.average.toFixed(2)}
                      </p>
                    </div>
                    {player.totalStats.wickets ? (
                      <div className="rounded-lg bg-emerald-50 p-3">
                        <p className="text-xs font-medium uppercase tracking-wider text-emerald-700">
                          Wickets
                        </p>
                        <p className="mt-1 text-2xl font-bold text-emerald-600">
                          {player.totalStats.wickets}
                        </p>
                      </div>
                    ) : (
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                          Catches
                        </p>
                        <p className="mt-1 text-2xl font-bold text-gray-900">
                          {player.totalStats.catches || 0}
                        </p>
                      </div>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600 line-clamp-2">
                    {player.highlight}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats Summary */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Season Statistics Summary
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Combined performance metrics from our entire squad
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 text-center shadow-sm">
              <p className="text-5xl font-bold text-emerald-600">
                {players.reduce((sum, p) => sum + p.totalStats.runs, 0)}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-700">
                Total Runs
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 text-center shadow-sm">
              <p className="text-5xl font-bold text-emerald-600">
                {players.reduce((sum, p) => sum + (p.totalStats.wickets || 0), 0)}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-700">
                Total Wickets
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 text-center shadow-sm">
              <p className="text-5xl font-bold text-emerald-600">
                {players.reduce((sum, p) => sum + (p.totalStats.catches || 0), 0)}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-700">
                Total Catches
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 p-6 text-center shadow-sm">
              <p className="text-5xl font-bold text-amber-600">
                {players.length}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-700">
                Squad Members
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
