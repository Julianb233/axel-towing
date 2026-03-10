"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

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

const CHECKLIST_PREVIEW = [
  { num: 1, text: "Verify all parking rules are documented in CC&Rs or bylaws", visible: true },
  { num: 2, text: "Install ARS-compliant towing authorization signage at all entrances", visible: true },
  { num: 3, text: "Confirm signage meets minimum size requirements (18\" x 24\")", visible: true },
  { num: 4, text: "Include towing company name, phone number, and impound address on signs", visible: true },
  { num: 5, text: "Establish written towing authorization agreement with licensed towing company", visible: true },
  { num: 6, text: "Create violation documentation procedure (photos, timestamps, location)", visible: false },
  { num: 7, text: "Set up resident notification system for towing policy changes", visible: false },
  { num: 8, text: "Define visitor parking rules and guest permit process", visible: false },
  { num: 9, text: "Establish fire lane and handicap zone enforcement procedures", visible: false },
  { num: 10, text: "Create overnight/extended parking rules and communication plan", visible: false },
  { num: 11, text: "Document vehicle warning procedure before towing", visible: false },
  { num: 12, text: "Set up monthly enforcement reporting and board review process", visible: false },
  { num: 13, text: "Establish abandoned vehicle identification and removal procedure", visible: false },
  { num: 14, text: "Create resident appeal/dispute resolution process", visible: false },
  { num: 15, text: "Verify insurance coverage for towing-related liability", visible: false },
  { num: 16, text: "Set up commercial vehicle and RV/boat parking restrictions", visible: false },
  { num: 17, text: "Document annual signage inspection and maintenance schedule", visible: false },
  { num: 18, text: "Create new resident parking orientation materials", visible: false },
  { num: 19, text: "Establish emergency/after-hours towing request procedure", visible: false },
  { num: 20, text: "Schedule annual parking policy review and update", visible: false },
];

export default function HOAEnforcementChecklistPage() {
  const parallaxRef = useParallax();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="parallax-container relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/blog-parking-sign.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-blue-100 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-white">HOA Enforcement Checklist</span>
          </nav>
          <div className="reveal max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-200 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Free Download
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Free HOA Parking{" "}
              <span className="text-gradient">Enforcement Checklist</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              A 20-item compliance checklist that covers everything your HOA board needs to implement a professional parking enforcement program.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT: Checklist Preview */}
            <div className="reveal space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-2xl px-6 py-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold font-heading text-sm">
                  500+
                </div>
                <div>
                  <div className="font-bold text-blue-900 font-heading text-sm">Used by 500+ Arizona HOA Communities</div>
                  <div className="text-xs text-gray-700">The most comprehensive HOA parking checklist in Arizona</div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">
                  20-Item Compliance Checklist Preview
                </h2>
                <div className="space-y-3">
                  {CHECKLIST_PREVIEW.map((item) => (
                    <div
                      key={item.num}
                      className={`flex items-start gap-3 ${!item.visible ? "opacity-40 blur-[2px] select-none" : ""}`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold font-heading ${item.visible ? "bg-blue-100 text-primary border border-blue-200" : "bg-gray-100 text-gray-600"}`}>
                        {item.num}
                      </div>
                      <span className={item.visible ? "text-gray-700" : "text-gray-600"}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
                  <p className="text-sm text-blue-800 font-semibold">
                    Download the full checklist to see all 20 items with detailed implementation notes
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Download Form */}
            <div className="reveal-right">
              <div className="glass-form rounded-2xl p-8 md:p-10 shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                  Download the Full Checklist
                </h2>
                <p className="text-gray-700 mb-6">
                  Get the complete 20-item checklist with implementation notes and Arizona law references.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">
                      Check Your Inbox!
                    </h3>
                    <p className="text-gray-600">
                      Your HOA enforcement checklist is on its way. Look for it in the next few minutes.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        HOA / Community Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                        placeholder="e.g. Desert Ridge HOA"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full text-center justify-center">
                      Download Free Checklist
                    </button>
                    <p className="text-xs text-gray-600 text-center">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Implement Your HOA Parking Program?
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            {COMPANY.name} specializes in HOA parking enforcement. We handle signage, patrols, and vehicle removal &mdash; all at zero cost to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
