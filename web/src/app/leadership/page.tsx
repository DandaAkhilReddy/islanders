import Image from "next/image";
import { leadership as playersLeadership } from "@/data/players";
import { photoDistribution } from "@/data/site";

export const metadata = {
  title: "Islanders Cricket Leadership",
  description:
    "Meet the Islanders leadership guiding strategy, mentorship, and championship aspirations.",
};

// Define leadership structure in exact order specified
const leadershipStructure = [
  {
    emoji: "🏏",
    position: "Principal & Chief Mentor",
    name: playersLeadership.principal,
    image: "/media/players/vishnu-reddy.jpeg",
  },
  {
    emoji: "🎯",
    position: "Director & Mentor",
    name: playersLeadership.director,
    image: "/media/events/runnerup-presentation.jpeg",
  },
  {
    emoji: "🏆",
    position: "Captain",
    name: playersLeadership.captain,
    image: "/media/players/akhil-reddy-danda.jpeg",
  },
  {
    emoji: "💪",
    position: "Vice Captain",
    name: playersLeadership.viceCaptain,
    image: "/media/players/faizan-mohammad.jpeg",
  },
  {
    emoji: "🤝",
    position: "Associate Vice Captain",
    name: playersLeadership.associateVC,
    image: "/media/players/nithesh-y.jpeg",
  },
  {
    emoji: "⚙️",
    position: "Quality Directors",
    name: playersLeadership.qualityDirectors.join(" & "),
    image: "/media/players/dinesh-reddy-kandari.jpeg",
  },
];

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
              Islanders Cricket Leadership
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

      {/* Leadership Structure Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Leadership Structure
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our team leadership hierarchy and roles
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadershipStructure.map((leader, index) => (
              <div
                key={leader.position}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                {/* Leader Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-50 to-gray-100">
                  <Image
                    src={leader.image}
                    alt={`${leader.name} - ${leader.position}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Leader Info */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-2xl">{leader.emoji}</span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                      {leader.position}
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {leader.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
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
