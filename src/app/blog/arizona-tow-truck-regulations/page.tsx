import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Arizona Tow Truck Regulations: Licensing, Insurance, and Compliance",
  description:
    "Learn about Arizona tow truck regulations including licensing requirements, insurance minimums, vehicle standards, and operational compliance. Essential reading for property owners choosing a towing partner in Phoenix.",
};

const RELATED_ARTICLES = [
  {
    slug: "arizona-towing-laws-ars-28-3511-explained",
    title:
      "Arizona Towing Laws: ARS 28-3511 Explained in Plain English",
    category: "Arizona Towing Laws",
    readTime: "10 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "arizona-vehicle-lien-laws-towing-companies",
    title:
      "Arizona Vehicle Lien Laws for Towing Companies: A Legal Overview",
    category: "Arizona Towing Laws",
    readTime: "8 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "arizona-impound-fees-what-to-expect",
    title:
      "Arizona Impound Fees: What Property Owners and Vehicle Owners Should Know",
    category: "Arizona Towing Laws",
    readTime: "8 min",
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
              Arizona Towing Laws
            </span>
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">
              March 9, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Arizona Tow Truck Regulations:{" "}
            <span className="text-gradient">
              Licensing, Insurance, and Compliance
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
                  When choosing a towing company to handle parking enforcement on
                  your private property, understanding Arizona&apos;s tow truck
                  regulations is essential. These regulations exist to protect
                  property owners, vehicle owners, and the general public by
                  ensuring that towing companies operate professionally, safely,
                  and legally. This guide covers the licensing requirements,
                  insurance standards, and operational regulations that govern
                  tow truck companies in Arizona.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Arizona Tow Truck Licensing Requirements
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Operating a tow truck in Arizona requires multiple levels of
                  licensing and authorization. The Arizona Department of
                  Transportation (ADOT) oversees the primary licensing framework,
                  while individual municipalities may impose additional
                  requirements. A towing company must meet all applicable
                  requirements before it can legally operate within the state.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The core licensing requirements include:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>ADOT registration:</strong> All tow trucks must be registered with the Arizona Department of Transportation and carry valid commercial vehicle registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Business license:</strong> The towing company must hold a valid Arizona business license and any required municipal business permits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Driver qualifications:</strong> Tow truck drivers must hold a valid commercial driver&apos;s license (CDL) appropriate for the class of tow truck they operate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Vehicle inspection:</strong> Tow trucks must pass periodic safety inspections and maintain equipment in safe working condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Storage facility permit:</strong> Any facility used to store impounded vehicles must meet local zoning, security, and operational standards</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Insurance Requirements
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Insurance is a critical component of tow truck regulation in
                  Arizona. Towing companies are required to carry multiple types
                  of insurance coverage to protect vehicle owners, property
                  owners, and third parties. Without adequate insurance, a towing
                  company is operating illegally and puts everyone involved at
                  financial risk.
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Commercial general liability:</strong> Covers property damage and bodily injury claims that may arise during towing operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Garage keeper&apos;s liability:</strong> Specifically covers damage to vehicles while they are in the towing company&apos;s custody, including during transport and storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>On-hook coverage:</strong> Insurance that covers vehicles while they are being transported on the tow truck</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Workers&apos; compensation:</strong> Coverage for tow truck drivers and employees in case of workplace injuries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Commercial auto insurance:</strong> Coverage for the tow trucks themselves, meeting Arizona&apos;s commercial vehicle minimums</span>
                  </li>
                </ul>

                {/* Key highlight box */}
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Key Fact: Why Insurance Matters to Property Owners
                  </h3>
                  <p className="text-gray-600">
                    If you hire an uninsured or underinsured towing company and a
                    vehicle is damaged during a tow, you could be held liable as
                    the party that authorized the tow. Always verify that your
                    towing partner carries current, adequate insurance coverage.{" "}
                    {COMPANY.name} maintains comprehensive insurance coverage
                    that exceeds Arizona&apos;s minimum requirements.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Operational Standards and Compliance
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Beyond licensing and insurance, Arizona tow truck regulations
                  establish operational standards that govern how towing companies
                  must conduct their day-to-day business. These standards cover
                  everything from vehicle markings to record-keeping requirements.
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Vehicle markings:</strong> Tow trucks must display the company name, phone number, and ADOT registration number on both sides of the vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Record keeping:</strong> Towing companies must maintain detailed records of every tow, including date, time, location, vehicle description, reason for tow, and authorization documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Law enforcement notification:</strong> Towing companies must notify local law enforcement within a specified timeframe after performing a private property tow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Fee transparency:</strong> Companies must post their fee schedule publicly and provide itemized receipts for all charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Safety equipment:</strong> Tow trucks must carry required safety equipment including warning lights, reflective triangles, and fire extinguishers</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  How to Verify a Towing Company&apos;s Credentials
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Before partnering with a towing company for your private
                  property enforcement needs, take these steps to verify their
                  credentials and ensure they are fully compliant with Arizona
                  regulations:
                </p>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">Request proof of licensing:</strong>{" "}
                      Ask for copies of their ADOT registration, business license, and any municipal permits. A legitimate company will provide these without hesitation.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Verify insurance coverage:</strong>{" "}
                      Request a certificate of insurance showing current coverage for commercial general liability, garage keeper&apos;s liability, and on-hook coverage. Contact the insurance company directly to verify the policy is active.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Check references and reviews:</strong>{" "}
                      Ask for references from other property owners they service. Check online reviews and complaint records with the Better Business Bureau and the Arizona Attorney General&apos;s office.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">Inspect their facilities:</strong>{" "}
                      Visit their storage lot in person. Is it secure, well-lit, and properly fenced? A professional operation reflects professionalism in every aspect of the business.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Red Flags to Watch For
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Not every towing company operates above board. Here are warning
                  signs that a towing company may not be fully compliant with
                  Arizona regulations:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Reluctance or refusal to provide proof of licensing and insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Tow trucks without proper company markings or identification numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Charging property owners fees for services (legitimate companies provide free service to property owners)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>No physical storage facility or an unsecured, poorly maintained lot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>A pattern of complaints with the BBB or state regulatory agencies</span>
                  </li>
                </ul>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Work with a Fully Licensed &amp; Insured Towing Company
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} exceeds all Arizona regulatory requirements
                    for licensing, insurance, and operational standards. Our
                    services are completely free for property owners across the
                    Phoenix metro area.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="btn-primary"
                    >
                      Call {COMPANY.phone}
                    </a>
                    <Link
                      href="/contact"
                      className="btn-cta"
                    >
                      Request Credentials
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
                      <p className="text-gray-500 text-sm">
                        Professional private property towing and parking
                        enforcement serving the Greater Phoenix metro area since
                        2021. Fully licensed, insured, and compliant with all
                        Arizona tow truck regulations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200 reveal">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Share This Article
                  </p>
                  <div className="flex gap-3">
                    {["Facebook", "Twitter", "LinkedIn", "Email"].map(
                      (platform) => (
                        <button
                          key={platform}
                          className="px-4 py-2 rounded-lg bg-gray-100 text-gray-500 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
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
                <div className="glass-card-white rounded-2xl p-6 reveal">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {RELATED_ARTICLES.map((article) => (
                      <Link key={article.title} href={`/blog/${article.slug}`} className="block group">
                        <div className={`h-20 rounded-lg bg-gradient-to-br ${article.gradient} mb-2`} />
                        <span className="text-xs text-primary font-semibold uppercase">{article.category}</span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{article.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-gray-500 text-sm mb-4">Talk to our compliance team today.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Free Property Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">We&apos;ll evaluate your property and set up a fully compliant enforcement program.</p>
                  <Link href="/contact" className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">Get Free Assessment</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Articles Bottom */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">More Articles You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_ARTICLES.map((article, index) => (
              <Link key={article.title} href={`/blog/${article.slug}`} className="glass-card-white rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">{article.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                  <span className="text-xs text-gray-400 mt-2 inline-block">{article.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
