/**
 * GoHighLevel (GHL) CRM Integration
 *
 * Sends leads and contacts to GHL via their REST API (v1).
 * GHL is included free in the Axle Towing package.
 *
 * API Docs: https://highlevel.stoplight.io/docs/integrations/
 *
 * Environment variables needed:
 *   GHL_API_KEY            — Location API key from GHL (Settings > API Keys)
 *   GHL_LOCATION_ID        — Location ID from GHL (Settings > Business Profile)
 *   GHL_PIPELINE_ID        — Pipeline ID for lead tracking (optional)
 *   GHL_STAGE_NEW_LEAD_ID  — Stage ID for "New Lead" stage (optional)
 */

const GHL_BASE_URL = 'https://rest.gohighlevel.com/v1';

interface GHLContact {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  website?: string;
  tags?: string[];
  source?: string;
  customField?: Record<string, string>;
}

interface GHLContactResponse {
  contact: {
    id: string;
    locationId: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    tags: string[];
  };
}

interface GHLOpportunity {
  pipelineId: string;
  stageId: string;
  title: string;
  contactId: string;
  status?: 'open' | 'won' | 'lost' | 'abandoned';
  monetaryValue?: number;
  assignedTo?: string;
  source?: string;
}

/**
 * Split a full name into first and last name parts.
 */
function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 0) return { firstName: '', lastName: '' };
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ');
  return { firstName, lastName };
}

/**
 * Build GHL tags based on lead source and property data.
 */
function buildTags(params: {
  source?: string;
  propertyType?: string;
  urgency?: string;
  timeline?: string;
}): string[] {
  const tags: string[] = [];

  // Source tag
  if (params.source) {
    const sourceMap: Record<string, string> = {
      'homepage-lead-capture': 'src-website-form',
      'contact-form': 'src-website-form',
      'service-page': 'src-website-form',
      'inline-form': 'src-website-form',
      'exit-intent': 'src-website-form',
      'floating-cta': 'src-website-form',
      chatbot: 'src-website-form',
      'tow-request': 'src-website-form',
      referral: 'src-referral',
      phone: 'src-phone-call',
    };
    tags.push(sourceMap[params.source] || 'src-website-form');
  }

  // Property type tag
  if (params.propertyType) {
    const typeMap: Record<string, string> = {
      apartment: 'type-apartment',
      hoa: 'type-hoa',
      commercial: 'type-commercial',
      retail: 'type-retail',
      industrial: 'type-industrial',
      office: 'type-office',
      'mixed-use': 'type-mixed-use',
    };
    const typeTag = typeMap[params.propertyType.toLowerCase()];
    if (typeTag) tags.push(typeTag);
  }

  // Pipeline stage
  tags.push('stage-new-lead');

  // Priority based on timeline
  if (params.timeline === 'immediately') {
    tags.push('priority-hot');
  } else if (params.timeline === 'this-week') {
    tags.push('priority-warm');
  } else {
    tags.push('priority-cold');
  }

  // Active sequence
  tags.push('seq-new-lead-nurture');

  return tags;
}

/**
 * Create or update a contact in GoHighLevel.
 * Uses upsert behavior — if contact with same email already exists, it updates.
 */
export async function createGHLContact(params: {
  name?: string;
  email?: string;
  phone?: string;
  propertyName?: string;
  propertyType?: string;
  source?: string;
  timeline?: string;
  units?: string | number;
  address?: string;
  notes?: string;
}): Promise<{ success: boolean; contactId?: string; error?: string }> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    console.warn('[GHL] GHL_API_KEY or GHL_LOCATION_ID not set — skipping GHL sync');
    return { success: false, error: 'GHL credentials not configured' };
  }

  try {
    const { firstName, lastName } = splitName(params.name || '');
    const tags = buildTags({
      source: params.source,
      propertyType: params.propertyType,
      timeline: params.timeline,
    });

    // Build custom fields for Axle Towing-specific data
    const customField: Record<string, string> = {};
    if (params.propertyName) customField['Property Name'] = params.propertyName;
    if (params.propertyType) customField['Property Type'] = params.propertyType;
    if (params.units) customField['Number of Units'] = String(params.units);

    const contact: GHLContact = {
      firstName,
      lastName,
      email: params.email,
      phone: params.phone,
      companyName: params.propertyName,
      address1: params.address,
      tags,
      source: 'Website',
      customField,
    };

    // Remove undefined fields
    Object.keys(contact).forEach((key) => {
      if ((contact as Record<string, unknown>)[key] === undefined) {
        delete (contact as Record<string, unknown>)[key];
      }
    });

    const response = await fetch(`${GHL_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[GHL] Failed to create contact: ${response.status} ${errorText}`);
      return { success: false, error: `GHL API error: ${response.status}` };
    }

    const data = (await response.json()) as GHLContactResponse;
    console.log(`[GHL] Contact created: ${data.contact.id}`);
    return { success: true, contactId: data.contact.id };
  } catch (error) {
    console.error('[GHL] Error creating contact:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Add a note to an existing GHL contact.
 * Useful for logging form submission details alongside the contact.
 */
export async function addGHLNote(
  contactId: string,
  note: string
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.GHL_API_KEY;

  if (!apiKey) {
    return { success: false, error: 'GHL credentials not configured' };
  }

  try {
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ body: note }),
    });

    if (!response.ok) {
      return { success: false, error: `GHL API error: ${response.status}` };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}

/**
 * Create an opportunity (pipeline deal) in GHL for a qualified lead.
 * Requires GHL_PIPELINE_ID and GHL_STAGE_NEW_LEAD_ID to be configured.
 *
 * GHL v1 API: POST /pipelines/{pipelineId}/opportunities
 */
export async function createGHLOpportunity(params: {
  contactId: string;
  title: string;
  propertyName?: string;
  estimatedValue?: number;
}): Promise<{ success: boolean; opportunityId?: string; error?: string }> {
  const apiKey = process.env.GHL_API_KEY;
  const pipelineId = process.env.GHL_PIPELINE_ID;
  const stageId = process.env.GHL_STAGE_NEW_LEAD_ID;

  if (!apiKey || !pipelineId || !stageId) {
    // Pipeline IDs are optional — contact creation is the primary action
    console.warn('[GHL] GHL_PIPELINE_ID or GHL_STAGE_NEW_LEAD_ID not set — skipping opportunity');
    return { success: false, error: 'GHL pipeline config not set' };
  }

  try {
    const opportunity: GHLOpportunity = {
      pipelineId,
      stageId,
      title: params.title,
      contactId: params.contactId,
      status: 'open',
      monetaryValue: params.estimatedValue,
      source: 'Website',
    };

    // GHL v1: POST /pipelines/{pipelineId}/opportunities
    const response = await fetch(
      `${GHL_BASE_URL}/pipelines/${pipelineId}/opportunities`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(opportunity),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[GHL] Failed to create opportunity: ${response.status} ${errorText}`);
      return { success: false, error: `GHL API error: ${response.status}` };
    }

    const data = (await response.json()) as { opportunity?: { id: string } };
    const opportunityId = data.opportunity?.id;
    console.log(`[GHL] Opportunity created: ${opportunityId}`);
    return { success: true, opportunityId };
  } catch (error) {
    console.error('[GHL] Error creating opportunity:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Full lead sync to GHL:
 * 1. Create/update contact
 * 2. Add a note with form details
 * 3. Create an opportunity in the pipeline (if pipeline is configured)
 *
 * This is the main function called from the leads API route.
 */
export async function syncLeadToGHL(params: {
  name?: string;
  email?: string;
  phone?: string;
  propertyName?: string;
  propertyType?: string;
  source?: string;
  timeline?: string;
  units?: string | number;
  address?: string;
  message?: string;
  referenceId?: string;
  rawData?: Record<string, unknown>;
}): Promise<{ success: boolean; contactId?: string; error?: string }> {
  // Step 1: Create contact
  const contactResult = await createGHLContact(params);

  if (!contactResult.success || !contactResult.contactId) {
    return contactResult;
  }

  const contactId = contactResult.contactId;

  // Step 2: Add a note with context
  const noteLines = [
    `Lead Reference: ${params.referenceId || 'N/A'}`,
    `Source: ${params.source || 'website'}`,
    `Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })} (Phoenix time)`,
  ];
  if (params.propertyName) noteLines.push(`Property: ${params.propertyName}`);
  if (params.propertyType) noteLines.push(`Property Type: ${params.propertyType}`);
  if (params.units) noteLines.push(`Units/Spaces: ${params.units}`);
  if (params.address) noteLines.push(`Address: ${params.address}`);
  if (params.timeline) noteLines.push(`Timeline: ${params.timeline}`);
  if (params.message) noteLines.push(`\nMessage:\n${params.message}`);

  await addGHLNote(contactId, noteLines.join('\n'));

  // Step 3: Create opportunity (optional — only if pipeline is configured)
  const opportunityTitle = params.propertyName
    ? `${params.propertyName} — Parking Enforcement`
    : `New Lead — ${params.name || params.email || 'Unknown'}`;

  await createGHLOpportunity({
    contactId,
    title: opportunityTitle,
    propertyName: params.propertyName,
  });

  return { success: true, contactId };
}

/**
 * Send lead data to a GHL inbound webhook.
 *
 * This is an alternative/supplementary sync path alongside the REST API.
 * GHL inbound webhooks can trigger workflows directly without needing API keys.
 *
 * To set up:
 * 1. In GHL: Automation > Workflows > Create Workflow
 * 2. Add trigger: "Inbound Webhook"
 * 3. Copy the webhook URL and set GHL_WEBHOOK_URL in environment variables
 * 4. Map fields in the workflow as needed (name, email, phone, etc.)
 *
 * Format: https://services.leadconnectorhq.com/hooks/WEBHOOK_ID
 */
export async function sendLeadToGHLWebhook(params: {
  name?: string;
  email?: string;
  phone?: string;
  propertyName?: string;
  propertyType?: string;
  source?: string;
  timeline?: string;
  units?: string | number;
  address?: string;
  message?: string;
  referenceId?: string;
}): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    // Not an error — webhook is optional. REST API is the primary path.
    return { success: false, error: 'GHL_WEBHOOK_URL not configured (optional)' };
  }

  try {
    const payload = {
      // Standard fields GHL workflows expect
      firstName: params.name?.split(' ')[0] || '',
      lastName: params.name?.split(' ').slice(1).join(' ') || '',
      full_name: params.name || '',
      email: params.email || '',
      phone: params.phone || '',
      // Axle Towing-specific fields
      property_name: params.propertyName || '',
      property_type: params.propertyType || '',
      source: params.source || 'website',
      timeline: params.timeline || '',
      parking_spaces: params.units ? String(params.units) : '',
      address: params.address || '',
      message: params.message || '',
      reference_id: params.referenceId || '',
      submitted_at: new Date().toISOString(),
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[GHL Webhook] Failed: ${response.status} ${errorText}`);
      return { success: false, error: `Webhook error: ${response.status}` };
    }

    console.log(`[GHL Webhook] Lead sent: ${params.referenceId}`);
    return { success: true };
  } catch (error) {
    console.error('[GHL Webhook] Error:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Fetch pipeline info from GHL to auto-discover pipeline/stage IDs.
 * Useful for setup verification — call from /api/health or admin tooling.
 *
 * GHL v1 API: GET /pipelines
 */
export async function getGHLPipelines(): Promise<{
  success: boolean;
  pipelines?: Array<{
    id: string;
    name: string;
    stages: Array<{ id: string; name: string }>;
  }>;
  error?: string;
}> {
  const apiKey = process.env.GHL_API_KEY;
  if (!apiKey) {
    return { success: false, error: 'GHL_API_KEY not configured' };
  }

  try {
    const response = await fetch(`${GHL_BASE_URL}/pipelines`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    if (!response.ok) {
      return { success: false, error: `GHL API error: ${response.status}` };
    }

    const data = (await response.json()) as {
      pipelines?: Array<{
        id: string;
        name: string;
        stages: Array<{ id: string; name: string }>;
      }>;
    };

    return { success: true, pipelines: data.pipelines || [] };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}
