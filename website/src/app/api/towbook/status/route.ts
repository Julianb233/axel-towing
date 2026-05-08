import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/towbook/status
 * ───────────────────────
 * TowBook integration status and configuration endpoint.
 * Returns current integration status and available features.
 *
 * Linear: AI-3353
 */

export async function GET(req: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://axletowing.com';

  return NextResponse.json({
    integration: 'towbook',
    status: 'active',
    version: '1.0.0',
    endpoints: {
      managerPortal: 'https://manager.towbook.com',
      staffPortal: 'https://app.towbook.com',
      webhookReceiver: `${baseUrl}/api/towbook/webhook`,
    },
    features: {
      dispatchNotifications: true,
      managerSmsAlerts: true,
      towStatusTracking: true,
      invoiceNotifications: true,
      vehicleReleaseAlerts: true,
    },
    portalAccess: {
      propertyManagers: `${baseUrl}/portal`,
      vehicleLookup: `${baseUrl}/locate-vehicle`,
      towRequest: `${baseUrl}/portal/request`,
    },
    webhookEvents: [
      'tow_created',
      'tow_completed',
      'tow_released',
      'invoice_created',
      'driver_assigned',
      'status_update',
    ],
  });
}
