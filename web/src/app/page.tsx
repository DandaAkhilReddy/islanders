import Image from "next/image";
import Link from "next/link";
import {
  achievements,
  matchdaySupport,
  metrics,
  siteIdentity,
  sponsorProfiles,
} from "@/data/site";
import { players } from "@/data/players";

const ccplLeaders = players
  .filter(
    (player) =>
      typeof player.leagues.corpusChristi.runs === "number" &&
      (player.leagues.corpusChristi.runs ?? 0) > 0
  )
  .sort(
    (a, b) =>
      (b.leagues.corpusChristi.runs ?? 0) -
      (a.leagues.corpusChristi.runs ?? 0)
  )
  .slice(0, 4);

const sanAntonioLeaders = players
  .filter(
    (player) =>
      typeof player.leagues.sanAntonio?.runs === "number" &&
      (player.leagues.sanAntonio?.runs ?? 0) > 0
  )
  .sort(
    (a, b) =>
      (b.leagues.sanAntonio?.runs ?? 0) -
      (a.leagues.sanAntonio?.runs ?? 0)
  )
  .slice(0, 3);

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80">
        <div className="absolute inset-0">
          <Image
            src="/media/events/hero-san-antonio-team.jpeg"
            alt="Islanders Cricket Club celebrating in downtown San Antonio"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-blue-900/70" />
        </div>
        <div className="relative grid gap-12 px-8 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
              Islanders Cricket 2025
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {siteIdentity.name}
              <span className="block text-lg text-slate-200 sm:text-xl">
                {siteIdentity.tagline}
              </span>
            </h1>
            <p className="max-w-xl text-pretty text-base text-slate-200 sm:text-lg">
              {siteIdentity.mission} With Dr. Vishnu V. Reddy and Dr. Veena
              Reddy investing over $50,000, the Islanders travel, eat, train,
              and recover as a professional unit—ready for every CCPL finals
              push and San Antonio title run.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/squad"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
              >
                Meet the Full Squad
              </Link>
              <Link
                href="/sponsors"
                className="inline-flex items-center justify-center rounded-full border border-amber-200/40 px-6 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-200/10"
              >
                Explore Sponsor Impact
              </Link>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
              Current Campaign Highlights
            </p>
            <ul className="space-y-4 text-sm text-slate-200">
              {achievements.slice(0, 2).map((achievement) => (
                <li
                  key={achievement.league}
                  className="rounded-2xl border border-white/5 bg-slate-900/80 px-5 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
                    {achievement.league}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {achievement.status}
                  </p>
                  <p className="mt-3 text-sm text-slate-200">
                    {achievement.narrative}
                  </p>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/40 via-slate-900/60 to-amber-400/20 px-6 py-4 text-sm text-slate-100">
              <p className="font-semibold uppercase tracking-[0.3em] text-amber-200">
                Logistics Snapshot
              </p>
              <p className="mt-2 text-sm text-slate-200">
                2 dedicated SUVs • hospitality for every match • training
                blocks with Elton Chigumbura supporting tactical sharpness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              {metric.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-white">
              {metric.value}
            </p>
            <p className="mt-3 text-xs text-slate-300">{metric.context}</p>
          </div>
        ))}
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
              Corpus Christi Vanguard
            </p>
            <h2 className="text-3xl font-semibold text-white">
              CCPL stats leaders setting the Islanders pace.
            </h2>
          </div>
          <Link
            href="/squad"
            className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 transition hover:text-amber-300"
          >
            View all player profiles →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {ccplLeaders.map((player) => (
            <article
              key={player.slug}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6"
            >
              {player.image ? (
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="relative space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">
                    {player.role}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {player.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-300">{player.highlight}</p>
                <dl className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                    <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
                      CCPL Runs
                    </dt>
                    <dd className="mt-2 text-xl font-semibold text-white">
                      {player.leagues.corpusChristi.runs}
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                    <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
                      CCPL Wickets
                    </dt>
                    <dd className="mt-2 text-xl font-semibold text-white">
                      {player.leagues.corpusChristi.wickets ?? "—"}
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                    <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
                      Spotlight
                    </dt>
                    <dd className="mt-2 text-sm text-amber-200">
                      {player.spotlight.value}{" "}
                      <span className="text-[0.7rem] text-slate-300">
                        {player.spotlight.label}
                      </span>
                    </dd>
                  </div>
                </dl>
                <Link
                  href={`/squad#${player.slug}`}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-amber-200 transition hover:text-amber-100"
                >
                  Profile breakdown →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {sanAntonioLeaders.length > 0 ? (
        <section className="space-y-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                San Antonio League Fire
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Form that keeps Islanders on top downtown.
              </h2>
            </div>
            <Link
              href="/gallery#san-antonio"
              className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 transition hover:text-amber-300"
            >
              See San Antonio highlights →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sanAntonioLeaders.map((player) => (
              <article
                key={player.slug}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                  {player.role}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {player.name}
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  {player.leagues.sanAntonio?.highlight ??
                    player.highlight}
                </p>
                <dl className="mt-4 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                    <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
                      San Antonio Runs
                    </dt>
                    <dd className="mt-2 text-xl font-semibold text-white">
                      {player.leagues.sanAntonio?.runs}
                    </dd>
                  </div>
                  {typeof player.leagues.sanAntonio?.wickets === "number" ? (
                    <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                      <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
                        San Antonio Wickets
                      </dt>
                      <dd className="mt-2 text-xl font-semibold text-white">
                        {player.leagues.sanAntonio?.wickets}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
              Matchday Infrastructure
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Everything required for peak performance—funded and ready.
            </h2>
          </div>
          <Link
            href="/sponsors"
            className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 transition hover:text-amber-300"
          >
            Sponsor deep dive →
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {matchdaySupport.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                {item.description}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {item.highlights.map((highlight) => (
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
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {sponsorProfiles.map((sponsor) => (
            <article
              key={sponsor.name}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6"
            >
              <div className="absolute inset-0 opacity-10">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
                    {sponsor.title}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {sponsor.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-200">
                  {sponsor.contribution}
                </p>
                <ul className="space-y-3 text-sm text-slate-300">
                  {sponsor.focusAreas.map((focus) => (
                    <li
                      key={focus}
                      className="rounded-2xl border border-white/5 bg-slate-950/60 px-4 py-3"
                    >
                      {focus}
                    </li>
                  ))}
                </ul>
                <p className="text-sm italic text-amber-100">
                  {sponsor.quote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
