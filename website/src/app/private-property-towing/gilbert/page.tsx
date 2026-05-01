import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "gilbert";
const CITY_NAME = "Gilbert";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Gilbert, AZ — Free for Property Managers, HOAs & Apartments",
  description:
    "Free private property towing in Gilbert, AZ. <30 min response from our Apache Junction yard, 24/7 dispatch, ARS-compliant signage included. 1,100+ HOAs, 1,400+ apartment units, 3,500+ commercial properties served at no cost.",
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
          question: "How fast can Axle Towing respond to a Gilbert property?",
          answer: "Most Gilbert properties get sub-30-minute response. East Gilbert (Power Ranch, Agritopia, Morrison Ranch) routes from our Apache Junction yard via Loop 202 and US-60 (~20–25 minutes). West Gilbert and the Heritage District route from our Phoenix yard via Loop 202 (~25–30 minutes).",
        },
        {
          question: "What does private property towing cost a Gilbert property manager?",
          answer: "Nothing. Private property towing in Gilbert is completely free for property managers, HOAs, and commercial property owners. Vehicle owners pay the recovery fee at retrieval. No contract minimums, no monthly fees.",
        },
        {
          question: "Does Axle Towing serve Power Ranch, Seville, Agritopia, and Morrison Ranch HOAs?",
          answer: "Yes. We serve every Gilbert HOA, including Power Ranch Community Association, Seville HOA, Val Vista Lakes HOA, Agritopia HOA, and Morrison Ranch Community Association. Each community gets an enforcement plan tailored to its CC&Rs.",
        },
        {
          question: "What signs are required at a Gilbert private property?",
          answer: "Gilbert Town Code Title 7 Chapter 2 follows ARS 9-499.05 — signs at every entrance with the towing company name, phone, and impound address. Gilbert additionally requires HOA-initiated towing programs to be approved by board vote documented in meeting minutes. Axle Towing installs all required signage at no cost.",
        },
        {
          question: "How does a Gilbert apartment or HOA set up service with Axle Towing?",
          answer: "Setup takes 7–14 days. Free site walk, written authorization, signage installation, then live. Call 480-288-5526 or use the contact form.",
        },
        {
          question: "Can Axle Towing handle Heritage District event-night enforcement?",
          answer: "Yes. The Heritage District in downtown Gilbert hosts farmers markets, holiday events, and craft brewery nights that create overflow parking onto adjacent properties. Our 24/7 dispatch ramps up patrols on event nights with no scheduling limits.",
        },
        {
          question: "Does Axle Towing serve commercial properties at SanTan Village and Gilbert Gateway Towne Center?",
          answer: "Yes. We work with retail centers including SanTan Village, Gilbert Gateway Towne Center, San Tan Marketplace, and the Greenfield Village retail corridor. Each property gets an enforcement plan that protects customer parking without overstepping CC&R or lease language.",
        },
      ]}
      extraBodyParagraphs={[
        "Gilbert's transformation from a small farming community to one of Arizona's largest cities (270,000+ residents) happened in just 20 years. The result is one of the highest HOA-per-capita ratios in the Valley — 1,100+ communities — including nationally recognized master-planned developments like Power Ranch, Agritopia, and Morrison Ranch. Our Apache Junction yard handles East Gilbert in under 25 minutes; our Phoenix yard backs up West Gilbert and the Heritage District. Both yards serve every Gilbert ZIP (85233–85299).",
      ]}
    />
  );
}
