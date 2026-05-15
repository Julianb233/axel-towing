import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Image from "next/image";

const HERO_IMAGE = "/images/seo/private-property-towing-contract-guide.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck at a Phoenix area property management company building - Axle Towing towing contracts";
const PAGE_TITLE = "Private Property Towing Contract Guide: What Every Property Manager Should Negotiate";
const PAGE_DESCRIPTION =
  "What every towing-authorization agreement should contain, key terms to negotiate, and red flags to avoid - including kickbacks, hidden fees, and no-tow-no-pay clauses.";
const CANONICAL = "https://axletowing.com/resources/private-property-towing-contract-guide";
const PUBLISHED = "2026-05-15";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
};

const FAQS = [
  {
    question: "Is a verbal towing authorization agreement enforceable in Arizona?",
    answer:
      "Verbal authorization is technically possible but creates significant practical and legal risk. Without a written agreement, there is no clear record of what was authorized, what exclusions apply, or what liability protections are in place. Arizona towing disputes almost always hinge on documentation. A written, signed agreement is standard industry practice and your strongest protection.",
  },
  {
    question: "Can a towing company require exclusivity as a condition of the contract?",
    answer:
      "An exclusivity clause is not inherently problematic - many properties work with a single towing company for simplicity. The risk is when exclusivity is paired with a minimum-tow requirement or a penalty for low tow volumes. That structure creates an incentive to over-tow. Negotiate to remove minimum-tow clauses, or at minimum cap the penalty to a reasonable dollar amount.",
  },
  {
    question: "What is a no-tow-no-pay clause and why is it risky?",
    answer:
      "A no-tow-no-pay clause means the towing company is only compensated when a tow actually occurs - there is no base fee for patrols, sign installation, or reporting. This creates a financial incentive to find violations and tow vehicles even when warnings or other remedies might be appropriate. It can also lead to selective enforcement that exposes you to discrimination claims. A flat-rate or patrol-based fee structure aligns incentives better.",
  },
  {
    question: "What insurance should a towing company carry to work on my property?",
    answer:
      "At minimum, you should require commercial general liability insurance and garage keepers liability (which covers vehicles in the towing company's custody). Ask for certificates of insurance naming your property as an additional insured. Verify the policy limits are adequate for your property type - a large apartment complex or commercial center typically warrants higher limits than a small retail lot.",
  },
  {
    question: "How long should a towing authorization agreement run?",
    answer:
      "One to two years with renewal options is a common structure. Avoid agreements that automatically renew for multiple years without your affirmative action, as these make it difficult to switch providers if service quality declines. Include a 30-day written notice termination clause so you can exit if needed without legal drama.",
  },
  {
    question: "Can the towing company change the fee schedule mid-contract?",
    answer:
      "Only if the contract allows it. Make sure your agreement includes language that locks the fee schedule for the contract term, or requires written notice and your approval before any fee changes take effect. Vague 'fee schedule subject to change' language is a red flag - push for a fixed exhibit attached to the contract.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://axletowing.com" },
              { name: "Resources", url: "https://axletowing.com/resources" },
              { name: "Private Property Towing Contract Guide", url: CANONICAL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: PAGE_TITLE,
              description: PAGE_DESCRIPTION,
              slug: "private-property-towing-contract-guide",
              datePublished: PUBLISHED,
              pathPrefix: "resources",
            })
          ),
        }}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary to-cta">
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/90 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-white">Towing Contract Guide</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {PAGE_TITLE}
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            {PAGE_DESCRIPTION}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image src={HERO_IMAGE} alt={HERO_ALT} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
          </div>
        </div>
      </section>

      <aside className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-6">
        <div className="bg-blue-50 border-l-4 border-primary rounded-r-2xl p-6">
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-2">TL;DR</p>
          <p className="text-gray-800 leading-relaxed">A private property towing contract in Arizona (called an Authorization Agreement under ARS 28-3511) should cover: the scope of authorized enforcement, what vehicles qualify for towing, the towing company&apos;s documentation obligations, law enforcement notification requirements, vehicle storage standards, dispute handling procedures, termination notice period, and insurance requirements. Before signing any towing contract, property managers should verify that the company&apos;s current ADOT towing license is on file, that the company carries adequate liability insurance, and that the agreement includes photo documentation as a standard service.</p>
        </div>
      </aside>

      {/* Body */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg space-y-10 text-body-text text-lg leading-relaxed">

          <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>An ARS 28-3511 Authorization Agreement is the legal foundation of every private property towing program in Arizona.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>The agreement must specify what vehicles qualify for towing — unauthorized, abandoned, permit-expired, fire lane, or ADA violations.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>The towing company&apos;s ADOT towing license number and insurance certificate should be attached to the agreement.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Photo documentation as a standard service should be explicitly stated in the contract — it protects both parties.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>A 30-day termination notice period is typical — longer terms may benefit the property manager in exchange for additional services.</span></li>
            </ul>
          </div>

            <p>
              The towing authorization agreement you sign with a private-property towing company is one of the most consequential documents in your parking enforcement program. It defines who has authority to tow, under what circumstances, and who bears liability if something goes wrong. Yet many property managers sign these agreements without reading them carefully - or without knowing what to look for.
            </p>
            <p>
              This guide covers the elements every solid towing contract should contain, the terms worth negotiating, and the red flags that indicate a towing company may not have your interests at heart.
            </p>

            <p className="text-sm text-gray-500 italic border-l-4 border-blue-200 pl-4">
              This page is for general informational purposes only and does not constitute legal advice. Have any towing authorization agreement reviewed by your attorney before signing, particularly if your property is part of an HOA, a management portfolio, or a commercial development with complex lease terms.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              What a Towing Authorization Agreement Actually Is
            </h2>
            <p>
              A towing authorization agreement (sometimes called a towing service agreement or private-property towing contract) is a written contract between you, as the property owner or authorized agent, and the towing company. It grants the towing company permission to remove unauthorized vehicles from your property and defines the terms under which that permission is given.
            </p>
            <p>
              Under Arizona law, a towing company must have authorization from the property owner or their agent before removing a vehicle from private property. ARS 28-3511 is the primary statute governing private-property towing in Arizona, and it requires that this authorization be in place before any tow occurs. A properly executed written agreement satisfies this requirement and creates a clear record that can be cited if a tow is ever challenged.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              10-Point Checklist: What Every Contract Should Contain
            </h2>

            {/* Checklist callout */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-primary bg-blue-50/50 my-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                Contract Checklist - Review Before Signing
              </h3>
              <ol className="space-y-4">
                {[
                  {
                    num: "1",
                    item: "Parties identified with legal names and addresses",
                    detail: "Both the property owner/manager (with property address) and the towing company (with license number) should be fully identified.",
                  },
                  {
                    num: "2",
                    item: "Scope of authorization - which lots, zones, and violation types",
                    detail: "The contract should list every area of the property covered and specify which types of violations authorize a tow (no permit, blocking fire lane, wrong zone, etc.).",
                  },
                  {
                    num: "3",
                    item: "Towing company licensing and insurance certificates",
                    detail: "Arizona towing operators must be licensed. The contract should include license numbers and attach current certificates of insurance naming your property as an additional insured.",
                  },
                  {
                    num: "4",
                    item: "Notification requirements and response time guarantees",
                    detail: "Specify how quickly the towing company must respond to a call and how you will be notified after a tow occurs (date, time, vehicle description, law enforcement notification confirmation).",
                  },
                  {
                    num: "5",
                    item: "Documentation and photo requirements",
                    detail: "The contract should require the towing company to photograph violations before towing, document law enforcement notifications, and provide copies of records upon request.",
                  },
                  {
                    num: "6",
                    item: "Fixed fee schedule attached as an exhibit",
                    detail: "All fees - towing, storage, administrative - should be listed in a signed exhibit. No fee increases without your written consent.",
                  },
                  {
                    num: "7",
                    item: "No revenue sharing or kickback provisions",
                    detail: "The contract should not include any arrangement where you receive a payment per tow or where the towing company benefits financially in ways that create over-towing incentives beyond their stated fees.",
                  },
                  {
                    num: "8",
                    item: "Indemnification and liability allocation",
                    detail: "The towing company should indemnify you for tows they perform - you should not be liable for a wrongful tow that results from their error. Review this provision carefully with your attorney.",
                  },
                  {
                    num: "9",
                    item: "Term, renewal, and termination provisions",
                    detail: "One to two years with a 30-day written notice termination right for either party is a reasonable starting point. Avoid auto-renewal for extended terms without your affirmative consent.",
                  },
                  {
                    num: "10",
                    item: "Dispute resolution process",
                    detail: "The contract should specify how disputes - between you and the towing company, or involving a vehicle owner - are handled, including who has standing to authorize a release and under what circumstances.",
                  },
                ].map((c) => (
                  <li key={c.num} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold font-heading text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {c.num}
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">{c.item}</div>
                      <div className="text-body-text text-base mt-1">{c.detail}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Key Terms to Negotiate Before You Sign
            </h2>
            <p>
              Most towing companies present a standard contract. That does not mean every clause is non-negotiable. Here are the terms worth pushing back on:
            </p>
            <p>
              <strong>Minimum tow volume requirements.</strong> Some contracts include a clause requiring the property to maintain a minimum number of tows per month or quarter - and if you fall below that, you owe a fee or the contract terms change. This structure puts financial pressure on the towing company to tow even when it is not appropriate. Negotiate to remove it.
            </p>
            <p>
              <strong>Indemnification scope.</strong> The towing company's indemnification of you should cover tows they perform under your authorization. But make sure the clause does not inadvertently make you responsible for your own negligence in authorizing tows. A balanced clause protects both parties from their own mistakes.
            </p>
            <p>
              <strong>Patrol frequency and reporting.</strong> If the towing company will be conducting regular patrols (a good practice for active parking enforcement), negotiate the frequency in writing and require a written report for each patrol - even one with no tows. This creates a documented enforcement history that protects you.
            </p>
            <p>
              <strong>Signage responsibility.</strong> Who installs and maintains compliant towing signs? Who bears the cost? Who is responsible if a sign is damaged or falls and a tow is challenged as a result? Get this in writing. See our guide to{" "}
              <Link href="/resources/arizona-towing-signage-requirements" className="text-primary underline hover:text-primary/80">
                Arizona towing signage requirements
              </Link>{" "}
              for the statutory specifications.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Red Flags: Contract Terms That Should Worry You
            </h2>
            <p>
              Not all towing companies operate in the property manager's best interest. These contract provisions should raise a flag and prompt a harder conversation before signing:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                <strong>Kickback or revenue-sharing arrangements.</strong> Any structure where you receive a dollar amount per tow - or where the towing company reduces fees in exchange for exclusive access - can create legal liability for you under Arizona law and creates a clear over-towing incentive. Avoid these entirely.
              </li>
              <li>
                <strong>Blanket exclusive lockout provisions.</strong> Some contracts include language preventing you from calling another towing company under any circumstances. A lockout during a genuine emergency because your contracted company cannot respond is a real operational risk.
              </li>
              <li>
                <strong>Vague authorization language.</strong> A contract that authorizes the towing company to remove "any vehicle not in compliance with property rules" without defining those rules gives them enormous discretion and exposes you to disputes. Authorization should be specific.
              </li>
              <li>
                <strong>Unilateral fee adjustment rights.</strong> If the contract lets the towing company raise fees with 30 days' notice and your only option is to cancel the contract, that is not a negotiated agreement - it is a price ceiling on your exit cost. Push for fixed fees through the contract term.
              </li>
              <li>
                <strong>No-tow-no-pay structure for patrols.</strong> As noted above, compensation tied entirely to tow volume creates an incentive structure that can harm your residents and expose your property to over-towing complaints.
              </li>
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              What Good Looks Like: Axle Towing's Approach
            </h2>
            <p>
              Axle Towing provides{" "}
              <Link href="/services/private-property-impounds" className="text-primary underline hover:text-primary/80">
                private property impound services
              </Link>{" "}
              across the Phoenix metro under transparent authorization agreements. We do not use minimum-tow clauses, do not share revenue with property managers, and provide written patrol reports after every patrol visit - even when no tow occurred.
            </p>
            <p>
              Our agreements include fixed fee schedules attached as signed exhibits, response time guarantees, photo documentation requirements, and indemnification language that has been reviewed by our own legal counsel. We are happy to walk you through any provision before you sign.
            </p>
            <p>
              For HOA boards evaluating their options, our{" "}
              <Link href="/audiences/hoa" className="text-primary underline hover:text-primary/80">
                HOA towing services
              </Link>{" "}
              page covers the specific considerations for community associations. For apartment and commercial properties, see{" "}
              <Link href="/services/parking-enforcement" className="text-primary underline hover:text-primary/80">
                parking enforcement
              </Link>{" "}
              and{" "}
              <Link href="/audiences/commercial-property-managers" className="text-primary underline hover:text-primary/80">
                commercial property management towing
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      {/* Hub link */}
      <section className="py-12 bg-blue-50/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/resources/property-manager-towing-hub"
            className="text-primary font-semibold underline hover:text-primary/80 transition-colors"
          >
            Back to the Property Manager Towing Hub
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group glass-card-white rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-gray-900 text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-cta text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Need a Hand? Talk to an Operator.
          </h2>
          <p className="text-white/95 text-lg mb-8">
            Free consultation for property managers, HOA boards, and commercial owners across the Phoenix metro. 24/7 dispatch available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
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
