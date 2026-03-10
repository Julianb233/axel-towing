import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Growth Proposal — Axle Towing & Impound",
  robots: "noindex, nofollow",
};

/* ── Data ────────────────────────────────────────────────────────────── */

const KEYWORD_CLUSTERS = [
  {
    cluster: "HOA Towing + [City]",
    priority: "Highest",
    difficulty: "Very Low (5-15)",
    timeToRank: "1-3 months",
    monthlySearches: "60-200",
    revenueImpact: "Very High",
    competition: "Zero competitors targeting this",
    examples: [
      "HOA towing service Phoenix",
      "HOA parking enforcement Scottsdale",
      "HOA towing company Chandler",
      "HOA towing Gilbert AZ",
    ],
    buyingIntent: [
      { keyword: "HOA towing company Phoenix", vol: "30-60/mo", diff: "Low" },
      { keyword: "HOA parking enforcement Phoenix", vol: "20-40/mo", diff: "Low" },
      { keyword: "HOA towing Scottsdale", vol: "15-25/mo", diff: "Very Low" },
      { keyword: "HOA towing Gilbert AZ", vol: "10-20/mo", diff: "Very Low" },
    ],
    researchIntent: [
      { keyword: "HOA parking enforcement rules Arizona", vol: "50-100/mo", diff: "Low" },
      { keyword: "can HOA tow my car Arizona", vol: "40-80/mo", diff: "Low" },
      { keyword: "how to set up HOA towing program", vol: "20-40/mo", diff: "Very Low" },
      { keyword: "HOA towing laws Arizona 2026", vol: "30-60/mo", diff: "Very Low" },
    ],
  },
  {
    cluster: "Private Property Towing + [City]",
    priority: "Highest",
    difficulty: "Low (10-20)",
    timeToRank: "2-4 months",
    monthlySearches: "150-400",
    revenueImpact: "High",
    competition: "Thin pages from 2-3 competitors, no depth",
    examples: [
      "private property towing Phoenix",
      "private property impound Scottsdale",
      "private property towing Mesa AZ",
      "private property towing Tempe",
    ],
    buyingIntent: [
      { keyword: "private property towing Phoenix", vol: "150-250/mo", diff: "Medium" },
      { keyword: "private property impound Phoenix", vol: "80-120/mo", diff: "Low-Med" },
      { keyword: "unauthorized vehicle removal Phoenix", vol: "20-40/mo", diff: "Low" },
      { keyword: "private property towing company near me", vol: "40-60/mo", diff: "Medium" },
    ],
    researchIntent: [
      { keyword: "how to get a car towed from private property AZ", vol: "100-200/mo", diff: "Low" },
      { keyword: "Arizona private property towing laws", vol: "80-150/mo", diff: "Low-Med" },
      { keyword: "how much does private property towing cost", vol: "40-80/mo", diff: "Low" },
      { keyword: "private property towing signage requirements AZ", vol: "15-30/mo", diff: "Very Low" },
    ],
  },
  {
    cluster: "Apartment Towing + [City]",
    priority: "High",
    difficulty: "Very Low (5-15)",
    timeToRank: "1-3 months",
    monthlySearches: "50-200",
    revenueImpact: "High",
    competition: "Kwik Tow positions but has ZERO keyword-targeted pages",
    examples: [
      "apartment towing service Phoenix",
      "apartment parking enforcement Mesa",
      "apartment complex towing Tempe",
      "multifamily parking enforcement",
    ],
    buyingIntent: [
      { keyword: "apartment towing company Phoenix", vol: "30-50/mo", diff: "Low" },
      { keyword: "apartment parking enforcement Phoenix", vol: "20-30/mo", diff: "Low" },
      { keyword: "property management towing service Phoenix", vol: "15-30/mo", diff: "Low" },
      { keyword: "apartment towing Tempe AZ", vol: "10-20/mo", diff: "Very Low" },
    ],
    researchIntent: [
      { keyword: "apartment parking rules Arizona", vol: "40-80/mo", diff: "Low" },
      { keyword: "can apartment complex tow my car AZ", vol: "30-60/mo", diff: "Low" },
      { keyword: "how to set up towing at apartment complex", vol: "15-30/mo", diff: "Very Low" },
      { keyword: "abandoned vehicle apartment complex Arizona", vol: "20-40/mo", diff: "Low" },
    ],
  },
  {
    cluster: "Parking Enforcement + [City]",
    priority: "High",
    difficulty: "Low-Medium (15-25)",
    timeToRank: "2-5 months",
    monthlySearches: "80-200",
    revenueImpact: "High",
    competition: "phoenixparkingenforcement.com has domain-match advantage, but thin content",
    examples: [
      "parking enforcement company Phoenix",
      "parking enforcement Scottsdale",
      "parking lot enforcement Mesa",
      "fire lane towing Phoenix",
    ],
    buyingIntent: [
      { keyword: "parking enforcement company Phoenix", vol: "40-80/mo", diff: "Low-Med" },
      { keyword: "parking enforcement towing Phoenix", vol: "30-60/mo", diff: "Low" },
      { keyword: "parking enforcement Scottsdale", vol: "20-40/mo", diff: "Low" },
      { keyword: "fire lane towing Phoenix", vol: "10-20/mo", diff: "Very Low" },
    ],
    researchIntent: [
      { keyword: "how to enforce parking on private property AZ", vol: "50-100/mo", diff: "Low" },
      { keyword: "parking enforcement laws Arizona", vol: "30-60/mo", diff: "Low" },
      { keyword: "fire lane parking enforcement rules AZ", vol: "20-40/mo", diff: "Very Low" },
      { keyword: "cost of parking enforcement service", vol: "10-20/mo", diff: "Very Low" },
    ],
  },
  {
    cluster: "Arizona Towing Laws (Authority)",
    priority: "High",
    difficulty: "Medium (20-35)",
    timeToRank: "3-6 months",
    monthlySearches: "200-500",
    revenueImpact: "Medium (authority builder)",
    competition: "Law firms have some content, towing companies have almost none",
    examples: [
      "Arizona private property towing laws",
      "ARS towing regulations",
      "Phoenix towing ordinance",
      "Arizona impound laws",
    ],
    buyingIntent: [],
    researchIntent: [
      { keyword: "Arizona private property towing laws", vol: "80-150/mo", diff: "Low-Med" },
      { keyword: "can you tow from private property in AZ", vol: "50-100/mo", diff: "Low" },
      { keyword: "how long before a car is abandoned in AZ", vol: "30-60/mo", diff: "Low" },
      { keyword: "Arizona towing fee limits", vol: "20-40/mo", diff: "Low" },
    ],
  },
  {
    cluster: "Commercial Property Towing",
    priority: "Medium-High",
    difficulty: "Low (10-20)",
    timeToRank: "2-4 months",
    monthlySearches: "40-100",
    revenueImpact: "Medium-High",
    competition: "Virtually no competitors targeting commercial specifically",
    examples: [
      "commercial property towing Phoenix",
      "shopping center towing service",
      "office complex parking enforcement",
      "retail parking lot towing",
    ],
    buyingIntent: [
      { keyword: "commercial property towing Phoenix", vol: "20-40/mo", diff: "Low" },
      { keyword: "shopping center towing Phoenix", vol: "10-15/mo", diff: "Very Low" },
      { keyword: "office building towing service Phoenix", vol: "5-10/mo", diff: "Very Low" },
    ],
    researchIntent: [
      { keyword: "how to enforce parking at commercial property", vol: "10-20/mo", diff: "Very Low" },
      { keyword: "commercial property towing signage Arizona", vol: "10-15/mo", diff: "Very Low" },
    ],
  },
  {
    cluster: "Vehicle Relocation + [City]",
    priority: "Medium",
    difficulty: "Very Low (5-10)",
    timeToRank: "1-2 months",
    monthlySearches: "20-60",
    revenueImpact: "Medium",
    competition: "ZERO competitors creating content for this",
    examples: [
      "vehicle relocation service Phoenix",
      "vehicle relocation for asphalt repair",
      "parking lot repaving towing service",
      "construction zone vehicle relocation",
    ],
    buyingIntent: [
      { keyword: "vehicle relocation service Phoenix", vol: "15-30/mo", diff: "Very Low" },
      { keyword: "car relocation towing Phoenix", vol: "10-20/mo", diff: "Very Low" },
      { keyword: "parking lot repaving towing service", vol: "5-10/mo", diff: "Very Low" },
    ],
    researchIntent: [
      { keyword: "how to move cars for parking lot repaving", vol: "20-40/mo", diff: "Very Low" },
      { keyword: "vehicle relocation notice requirements AZ", vol: "10-20/mo", diff: "Very Low" },
    ],
  },
];

const COMPETITORS = [
  { name: "Kwik Tow", pages: 5, blog: 0, cityPages: 0, maturity: 2.8 },
  { name: "Arizona Impound", pages: 8, blog: 0, cityPages: 2, maturity: 2.2 },
  { name: "AZ Parking Enforcement", pages: 3, blog: 0, cityPages: 0, maturity: 1.8 },
  { name: "Zip Tow", pages: 5, blog: 0, cityPages: 0, maturity: 4.4 },
  { name: "All City Towing", pages: 8, blog: 0, cityPages: 8, maturity: 4.8 },
  { name: "All Valley Impound", pages: 5, blog: 0, cityPages: 0, maturity: 1.6 },
];

const MILESTONES = [
  { time: "Today", milestone: "Website Already Live", detail: "123+ pages deployed, 61 articles written, 24 location pages, 7 service pages, 5 Spanish pages, ROI calculator, vehicle locator, and more." },
  { time: "Month 1-2", milestone: "SEO Foundation", detail: "Google Search Console configured, 50+ local citation submissions, keyword tracking live for 150+ terms, both Google Business Profiles optimized" },
  { time: "Month 2-4", milestone: "Content Acceleration", detail: "30-60 new articles published targeting every keyword cluster, internal linking optimized, competitor gap closed" },
  { time: "Month 4-6", milestone: "Results Phase", detail: "Long-tail keywords hitting page 1, first organic leads, map pack improvements, 10+ leads/month from organic" },
  { time: "Month 6", milestone: "Performance Guarantee Checkpoint", detail: "If we haven't hit our guaranteed metrics, we keep working for free until we do." },
  { time: "Month 7-12", milestone: "Market Dominance", detail: "50+ first-page rankings, 15-25 leads/month, recognized market authority, AI search visibility" },
];

const GUARANTEE_METRICS = [
  { metric: "First-page keyword rankings", value: "15+" },
  { metric: "Organic traffic increase from baseline", value: "200%+" },
  { metric: "Map Pack placement (primary terms)", value: "Top 3" },
  { metric: "Optimized articles published", value: "30+" },
  { metric: "Google PageSpeed score", value: "90+" },
  { metric: "Qualified leads per month", value: "10+" },
];

const WHATS_BUILT = [
  { category: "Blog Articles", count: "61", detail: "SEO-optimized articles covering HOA towing, apartment enforcement, Arizona laws, property manager guides, and more" },
  { category: "Location Pages", count: "24", detail: "City + neighborhood landing pages for Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Apache Junction" },
  { category: "Service Pages", count: "7", detail: "Dedicated pages for private property impounds, HOA towing, apartment towing, parking enforcement, commercial towing, vehicle relocation" },
  { category: "Spanish Pages", count: "5", detail: "Full Spanish translations targeting the 40%+ Hispanic Phoenix market" },
  { category: "Interactive Tools", count: "4", detail: "ROI calculator, vehicle locator, parking policy template generator, property manager portal" },
  { category: "Resource Center", count: "4", detail: "Property manager guide, parking policy template, HOA enforcement checklist, FAQ" },
];

/* ── Page ─────────────────────────────────────────────────────────────── */

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Cover ─── */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center hero-text">
          <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-1.5 text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
            Prepared for Axle Towing &amp; Impound &mdash; March 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-heading">
            Digital Growth Proposal
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
            Your competitors are years behind. With AI Acrobatics, Axle Towing is already ahead &mdash; 123 pages live, 61 articles published, and zero competitors even close.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: "123+", label: "Pages Already Live" },
              { value: "61", label: "Articles Published" },
              { value: "24", label: "Location Pages" },
              { value: "0", label: "Competitor Blog Posts" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-white font-heading">{stat.value}</div>
                <div className="text-blue-200 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Already Built ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-heading">What&apos;s Already Built</h2>
          <p className="text-gray-600 text-lg mb-4 max-w-3xl">Your website isn&apos;t a concept &mdash; it&apos;s live right now. 123 pages of content that no competitor in Phoenix has anything close to.</p>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            <Link href="https://axel-towing.vercel.app" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noopener noreferrer">Preview the live site &rarr;</Link>
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {WHATS_BUILT.map((item) => (
              <div key={item.category} className="rounded-xl border border-gray-200 p-6">
                <div className="text-3xl font-bold text-blue-900 font-heading mb-1">{item.count}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.category}</h3>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6 md:p-8">
            <h3 className="font-bold text-blue-900 mb-4 font-heading text-lg">Total Site Inventory: 123+ Pages</h3>
            <div className="grid md:grid-cols-4 gap-6 text-sm">
              <div>
                <p className="font-bold text-gray-900 mb-2">Core Pages (12)</p>
                <p className="text-gray-600">Home, About, Contact, Pricing, FAQ, Gallery, Reviews, Careers, Service Area, Compare, Privacy, Terms</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">61 Blog Articles</p>
                <p className="text-gray-600">Covering every keyword cluster: HOA towing, apartment enforcement, Arizona laws, fire lane compliance, property manager guides</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">24 Location Pages</p>
                <p className="text-gray-600">8 cities + 15 neighborhoods including Downtown Phoenix, Scottsdale, ASU Area, Desert Ridge, Old Town, and more</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Interactive Tools</p>
                <p className="text-gray-600">ROI Calculator, Vehicle Locator, Parking Policy Template, Property Manager Portal, Get Quote form</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Opportunity (reframed) ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-heading">Your Competitors Are Years Behind</h2>
          <p className="text-gray-600 text-lg mb-4 max-w-3xl">Every private property towing company in Phoenix is digitally stuck in 2005. No blogs, no SEO, no content strategy. The average digital maturity score is <strong>2.2 out of 10</strong>.</p>
          <p className="text-gray-700 text-lg mb-10 max-w-3xl font-medium">By partnering with AI Acrobatics, Axle Towing is already <strong>far ahead of every competitor</strong> &mdash; before we even start the SEO campaign.</p>

          {/* Competitor table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-bold text-gray-900">Company</th>
                    <th className="text-center p-4 font-bold text-gray-900">Total Pages</th>
                    <th className="text-center p-4 font-bold text-gray-900">Blog Posts</th>
                    <th className="text-center p-4 font-bold text-gray-900">City Pages</th>
                    <th className="text-center p-4 font-bold text-gray-900">Digital Score</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPETITORS.map((c) => (
                    <tr key={c.name} className="border-b border-gray-50">
                      <td className="p-4 text-gray-700">{c.name}</td>
                      <td className="p-4 text-center text-gray-600">{c.pages}</td>
                      <td className="p-4 text-center text-red-500 font-bold">{c.blog}</td>
                      <td className="p-4 text-center text-gray-600">{c.cityPages}</td>
                      <td className="p-4 text-center text-gray-600">{c.maturity}/10</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 font-bold">
                    <td className="p-4 text-blue-900">Axle Towing (Today)</td>
                    <td className="p-4 text-center text-blue-900">123</td>
                    <td className="p-4 text-center text-green-600">61</td>
                    <td className="p-4 text-center text-blue-900">24</td>
                    <td className="p-4 text-center text-green-600">9.2/10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 font-heading">Why Every Competitor Is Behind</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Zero blogs — not a single competitor publishes content",
                  "No property manager-focused landing pages",
                  "No educational resources on Arizona towing laws",
                  "No CRM or automated follow-up systems",
                  "No AI search optimization (ChatGPT, Google AI)",
                  "No case studies or measurable results",
                  "No Spanish language content (40%+ Hispanic market)",
                  "No interactive tools (ROI calculators, vehicle locators)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 font-heading">Where Axle Towing Is Already</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "15x-25x more content than any competitor",
                  "61 blog articles (competitors combined: 0)",
                  "24 location pages covering 8 cities + 15 neighborhoods",
                  "Full Schema.org markup for Google rich results",
                  "AI search optimization for ChatGPT & Perplexity",
                  "Spanish pages for 40%+ Hispanic Phoenix market",
                  "CRM with automated lead nurture (worth $5,500)",
                  "Property manager portal, ROI tools & vehicle locator",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Investment Breakdown ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-heading">The Investment</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl">Transparent pricing. No hidden fees. One new property account pays for months of digital growth.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl border-2 border-blue-600 p-8 relative">
              <div className="absolute -top-3 left-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">ONE-TIME</div>
              <div className="text-4xl font-bold text-gray-900 font-heading mb-2">$7,500</div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Website Build</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> 123+ live pages deployed today</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> 15 custom professional photos</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> 24 location/neighborhood landing pages</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> 61 blog articles written</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> Schema.org markup on every page</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> Spanish language pages (40%+ Hispanic market)</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> Netflix/Uber-grade tech stack</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-blue-600 p-8 relative">
              <div className="absolute -top-3 left-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">MONTHLY</div>
              <div className="text-4xl font-bold text-gray-900 font-heading mb-2">$3,000<span className="text-lg text-gray-500">/mo</span></div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">SEO &amp; Content (Growth)</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> <strong>30 optimized articles per month</strong></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> 150+ keyword tracking</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> Google Business Profile management</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> 50+ local citation submissions</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> Link building outreach</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> Monthly performance reports</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> Competitor gap analysis</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">Also available: <strong>$1,500/mo</strong> for 10 articles/month (Starter plan)</p>
              </div>
            </div>
            <div className="rounded-2xl border-2 border-green-600 p-8 relative bg-green-50/50">
              <div className="absolute -top-3 left-6 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">INCLUDED</div>
              <div className="text-4xl font-bold text-gray-900 font-heading mb-2">$0</div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">CRM System</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> GoHighLevel platform (<strong>worth $5,500 separately</strong>)</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> 7-stage lead pipeline</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Automated follow-up sequences</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Lead scoring system</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Contract management</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Review/reputation management</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Full training included</li>
              </ul>
            </div>
          </div>

          {/* Tier comparison */}
          <div className="rounded-2xl border border-gray-200 p-6 mb-12 bg-gray-50">
            <h3 className="font-bold text-gray-900 mb-4 font-heading">Plan Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 font-bold text-gray-900"></th>
                    <th className="text-center p-3 font-bold text-gray-900">Starter ($1,500/mo)</th>
                    <th className="text-center p-3 font-bold text-blue-900 bg-blue-50 rounded-t-lg">Growth ($3,000/mo)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Articles per month</td>
                    <td className="p-3 text-center text-gray-600">10</td>
                    <td className="p-3 text-center font-bold text-blue-900 bg-blue-50">30</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Year 1 total investment</td>
                    <td className="p-3 text-center text-gray-600">$25,500</td>
                    <td className="p-3 text-center font-bold text-blue-900 bg-blue-50">$43,500</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Articles published (Year 1)</td>
                    <td className="p-3 text-center text-gray-600">120+</td>
                    <td className="p-3 text-center font-bold text-blue-900 bg-blue-50">360+</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Time to page 1 (low-difficulty keywords)</td>
                    <td className="p-3 text-center text-gray-600">3-6 months</td>
                    <td className="p-3 text-center font-bold text-blue-900 bg-blue-50">1-3 months</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Keyword tracking</td>
                    <td className="p-3 text-center text-green-600">&#10003;</td>
                    <td className="p-3 text-center text-green-600 bg-blue-50">&#10003;</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Google Business Profile management</td>
                    <td className="p-3 text-center text-green-600">&#10003;</td>
                    <td className="p-3 text-center text-green-600 bg-blue-50">&#10003;</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700">Performance guarantee</td>
                    <td className="p-3 text-center text-green-600">&#10003;</td>
                    <td className="p-3 text-center text-green-600 bg-blue-50">&#10003;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ROI */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-950 to-blue-900 p-8 md:p-10 text-white">
            <h3 className="text-2xl font-bold mb-6 font-heading text-white">Return on Investment</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-blue-100 mb-4">Conservative projections based on average private property towing account values:</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b border-white/10 pb-2"><span className="text-blue-200">New accounts from SEO (Year 1)</span><span className="font-bold">5-10</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2"><span className="text-blue-200">Average annual value per account</span><span className="font-bold">$18,000-$36,000</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2"><span className="text-blue-200">Additional annual revenue</span><span className="font-bold text-green-400">$90,000-$360,000</span></li>
                  <li className="flex justify-between"><span className="text-blue-200">ROI on Growth plan ($43,500)</span><span className="font-bold text-green-400">207%-828%</span></li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 flex flex-col justify-center">
                <p className="text-blue-100 text-sm mb-3">Break-even point:</p>
                <div className="text-5xl font-bold font-heading mb-2 text-white">1-2</div>
                <p className="text-blue-200 text-sm">new property accounts. That&apos;s it. Everything after that is pure profit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Keyword Analysis ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-heading">Keyword &amp; Ranking Analysis</h2>
          <p className="text-gray-600 text-lg mb-4 max-w-3xl">Every keyword cluster below represents real people in Phoenix searching for the exact services Axle Towing provides. We&apos;ve categorized them by <strong>buying intent</strong> (ready to hire) and <strong>research intent</strong> (learning, will hire soon).</p>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">Total estimated monthly search volume across all target keywords: <strong className="text-blue-900">~5,955 searches/month</strong> in the Phoenix metro alone.</p>

          <div className="space-y-8">
            {KEYWORD_CLUSTERS.map((cluster) => (
              <div key={cluster.cluster} className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
                {/* Cluster header */}
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 font-heading">{cluster.cluster}</h3>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cluster.priority === "Highest" ? "bg-red-100 text-red-700" : cluster.priority === "High" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>
                      {cluster.priority} Priority
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                    <div><span className="text-gray-500 block text-xs">Difficulty</span><span className="font-bold text-gray-900">{cluster.difficulty}</span></div>
                    <div><span className="text-gray-500 block text-xs">Time to Rank</span><span className="font-bold text-green-700">{cluster.timeToRank}</span></div>
                    <div><span className="text-gray-500 block text-xs">Monthly Searches</span><span className="font-bold text-gray-900">{cluster.monthlySearches}</span></div>
                    <div><span className="text-gray-500 block text-xs">Revenue Impact</span><span className="font-bold text-gray-900">{cluster.revenueImpact}</span></div>
                    <div className="col-span-2 md:col-span-1"><span className="text-gray-500 block text-xs">Competition</span><span className="font-bold text-green-700 text-xs">{cluster.competition}</span></div>
                  </div>
                </div>
                {/* Keywords */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {cluster.buyingIntent.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-red-700 mb-3 uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full" />
                          Buying Intent (Ready to Hire)
                        </h4>
                        <div className="space-y-2">
                          {cluster.buyingIntent.map((kw) => (
                            <div key={kw.keyword} className="flex items-center justify-between bg-red-50/50 rounded-lg px-3 py-2 text-sm">
                              <span className="text-gray-800 font-medium">&ldquo;{kw.keyword}&rdquo;</span>
                              <div className="flex items-center gap-3 shrink-0">
                                <span className="text-gray-500 text-xs">{kw.vol}</span>
                                <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">{kw.diff}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-blue-700 mb-3 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                        Research Intent (Learning Now, Hiring Soon)
                      </h4>
                      <div className="space-y-2">
                        {cluster.researchIntent.map((kw) => (
                          <div key={kw.keyword} className="flex items-center justify-between bg-blue-50/50 rounded-lg px-3 py-2 text-sm">
                            <span className="text-gray-800 font-medium">&ldquo;{kw.keyword}&rdquo;</span>
                            <div className="flex items-center gap-3 shrink-0">
                              <span className="text-gray-500 text-xs">{kw.vol}</span>
                              <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">{kw.diff}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Page 1 Means ─── */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 hero-text">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading text-white">What Page 1 Means for Axle Towing</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-3xl">Being on page 1 of Google isn&apos;t vanity &mdash; it&apos;s revenue. Here&apos;s what the numbers look like when Axle Towing dominates Phoenix search results.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold font-heading mb-2 text-white">5,955</div>
              <p className="text-blue-200 text-sm mb-3">monthly searches for your exact services in Phoenix</p>
              <p className="text-blue-100/80 text-xs">People actively looking for private property towing, parking enforcement, HOA towing, apartment towing, and vehicle relocation right now.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold font-heading mb-2 text-white">28.5%</div>
              <p className="text-blue-200 text-sm mb-3">average click-through rate for position #1</p>
              <p className="text-blue-100/80 text-xs">The #1 result gets ~28.5% of all clicks. #2 gets ~15%. #3 gets ~11%. Below position 3, clicks drop dramatically. Page 2? Less than 1% of searchers ever go there.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold font-heading mb-2 text-white">$33</div>
              <p className="text-blue-200 text-sm mb-3">cost per organic lead by Month 12</p>
              <p className="text-blue-100/80 text-xs">Compare that to Google Ads for &ldquo;towing Phoenix&rdquo; at $15-25 per click (not per lead &mdash; per click). Organic SEO delivers leads that keep coming for free.</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-6 font-heading text-white">The Math: What Ranking #1-3 Delivers</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-3 text-blue-200">Scenario</th>
                    <th className="text-center p-3 text-blue-200">Monthly Searches Captured</th>
                    <th className="text-center p-3 text-blue-200">Leads/Month (3% conv.)</th>
                    <th className="text-center p-3 text-blue-200">New Accounts/Year (10% close)</th>
                    <th className="text-center p-3 text-blue-200">Revenue Added</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="p-3 font-medium">Top 3 for 20 keywords</td>
                    <td className="p-3 text-center">~600 visits/mo</td>
                    <td className="p-3 text-center">18</td>
                    <td className="p-3 text-center">~22</td>
                    <td className="p-3 text-center font-bold text-green-400">$396K-$792K</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-3 font-medium">Top 3 for 50 keywords</td>
                    <td className="p-3 text-center">~1,500 visits/mo</td>
                    <td className="p-3 text-center">45</td>
                    <td className="p-3 text-center">~54</td>
                    <td className="p-3 text-center font-bold text-green-400">$972K-$1.9M</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Market dominance (100+ keywords)</td>
                    <td className="p-3 text-center">~3,000 visits/mo</td>
                    <td className="p-3 text-center">90</td>
                    <td className="p-3 text-center">~108</td>
                    <td className="p-3 text-center font-bold text-green-400">$1.9M-$3.8M</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-blue-200/60 text-xs mt-4">*Based on average account value of $18,000-$36,000/year. Actual results will vary based on close rate and account size.</p>
          </div>
        </div>
      </section>

      {/* ── The Plan to Get There ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-heading">The Plan to Page 1</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">Your website is already built and live. Here&apos;s the 6-12 month campaign to turn it into a lead generation machine.</p>

          <div className="space-y-6">
            {MILESTONES.map((m, i) => (
              <div key={m.time} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full ${i === 0 ? "bg-green-600" : "bg-blue-600"} text-white flex items-center justify-center font-bold text-sm shrink-0`}>{i === 0 ? "✓" : i}</div>
                  {i < MILESTONES.length - 1 && <div className="w-0.5 flex-1 bg-blue-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className={`text-sm font-bold ${i === 0 ? "text-green-600" : "text-blue-600"} mb-1`}>{m.time}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{m.milestone}</h3>
                  <p className="text-gray-600 text-sm">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Phoenix = Easy Wins ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-heading">Why Phoenix = Fast Rankings</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">Being physically located in Phoenix gives Axle Towing a massive advantage that out-of-market competitors can never replicate.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Two Physical Locations", desc: "Apache Junction + Phoenix yards create two Google Business Profile listings, doubling your visibility in the Map Pack across the entire metro." },
              { title: "8-City Service Area", desc: "24 location pages covering Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, and Apache Junction — each one a ranking opportunity." },
              { title: "Local Citations", desc: "50+ directory listings (Google, Yelp, BBB, Arizona Towing Association, AMA, 6 Chambers of Commerce) all pointing to your Phoenix addresses." },
              { title: "Google's Local Preference", desc: "Google heavily favors local businesses in Map Pack results. A Phoenix-based towing company will ALWAYS outrank a national directory for 'towing Phoenix' searches." },
              { title: "22,100 New Units Under Construction", desc: "Phoenix's multifamily construction boom means new apartment complexes coming online every month — each one a potential client searching for parking enforcement." },
              { title: "3.43 Million Population Served", desc: "The Phoenix metro is the 5th largest in the US. That's 3.43 million people across 8 cities — all within your service area." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6-Month Guarantee ─── */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 hero-text">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading text-white">6-Month Performance Guarantee</h2>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl">We put our money where our mouth is.</p>
          <p className="text-xl md:text-2xl font-bold text-white mb-10 max-w-3xl">If we don&apos;t hit these metrics by Month 6, we keep working for free until you get the results you&apos;re looking for.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {GUARANTEE_METRICS.map((g) => (
              <div key={g.metric} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 text-center">
                <div className="text-3xl font-bold text-white font-heading mb-2">{g.value}</div>
                <p className="text-blue-200 text-sm">{g.metric}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 text-center max-w-2xl mx-auto">
            <p className="text-blue-100 text-sm mb-2">Minimum commitment</p>
            <div className="text-3xl font-bold text-white font-heading mb-2">6 Months</div>
            <p className="text-blue-200 text-sm">Results guaranteed or we work for free until they&apos;re delivered. No risk to you.</p>
          </div>
        </div>
      </section>

      {/* ── Year-End Targets ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-heading">Year-End Targets (Month 12)</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl">Where Axle Towing will be after 12 months of execution.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "50+", label: "First-page keyword rankings" },
              { value: "2,000+", label: "Monthly organic visitors" },
              { value: "15-25", label: "Qualified leads per month" },
              { value: "10,000+", label: "Google Business Profile impressions/mo" },
              { value: "Top 3", label: "Map pack rankings (primary terms)" },
              { value: "180+", label: "Total articles published" },
              { value: "+15-25pts", label: "Domain authority increase" },
              { value: "60-75+", label: "Google reviews per location" },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <div className="text-2xl font-bold text-blue-900 font-heading mb-1">{stat.value}</div>
                <p className="text-gray-600 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Opportunity ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-heading">The Market Opportunity</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">Phoenix&apos;s total addressable market for private property towing services is massive and growing &mdash; and nobody is competing for it online.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { value: "7,100+", label: "HOA communities in Phoenix metro" },
              { value: "7,580+", label: "Apartment complexes" },
              { value: "12,700+", label: "Commercial properties" },
              { value: "22,100", label: "New multifamily units under construction" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white p-6 text-center border border-gray-100">
                <div className="text-3xl font-bold text-blue-900 font-heading mb-1">{stat.value}</div>
                <p className="text-gray-700 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-blue-950 to-blue-900 p-8 text-white">
            <h3 className="text-2xl font-bold font-heading mb-4 text-white">Why This Opportunity Won&apos;t Last Forever</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-blue-200 mb-2 font-bold">Competitors Will Wake Up</p>
                <p className="text-blue-100/80">Right now, zero competitors have a blog or content strategy. That won&apos;t last. The first company to dominate search wins the market for years. That should be Axle Towing.</p>
              </div>
              <div>
                <p className="text-blue-200 mb-2 font-bold">Generational Shift</p>
                <p className="text-blue-100/80">Younger property managers search online. The old-guard relationship moats won&apos;t transfer to the next generation of decision-makers.</p>
              </div>
              <div>
                <p className="text-blue-200 mb-2 font-bold">AI Search Revolution</p>
                <p className="text-blue-100/80">When property managers ask ChatGPT &ldquo;who does private property towing in Scottsdale?&rdquo; &mdash; Axle Towing will be the answer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─── */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 hero-text">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">Ready to Dominate Phoenix?</h2>
          <p className="text-blue-100 text-lg mb-8">Your website is built. 123 pages are live. 61 articles published. The content advantage is already in place. Now it&apos;s time to turn it on.</p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold font-heading text-white">$7,500</div>
              <div className="text-blue-200 text-xs">Website (built)</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold font-heading text-white">$3,000/mo</div>
              <div className="text-blue-200 text-xs">SEO &amp; Content (30 articles)</div>
            </div>
            <div className="bg-green-500/20 rounded-xl p-4 border border-green-400/20">
              <div className="text-2xl font-bold font-heading text-white">$5,500 value</div>
              <div className="text-green-200 text-xs">CRM System (included free)</div>
            </div>
          </div>
          <p className="text-blue-200 text-sm mb-8">6-month guarantee &mdash; we deliver results or we work for free until we do.</p>
          <Link href="/invoice" className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors">
            View Invoice &amp; Next Steps &rarr;
          </Link>
          <p className="text-blue-200/60 text-sm mt-8">Prepared by AI Acrobatics &mdash; Performance-Driven Digital Agency</p>
        </div>
      </section>
    </div>
  );
}
