/**
 * Google Analytics 4 event tracking helpers.
 *
 * All functions are safe to call server-side or when GA is not loaded —
 * they silently no-op if `window.gtag` is unavailable.
 */

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
}

/** Send a generic GA4 event. */
export function trackEvent({ action, category, label, value }: GTagEvent) {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

/** Fire when a visitor clicks a phone number link. */
export function trackPhoneClick(phoneNumber?: string) {
  trackEvent({
    action: "phone_click",
    category: "engagement",
    label: phoneNumber ?? "main",
  });
}

/** Fire on successful form submission. */
export function trackFormSubmission(formName: string) {
  trackEvent({
    action: "form_submission",
    category: "conversion",
    label: formName,
  });
}

/** Fire when a CTA button is clicked. */
export function trackCTAClick(ctaName: string) {
  trackEvent({
    action: "cta_click",
    category: "engagement",
    label: ctaName,
  });
}

/** Fire a page_view event (used by the GA component on route changes). */
export function trackPageView(url: string) {
  gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string, {
    page_path: url,
  });
}
