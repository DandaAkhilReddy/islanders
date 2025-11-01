import Image from "next/image";
import Link from "next/link";
import { specialMoments } from "@/data/site";

export const metadata = {
  title: "Islanders Cricket Media Gallery",
  description:
    "Curated visuals capturing Islanders cricket victories, culture, and international connections.",
};

const downloadables = [
  {
    label: "Photo Contact Sheet (Hi-Res PNG)",
    path: "/media/photos-contact-sheet.png",
    note: "42-image grid with category labels, ideal for scouting reports and presentations.",
  },
  {
    label: "Executive Summary (HTML)",
    path: "/media/executive-summary.html",
    note: "Web-ready recap of achievements, leadership, and analytics metrics.",
  },
];

const corpusChristiShots = [
  {
    src: "/media/events/ccpl-2025-team.jpeg",
    alt: "Islanders CCPL 2025 squad with Dr. Vishnu Reddy holding the runner-up trophy",
    caption: "CCPL 2025 Finals Night",
    description:
      "Dr. Vishnu V. Reddy with Akhil Reddy Danda and the entire Islanders squad after securing the Corpus Christi Premier League runner-up finish.",
  },
  {
    src: "/media/events/ccpl-trophy-ceremony.jpeg",
    alt: "Islanders cricketers lifting the Corpus Christi Premier League trophy",
    caption: "Trophy Presentation",
    description:
      "Akhil Reddy Danda and Faizan Mohammad hoist the CCPL silverware with the squad rallying behind them.",
  },
  {
    src: "/media/events/runnerup-presentation.jpeg",
    alt: "Akhil Reddy Danda receiving the runner-up medal from Dr. Vishnu Reddy",
    caption: "Medal Hand-Off",
    description:
      "Mentor Dr. Vishnu Reddy honours captain Akhil with the CCPL medal—cementing the leadership bond.",
  },
  {
    src: "/media/events/century-celebration.jpeg",
    alt: "Islanders celebrating a century with teammates embracing on the field",
    caption: "Century Roar",
    description:
      "Harshith Sai and Faizan embrace after the century milestone that swung CCPL momentum.",
  },
];

const sanAntonioShots = [
  {
    src: "/media/events/hero-san-antonio-team.jpeg",
    alt: "Islanders squad celebrating in downtown San Antonio at night",
    caption: "Downtown San Antonio Statement",
    description:
      "Full Islanders core with Veena akka and Niharika akka celebrating atop the San Antonio standings.",
  },
  {
    src: "/media/events/team-gathering-san-antonio.jpeg",
    alt: "Team huddle in San Antonio league gear before the match",
    caption: "League Leaders Huddle",
    description:
      "Pre-match team talk before going 5-0 in the San Antonio League charge.",
  },
  {
    src: "/media/events/pitch-walkthrough.jpeg",
    alt: "Akhil Reddy Danda and Dr. Vishnu Reddy walking the pitch before a game",
    caption: "Pitch Walkthrough",
    description:
      "Akhil and Dr. Vishnu inspect the strip minutes before tossing up in San Antonio.",
  },
];

const communityShots = [
  {
    src: "/media/events/elton-chigumbura-akhil.jpeg",
    alt: "Akhil Reddy Danda with Elton Chigumbura during mentorship session",
    caption: "Elton Chigumbura Mentorship",
    description:
      "Former Zimbabwe captain Elton Chigumbura strategising batting drills with Akhil.",
  },
  {
    src: "/media/events/elton-chigumbura-sampath.jpeg",
    alt: "Sampath Reddy receiving coaching tips from Elton Chigumbura",
    caption: "Elite Coaching Clinics",
    description:
      "Sampath Reddy fine-tuning spin control during the Islanders elite coaching camp.",
  },
  {
    src: "/media/sponsors/sponsor-recognition.png",
    alt: "Sponsor recognition board highlighting Islanders supporters",
    caption: "Sponsor Gratitude Wall",
    description:
      "Veena akka curates a travelling wall naming every sponsor, donor, and family that powers the Islanders.",
  },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 pb-24 pt-16">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
          Visual Archive
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Islanders moments that define the season.
        </h1>
        <p className="max-w-3xl text-base text-slate-200">
          Every photo has been tagged, narrated, and aligned to the Islanders
          story arcs—trophies, award ceremonies, action highlights, and the
          social glue that keeps the squad united.
        </p>
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <Image
            src="/media/photo-category-analysis.png"
            alt="Islanders photo category dashboard"
            width={900}
            height={900}
            className="w-full rounded-2xl border border-white/10 object-cover"
            priority
          />
          <p className="text-xs text-slate-400">
            Charted breakdown of the 42-photo archive spanning celebrations,
            individual awards, and electrifying action.
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              Story Pillars
            </p>
            <ul className="mt-3 space-y-3 text-sm text-slate-300">
              {specialMoments.map((moment) => (
                <li
                  key={moment.title}
                  className="rounded-2xl border border-white/5 bg-slate-900/80 px-5 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                    {moment.title}
                  </p>
                  <p className="mt-2">{moment.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8"
        id="corpus-christi"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
            Corpus Christi League
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Finals journey and silverware celebrations.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Trophy night stories featuring the CCPL runner-up squad, medal
            ceremonies, and milestone centuries.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {corpusChristiShots.map((shot) => (
            <figure
              key={shot.src}
              className="space-y-3 rounded-3xl border border-white/10 bg-slate-900/70 p-4"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption>
                <p className="text-sm font-semibold text-white">
                  {shot.caption}
                </p>
                <p className="text-xs text-slate-300">{shot.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8"
        id="san-antonio"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
            San Antonio League
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Undefeated streaks and cityscape celebrations.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Veena akka ensures every matchday is powered with transport and
            hospitality while the squad keeps the win column climbing.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sanAntonioShots.map((shot) => (
            <figure
              key={shot.src}
              className="space-y-3 rounded-3xl border border-white/10 bg-slate-900/70 p-4"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption>
                <p className="text-sm font-semibold text-white">
                  {shot.caption}
                </p>
                <p className="text-xs text-slate-300">{shot.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8"
        id="community"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">
            Mentorship &amp; Community
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Coaching connections and sponsor gratitude.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            International mentorship with Elton Chigumbura and the Islanders
            gratitude wall honouring every sponsor and family.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {communityShots.map((shot) => (
            <figure
              key={shot.src}
              className="space-y-3 rounded-3xl border border-white/10 bg-slate-900/70 p-4"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption>
                <p className="text-sm font-semibold text-white">
                  {shot.caption}
                </p>
                <p className="text-xs text-slate-300">{shot.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-8" id="executive-summary">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4 lg:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
              Downloadables
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Ready-to-share media and reports.
            </h2>
            <p className="text-sm text-slate-300">
              Deploy these assets across press kits, sponsor decks, and social
              recaps. Netlify hosting ensures everything stays versioned and
              accessible directly from GitHub.
            </p>
          </div>
          <ul className="grid gap-4">
            {downloadables.map((item) => (
              <li
                key={item.path}
                className="rounded-2xl border border-white/5 bg-slate-900/80 px-5 py-4"
              >
                <Link
                  href={item.path}
                  className="text-sm font-semibold text-amber-200 transition hover:text-amber-100"
                >
                  {item.label}
                </Link>
                <p className="mt-1 text-xs text-slate-400">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
