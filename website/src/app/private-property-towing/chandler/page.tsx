import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "chandler";
const CITY_NAME = "Chandler";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Chandler, AZ — Free for Property Managers, HOAs & Apartments",
  description:
    "Free private property towing in Chandler, AZ. <30 min response from our Phoenix yard, 24/7 dispatch, ARS-compliant signage included. 900+ HOAs, 1,800+ apartment units, 5,000+ commercial properties served at no cost to owners.",
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
          question: "How fast can Axle Towing respond to a Chandler property?",
          answer: "Sub-30-minute response from our Phoenix yard at 320 E. Pioneer St. via I-10. North Chandler and downtown reach faster (~20 minutes); south Chandler (Chandler Heights) routes via Loop 202 (~25–30 minutes). We cover Chandler ZIPs 85224–85286 and dispatch 24/7/365.",
        },
        {
          question: "What does private property towing cost a Chandler property manager?",
          answer: "Nothing. Private property towing in Chandler is completely free for property managers, HOAs, and commercial property owners. Vehicle owners pay the recovery fee at retrieval. Signage and onboarding are also free.",
        },
        {
          question: "Does Axle Towing serve Ocotillo, Sun Groves, and Cooper Commons HOAs?",
          answer: "Yes. We serve every Chandler HOA, including Ocotillo Community Association, Sun Groves HOA, Cooper Commons HOA, Fulton Ranch HOA, and Circle G Homeowners Association. Each community gets an enforcement plan tailored to its CC&Rs.",
        },
        {
          question: "What signs are required at a Chandler private property?",
          answer: "Chandler City Code Chapter 47 follows ARS 9-499.05 plus an additional Chandler requirement that signs be illuminated or reflective for nighttime visibility. Property owners must maintain a current towing authorization on file, renewed annually. Axle Towing installs all required signage at no cost.",
        },
        {
          question: "Can Axle Towing handle parking enforcement at Chandler Fashion Center and the Price Corridor office parks?",
          answer: "Yes. We work with retail centers like Chandler Fashion Center and Chandler Pavilions, plus office parks across the Price Corridor (Intel, PayPal, Microchip). Holiday shopping season and tech-campus parking overflow get specialized patrol density.",
        },
        {
          question: "How does a Chandler apartment or HOA set up service with Axle Towing?",
          answer: "Setup takes 7–14 days. Free site walk, written authorization, signage installation, then live. Call 480-288-5526 or use the contact form.",
        },
        {
          question: "Does Axle Towing serve south Chandler (Chandler Heights, Carino Estates, Circle G)?",
          answer: "Yes. South Chandler and the Riggs Road corridor route via Loop 202 from our Phoenix yard. Drive time is 25–30 minutes; response stays under 30 minutes for the entire south Chandler footprint.",
        },
      ]}
      extraBodyParagraphs={[
        "Chandler's tech corridor — Intel's largest US manufacturing campus, PayPal's global operations center, Microchip Technology — drives consistent year-round parking demand at adjacent apartments, retail, and office parks. The Price Corridor alone holds 60,000+ workers. Add Chandler Fashion Center (the second-largest Phoenix-metro mall) and the Ocotillo master-planned community ($600K+ median home values), and you've got a city that runs on enforcement quality. Our Phoenix yard handles all of Chandler in under 30 minutes via I-10 and Loop 202.",
      ]}
    />
  );
}
