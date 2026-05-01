import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "phoenix";
const CITY_NAME = "Phoenix";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Phoenix, AZ — Free for Property Managers, HOAs & Apartments | Axle Towing",
  description:
    "Free private property towing in Phoenix, AZ. 24/7 dispatch, <30 min response, ARS-compliant signage included. Serving 3,500+ HOAs, 5,000+ apartments, 15,000+ commercial properties at no cost to owners.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: `Private Property Towing in ${CITY_NAME}, AZ — Free Service for Property Owners`,
    description: `Free private property towing across all of ${CITY_NAME}. 24/7 dispatch from our Phoenix yard. ARS-compliant signage at no cost. Vehicle owner pays at retrieval — never the property.`,
    url: CANONICAL,
    type: "website",
  },
};

export default function Page() {
  return (
    <CityServicePage
      citySlug={CITY_SLUG}
      faqs={[
        {
          question:
            "How quickly can Axle Towing respond to a private property towing call in Phoenix?",
          answer:
            "Axle Towing dispatches from our 320 E. Pioneer St. yard and reaches most Phoenix properties in under 30 minutes — often sooner for properties in Ahwatukee, South Phoenix, Camelback East, and Downtown Phoenix. We dispatch 24/7/365 to all 38+ Phoenix ZIP codes (85001–85054).",
        },
        {
          question:
            "What does private property towing cost a Phoenix property manager?",
          answer:
            "Nothing. Private property towing in Phoenix is completely free for property managers, HOAs, and commercial property owners. Vehicle owners pay the recovery and storage fee at retrieval — never the property. There are no contract minimums, no monthly fees, and no per-tow charges. Signage installation is also free.",
        },
        {
          question:
            "Does Axle Towing serve Ahwatukee, Desert Ridge, Arcadia, and Downtown Phoenix?",
          answer:
            "Yes. We serve every Phoenix neighborhood — Ahwatukee, Arcadia, Desert Ridge, Downtown Phoenix, North Phoenix, Laveen, Maryvale, South Mountain, Encanto, Camelback East, Deer Valley, Paradise Valley Village, Midtown, and South Phoenix. Same response time, same enforcement standard, every ZIP code from 85001 to 85054.",
        },
        {
          question:
            "What signs are required to legally tow vehicles from a Phoenix parking lot?",
          answer:
            "Phoenix follows ARS 9-499.05 and Phoenix City Code Chapter 36. Tow-away signs must be at least 18×24 inches, posted at every entrance, and include the towing company's name, phone number, and impound yard address. Phoenix also requires a written authorization on file with the towing company. Axle Towing installs all required signage at no cost as part of property onboarding.",
        },
        {
          question:
            "How does a Phoenix apartment complex or HOA set up service with Axle Towing?",
          answer:
            "Most Phoenix properties are live in 7–14 days. We start with a no-cost site walk where one of our managers audits your existing signage and identifies enforcement hot-spots. You sign a brief written authorization. We install ARS-compliant signage at every entrance. Service goes live the same day signage is up. Call 480-288-5526 or use the contact form to start.",
        },
        {
          question:
            "Can Axle Towing handle abandoned vehicles, fire-lane violations, and HOA enforcement on Phoenix properties?",
          answer:
            "Yes. We handle every category of private property enforcement in Phoenix — abandoned vehicles, fire-lane violations, expired registration, reserved-spot violations, handicap-zone enforcement, HOA CC&R violations, and event-day patrols. Each Phoenix property gets a written enforcement plan tailored to its rules, and our drivers verify each tow against that plan before hooking up.",
        },
        {
          question:
            "Why do Phoenix property managers choose Axle Towing for private property towing?",
          answer:
            "Three reasons. First, it is free — no contract fees, no monthly minimums. Second, response times are sub-30 minutes from our 320 E. Pioneer St. yard, which is centrally located between I-10 and I-17. Third, we work the way property managers expect — written enforcement plans, photo documentation of every tow, 24/7 dispatch, and bilingual support across Phoenix's diverse neighborhoods.",
        },
      ]}
      extraBodyParagraphs={[
        "Phoenix's scale matters: 5,000+ apartment units, 3,500+ HOA communities, and 15,000+ commercial properties across 38+ ZIP codes and 14 distinct neighborhoods. We dispatch from one Phoenix yard at 320 E. Pioneer St. — south of the I-10/I-17 interchange — so response times stay under 30 minutes whether the call is from Desert Ridge, Camelback East, or South Mountain. Property managers running portfolios across multiple Phoenix neighborhoods get one point of contact, one response standard, one set of paperwork.",
      ]}
    />
  );
}
