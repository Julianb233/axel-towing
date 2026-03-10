import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HOA Parking Enforcement: What Board Members Need to Know",
  description:
    "A comprehensive guide for HOA board members on implementing parking enforcement programs. Learn about CC&R compliance, Arizona HOA parking rules, and how to set up a towing program at $0 cost.",
};

const RELATED_ARTICLES = [
  {
    slug: "how-to-get-illegally-parked-vehicles-removed",
    title:
      "How to Get Illegally Parked Vehicles Removed from Private Property for Free",
    category: "Legal",
    readTime: "8 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
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
    title:
      "5 Signs Your Apartment Complex Needs Professional Parking Enforcement",
    category: "Property Management",
    readTime: "5 min",
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
              HOA
            </span>
            <span className="text-sm text-blue-200/60">10 min read</span>
            <span className="text-sm text-blue-200/60">
              February 28, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            HOA Parking Enforcement:{" "}
            <span className="text-gradient">
              What Board Members Need to Know
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
                  Parking is consistently one of the top complaints in HOA
                  communities across Arizona. As a board member, you have both
                  the responsibility and the authority to implement effective
                  parking enforcement that keeps your community organized,
                  property values protected, and residents satisfied. This
                  comprehensive guide covers everything you need to know about
                  setting up and managing a professional HOA parking enforcement
                  program — at absolutely no cost to your association.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why HOA Parking Enforcement Matters
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Uncontrolled parking affects far more than just convenience.
                  When parking rules go unenforced, the consequences ripple
                  through every aspect of community life. Property values decline
                  when communities look disorganized and cluttered with vehicles.
                  Safety hazards multiply when fire lanes are blocked and
                  emergency vehicles cannot access homes. HOA boards face
                  increasing liability exposure, and the volume of resident
                  complaints grows month over month.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  In Arizona&apos;s HOA communities, common parking issues
                  include:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Unauthorized vehicles occupying guest parking spots for days or weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>RVs, boats, and trailers stored in violation of CC&amp;R restrictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Vehicles blocking fire lanes, crosswalks, and emergency access points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Abandoned or inoperable vehicles sitting for months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Commercial vehicles parked in residential areas overnight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Residents with more vehicles than their assigned spaces can accommodate</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 1: Review Your CC&amp;Rs and Governing Documents
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Before implementing any enforcement program, thoroughly review
                  your community&apos;s CC&amp;Rs (Covenants, Conditions &amp;
                  Restrictions), bylaws, and any existing parking rules. Your
                  enforcement program must align with these governing documents,
                  and understanding them is essential for legal compliance.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Key questions to answer from your governing documents:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Does the CC&amp;R explicitly grant the HOA authority to tow vehicles?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Are there specific parking rules already established that need updating?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>What notice requirements exist before the board can take enforcement actions?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Are there restrictions on types, sizes, or conditions of vehicles allowed?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Does the board need a homeowner vote to implement a towing program?</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If your CC&amp;Rs do not explicitly address towing authority,
                  consult with your HOA attorney before proceeding. In many cases,
                  the board can adopt parking rules under its general rulemaking
                  authority, but this should be confirmed by legal counsel.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 2: Create a Written Parking Enforcement Policy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A clear, written parking enforcement policy is the backbone of
                  any successful program. This policy should be formally adopted
                  by the board, distributed to all homeowners, and enforced
                  consistently without exceptions. Inconsistent enforcement is
                  one of the fastest ways to generate legal challenges and erode
                  community trust.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Your written policy should comprehensively address:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Authorized parking areas:</strong> Clearly define where vehicles may and may not park, including common areas, visitor spots, and restricted zones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Vehicle restrictions:</strong> Types, sizes, conditions, and registration requirements for all vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Guest parking rules:</strong> Time limits, temporary permits, designated visitor areas, and overnight policies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Enforcement escalation:</strong> The graduated process from warning to citation to towing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Appeals process:</strong> A fair and documented way for homeowners to dispute enforcement actions</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 3: Choose the Right Towing Partner
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Not all towing companies are created equal, and for HOA
                  communities, the stakes are particularly high. You need a
                  partner that understands the sensitive nature of residential
                  enforcement, where the people being towed are your neighbors.
                  When evaluating potential towing partners, consider these
                  critical factors:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>HOA experience:</strong> Do they understand CC&amp;Rs, board dynamics, and resident communication needs?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Warning-first approach:</strong> Do they offer graduated enforcement that gives residents a chance to comply?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Communication tools:</strong> Can they help you notify residents about new rules and enforcement actions?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Reporting capabilities:</strong> Do they provide monthly reports suitable for board meetings?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Zero cost:</strong> Reputable companies provide all services at no cost to the HOA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Professional appearance:</strong> Will their drivers represent your community with respect and courtesy?</span>
                  </li>
                </ul>

                {/* Key highlight box */}
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Key Fact: $0 Cost to Your HOA
                  </h3>
                  <p className="text-gray-600">
                    Professional towing companies like Axle Towing fund their
                    operations through legally mandated impound fees paid by the
                    vehicle owners who violate parking rules — not through
                    charges to the HOA. Signage, patrols, towing, portal access,
                    and monthly reports are all included at no cost to your
                    association.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 4: Communicate Effectively with Residents
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Communication is the single most important factor in whether a
                  parking enforcement program succeeds or fails. The most common
                  reason programs generate angry complaints — or even legal
                  challenges — is poor communication. Before enforcement begins,
                  every homeowner must clearly understand what the rules are and
                  what happens when they are violated.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Best practices for HOA parking enforcement communication
                  include:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mail a formal notice to every homeowner at least 30 days before enforcement begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Host a community meeting or town hall to explain the program and answer questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Include parking rules in welcome packets for new homeowners and tenants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Send email reminders and include updates in community newsletters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Post clear signage at all community entrances with rules and towing company contact info</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Provide a clear process for residents to report violations</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 5: Implement Graduated Enforcement
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The most effective HOA parking enforcement programs use a
                  graduated approach that gives homeowners multiple opportunities
                  to correct their behavior before towing occurs. This approach
                  is fairer, generates fewer complaints, and is more defensible
                  if challenged. Here is the recommended escalation:
                </p>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">Education Period (30 days):</strong>{" "}
                      Signs are posted and notices distributed, but no enforcement actions are taken. This gives everyone time to understand and comply with the new rules.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Warning Notices:</strong>{" "}
                      First-time violations receive a written warning placed on the vehicle, documenting the violation and the consequences of repeat offenses.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Formal Citations:</strong>{" "}
                      Repeated violations receive a formal citation with a notice that the next violation will result in towing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">Towing:</strong>{" "}
                      Chronic violators are towed per the posted policy. All documentation from previous warnings supports the enforcement action.
                    </div>
                  </li>
                </ol>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Note that certain violations — such as blocking fire lanes,
                  parking in handicap zones without a permit, or blocking
                  emergency access — should be subject to immediate towing
                  regardless of prior warnings, as they pose safety risks.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Arizona Signage Requirements for HOAs
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law (ARS 28-3511) requires specific signage for private
                  property towing, and your HOA must comply with these
                  requirements for enforcement actions to be legally valid. Your
                  towing company should handle signage installation, but as a
                  board member, you should verify compliance.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Signs must be posted at every entrance to the community and at
                  regular intervals throughout. They must include the towing
                  company name and phone number, display &quot;Tow-Away Zone&quot; or
                  equivalent language, meet minimum size requirements, and be
                  reflective or well-lit for nighttime visibility.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Board Member Responsibilities
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  As an HOA board member overseeing a parking enforcement
                  program, your specific responsibilities include:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ensuring the enforcement policy aligns with your CC&amp;Rs and governing documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reviewing monthly enforcement reports from your towing partner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Handling homeowner appeals and disputes fairly and consistently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Keeping residents informed about parking rules and any policy changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Periodically reviewing and updating the enforcement policy as community needs evolve</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Tips for Communicating with Frustrated Residents
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Even the best-run parking enforcement programs will generate
                  occasional complaints. Having a clear, empathetic approach to
                  handling frustration will serve your board well:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Listen to the concern fully before responding — often residents just want to be heard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reference the written policy and governing documents, not personal opinions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Provide thorough documentation (photos, timestamps) to support enforcement actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Have a formal appeals process and follow it consistently for every complaint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Emphasize that parking enforcement protects property values and benefits the entire community</span>
                  </li>
                </ul>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Need Help with HOA Parking Enforcement?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Axle Towing &amp; Impound specializes in HOA parking
                    enforcement programs across the Phoenix metro area. Our
                    services are completely free for HOAs, and we work closely
                    with boards to create fair, effective, and legally compliant
                    programs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="btn-primary"
                    >
                      Call {COMPANY.phone}
                    </a>
                    <Link
                      href="/services/hoa-towing"
                      className="btn-cta"
                    >
                      HOA Towing Services
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
                        2021. Licensed, insured, and committed to helping HOA
                        communities maintain orderly, safe parking environments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Share Buttons Placeholder */}
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
                  <p className="text-gray-500 text-sm mb-4">
                    Talk to our HOA enforcement specialists today.
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
                  <h3 className="font-bold mb-2">
                    Free HOA Assessment
                  </h3>
                  <p className="text-blue-100/70 text-sm mb-4">
                    We will evaluate your community&apos;s parking needs and
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

      {/* Related Articles Bottom */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">
            More Articles You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_ARTICLES.map((article, index) => (
              <Link
                key={article.title}
                href={
                  article.slug === "#" ? "#" : `/blog/${article.slug}`
                }
                className="glass-card-white rounded-2xl overflow-hidden group reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
                  {article.slug === "#" && (
                    <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-xs text-white font-semibold">
                      Coming Soon
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <span className="text-xs text-gray-400 mt-2 inline-block">
                    {article.readTime} read
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
