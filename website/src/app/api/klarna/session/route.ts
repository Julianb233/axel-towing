import { NextResponse } from 'next/server';

/**
 * POST /api/klarna/session
 *
 * Creates a Klarna Payments session for the embedded/widget checkout flow.
 * Returns a client_token that the frontend uses to load the Klarna JS widget.
 *
 * This is different from the Klarna Checkout (hosted page) flow — this allows
 * embedding Klarna's payment UI directly in the invoice/proposal page.
 *
 * Docs: https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/
 *
 * Environment variables required:
 *   KLARNA_API_USERNAME  — Klarna merchant API username
 *   KLARNA_API_PASSWORD  — Klarna merchant API password
 *   KLARNA_API_URL       — Klarna API base URL (defaults to playground)
 */

const KLARNA_API_URL = process.env.KLARNA_API_URL ?? 'https://api.playground.klarna.com';
const KLARNA_USERNAME = process.env.KLARNA_API_USERNAME ?? '';
const KLARNA_PASSWORD = process.env.KLARNA_API_PASSWORD ?? '';

interface SessionOrderLine {
  name: string;
  quantity: number;
  unit_price: number; // in cents
  total_amount: number; // in cents
  tax_rate: number;
  total_tax_amount: number;
  type?:
    | 'physical'
    | 'discount'
    | 'shipping_fee'
    | 'sales_tax'
    | 'digital'
    | 'gift_card'
    | 'store_credit'
    | 'surcharge';
}

interface CreateSessionRequest {
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
    const body: CreateSessionRequest = await req.json();
    const { amount, description, orderId, email, givenName, familyName, phone } = body;

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
          message:
            'Klarna credentials are not yet configured. Set KLARNA_API_USERNAME and KLARNA_API_PASSWORD to activate.',
          env_vars_needed: [
            'KLARNA_API_USERNAME',
            'KLARNA_API_PASSWORD',
            'KLARNA_API_URL (optional, defaults to playground)',
          ],
        },
        { status: 503 }
      );
    }

    const amountCents = Math.round(amount * 100);

    const orderLine: SessionOrderLine = {
      name: description ?? orderId ?? 'Service Payment',
      quantity: 1,
      unit_price: amountCents,
      total_amount: amountCents,
      tax_rate: 0,
      total_tax_amount: 0,
      type: 'digital',
    };

    const sessionPayload = {
      purchase_country: 'US',
      purchase_currency: 'USD',
      locale: 'en-US',
      order_amount: amountCents,
      order_tax_amount: 0,
      order_lines: [orderLine],
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
      intent: 'buy',
    };

    const authHeader =
      'Basic ' + Buffer.from(`${KLARNA_USERNAME}:${KLARNA_PASSWORD}`).toString('base64');

    const klarnaRes = await fetch(`${KLARNA_API_URL}/payments/v1/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
      body: JSON.stringify(sessionPayload),
    });

    if (!klarnaRes.ok) {
      const errText = await klarnaRes.text();
      console.error('[klarna/session] API error:', klarnaRes.status, errText);
      return NextResponse.json(
        { error: 'Failed to create Klarna session.', details: errText },
        { status: 502 }
      );
    }

    const sessionData = await klarnaRes.json();

    return NextResponse.json({
      status: 'ok',
      session_id: sessionData.session_id,
      client_token: sessionData.client_token,
      payment_method_categories: sessionData.payment_method_categories ?? [],
    });
  } catch (err) {
    console.error('[klarna/session] Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
