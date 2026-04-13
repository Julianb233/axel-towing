import { NextRequest, NextResponse } from 'next/server';
import { SAMPLE_CONTACTS } from '@/lib/data/pipeline-data';

/**
 * CRM Calendar & Follow-up System
 *
 * GET /api/crm/calendar — Returns upcoming follow-ups and quarterly check-ins
 * POST /api/crm/calendar — Schedule a follow-up for a contact
 *
 * Quarterly check-ins are auto-generated for all active accounts.
 * This prevents churn by ensuring no account goes >90 days without contact.
 */

interface FollowUpEvent {
  id: string;
  contactId: string;
  contactName: string;
  company: string;
  type: 'quarterly-checkin' | 'follow-up' | 're-engagement' | 'onboarding';
  scheduledDate: string;
  notes: string;
  completed: boolean;
}

// In-memory store (Supabase in production)
const followUps: FollowUpEvent[] = [];

function generateQuarterlyCheckins(): FollowUpEvent[] {
  const activeAccounts = SAMPLE_CONTACTS.filter(
    (c) => c.stage === 'active-account' || c.stage === 'won',
  );

  const events: FollowUpEvent[] = [];
  const now = new Date();

  for (const account of activeAccounts) {
    // Generate next 4 quarterly check-ins
    for (let q = 0; q < 4; q++) {
      const checkDate = new Date(now);
      checkDate.setMonth(checkDate.getMonth() + 3 * (q + 1));
      checkDate.setHours(9, 0, 0, 0);

      events.push({
        id: `qc-${account.id}-q${q + 1}`,
        contactId: account.id,
        contactName: account.name,
        company: account.company,
        type: 'quarterly-checkin',
        scheduledDate: checkDate.toISOString(),
        notes: `Quarterly account review for ${account.company}. Check enforcement stats, satisfaction, contract renewal.`,
        completed: false,
      });
    }
  }

  return events;
}

function getUpcomingFollowUps(): FollowUpEvent[] {
  const now = new Date();
  const thirtyDaysOut = new Date(now);
  thirtyDaysOut.setDate(thirtyDaysOut.getDate() + 30);

  // Combine scheduled follow-ups with auto-generated quarterly check-ins
  const quarterly = generateQuarterlyCheckins();
  const all = [...followUps, ...quarterly];

  return all
    .filter((e) => {
      const d = new Date(e.scheduledDate);
      return d >= now && d <= thirtyDaysOut && !e.completed;
    })
    .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime());
}

function getOverdueFollowUps(): FollowUpEvent[] {
  const now = new Date();

  // Check contacts that haven't been contacted in 30+ days
  const overdue: FollowUpEvent[] = [];

  for (const contact of SAMPLE_CONTACTS) {
    if (['won', 'active-account', 'lost'].includes(contact.stage)) continue;

    const lastContact = contact.lastContactedAt
      ? new Date(contact.lastContactedAt)
      : new Date(contact.createdAt);

    const daysSinceContact = Math.floor(
      (now.getTime() - lastContact.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (daysSinceContact >= 30) {
      overdue.push({
        id: `overdue-${contact.id}`,
        contactId: contact.id,
        contactName: contact.name,
        company: contact.company,
        type: 're-engagement',
        scheduledDate: now.toISOString(),
        notes: `${daysSinceContact} days since last contact. Re-engage immediately to prevent lead going cold.`,
        completed: false,
      });
    }
  }

  return overdue;
}

export async function GET() {
  const upcoming = getUpcomingFollowUps();
  const overdue = getOverdueFollowUps();

  return NextResponse.json({
    success: true,
    upcoming: upcoming.slice(0, 20),
    overdue,
    summary: {
      upcomingCount: upcoming.length,
      overdueCount: overdue.length,
      nextEvent: upcoming[0] || null,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { contactId, type, scheduledDate, notes } = body as {
      contactId?: string;
      type?: FollowUpEvent['type'];
      scheduledDate?: string;
      notes?: string;
    };

    if (!contactId || !scheduledDate) {
      return NextResponse.json(
        { error: 'contactId and scheduledDate are required' },
        { status: 400 },
      );
    }

    const contact = SAMPLE_CONTACTS.find((c) => c.id === contactId);

    const event: FollowUpEvent = {
      id: `fu-${Date.now().toString(36)}`,
      contactId,
      contactName: contact?.name || 'Unknown',
      company: contact?.company || 'Unknown',
      type: type || 'follow-up',
      scheduledDate,
      notes: notes || '',
      completed: false,
    };

    followUps.push(event);

    console.log(
      `[calendar] Follow-up scheduled: ${event.id} for ${event.contactName} on ${scheduledDate}`,
    );

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error('Calendar API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
