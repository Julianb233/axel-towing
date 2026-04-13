import Link from "next/link";

/**
 * Reusable SMS consent checkbox for A2P 10DLC compliance.
 * Add to any form that collects phone numbers.
 */
export default function SMSConsentCheckbox({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <label className="flex items-start gap-2 cursor-pointer">
        <input
          name="smsConsent"
          type="checkbox"
          className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary shrink-0"
        />
        <span className="text-[10px] text-gray-400 leading-snug">
          I agree to receive SMS from Axle Towing &amp; Impound. Msg &amp; data rates may apply.
          Reply STOP to opt out.{" "}
          <Link href="/privacy-policy" className="underline">Privacy</Link>{" "}
          &amp;{" "}
          <Link href="/terms-of-service" className="underline">Terms</Link>
        </span>
      </label>
    );
  }

  return (
    <div className="space-y-3 border-t border-gray-200 pt-4">
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          name="smsConsent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary shrink-0"
        />
        <span className="text-xs text-gray-500 leading-relaxed">
          I consent to receive SMS/text messages from Axle Towing &amp; Impound regarding my
          service inquiry. Message frequency varies. Msg &amp; data rates may apply. Reply STOP
          to opt out.{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
          {" "}&amp;{" "}
          <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>.
        </span>
      </label>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          name="marketingConsent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary shrink-0"
        />
        <span className="text-xs text-gray-500 leading-relaxed">
          I consent to receive marketing text messages about special offers and service updates.
          Optional and not required to receive service.
        </span>
      </label>
    </div>
  );
}
