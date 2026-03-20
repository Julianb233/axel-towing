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

const CHAPTERS = [
  {
    num: "01",
    title: "Understanding Arizona Towing Law (ARS 28-3511)",
    desc: "A plain-language breakdown of the Arizona Revised Statutes governing private property towing, including recent updates and common misconceptions.",
  },
  {
    num: "02",
    title: "Signage Requirements & Placement",
    desc: "Exact specifications for towing authorization signs: dimensions, required language, visibility rules, and optimal placement for maximum legal protection.",
  },
  {
    num: "03",
    title: "Towing Authorization Agreements",
    desc: "What to look for in a towing company contract, key terms to negotiate, and red flags that indicate a bad deal.",
  },
  {
    num: "04",
    title: "Violation Documentation Best Practices",
    desc: "How to properly document parking violations with photos, timestamps, and chain-of-custody records that hold up in disputes.",
  },
  {
    num: "05",
    title: "Fire Lane, ADA & Safety Zone Enforcement",
    desc: "Special requirements for enforcing fire lanes, handicap zones, and other safety-critical areas under Arizona law.",
  },
  {
    num: "06",
    title: "Tenant & Resident Communication",
    desc: "Templates and strategies for communicating parking policy changes, new rules, and enforcement actions to residents.",
  },
  {
    num: "07",
    title: "Handling Disputes & Legal Challenges",
    desc: "Step-by-step guide to responding to towing disputes, wrongful tow claims, and potential legal challenges from vehicle owners.",
  },
  {
    num: "08",
    title: "Liability Protection for Property Managers",
    desc: "How to protect yourself and your property from lawsuits related to towing, including insurance requirements and documentation protocols.",
  },
  {
    num: "09",
    title: "Choosing the Right Towing Partner",
    desc: "Criteria for evaluating towing companies: licensing, insurance, response times, technology, and cost transparency.",
  },
  {
    num: "10",
    title: "Building a Long-Term Parking Strategy",
    desc: "Moving beyond reactive towing to create a proactive parking management program that reduces violations and improves tenant satisfaction.",
  },
];

export default function PropertyManagerGuidePage() {
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
          style={{ backgroundImage: `url(/images/blog-fire-lane.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-blue-100 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-white">Property Manager Guide</span>
          </nav>
          <div className="reveal max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/40 text-purple-200 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Free Guide &mdash; 10 Chapters
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              The Property Manager&rsquo;s Guide to{" "}
              <span className="text-gradient">Arizona Towing Laws</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              The definitive resource for property managers navigating Arizona&rsquo;s private property towing regulations. Written by towing industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT: Table of Contents */}
            <div className="reveal space-y-8">
              {/* Expert Badge */}
              <div className="glass-card-white rounded-2xl p-6 shadow-md border border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-400 text-white flex items-center justify-center text-xl font-bold font-heading shrink-0">
                    AT
                  </div>
                  <div>
                    <div className="font-bold text-blue-900 font-heading">Written by Axle Towing Experts</div>
                    <div className="text-sm text-gray-700">30+ years of combined Arizona towing industry experience</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">
                  Table of Contents
                </h2>
                <div className="space-y-4">
                  {CHAPTERS.map((ch) => (
                    <div key={ch.num} className="glass-card-white rounded-xl p-5 shadow-sm border border-blue-50 hover:border-primary/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold font-heading text-sm shrink-0">
                          {ch.num}
                        </div>
                        <div>
                          <h3 className="font-bold text-blue-900 font-heading text-sm mb-1">{ch.title}</h3>
                          <p className="text-gray-700 text-xs leading-relaxed">{ch.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Download Form */}
            <div className="reveal-right">
              <div className="glass-form rounded-2xl p-8 md:p-10 shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                  Download the Complete Guide
                </h2>
                <p className="text-gray-700 mb-6">
                  Get all 10 chapters delivered to your inbox as a beautifully formatted PDF guide.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">
                      Your Guide is on the Way!
                    </h3>
                    <p className="text-gray-600">
                      Check your inbox for the complete Property Manager&rsquo;s Guide to Arizona Towing Laws.
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
                        Your Role
                      </label>
                      <select
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                      >
                        <option value="">Select your role</option>
                        <option value="property-manager">Property Manager</option>
                        <option value="hoa-board">HOA Board Member</option>
                        <option value="owner">Property Owner</option>
                        <option value="management-company">Management Company</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company / Property Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                        placeholder="e.g. ABC Property Management"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full text-center justify-center">
                      Download Free Guide
                    </button>
                    <p className="text-xs text-gray-600 text-center">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Want Expert Help With Your Parking Program?
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            {COMPANY.name} has helped hundreds of Arizona properties implement professional parking enforcement programs &mdash; at zero cost. Let us help you too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
