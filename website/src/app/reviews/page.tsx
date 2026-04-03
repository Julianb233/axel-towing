import { Metadata } from "next";
import ReviewsContent from "./ReviewsContent";
import { aggregateRatingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Reviews — What Phoenix Property Managers Say About Axle Towing",
  description:
    "Read testimonials from property managers, HOA boards, and property owners who trust Axle Towing & Impound for parking enforcement in Phoenix, AZ. 4.9-star rated.",
  alternates: {
    canonical: "https://axletowing.com/reviews",
  },
  openGraph: {
    title: "Reviews — What Phoenix Property Managers Say About Axle Towing",
    description:
      "Read testimonials from property managers, HOA boards, and property owners who trust Axle Towing & Impound for parking enforcement in Phoenix, AZ.",
    url: "https://axletowing.com/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema()),
        }}
      />
      <ReviewsContent />
    </>
  );
}
