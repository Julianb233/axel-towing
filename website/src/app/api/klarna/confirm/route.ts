import { NextResponse } from "next/server";

/**
 * POST /api/klarna/confirm
 *
 * Klarna push notification endpoint — called by Klarna after a successful order.
 * Klarna expects a 200 OK response within 3 seconds.
 *
 * This endpoint:
 * 1. Validates the Klarna order via the Orders Management API
 * 2. Acknowledges the order (marks it as captured on Klarna's side)
 * 3. Optionally triggers downstream notifications (email, CRM, etc.)
 *
 * Docs: https://docs.klarna.com/klarna-checkout/api/orders/#tag/Push-Notification
 */

const KLARNA_API_URL =
  process.env.KLARNA_API_URL ?? "https://api.playground.klarna.com";
const KLARNA_USERNAME = process.env.KLARNA_API_USERNAME ?? "";
const KLARNA_PASSWORD = process.env.KLARNA_API_PASSWORD ?? "";

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("order_id");

    if (!orderId) {
      console.warn("[klarna/confirm] Missing order_id in push notification");
      // Still return 200 so Klarna doesn't retry unnecessarily
      return NextResponse.json({ received: true }, { status: 200 });
    }

    // If credentials aren't configured yet, ack and exit
    if (!KLARNA_USERNAME || !KLARNA_PASSWORD) {
      console.warn("[klarna/confirm] Klarna credentials not configured — skipping validation for order:", orderId);
      return NextResponse.json({ received: true, note: "credentials_not_configured" }, { status: 200 });
    }

    const authHeader =
      "Basic " + Buffer.from(`${KLARNA_USERNAME}:${KLARNA_PASSWORD}`).toString("base64");

    // Fetch order from Klarna to validate it's real and in a capturable state
    const orderRes = await fetch(
      `${KLARNA_API_URL}/checkout/v3/orders/${orderId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
      }
    );

    if (!orderRes.ok) {
      console.error("[klarna/confirm] Failed to fetch order:", orderId, orderRes.status);
      // Still return 200 — Klarna push webhooks are fire-and-forget
      return NextResponse.json({ received: true, error: "order_fetch_failed" }, { status: 200 });
    }

    const order = await orderRes.json();
    console.log("[klarna/confirm] Order confirmed:", orderId, "status:", order.status);

    // Acknowledge the order if it's in "checkout_complete" status
    if (order.status === "checkout_complete") {
      const ackRes = await fetch(
        `${KLARNA_API_URL}/checkout/v3/orders/${orderId}/acknowledge`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authHeader,
          },
        }
      );

      if (ackRes.ok) {
        console.log("[klarna/confirm] Order acknowledged:", orderId);
      } else {
        console.error("[klarna/confirm] Failed to acknowledge order:", orderId, ackRes.status);
      }
    }

    return NextResponse.json({ received: true, order_id: orderId, status: order.status }, { status: 200 });
  } catch (err) {
    console.error("[klarna/confirm] Unexpected error:", err);
    // Always return 200 to prevent Klarna from retrying endlessly
    return NextResponse.json({ received: true, error: "internal_error" }, { status: 200 });
  }
}
