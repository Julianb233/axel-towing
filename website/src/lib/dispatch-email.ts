import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const DISPATCH_EMAIL = process.env.DISPATCH_EMAIL || "elliott.axletowing@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "dispatch@axletowing.com";

/**
 * Send a dispatch notification email via Resend.
 */
export async function sendDispatchEmail(
  referenceId: string,
  subject: string,
  body: string,
): Promise<{ success: boolean; error?: string }> {
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured — skipping email");
    return { success: false, error: "Resend not configured" };
  }

  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: DISPATCH_EMAIL,
    subject,
    text: body,
  });

  if (error) {
    console.error("Resend email error:", error.message);
    return { success: false, error: error.message };
  }

  console.log(`Dispatch email sent for ${referenceId}`);
  return { success: true };
}
