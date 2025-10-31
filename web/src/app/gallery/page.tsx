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
