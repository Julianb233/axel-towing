import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Complete Guide to Apartment Complex Parking Management in Phoenix",
  description:
    "Learn how to manage apartment complex parking in Phoenix. Covers tenant parking assignments, unauthorized vehicle removal, ARS 28-3511 compliance, and free enforcement programs for property owners.",
};

const RELATED_ARTICLES = [
  {
    slug: "hoa-parking-enforcement-guide",
    title: "HOA Parking Enforcement: What Board Members Need to Know",
    category: "HOA",
    readTime: "10 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "student-housing-parking-enforcement",
    title: "Student Housing Parking Enforcement Near ASU and Arizona Universities",
    category: "Commercial Towing",
    readTime: "8 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "multi-tenant-commercial-parking-disputes",
    title: "Resolving Multi-Tenant Commercial Parking Disputes: A Manager&rsquo;s Playbook",
    category: "Commercial Towing",
    readTime: "9 min",
    gradient: "from-indigo-500 via-purple-600 to-indigo-800",
  },
];

export default function ArticlePage() {
  return (
    <>
      {/* Parallax Hero */}
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
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
              Commercial Towing
            </span>
            <span className="text-sm text-blue-200/60">12 min read</span>
            <span className="text-sm text-blue-200/60">
              March 9, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            The Complete Guide to{" "}
            <span className="text-gradient">
              Apartment Complex Parking Management in Phoenix
            </span>
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
                  Managing parking at an apartment complex in Phoenix is one of
                  the most challenging aspects of property management. With the
                  Valley&apos;s rapid population growth, high vehicle ownership
                  rates, and year-round warm weather that keeps cars on the road,
                  parking lots fill up fast. Unauthorized parkers, abandoned
                  vehicles, and tenant disputes can quickly spiral out of
                  control if you don&apos;t have a clear system in place. This
                  guide covers everything apartment managers and property owners
                  need to know about building an effective parking management
                  program &mdash; at zero cost to you.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why Apartment Parking Management Matters in Phoenix
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Phoenix is one of the fastest-growing metros in the country,
                  and that growth puts enormous pressure on apartment parking.
                  According to recent Census data, Maricopa County adds
                  thousands of new residents each month, and many of them rent.
                  Multi-family housing developments across Tempe, Mesa,
                  Chandler, and central Phoenix are seeing occupancy rates above
                  95 percent, which means every parking spot counts.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  When parking is poorly managed, the consequences are real:
                  tenant complaints skyrocket, lease renewals drop, property
                  reviews suffer, and unauthorized vehicles from neighboring
                  businesses or apartment complexes take over your lot. A strong
                  parking management program protects your investment, keeps
                  tenants happy, and maintains the professional appearance of
                  your property.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Understanding Arizona Towing Laws for Apartments
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Before implementing any towing program, apartment managers
                  must understand Arizona&apos;s private property towing
                  statute, ARS 28-3511. This law governs when and how you can
                  remove unauthorized vehicles from private property, and
                  non-compliance can expose you to legal liability.
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Proper signage must be posted at every entrance to the parking area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Signs must include the towing company&apos;s name and phone number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>A written agreement must exist between the property owner and the towing company</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>The property owner or authorized agent must request each tow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vehicles must be stored at a facility within a reasonable distance</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Working with a professional towing partner like {COMPANY.name} ensures
                  all of these requirements are met from day one. We handle
                  signage installation, maintain proper documentation, and ensure
                  every tow is legally compliant.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Setting Up a Parking Assignment System
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The foundation of any apartment parking management program is
                  a clear assignment system. There are several approaches that
                  work well for Phoenix-area complexes:
                </p>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">Assigned Spaces:</strong>{" "}
                      Each unit gets one or two designated spots, clearly marked with unit numbers. This is the most common approach and easiest to enforce because violations are immediately obvious.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Permit-Based Parking:</strong>{" "}
                      Tenants receive parking permits (hang tags or stickers) that must be displayed at all times. Any vehicle without a valid permit can be towed. This works well for complexes with open lots.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Hybrid System:</strong>{" "}
                      Assigned spots for tenants combined with a designated visitor section. Visitors may be required to register at the leasing office or use a guest pass system.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Common Apartment Parking Violations in Phoenix
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Understanding the most frequent violations helps you design
                  better policies and communicate expectations clearly to
                  tenants. Here are the issues we see most often at Phoenix-area
                  apartment complexes:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Non-residents parking overnight, especially near retail or restaurant neighbors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Abandoned or inoperable vehicles taking up spaces for weeks or months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tenants parking in visitor or handicap spaces without authorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Oversized vehicles (RVs, trailers, boats) occupying multiple spaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Blocking fire lanes, dumpster access, or emergency vehicle routes</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Building Your Lease Agreement Parking Clause
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Your lease agreement is the legal foundation for parking
                  enforcement. A well-drafted parking clause should include the
                  number of spaces assigned per unit, rules about vehicle
                  registration and permits, restrictions on vehicle types and
                  sizes, the consequences of violations including towing at the
                  vehicle owner&apos;s expense, and guest parking policies with
                  time limits.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Having clear lease language protects you legally and gives
                  tenants fair warning about what to expect. When a tenant signs
                  the lease, they are acknowledging the parking rules and
                  agreeing to the consequences of violations.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Implementing a Professional Towing Partnership
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The most effective way to handle parking enforcement at an
                  apartment complex is to partner with a professional towing
                  company that specializes in private property impounds. Here is
                  what that partnership typically looks like:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>The towing company installs compliant signage at all entrances at no cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>A formal towing agreement is executed to comply with ARS 28-3511</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Property managers call the towing company when a violation is identified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>The towing company responds quickly, documents the tow, and removes the vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All costs are covered by the vehicle owner &mdash; the property owner pays nothing</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  This is the model {COMPANY.name} uses across hundreds of
                  apartment complexes in the Phoenix metro area. Our entire
                  service is free for property owners and managers because the
                  vehicle owner is responsible for all towing and storage fees.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Handling Abandoned Vehicles
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Abandoned vehicles are a persistent problem at Phoenix
                  apartment complexes, especially during the summer months when
                  tenants break leases and leave town. Arizona law provides a
                  process for dealing with abandoned vehicles on private
                  property, but it requires documentation and patience.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A vehicle is generally considered abandoned if it has been
                  left unattended for an extended period, has expired
                  registration, flat tires, or appears inoperable. Your towing
                  partner can help you document the condition, place a notice on
                  the vehicle, and ultimately remove it in compliance with
                  state law.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Phoenix-Specific Parking Challenges
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Apartment complexes in the Phoenix metro face unique
                  challenges that managers in other markets don&apos;t deal
                  with. The extreme summer heat means covered parking is at a
                  premium, and tenants will park in fire lanes or unauthorized
                  areas to find shade. The snowbird season from October through
                  April brings an influx of seasonal residents who may not
                  understand the parking rules. And the booming construction
                  market means neighboring development projects often push
                  construction worker vehicles into your lot.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A good parking management program anticipates these
                  seasonal patterns and adjusts enforcement accordingly. For
                  example, you might increase signage and communication during
                  peak snowbird months or coordinate with neighboring
                  construction sites to prevent overflow parking.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Tips for Reducing Tenant Parking Complaints
                </h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Communicate parking rules clearly during lease signing and move-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Enforce rules consistently &mdash; selective enforcement creates resentment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Provide a clear process for tenants to report violations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Keep the parking lot well-lit, well-striped, and properly maintained</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Respond to parking complaints promptly and follow up to confirm resolution</span>
                  </li>
                </ul>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Need Help Managing Apartment Parking?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} provides free parking enforcement for
                    apartment complexes across the Phoenix metro area. We handle
                    signage, documentation, and towing so you can focus on
                    managing your property. There is zero cost to property
                    owners &mdash; ever.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="btn-primary"
                    >
                      Call {COMPANY.phone}
                    </a>
                    <Link
                      href="/services/apartment-towing"
                      className="btn-cta"
                    >
                      Apartment Towing Services
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
                        2021. Licensed, insured, and trusted by hundreds of
                        apartment communities across Arizona.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Share Buttons */}
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
                    Talk to our apartment parking specialists today.
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
                    Free Parking Assessment
                  </h3>
                  <p className="text-blue-100/70 text-sm mb-4">
                    We&apos;ll evaluate your complex&apos;s parking needs and
                    recommend a custom enforcement program.
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
