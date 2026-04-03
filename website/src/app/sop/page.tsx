import { Metadata } from "next";
import SOPContent from "./SOPContent";

export const metadata: Metadata = {
  title: "Driver & Staff SOP Handbook | Axle Towing & Impound",
  description:
    "Official Standard Operating Procedures for Axle Towing & Impound drivers and staff. Covers ARS compliance, ToeBook operations, violation procedures, customer interaction scripts, and new driver onboarding.",
  robots: { index: false, follow: false }, // Internal document — do not index
};

export default function SOPPage() {
  return <SOPContent />;
}
