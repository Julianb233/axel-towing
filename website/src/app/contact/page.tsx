import { Metadata } from "next";
import ContactContent from "./ContactContent";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Property Assessment",
  description:
    "Contact Axle Towing & Impound for free private property towing and parking enforcement in the Phoenix metro area. Call 480-288-5526 or request a free property assessment online.",
  alternates: {
    canonical: "https://axletowing.com/contact",
  },
  openGraph: {
    title: "Contact Us - Get a Free Property Assessment",
    description:
      "Contact Axle Towing & Impound for free private property towing and parking enforcement in the Phoenix metro area. Call 480-288-5526 or request a free property assessment online.",
    url: "https://axletowing.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get a Free Property Assessment",
    description:
      "Contact Axle Towing & Impound for free private property towing and parking enforcement in the Phoenix metro area. Call 480-288-5526 or request a free property assessment online.",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema("phoenix"),
            localBusinessSchema("apache-junction"),
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://axletowing.com" },
              { name: "Contact", url: "https://axletowing.com/contact" },
            ])
          ),
        }}
      />
      <ContactContent />
    </>
  );
}
