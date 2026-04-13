'use client';

import { useEffect } from 'react';

/**
 * GoHighLevel (GHL) Chat Widget
 *
 * Embeds the GHL live chat widget on axletowing.com.
 * Requires NEXT_PUBLIC_GHL_CHAT_WIDGET_ID to be set.
 *
 * To get the widget ID:
 * 1. Log into GHL sub-account for Axle Towing
 * 2. Go to Sites > Chat Widget
 * 3. Configure the widget (colors, greeting, availability)
 * 4. Copy the widget ID from the embed code
 * 5. Set NEXT_PUBLIC_GHL_CHAT_WIDGET_ID in .env.local
 *
 * The widget will appear as a floating chat bubble (bottom-right).
 * It replaces/supplements the existing ContactWidget for live chat.
 */
export default function GHLChatWidget() {
  const widgetId = process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID;

  useEffect(() => {
    if (!widgetId) return;

    // Avoid double-loading
    if (document.getElementById('ghl-chat-widget-script')) return;

    const script = document.createElement('script');
    script.id = 'ghl-chat-widget-script';
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', widgetId);
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existing = document.getElementById('ghl-chat-widget-script');
      if (existing) existing.remove();
    };
  }, [widgetId]);

  // Render nothing if widget ID is not configured
  if (!widgetId) return null;

  return null;
}
