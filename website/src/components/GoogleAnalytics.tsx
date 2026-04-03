"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { trackPageView } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Inner component that tracks route changes.
 * Wrapped in Suspense because useSearchParams() requires it in App Router.
 */
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

/**
 * Loads Google Analytics 4 via gtag.js.
 *
 * - Uses `afterInteractive` strategy so it never blocks rendering.
 * - Sets up Google Consent Mode v2 (default denied; your cookie banner
 *   should call `gtag('consent', 'update', ...)` when the user opts in).
 * - Respects the Do Not Track header — skips loading entirely if enabled.
 */
export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  // Respect Do Not Track
  if (typeof navigator !== "undefined" && navigator.doNotTrack === "1") {
    return null;
  }

  return (
    <>
      {/* Consent Mode defaults — must run before gtag.js loads */}
      <Script id="ga-consent-defaults" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500,
          });
        `}
      </Script>

      {/* gtag.js library */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* GA4 config */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
          });
        `}
      </Script>

      {/* Track client-side route changes */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}
