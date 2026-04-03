import { NextRequest, NextResponse } from 'next/server';

const PRINTIFY_API_KEY = process.env.PRINTIFY_API_KEY;
const PRINTIFY_SHOP_ID = process.env.PRINTIFY_SHOP_ID;
const PRINTIFY_BASE_URL = 'https://api.printify.com/v1';

// Mock products for when API key is not configured
const MOCK_PRODUCTS = [
  {
    id: 'mock-001',
    title: 'Custom Branded Mug',
    description: '15oz ceramic mug with full-color Axle Towing logo wrap. Dishwasher safe. Perfect desk gift for HOA managers and property partners.',
    price: 18.99,
    category: 'drinkware',
    useCase: 'HOA Board Gifts, Office Welcome Kits',
    minQty: 10,
    image: null,
    available: true,
  },
  {
    id: 'mock-002',
    title: 'Logo Mouse Pad',
    description: 'Large 12"x10" mouse pad with non-slip rubber base. Full-color logo and contact info print. Keeps Axle Towing top-of-mind on every desk.',
    price: 16.99,
    category: 'office',
    useCase: 'Property Manager Offices, HOA Clubhouses',
    minQty: 10,
    image: null,
    available: true,
  },
  {
    id: 'mock-003',
    title: 'Wireless Charging Pad',
    description: '10W fast wireless charger with Axle Towing logo. Compatible with all Qi-enabled devices. Premium desk gift that gets daily use.',
    price: 34.99,
    category: 'tech',
    useCase: 'VIP Partner Gifts, Leasing Office Desks',
    minQty: 10,
    image: null,
    available: true,
  },
  {
    id: 'mock-004',
    title: 'Branded Candle',
    description: '8oz soy wax candle in branded box. "Clean Lot" cedar & pine scent. Artisan-quality gift that makes a lasting impression with HOA board members.',
    price: 22.99,
    category: 'lifestyle',
    useCase: 'HOA Board Appreciation, Holiday Gifting',
    minQty: 10,
    image: null,
    available: true,
  },
  {
    id: 'mock-005',
    title: 'Parking Permit Door Hanger',
    description: 'Heavy cardstock door hangers with parking permit fields. Perforated tear-off section. Dual-branded with Axle Towing and your property logo.',
    price: 12.99,
    category: 'operational',
    useCase: 'HOA Parking Programs, Apartment Complexes',
    minQty: 50,
    image: null,
    available: true,
  },
  {
    id: 'mock-006',
    title: 'Parking Permit Hang Tag',
    description: 'Durable vinyl hang tags for vehicle windshields. Numbered, UV-resistant, tamper-evident. Pre-punched for easy rearview mirror attachment.',
    price: 24.99,
    category: 'operational',
    useCase: 'Resident Parking Programs, Visitor Passes',
    minQty: 25,
    image: null,
    available: true,
  },
];

// GET - Sync and return products from Printify (or mock data)
export async function GET() {
  if (!PRINTIFY_API_KEY || !PRINTIFY_SHOP_ID) {
    // Return mock data when API key is not configured
    return NextResponse.json({
      products: MOCK_PRODUCTS,
      source: 'mock',
      message: 'Using demo product catalog. Configure PRINTIFY_API_KEY and PRINTIFY_SHOP_ID to sync live products.',
    });
  }

  try {
    const response = await fetch(`${PRINTIFY_BASE_URL}/shops/${PRINTIFY_SHOP_ID}/products.json`, {
      headers: {
        Authorization: `Bearer ${PRINTIFY_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Printify API error: ${response.status}`);
    }

    const data = await response.json();

    // Transform Printify products to our format
    const products = (data.data || []).map((p: Record<string, unknown>) => {
      const variants = Array.isArray(p.variants) ? p.variants : [];
      const images = Array.isArray(p.images) ? p.images : [];
      const firstVariant = variants[0] as Record<string, unknown> | undefined;
      const firstImage = images[0] as Record<string, unknown> | undefined;

      return {
        id: p.id,
        title: p.title,
        description: p.description,
        price: firstVariant ? (firstVariant.price as number) / 100 : 0,
        category: 'merchandise',
        useCase: 'Corporate Gifting',
        minQty: 10,
        image: firstImage ? firstImage.src : null,
        available: p.visible,
      };
    });

    return NextResponse.json({ products, source: 'printify' });
  } catch (error) {
    console.error('Printify sync error:', error);
    // Fall back to mock data on error
    return NextResponse.json({
      products: MOCK_PRODUCTS,
      source: 'mock',
      message: 'Printify API unavailable. Showing demo catalog.',
    });
  }
}

// POST - Create a bulk order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      companyName,
      contactName,
      email,
      phone,
      products,
      quantity,
      shippingAddress,
      customMessage,
    } = body;

    // Validate required fields
    if (!companyName || !contactName || !email || !products || !quantity || !shippingAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (quantity < 10) {
      return NextResponse.json(
        { error: 'Minimum order quantity is 10 units' },
        { status: 400 }
      );
    }

    if (!PRINTIFY_API_KEY || !PRINTIFY_SHOP_ID) {
      // In demo mode, just acknowledge the order
      return NextResponse.json({
        success: true,
        orderId: `DEMO-${Date.now()}`,
        message: 'Your bulk order request has been received. Our team will contact you within 1 business day to confirm details and pricing.',
        estimatedTurnaround: '7-14 business days',
        source: 'mock',
      });
    }

    // If Printify is configured, create the order
    const orderData = {
      label: `Bulk Corporate Gifting — ${companyName}`,
      line_items: products.map((productId: string) => ({
        product_id: productId,
        quantity,
      })),
      shipping_method: 1,
      address_to: {
        first_name: contactName.split(' ')[0] || contactName,
        last_name: contactName.split(' ').slice(1).join(' ') || '',
        email,
        phone,
        country: 'US',
        region: shippingAddress.state,
        address1: shippingAddress.street,
        city: shippingAddress.city,
        zip: shippingAddress.zip,
      },
      metadata: {
        customMessage,
        companyName,
      },
    };

    const response = await fetch(`${PRINTIFY_BASE_URL}/shops/${PRINTIFY_SHOP_ID}/orders.json`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PRINTIFY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Printify order creation failed: ${JSON.stringify(errorData)}`);
    }

    const order = await response.json();

    return NextResponse.json({
      success: true,
      orderId: order.id,
      message: 'Bulk order created successfully.',
      estimatedTurnaround: '7-14 business days',
      source: 'printify',
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create order. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
