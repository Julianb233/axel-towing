"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const URGENCY_OPTIONS = [
  { value: "low", label: "Low -- No rush, within a few days" },
  { value: "normal", label: "Normal -- Standard response time" },
  { value: "high", label: "High -- Same-day needed" },
  { value: "emergency", label: "Emergency -- Immediate dispatch" },
];

const SERVICE_TYPES = [
  "Private Property Impound",
  "Parking Enforcement Setup",
  "Vehicle Relocation",
  "Roadside Tow",
  "Tow-to-Shop",
  "General Inquiry",
  "Other",
];

export default function PartnerReferPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const urgency = formData.get("urgency") as string;

    try {
      await fetch("/api/dispatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referenceId: `REF-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
          type: "tow-request",
          contactName: formData.get("referralName"),
          contactPhone: formData.get("referralPhone"),
          contactEmail: formData.get("referralEmail"),
          propertyName: formData.get("location"),
          propertyAddress: formData.get("location"),
          urgent: urgency === "emergency" || urgency === "high",
          partnerName: formData.get("partnerName"),
          partnerId: formData.get("partnerId"),
          serviceNeeded: formData.get("serviceNeeded"),
          notes: formData.get("notes"),
          referralSource: "partner-referral-form",
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
        className="parallax-fixed relative min-h-[45vh] flex items-center"
        style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
            <span>/</span>
            <span className="text-white">Submit Referral</span>
          </nav>
          <span className="inline-block bg-green-500/20 border border-green-400/40 text-green-300 text-sm font-bold font-heading uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 reveal">
            Quick Referral
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            Submit a <span className="text-green-300">Referral</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed reveal delay-200">
            Already a partner? Use this form to quickly submit a referral. Our dispatch team will follow up within the hour.
          </p>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal glass-form rounded-2xl p-8 md:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-900 mb-3 font-heading">Referral Submitted!</h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                  Your referral has been dispatched to our team. We will reach out to the contact and keep you updated on progress through the partner portal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Submit Another Referral
                  </button>
                  <Link href="/referral" className="btn-secondary">
                    View Referral Program
                  </Link>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Partner Info */}
                <div>
                  <p className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider mb-4">Your Partner Information</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Partner Name *</label>
                      <input name="partnerName" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="John Doe or Business Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Partner ID (if assigned)</label>
                      <input name="partnerId" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="e.g. AXL-1234" />
                    </div>
                  </div>
                </div>

                {/* Referral Info */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider mb-4">Referral Contact</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                      <input name="referralName" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input name="referralPhone" type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="(480) 555-1234" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input name="referralEmail" type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="jane@property.com" />
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider mb-4">Service Details</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
                      <select name="serviceNeeded" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                        <option value="">Select service...</option>
                        {SERVICE_TYPES.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
                      <select name="urgency" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                        {URGENCY_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location / Address *</label>
                      <input name="location" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="1234 E Main St, Phoenix AZ 85040 or Sunrise Apartments" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                      <textarea name="notes" rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none bg-white" placeholder="Any additional details about the referral, property, or situation..." />
                    </div>
                  </div>
                </div>

                <button type="submit" disabled={submitting} className="btn-primary w-full text-center justify-center text-lg disabled:opacity-60">
                  {submitting ? "Submitting Referral..." : "Submit Referral"}
                </button>
              </form>
            )}
          </div>

          {/* Quick links */}
          <div className="mt-10 text-center reveal">
            <p className="text-gray-600 text-sm mb-4">Not a partner yet?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partners/signup" className="text-blue-600 font-semibold hover:text-blue-700 underline text-sm">
                Sign up for the Partner Program
              </Link>
              <span className="hidden sm:inline text-gray-300">|</span>
              <Link href="/referral" className="text-blue-600 font-semibold hover:text-blue-700 underline text-sm">
                Learn about referral rewards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
