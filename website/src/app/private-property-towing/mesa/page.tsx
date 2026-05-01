import type { Metadata } from "next";
import CityServicePage from "@/components/CityServicePage";
import { COMPANY } from "@/lib/constants";

const CITY_SLUG = "mesa";
const CITY_NAME = "Mesa";
const CANONICAL = `https://${COMPANY.domain}/private-property-towing/${CITY_SLUG}`;

export const metadata: Metadata = {
  title:
    "Private Property Towing in Mesa, AZ — Free for Property Managers, HOAs & Apartments",
  description:
    "Free private property towing in Mesa, AZ. <30 min response from our Apache Junction yard, 24/7 dispatch, ARS-compliant signage included. 1,200+ HOAs, 2,800+ apartment units, 6,000+ commercial properties served at no cost to owners.",
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
          question: "How fast can Axle Towing respond to a Mesa property?",
          answer: "Most Mesa properties get sub-30-minute response from our Apache Junction yard at 1151 W. Apache Trail. East Mesa, Red Mountain, Las Sendas, and the Superstition Springs corridor are closest. West Mesa and Dobson Ranch also route from our Phoenix yard at 320 E. Pioneer St. when dispatch flow demands it. We cover ZIP codes 85201–85215.",
        },
        {
          question: "What does private property towing cost a Mesa property manager?",
          answer: "Nothing. Private property towing in Mesa is completely free for property owners, HOAs, and commercial property managers. Vehicle owners pay the recovery fee at retrieval. No contract minimums, no monthly fees, no per-tow charges. Signage installation is also free.",
        },
        {
          question: "Does Axle Towing serve East Mesa, Las Sendas, and Dobson Ranch?",
          answer: "Yes. We serve every Mesa neighborhood — East Mesa, West Mesa, Superstition Springs, Red Mountain, Dobson Ranch, Las Sendas, Downtown Mesa, Mesa Riverview, Alta Mesa, and Leisure World. Our Apache Junction yard handles East Mesa fastest; our Phoenix yard backs up West Mesa.",
        },
        {
          question: "What signs are required at a Mesa private property?",
          answer: "Mesa City Code Title 8 Chapter 5 requires tow-away signs to be posted at every entrance with the towing company name, phone, and impound yard address. New properties require 24-hour signage posting before enforcement can begin. Axle Towing installs all required signage at no cost.",
        },
        {
          question: "How does a Mesa apartment or HOA set up service with Axle Towing?",
          answer: "Setup takes 7–14 days. We start with a no-cost site walk where we audit signage and identify hot-spots. You sign a brief written authorization. We install signage at every entrance. Service goes live the same day signage is up. Call 480-288-5526 or use the contact form.",
        },
        {
          question: "Can Axle Towing handle spring training overflow at Mesa apartments?",
          answer: "Yes. Mesa hosts the Chicago Cubs (Sloan Park) and Oakland Athletics (Hohokam Stadium) for spring training in February and March. Properties near both stadiums see massive parking overflow from fans. We add patrol density on game days and verify each tow against the property's enforcement plan.",
        },
        {
          question: "Does Axle Towing serve the Mesa Gateway Airport area for industrial/commercial properties?",
          answer: "Yes. The Mesa Gateway Airport area in southeast Mesa is one of the fastest-growing commercial corridors in the East Valley, with new industrial and office parks coming online regularly. Our Apache Junction yard serves the Mesa Gateway corridor with sub-30-minute response for retail centers, office parks, and industrial properties.",
        },
      ]}
      extraBodyParagraphs={[
        "Mesa's East Valley scale — third-largest city in Arizona, more than 540,000 residents — means our Apache Junction yard at 1151 W. Apache Trail is the closest dispatch for most properties. East Mesa, Red Mountain, Las Sendas, and the Superstition Springs commercial corridor all hit sub-30-minute response from there. West Mesa and Dobson Ranch route from our Phoenix yard at similar response times. Whichever yard takes the call, the property manager talks to the same dispatcher, follows the same enforcement plan, and gets the same documentation packet.",
      ]}
    />
  );
}
