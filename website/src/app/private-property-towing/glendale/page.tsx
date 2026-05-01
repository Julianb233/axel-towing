import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "glendale";
const CITY_NAME = "Glendale";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Glendale, AZ — Free for Property Managers, HOAs & Apartments",
  description:
    "Free private property towing in Glendale, AZ. <30 min response, 24/7 dispatch, ARS-compliant signage included. Specialized event-night enforcement near State Farm Stadium. 700+ HOAs, 1,600+ apartment units served at no cost.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: `Private Property Towing in ${CITY_NAME}, AZ — Free Service for Property Owners`,
    description: `Free private property towing across all of ${CITY_NAME}. 24/7 dispatch, ARS-compliant signage at no cost. Vehicle owner pays at retrieval — never the property.`,
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
          question: "How fast can Axle Towing respond to a Glendale property?",
          answer: "Sub-30-minute response from our Phoenix yard at 320 E. Pioneer St. The Westgate area routes via Loop 101 south to I-10 east (~30 minutes); Arrowhead Ranch and far-north Glendale add 5–10 minutes. We dispatch 24/7/365 to all Glendale ZIPs (85301–85318).",
        },
        {
          question: "What does private property towing cost a Glendale property manager?",
          answer: "Nothing. Private property towing in Glendale is completely free for property managers, HOAs, and commercial property owners. Vehicle owners pay the recovery fee at retrieval.",
        },
        {
          question: "Can Axle Towing handle Cardinals game-day parking overflow at properties near State Farm Stadium?",
          answer: "Yes. NFL Sundays bring 63,000+ fans to State Farm Stadium for every home game. Properties within a mile of the stadium see massive overflow, and Glendale City Code allows expedited towing within that radius during scheduled events. We staff up patrol density on game days and event nights at Desert Diamond Arena.",
        },
        {
          question: "What signs are required at a Glendale private property?",
          answer: "Glendale City Code Chapter 20 follows ARS 9-499.05 — signs at every entrance with the towing company name, phone, and impound address. Glendale additionally requires towing companies to carry a city-issued business license. Axle Towing installs all required signage at no cost.",
        },
        {
          question: "Does Axle Towing serve Arrowhead Ranch, Bellair, and Thunderbird Paseo HOAs?",
          answer: "Yes. We serve every Glendale HOA, including Arrowhead Ranch HOA, Thunderbird Paseo HOA, Bellair HOA, Glen Lakes HOA, and the North Glendale Homeowners Association. Each community gets an enforcement plan tailored to its CC&Rs.",
        },
        {
          question: "How does a Glendale apartment or HOA set up service with Axle Towing?",
          answer: "Setup takes 7–14 days. Free site walk, written authorization, signage installation, then live. Call 480-288-5526 or use the contact form.",
        },
        {
          question: "Does Axle Towing serve Westgate, Tanger Outlets, and Arrowhead Towne Center?",
          answer: "Yes. We work with the Westgate Entertainment District, Tanger Outlets, Arrowhead Towne Center, Park West, and the Bell Road commercial corridor. Each property gets specialized coverage for event nights, holiday shopping, and year-round enforcement.",
        },
      ]}
      extraBodyParagraphs={[
        "Glendale's parking enforcement story is event-driven. NFL football at State Farm Stadium pulls 63,000+ fans for every Cardinals home game (September through January). Concerts and sporting events at Desert Diamond Arena hit similar numbers. The Westgate Entertainment District runs hot year-round with dining, retail, and event traffic. Properties within a mile of either stadium see overflow on event nights that can shut down a parking lot in 30 minutes if there's no enforcement. Our Phoenix yard handles Glendale via Loop 101 and I-10 in under 30 minutes — but our event-day patrol density goes up dramatically around stadium nights.",
      ]}
    />
  );
}
