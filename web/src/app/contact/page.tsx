import Link from "next/link";
import { contactChannels } from "@/data/site";

export const metadata = {
  title: "Connect with Islanders Cricket",
  description:
    "Contact leadership, partnerships, and analytics teams for Islanders Cricket Club.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-16 px-6 pb-24 pt-16">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
          Stay Connected
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Coordinate the next Islanders milestone.
        </h1>
        <p className="max-w-3xl text-base text-slate-200">
          Choose the channel that best matches your request and we&apos;ll route
          it straight to the right leader. Prefer a direct call? Drop an email
          from your client and we&apos;ll respond within one business day.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {contactChannels.map((channel) => (
          <div
            key={channel.email}
            className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
              {channel.label}
            </p>
            <h2 className="mt-3 text-lg font-semibold text-white">
              {channel.person}
            </h2>
            <a
              href={`mailto:${channel.email}`}
              className="mt-2 inline-block text-sm font-semibold text-sky-300 transition hover:text-sky-200"
            >
              {channel.email}
            </a>
            <p className="mt-3 text-xs text-slate-300">{channel.note}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            Prefer a message template?
          </h2>
          <p className="text-sm text-slate-300">
            Use your email client with one of the quick-start drafts below. Each
            link opens a pre-filled message so you can focus on the details.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <Link
              className="rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 text-sm text-slate-200 transition hover:border-amber-300 hover:text-amber-200"
              href="mailto:leadership@islanderscricket.com?subject=Islanders%20Fixture%20Coordination&body=Hello%20Islanders%20Leadership%2C%0D%0A%0D%0AWe%27d%20like%20to%20coordinate..."
            >
              Leadership Coordination Template
            </Link>
            <Link
              className="rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 text-sm text-slate-200 transition hover:border-amber-300 hover:text-amber-200"
              href="mailto:analytics@islanderscricket.com?subject=Analytics%20Request&body=Hello%20Analytics%20Team%2C%0D%0A%0D%0APlease%20share..."
            >
              Analytics Insight Template
            </Link>
          </div>
          <p className="text-xs text-slate-400">
            Need another template? Ping{" "}
            <a
              href="mailto:mentor@islanderscricket.com"
              className="font-semibold text-sky-300 transition hover:text-sky-200"
            >
              mentor@islanderscricket.com
            </a>{" "}
            and we&apos;ll tailor one for you.
          </p>
        </div>
      </section>
    </div>
  );
}
