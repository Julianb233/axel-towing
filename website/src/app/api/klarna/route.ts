import { NextResponse } from "next/server";

/**
 * POST /api/klarna
 * Initiates a Klarna order session and returns a redirect URL to Klarna's hosted checkout.
 *
 * Environment variables required:
 *   KLARNA_API_USERNAME  — Klarna merchant API username (from Merchant Portal)
 *   KLARNA_API_PASSWORD  — Klarna merchant API password (from Merchant Portal)
 *   KLARNA_API_URL       — Klarna API base URL
 *                          Playground: https://api.playground.klarna.com
 *                          Production:  https://api.klarna.com
 *
 * Klarna Hosted Payment Page docs:
 *   https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/
 */

const KLARNA_API_URL =
  process.env.KLARNA_API_URL ?? "https://api.playground.klarna.com";
const KLARNA_USERNAME = process.env.KLARNA_API_USERNAME ?? "";
const KLARNA_PASSWORD = process.env.KLARNA_API_PASSWORD ?? "";

interface KlarnaLineItem {
  name: string;
  quantity: number;
  unit_price: number; // in cents
  total_amount: number; // in cents
  tax_rate: number; // 0 = no tax
  total_tax_amount: number;
}

interface KlarnaOrderPayload {
  purchase_country: string;
  purchase_currency: string;
  locale: string;
  order_amount: number;
  order_tax_amount: number;
  order_lines: KlarnaLineItem[];
  merchant_urls: {
    terms: string;
    checkout: string;
    confirmation: string;
    push: string;
  };
  billing_address?: {
    given_name?: string;
    family_name?: string;
    email?: string;
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      amount,       // total in USD dollars (number)
      description,  // short description for the order
      orderId,      // optional reference ID (e.g., "INV-2026-0001")
      email,        // optional customer email
    } = body;

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json(
        { error: "A positive numeric `amount` (in USD) is required." },
        { status: 400 },
      );
    }

    // Check if Klarna credentials are configured
    if (!KLARNA_USERNAME || !KLARNA_PASSWORD) {
      // Return a stub response so the UI can surface a meaningful message
      // while Klarna credentials are being set up.
      return NextResponse.json(
        {
          status: "not_configured",
          message:
            "Klarna credentials are not yet configured. Set KLARNA_API_USERNAME and KLARNA_API_PASSWORD environment variables to activate Klarna payments.",
          env_vars_needed: [
            "KLARNA_API_USERNAME",
            "KLARNA_API_PASSWORD",
            "KLARNA_API_URL (optional, defaults to playground)",
          ],
        },
        { status: 503 },
      );
    }

    const amountCents = Math.round(amount * 100);

    const origin =
      req.headers.get("origin") ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      "https://axletowing.com";

    const orderPayload: KlarnaOrderPayload = {
      purchase_country: "US",
      purchase_currency: "USD",
      locale: "en-US",
      order_amount: amountCents,
      order_tax_amount: 0,
      order_lines: [
        {
          name: description ?? orderId ?? "Invoice Payment",
          quantity: 1,
          unit_price: amountCents,
          total_amount: amountCents,
          tax_rate: 0,
          total_tax_amount: 0,
        },
      ],
      merchant_urls: {
        terms: `${origin}/terms`,
        checkout: `${origin}/invoice`,
        confirmation: `${origin}/invoice?payment=success&order_id=${orderId ?? ""}`,
        push: `${origin}/api/klarna/confirm`,
      },
      ...(email
        ? { billing_address: { email } }
        : {}),
    };

    // Create Klarna order session
    const klarnaRes = await fetch(
      `${KLARNA_API_URL}/checkout/v3/orders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic " +
            Buffer.from(`${KLARNA_USERNAME}:${KLARNA_PASSWORD}`).toString(
              "base64",
            ),
        },
        body: JSON.stringify(orderPayload),
      },
    );

    if (!klarnaRes.ok) {
      const errText = await klarnaRes.text();
      console.error("[klarna] API error:", klarnaRes.status, errText);
      return NextResponse.json(
        { error: "Klarna order creation failed.", details: errText },
        { status: 502 },
      );
    }

    const klarnaData = await klarnaRes.json();

    // Klarna returns `order_id` and an HTML snippet or redirect URL.
    // For the hosted checkout approach, we redirect to `_links.checkout.href`.
    const checkoutUrl =
      klarnaData?._links?.checkout?.href ?? null;

    return NextResponse.json({
      status: "ok",
      order_id: klarnaData.order_id,
      checkout_url: checkoutUrl,
    });
  } catch (err) {
    console.error("[klarna] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
