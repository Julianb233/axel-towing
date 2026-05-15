import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import { getLatestSnapshot, listSnapshots, computeDelta } from "../../lib/convex";

// Re-fetch each request — Convex data is cron-fed daily, no point caching forever
export const revalidate = 300;

const CLIENT_SLUG = "axle-towing";

function fmt(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

function deltaLabel(value: number, daysApart: number, units = ""): string {
  if (value === 0) return `unchanged over ${daysApart}d`;
  const sign = value > 0 ? "+" : "";
  return `${sign}${value}${units} over ${daysApart}d`;
}

function deltaColor(value: number, lowerIsBetter = false): string {
  if (value === 0) return "text-gray-500";
  const isImproving = lowerIsBetter ? value < 0 : value > 0;
  return isImproving ? "text-emerald-600" : "text-rose-600";
}

const INTENT_LABEL: Record<string, string> = {
  N: "Navigational",
  I: "Informational",
  C: "Commercial",
  T: "Transactional",
};

export default async function SeoPage() {
  let latest = null;
  let history: Awaited<ReturnType<typeof listSnapshots>> = [];
  let fetchError: string | null = null;

  try {
    [latest, history] = await Promise.all([
      getLatestSnapshot(CLIENT_SLUG),
      listSnapshots(CLIENT_SLUG, 30),
    ]);
  } catch (err) {
    fetchError = err instanceof Error ? err.message : String(err);
  }

  const prior = history.length > 1 ? history[1] : undefined;
  const delta = latest && prior ? computeDelta(latest, prior) : null;

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="SEO Performance"
        subtitle="Daily SEMrush snapshot — Authority Score, organic traffic, keywords, backlinks, AI visibility, and competitor benchmarks. Updated every morning at 06:30 PT."
      />

      {fetchError && (
        <div className="mt-8 rounded-xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-900">
          <p className="font-semibold mb-1">Couldn&apos;t load SEMrush snapshot</p>
          <p className="font-mono text-xs">{fetchError}</p>
        </div>
      )}

      {!fetchError && !latest && (
        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
          <p className="font-semibold mb-2">First snapshot still pending</p>
          <p className="text-sm leading-relaxed">
            The daily cron runs at 06:30 PT (13:30 UTC). The first run lands tomorrow morning.
            Once data arrives this page will show Authority Score, organic keyword rankings,
            traffic estimates, backlinks, AI visibility metrics, and competitor benchmarks —
            all live from the SEMrush dashboard via the Convex data layer.
          </p>
        </div>
      )}

      {latest && (
        <>
          <p className="mt-2 text-xs text-gray-500">
            Snapshot date: <span className="font-mono">{latest.date}</span> &nbsp;·&nbsp;
            Domain: <span className="font-mono">{latest.domain}</span> &nbsp;·&nbsp;
            Source: <span className="font-mono">{latest.source}</span>
            {history.length > 1 && (
              <> &nbsp;·&nbsp; History: {history.length} snapshots</>
            )}
          </p>

          {/* ── Headline metrics ─────────────────────────────────── */}
          <section className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Authority Score",
                value: latest.overview.authorityScore,
                suffix: "/100",
                deltaValue: delta?.authorityScore ?? 0,
                lowerIsBetter: false,
              },
              {
                label: "Organic Keywords",
                value: latest.overview.organicKeywords,
                deltaValue: delta?.organicKeywords ?? 0,
                lowerIsBetter: false,
              },
              {
                label: "Organic Traffic / mo",
                value: latest.overview.organicTraffic,
                deltaValue: delta?.organicTraffic ?? 0,
                lowerIsBetter: false,
              },
              {
                label: "Backlinks",
                value: latest.overview.backlinks,
                deltaValue: delta?.backlinks ?? 0,
                lowerIsBetter: false,
              },
            ].map((card) => (
              <div key={card.label} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                  {card.label}
                </p>
                <p className="text-3xl font-bold mt-2 text-gray-900">
                  {fmt(card.value)}
                  {card.suffix && <span className="text-base text-gray-400 font-normal">{card.suffix}</span>}
                </p>
                {delta && (
                  <p className={`text-xs mt-1 font-mono ${deltaColor(card.deltaValue, card.lowerIsBetter)}`}>
                    {deltaLabel(card.deltaValue, delta.daysApart)}
                  </p>
                )}
              </div>
            ))}
          </section>

          {/* ── Secondary metrics ────────────────────────────────── */}
          <section className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Referring Domains</p>
              <p className="text-2xl font-bold mt-2 text-gray-900">{fmt(latest.overview.referringDomains)}</p>
              {delta && (
                <p className={`text-xs mt-1 font-mono ${deltaColor(delta.referringDomains)}`}>
                  {deltaLabel(delta.referringDomains, delta.daysApart)}
                </p>
              )}
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">AI Visibility — Mentions</p>
              <p className="text-2xl font-bold mt-2 text-gray-900">{fmt(latest.overview.aiVisibilityMentions)}</p>
              <p className="text-xs mt-1 text-gray-500">{fmt(latest.overview.aiVisibilityCitedPages)} cited pages</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Follow / NoFollow Links</p>
              <p className="text-2xl font-bold mt-2 text-gray-900">
                {fmt(latest.backlinks.follow)}
                <span className="text-base text-gray-400 font-normal"> / {fmt(latest.backlinks.nofollow)}</span>
              </p>
              <p className="text-xs mt-1 text-gray-500">
                {Math.round((latest.backlinks.follow / Math.max(1, latest.backlinks.follow + latest.backlinks.nofollow)) * 100)}% follow
              </p>
            </div>
          </section>

          {/* ── Top organic keywords ─────────────────────────────── */}
          {latest.keywords.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Top Organic Keywords</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-600 text-left text-xs uppercase tracking-wide">
                    <tr>
                      <th className="p-3">Keyword</th>
                      <th className="p-3">Intent</th>
                      <th className="p-3 text-right">Position</th>
                      <th className="p-3 text-right">Volume</th>
                      <th className="p-3 text-right">CPC (USD)</th>
                      <th className="p-3 text-right">Traffic %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {latest.keywords.map((k, i) => (
                      <tr key={`${k.keyword}-${i}`} className="hover:bg-gray-50">
                        <td className="p-3 font-medium text-gray-900">{k.keyword}</td>
                        <td className="p-3 text-gray-600">{INTENT_LABEL[k.intent] ?? k.intent}</td>
                        <td className="p-3 text-right font-mono">
                          <span className={k.position <= 3 ? "text-emerald-700 font-bold" : k.position <= 10 ? "text-blue-700" : "text-gray-700"}>
                            {k.position || "—"}
                          </span>
                        </td>
                        <td className="p-3 text-right font-mono text-gray-700">{fmt(k.volume)}</td>
                        <td className="p-3 text-right font-mono text-gray-500">${k.cpc.toFixed(2)}</td>
                        <td className="p-3 text-right font-mono text-gray-700">{k.traffic.toFixed(1)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500 italic">
                SEMrush free-tier shows the top ~5-10 keywords on the overview page. Phase 2
                (GSC integration, AI-9522) will add the full top-100 with our actual Google
                impressions, clicks, and average position.
              </p>
            </section>
          )}

          {/* ── Competitors ──────────────────────────────────────── */}
          {latest.competitors.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Main Organic Competitors</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-600 text-left text-xs uppercase tracking-wide">
                    <tr>
                      <th className="p-3">Domain</th>
                      <th className="p-3 text-right">Authority Score</th>
                      <th className="p-3 text-right">Keywords</th>
                      <th className="p-3 text-right">Traffic / mo</th>
                      <th className="p-3 text-right">Backlinks</th>
                      <th className="p-3 text-right">Ref. Domains</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {/* Render Axle's row first as the reference baseline */}
                    <tr className="bg-blue-50/50 font-semibold text-blue-900">
                      <td className="p-3">{latest.domain} <span className="text-xs font-normal text-blue-700">(you)</span></td>
                      <td className="p-3 text-right font-mono">{latest.overview.authorityScore}</td>
                      <td className="p-3 text-right font-mono">{fmt(latest.overview.organicKeywords)}</td>
                      <td className="p-3 text-right font-mono">{fmt(latest.overview.organicTraffic)}</td>
                      <td className="p-3 text-right font-mono">{fmt(latest.overview.backlinks)}</td>
                      <td className="p-3 text-right font-mono">{fmt(latest.overview.referringDomains)}</td>
                    </tr>
                    {latest.competitors.map((c) => (
                      <tr key={c.domain} className="hover:bg-gray-50">
                        <td className="p-3 font-medium text-gray-900">{c.domain}</td>
                        <td className="p-3 text-right font-mono">{c.authorityScore || "—"}</td>
                        <td className="p-3 text-right font-mono">{c.organicKeywords ? fmt(c.organicKeywords) : "—"}</td>
                        <td className="p-3 text-right font-mono">{c.organicTraffic ? fmt(c.organicTraffic) : "—"}</td>
                        <td className="p-3 text-right font-mono">{c.backlinks ? fmt(c.backlinks) : "—"}</td>
                        <td className="p-3 text-right font-mono">{c.referringDomains ? fmt(c.referringDomains) : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500 italic">
                Per-competitor profile data refreshes weekly (Sunday morning) to stay within
                SEMrush&apos;s free-tier daily quota. Lightweight daily snapshots refresh
                competitor list only.
              </p>
            </section>
          )}

          {/* ── Top Referring Domains ────────────────────────────── */}
          {latest.backlinks.topReferringDomains.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Top Referring Domains</h2>
              <div className="rounded-xl border border-gray-200 bg-white divide-y divide-gray-100">
                {latest.backlinks.topReferringDomains.map((rd) => (
                  <div key={rd.domain} className="flex justify-between items-center p-4">
                    <span className="font-mono text-sm text-gray-900">{rd.domain}</span>
                    <span className="font-mono text-xs text-gray-500">{rd.backlinks} backlinks</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── SEO Strategy Summary ─────────────────────────────── */}
          <section className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">SEO Strategy</h2>
              <Link
                href="/seo-strategy"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                View full strategy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "🏗",
                  title: "Topical Authority — Property Manager TAM",
                  status: "Active",
                  statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
                  summary: "40 new pages (71K words) targeting Phoenix-metro HOA boards, apartment managers, and commercial property owners. Audiences hub, 6 pillar SEO articles, 26 city-service pages now indexing.",
                },
                {
                  icon: "🤖",
                  title: "AI SEO Layer",
                  status: "Active",
                  statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
                  summary: "llms.txt, HowTo + FAQPage + Article schema, TL;DR blocks on all major pages. Current: 29 AI mentions, 12 cited pages. Positions Axle for ChatGPT, Perplexity, and Google AI Overviews.",
                },
                {
                  icon: "📍",
                  title: "Local SEO & Google Business Profile",
                  status: "In Progress",
                  statusColor: "text-blue-700 bg-blue-50 border-blue-200",
                  summary: "GBP phone + hours fix pending GCP API scope approval (AI-9986). Weekly GBP posts planned. Targeting 30+ local citations vs current ~8.",
                },
                {
                  icon: "🔗",
                  title: "Domain Authority Growth",
                  status: "In Progress",
                  statusColor: "text-blue-700 bg-blue-50 border-blue-200",
                  summary: "Authority Score 17 today — targeting 30+ by Aug 2026 via local citations, referral partner co-citations, and HOA industry publication backlinks.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-xl leading-none">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm leading-snug">{item.title}</h3>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border flex-shrink-0 ${item.statusColor}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-600">
              <span className="font-semibold text-gray-900">90-Day Target (Aug 2026):</span>
              {" "}Authority Score 30+, top-3 rankings in 5+ city-service pages, first HOA contracts from organic search.{" "}
              <Link href="/seo-strategy" className="font-semibold text-blue-600 hover:underline">
                See full strategy and keyword clusters &rarr;
              </Link>
            </div>
          </section>
        </>
      )}

      {/* ── Strategy always visible (even without snapshot data) ── */}
      {!latest && !fetchError && (
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">SEO Strategy</h2>
            <Link
              href="/seo-strategy"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              View full strategy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              While the first SEMrush snapshot is pending, the SEO strategy is fully defined.
              Axle Towing&apos;s SEO plan focuses on 5 pillars: topical authority for the property manager
              TAM, AI SEO layer (ChatGPT + Perplexity citations), Local SEO and GBP optimization,
              domain authority growth, and monthly performance tracking.
            </p>
            <Link
              href="/seo-strategy"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              View SEO Strategy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
