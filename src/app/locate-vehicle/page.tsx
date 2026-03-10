import { Metadata } from "next";
import LocateVehicleContent from "./LocateVehicleContent";

export const metadata: Metadata = {
  title: "Locate Your Vehicle",
  description:
    "Find and retrieve your towed vehicle from Axle Towing & Impound. Look up your vehicle by license plate and learn what to bring for pickup.",
};

export default function LocateVehiclePage() {
  return <LocateVehicleContent />;
}
