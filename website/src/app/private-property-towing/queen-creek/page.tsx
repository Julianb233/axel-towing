import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "queen-creek";
const CITY_NAME = "Queen Creek";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Queen Creek, AZ — Free for Property Managers, HOAs & Apartments",
  description:
    "Free private property towing in Queen Creek, AZ. <30 min response from our Apache Junction yard, 24/7 dispatch, ARS-compliant signage included. Hastings Farms, Encanterra, Cortina HOAs covered. 600+ apartments served at no cost.",
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
          question: "How fast can Axle Towing respond to a Queen Creek property?",
          answer: "Sub-30-minute response from our Apache Junction yard at 1151 W. Apache Trail via US-60 and Ellsworth Road. Central Queen Creek (Town Center, Sossaman) reaches fastest (~20–25 minutes); the far southeast (Encanterra, Sossaman Estates) adds 5–10 minutes. We cover Queen Creek ZIPs 85140, 85142, 85143.",
        },
        {
          question: "What does private property towing cost a Queen Creek property manager?",
          answer: "Nothing. Private property towing in Queen Creek is completely free for property managers, HOAs, and commercial property owners. Vehicle owners pay the recovery fee at retrieval. Signage installation is free.",
        },
        {
          question: "Does Axle Towing serve Hastings Farms, Queen Creek Station, Encanterra, and Cortina HOAs?",
          answer: "Yes. We serve every Queen Creek HOA, including Hastings Farms HOA, Queen Creek Station HOA, Encanterra Community Association, Cortina HOA, and Morning Sun Farms HOA. Each community gets an enforcement plan tailored to its CC&Rs.",
        },
        {
          question: "Can Axle Towing handle equestrian-community parking enforcement (trailer parking, oversized vehicle restrictions)?",
          answer: "Yes. Queen Creek's equestrian-friendly communities have unique parking considerations — trailer parking, oversized vehicle restrictions, access to equestrian trails. We work with HOA boards in Queen Creek to create enforcement rules tailored to each community's specific CC&Rs, ensuring both standard vehicles and larger recreational vehicles are regulated appropriately.",
        },
        {
          question: "What signs are required at a Queen Creek private property?",
          answer: "Queen Creek follows Maricopa County and Pinal County regulations (the town spans both) plus ARS 9-499.05 signage requirements. Equestrian-friendly communities have special CC&R provisions for trailer parking and oversized vehicle restrictions. Axle Towing installs all required signage at no cost.",
        },
        {
          question: "How does a Queen Creek apartment or HOA set up service with Axle Towing?",
          answer: "Setup takes 7–14 days. Free site walk, written authorization, signage installation, then live. Call 480-288-5526 or use the contact form.",
        },
        {
          question: "Does Axle Towing serve commercial properties along Ellsworth Road and Rittenhouse Road?",
          answer: "Yes. We work with Queen Creek Town Center, Queen Creek Marketplace, the Olive Mill commercial district, and the Ellsworth Road and Rittenhouse Road retail corridors. New developments come online almost monthly — we onboard quickly so enforcement is in place from day one.",
        },
      ]}
      extraBodyParagraphs={[
        "Queen Creek's character — equestrian-friendly neighborhoods, agricultural heritage, family-first community standards — shapes how we enforce. Trailer parking, oversized vehicle restrictions, and access to equestrian trails create CC&R nuances you don't see elsewhere in the East Valley. Hastings Farms, Queen Creek Station, Encanterra, and Cortina each have their own rules around guest parking, RV storage, and event-day overflow. Schnepf Farms and the Queen Creek Olive Mill draw seasonal event traffic that hits adjacent commercial properties hard. Our Apache Junction yard at 1151 W. Apache Trail handles all of Queen Creek via US-60 and Ellsworth Road in 20–35 minutes.",
      ]}
    />
  );
}
