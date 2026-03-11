import { Metadata } from "next";
import FAQContent from "./FAQContent";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions About Towing in Arizona",
  description:
    "Frequently asked questions about Axle Towing & Impound services for property owners and vehicle owners in the Phoenix metro area.",
  alternates: {
    canonical: "https://axletowing.com/faq",
  },
};

/** Inline FAQ data for structured data (must match FAQContent) */
const FAQ_STRUCTURED_DATA = [
  { question: "How much does your towing service cost?", answer: "Absolutely nothing. Our private property towing and parking enforcement services are 100% free for property owners and managers." },
  { question: "How do I get started with parking enforcement?", answer: "Getting started is simple. Call us or fill out our contact form for a free property assessment." },
  { question: "What signage do you provide?", answer: "We provide all required towing authorization signage at no cost to you. Our signs meet all Arizona Revised Statutes (ARS) requirements." },
  { question: "How quickly can you respond to a call?", answer: "Our average response time is under 30 minutes across the Phoenix metro area." },
  { question: "Do you offer 24/7 service?", answer: "Yes! Our dispatch and towing operations are available 24 hours a day, 7 days a week, 365 days a year." },
  { question: "What areas do you serve?", answer: "We serve the entire Phoenix metro area including Phoenix, Scottsdale, Mesa, Glendale, Gilbert, Chandler, Tempe, and Apache Junction." },
  { question: "What types of properties do you serve?", answer: "We serve apartment complexes, HOA communities, condominiums, commercial properties, retail centers, office parks, shopping plazas, medical facilities, churches, and private parking lots." },
  { question: "My car was towed - how do I get it back?", answer: "Contact us at 480-288-5526 or visit one of our impound yards during office hours. Bring valid photo ID, vehicle registration or title, and payment for applicable fees." },
  { question: "Can I get my personal belongings from the vehicle?", answer: "Yes. Arizona law allows you to retrieve personal belongings from an impounded vehicle during business hours at no charge." },
  { question: "Can I dispute the tow?", answer: "Yes. If you believe your vehicle was towed in error, contact us with the details and we will review the documentation." },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQ_STRUCTURED_DATA)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://axletowing.com" },
              { name: "FAQ", url: "https://axletowing.com/faq" },
            ])
          ),
        }}
      />
      <FAQContent />
    </>
  );
}
