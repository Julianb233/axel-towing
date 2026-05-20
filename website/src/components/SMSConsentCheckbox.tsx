import Link from "next/link";
import { COMPANY } from "@/lib/constants";

/**
 * Reusable SMS consent checkbox component for A2P 10DLC compliance.
 * Add this to any form that collects phone numbers.
 *
 * Required for TCPA compliance and A2P 10DLC brand registration.
 * See: https://help.gohighlevel.com/support/solutions/articles/48001225526
 */
export default function SMSConsentCheckbox({
  compact = false,
}: {
  /** Use compact mode for smaller forms (inline widgets, popups) */
  compact?: boolean;
}) {
  if (compact) {
    return (
      <label className="flex items-start gap-2 cursor-pointer">
        <input
          name="smsConsent"
          type="checkbox"
          className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary shrink-0"
        />
        <span className="text-[10px] text-gray-400 leading-snug">
          I agree to receive SMS from {COMPANY.name}. Msg &amp; data rates may apply. Reply STOP
          to opt out.{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy
          </Link>{" "}
          &amp;{" "}
          <Link href="/terms-of-service" className="underline">
            Terms
          </Link>
        </span>
      </label>
    );
  }

  return (
    <div className="space-y-3 border-t border-gray-200 pt-4">
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          name="smsConsent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary shrink-0"
        />
        <span className="text-xs text-gray-500 leading-relaxed">
          I consent to receive SMS/text messages from {COMPANY.name} regarding my service inquiry.
          Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any
          time. Reply HELP for help. View our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-service" className="text-primary hover:underline">
            Terms of Service
          </Link>
          .
        </span>
      </label>
    </div>
  );
}
