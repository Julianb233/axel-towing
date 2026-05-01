import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "goodyear";
const CITY_NAME = "Goodyear";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Goodyear, AZ — Free for Property Managers, HOAs & Apartments",
  description:
    "Free private property towing in Goodyear, AZ. <30 min response from our Phoenix yard, 24/7 dispatch, ARS-compliant signage included. Estrella, PebbleCreek, Palm Valley HOAs covered. 1,200+ apartment units served at no cost.",
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
          question: "How fast can Axle Towing respond to a Goodyear property?",
          answer: "Sub-30-minute response from our Phoenix yard at 320 E. Pioneer St. via I-10. Central Goodyear and the Goodyear Ballpark District reach fastest (~25–30 minutes); PebbleCreek and the far western communities add 5–10 minutes. We cover Goodyear ZIPs 85338 and 85395.",
        },
        {
          question: "What does private property towing cost a Goodyear property manager?",
          answer: "Nothing. Private property towing in Goodyear is completely free for property managers, HOAs, and commercial property owners. Vehicle owners pay the recovery fee at retrieval. Signage installation is also free.",
        },
        {
          question: "Does Axle Towing serve Estrella, PebbleCreek, Palm Valley, and Canyon Trails HOAs?",
          answer: "Yes. We serve every Goodyear HOA, including Estrella Mountain Ranch Community Association, PebbleCreek HOA, Palm Valley HOA, Canyon Trails HOA, and Centerra HOA. Each master-planned community gets enforcement aligned with its CC&Rs.",
        },
        {
          question: "Can Axle Towing handle spring training overflow at Goodyear Ballpark?",
          answer: "Yes. Goodyear Ballpark hosts the Cleveland Guardians and Cincinnati Reds for spring training in February and March, creating event-day parking demand at adjacent properties. We add patrol density on game days.",
        },
        {
          question: "What signs are required at a Goodyear private property?",
          answer: "Goodyear City Code Chapter 7 follows ARS 9-499.05. Master-planned community model means most HOA-led enforcement programs are governed by detailed CC&R documents — board-approved authorization and resident notice are standard. Axle Towing installs all required signage at no cost.",
        },
        {
          question: "Does Axle Towing serve the Loop 303 industrial corridor (Amazon, Macy's, REI)?",
          answer: "Yes. The Loop 303 industrial corridor is one of the fastest-growing commercial areas in the West Valley, with major fulfillment and distribution centers from Amazon, Macy's Logistics, REI Distribution, and Sub-Zero. We handle parking enforcement for industrial properties, retail centers, and office parks across the corridor.",
        },
        {
          question: "How does a Goodyear apartment or HOA set up service with Axle Towing?",
          answer: "Setup takes 7–14 days. Free site walk, written authorization, signage installation, then live. Call 480-288-5526 or use the contact form.",
        },
      ]}
      extraBodyParagraphs={[
        "Goodyear runs on master-planned communities. Estrella Mountain Ranch is consistently ranked among the nation's top master-planned communities, PebbleCreek is a premier 55+ active adult community, and Palm Valley + Canyon Trails round out the residential side. The Loop 303 industrial corridor — Amazon, Macy's Logistics, REI Distribution, Sub-Zero — drives massive commercial parking demand year-round. Add spring training at Goodyear Ballpark (Cleveland Guardians + Cincinnati Reds), and you've got a city where enforcement quality matters across every property type. Our Phoenix yard reaches all of Goodyear via I-10 in 25–40 minutes.",
      ]}
    />
  );
}
