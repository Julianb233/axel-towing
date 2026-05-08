"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const BENEFITS = [
  {
    title: "Earn Referral Commissions",
    description:
      "Every time you refer a property that signs up for our enforcement services, you earn a commission. Your lock-out calls become a revenue stream.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Complete Client Solutions",
    description:
      "When you handle a lock-out and spot parking violations, you can offer a full solution: your locksmith services plus professional parking enforcement.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3.07 12.9a1.5 1.5 0 002.12 2.12l2.72-2.72m0 0l5.1 5.1m0 0l2.72-2.72a1.5 1.5 0 00-2.12-2.12l-2.72 2.72m0 0L8.6 8.45m8.49 8.49L19.82 14a1.5 1.5 0 00-2.12-2.12l-2.72 2.72" />
      </svg>
    ),
  },
  {
    title: "Zero Cost to Your Clients",
    description:
      "Our parking enforcement and impound services are completely free for property owners. You look great recommending a service that costs them nothing.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "24/7 Dispatch Available",
    description:
      "We match locksmith hours. Whether your call is at 2 AM or 2 PM, our dispatch team is ready to respond in 30 minutes or less.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const SCENARIOS = [
  {
    title: "Apartment Lock-Out Call",
    description:
      "You arrive at an apartment complex for a lock-out and notice the lot is full of unauthorized vehicles. You mention Axle Towing to the property manager -- they sign up for free enforcement, and you earn a referral commission.",
  },
  {
    title: "Commercial Property Access",
    description:
      "A business owner calls you to re-key their locks. While on site, you see cars parked illegally in their fire lane. You connect them with us for ongoing patrol, earning a referral while solving their problem.",
  },
  {
    title: "HOA Community Call",
    description:
      "An HOA board member needs locks changed on a community gate. During your visit, they mention ongoing parking violations. You refer them to our HOA towing program, and you earn your commission when they sign up.",
  },
];

const FAQS = [
  {
    q: "How does the locksmith referral program work?",
    a: "It is simple: when you encounter a property with parking issues during your locksmith calls, refer the property manager or owner to us. When they sign up and we complete our first patrol, you earn your referral commission.",
  },
  {
    q: "How much do I earn per referral?",
    a: "Referral commissions start at $100 for your first referral and increase with each subsequent referral -- $150 for the second and $200+ for every referral after that. There is no limit on how many you can refer.",
  },
  {
    q: "Does the property owner have to pay for enforcement?",
    a: "No. All of our private property impound and parking enforcement services are completely free for property owners. We are funded through impound fees collected from violators, so the property pays nothing.",
  },
  {
    q: "What areas does this partnership cover?",
    a: "We cover the entire Phoenix metro area including Phoenix, Scottsdale, Mesa, Glendale, Gilbert, Chandler, Tempe, and Apache Junction. If you operate in these areas, we can partner with you.",
  },
  {
    q: "How do I track my referrals and commissions?",
    a: "Every partner gets access to our digital portal where you can submit referrals, track their status, and see your commission history. Full transparency, no guesswork.",
  },
];

export default function LocksmithPartnersPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Locksmith Partnerships in Phoenix - Axle Towing",
            description: "Partner with Axle Towing as a locksmith in Phoenix. Earn referral commissions by connecting property managers with free parking enforcement services.",
            url: `https://${COMPANY.domain}/partners/locksmiths`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `https://${COMPANY.domain}` },
                { "@type": "ListItem", position: 2, name: "Partners", item: `https://${COMPANY.domain}/partners` },
                { "@type": "ListItem", position: 3, name: "Locksmiths", item: `https://${COMPANY.domain}/partners/locksmiths` },
              ],
            },
            mainEntity: {
              "@type": "Service",
              name: "Locksmith Towing Partnership Program",
              provider: {
                "@type": "LocalBusiness",
                name: COMPANY.name,
                telephone: COMPANY.phone,
                url: `https://${COMPANY.domain}`,
              },
              areaServed: { "@type": "State", name: "Arizona" },
              description: "Referral partnership program for locksmiths in the Phoenix metro area. Earn commissions by referring property managers to free parking enforcement services.",
            },
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section
        className="parallax-fixed relative min-h-[60vh] flex items-center"
        style={{ backgroundImage: `url(/images/optimized/axle-towing-hero-parking-lot-phoenix-az.webp)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
            <span>/</span>
            <span className="text-white">Locksmiths</span>
          </nav>
          <span className="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-300 text-sm font-bold font-heading uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 reveal">
            Locksmith Partnership
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            Locksmith Towing Partnership <span className="text-blue-300">in Phoenix</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed reveal delay-200">
            Turn every lock-out call into a referral opportunity. Partner with {COMPANY.name} and
            earn commissions by connecting property managers with free parking enforcement.
          </p>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Why Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              Benefits for Locksmiths
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Your lock-out calls put you face-to-face with property managers every day.
              That is a goldmine for referrals &mdash; and we pay you for every one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                className="glass-card-white rounded-2xl p-8 border border-gray-100 reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3" style={{ color: "#1a202c" }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REAL-WORLD SCENARIOS ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider font-heading">
              Real-World Scenarios
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">
              How Locksmiths Earn With Us
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mb-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SCENARIOS.map((scenario, i) => (
              <div
                key={scenario.title}
                className="rounded-2xl p-8 bg-white/10 backdrop-blur-sm border border-white/15 reveal"
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 font-bold font-heading text-lg mb-5">
                  {i + 1}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{scenario.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIP INQUIRY FORM ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              Partnership Inquiry
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-xl mx-auto">
              Fill out the form below and our partnership team will be in touch within 24 hours.
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
                <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">Inquiry Submitted!</h3>
                <p className="text-gray-600">
                  Thank you for your interest in partnering with {COMPANY.name}. Our team will reach out within 24 hours to discuss next steps.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="ABC Locksmith Services" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="john@abclocksmith.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="(480) 555-1234" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Area</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Phoenix, Scottsdale, Mesa..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Towing Referrals Per Month?</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                      <option value="">Select range...</option>
                      <option value="1-5">1 - 5 referrals</option>
                      <option value="6-15">6 - 15 referrals</option>
                      <option value="16-30">16 - 30 referrals</option>
                      <option value="30+">30+ referrals</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                      <option value="">Select one...</option>
                      <option value="google">Google Search</option>
                      <option value="referral">Referred by another partner</option>
                      <option value="social">Social Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                    <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none bg-white" placeholder="Tell us about your business and how you'd like to partner..." />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full text-center justify-center">
                  Submit Partnership Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              Frequently Asked Questions
            </h2>
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
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 text-white overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,1) 0%, rgba(27,42,63,0.95) 50%, rgba(30,107,184,0.9) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Start Your Locksmith Partnership?
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Call us today or scroll up to submit your inquiry. We will have you set up and earning within days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call {COMPANY.phone}
            </a>
            <Link href="/partners" className="btn-secondary text-lg">
              View All Partnerships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
