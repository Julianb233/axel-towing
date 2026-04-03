"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const BUSINESS_TYPES = [
  "Locksmith",
  "Property Manager",
  "Mechanic / Auto Shop",
  "Moving Company",
  "Uber / Lyft Driver",
  "Contractor",
  "HOA Board Member",
  "Insurance Agent",
  "Real Estate Agent",
  "Other",
];

const REFERRAL_RANGES = [
  "1 - 5 referrals",
  "6 - 15 referrals",
  "16 - 30 referrals",
  "30+ referrals",
];

const HEAR_ABOUT_OPTIONS = [
  "Google Search",
  "Referred by another partner",
  "Social Media",
  "Saw our trucks",
  "Industry event",
  "Other",
];

export default function PartnerSignupPage() {
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
          name: formData.get("contactName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          propertyName: formData.get("businessName"),
          propertyType: formData.get("businessType"),
          address: formData.get("serviceArea"),
          need: `Est. ${formData.get("monthlyReferrals")} monthly referrals`,
          timeline: formData.get("heardAbout"),
          source: "referral-partner",
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
      {/* ===== HERO ===== */}
      <section
        className="parallax-fixed relative min-h-[50vh] flex items-center"
        style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
            <span>/</span>
            <span className="text-white">Sign Up</span>
          </nav>
          <span className="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-300 text-sm font-bold font-heading uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 reveal">
            Partner Registration
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            Become a Referral <span className="text-amber-300">Partner</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed reveal delay-200">
            Join 200+ businesses earning commissions with {COMPANY.name}. Fill out the form below and our partnership team will set you up within 24 hours.
          </p>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="reveal glass-form rounded-2xl p-8 md:p-12 shadow-lg text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3 font-heading">Welcome to the Partner Program!</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                Your application has been received. Our partnership team will reach out within 24 hours to finalize your account and get you set up in the partner portal.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 text-left max-w-md mx-auto mb-8">
                <h3 className="font-heading font-bold text-blue-900 mb-3">What Happens Next:</h3>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                    Our team reviews your application (within 24 hours)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                    You receive portal login credentials via email
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                    Start referring and earning immediately
                  </li>
                </ol>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/referral" className="btn-primary inline-flex items-center gap-2">
                  Learn About Rewards
                </Link>
                <Link href="/partners/refer" className="btn-secondary">
                  Submit Your First Referral
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12 reveal">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4" style={{ color: "#1a202c" }}>
                  Partner Application
                </h2>
                <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
                <p className="text-gray-700 text-lg max-w-xl mx-auto">
                  Complete the form below to apply. Most partners are approved and earning within 24 hours.
                </p>
              </div>

              <div className="reveal glass-form rounded-2xl p-8 md:p-10 shadow-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Business Information */}
                  <div>
                    <p className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider mb-4">Business Information</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                        <input name="businessName" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="ABC Services LLC" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                        <input name="contactName" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Type *</label>
                        <select name="businessType" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                          <option value="">Select your business type...</option>
                          {BUSINESS_TYPES.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider mb-4">Contact Information</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="john@abcservices.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                        <input name="phone" type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="(480) 555-1234" />
                      </div>
                    </div>
                  </div>

                  {/* Partnership Details */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider mb-4">Partnership Details</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Area</label>
                        <input name="serviceArea" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Phoenix, Scottsdale, Mesa..." />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Monthly Referrals</label>
                        <select name="monthlyReferrals" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                          <option value="">Select range...</option>
                          {REFERRAL_RANGES.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                        <select name="heardAbout" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                          <option value="">Select one...</option>
                          {HEAR_ABOUT_OPTIONS.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <button type="submit" disabled={submitting} className="btn-primary w-full text-center justify-center text-lg disabled:opacity-60">
                    {submitting ? "Submitting Application..." : "Submit Partner Application"}
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    By submitting, you agree to be contacted by {COMPANY.name} about partnership opportunities.
                  </p>
                </form>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ===== WHY JOIN CTA ===== */}
      {!submitted && (
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Earn Up to $200+ Per Referral",
                  desc: "Our tiered commission structure rewards your volume. The more you refer, the more you earn per referral.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Digital Partner Portal",
                  desc: "Track referrals, view commissions, and monitor your tier progress from our online dashboard. Full transparency.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  ),
                },
                {
                  title: "Zero Cost, Zero Risk",
                  desc: "There is no cost to join, no minimums, and no contracts. Start earning from your very first referral.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-8 bg-white/10 backdrop-blur-sm border border-white/15 reveal"
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-5 text-blue-200">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
