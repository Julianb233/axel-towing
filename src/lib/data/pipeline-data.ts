/**
 * Sample pipeline data for the CRM dashboard.
 * Represents realistic HOA/property manager leads across 5 pipeline stages.
 */

export type PipelineStage = 'new-lead' | 'contacted' | 'demo-scheduled' | 'proposal-sent' | 'won' | 'lost';

export type PropertyType = 'HOA' | 'Property Manager' | 'Apartment Complex' | 'Commercial';

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
  source: string;
  units?: number;
  address?: string;
  ghlContactId?: string;
}

export const PIPELINE_STAGES: { id: PipelineStage; label: string; color: string }[] = [
  { id: 'new-lead', label: 'New Lead', color: 'bg-blue-500' },
  { id: 'contacted', label: 'Contacted', color: 'bg-yellow-500' },
  { id: 'demo-scheduled', label: 'Demo Scheduled', color: 'bg-purple-500' },
  { id: 'proposal-sent', label: 'Proposal Sent', color: 'bg-orange-500' },
  { id: 'won', label: 'Won', color: 'bg-green-500' },
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
  },
  {
    id: 'c-005',
    name: 'Jennifer Okafor',
    email: 'jokafor@desertpinesmanagement.com',
    phone: '480-555-0921',
    company: 'Desert Pines Property Management',
    propertyType: 'Property Manager',
    stage: 'demo-scheduled',
    notes: 'Demo set for 3/26 at 2pm. Manages 12 HOAs across Scottsdale/Gilbert. High-value prospect.',
    createdAt: '2026-03-10T13:00:00Z',
    updatedAt: '2026-03-22T09:00:00Z',
    source: 'referral',
    units: 1200,
    address: '7890 E Shea Blvd Suite 110, Scottsdale, AZ 85260',
  },
  {
    id: 'c-006',
    name: 'Robert Nguyen',
    email: 'rnguyen@mesahillshoa.com',
    phone: '480-555-0234',
    company: 'Mesa Hills HOA',
    propertyType: 'HOA',
    stage: 'demo-scheduled',
    notes: 'Board meeting presentation scheduled 3/27. HOA board very engaged.',
    createdAt: '2026-03-12T10:00:00Z',
    updatedAt: '2026-03-21T14:00:00Z',
    source: 'website',
    units: 320,
    address: '2100 S Stapley Dr, Mesa, AZ 85210',
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
  },
  {
    id: 'c-008',
    name: 'David Kim',
    email: 'dkim@parkwaycommercial.com',
    phone: '602-555-0445',
    company: 'Parkway Commercial Properties',
    propertyType: 'Commercial',
    stage: 'proposal-sent',
    notes: 'Office park with 8 buildings. Proposal for full patrol + enforcement contract.',
    createdAt: '2026-03-08T09:00:00Z',
    updatedAt: '2026-03-20T11:00:00Z',
    source: 'cold-outreach',
    address: '1500 S Price Rd, Chandler, AZ 85286',
  },
  {
    id: 'c-009',
    name: 'Patricia Galvez',
    email: 'pgalvez@sunsetvillage.org',
    phone: '623-555-0138',
    company: 'Sunset Village HOA',
    propertyType: 'HOA',
    stage: 'won',
    notes: 'Signed contract 3/15. 180-unit community in Peoria. Starting enforcement 4/1.',
    createdAt: '2026-02-28T10:00:00Z',
    updatedAt: '2026-03-15T14:00:00Z',
    source: 'referral',
    units: 180,
    address: '8900 W Thunderbird Rd, Peoria, AZ 85381',
    ghlContactId: 'ghl-contact-001',
  },
  {
    id: 'c-010',
    name: 'Marcus Johnson',
    email: 'mjohnson@tempeapts.com',
    phone: '480-555-0856',
    company: 'Tempe University Apartments',
    propertyType: 'Apartment Complex',
    stage: 'won',
    notes: 'Signed 3/10. 450-unit student housing near ASU. High-volume enforcement expected.',
    createdAt: '2026-02-20T11:00:00Z',
    updatedAt: '2026-03-10T13:00:00Z',
    source: 'website',
    units: 450,
    address: '800 E Apache Blvd, Tempe, AZ 85281',
    ghlContactId: 'ghl-contact-002',
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
  const won = SAMPLE_CONTACTS.filter((c) => c.stage === 'won').length;
  const closed = SAMPLE_CONTACTS.filter((c) => c.stage === 'won' || c.stage === 'lost').length;
  const conversionRate = closed > 0 ? Math.round((won / closed) * 100) : 0;

  return {
    totalLeads: total,
    thisWeek,
    won,
    conversionRate,
    byStage: PIPELINE_STAGES.map((s) => ({
      ...s,
      count: SAMPLE_CONTACTS.filter((c) => c.stage === s.id).length,
    })),
  };
}
