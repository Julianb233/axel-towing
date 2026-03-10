import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
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
              address: {
                "@type": "PostalAddress",
                addressLocality: "Phoenix",
                addressRegion: "AZ",
                addressCountry: "US",
              },
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
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
