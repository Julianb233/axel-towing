import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "avondale";
const CITY_NAME = "Avondale";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Avondale, AZ — Free for Property Managers, HOAs & Apartments",
  description:
    "Free private property towing in Avondale, AZ. <30 min response from our Phoenix yard, 24/7 dispatch, ARS-compliant signage included. Specialized race-weekend enforcement near Phoenix Raceway. 250+ HOAs, 1,000+ apartments served at no cost.",
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
          question: "How fast can Axle Towing respond to an Avondale property?",
          answer: "Sub-30-minute response from our Phoenix yard at 320 E. Pioneer St. via I-10. Most Avondale properties reach in 20–25 minutes; the Phoenix Raceway area adds another 5–10 minutes due to distance. We cover Avondale ZIPs 85323, 85329, 85392 and dispatch 24/7/365.",
        },
        {
          question: "What does private property towing cost an Avondale property manager?",
          answer: "Nothing. Private property towing in Avondale is completely free for property managers, HOAs, and commercial property owners. Vehicle owners pay the recovery fee at retrieval. Signage installation is free.",
        },
        {
          question: "Can Axle Towing handle race-weekend overflow at properties near Phoenix Raceway?",
          answer: "Yes. Phoenix Raceway brings 100,000+ visitors per race weekend during NASCAR and IndyCar events. Properties within several miles see massive overflow. We coordinate enforcement schedules around major events — patrol density ramps up 24–48 hours before the green flag and stays elevated through the cool-down.",
        },
        {
          question: "Does Axle Towing serve Coldwater Springs, Garden Lakes, and Crystal Gardens HOAs?",
          answer: "Yes. We serve every Avondale HOA, including Coldwater Springs HOA, Garden Lakes Community Association, Crystal Gardens HOA, Festival Foothills HOA, and Rio Paseo HOA. Each community gets an enforcement plan tailored to its CC&Rs.",
        },
        {
          question: "What signs are required at an Avondale private property?",
          answer: "Avondale City Code Chapter 24 follows ARS 9-499.05 — signs at every entrance with the towing company name, phone, and impound address. Avondale has special provisions for race-event weekends. Axle Towing installs all required signage at no cost.",
        },
        {
          question: "How does an Avondale apartment or HOA set up service with Axle Towing?",
          answer: "Setup takes 7–14 days. Free site walk, written authorization, signage installation, then live. Call 480-288-5526 or use the contact form.",
        },
        {
          question: "Does Axle Towing provide bilingual parking enforcement service in Avondale?",
          answer: "Yes. Avondale's diverse community benefits from bilingual team members who communicate in English and Spanish with residents, vehicle owners, and property managers. Bilingual support is included for every Avondale property at no additional cost.",
        },
      ]}
      extraBodyParagraphs={[
        "Avondale's signature parking-enforcement challenge is Phoenix Raceway. NASCAR and IndyCar events bring 100,000+ visitors per race weekend — the kind of overflow that can swallow an apartment lot or commercial parking field within hours of gates opening. Properties within several miles of the raceway need event-day enforcement schedules that ramp up 24–48 hours before the green flag. Outside race weekends, Avondale's I-10 corridor commercial growth (McDowell Road, Dysart Road) and the established West Valley HOA neighborhoods (Coldwater Springs, Garden Lakes, Crystal Gardens) drive steady year-round demand. Our Phoenix yard reaches all of Avondale via I-10 in 20–35 minutes.",
      ]}
    />
  );
}
