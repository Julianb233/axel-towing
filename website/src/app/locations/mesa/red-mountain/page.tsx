import type { Metadata } from "next";
import { NEIGHBORHOODS } from "@/lib/neighborhood-data";
import NeighborhoodPageTemplate from "@/components/NeighborhoodPageTemplate";

const data = NEIGHBORHOODS["red-mountain"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return <NeighborhoodPageTemplate data={data} />;
}
