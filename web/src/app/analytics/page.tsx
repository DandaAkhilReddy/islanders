import Link from "next/link";
import {
  analyticsLayers,
  metrics,
  siteIdentity,
} from "@/data/site";

export const metadata = {
  title: "Islanders Cricket Analytics Engine",
  description:
    "Technical workflows powering Islanders photo intelligence, performance dashboards, and rapid reporting.",
};

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 pb-24 pt-16" id="engine">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
          Analytics Engine
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Photographic intelligence engineered for{" "}
          <span className="prose-gradient">{siteIdentity.name}</span>.
        </h1>
        <p className="max-w-3xl text-base text-slate-200">
          The Islanders analytics pipeline transforms raw media into insights in
          minutes. Layered automation ensures leadership appearances are
          captured, achievements are celebrated, and every stakeholder has the
          data they need ahead of the next fixture.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {analyticsLayers.map((layer) => (
          <article
            key={layer.layer}
            className="rounded-3xl border border-white/10 bg-slate-950/70 p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              {layer.layer}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {layer.focus.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/5 bg-slate-900/80 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/70 p-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
              Operations
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Analytics runtime and deployment.
            </h2>
          </div>
          <p className="text-sm text-slate-200">
            The `islanders_cricket_analytics.py` engine catalogs images,
            extracts text, and enriches metadata for instant reporting. Pair it
            with serverless Netlify builds or schedule cron-based refreshes to
            ensure the site reflects the latest tournaments.
          </p>
          <ol className="list-decimal space-y-3 pl-5 text-sm text-slate-300">
            <li>Drop new match photos into the ingestion directory.</li>
            <li>Run the analytics engine to update JSON/markdown exports.</li>
            <li>Trigger a Netlify build to publish refreshed dashboards.</li>
            <li>Push commits to GitHub for transparent season journaling.</li>
          </ol>
          <Link
            href="https://docs.netlify.com/configure-builds/get-started/"
            className="inline-flex items-center text-sm font-semibold text-amber-200 transition hover:text-amber-100"
          >
            Configure Netlify build hooks →
          </Link>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Production Metrics
            </p>
            <dl className="mt-5 space-y-4">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-xs uppercase tracking-[0.35em] text-amber-200">
                    {metric.label}
                  </dt>
                  <dd className="text-2xl font-semibold text-white">
                    {metric.value}
                  </dd>
                  <p className="text-xs text-slate-300">{metric.context}</p>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-2xl border border-white/5 bg-slate-900/80 p-5 text-xs text-slate-300">
            <p className="font-semibold uppercase tracking-[0.35em] text-amber-200">
              Build Checklist
            </p>
            <ul className="mt-2 space-y-2">
              <li>✅ Optimize images (webp/avif) prior to publish.</li>
              <li>✅ Validate alt text coverage for accessibility.</li>
              <li>✅ Log analytics refresh timestamps in README.</li>
              <li>✅ Tag releases by tournament milestone.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
