import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Image from "next/image";

const HERO_IMAGE = "/images/seo/arizona-abandoned-vehicle-form-guide.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck at a Phoenix area impound facility entrance - Axle Towing abandoned vehicle forms";
const PAGE_TITLE = "Arizona Abandoned Vehicle Paperwork: A Step-by-Step Guide for Property Managers";
const PAGE_DESCRIPTION =
  "Learn which ADOT abandoned vehicle forms apply to your property, what information you must provide, how Axle Towing files on your behalf, and what the timeline looks like.";
const CANONICAL = "https://axletowing.com/resources/arizona-abandoned-vehicle-form-guide";
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
    question: "Does the property manager have to file ADOT paperwork directly?",
    answer:
      "In most private-property removal scenarios, the licensed towing operator - not the property manager - submits the required notifications to ADOT and local law enforcement. Your role is to supply accurate vehicle and lot information and to retain copies of any authorization you sign. Always confirm the filing responsibility with your towing partner before any removal.",
  },
  {
    question: "What information does Axle Towing need from me to start an abandoned vehicle case?",
    answer:
      "We typically need the vehicle's license plate, make, model, color, and approximate location on the property. A dated photograph is helpful. If the vehicle has no plates, the VIN (visible through the windshield) is required for title-search purposes.",
  },
  {
    question: "How long does the abandoned vehicle title process take in Arizona?",
    answer:
      "Arizona's abandoned vehicle title timeline varies based on whether the owner or lienholder responds. In most uncontested cases the process concludes in approximately 30 to 45 days after the required notice periods expire. Complex cases involving out-of-state titles or active liens can take longer.",
  },
  {
    question: "Can a property manager authorize a tow without a written agreement?",
    answer:
      "Arizona law requires that towing from private property be authorized either by the property owner or an authorized agent. A standing written agreement between the property manager and the towing company is the safest and most legally defensible arrangement. Verbal authorization creates risk for both parties.",
  },
  {
    question: "What happens if a vehicle owner disputes the removal after paperwork is filed?",
    answer:
      "If a vehicle owner contests an abandoned vehicle determination, they typically must demonstrate that the vehicle was not abandoned under the statutory definition - for example, by showing it was operational and licensed. Your documentation of the observation period, photos, and signed towing authorization is your best protection. Consult your attorney if a dispute escalates.",
  },
  {
    question: "Is there a difference between an abandoned vehicle removal and a standard private-property tow?",
    answer:
      "Yes. A standard private-property impound is initiated immediately under ARS 28-3511 for a violation like parking without a permit. An abandoned vehicle proceeding under Arizona's abandoned vehicle statutes is used when a vehicle has been left for an extended period and may involve a title-transfer process if the owner does not claim it within the required period.",
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
              { name: "Arizona Abandoned Vehicle Form Guide", url: CANONICAL },
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
              slug: "arizona-abandoned-vehicle-form-guide",
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
            <span className="text-white">Abandoned Vehicle Forms</span>
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
          <p className="text-gray-800 leading-relaxed">Arizona&apos;s abandoned vehicle form process requires property managers and towing companies to follow specific ADOT documentation steps under ARS 28-4141. The key forms include the Notice of Abandoned Vehicle (sent to ADOT and the registered owner), the Towing Record (documenting the removal), and the Lien Notice (required before disposal can occur). Missing any form can delay or invalidate the lien process. Axle Towing handles all abandoned vehicle documentation as part of the towing service — property managers receive a complete paper trail without managing the forms themselves.</p>
        </div>
      </aside>

      {/* Body */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg space-y-10 text-body-text text-lg leading-relaxed">

          <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Arizona&apos;s abandoned vehicle documentation process is governed by ARS 28-4141 and requires specific ADOT forms.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>The Notice of Abandoned Vehicle must be sent to both ADOT and the registered owner before lien proceedings begin.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Missing or incorrect documentation can delay or invalidate the abandoned vehicle lien process entirely.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Axle Towing handles all abandoned vehicle documentation — property managers receive a complete paper trail automatically.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>The full abandoned vehicle process from removal to disposal typically takes 30–60 days under Arizona&apos;s lien framework.</span></li>
            </ul>
          </div>

            <p>
              When a vehicle sits unattended on your property - plates missing, tires flat, covered in dust - you face a question that trips up even experienced property managers: is this a standard unauthorized parking situation, or does it trigger Arizona's abandoned vehicle process? The answer determines which forms get filed, who files them, and how long the removal takes. This guide walks you through the paperwork landscape so you know exactly what to expect.
            </p>

            <p className="text-sm text-gray-500 italic border-l-4 border-blue-200 pl-4">
              Disclaimer: This page is for general informational purposes only and does not constitute legal advice. Arizona statutes are subject to change. Always verify requirements at{" "}
              <a href="https://www.azleg.gov/arsDetail/" className="text-primary underline" target="_blank" rel="noopener noreferrer">azleg.gov</a>{" "}
              and consult a licensed attorney for guidance specific to your situation.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Two Separate Legal Tracks: Impound vs. Abandoned Vehicle
            </h2>
            <p>
              Arizona law creates two distinct frameworks for removing vehicles from private property. Understanding which track applies changes everything about the paperwork.
            </p>
            <p>
              The first track is the standard private-property impound under ARS 28-3511. This applies when a vehicle is parked in violation of posted rules - no permit, blocking a fire lane, parked in a reserved spot. The removal can happen immediately once you authorize it, and the towing company handles the law-enforcement notification. There is no multi-week observation period and no title-transfer process unless the owner never claims the vehicle.
            </p>
            <p>
              The second track is the abandoned vehicle process. This applies when a vehicle shows signs of being left permanently - no registration, flat tires, broken windows, sitting in the same spot for an extended period. Arizona's abandoned vehicle statutes (found in Title 28, Chapter 9) require a formal observation period, a search for the registered owner and any lienholders, required notices, and specific documentation before the vehicle can be processed for title transfer or disposal.
            </p>
            <p>
              Most property managers deal primarily with the first track. The abandoned vehicle process becomes relevant when a removal occurs and the vehicle is never claimed, or when a vehicle is so deteriorated that it clearly cannot be driven away.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              What Forms Are Involved and Who Files Them
            </h2>
            <p>
              The Arizona Department of Transportation (ADOT) and the Motor Vehicle Division (MVD) administer the forms used in abandoned vehicle processing. The key document is the abandoned vehicle report, which initiates a title search and notifies the registered owner and any lienholder of record.
            </p>
            <p>
              In Arizona, it is the <strong>licensed towing operator</strong> - not the property manager - who is legally responsible for submitting the abandoned vehicle notification to law enforcement and for initiating the ADOT title-search process once a vehicle has been in storage for the required period. Your role as property manager is narrower but critical:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Provide accurate vehicle information:</strong> license plate number, make, model, color, and the date the vehicle first appeared on the property.
              </li>
              <li>
                <strong>Document the observation period:</strong> dated photographs taken at regular intervals showing the vehicle has not moved and continues to exhibit signs of abandonment.
              </li>
              <li>
                <strong>Sign the towing authorization:</strong> a written statement confirming you are the property owner or authorized agent and that you authorize removal.
              </li>
              <li>
                <strong>Retain copies:</strong> keep copies of all documentation, including any forms your towing partner gives you, for a minimum of three years.
              </li>
            </ul>

            {/* Callout box */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-primary bg-blue-50/50 my-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                What Axle Towing Handles on Your Behalf
              </h3>
              <ul className="space-y-2 text-body-text">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">+</span>
                  Law-enforcement notification at time of removal (required within 30 minutes under Arizona rules)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">+</span>
                  ADOT/MVD title-search request once the vehicle enters the abandonment processing window
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">+</span>
                  Certified mail notice to the registered owner and any lienholder of record
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">+</span>
                  Storage-log documentation (required for chain-of-custody purposes)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">+</span>
                  Final disposition paperwork (sale, crusher, or title transfer) once the claim period expires
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                We provide you with copies of all filed documents. We recommend filing these alongside your towing authorization records.
              </p>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              The Timeline: What to Expect After a Vehicle Is Removed
            </h2>
            <p>
              Once a vehicle is towed from your property, the clock starts running on several parallel processes. Here is the general sequence for an abandoned vehicle case (timeline is approximate - verify with your towing partner and attorney):
            </p>

            <div className="space-y-4 mt-4">
              {[
                {
                  step: "Day 1 - Removal and law-enforcement notification",
                  detail:
                    "The vehicle is impounded and the towing operator notifies local law enforcement within 30 minutes of the tow. A report number is assigned. You should receive a copy of the notification.",
                },
                {
                  step: "Days 1-5 - Title search initiated",
                  detail:
                    "The towing operator submits a request to ADOT/MVD to identify the registered owner and any lienholders. Response times vary.",
                },
                {
                  step: "Days 5-15 - Certified notice sent",
                  detail:
                    "Once the owner and lienholder information is returned, certified mail notices go out. Arizona requires this notice to inform the owner where the vehicle is being held and how to claim it.",
                },
                {
                  step: "Days 15-45 - Claim period",
                  detail:
                    "The owner and any lienholder have a defined period to claim the vehicle or respond to the notice. If no one claims it, the towing operator may proceed with disposal or title transfer.",
                },
                {
                  step: "Day 45+ - Final disposition",
                  detail:
                    "The vehicle may be sold at auction, transferred for salvage, or titled to the towing operator depending on its condition and value relative to accumulated storage and towing charges.",
                },
              ].map((item) => (
                <div key={item.step} className="glass-card-white rounded-xl p-5 border border-blue-100">
                  <div className="font-heading font-semibold text-gray-900 mb-1">{item.step}</div>
                  <div className="text-body-text text-base">{item.detail}</div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              What Property Managers Must Keep on File
            </h2>
            <p>
              Even though your towing partner handles most of the statutory filings, your records matter - especially if a dispute arises months later. Maintain a physical or digital folder for each abandoned vehicle case containing:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Dated photographs documenting the observation period (at minimum Day 1, middle, and final day)</li>
              <li>Your signed towing authorization form</li>
              <li>A copy of the towing company's law-enforcement notification</li>
              <li>Copies of any certified mail receipts or return receipts</li>
              <li>The storage facility's address and contact information</li>
              <li>Any written complaints or inquiries from the vehicle owner or a third party</li>
              <li>Final disposition documentation (auction receipt, salvage title, or release form)</li>
            </ul>
            <p className="mt-4">
              Three years is a reasonable minimum retention period, but some property management agreements or insurance policies specify longer. Check your management agreement and your property's insurance policy for specific requirements.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              How to Identify an Abandoned Vehicle vs. a Standard Violation
            </h2>
            <p>
              Not every long-standing vehicle is legally "abandoned" under Arizona statute. Signs that likely push a vehicle into abandoned territory include: expired registration more than 90 days old, flat or missing tires that prevent movement, missing plates on both front and rear, broken or missing windows, significant body damage consistent with an inoperable vehicle, and no observed movement over an extended observation period.
            </p>
            <p>
              A vehicle with a valid registration sticker, all four tires inflated, and no obvious damage is more likely a standard parking violation - even if it has been sitting in the same spot for weeks. In that case, the standard impound process under ARS 28-3511 applies, which is faster and involves less paperwork.
            </p>
            <p>
              When in doubt, call Axle Towing before initiating any documentation. We can help you determine which process applies to the specific vehicle, which protects you from following the wrong procedure.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Partner With a Towing Company That Handles the Paperwork
            </h2>
            <p>
              The most common mistake property managers make with abandoned vehicles is either acting too quickly (before the observation period is complete) or too slowly (letting a vehicle sit for months without starting the formal process). A licensed towing partner who specializes in private-property work will keep the process moving, file on time, and give you copies of everything so you are protected.
            </p>
            <p>
              Axle Towing manages{" "}
              <Link href="/services/abandoned-vehicle-removal" className="text-primary underline hover:text-primary/80">
                abandoned vehicle removals
              </Link>{" "}
              across the Phoenix metro, including the documentation requirements at every stage. Our team works directly with property managers, HOA boards, and commercial property owners to ensure every removal is defensible from Day 1.
            </p>
            <p>
              For a broader overview of running a private-property towing program, see our{" "}
              <Link href="/resources/property-manager-guide" className="text-primary underline hover:text-primary/80">
                Property Manager's Guide to Arizona Towing Laws
              </Link>
              {" "}or our article on{" "}
              <Link href="/resources/how-to-start-private-property-towing-program" className="text-primary underline hover:text-primary/80">
                how to start a private property towing program
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
