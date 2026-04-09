/**
 * Pipeline data for the CRM dashboard.
 * 8-stage pipeline: New Lead → Contacted → Consultation Scheduled → Proposal Sent → Negotiation → Won → Active Account → Lost
 */

export type PipelineStage =
  | 'new-lead'
  | 'contacted'
  | 'consultation-scheduled'
  | 'proposal-sent'
  | 'negotiation'
  | 'won'
  | 'active-account'
  | 'lost';

export type PropertyType = 'HOA' | 'Property Manager' | 'Apartment Complex' | 'Commercial';

export type LeadSource =
  | 'website'
  | 'referral'
  | 'google'
  | 'cold-outreach'
  | 'phone'
  | 'linkedin'
  | 'instagram'
  | 'facebook'
  | 'newsletter'
  | 'crm-dashboard';

export interface PipelineContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  propertyType: PropertyType;
  stage: PipelineStage;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  source: LeadSource | string;
  units?: number;
  address?: string;
  ghlContactId?: string;
  leadScore?: number;
  estimatedMonthlyValue?: number;
  nextFollowUp?: string;
  lastContactedAt?: string;
}

export const PIPELINE_STAGES: { id: PipelineStage; label: string; color: string }[] = [
  { id: 'new-lead', label: 'New Lead', color: 'bg-blue-500' },
  { id: 'contacted', label: 'Contacted', color: 'bg-yellow-500' },
  { id: 'consultation-scheduled', label: 'Consultation Scheduled', color: 'bg-purple-500' },
  { id: 'proposal-sent', label: 'Proposal Sent', color: 'bg-orange-500' },
  { id: 'negotiation', label: 'Negotiation', color: 'bg-cyan-500' },
  { id: 'won', label: 'Won', color: 'bg-green-500' },
  { id: 'active-account', label: 'Active Account', color: 'bg-emerald-500' },
  { id: 'lost', label: 'Lost', color: 'bg-red-500' },
];

export const SAMPLE_CONTACTS: PipelineContact[] = [
  {
    id: 'c-001',
    name: 'Sandra Martinez',
    email: 'smartinez@sunridgehoa.org',
    phone: '480-555-0192',
    company: 'Sun Ridge HOA',
    propertyType: 'HOA',
    stage: 'new-lead',
    notes: 'Submitted via website form. 240-unit community. Has ongoing unauthorized parking issues.',
    createdAt: '2026-03-20T09:15:00Z',
    updatedAt: '2026-03-20T09:15:00Z',
    source: 'website',
    units: 240,
    address: '4500 E Baseline Rd, Gilbert, AZ 85234',
    leadScore: 55,
    estimatedMonthlyValue: 2400,
  },
  {
    id: 'c-002',
    name: 'Tom Breckenridge',
    email: 'tbreckenridge@arizonarealty.com',
    phone: '602-555-0347',
    company: 'Arizona Realty Group',
    propertyType: 'Property Manager',
    stage: 'new-lead',
    notes: 'Manages 6 apartment complexes in Phoenix metro. Looking for single vendor.',
    createdAt: '2026-03-21T14:30:00Z',
    updatedAt: '2026-03-21T14:30:00Z',
    source: 'referral',
    units: 850,
    address: '1234 N 32nd St, Phoenix, AZ 85008',
    leadScore: 75,
    estimatedMonthlyValue: 8500,
  },
  {
    id: 'c-003',
    name: 'Maria Espinoza',
    email: 'mespinoza@crestviewapts.com',
    phone: '480-555-0518',
    company: 'Crestview Apartments',
    propertyType: 'Apartment Complex',
    stage: 'contacted',
    notes: 'Called back on 3/19. Very interested. Had issues with previous towing company.',
    createdAt: '2026-03-17T11:00:00Z',
    updatedAt: '2026-03-19T15:45:00Z',
    source: 'google',
    units: 180,
    address: '789 W University Dr, Mesa, AZ 85201',
    leadScore: 45,
    estimatedMonthlyValue: 1800,
    lastContactedAt: '2026-03-19T15:45:00Z',
  },
  {
    id: 'c-004',
    name: 'Kevin Walsh',
    email: 'kwalsh@phoenixplaza.com',
    phone: '602-555-0763',
    company: 'Phoenix Plaza Commercial Center',
    propertyType: 'Commercial',
    stage: 'contacted',
    notes: 'Shopping center with 45 retail units. Frequent unauthorized overnight parking.',
    createdAt: '2026-03-15T08:00:00Z',
    updatedAt: '2026-03-18T10:20:00Z',
    source: 'website',
    address: '3300 W Camelback Rd, Phoenix, AZ 85017',
    leadScore: 40,
    estimatedMonthlyValue: 3500,
    lastContactedAt: '2026-03-18T10:20:00Z',
  },
  {
    id: 'c-005',
    name: 'Jennifer Okafor',
    email: 'jokafor@desertpinesmanagement.com',
    phone: '480-555-0921',
    company: 'Desert Pines Property Management',
    propertyType: 'Property Manager',
    stage: 'consultation-scheduled',
    notes: 'Consultation set for 3/26 at 2pm. Manages 12 HOAs across Scottsdale/Gilbert. High-value prospect.',
    createdAt: '2026-03-10T13:00:00Z',
    updatedAt: '2026-03-22T09:00:00Z',
    source: 'referral',
    units: 1200,
    address: '7890 E Shea Blvd Suite 110, Scottsdale, AZ 85260',
    leadScore: 85,
    estimatedMonthlyValue: 12000,
    lastContactedAt: '2026-03-22T09:00:00Z',
    nextFollowUp: '2026-03-26T14:00:00Z',
  },
  {
    id: 'c-006',
    name: 'Robert Nguyen',
    email: 'rnguyen@mesahillshoa.com',
    phone: '480-555-0234',
    company: 'Mesa Hills HOA',
    propertyType: 'HOA',
    stage: 'consultation-scheduled',
    notes: 'Board meeting presentation scheduled 3/27. HOA board very engaged.',
    createdAt: '2026-03-12T10:00:00Z',
    updatedAt: '2026-03-21T14:00:00Z',
    source: 'website',
    units: 320,
    address: '2100 S Stapley Dr, Mesa, AZ 85210',
    leadScore: 60,
    estimatedMonthlyValue: 3200,
    lastContactedAt: '2026-03-21T14:00:00Z',
    nextFollowUp: '2026-03-27T10:00:00Z',
  },
  {
    id: 'c-007',
    name: 'Ashley Thompson',
    email: 'athompson@chandlerresidences.com',
    phone: '480-555-0677',
    company: 'Chandler Residences LLC',
    propertyType: 'Apartment Complex',
    stage: 'proposal-sent',
    notes: 'Proposal sent 3/18. 2 complexes with 260 units total. Awaiting board approval.',
    createdAt: '2026-03-05T15:00:00Z',
    updatedAt: '2026-03-18T16:30:00Z',
    source: 'google',
    units: 260,
    address: '4567 W Ray Rd, Chandler, AZ 85226',
    leadScore: 50,
    estimatedMonthlyValue: 2600,
    lastContactedAt: '2026-03-18T16:30:00Z',
  },
  {
    id: 'c-008',
    name: 'David Kim',
    email: 'dkim@parkwaycommercial.com',
    phone: '602-555-0445',
    company: 'Parkway Commercial Properties',
    propertyType: 'Commercial',
    stage: 'negotiation',
    notes: 'Office park with 8 buildings. Counter-offered on patrol frequency. Close to signing.',
    createdAt: '2026-03-08T09:00:00Z',
    updatedAt: '2026-03-20T11:00:00Z',
    source: 'cold-outreach',
    address: '1500 S Price Rd, Chandler, AZ 85286',
    leadScore: 70,
    estimatedMonthlyValue: 5000,
    lastContactedAt: '2026-03-20T11:00:00Z',
  },
  {
    id: 'c-009',
    name: 'Patricia Galvez',
    email: 'pgalvez@sunsetvillage.org',
    phone: '623-555-0138',
    company: 'Sunset Village HOA',
    propertyType: 'HOA',
    stage: 'active-account',
    notes: 'Signed contract 3/15. 180-unit community in Peoria. Enforcement active since 4/1.',
    createdAt: '2026-02-28T10:00:00Z',
    updatedAt: '2026-04-01T08:00:00Z',
    source: 'referral',
    units: 180,
    address: '8900 W Thunderbird Rd, Peoria, AZ 85381',
    ghlContactId: 'ghl-contact-001',
    leadScore: 95,
    estimatedMonthlyValue: 1800,
    nextFollowUp: '2026-07-01T09:00:00Z',
  },
  {
    id: 'c-010',
    name: 'Marcus Johnson',
    email: 'mjohnson@tempeapts.com',
    phone: '480-555-0856',
    company: 'Tempe University Apartments',
    propertyType: 'Apartment Complex',
    stage: 'active-account',
    notes: 'Signed 3/10. 450-unit student housing near ASU. High-volume enforcement expected.',
    createdAt: '2026-02-20T11:00:00Z',
    updatedAt: '2026-03-10T13:00:00Z',
    source: 'website',
    units: 450,
    address: '800 E Apache Blvd, Tempe, AZ 85281',
    ghlContactId: 'ghl-contact-002',
    leadScore: 90,
    estimatedMonthlyValue: 4500,
    nextFollowUp: '2026-06-10T09:00:00Z',
  },
];

export function getContactsByStage(stage: PipelineStage): PipelineContact[] {
  return SAMPLE_CONTACTS.filter((c) => c.stage === stage);
}

export function getPipelineMetrics() {
  const total = SAMPLE_CONTACTS.length;
  const thisWeek = SAMPLE_CONTACTS.filter((c) => {
    const created = new Date(c.createdAt);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return created >= weekAgo;
  }).length;
  const activeAccounts = SAMPLE_CONTACTS.filter((c) => c.stage === 'active-account').length;
  const won = SAMPLE_CONTACTS.filter((c) => c.stage === 'won' || c.stage === 'active-account').length;
  const closed = SAMPLE_CONTACTS.filter(
    (c) => c.stage === 'won' || c.stage === 'active-account' || c.stage === 'lost',
  ).length;
  const conversionRate = closed > 0 ? Math.round((won / closed) * 100) : 0;

  const pipelineValue = SAMPLE_CONTACTS.filter(
    (c) => !['won', 'active-account', 'lost'].includes(c.stage),
  ).reduce((sum, c) => sum + (c.estimatedMonthlyValue || 0), 0);

  const activeMonthlyRevenue = SAMPLE_CONTACTS.filter(
    (c) => c.stage === 'active-account',
  ).reduce((sum, c) => sum + (c.estimatedMonthlyValue || 0), 0);

  const hotLeads = SAMPLE_CONTACTS.filter((c) => (c.leadScore || 0) >= 50).length;

  // Source breakdown
  const sourceMap: Record<string, number> = {};
  for (const c of SAMPLE_CONTACTS) {
    const src = c.source || 'unknown';
    sourceMap[src] = (sourceMap[src] || 0) + 1;
  }
  const bySources = Object.entries(sourceMap)
    .map(([source, count]) => ({ source, count }))
    .sort((a, b) => b.count - a.count);

  return {
    totalLeads: total,
    thisWeek,
    won,
    activeAccounts,
    conversionRate,
    pipelineValue,
    activeMonthlyRevenue,
    hotLeads,
    byStage: PIPELINE_STAGES.map((s) => ({
      ...s,
      count: SAMPLE_CONTACTS.filter((c) => c.stage === s.id).length,
    })),
    bySources,
  };
}
