import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "scottsdale";
const CITY_NAME = "Scottsdale";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Scottsdale, AZ — Free for Property Managers, HOAs & Apartments",
  description:
    "Free private property towing in Scottsdale, AZ. <25 min response from our Phoenix yard, 24/7 dispatch, ARS-compliant signage included. 800+ HOAs, 1,200+ apartment units, 4,500+ commercial properties served at no cost.",
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
          question: "How fast can Axle Towing respond to a Scottsdale property?",
          answer: "Sub-25-minute response from our Phoenix yard at 320 E. Pioneer St. South Scottsdale and Old Town reach fastest (~20 minutes); North Scottsdale routes via Loop 101 (~25–35 minutes).",
        },
        {
          question: "What does private property towing cost a Scottsdale property manager?",
          answer: "Nothing. Private property towing in Scottsdale is completely free for property managers, HOAs, and commercial property owners. Vehicle owners pay the recovery fee at retrieval. Signage installation and onboarding are also free.",
        },
        {
          question: "Does Axle Towing serve DC Ranch, Grayhawk, Gainey Ranch, and Troon Village HOAs?",
          answer: "Yes. We serve every Scottsdale luxury HOA, including DC Ranch Association, Grayhawk Community Association, Gainey Ranch Community Association, McCormick Ranch HOA, and Troon Village HOA. CC&R-aligned enforcement is the default.",
        },
        {
          question: "What signs are required at a Scottsdale private property?",
          answer: "Scottsdale Revised Code Chapter 36-72 layers on top of ARS 9-499.05. Property owners must provide 24-hour notice before towing from guest parking areas in residential communities, and HOA-initiated tows require board-approved written authorization that complies with both CC&R language and state statute. Axle Towing installs all required signage at no cost.",
        },
        {
          question: "How does a Scottsdale apartment or HOA set up service with Axle Towing?",
          answer: "Setup takes 7–14 days. Free site walk, written authorization, signage installation, then live. Call 480-288-5526 or use the contact form.",
        },
        {
          question: "Can Axle Towing handle event-night enforcement during the WM Phoenix Open and Scottsdale Arabian Horse Show?",
          answer: "Yes. February brings WM Phoenix Open (TPC Scottsdale) and the Scottsdale Arabian Horse Show, plus spring training. Properties near TPC Scottsdale, WestWorld, and Old Town see massive overflow. We add patrol density on event days and verify each tow against the property's enforcement plan.",
        },
        {
          question: "Does Axle Towing serve commercial properties at Scottsdale Fashion Square, Kierland Commons, and Scottsdale Quarter?",
          answer: "Yes. We work with retail centers throughout Scottsdale, including Scottsdale Fashion Square (the Southwest's largest mall), Kierland Commons, Scottsdale Quarter, and Market Street at DC Ranch. Holiday shopping and event-night parking surges get specialized coverage.",
        },
      ]}
      extraBodyParagraphs={[
        "Scottsdale runs on parking enforcement that respects luxury-community standards. North Scottsdale's $1M+ median home values, the strict CC&R enforcement at DC Ranch, Grayhawk, Gainey Ranch, McCormick Ranch, and Troon Village, and the year-round event calendar — WM Phoenix Open at TPC Scottsdale, Scottsdale Arabian Horse Show, spring training, Old Town nightlife — mean property managers can't afford lazy enforcement or no-show dispatch. Our Phoenix yard reaches all of Scottsdale in under 25 minutes via I-10, Loop 101, or Scottsdale Road.",
      ]}
    />
  );
}
