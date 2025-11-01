import Image from "next/image";
import { players } from "@/data/players";

export const metadata = {
  title: "Islanders Cricket Squad Profiles",
  description:
    "Deep-dive player profiles featuring Corpus Christi and San Antonio league statistics, roles, and spotlight performances.",
};

export default function SquadPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24 pt-16">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
          Full Squad Blueprint
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Player profiles with Corpus Christi &amp; San Antonio scorecards.
        </h1>
        <p className="max-w-3xl text-base text-slate-200">
          Every Islanders player carries a dedicated stats brief—anchored on
          Corpus Christi Premier League contributions, with San Antonio numbers
          highlighted separately. Tap into top performer call-outs to see who
          delivered the biggest scores, wicket hauls, or clutch moments.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        {players.map((player) => {
          const corpus = player.leagues.corpusChristi;
          const sanAntonio = player.leagues.sanAntonio;

          return (
            <article
              key={player.slug}
              id={player.slug}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6"
            >
              {player.image ? (
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="relative flex flex-col gap-6 md:flex-row">
                <div className="md:w-40">
                  {player.image ? (
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src={player.image}
                        alt={`${player.name} portrait`}
                        fill
                        sizes="(max-width: 768px) 60vw, 200px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border border-dashed border-white/10 text-xs text-slate-400">
                      Photo syncing soon
                    </div>
                  )}
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">
                      {player.role}
                    </p>
                    <h2 className="text-2xl font-semibold text-white">
                      {player.name}
                    </h2>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                      {player.dominantSkill}
                    </p>
                  </div>
                  <p className="text-sm text-slate-300">{player.highlight}</p>
                  <div className="flex flex-wrap gap-2">
                    {player.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-amber-200">
                        Corpus Christi Premier League
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-200">
                        <div>
                          <p className="text-xs text-slate-400">Runs</p>
                          <p className="text-lg font-semibold text-white">
                            {typeof corpus.runs === "number"
                              ? corpus.runs
                              : "—"}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">Wickets</p>
                          <p className="text-lg font-semibold text-white">
                            {typeof corpus.wickets === "number"
                              ? corpus.wickets
                              : "—"}
                          </p>
                        </div>
                        {typeof corpus.strikeRate === "number" ? (
                          <div>
                            <p className="text-xs text-slate-400">
                              Strike Rate
                            </p>
                            <p className="text-lg font-semibold text-white">
                              {corpus.strikeRate}
                            </p>
                          </div>
                        ) : null}
                        {typeof corpus.economy === "number" ? (
                          <div>
                            <p className="text-xs text-slate-400">Economy</p>
                            <p className="text-lg font-semibold text-white">
                              {corpus.economy}
                            </p>
                          </div>
                        ) : null}
                      </div>
                      <p className="mt-3 text-xs text-slate-300">
                        {corpus.highlight ?? corpus.note ?? ""}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-blue-200">
                        San Antonio League
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-200">
                        <div>
                          <p className="text-xs text-slate-400">Runs</p>
                          <p className="text-lg font-semibold text-white">
                            {typeof sanAntonio?.runs === "number"
                              ? sanAntonio.runs
                              : "—"}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">Wickets</p>
                          <p className="text-lg font-semibold text-white">
                            {typeof sanAntonio?.wickets === "number"
                              ? sanAntonio.wickets
                              : "—"}
                          </p>
                        </div>
                        {typeof sanAntonio?.strikeRate === "number" ? (
                          <div>
                            <p className="text-xs text-slate-400">
                              Strike Rate
                            </p>
                            <p className="text-lg font-semibold text-white">
                              {sanAntonio?.strikeRate}
                            </p>
                          </div>
                        ) : null}
                        {typeof sanAntonio?.economy === "number" ? (
                          <div>
                            <p className="text-xs text-slate-400">Economy</p>
                            <p className="text-lg font-semibold text-white">
                              {sanAntonio?.economy}
                            </p>
                          </div>
                        ) : null}
                      </div>
                      <p className="mt-3 text-xs text-slate-300">
                        {sanAntonio?.highlight ?? sanAntonio?.note ?? ""}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-100">
                      Top Performer Highlight
                    </p>
                    <p className="mt-1 font-semibold text-white">
                      {player.spotlight.value}{" "}
                      <span className="font-normal text-slate-200">
                        — {player.spotlight.label}
                      </span>
                    </p>
                    {player.spotlight.context ? (
                      <p className="mt-2 text-xs text-slate-200">
                        {player.spotlight.context}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
