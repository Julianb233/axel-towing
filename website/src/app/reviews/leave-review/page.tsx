import { Metadata } from "next";
import LeaveReviewContent from "./LeaveReviewContent";

export const metadata: Metadata = {
  title: "Leave a Review — Share Your Experience with Axle Towing",
  description:
    "Had a great experience with Axle Towing & Impound? Leave us a review on Google, Yelp, or Facebook. Your feedback helps other property managers find trusted parking enforcement.",
  alternates: {
    canonical: "https://axletowing.com/reviews/leave-review",
  },
  openGraph: {
    title: "Leave a Review — Share Your Experience with Axle Towing",
    description:
      "Had a great experience with Axle Towing? Leave us a review on Google, Yelp, or Facebook.",
    url: "https://axletowing.com/reviews/leave-review",
  },
};

export default function LeaveReviewPage() {
  return <LeaveReviewContent />;
}
