import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "peoria";
const CITY_NAME = "Peoria";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Peoria, AZ — Free for Property Managers, HOAs & Apartments",
  description:
    "Free private property towing in Peoria, AZ. <30 min response from our Phoenix yard, 24/7 dispatch, ARS-compliant signage included. 600+ HOAs, 1,800+ apartment units, 3,200+ commercial properties served at no cost.",
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
          question: "How fast can Axle Towing respond to a Peoria property?",
          answer: "Sub-30-minute response from our Phoenix yard at 320 E. Pioneer St. via Loop 101. South Peoria and the P83 District reach fastest (~25–30 minutes); Vistancia and the far northwest add 5–10 minutes. We cover Peoria ZIPs 85345, 85381, 85382, 85383, 85385.",
        },
        {
          question: "What does private property towing cost a Peoria property manager?",
          answer: "Nothing. Private property towing in Peoria is completely free for property managers, HOAs, and commercial property owners. Vehicle owners pay the recovery fee at retrieval. Signage installation is free.",
        },
        {
          question: "Does Axle Towing serve Vistancia, Westwing Mountain, Fletcher Heights, and Terramar HOAs?",
          answer: "Yes. We serve every Peoria HOA, including Vistancia Community Association, Westwing Mountain HOA, Fletcher Heights HOA, Terramar HOA, and Sunrise Mountain HOA. Each master-planned community gets enforcement aligned with its CC&Rs.",
        },
        {
          question: "Can Axle Towing handle spring training overflow at Peoria Sports Complex?",
          answer: "Yes. The Peoria Sports Complex hosts the San Diego Padres and Seattle Mariners through February and March, creating parking demand at apartments and commercial properties along Bell Road and Loop 101. We staff up patrol density on game days.",
        },
        {
          question: "What signs are required at a Peoria private property?",
          answer: "Peoria City Code Chapter 20 follows ARS 9-499.05 with an additional notice requirement for HOA-initiated programs at newly contracted properties. Vistancia and other master-planned communities operate under detailed CC&R documents that govern guest parking and trailer storage. Axle Towing installs all required signage at no cost.",
        },
        {
          question: "How does a Peoria apartment or HOA set up service with Axle Towing?",
          answer: "Setup takes 7–14 days. Free site walk, written authorization, signage installation, then live. Call 480-288-5526 or use the contact form.",
        },
        {
          question: "Does Axle Towing serve P83 Entertainment District commercial properties?",
          answer: "Yes. The P83 Entertainment District is a major dining and nightlife corridor for the Northwest Valley, with year-round overflow into adjacent private lots. We cover P83, Park West, Peoria Crossings Plaza, Bell Road retail, and the Lake Pleasant Towne Center.",
        },
      ]}
      extraBodyParagraphs={[
        "Peoria's near-190,000-resident footprint is tilted heavily toward master-planned communities like Vistancia, plus the Bell Road retail corridor and the P83 Entertainment District. Spring training at Peoria Sports Complex (San Diego Padres + Seattle Mariners) creates February-through-March parking pressure that hits apartments and commercial properties along Bell Road and the Loop 101 hard. Lake Pleasant Regional Park draws 1M+ visitors annually with summer-weekend overflow on the Lake Pleasant Parkway corridor. Our Phoenix yard reaches all of Peoria via Loop 101 in 25–40 minutes.",
      ]}
    />
  );
}
