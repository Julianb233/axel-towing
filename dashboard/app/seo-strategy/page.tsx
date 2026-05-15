import PageHeader from "../../components/PageHeader";
import Link from "next/link";

// ---------------------------------------------------------------------------
// SEO Strategy — Axle Towing & Impound
// Static page, updated each major strategy shift. Last updated: 2026-05-15.
// ---------------------------------------------------------------------------

const LAST_UPDATED = "2026-05-15";

interface StrategyPillar {
  icon: string;
  title: string;
  status: "active" | "in_progress" | "planned";
  description: string;
  tactics: string[];
}

interface KeywordCluster {
  name: string;
  intent: string;
  priority: "high" | "medium" | "low";
  examples: string[];
  rationale: string;
}

interface ContentType {
  type: string;
  count: string;
  purpose: string;
}

const PILLARS: StrategyPillar[] = [
  {
    icon: "🏗",
    title: "Topical Authority — Property Manager TAM",
    status: "active",
    description:
      "Own every question a Phoenix-metro HOA board member, apartment manager, or commercial property owner has about parking enforcement and private-property towing. 40 new pages launched May 2026 establish Axle as the go-to knowledge resource for this audience.",
    tactics: [
      "Audiences hub (/audiences) segmented by HOA boards, apartment managers, and commercial properties",
      "8 long-form resource guides targeting property manager search intent",
      "6 pillar SEO articles covering ARS 28-3511 compliance, towing contracts, and parking enforcement",
      "26 city-service pages across Phoenix metro (Scottsdale, Tempe, Mesa, Chandler, Gilbert, and more)",
      "/resources/property-manager-towing-hub as the central authority node",
    ],
  },
  {
    icon: "🤖",
    title: "AI SEO Layer — ChatGPT / Perplexity / Google AI Overviews",
    status: "active",
    description:
      "Every major page now carries structured markup and AI-readable signals that position Axle to be cited by large language models when users ask about Phoenix towing services. Current AI Visibility: 29 mentions, 12 cited pages (SEMrush).",
    tactics: [
      "llms.txt deployed at axletowing.com/llms.txt — tells ChatGPT, Gemini, and Perplexity which pages to prioritize",
      "HowTo schema on step-by-step guides (how to set up a towing contract, how to handle abandoned vehicles)",
      "FAQPage schema on all resource articles — triggers Google FAQ rich results",
      "Article schema with E-E-A-T author block on all blog posts",
      "TL;DR summary blocks at the top of each long-form page for AI extraction",
    ],
  },
  {
    icon: "📍",
    title: "Local SEO & Google Business Profile",
    status: "in_progress",
    description:
      "Axle operates in 40+ Phoenix-metro cities. Local SEO captures near-me and city-specific searches that convert to property management contracts. Two GBP listings exist (Phoenix and Apache Junction) — both need optimization.",
    tactics: [
      "Fix GBP phone number and hours on both Phoenix + Apache Junction listings (pending GCP API scope — AI-9986)",
      "Upload fresh branded hero images to GBP listings (Gemini Imagen 4 Ultra photos ready)",
      "Weekly GBP posts: service highlights, ARS law updates, HOA compliance tips",
      "30+ local citation targets (Axle currently has ~8 vs competitor average of 30+)",
      "City-service page cluster (26 pages) feeds local organic intent across the metro",
    ],
  },
  {
    icon: "🔗",
    title: "Domain Authority Growth",
    status: "in_progress",
    description:
      "Axle&apos;s current Authority Score is 17/100. Target is 30+ within 90 days. Backlink strategy focuses on local directories, HOA industry publications, and ARS-related legal content.",
    tactics: [
      "Submit to 30+ local and industry directories (current: ~8 citations)",
      "Pitch Arizona HOA industry publications and Phoenix business press with ARS 28-3511 explainer content",
      "Partner co-citation: locksmiths, movers, auto mechanics link to Axle in 'recommended services' sections",
      "Build out the referral partner program as a backlink network — each partner site links back",
    ],
  },
  {
    icon: "📊",
    title: "Performance Tracking & Iteration",
    status: "planned",
    description:
      "Monthly keyword rank reporting, GSC integration, and A/B testing of landing page copy. The 40 pages launched in May will take 6-8 weeks to fully index — July 2026 is the first real measurement checkpoint.",
    tactics: [
      "Google Search Console integration (AI-9522) — adds full top-100 keyword data with impressions and clicks",
      "Monthly SEMrush snapshots track Authority Score, organic traffic, and keyword position trends",
      "Identify top 5 city-service pages by impressions at 30-day mark — double down with internal links",
      "Track AI citation rate across ChatGPT, Perplexity, and Google AI Overviews monthly",
      "Quarterly competitive audit: run deep SEMrush competitor analysis with full metrics",
    ],
  },
];

const KEYWORD_CLUSTERS: KeywordCluster[] = [
  {
    name: "Brand & Navigational",
    intent: "Navigational",
    priority: "high",
    examples: ["axle towing", "axle towing & impound", "axle towing phoenix"],
    rationale: "Current #1 rankings. Protect with brand-consistent content and GBP optimization.",
  },
  {
    name: "Property Manager — Contract Intent",
    intent: "Commercial",
    priority: "high",
    examples: [
      "towing company for apartment complex phoenix",
      "HOA towing contract phoenix",
      "private property towing company phoenix az",
    ],
    rationale: "High-value B2B queries. New audience pages and service pages target this cluster directly.",
  },
  {
    name: "ARS Law & Compliance",
    intent: "Informational",
    priority: "high",
    examples: [
      "arizona ARS 28-3511",
      "arizona private property towing laws",
      "how to legally tow a car in arizona",
    ],
    rationale: "Axle is uniquely positioned as a licensed operator. Educational content drives trust and E-E-A-T signals.",
  },
  {
    name: "City-Service Cluster",
    intent: "Transactional + Local",
    priority: "high",
    examples: [
      "towing company scottsdale az",
      "impound lot mesa az",
      "parking enforcement chandler az",
    ],
    rationale: "26 city-service pages launched May 2026. Target top 3 in each city within 90 days.",
  },
  {
    name: "Parking Enforcement Education",
    intent: "Informational",
    priority: "medium",
    examples: [
      "parking enforcement for HOA",
      "abandoned vehicle removal phoenix",
      "how to set up parking rules for apartment complex",
    ],
    rationale: "Feeds the property manager TAM. Converts readers to contract inquiries.",
  },
];

const CONTENT_MIX: ContentType[] = [
  { type: "City-Service Pages", count: "26", purpose: "Local SEO — capture city-specific property manager searches" },
  { type: "Pillar SEO Articles", count: "6", purpose: "Topical authority — ARS law, towing contracts, parking enforcement" },
  { type: "Resource Guides", count: "8", purpose: "Lead magnet — property managers bookmark and refer back" },
  { type: "Blog Articles", count: "61", purpose: "Long-tail intent, internal linking, fresh crawl signals" },
  { type: "Audience Hub Pages", count: "3", purpose: "Segmented entry points for HOA, apartment, and commercial leads" },
  { type: "Spanish Content", count: "6", purpose: "Bilingual Phoenix audience — drivers and property staff" },
];

const STATUS_CONFIG = {
  active: { label: "Active", bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500" },
  in_progress: { label: "In Progress", bg: "bg-blue-50 border-blue-200", text: "text-blue-700", dot: "bg-blue-500" },
  planned: { label: "Planned", bg: "bg-gray-50 border-gray-200", text: "text-gray-600", dot: "bg-gray-400" },
};

const PRIORITY_CONFIG = {
  high: { label: "High", bg: "bg-red-50 border-red-100", text: "text-red-700" },
  medium: { label: "Medium", bg: "bg-amber-50 border-amber-100", text: "text-amber-700" },
  low: { label: "Low", bg: "bg-gray-50 border-gray-100", text: "text-gray-600" },
};

export default function SeoStrategyPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        badge="SEO Strategy"
        title="Axle Towing SEO Strategy"
        subtitle="The plan to make axletowing.com the dominant result for Phoenix-metro private-property towing searches. Targeting property managers, HOA boards, and commercial properties."
      />

      <p className="text-xs text-gray-400 mb-10 font-mono">
        Last updated: {LAST_UPDATED} &nbsp;·&nbsp; Current Authority Score: 17/100 &nbsp;·&nbsp; Target: 30+ by Aug 2026
      </p>

      {/* ── Section 1: Context ── */}
      <section className="mb-12 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Where We Stand (May 2026)</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[
            { label: "Authority Score", value: "17", suffix: "/100", note: "Domain authority — target 30+" },
            { label: "Organic Keywords", value: "67", suffix: "", note: "Up from 0 (site launched Mar 2026)" },
            { label: "Traffic / mo", value: "429", suffix: "", note: "Estimated organic visits" },
            { label: "AI Visibility", value: "29", suffix: " mentions", note: "12 cited pages across AI platforms" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">
                {stat.value}
                <span className="text-base text-gray-400 font-normal">{stat.suffix}</span>
              </p>
              <p className="text-[11px] text-gray-400 mt-1">{stat.note}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Axle Towing launched in March 2026. The site went from zero to 67 ranking keywords and 429 estimated monthly
          visits in 60 days — ahead of schedule for a brand-new domain. The May 2026 content sprint added 40 pages
          (~71,000 words) that are now indexing. The 90-day window from May to August is when rankings compound most
          aggressively as Google processes the new topical authority signals.
        </p>
      </section>

      {/* ── Section 2: Strategy Pillars ── */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Strategy Pillars</h2>
          <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
            {PILLARS.length} initiatives
          </span>
        </div>

        <div className="space-y-5">
          {PILLARS.map((pillar, idx) => {
            const cfg = STATUS_CONFIG[pillar.status];
            return (
              <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex flex-wrap items-start gap-3 mb-3">
                  <span className="text-2xl leading-none">{pillar.icon}</span>
                  <h3 className="font-bold text-gray-900 flex-1 leading-snug text-lg">{pillar.title}</h3>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border flex-shrink-0 ${cfg.bg} ${cfg.text}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                    {cfg.label}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{pillar.description}</p>
                <ul className="space-y-1.5">
                  {pillar.tactics.map((tactic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {tactic}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Section 3: Keyword Clusters ── */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Keyword Clusters</h2>
          <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
            Target Groups
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 text-left text-xs uppercase tracking-wide">
              <tr>
                <th className="p-3">Cluster</th>
                <th className="p-3">Intent</th>
                <th className="p-3">Priority</th>
                <th className="p-3">Examples</th>
                <th className="p-3">Why It Matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {KEYWORD_CLUSTERS.map((cluster, idx) => {
                const pri = PRIORITY_CONFIG[cluster.priority];
                return (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-gray-900 whitespace-nowrap">{cluster.name}</td>
                    <td className="p-3 text-gray-500 whitespace-nowrap">{cluster.intent}</td>
                    <td className="p-3">
                      <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${pri.bg} ${pri.text}`}>
                        {pri.label}
                      </span>
                    </td>
                    <td className="p-3">
                      <ul className="space-y-0.5">
                        {cluster.examples.map((ex, eIdx) => (
                          <li key={eIdx} className="text-xs text-gray-500 font-mono">{ex}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-3 text-xs text-gray-600 max-w-xs">{cluster.rationale}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 4: Content Mix ── */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Content Inventory</h2>
          <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
            123+ pages total
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONTENT_MIX.map((ct, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-gray-900">{ct.count}</span>
                <span className="text-sm font-semibold text-gray-600">{ct.type}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{ct.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 5: 90-Day Milestones ── */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">90-Day Milestones</h2>
          <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
            May - Aug 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              month: "May 2026",
              badge: "Shipped",
              badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
              items: [
                "40 new pages launched (~71K words)",
                "AI SEO layer: llms.txt + HowTo/FAQPage/Article schema",
                "Audiences hub + city-service cluster",
                "Hero image refresh with Gemini Imagen 4 Ultra",
              ],
            },
            {
              month: "June 2026",
              badge: "In Progress",
              badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
              items: [
                "GBP phone + hours fix on both listings",
                "GHL automation stack activation (15 workflows)",
                "HOA outreach launch (22K contacts)",
                "30+ local citation submissions",
              ],
            },
            {
              month: "July - Aug 2026",
              badge: "Planned",
              badgeBg: "bg-gray-100 border-gray-200 text-gray-600",
              items: [
                "Authority Score target: 30+",
                "GSC integration + full keyword rank tracking",
                "First city-service pages hitting page 1",
                "Voice AI inbound call handler live",
              ],
            },
          ].map((m, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-gray-900">{m.month}</h3>
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${m.badgeBg}`}>
                  {m.badge}
                </span>
              </div>
              <ul className="space-y-2">
                {m.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer links ── */}
      <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-6">
        <Link
          href="/seo"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          SEO Performance Dashboard
        </Link>
        <Link
          href="/plan"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          View Full Roadmap
        </Link>
        <p className="text-xs text-gray-400 self-center ml-auto">Updated {LAST_UPDATED} by AI Acrobatics</p>
      </div>
    </main>
  );
}
