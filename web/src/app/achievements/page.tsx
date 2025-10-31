import Link from "next/link";
import { achievements, futureRoadmap, specialMoments } from "@/data/site";

export const metadata = {
  title: "Islanders Cricket Achievements",
  description:
    "Tournament outcomes, trophy moments, and the competitive edge driving Islanders Cricket Club forward.",
};

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 pb-24 pt-16">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
          Championship Narrative
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Trophy hunts, league ascents, and the culture behind every win.
        </h1>
        <p className="max-w-3xl text-base text-slate-200">
          Islanders Cricket Club blends fearless cricket with disciplined
          preparation. From Corpus Christi to San Antonio, the squad executes
          data-backed game plans, celebrates the journey, and builds
          relationships that carry into every season.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-2" id="timeline">
        {achievements.map((entry) => (
          <article
            key={entry.league}
            className="rounded-3xl border border-white/10 bg-slate-950/70 p-8"
          >
            <header className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                {entry.league}
              </p>
              <h2 className="text-2xl font-semibold text-white">
                {entry.status}
              </h2>
            </header>
            <p className="mt-4 text-sm text-slate-200">{entry.narrative}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {entry.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-2xl border border-white/5 bg-slate-900/80 px-4 py-3"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              Narrative Highlights
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Signature Islanders snapshots.
            </h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {specialMoments.map((moment) => (
              <li
                key={moment.title}
                className="rounded-3xl border border-white/5 bg-slate-900/80 px-6 py-5"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                  {moment.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{moment.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-blue-400/20 bg-blue-950/60 p-8">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
              Up Next
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Islanders innovation roadmap.
            </h2>
          </div>
          <ul className="space-y-4 text-sm text-slate-200">
            {futureRoadmap.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/analytics"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              View Analytics Engine
            </Link>
            <Link
              href="/gallery#executive-summary"
              className="inline-flex items-center justify-center rounded-full border border-amber-200/40 px-6 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-200/10"
            >
              Executive Summary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
