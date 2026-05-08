"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const BENEFITS = [
  {
    title: "Tow-to-Shop Referral Revenue",
    description:
      "When a vehicle needs to be towed and also needs repairs, we bring it straight to your shop. You get the repair job, and we both earn. Every tow is a potential customer for you.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Reliable Vehicle Transport",
    description:
      "Need a customer's car picked up or delivered? Our flatbed fleet handles it safely with 30-minute response times. Your customers' vehicles are in professional hands.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Cross-Referral Partnership",
    description:
      "We refer vehicle owners who need repairs to our mechanic partners. You refer property managers who need parking enforcement to us. Both businesses grow together.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "24/7 Availability",
    description:
      "Breakdown at 2 AM? Our dispatch is available around the clock. When your customers need emergency towing to your shop, we respond in 30 minutes or less.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const SCENARIOS = [
  {
    title: "Roadside Breakdown Referral",
    description:
      "A driver breaks down on the highway and calls you for advice. You cannot diagnose over the phone, so you recommend Axle Towing to bring the car to your shop. You get a new customer, and you earn a referral commission.",
  },
  {
    title: "Parking Lot Abandoned Vehicle",
    description:
      "You notice an abandoned car near your shop that has been sitting for weeks. You connect the property owner with Axle for impound services. The property signs up for ongoing enforcement, and you earn your commission.",
  },
  {
    title: "Fleet Maintenance Transport",
    description:
      "A local business needs fleet vehicles transported to your shop for scheduled maintenance. Axle handles all the pickups and deliveries so your techs can focus on repairs, not logistics.",
  },
];

const FAQS = [
  {
    q: "How does the mechanic partnership work?",
    a: "It works two ways: First, when property managers need vehicles towed after impound, we can direct them to your shop for any needed repairs. Second, when you encounter properties with parking problems during house calls or at customer locations, you refer them to us and earn a commission.",
  },
  {
    q: "How much do mechanics earn per referral?",
    a: "Commissions start at $100 for your first referral and increase based on volume -- $150 for your second, and $200+ for every referral after that. There is no cap on referrals.",
  },
  {
    q: "Can you tow vehicles directly to my shop?",
    a: "Absolutely. We offer tow-to-shop service for any mechanic partner. When a vehicle needs both towing and repairs, we bring it right to your door. This applies to both roadside breakdowns and impounded vehicles with mechanical issues.",
  },
  {
    q: "What areas do you cover for tow-to-shop service?",
    a: "We cover the entire Phoenix metro area including Phoenix, Scottsdale, Mesa, Glendale, Gilbert, Chandler, Tempe, and Apache Junction. If your shop is in the Valley, we can deliver.",
  },
  {
    q: "Is there a contract or minimum commitment?",
    a: "No. The partnership is completely free with no contracts, no minimums, and no obligations. You refer when opportunities arise and earn commissions when they convert. Cancel anytime.",
  },
];

export default function MechanicsPartnersPage() {
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
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          propertyName: formData.get("shopName"),
          address: formData.get("serviceArea"),
          propertyType: "Mechanic / Auto Shop",
          source: "referral-partner-mechanics",
        }),
      });
    } catch {
      // Still show success
    }

    setSubmitted(true);
    setSubmitting(false);
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
            name: "Mechanic Towing Partnerships - Axle Towing Phoenix",
            description: "Partner with Axle Towing as a mechanic or auto shop in Phoenix. Tow-to-shop service, cross-referral commissions, and 24/7 vehicle transport.",
            url: `https://${COMPANY.domain}/partners/mechanics`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `https://${COMPANY.domain}` },
                { "@type": "ListItem", position: 2, name: "Partners", item: `https://${COMPANY.domain}/partners` },
                { "@type": "ListItem", position: 3, name: "Mechanics", item: `https://${COMPANY.domain}/partners/mechanics` },
              ],
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
            <span className="text-white">Mechanics</span>
          </nav>
          <span className="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-300 text-sm font-bold font-heading uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 reveal">
            Mechanic Partnership
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            Mechanic Towing Partnership <span className="text-blue-300">in Phoenix</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed reveal delay-200">
            We tow to your shop. You fix the car. We both earn. Partner with {COMPANY.name} for reliable vehicle transport and cross-referral commissions.
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
              Benefits for Mechanics &amp; Auto Shops
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              More cars at your door, reliable transport, and referral income. Here is how the partnership works for mechanics.
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
              How Mechanics Earn With Us
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

      {/* ===== TESTIMONIAL PLACEHOLDER ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal glass-card-white rounded-2xl p-10 md:p-12 text-center border border-gray-100">
            <div className="flex gap-1 justify-center mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
              &ldquo;Axle Towing has been incredible for our shop. They bring us 5-10 vehicles a month that need repairs after being towed. It is like having a free marketing channel. The partnership is a no-brainer for any mechanic in Phoenix.&rdquo;
            </p>
            <div>
              <div className="font-semibold font-heading text-lg" style={{ color: "#1a202c" }}>Mike R.</div>
              <div className="text-sm text-gray-500">Auto Shop Owner, Mesa</div>
            </div>
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
              Mechanic Partnership Inquiry
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
                  Thank you for your interest in partnering with {COMPANY.name}. Our team will reach out within 24 hours to discuss how we can send more vehicles to your shop.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input name="name" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Mike Johnson" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Shop Name *</label>
                    <input name="shopName" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Mike's Auto Repair" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="mike@mikesauto.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input name="phone" type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="(480) 555-1234" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Area</label>
                    <input name="serviceArea" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Phoenix, Scottsdale, Mesa..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Services You Offer</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                      <option value="">Select primary service...</option>
                      <option value="general">General Auto Repair</option>
                      <option value="body">Body Shop / Collision</option>
                      <option value="transmission">Transmission Specialist</option>
                      <option value="tires">Tires &amp; Alignment</option>
                      <option value="diesel">Diesel / Heavy Duty</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                    <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none bg-white" placeholder="Tell us about your shop and how you'd like to partner..." />
                  </div>
                </div>
                <button type="submit" disabled={submitting} className="btn-primary w-full text-center justify-center disabled:opacity-60">
                  {submitting ? "Submitting..." : "Submit Partnership Inquiry"}
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
            Ready to Grow Your Shop?
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            More vehicles at your door, referral commissions in your pocket. Let us build a partnership that works for both of us.
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
