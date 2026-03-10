import type { Metadata } from "next";
import { Open_Sans, Mohave } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollAnimator from "@/components/ScrollAnimator";
import FloatingCTA from "@/components/FloatingCTA";
import { COMPANY } from "@/lib/constants";
import { organizationSchema } from "@/lib/schema";

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
  metadataBase: new URL(`https://${COMPANY.domain}`),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY.name,
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    url: `https://${COMPANY.domain}`,
    images: [
      {
        url: `/og?title=${encodeURIComponent(COMPANY.name)}&subtitle=${encodeURIComponent(COMPANY.tagline)}`,
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: [`/og?title=${encodeURIComponent(COMPANY.name)}&subtitle=${encodeURIComponent(COMPANY.tagline)}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `https://${COMPANY.domain}`,
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
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
            __html: JSON.stringify(organizationSchema()),
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
