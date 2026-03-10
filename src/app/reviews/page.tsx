import { Metadata } from "next";
import ReviewsContent from "./ReviewsContent";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read testimonials from property managers, HOA boards, and property owners who trust Axle Towing & Impound for parking enforcement in Phoenix, AZ.",
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
