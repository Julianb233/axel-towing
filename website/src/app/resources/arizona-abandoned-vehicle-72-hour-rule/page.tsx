import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Image from "next/image";

const HERO_IMAGE = "/images/seo/arizona-abandoned-vehicle-72-hour-rule.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck at a Phoenix area parking lot evaluating an abandoned vehicle - Axle Towing 72-hour rule";
const PAGE_TITLE = "Arizona's 72-Hour Rule for Abandoned Vehicles on Private Property: What Property Managers Need to Know";
const PAGE_DESCRIPTION =
  "Plain-language explanation of Arizona's 72-hour observation window on private property: what counts as abandonment, what notice is required, and how the clock actually starts.";
const CANONICAL = "https://axletowing.com/resources/arizona-abandoned-vehicle-72-hour-rule";
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
    question: "Does the 72-hour clock start the moment I first see the vehicle?",
    answer:
      "Not necessarily. The observation period starts when you first document the vehicle in the location where it will be considered abandoned - typically with a dated photograph. Undocumented sightings do not restart or extend the clock in any meaningful legal sense. Consistent documentation from Day 1 is essential.",
  },
  {
    question: "What if the vehicle owner moves the car just a few feet and then parks it again?",
    answer:
      "Movement that is clearly intended to reset the observation period - for example, moving a vehicle six inches overnight and returning it - is often treated with skepticism. Courts look at the totality of circumstances. However, genuine movement that takes the vehicle off the property and returns it may legally restart the clock. Document everything and consult your attorney if this becomes a pattern.",
  },
  {
    question: "Can I tow a vehicle immediately if it blocks a fire lane, even without the 72-hour wait?",
    answer:
      "Yes. The 72-hour observation period applies to the abandoned vehicle track. A vehicle blocking a fire lane, ADA space, or actively creating a safety hazard may be removed immediately under the private-property impound authority of ARS 28-3511 with proper posted signage. These are different legal processes.",
  },
  {
    question: "Do I need to post a physical notice on the vehicle before towing?",
    answer:
      "Arizona's abandoned vehicle statutes require notice to the owner and any lienholder - but that notice is typically sent after the vehicle is removed and a title search is completed. Physical on-vehicle notice (like a sticker or warning) is not always legally required before towing, but many property managers use it as a courtesy step and as additional documentation that the owner had an opportunity to claim the vehicle.",
  },
  {
    question: "What qualifies as an 'observable sign of abandonment' in Arizona?",
    answer:
      "Arizona statute does not list an exhaustive definition, but commonly recognized signs include: expired registration tags (often 90 or more days expired), flat or missing tires, missing license plates on one or both ends, broken or missing windows, significant body damage consistent with being inoperable, accumulated debris or damage suggesting the vehicle has not been attended to, and no movement observed over the full observation window.",
  },
  {
    question: "Is the 72-hour rule the same for HOA common areas and commercial parking lots?",
    answer:
      "The general abandoned vehicle framework under Title 28 applies broadly to private property in Arizona. However, the specific procedures - including observation period length, notice requirements, and the authority to remove - can differ based on whether the property is an HOA with CC&Rs, a commercial lot, or an apartment complex. A towing partner familiar with Arizona property management law will help you apply the right procedure to your situation.",
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
              { name: "Arizona 72-Hour Abandoned Vehicle Rule", url: CANONICAL },
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
              slug: "arizona-abandoned-vehicle-72-hour-rule",
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
            <span className="text-white">72-Hour Abandoned Vehicle Rule</span>
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
          <p className="text-gray-800 leading-relaxed">Arizona&apos;s 72-hour rule for abandoned vehicles means a vehicle that has not moved within 72 hours on private property may be classified as abandoned under state law. However, the clock does not start automatically — the property owner or manager must document the observation period with dated photos. After 72 hours, the property owner can request removal by a licensed towing company. The towing company must follow the abandoned vehicle lien process under ARS 28-4141, which includes ADOT notification and a waiting period before the vehicle can be disposed of. This process is separate from standard unauthorized-vehicle towing.</p>
        </div>
      </aside>

      {/* Body */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg space-y-10 text-body-text text-lg leading-relaxed">

          <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>A vehicle that has not moved for 72 hours on private property may qualify as abandoned under Arizona law.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>The 72-hour clock does not start automatically — property managers must document the observation period with dated photos.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>After 72 hours, a licensed towing company can remove the vehicle under the abandoned vehicle framework.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>The abandoned vehicle lien process under ARS 28-4141 requires ADOT notification and a waiting period before disposal.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Abandoned vehicle cases are separate from standard unauthorized-vehicle towing and follow a different statutory process.</span></li>
            </ul>
          </div>

            <p>
              The phrase "72-hour rule" gets tossed around in property management circles as if it were a simple countdown timer. In practice, Arizona's observation window for abandoned vehicles is more nuanced - and getting it wrong can expose your property to disputes, legal challenges, and delays. This guide explains how the clock actually works, what qualifies a vehicle as "abandoned" under Arizona law, and what notice steps must happen before and after removal.
            </p>

            <p className="text-sm text-gray-500 italic border-l-4 border-blue-200 pl-4">
              This page is for general informational purposes only and does not constitute legal advice. Arizona statutes are subject to change. Always verify current requirements at{" "}
              <a href="https://www.azleg.gov/arsDetail/" className="text-primary underline" target="_blank" rel="noopener noreferrer">azleg.gov</a>{" "}
              and consult a licensed attorney before taking action on any specific vehicle or situation.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Where the 72-Hour Rule Actually Comes From
            </h2>
            <p>
              Arizona's abandoned vehicle framework is rooted in Title 28 of the Arizona Revised Statutes, which covers transportation and motor vehicles. The general principle embedded in that framework is that a vehicle left on private property for 72 hours or more, showing observable signs of abandonment, may be treated as an abandoned vehicle subject to removal and a formal notice process.
            </p>
            <p>
              It is important to understand that this 72-hour threshold is the floor for the abandoned vehicle track - it is the minimum observation period before a vehicle can be characterized as abandoned. Some circumstances, some types of property, and some local ordinances may require a longer observation window. The 72-hour figure is a starting point, not the entire rule.
            </p>
            <p>
              Separately, ARS 28-3511 governs standard private-property impounds, which can happen immediately for active violations (no permit, wrong zone, fire lane) when proper signage is posted. The abandoned vehicle process is distinct from the standard impound process and typically involves more steps.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              What Counts as "Observable Signs of Abandonment"
            </h2>
            <p>
              Arizona's statute does not provide a neat checklist, which is why having a towing partner who knows the landscape matters. In practice, courts and enforcement officials look for a combination of factors that collectively indicate the vehicle's owner has given up control of it. These include:
            </p>

            {/* Callout box */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-amber-400 bg-amber-50/40 my-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                Common Signs Arizona Courts Recognize as Indicators of Abandonment
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Expired registration - typically 90+ days past",
                  "Flat, missing, or damaged tires rendering the vehicle immobile",
                  "Missing license plates on one or both ends",
                  "Broken, cracked, or missing windows",
                  "Visible interior damage or missing components",
                  "Accumulated weather damage, debris, or animal nesting",
                  "No observed movement over the entire observation period",
                  "Significant rust, rot, or structural damage",
                ].map((sign) => (
                  <div key={sign} className="flex items-start gap-2 text-body-text text-base">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">-</span>
                    <span>{sign}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                No single factor is usually sufficient on its own. The stronger and more numerous the signs, the more defensible the abandonment determination.
              </p>
            </div>

            <p>
              A vehicle with valid registration, all four tires inflated, and no visible damage is generally not an abandoned vehicle under Arizona law - even if it has occupied the same parking spot for weeks. That situation is better addressed as an unauthorized parking violation under your property's rules and ARS 28-3511.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              How the Observation Clock Actually Starts
            </h2>
            <p>
              This is where many property managers get tripped up. The 72-hour clock is not a vague mental note - it needs to be documented with precision. Here is how to start it correctly:
            </p>
            <ol className="list-decimal pl-6 space-y-4 mt-4">
              <li>
                <strong>Photograph the vehicle on Day 1.</strong> Date-stamp or time-stamp the photograph. Modern smartphones embed GPS metadata, which is an added layer of evidence. Capture the vehicle's position relative to a fixed landmark (parking space number, building entrance, sign post) so you can show it has not moved.
              </li>
              <li>
                <strong>Document the abandonment indicators visible that day.</strong> Flat tires, expired tags, missing plates - capture each one in a close-up photo. Write a brief note with the date, time, and your observations.
              </li>
              <li>
                <strong>Photograph again at 24 hours and 48 hours.</strong> This creates a timestamped record showing the vehicle did not move during the observation window. Each photograph should show the same position relative to the same landmark.
              </li>
              <li>
                <strong>At 72 hours, document final state and contact your towing partner.</strong> If the vehicle still meets the criteria for abandonment, you are positioned to proceed. Do not skip any day of the documentation series.
              </li>
            </ol>
            <p className="mt-4">
              The reason this documentation chain matters: if the vehicle owner disputes the removal months later and claims the vehicle was not abandoned, your timestamped photographic series is the evidence that demonstrates the statutory criteria were met. Without it, you are relying on memory against a paper record the owner may have created.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              What Notice Is Required and When
            </h2>
            <p>
              Arizona's abandoned vehicle framework builds in notice requirements designed to protect the vehicle owner's right to reclaim their property. The notice obligations generally fall into two stages:
            </p>
            <p>
              <strong>Pre-removal (sometimes called on-vehicle notice):</strong> Many property managers and towing companies affix a dated notice to the vehicle's windshield during the observation period. This is not always legally required before the observation window closes, but it creates a visible record that the vehicle was identified as potentially abandoned, and it gives the owner a chance to move it before a tow occurs. Some properties include this step in their parking enforcement SOPs.
            </p>
            <p>
              <strong>Post-removal (statutory owner notice):</strong> Once the vehicle is removed, Arizona statute requires the towing operator to notify local law enforcement within 30 minutes and to initiate a title search through ADOT/MVD. Once the registered owner and any lienholder are identified, certified mail notices must be sent informing them of the vehicle's location, the storage charges accruing, and the steps required to claim it.
            </p>
            <p>
              The property manager's role in the notice process is primarily to retain a copy of the towing company's post-removal filings and to respond promptly if the owner contacts you directly. Direct the owner to the towing operator and the impound yard - they control the vehicle and the release process, not the property.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Common Mistakes That Expose Properties to Liability
            </h2>
            <p>
              Over years of working with property managers across the Phoenix metro, the team at Axle Towing has seen the same mistakes repeat. Here are the most common:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                <strong>Towing before the observation period is complete.</strong> Even if a vehicle looks abandoned on Day 1, removing it before 72 hours without meeting the immediate-hazard exception creates legal exposure.
              </li>
              <li>
                <strong>Not documenting the observation period at all.</strong> "I know the car has been there for weeks" is not defensible evidence. Photographs with timestamps are.
              </li>
              <li>
                <strong>Using the abandoned vehicle process for standard violations.</strong> If a car is parked without a permit but otherwise operational, the immediate impound process under ARS 28-3511 is faster and legally cleaner.
              </li>
              <li>
                <strong>Mixing up the two processes mid-stream.</strong> Starting with an abandoned vehicle observation and then impounding the car as a standard violation (or vice versa) creates a murky paper trail. Pick the right track from the beginning.
              </li>
              <li>
                <strong>Failing to retain documentation.</strong> Vehicle owners sometimes file disputes years after the fact. Retain your photos, authorization forms, and copies of towing company filings for at least three years.
              </li>
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              How Axle Towing Makes the 72-Hour Process Manageable
            </h2>
            <p>
              Axle Towing provides{" "}
              <Link href="/services/abandoned-vehicle-removal" className="text-primary underline hover:text-primary/80">
                abandoned vehicle removal services
              </Link>{" "}
              for apartment complexes, HOA communities, and commercial properties across the Phoenix metro. When you call us about a potential abandoned vehicle, we can walk you through the observation checklist, advise on whether the vehicle qualifies under the abandoned vehicle track or the standard impound track, and coordinate the documentation and filing process once the observation window closes.
            </p>
            <p>
              For properties running regular{" "}
              <Link href="/services/parking-enforcement" className="text-primary underline hover:text-primary/80">
                parking enforcement programs
              </Link>
              , we integrate abandoned vehicle monitoring into the regular patrol cadence so issues are identified and documented from Day 1 - no scrambling at the end of a 72-hour window.
            </p>
            <p>
              Related resources: our{" "}
              <Link href="/resources/arizona-abandoned-vehicle-form-guide" className="text-primary underline hover:text-primary/80">
                guide to abandoned vehicle paperwork
              </Link>{" "}
              covers the specific forms and filing sequence in detail. The{" "}
              <Link href="/resources/parking-enforcement-checklist-for-property-managers" className="text-primary underline hover:text-primary/80">
                parking enforcement checklist
              </Link>{" "}
              includes a section on how to build abandoned vehicle monitoring into your weekly routine.
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
