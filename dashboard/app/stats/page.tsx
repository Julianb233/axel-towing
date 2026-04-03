"use client";
import ScrollReveal from "../../components/ScrollReveal";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";
import { organicKeywords, competitors, competitorGaps } from "../../data/keywords";
import { pageSpeedComparison, blogCategories, locationCities, servicePages, currentStats } from "../../data/site-data";
import { snapshotHistory, lastUpdated } from "../../data/semrush-trends";

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

function DeltaBadge({ current, previous }: { current: number; previous: number }) {
  if (previous === 0) return <span className="text-[10px] text-gray-400">--</span>;
  const diff = current - previous;
  const pct = Math.round((diff / previous) * 100);
  if (diff === 0) return <span className="text-[10px] text-gray-400">No change</span>;
  const isUp = diff > 0;
  return (
    <span className={`text-[10px] font-medium ${isUp ? "text-green-600" : "text-red-500"}`}>
      {isUp ? "+" : ""}{diff.toLocaleString()} ({isUp ? "+" : ""}{pct}%)
    </span>
  );
}

export default function StatsPage() {
  const page1 = organicKeywords.filter(k => k.position <= 10);
  const page2_3 = organicKeywords.filter(k => k.position > 10 && k.position <= 30);
  const deep = organicKeywords.filter(k => k.position > 30);

  // Build trend data
  const history = snapshotHistory;
  const latest = history.length > 0 ? history[history.length - 1] : null;
  const previous = history.length > 1 ? history[history.length - 2] : null;
  const threeMonthsAgo = history.length > 0
    ? history.find(s => {
        const d = new Date(s.date);
        const now = latest ? new Date(latest.date) : new Date();
        const diff = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);
        return diff >= 80; // roughly 3 months
      }) || history[0]
    : null;

  // Max values for bar chart scaling
  const maxKeywords = Math.max(...history.map(s => s.organicKeywords), 1);
  const maxTraffic = Math.max(...history.map(s => s.organicTraffic), 1);
  const maxCost = Math.max(...history.map(s => s.organicCost), 1);

  return (
    <>
      <PageHeader badge="Performance Data" title="Current Stats & Rankings" subtitle={`Real SEMrush data. Auto-updated daily. Last pull: ${lastUpdated}`} />

      {/* Performance Over Time */}
      {history.length > 0 && (
        <ScrollReveal>
          <div className="glass-card p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold font-display text-gray-900">Performance Over Time</h2>
                <p className="text-sm text-gray-400 mt-1">SEMrush snapshots tracked daily via automated API pulls</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Snapshots</p>
                <p className="text-lg font-bold font-display text-brand-blue">{history.length}</p>
              </div>
            </div>

            {/* Summary cards: current vs previous vs 3mo ago */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Keywords */}
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Organic Keywords</p>
                <p className="text-3xl font-bold font-display text-brand-blue">{latest?.organicKeywords ?? currentStats.organicKeywords}</p>
                {previous && <DeltaBadge current={latest?.organicKeywords ?? 0} previous={previous.organicKeywords} />}
                {threeMonthsAgo && threeMonthsAgo !== previous && (
                  <p className="text-[10px] text-gray-400 mt-1">vs 3mo ago: {threeMonthsAgo.organicKeywords}</p>
                )}
              </div>
              {/* Traffic */}
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Monthly Traffic</p>
                <p className="text-3xl font-bold font-display text-green-600">{(latest?.organicTraffic ?? currentStats.monthlyTraffic).toLocaleString()}</p>
                {previous && <DeltaBadge current={latest?.organicTraffic ?? 0} previous={previous.organicTraffic} />}
                {threeMonthsAgo && threeMonthsAgo !== previous && (
                  <p className="text-[10px] text-gray-400 mt-1">vs 3mo ago: {threeMonthsAgo.organicTraffic.toLocaleString()}</p>
                )}
              </div>
              {/* Traffic Value */}
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Traffic Value</p>
                <p className="text-3xl font-bold font-display text-amber-600">${(latest?.organicCost ?? currentStats.trafficValue).toLocaleString()}</p>
                {previous && <DeltaBadge current={latest?.organicCost ?? 0} previous={previous.organicCost} />}
                {threeMonthsAgo && threeMonthsAgo !== previous && (
                  <p className="text-[10px] text-gray-400 mt-1">vs 3mo ago: ${threeMonthsAgo.organicCost.toLocaleString()}</p>
                )}
              </div>
            </div>

            {/* Timeline bars */}
            <div className="space-y-6">
              {/* Keywords trend */}
              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-3">Keywords Over Time</h3>
                <div className="space-y-2">
                  {history.slice(-12).map((s) => (
                    <div key={s.date} className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 w-20 shrink-0 font-mono">{s.date.slice(5)}</span>
                      <TrendBar value={s.organicKeywords} max={maxKeywords} color="bg-brand-blue" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Traffic trend */}
              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-3">Traffic Over Time</h3>
                <div className="space-y-2">
                  {history.slice(-12).map((s) => (
                    <div key={s.date} className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 w-20 shrink-0 font-mono">{s.date.slice(5)}</span>
                      <TrendBar value={s.organicTraffic} max={maxTraffic} color="bg-green-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Traffic Value trend */}
              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-3">Traffic Value Over Time</h3>
                <div className="space-y-2">
                  {history.slice(-12).map((s) => (
                    <div key={s.date} className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 w-20 shrink-0 font-mono">{s.date.slice(5)}</span>
                      <TrendBar value={s.organicCost} max={maxCost} color="bg-amber-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      )}

      <ScrollReveal>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-6">PageSpeed: Old Site vs New Site</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {(["performance", "accessibility", "bestPractices", "seo"] as const).map((metric) => {
              const oldVal = pageSpeedComparison.old[metric];
              const newVal = pageSpeedComparison.new[metric];
              const diff = newVal - oldVal;
              const labels = { performance: "Performance", accessibility: "Accessibility", bestPractices: "Best Practices", seo: "SEO" };
              return (
                <div key={metric} className="text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">{labels[metric]}</p>
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div><p className="text-2xl font-bold font-display text-gray-400">{oldVal}</p><p className="text-[10px] text-gray-400">Old</p></div>
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    <div><p className={`text-2xl font-bold font-display ${newVal >= 90 ? "text-green-600" : "text-amber-600"}`}>{newVal}</p><p className="text-[10px] text-gray-400">New</p></div>
                  </div>
                  {diff > 0 && <p className="text-xs text-green-600 font-medium">+{diff} points</p>}
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-6">Competitor Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead><tr><th>Company</th><th>Authority</th><th>Keywords</th><th>Traffic</th><th>Backlinks</th></tr></thead>
              <tbody>
                {competitors.sort((a, b) => b.traffic - a.traffic).map((c) => (
                  <tr key={c.domain} className={c.isClient ? "bg-blue-50" : ""}>
                    <td><div><p className={`font-medium ${c.isClient ? "text-brand-blue" : "text-gray-900"}`}>{c.name} {c.isClient && <span className="text-[10px] ml-1 text-brand-blue">(YOU)</span>}</p><p className="text-xs text-gray-400">{c.domain}</p></div></td>
                    <td><span className={`font-semibold ${c.authority >= 25 ? "text-green-600" : c.authority >= 15 ? "text-amber-600" : "text-gray-500"}`}>{c.authority}</span></td>
                    <td className="text-gray-900 font-medium">{c.keywords.toLocaleString()}</td>
                    <td className="text-gray-900 font-medium">{c.traffic.toLocaleString()}</td>
                    <td className="text-gray-600">{c.backlinks.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">All {organicKeywords.length} Organic Keyword Rankings</h2>
          <p className="text-sm text-gray-400 mb-6">Source: SEMrush, updated {lastUpdated}</p>
          <h3 className="text-sm font-bold text-green-600 mb-3 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> Page 1 (1-10) - {page1.length} keywords</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full"><thead><tr><th>Keyword</th><th>Position</th><th>Volume</th><th>CPC</th></tr></thead><tbody>
              {page1.map((k, i) => (<tr key={i}><td className="text-gray-900 font-medium">{k.keyword}</td><td><span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs font-bold border border-green-100">#{k.position}</span></td><td className="text-gray-600">{k.volume.toLocaleString()}</td><td className="text-gray-400">${k.cpc.toFixed(2)}</td></tr>))}
            </tbody></table>
          </div>
          <h3 className="text-sm font-bold text-amber-600 mb-3 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500" /> Page 2-3 (11-30) - {page2_3.length} keywords</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full"><thead><tr><th>Keyword</th><th>Position</th><th>Volume</th><th>CPC</th></tr></thead><tbody>
              {page2_3.map((k, i) => (<tr key={i}><td className="text-gray-900 font-medium">{k.keyword}</td><td><span className="bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full text-xs font-bold border border-amber-100">#{k.position}</span></td><td className="text-gray-600">{k.volume.toLocaleString()}</td><td className="text-gray-400">${k.cpc.toFixed(2)}</td></tr>))}
            </tbody></table>
          </div>
          <h3 className="text-sm font-bold text-gray-400 mb-3 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gray-400" /> Deep Rankings (31-100) - {deep.length} keywords</h3>
          <div className="overflow-x-auto">
            <table className="w-full"><thead><tr><th>Keyword</th><th>Position</th><th>Volume</th><th>CPC</th></tr></thead><tbody>
              {deep.map((k, i) => (<tr key={i}><td className="text-gray-600">{k.keyword}</td><td><span className="text-gray-400 text-xs font-medium">#{k.position}</span></td><td className="text-gray-400">{k.volume.toLocaleString()}</td><td className="text-gray-400">${k.cpc.toFixed(2)}</td></tr>))}
            </tbody></table>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Keyword Gaps: What Competitors Rank For</h2>
          <p className="text-sm text-gray-400 mb-6">High-value keywords where Axle Towing does not yet appear</p>
          <div className="overflow-x-auto">
            <table className="w-full"><thead><tr><th>Keyword</th><th>Monthly Volume</th><th>Who Ranks</th><th>Axle Position</th></tr></thead><tbody>
              {competitorGaps.map((g, i) => (<tr key={i}><td className="text-gray-900 font-medium">{g.keyword}</td><td className="text-amber-600 font-semibold">{g.volume.toLocaleString()}</td><td className="text-gray-600">{g.whoRanks}</td><td><span className="text-brand-red text-xs font-medium">{g.axlePosition}</span></td></tr>))}
            </tbody></table>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <div className="glass-card p-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-6">Content Inventory (120 Pages)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold text-brand-blue mb-3">Blog Articles (63)</h3>
              <div className="space-y-2">
                {blogCategories.map((cat, i) => (
                  <div key={i}><ProgressBar label={cat.category} percentage={Math.round((cat.count / 63) * 100)} color="blue" showPercentage={false} height="h-1.5" /><p className="text-[10px] text-gray-400 text-right">{cat.count} articles</p></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-green-600 mb-3">Location Pages (35)</h3>
              <div className="mb-4"><p className="text-xs text-gray-400 mb-2">Major Cities (8)</p><div className="flex flex-wrap gap-1">
                {locationCities.map((city) => (<span key={city} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100">{city}</span>))}
              </div></div>
              <p className="text-xs text-gray-400">+ 27 neighborhood pages</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-amber-600 mb-3">Service Pages (7)</h3>
              <div className="space-y-2">
                {servicePages.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm text-gray-600">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
