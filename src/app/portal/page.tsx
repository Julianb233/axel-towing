import { Metadata } from "next";
import PortalContent from "./PortalContent";

export const metadata: Metadata = {
  title: "TowBook Manager Portal - Log In",
  description:
    "Log in to TowBook to sticker vehicles, build tow calls, manage dispatch, and track your Axle Towing fleet. Manager and dispatch access for property partners.",
  openGraph: {
    title: "TowBook Manager Portal - Axle Towing",
    description:
      "Access TowBook to manage tow calls, sticker vehicles, and run dispatch operations for your property.",
  },
};

export default function PortalPage() {
  return <PortalContent />;
}
