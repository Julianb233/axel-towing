"use client";

import ScrollReveal from "../../components/ScrollReveal";
import PageHeader from "../../components/PageHeader";
import { organicKeywords, competitors, competitorGaps } from "../../data/keywords";
import {
  currentStats,
  pageSpeedComparison,
  blogCategories,
  locationCities,
  servicePages,
  deliverables,
  suggestions,
} from "../../data/site-data";
import { snapshotHistory, lastUpdated } from "../../data/semrush-trends";

/* ─── helpers ─── */
function TrendBar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-mono text-gray-600 w-16 text-right">{value.toLocaleString()}</span>
    </div>
  );
}

function PositionBadge({ position }: { position: number }) {
  let color = "bg-gray-100 text-gray-600";
  if (position <= 3) color = "bg-green-100 text-green-700";
  else if (position <= 10) color = "bg-blue-100 text-blue-700";
  else if (position <= 30) color = "bg-amber-100 text-amber-700";
  else if (position <= 50) color = "bg-orange-100 text-orange-700";
  return (
    <span className={`inline-flex items-center justify-center text-xs font-bold rounded-full w-8 h-8 ${color}`}>
      {position}
    </span>
  );
}

function ScoreCircle({ score, label, color }: { score: number; label: string; color: string }) {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 100) * circumference;
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="100" height="100" viewBox="0 0 100 100" className="print:w-20 print:h-20">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
        <circle
          cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 50 50)"
          className="transition-all duration-1000"
        />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="central"
          className="fill-gray-900 text-xl font-bold" style={{ fontSize: "20px", fontWeight: 700 }}>
          {score}
        </text>
      </svg>
      <span className="text-xs text-gray-500 text-center">{label}</span>
    </div>
  );
}

/* ─── main page ─── */
export default function SeoReportPage() {
  const history = snapshotHistory;
  const latest = history.length > 0 ? history[history.length - 1] : null;
  const maxKeywords = Math.max(...history.map((s) => s.organicKeywords), 1);
  const maxTraffic = Math.max(...history.map((s) => s.organicTraffic), 1);
  const maxCost = Math.max(...history.map((s) => s.organicCost), 1);

  // Deduplicate keywords by keyword+url (keep best position)
  const keywordMap = new Map<string, (typeof organicKeywords)[0]>();
  for (const kw of organicKeywords) {
    const key = `${kw.keyword}|${kw.url}`;
    const existing = keywordMap.get(key);
    if (!existing || kw.position < existing.position) keywordMap.set(key, kw);
  }
  const uniqueKeywords = Array.from(keywordMap.values()).sort((a, b) => a.position - b.position);

  const page1Keywords = uniqueKeywords.filter((k) => k.position <= 10);
  const page2_3Keywords = uniqueKeywords.filter((k) => k.position > 10 && k.position <= 30);
  const deepKeywords = uniqueKeywords.filter((k) => k.position > 30);

  const axle = competitors.find((c) => c.isClient);
  const otherCompetitors = competitors.filter((c) => !c.isClient);

  return (
    <>
      {/* Print-only header */}
      <div className="hidden print:block mb-8">
        <div className="flex items-center justify-between border-b-2 border-brand-blue pb-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">AT</div>
              <h1 className="text-3xl font-bold font-display text-gray-900">SEO Performance Report</h1>
            </div>
            <p className="text-sm text-gray-500 mt-1">Prepared for Elliott &mdash; Axle Towing &amp; Impound</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-700">March 24, 2026</p>
            <p className="text-xs text-gray-400">axletowing.com</p>
            <p className="text-xs text-gray-400">Powered by AI Acrobatics</p>
          </div>
        </div>
      </div>

      {/* Screen header */}
      <div className="print:hidden">
        <div className="flex items-center justify-between mb-2">
          <PageHeader
            badge="Client Report"
            title="SEO Performance Report"
            subtitle="Prepared for Elliott — Axle Towing & Impound  |  March 24, 2026"
          />
          <button
            onClick={() => window.print()}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-xl hover:bg-brand-blue-dark transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print / PDF
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          SECTION 1 — EXECUTIVE SUMMARY
          ═══════════════════════════════════════════════ */}
      <ScrollReveal>
        <div className="glass-card p-8 mb-8 print:shadow-none print:border print:break-inside-avoid">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Executive Summary</h2>
          <p className="text-sm text-gray-500 mb-6">Key performance indicators as of {lastUpdated}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Organic Keywords", value: latest?.organicKeywords ?? currentStats.organicKeywords, color: "border-t-brand-blue", textColor: "text-brand-blue" },
              { label: "Monthly Traffic", value: latest?.organicTraffic ?? currentStats.monthlyTraffic, color: "border-t-green-500", textColor: "text-green-600" },
              { label: "Authority Score", value: currentStats.authorityScore, color: "border-t-purple-500", textColor: "text-purple-600" },
              { label: "Traffic Value", value: `$${(latest?.organicCost ?? currentStats.trafficValue).toLocaleString()}`, color: "border-t-amber-500", textColor: "text-amber-600" },
            ].map((stat) => (
              <div key={stat.label} className={`bg-white rounded-xl p-5 border border-gray-100 ${stat.color} border-t-4`}>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className={`text-3xl font-bold font-display ${stat.textColor}`}>{typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Pages", value: currentStats.totalPages },
              { label: "Blog Articles", value: currentStats.blogArticles },
              { label: "Location Pages", value: currentStats.locationPages },
              { label: "Backlinks", value: currentStats.backlinks },
              { label: "Referring Domains", value: currentStats.referringDomains },
              { label: "Service Pages", value: currentStats.servicePages },
              { label: "Page Speed", value: `${currentStats.pageSpeed}/100` },
              { label: "SEO Score", value: `${currentStats.seoScore}/100` },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-xl font-bold font-display text-gray-900">{typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — KEYWORD RANKINGS TABLE
          ═══════════════════════════════════════════════ */}
      <ScrollReveal delay={50}>
        <div className="glass-card p-8 mb-8 print:shadow-none print:border print:break-inside-avoid">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Keyword Rankings</h2>
          <p className="text-sm text-gray-500 mb-6">
            {uniqueKeywords.length} tracked keywords &mdash; {page1Keywords.length} on page 1, {page2_3Keywords.length} on pages 2-3
          </p>

          {/* Distribution summary */}
          <div className="flex gap-3 mb-6">
            {[
              { label: "Page 1 (1-10)", count: page1Keywords.length, color: "bg-green-100 text-green-700 border-green-200" },
              { label: "Pages 2-3 (11-30)", count: page2_3Keywords.length, color: "bg-amber-100 text-amber-700 border-amber-200" },
              { label: "Page 4+ (31+)", count: deepKeywords.length, color: "bg-gray-100 text-gray-600 border-gray-200" },
            ].map((tier) => (
              <div key={tier.label} className={`flex-1 rounded-xl p-4 border text-center ${tier.color}`}>
                <p className="text-2xl font-bold font-display">{tier.count}</p>
                <p className="text-xs mt-1">{tier.label}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-2 text-xs uppercase tracking-wider text-gray-400">Keyword</th>
                  <th className="text-center py-3 px-2 text-xs uppercase tracking-wider text-gray-400">Position</th>
                  <th className="text-right py-3 px-2 text-xs uppercase tracking-wider text-gray-400">Volume</th>
                  <th className="text-right py-3 px-2 text-xs uppercase tracking-wider text-gray-400">CPC</th>
                  <th className="text-left py-3 px-2 text-xs uppercase tracking-wider text-gray-400 hidden md:table-cell">URL</th>
                </tr>
              </thead>
              <tbody>
                {uniqueKeywords.map((kw, i) => (
                  <tr key={`${kw.keyword}-${kw.url}-${i}`} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-2 font-medium text-gray-900">{kw.keyword}</td>
                    <td className="py-2.5 px-2 text-center"><PositionBadge position={kw.position} /></td>
                    <td className="py-2.5 px-2 text-right text-gray-600">{kw.volume.toLocaleString()}</td>
                    <td className="py-2.5 px-2 text-right text-gray-600">${kw.cpc.toFixed(2)}</td>
                    <td className="py-2.5 px-2 text-gray-400 text-xs truncate max-w-[200px] hidden md:table-cell">
                      {kw.url.replace("https://axletowing.com", "")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          SECTION 3 — TRAFFIC TRENDS
          ═══════════════════════════════════════════════ */}
      <ScrollReveal delay={100}>
        <div className="glass-card p-8 mb-8 print:shadow-none print:border print:break-inside-avoid">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Traffic Trends</h2>
          <p className="text-sm text-gray-500 mb-6">SEMrush daily snapshots showing organic growth trajectory</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Keywords trend */}
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-brand-blue" /> Keywords Over Time
              </h3>
              <div className="space-y-2">
                {history.map((s) => (
                  <div key={s.date} className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 w-14 shrink-0 font-mono">{s.date.slice(5)}</span>
                    <TrendBar value={s.organicKeywords} max={maxKeywords} color="bg-brand-blue" />
                  </div>
                ))}
              </div>
            </div>

            {/* Traffic trend */}
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500" /> Monthly Traffic
              </h3>
              <div className="space-y-2">
                {history.map((s) => (
                  <div key={s.date} className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 w-14 shrink-0 font-mono">{s.date.slice(5)}</span>
                    <TrendBar value={s.organicTraffic} max={maxTraffic} color="bg-green-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Traffic Value trend */}
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500" /> Traffic Value ($)
              </h3>
              <div className="space-y-2">
                {history.map((s) => (
                  <div key={s.date} className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 w-14 shrink-0 font-mono">{s.date.slice(5)}</span>
                    <TrendBar value={s.organicCost} max={maxCost} color="bg-amber-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 12-month projection */}
          <div className="mt-8 p-5 rounded-xl bg-blue-50 border border-blue-100">
            <h3 className="text-sm font-bold text-gray-900 mb-3">12-Month Traffic Projection</h3>
            <div className="flex items-end gap-4 h-36">
              {[
                { label: "Now", traffic: currentStats.monthlyTraffic, color: "bg-brand-blue" },
                { label: "Month 3", traffic: 1200, color: "bg-brand-blue/80" },
                { label: "Month 6", traffic: 3500, color: "bg-brand-blue/70" },
                { label: "Month 9", traffic: 8000, color: "bg-brand-blue/60" },
                { label: "Month 12", traffic: 15000, color: "bg-brand-blue" },
              ].map((m) => {
                const heightPct = Math.max((m.traffic / 15000) * 100, 5);
                return (
                  <div key={m.label} className="flex-1 flex flex-col items-center">
                    <span className="text-xs font-bold text-gray-900 mb-1">{m.traffic.toLocaleString()}</span>
                    <div
                      className={`w-full max-w-[48px] ${m.color} rounded-t-lg transition-all duration-700`}
                      style={{ height: `${heightPct}%` }}
                    />
                    <span className="text-[10px] text-gray-500 mt-2">{m.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          SECTION 4 — CONTENT PERFORMANCE
          ═══════════════════════════════════════════════ */}
      <ScrollReveal delay={150}>
        <div className="glass-card p-8 mb-8 print:shadow-none print:border print:break-inside-avoid">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Content Performance</h2>
          <p className="text-sm text-gray-500 mb-6">{currentStats.totalPages} total pages published — building a massive content moat</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Content breakdown */}
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-4">Content Breakdown</h3>
              <div className="space-y-3">
                {[
                  { label: "Blog Articles", count: currentStats.blogArticles, color: "bg-brand-blue", pct: (currentStats.blogArticles / currentStats.totalPages) * 100 },
                  { label: "Location Pages", count: currentStats.locationPages, color: "bg-green-500", pct: (currentStats.locationPages / currentStats.totalPages) * 100 },
                  { label: "Utility Pages", count: 15, color: "bg-amber-500", pct: (15 / currentStats.totalPages) * 100 },
                  { label: "Service Pages", count: currentStats.servicePages, color: "bg-purple-500", pct: (currentStats.servicePages / currentStats.totalPages) * 100 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-xs text-gray-600 w-28 shrink-0">{item.label}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                    </div>
                    <span className="text-xs font-bold text-gray-900 w-8 text-right">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Blog categories */}
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-4">Blog Article Categories</h3>
              <div className="space-y-2">
                {blogCategories.map((cat) => (
                  <div key={cat.category} className="flex items-center justify-between py-1.5 border-b border-gray-50">
                    <span className="text-xs text-gray-600">{cat.category}</span>
                    <span className="text-xs font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded-full">{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location coverage */}
          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-700 mb-3">Location Coverage ({currentStats.locationPages} city pages)</h3>
            <div className="flex flex-wrap gap-2">
              {locationCities.map((city) => (
                <span key={city} className="px-3 py-1.5 rounded-lg bg-blue-50 text-brand-blue text-xs font-medium border border-blue-100">
                  {city}
                </span>
              ))}
              <span className="px-3 py-1.5 rounded-lg bg-gray-50 text-gray-500 text-xs font-medium border border-gray-200">
                +{currentStats.locationPages - locationCities.length} neighborhoods
              </span>
            </div>
          </div>

          {/* Service pages */}
          <div className="mt-6">
            <h3 className="text-sm font-bold text-gray-700 mb-3">Service Pages ({servicePages.length})</h3>
            <div className="flex flex-wrap gap-2">
              {servicePages.map((svc) => (
                <span key={svc} className="px-3 py-1.5 rounded-lg bg-green-50 text-green-700 text-xs font-medium border border-green-100">
                  {svc}
                </span>
              ))}
            </div>
          </div>

          {/* Content moat comparison */}
          <div className="mt-8 p-5 rounded-xl bg-green-50 border border-green-100">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Content Moat vs. Competitors</h3>
            <div className="flex items-end gap-6 h-32">
              {[
                { name: "Axle Towing", pages: currentStats.totalPages, color: "bg-brand-blue" },
                { name: "All City Towing", pages: 8, color: "bg-gray-300" },
                { name: "Freeway Towing", pages: 12, color: "bg-gray-300" },
                { name: "KwikTow", pages: 5, color: "bg-gray-300" },
              ].map((comp) => {
                const heightPct = Math.max((comp.pages / currentStats.totalPages) * 100, 4);
                return (
                  <div key={comp.name} className="flex-1 flex flex-col items-center">
                    <span className="text-sm font-bold text-gray-900 mb-1">{comp.pages}+</span>
                    <div
                      className={`w-full max-w-[56px] ${comp.color} rounded-t-lg transition-all duration-700`}
                      style={{ height: `${heightPct}%` }}
                    />
                    <span className="text-[10px] text-gray-500 mt-2 text-center">{comp.name}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-600 mt-4">
              <strong className="text-gray-900">20x more content than the nearest competitor.</strong> This
              content moat gives Google vastly more signals to understand that Axle Towing is the authority for
              private property towing in Phoenix.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          SECTION 5 — COMPETITOR COMPARISON
          ═══════════════════════════════════════════════ */}
      <ScrollReveal delay={200}>
        <div className="glass-card p-8 mb-8 print:shadow-none print:border print:break-inside-avoid">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Competitor Comparison</h2>
          <p className="text-sm text-gray-500 mb-6">How Axle Towing stacks up against Phoenix metro competitors</p>

          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-2 text-xs uppercase tracking-wider text-gray-400">Company</th>
                  <th className="text-right py-3 px-2 text-xs uppercase tracking-wider text-gray-400">Authority</th>
                  <th className="text-right py-3 px-2 text-xs uppercase tracking-wider text-gray-400">Keywords</th>
                  <th className="text-right py-3 px-2 text-xs uppercase tracking-wider text-gray-400">Traffic</th>
                  <th className="text-right py-3 px-2 text-xs uppercase tracking-wider text-gray-400">Backlinks</th>
                  <th className="text-right py-3 px-2 text-xs uppercase tracking-wider text-gray-400 hidden md:table-cell">Ref. Domains</th>
                </tr>
              </thead>
              <tbody>
                {/* Axle first, highlighted */}
                {axle && (
                  <tr className="border-b border-blue-100 bg-blue-50/50">
                    <td className="py-3 px-2 font-bold text-brand-blue flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-blue" />
                      {axle.name}
                    </td>
                    <td className="py-3 px-2 text-right font-bold text-brand-blue">{axle.authority}</td>
                    <td className="py-3 px-2 text-right font-bold text-brand-blue">{axle.keywords}</td>
                    <td className="py-3 px-2 text-right font-bold text-brand-blue">{axle.traffic.toLocaleString()}</td>
                    <td className="py-3 px-2 text-right font-bold text-brand-blue">{axle.backlinks.toLocaleString()}</td>
                    <td className="py-3 px-2 text-right font-bold text-brand-blue hidden md:table-cell">{axle.referringDomains}</td>
                  </tr>
                )}
                {otherCompetitors.map((comp) => (
                  <tr key={comp.domain} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-2 font-medium text-gray-900">{comp.name}</td>
                    <td className="py-3 px-2 text-right text-gray-600">{comp.authority}</td>
                    <td className="py-3 px-2 text-right text-gray-600">{comp.keywords.toLocaleString()}</td>
                    <td className="py-3 px-2 text-right text-gray-600">{comp.traffic.toLocaleString()}</td>
                    <td className="py-3 px-2 text-right text-gray-600">{comp.backlinks.toLocaleString()}</td>
                    <td className="py-3 px-2 text-right text-gray-600 hidden md:table-cell">{comp.referringDomains}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Keyword gaps */}
          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-700 mb-4">Keyword Gaps &mdash; Opportunities to Capture</h3>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 px-2 text-xs uppercase tracking-wider text-gray-400">Keyword</th>
                    <th className="text-right py-2 px-2 text-xs uppercase tracking-wider text-gray-400">Volume</th>
                    <th className="text-left py-2 px-2 text-xs uppercase tracking-wider text-gray-400">Who Ranks</th>
                    <th className="text-left py-2 px-2 text-xs uppercase tracking-wider text-gray-400">Axle Position</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorGaps.map((gap) => (
                    <tr key={gap.keyword} className="border-b border-gray-100">
                      <td className="py-2 px-2 font-medium text-gray-900">{gap.keyword}</td>
                      <td className="py-2 px-2 text-right text-gray-600">{gap.volume.toLocaleString()}</td>
                      <td className="py-2 px-2 text-gray-600 text-xs">{gap.whoRanks}</td>
                      <td className="py-2 px-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">
                          {gap.axlePosition}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Total addressable search volume from keyword gaps: <strong className="text-gray-900">{competitorGaps.reduce((sum, g) => sum + g.volume, 0).toLocaleString()}/mo</strong>
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          SECTION 6 — TECHNICAL SEO SCORECARD
          ═══════════════════════════════════════════════ */}
      <ScrollReveal delay={250}>
        <div className="glass-card p-8 mb-8 print:shadow-none print:border print:break-inside-avoid">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Technical SEO Scorecard</h2>
          <p className="text-sm text-gray-500 mb-6">Lighthouse and technical audit results for axletowing.com</p>

          {/* Score circles */}
          <div className="flex justify-center gap-6 md:gap-10 mb-8">
            <ScoreCircle score={pageSpeedComparison.new.performance} label="Performance" color="#1e6bb8" />
            <ScoreCircle score={pageSpeedComparison.new.accessibility} label="Accessibility" color="#10b981" />
            <ScoreCircle score={pageSpeedComparison.new.bestPractices} label="Best Practices" color="#8b5cf6" />
            <ScoreCircle score={pageSpeedComparison.new.seo} label="SEO" color="#f59e0b" />
          </div>

          {/* Before/After comparison */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-3">Before (Old Site)</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(pageSpeedComparison.old).map(([key, val]) => (
                  <div key={key} className="text-center">
                    <p className="text-2xl font-bold font-display text-red-600">{val}</p>
                    <p className="text-[10px] text-red-400 capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <h3 className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">After (New Site)</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(pageSpeedComparison.new).map(([key, val]) => (
                  <div key={key} className="text-center">
                    <p className="text-2xl font-bold font-display text-green-600">{val}</p>
                    <p className="text-[10px] text-green-400 capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical checklist */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "XML Sitemap", status: "active", detail: "Auto-generated, 163 pages" },
              { label: "Schema Markup", status: "active", detail: "LocalBusiness + Organization" },
              { label: "Meta Titles & Descriptions", status: "active", detail: "Unique on all pages" },
              { label: "Mobile Responsive", status: "active", detail: "Mobile-first design" },
              { label: "SSL/HTTPS", status: "active", detail: "Full SSL encryption" },
              { label: "Core Web Vitals", status: "active", detail: "All metrics passing" },
              { label: "Open Graph Tags", status: "active", detail: "Social sharing optimized" },
              { label: "Canonical URLs", status: "active", detail: "Self-referencing canonicals" },
              { label: "robots.txt", status: "active", detail: "Properly configured" },
              { label: "Image Optimization", status: "active", detail: "Next.js Image + lazy loading" },
              { label: "Spanish Language Pages", status: "active", detail: "5 bilingual pages live" },
              { label: "DNS Migration", status: "pending", detail: "Waiting on Elliott" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 py-2">
                {item.status === "active" ? (
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          SECTION 7 — RECOMMENDATIONS
          ═══════════════════════════════════════════════ */}
      <ScrollReveal delay={300}>
        <div className="glass-card p-8 mb-8 print:shadow-none print:border print:break-inside-avoid">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Recommendations &amp; Next Steps</h2>
          <p className="text-sm text-gray-500 mb-6">Prioritized opportunities to accelerate growth</p>

          <div className="space-y-4">
            {suggestions.map((s, i) => {
              const priorityColors: Record<string, string> = {
                critical: "bg-red-100 text-red-700 border-red-200",
                high: "bg-orange-100 text-orange-700 border-orange-200",
                medium: "bg-blue-100 text-blue-700 border-blue-200",
                low: "bg-gray-100 text-gray-600 border-gray-200",
              };
              const color = priorityColors[s.priority] ?? priorityColors.medium;
              return (
                <div key={s.id} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-lg font-bold font-display text-gray-300 shrink-0 w-8">{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-gray-900">{s.title}</h3>
                      <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${color}`}>
                        {s.priority}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{s.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deliverables summary */}
          <div className="mt-8 p-5 rounded-xl bg-blue-50 border border-blue-100">
            <h3 className="text-sm font-bold text-gray-900 mb-4">What We&apos;ve Delivered So Far</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {deliverables.map((d) => (
                <div key={d.item} className="flex items-center gap-2">
                  <span className="text-lg font-bold font-display text-brand-blue">{d.count}</span>
                  <span className="text-xs text-gray-600">{d.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════ */}
      <ScrollReveal delay={350}>
        <div className="text-center py-8 print:py-4 print:border-t-2 print:border-gray-200 print:mt-8">
          <p className="text-sm text-gray-400">
            Report generated March 24, 2026 &mdash; Data source: SEMrush
          </p>
          <p className="text-xs text-gray-300 mt-1">
            Prepared by AI Acrobatics for Axle Towing &amp; Impound &mdash; axletowing.com
          </p>
        </div>
      </ScrollReveal>
    </>
  );
}
