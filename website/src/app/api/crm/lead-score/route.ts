import { NextRequest, NextResponse } from 'next/server';
import { calculateLeadScore, estimateMonthlyValue } from '@/lib/lead-scoring';

/**
 * POST /api/crm/lead-score
 * Calculate the lead score for given input parameters.
 *
 * Body: { source, propertyType, units, isHOABoardMember, hasPhoneCalled, timeline, ... }
 * Returns: { totalScore, tier, breakdown, estimatedMonthlyValue }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const score = calculateLeadScore({
      source: body.source,
      propertyType: body.propertyType,
      units: body.units,
      isHOABoardMember: body.isHOABoardMember,
      hasPhoneCalled: body.hasPhoneCalled,
      formSubmissions: body.formSubmissions,
      emailsOpened: body.emailsOpened,
      linksClicked: body.linksClicked,
      isPropertyManager: body.isPropertyManager || body.propertyType === 'Property Manager',
      multipleProperties: body.multipleProperties,
      timeline: body.timeline,
    });

    const monthlyValue = estimateMonthlyValue({
      propertyType: body.propertyType,
      units: body.units,
    });

    return NextResponse.json({
      success: true,
      ...score,
      estimatedMonthlyValue: monthlyValue,
    });
  } catch (error) {
    console.error('Lead score API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
