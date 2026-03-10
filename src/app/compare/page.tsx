"use client";

import { useEffect, useRef } from "react";
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

/* ── Comparison Data ── */
const COMPARISON_ROWS = [
  { feature: "Cost to Property Owner", axle: "$0 — Always Free", industry: "$0–500/month", axleWins: true },
  { feature: "Contract Required", axle: "No Long-Term Contracts", industry: "1–3 year contracts", axleWins: true },
  { feature: "Response Time", axle: "< 30 minutes", industry: "45–90 minutes", axleWins: true },
  { feature: "Online Portal", axle: "Yes — Real-time tracking", industry: "Rare", axleWins: true },
  { feature: "Signage Included", axle: "Free installation", industry: "Often extra charge", axleWins: true },
  { feature: "Coverage Area", axle: "8 cities, 2 yards", industry: "1–3 cities", axleWins: true },
  { feature: "24/7 Service", axle: "Yes", industry: "Limited hours", axleWins: true },
  { feature: "Photo Documentation", axle: "Every tow documented", industry: "Inconsistent", axleWins: true },
  { feature: "Monthly Reports", axle: "Detailed analytics", industry: "Basic or none", axleWins: true },
  { feature: "Property Patrol", axle: "Customizable schedule", industry: "Fixed schedule", axleWins: true },
];

const DIFFERENTIATORS = [
  {
    title: "Zero Cost, Zero Risk",
    desc: "Our entire service is funded through legally mandated impound fees. Property owners never pay a dime — no setup fees, no monthly retainers, no hidden charges.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Technology-First Approach",
    desc: "Real-time tow tracking, automated notifications, and a digital portal give you complete visibility. Most competitors still rely on phone calls and paper logs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Rapid Response Guarantee",
    desc: "With 6+ trucks across 2 yards and 8 cities, we guarantee sub-30-minute response times. Industry average is 45–90 minutes — if they show up at all.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Full Legal Compliance",
    desc: "Every tow follows ARS requirements to the letter. Proper signage, documentation, and notification protect your property from liability — something many competitors overlook.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

/* ── Check / X Icons ── */
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-500 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-red-400 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function ComparePage() {
  const parallaxRef = useParallax();

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              See How We <span className="text-gradient">Compare</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Not all towing companies are created equal. See why Phoenix property managers
              are switching to Axle Towing &amp; Impound.
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-20 bg-white wave-separator">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Feature-by-Feature Comparison
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We let the facts speak for themselves. Here&rsquo;s how Axle Towing stacks up against the industry average.
            </p>
          </div>
          <div className="reveal glass-card-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-900 to-primary text-white">
                    <th className="px-6 py-4 font-heading text-sm uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-4 font-heading text-sm uppercase tracking-wider text-center">Axle Towing</th>
                    <th className="px-6 py-4 font-heading text-sm uppercase tracking-wider text-center">Industry Average</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-blue-50/30"} hover:bg-blue-50/60 transition-colors`}
                    >
                      <td className="px-6 py-4 font-semibold text-blue-900 text-sm md:text-base">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-sm md:text-base">
                        <span className="inline-flex items-center gap-1">
                          <CheckIcon />
                          <span className="text-green-700 font-medium">{row.axle}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm md:text-base">
                        <span className="inline-flex items-center gap-1">
                          <XIcon />
                          <span className="text-gray-500">{row.industry}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Sets Us Apart ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Four key reasons property managers across Phoenix choose Axle Towing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DIFFERENTIATORS.map((d, i) => (
              <div
                key={d.title}
                className={`reveal glass-card-white rounded-2xl p-8 shadow-md delay-${(i + 1) * 100}`}
              >
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-5 border-glow-blue">
                  {d.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-heading">{d.title}</h3>
                <p className="text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <div className="glass rounded-2xl p-10 md:p-14 glow-blue">
              <svg className="w-12 h-12 text-white/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 italic">
                &ldquo;We switched to Axle Towing after dealing with missed calls and slow response times from our previous company. Within the first month, unauthorized parking dropped by over 80%. Their online portal alone saves me hours every week. Best part? It costs us absolutely nothing.&rdquo;
              </blockquote>
              <div className="text-white/90">
                <div className="font-bold text-white font-heading">Sarah M.</div>
                <div className="text-sm">Property Manager &mdash; 320-Unit Phoenix Apartment Community</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Switch? It&rsquo;s Free.
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Join hundreds of property managers who upgraded to modern, professional parking enforcement
            &mdash; at zero cost. No contracts, no commitments, no risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
