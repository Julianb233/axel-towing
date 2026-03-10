import { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Axle Towing & Impound services for property owners and vehicle owners in the Phoenix metro area.",
};

export default function FAQPage() {
  return <FAQContent />;
}
