"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

/* ── Parallax Hook ── */
function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      ref.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return ref;
}

const INCLUDED_FEATURES = [
  { label: "24/7 Parking Patrol", icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" },
  { label: "Compliant Signage Installation", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" },
  { label: "Unauthorized Vehicle Removal", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
  { label: "Full Documentation & Reporting", icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" },
  { label: "Online Property Portal Access", icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" },
  { label: "Fire Lane Enforcement", icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" },
  { label: "Handicap Space Enforcement", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Guest Parking Management", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
];

const COMPARISON_ROWS = [
  { feature: "Monthly Cost", axle: "$0 / month", industry: "$200 - $500 / month" },
  { feature: "Signage Installation", axle: "Included", industry: "$500 - $2,000 one-time" },
  { feature: "24/7 Patrol", axle: "Included", industry: "$50 - $100 / hour" },
  { feature: "Vehicle Removal", axle: "Included", industry: "$75 - $150 per tow" },
  { feature: "Documentation", axle: "Included", industry: "Extra charge" },
  { feature: "Online Portal", axle: "Included", industry: "Rarely offered" },
  { feature: "Contract Length", axle: "No long-term contract", industry: "12 - 24 month minimum" },
  { feature: "Setup Fee", axle: "$0", industry: "$500 - $1,500" },
];

const KLARNA_TERMS = [
  { months: 6, apr: 0, label: "6 months" },
  { months: 12, apr: 0, label: "12 months" },
  { months: 24, apr: 9.99, label: "24 months" },
  { months: 36, apr: 9.99, label: "36 months" },
];

function KlarnaPricingCard() {
  const [selectedTerm, setSelectedTerm] = useState(1); // default 12 months
  const total = 7500;
  const term = KLARNA_TERMS[selectedTerm];
  const monthlyInterestRate = term.apr / 100 / 12;
  const monthly =
    term.apr === 0
      ? total / term.months
      : (total * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -term.months));
  const totalPaid = monthly * term.months;
  const totalInterest = totalPaid - total;

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20">
      {/* Card Header */}
      <div className="bg-white px-8 md:px-12 pt-10 pb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 mb-6">
          <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-bold text-amber-700">Launch Offer &mdash; Limited Time</span>
        </div>
        <div className="flex items-baseline justify-center gap-3">
          <span className="text-2xl md:text-3xl font-bold text-gray-400 line-through">$10,000</span>
          <span className="text-6xl md:text-7xl font-bold font-heading" style={{ color: "#1a202c" }}>$7,500</span>
        </div>
        <div className="mt-3 inline-flex items-center gap-2 bg-green-50 rounded-lg px-4 py-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-semibold text-green-700">You save $2,500 &mdash; launch discount applied</span>
        </div>
        <p className="text-gray-500 mt-3 text-sm">
          One-time investment &mdash; website, SEO, content, CRM &mdash; everything included
        </p>
      </div>

      {/* What is Included */}
      <div className="bg-gray-50 px-8 md:px-12 py-8">
        <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-gray-500 mb-5">Everything included:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "127-page professional website",
            "Full SEO optimization (150+ keywords)",
            "96 blog articles written and published",
            "Property manager client portal",
            "GoHighLevel CRM setup",
            "Google Business Profile optimization",
            "12-month SEO content strategy",
            "Competitor analysis and positioning",
            "Mobile-responsive on all devices",
            "Analytics and lead tracking dashboard",
            "Monthly performance reporting",
            "Ongoing technical support",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="bg-white px-8 md:px-12 py-8 border-t border-gray-100">
        <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-gray-500 mb-5">Your Options</h4>
        <div className="space-y-4">
          {/* Tier 1: Website + SEO */}
          <div className="rounded-xl border-2 border-blue-200 bg-blue-50/50 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">One-Time</span>
                </div>
                <h5 className="text-base font-bold font-heading text-gray-900">Website + SEO + Content</h5>
                <p className="text-xs text-gray-600 mt-1">127-page website, 96 articles, 150+ keywords, CRM setup, Spanish pages &mdash; everything built and delivered.</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm text-gray-400 line-through">$10,000</div>
                <div className="text-2xl font-bold font-heading text-blue-700">$7,500</div>
              </div>
            </div>
          </div>
          {/* Tier 2: Outreach Campaigns */}
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold bg-amber-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Monthly Add-On</span>
                </div>
                <h5 className="text-base font-bold font-heading text-gray-900">Customized Outreach Campaigns</h5>
                <p className="text-xs text-gray-600 mt-1">Done-for-you campaigns targeting property managers, HOAs, apartment complexes. Prospect lists, personalized email/SMS, appointment setting.</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm text-gray-400 line-through">$4,500/mo</div>
                <div className="text-2xl font-bold font-heading text-amber-600">$3,000<span className="text-sm font-normal text-gray-500">/mo</span></div>
              </div>
            </div>
          </div>
          {/* Tier 3: CRM & Automations */}
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold bg-green-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Ongoing</span>
                </div>
                <h5 className="text-base font-bold font-heading text-gray-900">CRM &amp; Automations Only</h5>
                <p className="text-xs text-gray-600 mt-1">GoHighLevel access, automated campaigns, AI receptionist, lead scoring, pipeline management, analytics, and technical support.</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-2xl font-bold font-heading text-green-700">$500<span className="text-sm font-normal text-gray-500">/mo</span></div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center pt-1">No lock-in. Run outreach as long as you want, then drop to $500/mo to keep your CRM and automations running.</p>
        </div>
      </div>

      {/* Klarna Financing */}
      <div className="bg-gradient-to-b from-pink-50 to-white px-8 md:px-12 py-8 border-t border-gray-100">
        <div className="flex items-center gap-3 mb-5">
          {/* Klarna Logo */}
          <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm font-heading">K.</span>
          </div>
          <div>
            <h4 className="text-base font-bold font-heading" style={{ color: "#1a202c" }}>Pay with Klarna</h4>
            <p className="text-xs text-gray-500">Split your payment into easy monthly installments</p>
          </div>
        </div>

        {/* What is Klarna */}
        <div className="bg-white rounded-xl p-4 mb-6 border border-pink-100">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-pink-600">Klarna</strong> is a trusted global payment provider used by 150 million shoppers worldwide. Instead of paying the full $7,500 upfront, Klarna lets you split it into fixed monthly payments with <strong>0% interest for up to 12 months</strong>. No hidden fees, no surprises. Approval takes seconds and does not affect your credit score.
          </p>
        </div>

        {/* Payment Calculator */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
            <h5 className="text-sm font-bold font-heading text-gray-700 flex items-center gap-2">
              <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
              </svg>
              Payment Calculator
            </h5>
          </div>
          <div className="p-5">
            {/* Term Selector */}
            <div className="grid grid-cols-4 gap-2 mb-5">
              {KLARNA_TERMS.map((t, i) => (
                <button
                  key={t.months}
                  onClick={() => setSelectedTerm(i)}
                  className={`rounded-lg py-2.5 px-2 text-center text-sm font-semibold transition-all ${
                    selectedTerm === i
                      ? "bg-pink-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {t.label}
                  {t.apr === 0 && (
                    <div className={`text-[10px] font-normal mt-0.5 ${selectedTerm === i ? "text-pink-100" : "text-green-600"}`}>
                      0% APR
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Result */}
            <div className="text-center py-4 bg-pink-50 rounded-xl mb-4">
              <div className="text-sm text-gray-600 mb-1">Your monthly payment</div>
              <div className="text-4xl md:text-5xl font-bold font-heading text-pink-600">
                ${Math.round(monthly).toLocaleString()}
                <span className="text-lg text-pink-400 font-normal">/mo</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                for {term.months} months {term.apr > 0 ? `at ${term.apr}% APR` : "at 0% interest"}
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-600">Total amount</span>
                <span className="font-semibold text-gray-800">$7,500</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-600">Number of payments</span>
                <span className="font-semibold text-gray-800">{term.months}</span>
              </div>
              {term.apr > 0 && (
                <>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-600">Interest ({term.apr}% APR)</span>
                    <span className="font-semibold text-gray-800">${Math.round(totalInterest).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-600">Total paid</span>
                    <span className="font-semibold text-gray-800">${Math.round(totalPaid).toLocaleString()}</span>
                  </div>
                </>
              )}
              {term.apr === 0 && (
                <div className="flex justify-between py-1.5">
                  <span className="text-gray-600">Interest</span>
                  <span className="font-semibold text-green-600">$0 (0% APR)</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-3 text-center">
          Klarna financing subject to approval. Soft credit check only &mdash; no impact to your credit score. 0% APR available for 6-12 month terms.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-white px-8 md:px-12 pb-10 pt-6 text-center border-t border-gray-100">
        <Link href="/contact" className="btn-primary px-8 py-3 w-full sm:w-auto inline-flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          Get Started Today
        </Link>
        <p className="text-sm text-gray-500 mt-3">Pay in full or use Klarna &mdash; as low as <strong>${Math.round(7500 / 36)}/mo</strong></p>
        <p className="text-xs text-gray-400 mt-1">No long-term lock-in. Results guaranteed.</p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const parallaxRef = useParallax();

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[55vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/optimized/axle-towing-arizona-skyline-panoramic-phoenix-az.webp)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full text-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-green-400/30">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-sm font-semibold tracking-wide text-green-300">100% Free for Property Owners</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading leading-tight mb-6">
              $0 for Property Owners.
              <br />
              <span className="text-white">
                Always.
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed">
              Professional parking enforcement, patrol, signage, and vehicle removal -- all completely free. No hidden fees. No contracts.
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Transparent Pricing</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              See the Difference
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Compare {COMPANY.name} to the industry average. The savings speak for themselves.
            </p>
          </div>

          <div className="reveal">
            <div className="glass-card rounded-2xl overflow-hidden shadow-lg">
              {/* Header Row */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <div className="p-5 md:p-6 font-heading font-bold text-sm md:text-base uppercase tracking-wider">
                  Feature
                </div>
                <div className="p-5 md:p-6 text-center border-l border-white/10">
                  <div className="text-xs uppercase tracking-wider text-blue-200 mb-1">Axle Towing</div>
                  <div className="text-2xl md:text-3xl font-bold font-heading text-green-400">$0<span className="text-sm text-green-300 font-normal">/mo</span></div>
                </div>
                <div className="p-5 md:p-6 text-center border-l border-white/10">
                  <div className="text-xs uppercase tracking-wider text-blue-200 mb-1">Industry Average</div>
                  <div className="text-2xl md:text-3xl font-bold font-heading text-red-300">$200-500<span className="text-sm text-red-200 font-normal">/mo</span></div>
                </div>
              </div>

              {/* Rows */}
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 items-center ${i % 2 === 0 ? "bg-white" : "bg-blue-50/50"} ${i < COMPARISON_ROWS.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="p-4 md:p-5 text-sm md:text-base font-semibold text-gray-800">{row.feature}</div>
                  <div className="p-4 md:p-5 text-center border-l border-gray-100">
                    <span className="inline-flex items-center gap-1.5 text-green-700 font-semibold text-sm md:text-base">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {row.axle}
                    </span>
                  </div>
                  <div className="p-4 md:p-5 text-center border-l border-gray-100">
                    <span className="text-gray-700 text-sm md:text-base">{row.industry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Included Features ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">All Included</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              Everything You Get at $0
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              No tiers, no upsells. Every property owner gets the full suite of services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDED_FEATURES.map((feat, i) => (
              <div
                key={feat.label}
                className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-bold font-heading" style={{ color: "#1a202c" }}>{feat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vehicle Owners: Retrieving Your Car ── */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider font-heading">Vehicle Owners</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              Retrieving Your Vehicle
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-red-400 to-red-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              If your vehicle was towed, here is what you need to know about storage fees, payment, and the pickup process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            {/* Storage Fees */}
            <div className="glass-card rounded-2xl p-8 shadow-md">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4" style={{ color: "#1a202c" }}>Storage Fees</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>First 72 hours</span>
                  <span className="font-bold text-green-700">No charge</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>After 72 hours</span>
                  <span className="font-bold text-gray-800">$15 / day</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Tow / Recovery fee</span>
                  <span className="font-bold text-gray-800">Per ARS schedule</span>
                </div>
                <p className="text-xs text-gray-600 pt-2">
                  All fees comply with Arizona Revised Statutes (ARS) 28-1104 and 28-1108.
                </p>
              </div>
            </div>

            {/* Accepted Payment */}
            <div className="glass-card rounded-2xl p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4" style={{ color: "#1a202c" }}>Accepted Payments</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Cash", "Visa / Mastercard / Discover", "Debit cards", "Money order / Cashier's check"].map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Bring */}
            <div className="glass-card rounded-2xl p-8 shadow-md">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4" style={{ color: "#1a202c" }}>What to Bring</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Valid government-issued photo ID",
                  "Vehicle registration or title",
                  "Proof of insurance",
                  "Payment for applicable fees",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Make It Free ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, rgba(27,42,63,0.95) 0%, rgba(30,107,184,0.85) 100%)" }} />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider font-heading">Our Model</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">
              How We Make It Free
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mb-6" />
            <p className="text-white/95 text-lg max-w-2xl mx-auto leading-relaxed">
              Our business model is simple and transparent. You never pay a dime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "We Patrol Your Property",
                desc: "Our team monitors your parking lots, enforces your rules, and removes unauthorized vehicles -- all at no cost to you.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Impound Fees Cover Costs",
                desc: "When we tow an unauthorized vehicle, the vehicle owner pays a legally regulated impound fee to retrieve it. This is our revenue source.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Everyone Wins",
                desc: "You get a clean, well-managed property. Your tenants get available parking. And violators pay for the service -- not you.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="text-center reveal"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="w-32 h-32 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex flex-col items-center justify-center gap-2 p-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold font-heading text-lg">
                    {item.step}
                  </div>
                  <div className="text-blue-200">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-3">{item.title}</h3>
                <p className="text-white/90 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Page 1 of Google Means For Your Business ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Digital Growth</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              What Being on Page 1 of Google Means for You
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Right now, property managers searching for &ldquo;private property towing Phoenix&rdquo; find your competitors. With a page 1 ranking, they find <strong>you</strong> instead.
            </p>
          </div>

          {/* What Page 1 Actually Means */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                metric: "92%",
                label: "of all search clicks go to Page 1 results",
                detail: "If you are not on page 1, you are invisible. Page 2 gets less than 6% of all clicks.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                metric: "40-60",
                label: "new inbound calls per month from organic search",
                detail: "Property managers actively searching for towing services are ready to sign up. These are not cold leads -- they are looking for you right now.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                metric: "$15K+",
                label: "in new annual revenue per property signed",
                detail: "Each new property contract generates recurring revenue through impound fees, storage, and expanded service areas. Page 1 visibility compounds over time.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 text-center reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mx-auto mb-5`}>
                  {item.icon}
                </div>
                <div className={`text-4xl md:text-5xl font-bold font-heading ${item.color} mb-2`}>{item.metric}</div>
                <div className="text-base font-semibold text-gray-800 mb-3">{item.label}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* ROI Breakdown */}
          <div className="reveal glass-card rounded-2xl overflow-hidden shadow-lg border border-blue-100/60 mb-16">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 md:px-10 py-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold font-heading text-white">Your ROI at a Glance</h3>
              <p className="text-blue-200 text-sm mt-1">What you get vs. what it costs without us</p>
            </div>
            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Without Digital Presence */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-bold font-heading text-red-600 mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    Without a Digital Presence
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    {[
                      "Competitors rank above you on Google",
                      "Property managers can not find you online",
                      "No website means no credibility check",
                      "Word-of-mouth only = slow, unpredictable growth",
                      "Zero lead tracking or follow-up system",
                      "Losing $10K-$50K+ per year in missed contracts",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* With Digital Growth Partnership */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-bold font-heading text-green-600 mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    With the Digital Growth Package
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    {[
                      "Page 1 Google rankings for 150+ towing keywords",
                      "Professional website that converts visitors to calls",
                      "Property manager portal that builds trust instantly",
                      "96 SEO-optimized articles driving organic traffic",
                      "CRM and lead tracking so no inquiry falls through",
                      "Projected 40-60 new inbound calls per month",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ROI Math */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="text-center font-bold font-heading text-lg mb-6" style={{ color: "#1a202c" }}>The Math Is Simple</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 rounded-xl p-5">
                    <div className="text-sm text-gray-600 mb-1">Average New Contract Value</div>
                    <div className="text-2xl md:text-3xl font-bold font-heading text-blue-700">$15,000</div>
                    <div className="text-xs text-gray-500 mt-1">per property / year</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5">
                    <div className="text-sm text-gray-600 mb-1">New Properties from SEO</div>
                    <div className="text-2xl md:text-3xl font-bold font-heading text-green-700">5-10</div>
                    <div className="text-xs text-gray-500 mt-1">in first 12 months</div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-5">
                    <div className="text-sm text-gray-600 mb-1">Projected Year 1 Revenue</div>
                    <div className="text-2xl md:text-3xl font-bold font-heading text-amber-700">$75K - $150K</div>
                    <div className="text-xs text-gray-500 mt-1">from organic leads alone</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing: Digital Growth Package ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, rgba(27,42,63,0.97) 0%, rgba(30,107,184,0.90) 100%)" }} />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider font-heading">Limited Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">
              Your Digital Growth Investment
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full mb-6" />
            <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to dominate page 1 of Google and turn your online presence into a lead-generating machine.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-2xl mx-auto reveal">
            <KlarnaPricingCard />
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 reveal">
            {[
              { label: "Payback by Month 8-9", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "5-10 New Properties Year 1", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18" },
              { label: "150+ Keywords Targeted", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2.5">
                <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="text-sm font-semibold text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4" style={{ color: "#1a202c" }}>
            Ready to Dominate Page 1?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Your competitors are not waiting. Every day without a digital presence is another property contract going to someone else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-3 inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              Get Started for $7,500
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
