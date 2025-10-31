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
          Netlify hosting keeps the site always-on; GitHub maintains the living
          playbook. Use the channels below or drop a note via the Netlify-ready
          form to coordinate fixtures, partnerships, and press coverage.
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
        <form
          name="islanders-contact"
          method="POST"
          data-netlify="true"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="islanders-contact" />
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Full Name
              <input
                type="text"
                name="name"
                required
                className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Email
              <input
                type="email"
                name="email"
                required
                className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-slate-200">
            Message
            <textarea
              name="message"
              required
              rows={4}
              className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
