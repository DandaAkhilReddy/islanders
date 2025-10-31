import Image from "next/image";
import Link from "next/link";
import {
  achievements,
  metrics,
  photoDistribution,
  siteIdentity,
  specialMoments,
} from "@/data/site";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16">
      <section className="glass-panel overflow-hidden rounded-3xl border border-white/10">
        <div className="grid items-center gap-12 px-8 py-12 lg:grid-cols-2 lg:px-12 lg:py-16">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
              Islanders 2025 Campaign
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {siteIdentity.name} •{" "}
              <span className="prose-gradient">{siteIdentity.tagline}</span>
            </h1>
            <p className="max-w-xl text-pretty text-base text-slate-200 sm:text-lg">
              {siteIdentity.mission} Backed by 42 meticulously cataloged photos,
              a production-grade analytics engine, and a leadership team intent
              on lifting the next trophy.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/achievements"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
              >
                Explore Achievements
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full border border-amber-200/40 px-6 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-200/10"
              >
                View Gallery
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-amber-400/20 via-blue-500/10 to-teal-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl">
              <Image
                src="/media/season-timeline.png"
                alt="Islanders Cricket season timeline summary"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
                priority
              />
              <p className="absolute bottom-3 right-4 rounded-full bg-slate-950/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">
                Season Timeline
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 bg-slate-950/40">
          <dl className="grid gap-6 px-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="space-y-2 rounded-2xl border border-white/10 bg-slate-950/60 p-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  {metric.label}
                </dt>
                <dd className="text-3xl font-semibold text-white">
                  {metric.value}
                </dd>
                <p className="text-xs text-slate-300">{metric.context}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-semibold text-white">Campaign Pulse</h2>
          <p className="mt-3 text-sm text-slate-300">
            Two tournaments, one unstoppable surge. Islanders continue to set
            the benchmark for elite amateur cricket in Texas.
          </p>
        </div>
        <div className="lg:col-span-2 space-y-6">
          {achievements.map((achievement) => (
            <article
              key={achievement.league}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-6"
            >
              <header className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                    {achievement.league}
                  </p>
                  <h3 className="text-xl font-semibold text-white">
                    {achievement.status}
                  </h3>
                </div>
                <Link
                  href="/achievements"
                  className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 transition hover:text-amber-300"
                >
                  Read Report →
                </Link>
              </header>
              <p className="mt-4 text-sm text-slate-200">
                {achievement.narrative}
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                {achievement.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-xl border border-white/5 bg-slate-900/80 px-4 py-3"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 rounded-3xl border border-white/10 bg-slate-950/70 px-8 py-12 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Photo Intelligence Snapshot
          </h2>
            <p className="text-sm text-slate-300">
              42 curated visuals fuel the Islanders&apos; storytelling engine—
              balancing action, award ceremonies, and the bonds that tie the
              squad together.
            </p>
            <div className="space-y-4">
              {photoDistribution.map((item) => (
                <div
                  key={item.category}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-semibold text-white">
                      {item.category}
                    </h3>
                    <span className="text-3xl font-semibold text-amber-200">
                      {item.count}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
        </div>
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl">
            <Image
              src="/media/photo-category-analysis.png"
              alt="Breakdown of Islanders Cricket Club photo categories"
              width={900}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <ul className="grid gap-4 text-sm text-slate-300">
            {specialMoments.map((moment) => (
              <li
                key={moment.title}
                className="rounded-xl border border-white/5 bg-slate-900/80 px-5 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                  {moment.title}
                </p>
                <p className="mt-2 text-slate-300">{moment.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/80 via-slate-950/80 to-slate-900/80 px-8 py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              Next Objective
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Build the Islanders digital war room.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-200">
              Launch the Netlify-powered hub, showcase analytics, and keep fans,
              partners, and scouts aligned with the Islanders&apos; ascent.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-slate-50 transition hover:bg-blue-400"
          >
            Coordinate Launch
          </Link>
        </div>
      </section>
    </div>
  );
}
