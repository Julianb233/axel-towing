import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "surprise";
const CITY_NAME = "Surprise";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Surprise, AZ — Free for Property Managers, HOAs & Apartments",
  description:
    "Free private property towing in Surprise, AZ. <30 min response, 24/7 dispatch, ARS-compliant signage included. 500+ HOAs including Marley Park, Surprise Farms, Asante. 1,400+ apartment units served at no cost.",
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
          question: "How fast can Axle Towing respond to a Surprise property?",
          answer: "Sub-30-minute response from our Phoenix yard at 320 E. Pioneer St. for central Surprise via Bell Road and Loop 101. Far-western Loop 303 properties take 35–45 minutes due to distance. We cover Surprise ZIPs 85335, 85374, 85378, 85379, 85387, 85388 and dispatch 24/7/365.",
        },
        {
          question: "What does private property towing cost a Surprise property manager?",
          answer: "Nothing. Private property towing in Surprise is completely free for property managers, HOAs, and commercial property owners. Vehicle owners pay the recovery fee at retrieval. Signage installation is free.",
        },
        {
          question: "Does Axle Towing serve Marley Park, Surprise Farms, Asante, and Sierra Montana HOAs?",
          answer: "Yes. We serve every Surprise HOA, including Marley Park HOA, Surprise Farms HOA, Asante Community Association, Sierra Montana HOA, and Greer Ranch HOA. Each master-planned community gets enforcement aligned with its CC&Rs.",
        },
        {
          question: "Can Axle Towing handle spring training overflow at Surprise Stadium?",
          answer: "Yes. Surprise Stadium hosts the Texas Rangers and Kansas City Royals for spring training in February and March, creating major overflow at apartments and commercial properties around Bell Road. We staff up patrol density on game days.",
        },
        {
          question: "What signs are required at a Surprise private property?",
          answer: "Surprise City Code Chapter 86 follows ARS 9-499.05. Master-planned community framework means HOA-driven enforcement programs are common — written CC&R authorization and board-approved rules are required before towing can begin in residential developments. Axle Towing installs all required signage at no cost.",
        },
        {
          question: "How does a Surprise apartment or HOA set up service with Axle Towing?",
          answer: "Setup takes 7–14 days. Free site walk, written authorization, signage installation, then live. Call 480-288-5526 or use the contact form.",
        },
        {
          question: "Does Axle Towing serve commercial properties at Prasada and the Bell Road retail corridor?",
          answer: "Yes. We work with Surprise Marketplace, Prasada (Loop 303), Surprise Towne Center, and the Bell Road retail corridor. Loop 303 commercial corridor expansion is constant — new properties get fast onboarding so enforcement is in place from day one.",
        },
      ]}
      extraBodyParagraphs={[
        "Surprise has more than tripled in population since 2000 — past 150,000 residents — and continues to expand westward along Loop 303. The city's master-planned community framework means parking enforcement is HOA-led for most residential properties: Marley Park, Surprise Farms, Asante, Sierra Montana, Greer Ranch all operate under detailed CC&R documents. Spring training at Surprise Stadium (Texas Rangers + Kansas City Royals) and the Bell Road retail corridor add seasonal commercial pressure. Our Phoenix yard reaches all of Surprise via Loop 101 and Bell Road in 30–45 minutes.",
      ]}
    />
  );
}
