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
      const y = window.scrollY;
      ref.current.style.transform = `translateY(${y * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return ref;
}

const STEPS = [
  {
    step: "01",
    title: "Contact Us",
    desc: "Give us a call or fill out the quick quote form below with your vehicle details. We respond fast.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Get a Quote",
    desc: "We'll evaluate your vehicle and give you a fair, no-obligation cash offer — usually within hours.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Get Paid",
    desc: "Accept our offer and get paid on the spot. We handle the paperwork and pick up the vehicle for free.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const WHAT_WE_BUY = [
  "Running and non-running vehicles",
  "Cars, trucks, SUVs, and vans — all makes and models",
  "Vehicles with or without a title",
  "Damaged, wrecked, or salvage vehicles",
  "High-mileage vehicles",
  "Failed inspection or emission vehicles",
  "Vehicles with mechanical or electrical issues",
  "Old, unwanted, or abandoned vehicles",
];

const FAQ = [
  {
    q: "Do you buy cars without a title?",
    a: "Yes, we can purchase vehicles without a title in many cases. We'll work with you to verify ownership through alternative documentation such as registration, insurance records, or a bill of sale. Arizona law provides processes for obtaining a bonded title if needed.",
  },
  {
    q: "Do you buy non-running cars?",
    a: "Absolutely. We buy vehicles in any condition — running, non-running, damaged, wrecked, or completely undrivable. We provide free pickup so you don't need to worry about transportation.",
  },
  {
    q: "How fast can I get paid?",
    a: "In most cases, we can provide a quote within hours and complete the purchase the same day or next business day. We pay cash on the spot at pickup.",
  },
  {
    q: "Is there a fee for pickup?",
    a: "No. Vehicle pickup is completely free. We have our own tow trucks and will come to your location at no charge.",
  },
  {
    q: "What paperwork do I need?",
    a: "Ideally, you'll have the vehicle title and a valid ID. If you don't have the title, bring your registration, insurance card, or any proof of ownership. We'll guide you through the rest.",
  },
  {
    q: "How do you determine the offer price?",
    a: "We consider the vehicle's year, make, model, condition, mileage, and current market value for parts and scrap. Our offers are competitive and fair — no hidden deductions.",
  },
];

export default function WeBuyCarsContent() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              We Buy Cars <span className="text-gradient">for Cash</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Selling your car? Get a fast, fair cash offer from a trusted local company.
              Any condition, any make, any model &mdash; running or not.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                Call {COMPANY.phone}
              </a>
              <a href="#quote-form" className="btn-secondary">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-white wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Selling your car has never been easier. Three simple steps and you&rsquo;re done.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <div
                key={s.step}
                className={`reveal glass-card-white rounded-2xl p-8 text-center shadow-md delay-${(i + 1) * 100} relative`}
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <svg className="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>
                )}
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-5 border-glow-blue">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Step {s.step}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-heading">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Buy ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-heading">
                What We Buy
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We buy vehicles in any condition. Don&rsquo;t worry about dents, mechanical
                problems, or high mileage &mdash; if it has wheels, we want to hear about it.
              </p>
              <ul className="space-y-3">
                {WHAT_WE_BUY.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <svg
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-right">
              <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 h-80 flex items-center justify-center border border-blue-200">
                <div className="text-center">
                  <div className="text-primary opacity-30 mb-4">
                    <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" strokeWidth={0.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m4.5 0V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125" />
                    </svg>
                  </div>
                  <p className="text-primary/50 font-bold text-lg">Any Make. Any Model.</p>
                  <p className="text-primary/40 text-sm">Any Condition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Quote Form ── */}
      <section id="quote-form" className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Get a Free Quote</h2>
            <p className="text-white/90 text-lg">
              Tell us about your vehicle and we&rsquo;ll get back to you with a cash offer.
            </p>
          </div>
          <div className="reveal">
            <form action="#" className="glass rounded-2xl p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-white/95 mb-2">
                    Year *
                  </label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                    placeholder="2015"
                  />
                </div>
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-white/95 mb-2">
                    Make *
                  </label>
                  <input
                    type="text"
                    id="make"
                    name="make"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                    placeholder="Toyota"
                  />
                </div>
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-white/95 mb-2">
                    Model *
                  </label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                    placeholder="Camry"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="condition" className="block text-sm font-medium text-white/95 mb-2">
                    Condition *
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                  >
                    <option value="" className="text-gray-900">Select</option>
                    <option value="excellent" className="text-gray-900">Excellent</option>
                    <option value="good" className="text-gray-900">Good</option>
                    <option value="fair" className="text-gray-900">Fair</option>
                    <option value="poor" className="text-gray-900">Poor</option>
                    <option value="non-running" className="text-gray-900">Non-Running / Wrecked</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="running" className="block text-sm font-medium text-white/95 mb-2">
                    Running? *
                  </label>
                  <select
                    id="running"
                    name="running"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                  >
                    <option value="" className="text-gray-900">Select</option>
                    <option value="yes" className="text-gray-900">Yes</option>
                    <option value="no" className="text-gray-900">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="has-title" className="block text-sm font-medium text-white/95 mb-2">
                    Has Title? *
                  </label>
                  <select
                    id="has-title"
                    name="has-title"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                  >
                    <option value="" className="text-gray-900">Select</option>
                    <option value="yes" className="text-gray-900">Yes</option>
                    <option value="no" className="text-gray-900">No</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/95 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                    placeholder="(480) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/95 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-center py-4 text-lg font-bold"
              >
                Get My Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Peddle Partner Section ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="glass-card-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 font-heading">
              Want an Instant Online Offer?
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
              We&rsquo;ve partnered with{" "}
              <a
                href="https://www.peddle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Peddle
              </a>{" "}
              to offer you instant online quotes. Enter your vehicle details on their platform and
              get an immediate cash offer &mdash; no haggling, no hidden fees.
            </p>
            <a
              href="https://www.peddle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Get Instant Offer on Peddle
            </a>
            <p className="text-gray-600 text-sm mt-4">
              Or call us directly at{" "}
              <a href={`tel:${COMPANY.phone}`} className="text-primary hover:underline font-medium">
                {COMPANY.phone}
              </a>{" "}
              for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Common questions about selling your car to {COMPANY.name.split(" &")[0]}.
            </p>
          </div>
          <div className="space-y-6">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className={`reveal glass-card-white rounded-2xl p-6 md:p-8 shadow-md delay-${Math.min((i + 1) * 100, 500)}`}
              >
                <h3 className="text-lg font-bold text-blue-900 mb-3 font-heading">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Sell Your Car?
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Get a fair cash offer today. No obligations, no hassle, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <a href="#quote-form" className="btn-secondary">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
