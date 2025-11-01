import Image from "next/image";
import { leadership, photoDistribution } from "@/data/site";

export const metadata = {
  title: "Islanders Cricket Leadership",
  description:
    "Meet the Islanders leadership duo guiding strategy, mentorship, and championship aspirations.",
};

export default function LeadershipPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 pb-24 pt-16">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
          Leadership Spotlight
        </p>
        <h1 className="text-4xl font-semibold text-white">
          The visionaries steering Islanders Cricket.
        </h1>
        <p className="max-w-3xl text-base text-slate-200">
          Islanders Cricket thrives on leaders who blend tactical nous with deep
          community ties. Every milestone is anchored by intentional mentorship,
          precise match-day calls, and a relentless pursuit of championship
          standards.
        </p>
      </section>

      <section className="space-y-8">
        {leadership.map((leader) => (
          <article
            key={leader.name}
            className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/70 p-8 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                {leader.title}
              </p>
              <h2 className="text-2xl font-semibold text-white">{leader.name}</h2>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                {leader.distinction}
              </p>
              <p className="text-sm text-slate-200">{leader.description}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {leader.spotlight.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/5 bg-slate-900/80 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                <Image
                  src={leader.image ?? "/media/events/elton-chigumbura-akhil.jpeg"}
                  alt={`${leader.name} leading Islanders Cricket`}
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-400">
                Islanders leadership blends world-class hospitality, analytics,
                and mentorship—often alongside international great Elton
                Chigumbura—to keep the squad performing like a pro franchise.
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              Coverage Through The Lens
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Leadership presence across photo narratives.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {photoDistribution.map((item) => (
              <div
                key={item.category}
                className="rounded-2xl border border-white/5 bg-slate-900/80 px-5 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                  {item.category}
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {item.count}
                </p>
                <p className="mt-2 text-xs text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
