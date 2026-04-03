"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

/* -- Parallax Hook -- */
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

/* -- Steps Data -- */
const STEPS = [
  {
    step: "1",
    title: "Refer a Client",
    desc: "Send us a referral through our partner portal or quick-submit form. It takes less than 60 seconds.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "We Serve Them",
    desc: "Our team reaches out, assesses the property, and sets up compliant signage and patrol services -- completely free for the property owner.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "You Earn Rewards",
    desc: "Once the referred property signs up and their first patrol is completed, you receive your commission. Higher tiers unlock even bigger payouts.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.25-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
];

/* -- Partner Tiers -- */
const TIERS = [
  {
    name: "Bronze Partner",
    range: "1-5 referrals/month",
    commission: "$100",
    perReferral: "per referral",
    color: "from-amber-700 to-amber-800",
    badgeColor: "bg-amber-700/20 border-amber-600/40 text-amber-400",
    ringColor: "",
    benefits: [
      "Standard commission rate",
      "Partner portal access",
      "Monthly performance reports",
      "Email support",
    ],
  },
  {
    name: "Silver Partner",
    range: "6-15 referrals/month",
    commission: "$150",
    perReferral: "per referral",
    color: "from-gray-400 to-gray-500",
    badgeColor: "bg-gray-400/20 border-gray-300/40 text-gray-300",
    ringColor: "ring-2 ring-gray-300/50",
    benefits: [
      "Enhanced commission rate",
      "Priority service for your referrals",
      "Co-branded marketing materials",
      "Dedicated partner support line",
      "Quarterly business reviews",
    ],
  },
  {
    name: "Gold Partner",
    range: "16+ referrals/month",
    commission: "$200+",
    perReferral: "per referral",
    color: "from-amber-400 to-amber-500",
    badgeColor: "bg-amber-500/20 border-amber-400/40 text-amber-300",
    ringColor: "ring-2 ring-amber-400 shadow-lg shadow-amber-400/20",
    benefits: [
      "Highest commission rates",
      "Dedicated account manager",
      "Priority dispatch for all referrals",
      "Co-branded materials and signage",
      "Exclusive partner events",
      "Custom referral portal branding",
    ],
  },
];

/* -- FAQ Data -- */
const FAQS = [
  {
    q: "Who can join the referral program?",
    a: "Any business or individual can join. Our most active partners are locksmiths, property managers, mechanics, moving companies, rideshare drivers, and contractors. If you encounter people who need towing or parking enforcement, you qualify.",
  },
  {
    q: "How long until I receive my commission?",
    a: "You will receive your commission within 14 business days after the referred property completes their first patrol service with Axle Towing.",
  },
  {
    q: "Is there a limit to how many people I can refer?",
    a: "No limit at all. The more you refer, the higher your tier climbs. Gold partners referring 16+ per month earn $200+ per referral with a dedicated account manager.",
  },
  {
    q: "Does the referred property have to pay anything?",
    a: "Absolutely not. Our parking enforcement is completely free for property owners. We are funded through towing fees collected from violators, so the referred property pays nothing.",
  },
  {
    q: "How do I track my referrals?",
    a: "Every partner gets access to our digital portal where you can submit referrals, track their status, view your commission history, and see your tier progress in real time.",
  },
  {
    q: "Can I refer someone who already uses a different towing company?",
    a: "Yes. Many properties switch to Axle Towing for our superior service, faster response times, and digital portal. If they sign up and complete their first patrol, you still earn your commission.",
  },
];

export default function ReferralPage() {
  const parallaxRef = useParallax();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("yourName"),
          email: formData.get("yourEmail"),
          phone: formData.get("yourPhone"),
          contactName: formData.get("contactName"),
          contactEmail: formData.get("contactEmail"),
          propertyName: formData.get("propertyName"),
          notes: formData.get("notes"),
          source: "referral-program",
        }),
      });
    } catch {
      // Still show success to user
    }
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <>
      {/* Hero */}
      <section className="parallax-container relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div ref={parallaxRef} className="parallax-bg" style={{ backgroundImage: "url(/images/hero-parking-lot.jpg)" }} />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(30,107,184,0.75) 100%)" }} />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl mx-auto text-center">
            <span className="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-300 text-sm font-bold font-heading uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Referral Partner Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Earn Rewards for <span className="text-amber-300">Every Referral</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8">
              Join 200+ active partners who earn commissions by referring property managers to {COMPANY.name}. Three tiers. Unlimited referrals. Real rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partners/signup" className="btn-primary text-lg inline-flex items-center gap-2">
                Become a Partner
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/partners/refer" className="btn-secondary text-lg">Submit a Referral</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Active Partners" },
              { value: "$200+", label: "Max Per Referral" },
              { value: "14 Days", label: "Commission Payout" },
              { value: "$0", label: "Cost to Join" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Simple Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>How It Works</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">Three easy steps. Refer, we serve, you earn. No fine print, no catches.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {STEPS.map((item, i) => (
                <div key={item.step} className="text-center reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 mx-auto rounded-2xl glass-card-white border-glow-blue flex flex-col items-center justify-center gap-2 p-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold font-heading text-lg">{item.step}</div>
                      <div className="text-blue-600">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3" style={{ color: "#1a202c" }}>{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider font-heading">Partner Tiers</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">The More You Refer, The More You Earn</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full mb-6" />
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">Climb the tiers with more referrals. Unlock higher commissions, priority service, and exclusive partner benefits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIERS.map((tier, i) => (
              <div key={tier.name} className={`rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/15 reveal ${tier.ringColor}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className={`bg-gradient-to-r ${tier.color} py-4 px-6 text-center`}>
                  <span className={`inline-block text-xs font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full mb-2 ${tier.badgeColor} border`}>{tier.name}</span>
                  <div className="text-white/90 text-sm">{tier.range}</div>
                </div>
                <div className="p-8 text-center">
                  <div className="text-5xl font-bold font-heading text-white mb-1">{tier.commission}</div>
                  <div className="text-blue-200 text-sm mb-6">{tier.perReferral}</div>
                  <ul className="space-y-3 text-left">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-blue-100">
                        <svg className="w-4 h-4 text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link href="/partners/signup" className="btn-primary text-lg inline-flex items-center gap-2">
              Join the Partner Program
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Partner Portal</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>Track Everything in Real Time</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">Every partner gets access to our digital dashboard. Submit referrals, track commissions, and monitor your tier progress.</p>
          </div>
          <div className="reveal glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-gray-700 rounded-lg px-4 py-1.5 text-gray-400 text-xs font-mono flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                partners.axletowing.com/dashboard
              </div>
            </div>
            <div className="bg-gray-50 p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { value: "12", label: "Total Referrals", color: "text-blue-600", bg: "border-blue-100" },
                  { value: "8", label: "Converted", color: "text-green-600", bg: "border-green-100" },
                  { value: "$1,200", label: "Earned This Month", color: "text-amber-600", bg: "border-amber-100" },
                  { value: "Silver", label: "Current Tier", color: "text-gray-500", bg: "border-gray-200" },
                ].map((stat) => (
                  <div key={stat.label} className={`bg-white rounded-xl p-4 shadow-sm border ${stat.bg}`}>
                    <div className={`text-2xl font-bold font-heading ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold font-heading text-gray-800">Tier Progress</span>
                  <span className="text-xs text-gray-500">12/16 referrals to Gold</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-gray-400 to-amber-400 h-3 rounded-full" style={{ width: "75%" }} />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-amber-700 font-semibold">Bronze</span>
                  <span className="text-xs text-gray-500 font-semibold">Silver (current)</span>
                  <span className="text-xs text-amber-500 font-semibold">Gold</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100">
                  <h4 className="text-sm font-bold text-gray-800 font-heading">Recent Referrals</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-xs text-gray-500 uppercase tracking-wider">
                        <th className="px-4 py-2.5">Property</th>
                        <th className="px-4 py-2.5">Date</th>
                        <th className="px-4 py-2.5">Status</th>
                        <th className="px-4 py-2.5">Commission</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {[
                        { property: "Sunrise Apartments", date: "Mar 22", status: "Converted", statusColor: "bg-green-100 text-green-700", commission: "$150" },
                        { property: "Desert View Plaza", date: "Mar 20", status: "In Review", statusColor: "bg-blue-100 text-blue-700", commission: "Pending" },
                        { property: "Cactus Ridge HOA", date: "Mar 18", status: "Converted", statusColor: "bg-green-100 text-green-700", commission: "$150" },
                        { property: "Mesa Business Park", date: "Mar 15", status: "Contacted", statusColor: "bg-amber-100 text-amber-700", commission: "Pending" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50/50">
                          <td className="px-4 py-2.5 font-medium text-gray-800">{row.property}</td>
                          <td className="px-4 py-2.5 text-gray-600">{row.date}</td>
                          <td className="px-4 py-2.5">
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${row.statusColor}`}>{row.status}</span>
                          </td>
                          <td className="px-4 py-2.5 font-semibold text-gray-800">{row.commission}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Submit a Referral</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>Refer Someone Today</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-xl mx-auto">
              Already a partner? Submit a quick referral below, or use our{" "}
              <Link href="/partners/refer" className="text-blue-600 underline hover:text-blue-700">dedicated referral form</Link> for more options.
            </p>
          </div>
          <div className="reveal glass-form rounded-2xl p-8 md:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">Referral Submitted!</h3>
                <p className="text-gray-600 mb-6">Thank you for your referral. We will reach out to your contact and keep you updated on progress. Your commission will be sent once they complete their first patrol.</p>
                <button onClick={() => setSubmitted(false)} className="text-blue-600 font-semibold hover:text-blue-700 underline">Submit Another Referral</button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <p className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider mb-3">Your Information</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input name="yourName" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                    <input name="yourEmail" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="john@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Phone</label>
                    <input name="yourPhone" type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="(480) 555-1234" />
                  </div>
                  <div className="sm:col-span-2 pt-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider mb-3">Referred Contact</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                    <input name="contactName" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label>
                    <input name="contactEmail" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="jane@property.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Name / Address</label>
                    <input name="propertyName" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Sunrise Apartments, 1234 E Main St, Phoenix AZ" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                    <textarea name="notes" rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none bg-white" placeholder="Anything we should know about the property or contact..." />
                  </div>
                </div>
                <button type="submit" disabled={submitting} className="btn-primary w-full text-center justify-center disabled:opacity-60">
                  {submitting ? "Submitting..." : "Submit Referral"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>Frequently Asked Questions</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
          </div>
          <div className="space-y-4 reveal">
            {FAQS.map((faq, i) => (
              <details key={i} className="group glass-card-white rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-blue-900 font-heading text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-primary shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 text-white overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,1) 0%, rgba(27,42,63,0.95) 50%, rgba(30,107,184,0.9) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Ready to Start Earning?</h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">Join 200+ businesses already earning with {COMPANY.name}. Sign up takes less than 2 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partners/signup" className="btn-primary text-lg inline-flex items-center gap-2">
              Become a Partner
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary text-lg inline-flex items-center gap-2">
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
