import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "How to Get Illegally Parked Vehicles Removed from Private Property for Free",
  description:
    "Complete guide for Arizona property owners: how to legally remove unauthorized vehicles from your private property at no cost using a professional towing company like Axle Towing.",
};

const RELATED_ARTICLES = [
  {
    slug: "hoa-parking-enforcement-guide",
    title: "HOA Parking Enforcement: What Board Members Need to Know",
    category: "HOA",
    readTime: "10 min",
    gradient: "from-red-500 via-red-700 to-red-900",
  },
  {
    slug: "#",
    title: "Understanding Arizona Towing Laws: ARS 28-3511 Explained",
    category: "Legal",
    readTime: "6 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "#",
    title: "The Property Manager's Guide to Towing Signage in Arizona",
    category: "Legal",
    readTime: "7 min",
    gradient: "from-teal-500 via-emerald-600 to-teal-800",
  },
];

export default function ArticlePage() {
  return (
    <>
      {/* Parallax Hero */}
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(46,163,242,0.2),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group"
          >
            <svg
              className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">
              Legal
            </span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">March 5, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            How to Get Illegally Parked Vehicles Removed from Private Property{" "}
            <span className="text-gradient">for Free</span>
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content - 75% */}
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  If you own or manage private property in Arizona, you have the
                  legal right to remove unauthorized vehicles from your premises.
                  The best part? With the right towing partner, it costs you
                  absolutely nothing. This comprehensive guide walks you through
                  everything you need to know about exercising your rights as a
                  property owner.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Understanding Your Rights Under Arizona Law
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Under Arizona Revised Statutes (ARS) 28-3511, private property
                  owners have the legal right to remove vehicles that are parked
                  on their property without authorization. This is a powerful tool
                  for property owners who are tired of dealing with unauthorized
                  parking, but it comes with specific requirements that must be
                  followed to ensure compliance.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The statute covers a wide range of parking violations on private
                  property, including vehicles parked in reserved spaces, fire
                  lanes, handicap zones (without proper permits), loading zones,
                  no-parking areas, and any location where parking is restricted
                  by posted signage. Understanding these provisions is essential
                  for any property owner looking to implement an effective
                  enforcement program.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The key requirement under Arizona law is proper signage. Without
                  compliant towing signs posted at your property, you may not have
                  legal authorization to tow vehicles — regardless of how obvious
                  the parking violation may be. This is why partnering with a
                  professional towing company that understands Arizona signage
                  requirements is so important.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 1: Partner with a Professional Towing Company
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The first and most important step is to partner with a reputable
                  private property towing company. Companies like Axle Towing &amp;
                  Impound specialize in this area and handle everything from
                  signage installation to enforcement — all at no cost to property
                  owners.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Professional towing companies fund their operations through
                  legally mandated impound fees charged to vehicle owners who park
                  in violation. This means you get comprehensive parking
                  enforcement without spending a dime. When evaluating towing
                  partners, look for:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Experience specifically in private property towing (not just roadside assistance)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Knowledge of Arizona towing statutes and signage requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>A clear, written agreement that outlines services and responsibilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional appearance and courteous drivers who represent your property well</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>An online portal for tracking tows, viewing reports, and managing your account</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 2: Install Compliant Signage
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law has specific requirements for towing signage on
                  private property. Non-compliant signage can invalidate your
                  entire enforcement program and potentially expose you to
                  liability. Signs must include:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>The words &quot;Tow-Away Zone&quot; or equivalent language clearly visible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>The name and phone number of the authorized towing company</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Minimum sign dimensions as specified by ARS 28-3511</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Placement at each entrance to the property and at regular intervals throughout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Reflective material or adequate lighting for visibility at night</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A professional towing company like Axle Towing handles all
                  signage installation and ensures full compliance with Arizona
                  law. This removes the burden from property owners and eliminates
                  the risk of non-compliant signage undermining your enforcement
                  program.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 3: Establish Clear Enforcement Procedures
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A well-defined enforcement procedure protects both the property
                  owner and the towing company. Work with your towing partner to
                  establish documented procedures that cover every aspect of
                  enforcement:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Authorization chain:</strong> Who is authorized to request tows (property manager, on-site staff, security, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Violation types:</strong> Which violations warrant immediate towing versus a warning first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Patrol schedule:</strong> Regular patrol times and routes across your property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Documentation:</strong> Photo evidence, timestamps, and GPS coordinates for every tow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Dispute resolution:</strong> A fair process for handling complaints and appeals</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 4: Communicate with Residents and Tenants
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Clear communication is the foundation of a successful parking
                  enforcement program. Before enforcement begins, every resident,
                  tenant, and regular visitor should understand the rules. Poor
                  communication is the number-one reason enforcement programs
                  generate complaints rather than compliance.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Consider implementing a 30-day notice period before active
                  enforcement begins. During this time, distribute information
                  through multiple channels:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Written notices delivered to each unit or mailed to homeowners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Community meeting or town hall to explain the new parking program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Email and digital communications with clear parking maps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vehicle registration and permit procedures explained clearly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Guest parking procedures and temporary permit options</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 5: Let the Professionals Handle Everything
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Once signage is installed and procedures are established, your
                  towing company handles the day-to-day enforcement. This is where
                  the true value of a professional partnership shines. You should
                  not have to deal with confrontations, late-night calls, or
                  complicated legal questions — your towing partner handles it all.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A good towing partner will patrol your property on a regular
                  schedule, document violations with photos and timestamps, remove
                  unauthorized vehicles promptly and professionally, maintain
                  detailed records accessible through an online portal, and provide
                  regular reports for your records and board meetings.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why It Costs You Absolutely Nothing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  This is the question property owners ask most frequently, and the
                  answer is straightforward. Private property towing companies
                  operate on a model where all costs are recovered through legally
                  mandated impound fees. When a vehicle is towed from private
                  property, the vehicle owner pays a regulated fee to recover their
                  vehicle from the impound lot.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  This fee structure is regulated by the state of Arizona and covers
                  the cost of towing, storage, and administrative expenses. Because
                  these fees are paid by the violating vehicle owner — not the
                  property owner — you never receive a bill. Signage installation,
                  regular patrols, vehicle removal, online portal access, and
                  monthly reporting are all included at zero cost to you.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  This model creates a win-win situation: property owners get
                  professional enforcement at no cost, and the towing company is
                  compensated through legally authorized impound fees. It is how the
                  private property towing industry has operated successfully for
                  decades.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Common Mistakes to Avoid
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Property owners who try to handle parking enforcement on their
                  own often run into problems. Here are the most common mistakes
                  to avoid:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Towing without proper signage</strong> — this can result in legal liability and fines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Using non-compliant signs</strong> — wrong size, missing information, or improper placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Inconsistent enforcement</strong> — enforcing against some violators but not others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Poor documentation</strong> — without photos and records, disputes become he-said-she-said</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>No communication plan</strong> — springing enforcement on residents without warning</span>
                  </li>
                </ul>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Axle Towing &amp; Impound provides free private property
                    towing services throughout the Phoenix metro area. Contact us
                    for a free consultation and we will design a custom enforcement
                    program for your property.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="btn-primary"
                    >
                      Call {COMPANY.phone}
                    </a>
                    <Link href="/contact" className="btn-cta">
                      Request Free Quote
                    </Link>
                  </div>
                </div>

                {/* Author Box */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">
                      AT
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Axle Towing &amp; Impound
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Professional private property towing and parking
                        enforcement serving the Greater Phoenix metro area since
                        2021. Licensed, insured, and committed to protecting
                        property owners&apos; rights.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Share Buttons Placeholder */}
                <div className="mt-8 pt-8 border-t border-gray-200 reveal">
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                    Share This Article
                  </p>
                  <div className="flex gap-3">
                    {["Facebook", "Twitter", "LinkedIn", "Email"].map(
                      (platform) => (
                        <button
                          key={platform}
                          className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                        >
                          {platform}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - 25% */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Related Articles */}
                <div className="glass-card-white rounded-2xl p-6 reveal">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {RELATED_ARTICLES.map((article) => (
                      <Link
                        key={article.title}
                        href={
                          article.slug === "#"
                            ? "#"
                            : `/blog/${article.slug}`
                        }
                        className="block group"
                      >
                        <div
                          className={`h-20 rounded-lg bg-gradient-to-br ${article.gradient} mb-2`}
                        />
                        <span className="text-xs text-primary font-semibold uppercase">
                          {article.category}
                        </span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                          {article.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Call CTA */}
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Need Help?
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Talk to our parking enforcement experts today.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="btn-primary text-sm w-full"
                  >
                    Call {COMPANY.phone}
                  </a>
                </div>

                {/* Free Assessment CTA */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">
                    Free Property Assessment
                  </h3>
                  <p className="text-blue-100/70 text-sm mb-4">
                    We will evaluate your property and recommend the best
                    enforcement strategy.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors"
                  >
                    Get Free Assessment
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

    </>
  );
}
