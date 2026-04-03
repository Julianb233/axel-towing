import { redirect } from "next/navigation";

/**
 * /review — Short URL redirect to /reviews/leave-review
 * Used on printed materials, business cards, truck signage, and QR codes.
 */
export default function ReviewRedirect() {
  redirect("/reviews/leave-review");
}
