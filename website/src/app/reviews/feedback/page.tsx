import { Metadata } from "next";
import FeedbackContent from "./FeedbackContent";

export const metadata: Metadata = {
  title: "Share Your Feedback — Axle Towing",
  description:
    "Let us know how we can improve. Your private feedback helps Axle Towing & Impound deliver better service to property managers across Phoenix.",
  alternates: {
    canonical: "https://axletowing.com/reviews/feedback",
  },
  robots: { index: false, follow: false },
};

export default function FeedbackPage() {
  return <FeedbackContent />;
}
