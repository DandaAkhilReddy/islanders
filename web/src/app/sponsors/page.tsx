import Image from "next/image";
import { matchdaySupport, sponsorProfiles } from "@/data/site";

export const metadata = {
  title: "Islanders Cricket Sponsors & Supporters",
  description:
    "Recognising Dr. Vishnu V. Reddy, Dr. Veena Reddy, and the investment powering Islanders Cricket transport, nutrition, and equipment.",
};

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Powered By Community
            </p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Sponsors & Supporters
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
              From the shores of Corpus Christi, Texas, we are proud to be the only
              island-based cricket team — Islanders by name, Islanders by spirit.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600">
              The Islanders innings extends beyond the boundary. Doctors Vishnu V.
              Reddy and Veena Reddy have invested $50,000+ to underwrite transport,
              meals, equipment, and mentorship so every player focuses on winning
              Corpus Christi and San Antonio titles.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Sponsor - Dr. Vishnu Reddy Highlighted */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border-2 border-emerald-600 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-8 shadow-xl">
            <div className="mb-4 text-center">
              <div className="inline-block rounded-full bg-emerald-600 px-4 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-md">
                Principal Sponsor
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
                <div className="relative h-80 overflow-hidden rounded-xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-100 to-white lg:h-auto">
                  <Image
                    src={sponsorProfiles[0].image}
                    alt={sponsorProfiles[0].name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-contain p-6"
                  />
                </div>
                <div className="space-y-6 p-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                      {sponsorProfiles[0].title}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-gray-900">
                      {sponsorProfiles[0].name}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700">
                    {sponsorProfiles[0].contribution}
                  </p>
                  <div className="space-y-3">
                    {sponsorProfiles[0].focusAreas.map((focus) => (
                      <div
                        key={focus}
                        className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-white p-4"
                      >
                        <span className="text-emerald-600">✓</span>
                        <span className="text-base text-gray-700">{focus}</span>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-4 border-emerald-600 bg-emerald-50 p-4 italic text-gray-800">
                    "{sponsorProfiles[0].quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Veena Reddy */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
              <div className="relative h-80 bg-gradient-to-br from-amber-50 to-white lg:h-auto">
                <Image
                  src={sponsorProfiles[1].image}
                  alt={sponsorProfiles[1].name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-contain p-6"
                />
              </div>
              <div className="space-y-6 p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                    {sponsorProfiles[1].title}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    {sponsorProfiles[1].name}
                  </h2>
                </div>
                <p className="text-lg text-gray-700">
                  {sponsorProfiles[1].contribution}
                </p>
                <div className="space-y-3">
                  {sponsorProfiles[1].focusAreas.map((focus) => (
                    <div
                      key={focus}
                      className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4"
                    >
                      <span className="text-amber-600">✓</span>
                      <span className="text-base text-gray-700">{focus}</span>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-4 border-amber-600 bg-amber-50 p-4 italic text-gray-800">
                  "{sponsorProfiles[1].quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matchday Support */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Matchday Provisioning
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Transport, nutrition, and equipment handled end-to-end
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {matchdaySupport.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-base text-gray-700">
                  {item.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-700"
                    >
                      <span className="text-emerald-600">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Board */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6 p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                    Recognition Board
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    Islanders Gratitude Wall
                  </h2>
                </div>
                <p className="text-base text-gray-700">
                  Veena akka and Niharika akka maintain a full sponsor wall that
                  travels to Corpus Christi and San Antonio venues. Every donor,
                  family member, and supporter is acknowledged before the first ball
                  is bowled.
                </p>
                <ul className="space-y-3 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    Special thanks to Dr. Veena Reddy for hospitality & care
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    Elton Chigumbura's mentorship camps hosted quarterly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    Transportation crews recognised for safe arrivals every week
                  </li>
                </ul>
              </div>
              <div className="relative h-96 overflow-hidden rounded-xl border border-gray-200 bg-gray-100 lg:h-auto">
                <Image
                  src="/media/sponsors/sponsor-recognition.png"
                  alt="Islanders Cricket Club sponsor recognition board"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
