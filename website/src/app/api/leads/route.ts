import { NextResponse } from 'next/server';
import { sendDispatchEmail } from '@/lib/dispatch-email';
import { sendDispatchSms } from '@/lib/dispatch-sms';
import { storeDispatchRequest } from '@/lib/supabase';
import { syncLeadToGHL } from '@/lib/ghl';

/**
 * POST /api/leads
 * Receives lead capture form submissions from various website components:
 * - Exit-intent popup
 * - Floating CTA widget
 * - Homepage multi-step form
 * - Service page inline forms
 *
 * Sends notifications via email + SMS and stores in Supabase.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // At minimum we need a name and one contact method
    const name = body.name || body.contactName || '';
    const email = body.email || '';
    const phone = body.phone || '';
    const source = body.source || 'website';
    const smsConsent = body.smsConsent === true;

    if (!name && !email && !phone) {
      return NextResponse.json(
        { error: 'At least one contact method is required' },
        { status: 400 }
      );
    }

    const referenceId = `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Build a human-readable summary
    const details: string[] = [
      `NEW LEAD — ${source.toUpperCase()}`,
      ``,
      `Reference: ${referenceId}`,
      `Name: ${name || 'Not provided'}`,
      `Email: ${email || 'Not provided'}`,
      `Phone: ${phone || 'Not provided'}`,
    ];

    if (body.propertyType) details.push(`Property Type: ${body.propertyType}`);
    if (body.propertyName) details.push(`Property Name: ${body.propertyName}`);
    if (body.address || body.propertyAddress)
      details.push(`Address: ${body.address || body.propertyAddress}`);
    if (body.units || body.spaces) details.push(`Units/Spaces: ${body.units || body.spaces}`);
    if (body.timeline) details.push(`Timeline: ${body.timeline}`);
    if (body.need) details.push(`Need: ${body.need}`);
    if (body.serviceTitle) details.push(`Service: ${body.serviceTitle}`);
    if (body.vehicleDetails) details.push(`Vehicle Details: ${body.vehicleDetails}`);
    if (body.location) details.push(`Location: ${body.location}`);
    details.push(`SMS Consent: ${smsConsent ? 'YES' : 'NO'}`);

    details.push(``);
    details.push(
      `Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })}`
    );

    const emailBody = details.join('\n');

    // Log the lead
    console.log('=== NEW LEAD ===');
    console.log(emailBody);
    console.log('=================');

    // Send notifications and sync to CRM in parallel
    const [emailResult, smsResult, dbResult, ghlResult] = await Promise.allSettled([
      sendDispatchEmail(
        referenceId,
        `New Lead from ${source} — ${name || email} [${referenceId}]`,
        emailBody
      ),
      sendDispatchSms(
        referenceId,
        `New Lead (${source}): ${name || 'Unknown'}\n${phone || email || 'No contact'}\nRef: ${referenceId}`
      ),
      storeDispatchRequest({
        reference_id: referenceId,
        request_type: 'lead',
        contact_name: name,
        contact_phone: phone,
        contact_email: email,
        property_name: body.propertyName || body.propertyAddress || '',
        property_address: body.address || body.propertyAddress || '',
        urgent: false,
        request_data: { ...body, smsConsent } as Record<string, unknown>,
        status: 'pending',
      }),
      // Sync to GoHighLevel CRM
      syncLeadToGHL({
        name,
        email,
        phone,
        propertyName: body.propertyName || body.propertyAddress,
        propertyType: body.propertyType,
        source,
        timeline: body.timeline,
        units: body.units || body.spaces,
        address: body.address || body.propertyAddress,
        referenceId,
        rawData: body as Record<string, unknown>,
      }),
    ]);

    const results = {
      email:
        emailResult.status === 'fulfilled'
          ? (emailResult.value as { success: boolean }).success
          : false,
      sms:
        smsResult.status === 'fulfilled'
          ? (smsResult.value as { success: boolean }).success
          : false,
      db:
        dbResult.status === 'fulfilled' ? (dbResult.value as { success: boolean }).success : false,
      ghl:
        ghlResult.status === 'fulfilled'
          ? (ghlResult.value as { success: boolean }).success
          : false,
    };
    console.log('Lead integrations:', results);

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Lead received',
    });
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
