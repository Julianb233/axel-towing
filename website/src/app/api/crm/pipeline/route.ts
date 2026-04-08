import { NextResponse } from 'next/server';
import {
  SAMPLE_CONTACTS,
  PIPELINE_STAGES,
  getPipelineMetrics,
  type PipelineStage,
} from '@/lib/data/pipeline-data';

/**
 * GET /api/crm/pipeline
 * Returns pipeline stages with contact counts and all contacts.
 */
export async function GET() {
  try {
    const metrics = getPipelineMetrics();

    const stages = PIPELINE_STAGES.map((stage) => ({
      ...stage,
      contacts: SAMPLE_CONTACTS.filter((c) => c.stage === stage.id),
      count: SAMPLE_CONTACTS.filter((c) => c.stage === stage.id).length,
    }));

    return NextResponse.json({
      success: true,
      stages,
      metrics,
      total: SAMPLE_CONTACTS.length,
    });
  } catch (error) {
    console.error('CRM pipeline GET error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/crm/pipeline
 * Move a contact to a different pipeline stage.
 * Body: { contactId: string, stage: PipelineStage }
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { contactId, stage } = body as { contactId: string; stage: PipelineStage };

    if (!contactId || !stage) {
      return NextResponse.json(
        { error: 'contactId and stage are required' },
        { status: 400 }
      );
    }

    const validStages: PipelineStage[] = [
      'new-lead',
      'contacted',
      'consultation-scheduled',
      'proposal-sent',
      'negotiation',
      'won',
      'active-account',
      'lost',
    ];

    if (!validStages.includes(stage)) {
      return NextResponse.json(
        { error: `Invalid stage. Must be one of: ${validStages.join(', ')}` },
        { status: 400 }
      );
    }

    const contact = SAMPLE_CONTACTS.find((c) => c.id === contactId);
    if (!contact) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }

    // In production, this would update GHL via the API and persist to DB
    const updatedContact = {
      ...contact,
      stage,
      updatedAt: new Date().toISOString(),
    };

    console.log(
      `[CRM] Stage update: ${contactId} → ${stage} (GHL sync would happen here)`
    );

    return NextResponse.json({
      success: true,
      contact: updatedContact,
      message: `Contact moved to ${stage}`,
    });
  } catch (error) {
    console.error('CRM pipeline POST error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
