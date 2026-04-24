import { Metadata } from "next";
import LocateVehicleContent from "./LocateVehicleContent";

export const metadata: Metadata = {
  title: "Locate Your Vehicle",
  description:
    "Find and retrieve your towed vehicle from Axle Towing & Impound. Look up your vehicle by license plate and learn what to bring for pickup.",
  alternates: {
    canonical: "https://axletowing.com/locate-vehicle",
    languages: {
      en: "https://axletowing.com/locate-vehicle",
      es: "https://axletowing.com/es/ubicar-vehiculo",
    },
  },
  openGraph: {
    title: "Locate Your Vehicle",
    description:
      "Find and retrieve your towed vehicle from Axle Towing & Impound. Look up your vehicle by license plate and learn what to bring for pickup.",
    url: "https://axletowing.com/locate-vehicle",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locate Your Vehicle",
    description:
      "Find and retrieve your towed vehicle from Axle Towing & Impound. Look up your vehicle by license plate and learn what to bring for pickup.",
  },
};

export default function LocateVehiclePage() {
  return <LocateVehicleContent />;
}
