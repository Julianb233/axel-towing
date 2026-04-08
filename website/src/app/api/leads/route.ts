import { NextResponse } from 'next/server';
import { sendDispatchEmail } from '@/lib/dispatch-email';
import { sendDispatchSms } from '@/lib/dispatch-sms';
import { storeDispatchRequest } from '@/lib/supabase';
import { syncLeadToGHL } from '@/lib/ghl';
import { calculateLeadScore, estimateMonthlyValue } from '@/lib/lead-scoring';

/**
 * POST /api/leads
 * Receives lead capture form submissions from various website components:
 * - Exit-intent popup
 * - Floating CTA widget
 * - Homepage multi-step form
 * - Service page inline forms
 *
 * Sends notifications via email + SMS, stores in Supabase, syncs to GHL,
 * calculates lead score, and auto-enrolls into drip sequences.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // At minimum we need a name and one contact method
    const name = body.name || body.contactName || '';
    const email = body.email || '';
    const phone = body.phone || '';
    const source = body.source || 'website';

    if (!name && !email && !phone) {
      return NextResponse.json(
        { error: 'At least one contact method is required' },
        { status: 400 }
      );
    }

    const referenceId = `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Calculate lead score
    const leadScore = calculateLeadScore({
      source,
      propertyType: body.propertyType,
      units: body.units ? Number(body.units) : undefined,
      hasPhoneCalled: source === 'phone',
      timeline: body.timeline,
    });
    const monthlyValue = estimateMonthlyValue({
      propertyType: body.propertyType,
      units: body.units ? Number(body.units) : undefined,
    });

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

    details.push(`Lead Score: ${leadScore.totalScore} (${leadScore.tier})`);
    details.push(`Est. Monthly Value: $${monthlyValue.toLocaleString()}`);
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
        `New Lead (${source}): ${name || 'Unknown'}\n${phone || email || 'No contact'}\nScore: ${leadScore.totalScore} (${leadScore.tier})\nRef: ${referenceId}`
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
        request_data: body as Record<string, unknown>,
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

    // Auto-enroll into drip sequence if email is provided
    if (email) {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://axletowing.com';
        await fetch(`${baseUrl}/api/drip`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            name: name || '',
            sequenceType: 'new-lead-nurture',
            metadata: {
              propertyName: body.propertyName || body.propertyAddress || '',
              source,
              referenceId,
              leadScore: String(leadScore.totalScore),
            },
          }),
        });
        console.log(`[leads] Auto-enrolled ${email} into new-lead-nurture drip`);
      } catch (dripError) {
        console.warn('[leads] Drip auto-enrollment failed:', dripError);
      }
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Lead received',
      leadScore: leadScore.totalScore,
      leadTier: leadScore.tier,
      estimatedMonthlyValue: monthlyValue,
    });
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
