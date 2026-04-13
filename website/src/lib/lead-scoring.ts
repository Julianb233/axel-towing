/**
 * Lead Scoring System for Axle Towing CRM
 *
 * Scores leads based on engagement signals and property data.
 * Hot lead threshold: 50+ points.
 *
 * Scoring rules (from CRM spec):
 *   - Website form submission: +20
 *   - Phone call: +25
 *   - 200+ units: +15
 *   - Referral source: +30
 *   - HOA board member: +15
 *   - Email opened (future): +5
 *   - Link clicked (future): +10
 *   - Property manager (multi-property): +20
 */

export interface LeadScoringInput {
  source?: string;
  propertyType?: string;
  units?: number;
  isHOABoardMember?: boolean;
  hasPhoneCalled?: boolean;
  formSubmissions?: number;
  emailsOpened?: number;
  linksClicked?: number;
  isPropertyManager?: boolean;
  multipleProperties?: boolean;
  timeline?: string;
}

export interface LeadScoreResult {
  totalScore: number;
  tier: 'hot' | 'warm' | 'cold';
  breakdown: { rule: string; points: number }[];
}

const SCORING_RULES: {
  name: string;
  points: number;
  test: (input: LeadScoringInput) => boolean;
}[] = [
  {
    name: 'Website form submission',
    points: 20,
    test: (i) =>
      (i.formSubmissions ?? 0) > 0 ||
      ['website', 'homepage-lead-capture', 'service-page', 'inline-form', 'exit-intent', 'floating-cta'].includes(
        i.source || '',
      ),
  },
  {
    name: 'Phone call',
    points: 25,
    test: (i) => i.hasPhoneCalled === true || i.source === 'phone',
  },
  {
    name: '200+ units property',
    points: 15,
    test: (i) => (i.units ?? 0) >= 200,
  },
  {
    name: 'Referral source',
    points: 30,
    test: (i) => i.source === 'referral',
  },
  {
    name: 'HOA board member',
    points: 15,
    test: (i) => i.isHOABoardMember === true || i.propertyType === 'HOA',
  },
  {
    name: 'Property manager (multi-property)',
    points: 20,
    test: (i) =>
      i.isPropertyManager === true ||
      i.multipleProperties === true ||
      i.propertyType === 'Property Manager',
  },
  {
    name: 'Immediate timeline',
    points: 15,
    test: (i) => i.timeline === 'immediately' || i.timeline === 'this-week',
  },
  {
    name: 'Email engagement',
    points: 5,
    test: (i) => (i.emailsOpened ?? 0) > 0,
  },
  {
    name: 'Link click engagement',
    points: 10,
    test: (i) => (i.linksClicked ?? 0) > 0,
  },
];

export function calculateLeadScore(input: LeadScoringInput): LeadScoreResult {
  const breakdown: { rule: string; points: number }[] = [];
  let totalScore = 0;

  for (const rule of SCORING_RULES) {
    if (rule.test(input)) {
      breakdown.push({ rule: rule.name, points: rule.points });
      totalScore += rule.points;
    }
  }

  const tier: 'hot' | 'warm' | 'cold' =
    totalScore >= 50 ? 'hot' : totalScore >= 25 ? 'warm' : 'cold';

  return { totalScore, tier, breakdown };
}

/**
 * Estimate monthly revenue value based on property type and units.
 * Base rates are approximate per-unit monthly values for parking enforcement.
 */
export function estimateMonthlyValue(params: {
  propertyType?: string;
  units?: number;
}): number {
  const { propertyType, units } = params;
  const unitCount = units || 100; // default assumption

  const ratePerUnit: Record<string, number> = {
    HOA: 10,
    'Property Manager': 10,
    'Apartment Complex': 10,
    Commercial: 15,
  };

  const rate = ratePerUnit[propertyType || ''] || 10;
  return unitCount * rate;
}
