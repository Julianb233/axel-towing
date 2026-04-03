import { NextResponse } from 'next/server';

/**
 * POST /api/klarna/authorize
 *
 * Completes the Klarna Payments authorization after the customer has
 * interacted with the Klarna widget and clicked "Place Order".
 *
 * Flow:
 *   1. Frontend calls Klarna JS SDK: Klarna.Payments.authorize(...)
 *   2. Klarna returns an authorization_token on success
 *   3. Frontend sends authorization_token + order details here
 *   4. We create the Klarna order on the server to finalize the purchase
 *
 * Docs: https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-3-create-an-order/
 *
 * Environment variables required:
 *   KLARNA_API_USERNAME  — Klarna merchant API username
 *   KLARNA_API_PASSWORD  — Klarna merchant API password
 *   KLARNA_API_URL       — Klarna API base URL (defaults to playground)
 */

const KLARNA_API_URL = process.env.KLARNA_API_URL ?? 'https://api.playground.klarna.com';
const KLARNA_USERNAME = process.env.KLARNA_API_USERNAME ?? '';
const KLARNA_PASSWORD = process.env.KLARNA_API_PASSWORD ?? '';

interface AuthorizeRequest {
  authorization_token: string;
  amount: number; // USD dollars
  description: string;
  orderId?: string;
  email?: string;
  givenName?: string;
  familyName?: string;
  phone?: string;
}

export async function POST(req: Request) {
  try {
    const body: AuthorizeRequest = await req.json();
    const {
      authorization_token,
      amount,
      description,
      orderId,
      email,
      givenName,
      familyName,
      phone,
    } = body;

    if (!authorization_token) {
      return NextResponse.json({ error: 'authorization_token is required.' }, { status: 400 });
    }

    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json(
        { error: 'A positive numeric `amount` (in USD) is required.' },
        { status: 400 }
      );
    }

    // Return graceful degradation if credentials not configured
    if (!KLARNA_USERNAME || !KLARNA_PASSWORD) {
      return NextResponse.json(
        {
          status: 'not_configured',
          message: 'Klarna credentials are not yet configured.',
        },
        { status: 503 }
      );
    }

    const amountCents = Math.round(amount * 100);

    const origin =
      req.headers.get('origin') ?? process.env.NEXT_PUBLIC_SITE_URL ?? 'https://axletowing.com';

    const orderPayload = {
      purchase_country: 'US',
      purchase_currency: 'USD',
      locale: 'en-US',
      order_amount: amountCents,
      order_tax_amount: 0,
      order_lines: [
        {
          name: description ?? orderId ?? 'Service Payment',
          quantity: 1,
          unit_price: amountCents,
          total_amount: amountCents,
          tax_rate: 0,
          total_tax_amount: 0,
          type: 'digital',
        },
      ],
      merchant_reference1: orderId ?? undefined,
      merchant_urls: {
        confirmation: `${origin}/invoice?payment=success&order_id=${orderId ?? ''}`,
        notification: `${origin}/api/klarna/confirm`,
      },
      ...(email || givenName || familyName || phone
        ? {
            billing_address: {
              ...(givenName ? { given_name: givenName } : {}),
              ...(familyName ? { family_name: familyName } : {}),
              ...(email ? { email } : {}),
              ...(phone ? { phone } : {}),
            },
          }
        : {}),
    };

    const authHeader =
      'Basic ' + Buffer.from(`${KLARNA_USERNAME}:${KLARNA_PASSWORD}`).toString('base64');

    // Create the order using the authorization token
    const klarnaRes = await fetch(
      `${KLARNA_API_URL}/payments/v1/authorizations/${authorization_token}/order`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader,
        },
        body: JSON.stringify(orderPayload),
      }
    );

    if (!klarnaRes.ok) {
      const errText = await klarnaRes.text();
      console.error('[klarna/authorize] API error:', klarnaRes.status, errText);
      return NextResponse.json(
        { error: 'Klarna order creation failed.', details: errText },
        { status: 502 }
      );
    }

    const orderData = await klarnaRes.json();
    console.log(
      '[klarna/authorize] Order created:',
      orderData.order_id,
      'status:',
      orderData.fraud_status
    );

    return NextResponse.json({
      status: 'ok',
      order_id: orderData.order_id,
      redirect_url: orderData.redirect_url ?? null,
      fraud_status: orderData.fraud_status,
    });
  } catch (err) {
    console.error('[klarna/authorize] Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
