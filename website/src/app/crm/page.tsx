import type { Metadata } from "next";
import CRMContent from "./CRMContent";

export const metadata: Metadata = {
  title: "CRM Pipeline — Axle Towing",
  description: "Internal CRM dashboard for managing leads and pipeline stages.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CRMPage() {
  return <CRMContent />;
}
