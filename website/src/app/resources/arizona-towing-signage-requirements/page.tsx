import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Image from "next/image";

const HERO_IMAGE = "/images/seo/arizona-towing-signage-requirements.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck parked beside ARS-compliant towing warning signs at an Arizona property - Axle Towing";
const PAGE_TITLE = "Arizona Towing Signage Requirements: ARS 28-3511 and ARS 9-499.05 Compliance Guide";
const PAGE_DESCRIPTION =
  "Exact dimensions, required language, placement rules, and visibility standards for private property towing signs in Arizona. Includes a printable compliance checklist.";
const CANONICAL = "https://axletowing.com/resources/arizona-towing-signage-requirements";
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
    question: "What is the minimum sign size required for Arizona private property towing?",
    answer:
      "Arizona's signage requirements specify minimum dimensions for towing authorization signs. As a general reference point, most compliant signs are at least 17 inches wide by 22 inches tall. However, exact requirements are tied to the location, zone type, and applicable statute. Always verify current specifications at azleg.gov and with your towing partner before ordering signs.",
  },
  {
    question: "Does every individual parking space need its own towing sign?",
    answer:
      "Not necessarily. Arizona law generally requires that towing signs be visible from every area where towing enforcement applies, but this does not always mean one sign per space. Entry-point signs covering an entire lot can be sufficient when properly placed and sized. Reserved spaces and specific prohibited zones often need their own signage. Your towing partner can advise on the minimum compliant sign plan for your property layout.",
  },
  {
    question: "Can I use a homemade or printed sign instead of a professionally manufactured one?",
    answer:
      "Technically, the law specifies content and size requirements rather than mandating professional fabrication. However, a homemade sign that fades, warps, or becomes illegible quickly - or that looks unofficial - can be challenged as inadequate notice. Professionally manufactured signs with durable materials and retroreflective surfaces are the standard practice for defensible enforcement.",
  },
  {
    question: "What phone number must appear on the sign?",
    answer:
      "Arizona's towing sign requirements specify that the sign must include the name and telephone number of the towing company authorized to remove vehicles from the property. This must be a number that is monitored 24/7 so that vehicle owners can call to locate their vehicle after a tow. The phone number must be legible from the approach distance to the sign.",
  },
  {
    question: "Do sign requirements differ for HOA communities versus commercial lots?",
    answer:
      "The base requirements under ARS 28-3511 and ARS 9-499.05 apply broadly, but some municipalities and HOA-governing documents may have additional or stricter requirements. Cities and towns in the Phoenix metro may have local ordinances that supplement state law. Always check your municipality's code in addition to state statute, and review your HOA CC&Rs for any sign-related provisions.",
  },
  {
    question: "How often should I check my towing signs for compliance?",
    answer:
      "At minimum, inspect signs quarterly for damage, fading, obstruction by vegetation or structures, and legibility. After any major storm, do a walk-through to confirm signs are still properly mounted and visible. Replace any sign that is faded, damaged, or partially obstructed. Keep a log of your inspection dates - this documentation protects you if a tow is challenged on signage grounds.",
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
              { name: "Arizona Towing Signage Requirements", url: CANONICAL },
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
              slug: "arizona-towing-signage-requirements",
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
            <span className="text-white">Signage Requirements</span>
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
          <p className="text-gray-800 leading-relaxed">Arizona towing signage requirements under ARS 9-499.05 specify minimum dimensions (typically 17 by 22 inches), required language (towing company name, 24-hour phone number, description of the restriction), placement height (visible to drivers), and posting location (every entrance to the parking area). Phoenix, Scottsdale, Tempe, and Chandler all have local ordinances that exceed the state minimum — properties in those cities must comply with the stricter local rule. Non-compliant signage is the leading reason tows are legally challenged in Arizona. Axle Towing provides free signage audits for all partner properties.</p>
        </div>
      </aside>

      {/* Body */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg space-y-10 text-body-text text-lg leading-relaxed">

          <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>ARS 9-499.05 sets the Arizona minimum for towing signage — multiple Phoenix-metro cities require larger or more detailed signs.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Every entrance to the parking area must have a compliant sign before towing is legally authorized — not just the main entrance.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Required sign language includes the towing company name, 24-hour phone, and a description of the restriction being enforced.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Non-compliant or faded signage is the most common reason vehicle owners successfully dispute a tow in Arizona.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Axle Towing provides free signage audit and consultation for all Phoenix-metro partner properties.</span></li>
            </ul>
          </div>

            <p>
              Your towing signs are the foundation of every private property tow you authorize. If a sign is missing, undersized, illegibly worded, or in the wrong location, an entire tow can be challenged - and you may be liable. Arizona sets specific requirements for private property towing signs under ARS 28-3511 and the municipal ordinance framework codified in ARS 9-499.05. This guide gives you the specifics and a visual checklist to verify compliance on your property.
            </p>

            <p className="text-sm text-gray-500 italic border-l-4 border-blue-200 pl-4">
              This page is for general informational purposes only and does not constitute legal advice. Sign requirements are derived from ARS 28-3511 and ARS 9-499.05, which are subject to amendment by the Arizona Legislature and supplementation by local municipal ordinance. Always verify current requirements at{" "}
              <a href="https://www.azleg.gov/arsDetail/" className="text-primary underline" target="_blank" rel="noopener noreferrer">azleg.gov</a>{" "}
              and with your municipality before ordering or installing signs.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Why Arizona Towing Signage Law Exists
            </h2>
            <p>
              Arizona's towing signage requirements are fundamentally a notice law. Before a vehicle can be towed from private property, the vehicle owner must have had an opportunity to see that their vehicle was subject to removal. Proper signage is how Arizona law creates that constructive notice.
            </p>
            <p>
              When a tow is challenged in court or in a consumer protection complaint, one of the first things examined is whether the signs were compliant. A sign that was present but not visible from the approach angle, or that was the right size but missing required language, can be found deficient - and a deficient sign can void the tow. This is why sign compliance is not an administrative formality. It is the legal underpinning of your entire enforcement program.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Required Sign Content: What the Language Must Say
            </h2>
            <p>
              Arizona statute requires that private property towing signs include specific information. The required elements are:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                <strong>Name of the towing company</strong> authorized to remove vehicles from the property. This must be the company that will actually perform the tow - not a generic "violators will be towed" statement.
              </li>
              <li>
                <strong>Telephone number</strong> of the towing company that vehicle owners can call 24 hours a day to locate their vehicle. This must be an active, monitored line - not an office number that goes unanswered after business hours.
              </li>
              <li>
                <strong>Hours of enforcement</strong> during which towing may occur. If you intend to enforce 24 hours a day, seven days a week, the sign must say so explicitly. "24 hours" or "24/7" language is required if you want around-the-clock enforcement authority.
              </li>
              <li>
                <strong>Notice that violators will be towed at the vehicle owner's expense.</strong> The specific language varies, but the substance - that unauthorized vehicles will be removed and the owner bears the cost - must be clear.
              </li>
              <li>
                <strong>Any permit requirement</strong> relevant to the zone. If parking in the area requires a permit, the sign should reference the permit requirement so a driver knows their vehicle is at risk.
              </li>
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Size and Visibility Requirements
            </h2>
            <p>
              Arizona's sign requirements specify minimum dimensions. While exact measurements are set by statute (which you should verify at azleg.gov), the general standard is that signs must be large enough to be legible from the approach distance to the parking area - typically from a vehicle approaching the lot or zone at normal driving speed.
            </p>
            <p>
              Retroreflective materials are the industry standard for nighttime visibility. A sign that is readable during the day but invisible at night does not provide adequate notice for tows that occur after dark. If you conduct any nighttime enforcement, retroreflective signage is effectively required even if not explicitly mandated in every context.
            </p>
            <p>
              Font size must be large enough to read from the approach distance. The towing company name and phone number in particular must be legible - a driver who cannot read the phone number from their vehicle has arguably not received adequate notice.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Placement Rules: Where Signs Must Go
            </h2>
            <p>
              Placement is where most sign compliance failures occur. Arizona law requires that signs be placed so that they are visible to any vehicle entering the area subject to towing enforcement. In practice, this means:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                <strong>Entry points:</strong> At least one sign must be visible from each public street entrance to the parking area. A driver pulling into the lot should see a towing sign before or immediately upon entering.
              </li>
              <li>
                <strong>Specific zones:</strong> Fire lanes, ADA spaces, reserved spaces, and other specifically restricted areas must have their own signage at or adjacent to the zone. An entry-point sign covering the entire lot does not substitute for zone-specific signs.
              </li>
              <li>
                <strong>Height:</strong> Signs should be mounted at eye level for a person standing next to the sign and visible from a vehicle - typically between four and seven feet from the ground. Signs mounted too high or too low may be found inadequate.
              </li>
              <li>
                <strong>Unobstructed visibility:</strong> Signs must not be blocked by vegetation, other signs, structures, or parked vehicles. If a tree branch grows in front of a sign, the sign's notice value is compromised. Trim vegetation regularly and check for new obstructions after any landscaping or construction.
              </li>
            </ul>

            {/* Compliance checklist callout */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-primary bg-blue-50/50 my-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                Sign Compliance Visual Checklist
              </h3>
              <p className="text-body-text text-base mb-4">
                Use this checklist when inspecting existing signs or approving new sign installations. Check every sign on every entrance and enforcement zone.
              </p>
              <div className="space-y-3">
                {[
                  { category: "CONTENT", items: [
                    "Towing company name is printed on the sign",
                    "24/7 dispatch phone number is printed and legible",
                    "Enforcement hours are specified (or '24 Hours' if continuous)",
                    "Statement that violators will be towed at owner's expense is present",
                    "Permit requirement is referenced if applicable to the zone",
                  ]},
                  { category: "SIZE AND MATERIAL", items: [
                    "Sign dimensions meet or exceed minimum statutory requirements",
                    "Font size is legible from approach distance (approx. 25-30 feet)",
                    "Retroreflective or lighted material used for nighttime visibility",
                    "Sign surface is clean, undamaged, and not faded",
                  ]},
                  { category: "PLACEMENT", items: [
                    "Sign is visible from every vehicle entrance to the lot",
                    "Each specific enforcement zone (fire lane, ADA, reserved) has its own sign",
                    "Sign height is 4-7 feet from ground",
                    "No vegetation, structures, or other signs block visibility",
                    "Sign is securely mounted and not tilting or rotated",
                  ]},
                  { category: "DOCUMENTATION", items: [
                    "Photo of each installed sign taken and dated",
                    "Sign installation date recorded",
                    "Last inspection date recorded",
                    "Any replacement dates documented",
                  ]},
                ].map((section) => (
                  <div key={section.category}>
                    <div className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wide mb-2 mt-4">
                      {section.category}
                    </div>
                    <div className="space-y-1">
                      {section.items.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-body-text text-base">
                          <span className="w-4 h-4 border border-gray-400 rounded flex-shrink-0 mt-0.5 inline-block" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              ARS 9-499.05: How Municipality Rules Layer On Top
            </h2>
            <p>
              ARS 9-499.05 is the Arizona statute that governs how cities and towns may regulate towing services and sign requirements. It sets a framework for local regulation while establishing certain baseline protections. What this means for you: individual cities in the Phoenix metro - Phoenix, Tempe, Scottsdale, Mesa, Chandler, Gilbert, Glendale, and others - may have their own towing signage ordinances that are stricter than the state baseline.
            </p>
            <p>
              Before installing signs at a property, check the municipal code for the city where your property is located. Your towing partner should be familiar with the requirements for the cities where they operate, but do not assume - confirm in writing that the sign plan they recommend meets both state and local requirements for your specific municipality.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              How Axle Towing Helps You Stay Compliant
            </h2>
            <p>
              When Axle Towing starts a{" "}
              <Link href="/services/parking-enforcement" className="text-primary underline hover:text-primary/80">
                parking enforcement program
              </Link>{" "}
              at a new property, we conduct a signage audit as part of the onboarding process. We identify any existing signs that are noncompliant, recommend a minimum-compliant sign plan for the property layout, and can coordinate sign installation so that enforcement begins on a solid legal footing.
            </p>
            <p>
              We provide signs that meet Arizona's requirements and include our company name and 24/7 dispatch number - meaning every tow performed under those signs is backed by visible, statutory-grade authorization. We also conduct periodic sign checks during patrol visits and notify you if a sign needs replacement.
            </p>
            <p>
              For a broader view of launching a towing program, see our{" "}
              <Link href="/resources/how-to-start-private-property-towing-program" className="text-primary underline hover:text-primary/80">
                private property towing program runbook
              </Link>
              . For HOA-specific signage questions, our{" "}
              <Link href="/audiences/hoa" className="text-primary underline hover:text-primary/80">
                HOA towing services page
              </Link>{" "}
              covers common association scenarios.
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
            Free signage audit and consultation for property managers, HOA boards, and commercial owners across the Phoenix metro. 24/7 dispatch available.
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
