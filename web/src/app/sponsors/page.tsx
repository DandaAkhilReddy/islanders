import Image from "next/image";
import { matchdaySupport, sponsorProfiles } from "@/data/site";

export const metadata = {
  title: "Islanders Cricket Sponsors & Supporters",
  description:
    "Recognising Dr. Vishnu V. Reddy, Dr. Veena Reddy, and the investment powering Islanders Cricket transport, nutrition, and equipment.",
};

export default function SponsorsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24 pt-16">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
          Powered By Community
        </p>
        <h1 className="text-4xl font-semibold text-white">
          $50,000+ invested to move Islanders Cricket like a pro franchise.
        </h1>
        <p className="max-w-3xl text-base text-slate-200">
          The Islanders innings extends beyond the boundary. Doctors Vishnu V.
          Reddy and Veena Reddy underwrite transport, meals, equipment, and
          mentorship so every player focuses on winning Corpus Christi and San
          Antonio titles. This page showcases the people, resources, and love
          behind the crest.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        {sponsorProfiles.map((sponsor) => (
          <article
            key={sponsor.name}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6"
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
                <h2 className="text-2xl font-semibold text-white">
                  {sponsor.name}
                </h2>
              </div>
              <p className="text-sm text-slate-200">{sponsor.contribution}</p>
              <ul className="space-y-3 text-sm text-slate-300">
                {sponsor.focusAreas.map((focus) => (
                  <li
                    key={focus}
                    className="rounded-2xl border border-white/5 bg-slate-900/80 px-4 py-3"
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
      </section>

      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
          Matchday Provisioning
        </p>
        <h2 className="text-3xl font-semibold text-white">
          Transport, nutrition, and equipment handled end-to-end.
        </h2>
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

      <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
              Recognition Board
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Islanders gratitude wall.
            </h2>
            <p className="text-sm text-slate-300">
              Veena akka and Niharika akka maintain a full sponsor wall that
              travels to Corpus Christi and San Antonio venues. Every donor,
              family member, and supporter is acknowledged before the first ball
              is bowled.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Special thanks to Dr. Veena Reddy for hospitality &amp; care.</li>
              <li>• Elton Chigumbura&apos;s mentorship camps hosted quarterly.</li>
              <li>• Transportation crews recognised for safe arrivals every week.</li>
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80">
            <Image
              src="/media/sponsors/sponsor-recognition.png"
              alt="Islanders Cricket Club sponsor recognition board"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
