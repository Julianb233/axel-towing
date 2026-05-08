import { Metadata } from "next";
import VehicleLookupContent from "./VehicleLookupContent";

export const metadata: Metadata = {
  title: "Vehicle Lookup - Was Your Vehicle Towed?",
  description:
    "Check if your vehicle was towed by Axle Towing & Impound. Find impound lot locations, hours, fees, and what to bring for vehicle retrieval in the Phoenix metro area.",
  alternates: {
    canonical: "https://axletowing.com/vehicle-lookup",
  },
  openGraph: {
    title: "Vehicle Lookup - Was Your Vehicle Towed?",
    description:
      "Check if your vehicle was towed by Axle Towing & Impound. Find impound lot locations, hours, fees, and what to bring for vehicle retrieval in the Phoenix metro area.",
    url: "https://axletowing.com/vehicle-lookup",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Lookup - Was Your Vehicle Towed?",
    description:
      "Check if your vehicle was towed by Axle Towing & Impound. Find impound lot locations, hours, fees, and what to bring for vehicle retrieval in the Phoenix metro area.",
  },
};

export default function VehicleLookupPage() {
  return <VehicleLookupContent />;
}
