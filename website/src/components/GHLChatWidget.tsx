'use client';

import { useEffect } from 'react';

/**
 * GoHighLevel (GHL) Chat Widget
 *
 * Embeds the GHL live chat widget on axletowing.com.
 * Requires NEXT_PUBLIC_GHL_CHAT_WIDGET_ID to be set in environment variables.
 *
 * SETUP STEPS (one-time, requires GHL dashboard access):
 * 1. Log into GHL sub-account for Axle Towing at app.gohighlevel.com
 * 2. Go to Sites > Chat Widget (in the left sidebar)
 * 3. Click "Add Widget" and configure:
 *    - Name: Axle Towing Chat
 *    - Brand color: #1B2A3F (navy) or #DC2626 (red)
 *    - Greeting: "Need towing or parking enforcement? Chat with us!"
 *    - Availability: 24/7 or business hours
 * 4. Save the widget
 * 5. Click the embed icon — copy the data-widget-id from the script tag
 *    Example: <script ... data-widget-id="abc123xyz"> → copy "abc123xyz"
 * 6. Set NEXT_PUBLIC_GHL_CHAT_WIDGET_ID=abc123xyz in:
 *    - .env.local (local dev)
 *    - Vercel dashboard (Settings > Environment Variables) for production
 *    - Railway dashboard (if using Railway)
 *
 * The widget renders as a floating chat bubble (bottom-right corner).
 * It automatically handles conversations in GHL Conversations inbox.
 *
 * NOTE: The widget ID is NOT the same as GHL_LOCATION_ID.
 * It is a unique ID assigned when you create/configure the chat widget.
 */
export default function GHLChatWidget() {
  const widgetId = process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID;

  // Skip rendering if no valid widget ID (placeholder or missing)
  const isConfigured = widgetId && !widgetId.startsWith('TODO_');

  useEffect(() => {
    if (!isConfigured) return;

    // Avoid double-loading if script already exists
    if (document.getElementById('ghl-chat-widget-script')) return;

    const script = document.createElement('script');
    script.id = 'ghl-chat-widget-script';
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute(
      'data-resources-url',
      'https://widgets.leadconnectorhq.com/chat-widget/loader.js'
    );
    script.setAttribute('data-widget-id', widgetId!);
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount (e.g., during development hot-reload)
      const existing = document.getElementById('ghl-chat-widget-script');
      if (existing) existing.remove();
    };
  }, [isConfigured, widgetId]);

  // Render nothing — the GHL script injects its own UI into the DOM
  return null;
}
