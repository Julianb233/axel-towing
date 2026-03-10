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

const TEMPLATE_INCLUDES = [
  "Complete parking rules and regulations section",
  "Visitor parking policy with permit guidelines",
  "ARS-compliant towing authorization language",
  "Signage placement requirements and specifications",
  "Violation escalation procedures (warning, boot, tow)",
  "Fire lane and handicap enforcement provisions",
  "Tenant/resident parking assignment policy",
  "Guest and delivery vehicle provisions",
  "Overnight and extended parking rules",
  "Vehicle condition and storage requirements",
  "Appeal and dispute resolution process",
  "Board approval and amendment procedures",
];

export default function ParkingPolicyTemplatePage() {
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
          <nav className="flex items-center gap-2 text-sm text-blue-200/70 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-white">Parking Policy Template</span>
          </nav>
          <div className="reveal max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-200 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Free Download
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Free Parking Policy Template for{" "}
              <span className="text-gradient">Arizona Properties</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              A comprehensive, ARS-compliant parking policy template you can customize for your HOA, apartment complex, or commercial property.
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT: What's Included + Testimonial */}
            <div className="reveal space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">
                  What&rsquo;s Included in This Template
                </h2>
                <div className="space-y-3">
                  {TEMPLATE_INCLUDES.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="glass-card-white rounded-2xl p-8 shadow-md border border-blue-100">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic mb-4">
                  &ldquo;This template saved us weeks of legal research. We customized it for our 180-unit apartment complex and had our parking policy approved by the board in one meeting. Axle Towing really knows Arizona towing law.&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-blue-900 font-heading">Maria Gonzalez</div>
                  <div className="text-sm text-gray-500">Property Manager, Chandler AZ</div>
                </div>
              </div>
            </div>

            {/* RIGHT: Download Form */}
            <div className="reveal-right">
              <div className="glass-form rounded-2xl p-8 md:p-10 shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                  Download Your Free Template
                </h2>
                <p className="text-gray-500 mb-6">
                  Enter your information below and we&rsquo;ll send the template straight to your inbox.
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
                      Your parking policy template is on its way. Check your email in the next few minutes.
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
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Property Type *
                      </label>
                      <select
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                      >
                        <option value="">Select property type</option>
                        <option value="hoa">HOA Community</option>
                        <option value="apartment">Apartment Complex</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="condo">Condominium</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Units/Spaces
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                        placeholder="e.g. 150 units"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full text-center justify-center">
                      Download Free Template
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      No spam. We respect your privacy.
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
            Need Help Implementing Your Policy?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {COMPANY.name} can help you implement your parking policy with professional signage, enforcement patrols, and vehicle removal &mdash; all at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
