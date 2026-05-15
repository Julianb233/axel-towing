import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Image from "next/image";

const HERO_IMAGE = "/images/seo/property-manager-towing-hub.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck in front of Phoenix skyline at golden hour - Axle Towing property manager resource hub";
const PAGE_TITLE = "Property Manager Towing Hub — Arizona | Axle Towing";
const PAGE_DESCRIPTION =
  "Every guide, checklist, contract template, and statute reference Phoenix property managers, HOA boards, and commercial owners need to run a compliant private property towing program in Arizona.";
const CANONICAL = "https://axletowing.com/resources/property-manager-towing-hub";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    images: [HERO_IMAGE_URL],
  },
};

interface HubResource {
  slug: string;
  title: string;
  desc: string;
  category: "Guides" | "Templates" | "Checklists" | "Statutes";
  external?: boolean;
}

const HUB_RESOURCES: HubResource[] = [
  {
    slug: "/resources/arizona-abandoned-vehicle-form-guide",
    title: "Arizona Abandoned Vehicle Form Guide",
    desc: "Step-by-step walk through the ADOT abandoned vehicle paperwork — what to file, what to keep, and what we file on your behalf.",
    category: "Guides",
  },
  {
    slug: "/resources/arizona-abandoned-vehicle-72-hour-rule",
    title: "Arizona 72-Hour Abandoned Vehicle Rule Explained",
    desc: "Plain-language explanation of the observation window, notice requirements, and what \"abandoned\" actually means under Arizona law.",
    category: "Guides",
  },
  {
    slug: "/resources/private-property-towing-contract-guide",
    title: "Private Property Towing Contract Guide",
    desc: "What every towing authorization agreement should contain, red flags to avoid, and a downloadable terms checklist for board review.",
    category: "Templates",
  },
  {
    slug: "/resources/how-to-start-private-property-towing-program",
    title: "How to Start a Private Property Towing Program",
    desc: "An A-to-Z runbook: assessing your property, getting board approval, ARS-compliant signage, resident communication, and Day 1 enforcement.",
    category: "Guides",
  },
  {
    slug: "/resources/arizona-towing-signage-requirements",
    title: "Arizona Towing Signage Requirements",
    desc: "Exact dimensions, language, placement, and visibility requirements under ARS 28-3511 — with a printable verification checklist.",
    category: "Statutes",
  },
  {
    slug: "/resources/parking-enforcement-checklist-for-property-managers",
    title: "Parking Enforcement Checklist for Property Managers",
    desc: "Daily, weekly, and monthly checklist for property managers running parking enforcement — designed to fit into a Friday-morning routine.",
    category: "Checklists",
  },
  {
    slug: "/resources/hoa-board-guide-to-towing-and-parking-enforcement",
    title: "HOA Board Guide to Towing & Parking Enforcement",
    desc: "Designed to be handed to a new HOA board member at their first meeting. Covers CC&R alignment, liability protection, and how to evaluate a towing partner.",
    category: "Guides",
  },
  {
    slug: "/resources/monthly-towing-compliance-report-template",
    title: "Monthly Towing Compliance Report Template",
    desc: "A printable monthly report template that satisfies most board, insurer, and management-company documentation requirements.",
    category: "Templates",
  },
  {
    slug: "/resources/property-manager-guide",
    title: "The Property Manager's Complete Guide to Arizona Towing Law",
    desc: "Long-form 10-chapter pillar guide covering Arizona statute, signage, contracts, dispute handling, and liability protection.",
    category: "Guides",
  },
  {
    slug: "/resources/hoa-enforcement-checklist",
    title: "HOA Enforcement Checklist",
    desc: "30-point checklist board members can walk through to audit their community's current parking enforcement posture.",
    category: "Checklists",
  },
  {
    slug: "/resources/parking-policy-template",
    title: "Parking Policy Template",
    desc: "Customizable parking policy template designed to drop into an HOA or apartment community handbook.",
    category: "Templates",
  },
];

const CATEGORIES: HubResource["category"][] = ["Guides", "Templates", "Checklists", "Statutes"];

const HUB_FAQS = [
  {
    question: "What's the difference between this hub and the Property Manager Guide?",
    answer:
      "The Property Manager Guide is a single long-form pillar resource (10 chapters). This hub is the umbrella that links to every guide, checklist, template, and statute reference we maintain — including the pillar guide. If you're new to private property towing in Arizona, start with the pillar guide. If you're looking for a specific document (a contract template, a signage requirement, the 72-hour rule), come here.",
  },
  {
    question: "Are these resources legal advice?",
    answer:
      "No. These are educational resources for property managers, HOA boards, and commercial owners about Arizona's private property towing framework. They reflect our operational experience and reference Arizona statutes, but they are not a substitute for legal counsel. Have your HOA attorney or property management legal team review any contract template or compliance program before adopting it.",
  },
  {
    question: "Which Arizona statutes apply to private property towing?",
    answer:
      "The core statutes are ARS 28-3511 (private property impound), ARS 28-874 (signage requirements for nonconsensual tows), ARS 9-499.05 (municipal-level signage and consumer protection), and Arizona's abandoned vehicle statutes governing the 72-hour rule and ADOT notice procedures. We reference each in the relevant resource pages and link to the official statute text on the Arizona Legislature site.",
  },
  {
    question: "Can I use these templates for properties outside Phoenix?",
    answer:
      "These templates are designed for Arizona properties. The legal framework, statute references, and notice procedures are Arizona-specific. If you have properties in other states, you'll need state-specific versions. Reach out — we can usually point you at trusted partners in adjacent states.",
  },
  {
    question: "Do you charge property owners for any of these resources?",
    answer:
      "No. Every resource in this hub is free for property owners, HOA boards, community managers, and property management companies. Our towing services are also free for property owners — the entire program is funded through statutory impound fees on the people who actually violate posted parking rules.",
  },
  {
    question: "How often are these resources updated?",
    answer:
      "We review every resource quarterly and update when Arizona statutes change, when our operational experience surfaces a better practice, or when a community manager flags an outdated reference. The latest review date appears at the bottom of each page.",
  },
];

export default function PropertyManagerTowingHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://axletowing.com" },
            { name: "Resources", url: "https://axletowing.com/resources" },
            { name: "Property Manager Towing Hub", url: CANONICAL },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(HUB_FAQS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: PAGE_TITLE,
              description: PAGE_DESCRIPTION,
              slug: "property-manager-towing-hub",
              datePublished: "2026-05-15",
              pathPrefix: "resources",
            }),
          ),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary to-cta">
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/90 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-white">Property Manager Towing Hub</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Property Manager Towing Hub
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            Every guide, template, checklist, and statute reference Phoenix-metro property managers, HOA boards, and commercial owners need to run a compliant, board-defensible private property towing program in Arizona — in one place.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#start-here" className="btn-primary">Start Here</a>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary">Call {COMPANY.phone}</a>
          </div>
        </div>
      </section>



      {/* Hero Image */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={HERO_IMAGE}
              alt={HERO_ALT}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <aside className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-6">
        <div className="bg-blue-50 border-l-4 border-primary rounded-r-2xl p-6">
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-2">TL;DR</p>
          <p className="text-gray-800 leading-relaxed">
            Arizona property managers need three things to tow legally: ARS 9-499.05-compliant signage, a written authorization agreement with a licensed towing company, and documented policies aligned with ARS 28-3511. This hub centralizes every free guide, template, checklist, and statute reference you need to build and run a compliant private property towing program across the Phoenix metro.
          </p>
        </div>
      </aside>

      {/* Key Takeaways */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="glass-card-white rounded-2xl p-6 my-4 border-l-4 border-cta">
          <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Private property towing in Arizona is governed by three statutes: ARS 28-3511 (removal authority), ARS 28-874 (storage and retrieval rules), and ARS 9-499.05 (signage standards with local overlays in Phoenix, Scottsdale, Tempe, and Chandler)</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Every tow is free for property owners — costs are recovered from vehicle owners via statutory impound fees, which is why a written authorization agreement is the key document in any compliant program</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Signage and documentation are the two most common failure points: under-sized signs, missing required language, and lack of photo evidence are the basis for most successful wrongful-tow claims</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>HOA boards need a formal board resolution and CC&R review before authorizing towing — the authorization agreement references those documents as the source of enforcement authority</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>All resources in this hub are free: guides, checklists, templates, and statute references written from the property manager perspective — never the vehicle owner perspective</span></li>
          </ul>
        </div>
      </div>

      {/* ===== INTRO ===== */}
      <section id="start-here" className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built for the People Running the Program
          </h2>
          <div className="space-y-5 text-body-text text-lg leading-relaxed">
            <p>
              This hub is for the community manager opening their first board packet about parking enforcement, the apartment property manager who needs a contract template their attorney will approve, and the HOA board member who got handed the parking portfolio and would rather have a checklist than learn Arizona statute by reading it directly.
            </p>
            <p>
              Every resource here is grounded in our operational experience running private property towing programs across the Phoenix metro and the relevant Arizona statutes — ARS 28-3511, ARS 28-874, ARS 9-499.05, and Arizona's abandoned vehicle framework. Where we cite a statute, we link to the official Arizona Legislature text so you can verify it yourself.
            </p>
            <p>
              Nothing here is legal advice. Have your HOA attorney or property management legal team review anything you plan to adopt as policy. But these resources will get you 80% of the way to a defensible parking enforcement program, and they'll save your attorney an hour of explaining the basics.
            </p>
          </div>
        </div>
      </section>

      {/* ===== START HERE PILLAR LINK ===== */}
      <section className="py-12 bg-blue-50/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources/property-manager-guide"
            className="block group glass-card-white rounded-2xl p-8 md:p-10 transition-all hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cta flex items-center justify-center flex-shrink-0 text-white font-heading font-bold text-2xl">
                01
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider font-semibold text-primary mb-2">If you're new to this — start here</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  The Property Manager's Complete Guide to Arizona Towing Law
                </h3>
                <p className="text-body-text leading-relaxed mb-4">
                  Our 10-chapter long-form pillar guide. Covers Arizona statute, signage, contracts, dispute handling, liability protection, and how to build a long-term parking strategy. About a 25-minute read. Read it once and you'll understand the operational framework every other resource in this hub fits into.
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-cta transition-colors">
                  Open the pillar guide
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== RESOURCES BY CATEGORY ===== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            All Resources, Sorted by What You Need
          </h2>
          <p className="text-body-text text-lg mb-12 max-w-3xl">
            Pick the category that matches what you're trying to do today.
          </p>

          {CATEGORIES.map((category) => {
            const list = HUB_RESOURCES.filter((r) => r.category === category);
            if (list.length === 0) return null;
            return (
              <div key={category} className="mb-12">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                  {category}
                </h3>
                <p className="text-body-text mb-6">
                  {category === "Guides" && "Long-form educational reading."}
                  {category === "Templates" && "Drop-in templates you can adapt for your community or property."}
                  {category === "Checklists" && "Use-now checklists for property managers and board members."}
                  {category === "Statutes" && "Direct reference to the Arizona statutes that govern private property towing."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {list.map((r) => (
                    <Link
                      key={r.slug}
                      href={r.slug}
                      className="group glass-card-white rounded-xl p-6 transition-all hover:shadow-md"
                    >
                      <h4 className="font-heading text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {r.title}
                      </h4>
                      <p className="text-body-text text-sm leading-relaxed mb-3">{r.desc}</p>
                      <span className="inline-flex items-center text-xs font-semibold text-primary group-hover:text-cta transition-colors">
                        Open
                        <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== STATUTE REFERENCE BOX ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-white rounded-2xl p-8 md:p-10">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Arizona Statute Quick Reference</h3>
            <p className="text-body-text mb-6">
              Every resource in this hub references one or more of these statutes. Read the official text directly when you have a borderline case or your attorney asks for primary sources.
            </p>
            <ul className="space-y-4 text-body-text">
              <li>
                <strong className="text-gray-900">ARS 28-3511</strong> — Private property impound and nonconsensual towing framework. The statute that authorizes the program and defines property-owner duties.
              </li>
              <li>
                <strong className="text-gray-900">ARS 28-874</strong> — Statewide signage and notice requirements for nonconsensual towing.
              </li>
              <li>
                <strong className="text-gray-900">ARS 9-499.05</strong> — Municipal-level (city) consumer protection and signage rules; some cities impose stricter requirements than the state floor.
              </li>
              <li>
                <strong className="text-gray-900">Abandoned vehicle framework</strong> — The 72-hour observation rule, ADOT-coordinated notice to last registered owner and lienholders, statutory waiting periods before disposition.
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-6">
              The Arizona Legislature publishes the current text of every statute at <a href="https://www.azleg.gov/arsDetail/" className="text-primary underline" target="_blank" rel="noopener noreferrer">azleg.gov</a>. Statute numbers are stable; the language is occasionally amended.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
            Hub FAQ
          </h2>
          <p className="text-body-text text-center text-lg mb-12 max-w-2xl mx-auto">
            Common questions about the hub itself. Topic-specific questions live on each resource page.
          </p>
          <div className="space-y-4">
            {HUB_FAQS.map((faq) => (
              <details key={faq.question} className="group glass-card-white rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-gray-900 text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <svg className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-body-text leading-relaxed border-t border-blue-100/50 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AUDIENCE CTA ===== */}
      <section className="py-20 md:py-24 bg-blue-50/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See the Program for Your Property Type
          </h2>
          <p className="text-body-text text-lg mb-10 max-w-2xl mx-auto">
            We build tailored parking enforcement programs for HOA boards, apartment property managers, and commercial property owners. Pick yours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { slug: "hoa", label: "HOA Boards & Managers" },
              { slug: "apartment-complexes", label: "Apartment Properties" },
              { slug: "commercial-property-managers", label: "Commercial Properties" },
            ].map((a) => (
              <Link
                key={a.slug}
                href={`/audiences/${a.slug}`}
                className="group glass-card-white rounded-2xl p-6 transition-all hover:shadow-lg"
              >
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{a.label}</h3>
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-cta transition-colors">
                  See the program
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-16 bg-gradient-to-br from-primary to-cta text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Need a Hand? Talk to a Real Operator.
          </h2>
          <p className="text-white/95 text-lg mb-8">
            We've run thousands of tows across the Phoenix metro and we're happy to walk a board, a community manager, or a property owner through the program. Free consultation, zero pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-heading font-bold text-base border-2 border-white text-white hover:bg-white hover:text-primary transition-colors"
            >
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
