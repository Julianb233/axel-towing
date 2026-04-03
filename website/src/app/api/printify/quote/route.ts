import { NextRequest, NextResponse } from 'next/server';

const PRINTIFY_API_KEY = process.env.PRINTIFY_API_KEY;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'axletowing@gmail.com';

interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface BulkQuoteBody {
  type: 'bulk';
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  products: string[];
  quantity: number;
  shippingAddress: ShippingAddress;
  customMessage?: string;
}

interface ParkingPermitBody {
  type: 'parking-permit';
  propertyName: string;
  propertyAddress: string;
  contactName: string;
  email: string;
  phone?: string;
  permitType: 'hang-tag' | 'door-hanger';
  numberingStyle: 'sequential' | 'alphanumeric' | 'property-prefix' | 'custom';
  startNumber: string;
  customPrefix?: string;
  quantity: number;
  includeExpiry: boolean;
  expiryYear?: string;
  specialInstructions?: string;
  shippingAddress: ShippingAddress;
}

type QuoteBody = BulkQuoteBody | ParkingPermitBody;

function generateQuoteId(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `QT-${ts}-${rand}`;
}

function validateShippingAddress(address: ShippingAddress): string | null {
  if (!address.street) return 'Shipping street address is required';
  if (!address.city) return 'Shipping city is required';
  if (!address.state) return 'Shipping state is required';
  if (!address.zip) return 'Shipping ZIP code is required';
  return null;
}

// POST - Submit a quote request (bulk order or parking permits)
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as QuoteBody;

    if (!body.type) {
      return NextResponse.json({ error: 'Missing required field: type' }, { status: 400 });
    }

    if (!body.contactName || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields: contactName, email' },
        { status: 400 }
      );
    }

    if (!body.quantity || body.quantity < 1) {
      return NextResponse.json({ error: 'Invalid quantity' }, { status: 400 });
    }

    const addressError = validateShippingAddress(body.shippingAddress);
    if (addressError) {
      return NextResponse.json({ error: addressError }, { status: 400 });
    }

    const quoteId = generateQuoteId();

    if (body.type === 'parking-permit') {
      // Parking permit specific validation
      if (!body.propertyName) {
        return NextResponse.json({ error: 'Property name is required' }, { status: 400 });
      }
      if (!body.propertyAddress) {
        return NextResponse.json({ error: 'Property address is required' }, { status: 400 });
      }

      const minQty = body.permitType === 'hang-tag' ? 25 : 50;
      if (body.quantity < minQty) {
        return NextResponse.json(
          { error: `Minimum order for ${body.permitType} is ${minQty} units` },
          { status: 400 }
        );
      }

      // Log the quote request (in production, this would send an email notification)
      console.log('[Printify Quote] Parking permit order received:', {
        quoteId,
        type: 'parking-permit',
        propertyName: body.propertyName,
        contactName: body.contactName,
        email: body.email,
        permitType: body.permitType,
        quantity: body.quantity,
        notificationEmail: NOTIFICATION_EMAIL,
        printifyConfigured: Boolean(PRINTIFY_API_KEY),
      });

      return NextResponse.json({
        success: true,
        orderId: quoteId,
        message:
          'Your parking permit order has been received. Our team will create a digital proof and contact you within 1 business day.',
        estimatedTurnaround: '7–14 business days after proof approval',
        source: PRINTIFY_API_KEY ? 'printify' : 'mock',
      });
    }

    // Bulk order quote
    const bulkBody = body as BulkQuoteBody;
    if (!bulkBody.companyName) {
      return NextResponse.json({ error: 'Company name is required' }, { status: 400 });
    }
    if (!bulkBody.products || bulkBody.products.length === 0) {
      return NextResponse.json({ error: 'At least one product must be selected' }, { status: 400 });
    }
    if (bulkBody.quantity < 10) {
      return NextResponse.json(
        { error: 'Minimum order quantity is 10 units' },
        { status: 400 }
      );
    }

    // Log the quote request
    console.log('[Printify Quote] Bulk order quote received:', {
      quoteId,
      type: 'bulk',
      companyName: bulkBody.companyName,
      contactName: bulkBody.contactName,
      email: bulkBody.email,
      products: bulkBody.products,
      quantity: bulkBody.quantity,
      notificationEmail: NOTIFICATION_EMAIL,
      printifyConfigured: Boolean(PRINTIFY_API_KEY),
    });

    return NextResponse.json({
      success: true,
      orderId: quoteId,
      message:
        'Your bulk order request has been received. Our team will confirm quantities, branding, and pricing within 1 business day.',
      estimatedTurnaround: '7–14 business days',
      source: PRINTIFY_API_KEY ? 'printify' : 'mock',
    });
  } catch (error) {
    console.error('[Printify Quote] Error processing quote:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}

// GET - Health check / status
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    printifyConfigured: Boolean(PRINTIFY_API_KEY),
    message: PRINTIFY_API_KEY
      ? 'Printify API is configured'
      : 'Printify API key not set — operating in demo mode',
  });
}
