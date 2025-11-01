import Image from "next/image";
import { leadership, photoDistribution } from "@/data/site";

export const metadata = {
  title: "Islanders Cricket Leadership",
  description:
    "Meet the Islanders leadership duo guiding strategy, mentorship, and championship aspirations.",
};

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Leadership Spotlight
            </p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Visionaries Steering Islanders Cricket
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
              Islanders Cricket thrives on leaders who blend tactical nous with
              deep community ties. Every milestone is anchored by intentional
              mentorship, precise match-day calls, and a relentless pursuit of
              championship standards.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl space-y-12 px-6">
          {leadership.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
                {/* Leader Image */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-br from-emerald-50 to-gray-100 lg:h-auto">
                  <Image
                    src={
                      leader.image ?? "/media/events/elton-chigumbura-akhil.jpeg"
                    }
                    alt={`${leader.name} leading Islanders Cricket`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Leader Info */}
                <div className="space-y-6 p-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                      {leader.title}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-gray-900">
                      {leader.name}
                    </h2>
                    <p className="mt-2 text-base font-semibold uppercase tracking-wide text-amber-600">
                      {leader.distinction}
                    </p>
                  </div>

                  <p className="text-base leading-relaxed text-gray-700">
                    {leader.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Key Contributions
                    </h3>
                    <ul className="space-y-3">
                      {leader.spotlight.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700"
                        >
                          <span className="text-emerald-600">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Photo Coverage Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                Coverage Through The Lens
              </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Leadership presence across photo narratives
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {photoDistribution.map((item) => (
                <div
                  key={item.category}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                    {item.category}
                  </p>
                  <p className="mt-3 text-4xl font-bold text-gray-900">
                    {item.count}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-600">
              Islanders leadership blends world-class hospitality, analytics, and
              mentorship—often alongside international great Elton Chigumbura—to
              keep the squad performing like a pro franchise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
