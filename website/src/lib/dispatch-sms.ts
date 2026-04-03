import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const DISPATCH_PHONE = process.env.DISPATCH_PHONE || "+14802885526";

/**
 * Send an SMS dispatch notification via Twilio.
 */
export async function sendDispatchSms(
  referenceId: string,
  message: string,
): Promise<{ success: boolean; error?: string }> {
  if (!accountSid || !authToken || !twilioPhone) {
    console.warn("Twilio not configured — skipping SMS");
    return { success: false, error: "Twilio not configured" };
  }

  const client = twilio(accountSid, authToken);

  try {
    await client.messages.create({
      body: message,
      from: twilioPhone,
      to: DISPATCH_PHONE,
    });

    console.log(`Dispatch SMS sent for ${referenceId}`);
    return { success: true };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Twilio SMS error:", errorMsg);
    return { success: false, error: errorMsg };
  }
}
