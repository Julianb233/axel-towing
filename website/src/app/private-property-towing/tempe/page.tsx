import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "tempe";
const CITY_NAME = "Tempe";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Tempe, AZ — Free for Property Managers, HOAs & Apartments",
  description:
    "Free private property towing in Tempe, AZ. <25 min response from our Phoenix yard, 24/7 dispatch, ARS-compliant signage included. 400+ HOAs, 1,500+ apartment units, 3,000+ commercial properties served at no cost to owners.",
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
          question: "How fast can Axle Towing respond to a Tempe property?",
          answer: "Most Tempe properties get sub-25-minute response from our Phoenix yard at 320 E. Pioneer St. — 10 to 20 minutes via I-10 depending on the neighborhood. We cover all Tempe ZIP codes (85281–85287) and dispatch 24/7/365.",
        },
        {
          question: "What does private property towing cost a Tempe property manager?",
          answer: "Nothing. Private property towing in Tempe is completely free for property managers, HOAs, and commercial property owners. Vehicle owners pay the recovery fee at retrieval. No contract minimums, no monthly fees, no per-tow charges.",
        },
        {
          question: "Does Axle Towing handle student housing parking enforcement near ASU?",
          answer: "Yes. Student housing properties near ASU — including 922 Place, The District at Tempe, Rise on Apache, Union Tempe, and Vela on Farmer — face unique parking-density challenges. We tailor enforcement plans to student-housing realities (semester-aligned parking decals, guest pass systems, fall move-in surge) and patrol on schedules that match the academic calendar.",
        },
        {
          question: "What signs are required at a Tempe private property?",
          answer: "Tempe City Code Chapter 27 follows ARS 9-499.05 — tow-away signs must be at every entrance with the towing company name, phone, and impound address. Properties in the ASU university overlay district have additional notification requirements for student housing. Axle Towing installs all required signage at no cost.",
        },
        {
          question: "Can Axle Towing handle football Saturday parking overflow at Sun Devil Stadium-adjacent properties?",
          answer: "Yes. Sun Devil Stadium pulls 50,000+ fans for every home game (September–November), and surrounding apartments and commercial properties see massive overflow. We staff up patrol density on home Saturdays and verify each tow against the property's enforcement plan before hooking up.",
        },
        {
          question: "How does a Tempe apartment or HOA set up service with Axle Towing?",
          answer: "Setup takes 7–14 days. We do a no-cost site walk, draft an enforcement plan, get a brief written authorization, install signage at every entrance, and go live the same day signage is up. Call 480-288-5526 or use the contact form.",
        },
        {
          question: "Does Axle Towing serve Tempe Town Lake event venues and the Mill Avenue District?",
          answer: "Yes. Tempe Town Lake events (Ironman Arizona, Tempe Festival of the Arts) and Mill Avenue's nightlife create heavy weekend overflow into adjacent commercial and residential parking. Our 24/7 dispatch handles these surges with no schedule limit on response times.",
        },
      ]}
      extraBodyParagraphs={[
        "Tempe is the densest rental market in Arizona — 45,000+ rental units across just 184,000 residents — and the campus presence at ASU drives parking pressure that no other Phoenix-metro city sees. Move-in weekends in August, football Saturdays from September through November, the Ironman Arizona race weekend, and spring break in March each create distinct enforcement demands. Our Phoenix yard at 320 E. Pioneer St. is 10–15 minutes from anywhere in Tempe via I-10, so response times stay under 25 minutes even on peak weekend nights.",
      ]}
    />
  );
}
