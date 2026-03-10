import type { Metadata } from "next";
import { Open_Sans, Mohave } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollAnimator from "@/components/ScrollAnimator";
import FloatingCTA from "@/components/FloatingCTA";
import { COMPANY } from "@/lib/constants";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const mohave = Mohave({
  variable: "--font-mohave",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    "towing Phoenix AZ",
    "private property impound",
    "parking enforcement Phoenix",
    "HOA towing",
    "apartment towing",
    "vehicle relocation Phoenix",
    "commercial property towing",
    "Axle Towing",
    "Apache Junction towing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `https://${COMPANY.domain}`,
              name: COMPANY.name,
              description: COMPANY.description,
              url: `https://${COMPANY.domain}`,
              telephone: COMPANY.phone,
              email: COMPANY.email,
              address: COMPANY.addresses.map((a) => ({
                "@type": "PostalAddress",
                streetAddress: a.street,
                addressLocality: a.city,
                addressRegion: a.state,
                postalCode: a.zip,
                addressCountry: "US",
              })),
              areaServed: [
                "Phoenix, AZ",
                "Scottsdale, AZ",
                "Mesa, AZ",
                "Glendale, AZ",
                "Gilbert, AZ",
                "Chandler, AZ",
                "Tempe, AZ",
                "Apache Junction, AZ",
              ],
              priceRange: "Free for property owners",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              image: COMPANY.logo,
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${openSans.variable} ${mohave.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <ScrollReveal />
        <ScrollAnimator />
      </body>
    </html>
  );
}
