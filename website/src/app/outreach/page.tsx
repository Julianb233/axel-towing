import type { Metadata } from "next";
import OutreachContent from "./OutreachContent";

export const metadata: Metadata = {
  title: "Social Media Outreach Dashboard | Axle Towing",
  description:
    "Internal outreach campaign management for HOA board members and property managers.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OutreachPage() {
  return <OutreachContent />;
}
