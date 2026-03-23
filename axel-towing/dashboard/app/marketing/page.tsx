"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import PageHeader from "../../components/PageHeader";

/* ── Types ─────────────────────────────────────────── */

interface ApprovalState {
  status: "pending" | "approved" | "changes-requested";
  comment?: string;
}

interface WorkflowStepState {
  status: "pending" | "approved" | "in-progress" | "complete";
  scheduledDate?: string;
}

type SectionTab = "templates" | "workflows" | "materials";

interface GhlDeployState {
  isOpen: boolean;
  templateId: string | null;
  templateTitle: string;
  templateCategory: string;
  templateCopy: string;
  status: "idle" | "deploying" | "success" | "error";
  message: string;
}

interface GhlConnectionStatus {
  connected: boolean;
  configured: boolean;
  message?: string;
  error?: string;
}

/* ── Data ──────────────────────────────────────────── */

const STORAGE_KEY = "axle-portal-marketing-templates";
const WORKFLOW_STORAGE_KEY = "axle-portal-marketing-workflows";
const MATERIALS_STORAGE_KEY = "axle-portal-marketing-materials";

const messageTemplates = [
  {
    id: "tpl-referral-locksmith",
    category: "Referral Partner Intro Emails",
    title: "Locksmith Partnership Introduction",
    copy: `Hi [Name],\n\nI'm Elliott with Axle Towing & Impound here in the Phoenix metro. We handle towing, impound, and roadside services for property managers, HOAs, and commercial lots across the Valley.\n\nA lot of our calls come in alongside lockout situations — and we'd love to start referring our customers your way when they need a locksmith. In return, we'd appreciate you keeping us in mind when your customers need a tow or roadside assist.\n\nWould you be open to a quick chat or a coffee to talk about working together?\n\nBest,\nElliott\nAxle Towing & Impound\n480-288-5526`,
  },
  {
    id: "tpl-referral-pm",
    category: "Referral Partner Intro Emails",
    title: "Property Manager Introduction",
    copy: `Hi [Name],\n\nI'm Elliott with Axle Towing & Impound. We specialize in towing and impound services for apartment complexes, HOAs, and commercial properties throughout the Phoenix metro area.\n\nWe handle everything from unauthorized vehicle removal to private property enforcement — with 24/7 dispatch, professional drivers, and full compliance with Arizona towing regulations.\n\nI'd love to schedule a quick 15-minute call to discuss how we can support your properties. Do you have any availability this week?\n\nBest regards,\nElliott\nAxle Towing & Impound\n480-288-5526`,
  },
  {
    id: "tpl-referral-hoa",
    category: "Referral Partner Intro Emails",
    title: "HOA Board Outreach Email",
    copy: `Dear [HOA Board / Property Manager Name],\n\nI'm reaching out from Axle Towing & Impound regarding your community's parking enforcement needs.\n\nWe provide comprehensive towing and impound services for HOA communities across the Phoenix metro area, including:\n- 24/7 dispatch for unauthorized vehicle removal\n- Clearly posted signage (provided at no extra cost)\n- Full Arizona compliance and documentation\n- Dedicated account manager for your community\n\nMany HOAs we work with have seen a significant reduction in parking violations within the first 60 days. I'd welcome the chance to present our services at your next board meeting.\n\nWould you be open to scheduling a brief introduction?\n\nRespectfully,\nElliott\nAxle Towing & Impound\n480-288-5526`,
  },
  {
    id: "tpl-followup-sms-1",
    category: "Follow-up SMS Templates",
    title: "Initial Follow-up SMS (Day 2)",
    copy: `Hi [Name], Elliott here from Axle Towing. Just following up on my email — we'd love to chat about partnering up. Got 10 min this week? - Elliott 480-288-5526`,
  },
  {
    id: "tpl-followup-sms-2",
    category: "Follow-up SMS Templates",
    title: "Second Follow-up SMS (Day 7)",
    copy: `Hey [Name], quick follow-up from Axle Towing. We're expanding our referral network in Phoenix and think we'd be a great fit. Happy to swing by your office if that's easier. - Elliott`,
  },
  {
    id: "tpl-followup-sms-3",
    category: "Follow-up SMS Templates",
    title: "Final Follow-up SMS (Day 14)",
    copy: `Hi [Name], last note from me! If towing/impound services ever come up for your clients or properties, we're here 24/7. Save our number: 480-288-5526. - Elliott, Axle Towing`,
  },
  {
    id: "tpl-doorhanger",
    category: "Door Hanger / Leave-Behind Copy",
    title: "Property Manager Door Hanger",
    copy: `TIRED OF UNAUTHORIZED PARKING?\n\nAxle Towing & Impound\n24/7 Private Property Towing\n\n-- What We Handle --\nUnauthorized vehicles | Abandoned cars | Fire lane violations | Reserved spot enforcement\n\n-- Why Property Managers Choose Us --\nFast response times (avg. 30 min)\nFree posted signage for your property\nFull Arizona compliance & documentation\nDedicated account manager\n\nCall or text: 480-288-5526\naxletowing.com\n\n"Protecting your lots so you don't have to."`,
  },
  {
    id: "tpl-parking-signage",
    category: "Parking Lot Signage Copy",
    title: "Standard Parking Lot Warning Sign",
    copy: `WARNING: UNAUTHORIZED VEHICLES WILL BE TOWED AT OWNER'S EXPENSE\n\nThis parking area is privately owned and monitored.\nVehicles parked without authorization, in fire lanes, or in reserved spaces will be towed immediately.\n\nTowing enforced 24 hours / 7 days a week\nby Axle Towing & Impound\n\nTo retrieve your vehicle: 480-288-5526\nAxle Towing & Impound | Licensed & Insured`,
  },
  {
    id: "tpl-parking-signage-2",
    category: "Parking Lot Signage Copy",
    title: "Visitor Parking Notice Sign",
    copy: `VISITOR PARKING ONLY\n\nThis space is reserved for authorized visitors.\nAll other vehicles subject to tow at owner's expense.\n\nEnforced 24/7 by Axle Towing & Impound\n480-288-5526`,
  },
];

const workflows = [
  {
    id: "wf-property-manager",
    title: "Property Manager Outreach",
    description: "Systematic outreach campaign targeting apartment complexes, HOAs, and commercial properties for ongoing towing contracts.",
    steps: [
      { id: "wf-pm-1", title: "Research Target Properties", description: "Identify top 50 apartment complexes, HOAs, and commercial properties in Phoenix metro. Prioritize by unit count and current towing provider status.", estimatedDate: "Week 1-2", detailedDescription: "Build a comprehensive target list of the 50 highest-potential properties in the Phoenix metro area. Use Google Maps, apartment listing sites (Apartments.com, Zillow), and HOA directories to identify properties. For each target, record: property name, address, unit count, property management company, manager name/contact, current towing provider (check signage during drive-bys), and estimated contract value. Score and rank targets by unit count, current provider reputation, and proximity to Axle's base.", deliverables: "Spreadsheet with 50 target properties ranked by priority. Drive-by photos of existing towing signage at top 20 targets.", whoDoesWhat: "Elliott and Brian split drive-by research. AI Acrobatics provides the spreadsheet template and compiles the final target list." },
      { id: "wf-pm-2", title: "Create Leave-Behind Brochures", description: "Design and print professional brochures highlighting 24/7 service, compliance, and property management benefits.", estimatedDate: "Week 2-3", detailedDescription: "Design a 2-page, tri-fold brochure for property managers. Front: bold headline, Axle logo, phone number. Interior: service overview (24/7, 30-min response, free signage), compliance features, and case study showing 60% complaint reduction. Back: contact info, QR code to axletowing.com, 'Free Assessment' CTA. Print 500 copies on heavy stock.", deliverables: "Final brochure design (PDF proof), 500 printed copies, digital version for email.", whoDoesWhat: "AI Acrobatics designs and coordinates printing. Elliott reviews and approves final proof." },
      { id: "wf-pm-3", title: "Door-to-Door Visits", description: "Visit each target property in person. Meet property managers, drop off brochures, and introduce Axle Towing services.", estimatedDate: "Week 3-5", detailedDescription: "Visit each of the top 50 targets in person, 9 AM-4 PM Tuesday-Thursday. Bring brochures, business cards. Concise pitch: introduce yourself, explain private property towing specialization, mention free assessment, leave materials. If manager available, aim for 5-10 min conversation. If not, leave materials with front desk. Log every visit in CRM same day.", deliverables: "50 property visits completed. CRM entries with notes and follow-up schedule. 15-20 conversations with decision-makers.", whoDoesWhat: "Elliott handles all visits (personal touch is the strongest sales tool). Brian assists with scheduling and route planning." },
      { id: "wf-pm-4", title: "Follow-up Email Sequence", description: "Send personalized follow-up emails to every property manager visited. Include service overview, pricing, and case studies.", estimatedDate: "Week 4-6", detailedDescription: "Within 24-48 hours of each visit, send a personalized follow-up email referencing the conversation. Include: thank-you, recap, digital brochure, relevant case study, and CTA for free assessment. For unavailable managers, send intro email with same materials. Follow up with second email at day 5, final email at day 10.", deliverables: "Personalized emails to all 50 managers. 2-3 email follow-up sequence per contact. Responses tracked in CRM.", whoDoesWhat: "AI Acrobatics drafts templates. Elliott personalizes each. Automated follow-ups through GHL after initial manual send." },
      { id: "wf-pm-5", title: "Onboarding Call", description: "Schedule and conduct onboarding calls with interested property managers. Set up accounts, signage plans, and SLAs.", estimatedDate: "Week 5-8", detailedDescription: "30-minute onboarding call for interested managers. Cover: property details, enforcement needs, service agreement terms, authorization protocols, property assessment scheduling, signage installation timeline. After call, send agreement for signature and summary. Target: convert 5-8 properties from initial 50.", deliverables: "Onboarding calls completed. Service agreements sent. Assessments scheduled. Signage timelines established.", whoDoesWhat: "Elliott conducts calls. Brian handles agreement prep and assessment scheduling. AI Acrobatics provides CRM pipeline setup." },
    ],
  },
  {
    id: "wf-locksmith",
    title: "Locksmith Partnership Blitz",
    description: "Build a referral network with locksmiths across the Phoenix metro for mutual lead sharing.",
    steps: [
      { id: "wf-ls-1", title: "Identify Top 20 Locksmiths", description: "Research and list top 20 locksmiths in Phoenix metro area by Google reviews, proximity, and volume.", estimatedDate: "Week 1", detailedDescription: "Search Google Maps, Yelp, and Thumbtack for mobile/emergency locksmiths (not key-cutting kiosks). For each: business name, owner name, phone, email, Google review count/rating, service area overlap with Axle, existing towing partnerships. Prioritize: 50+ reviews, 4.5+ rating, overlapping service areas.", deliverables: "Ranked list of 20 target locksmiths with full contact info and partnership potential notes.", whoDoesWhat: "AI Acrobatics compiles research. Elliott reviews and adds known locksmiths. Final list approved before outreach." },
      { id: "wf-ls-2", title: "Create Co-Marketing Materials", description: "Design partnership one-pager with mutual referral benefits, commission structure, and co-branded cards.", estimatedDate: "Week 1-2", detailedDescription: "One-page partnership proposal: how referrals work, fee structure ($25 per completed referral), tracking method (unique codes), co-branded cards both parties hand out. Also create co-branded business card with both companies' info.", deliverables: "Partnership one-pager (PDF + printed). Co-branded referral cards. Referral code system.", whoDoesWhat: "AI Acrobatics designs materials. Elliott approves fee structure. Print shop handles production." },
      { id: "wf-ls-3", title: "In-Person Visits with Brochures", description: "Visit each locksmith in person with partnership materials. Pitch the mutual referral relationship.", estimatedDate: "Week 2-4", detailedDescription: "Visit each locksmith in person. For mobile locksmiths, arrange coffee meeting. Pitch: 'We get calls needing locksmiths, you get calls needing towing. Let's send business to each other.' Keep it casual and relationship-focused. Leave materials and co-branded cards. Log every visit in CRM.", deliverables: "20 visits completed. 8-10 partnerships established. Co-branded cards distributed. CRM entries for each.", whoDoesWhat: "Elliott handles all visits. Brian assists with scheduling and route planning." },
      { id: "wf-ls-4", title: "Set Up Referral Tracking", description: "Implement referral tracking system (unique codes or Google Form) to track leads sent and received.", estimatedDate: "Week 3-4", detailedDescription: "Each partner gets a unique code (e.g., 'REF-LOCKSMITH-JOESKEYS'). When customer mentions locksmith or uses referral card, code logged in CRM. Monthly reports: referrals received/sent per partner, completed jobs, fees owed. Simple dropdown in CRM call intake form for zero-friction logging.", deliverables: "Tracking system in GHL. Unique codes assigned. Monthly report template. Dispatch team trained.", whoDoesWhat: "AI Acrobatics builds tracking in GHL. Elliott trains dispatch team. Reports auto-generated monthly." },
      { id: "wf-ls-5", title: "Monthly Check-in Calls", description: "Schedule recurring monthly calls with active partners to review referral numbers and strengthen relationships.", estimatedDate: "Ongoing", detailedDescription: "10-minute monthly call with each active partner. Agenda: share referral numbers, discuss issues, ask about busy seasons, explore collaboration opportunities. Schedule same day each month (e.g., first Tuesday) for routine.", deliverables: "Monthly calls completed. Referral fees processed. Partnership status updated. New opportunities noted.", whoDoesWhat: "Elliott handles calls personally. Brian processes referral fee payments." },
    ],
  },
  {
    id: "wf-hoa",
    title: "HOA Board Season Campaign",
    description: "Target HOA boards during election/meeting seasons when new boards are evaluating vendors and contracts.",
    steps: [
      { id: "wf-hoa-1", title: "Research HOA Board Election Schedules", description: "Identify when major HOAs in Phoenix hold board elections and annual meetings. Map out the calendar.", estimatedDate: "Week 1-2", detailedDescription: "Research annual meeting and election schedules for top 30-40 HOAs. Most hold meetings Oct-Feb. Sources: AZ Dept of Real Estate HOA registry, community websites, management company announcements. Record: community name, management company, home/unit count, meeting dates, current towing provider, contact info.", deliverables: "Calendar of 30-40 HOA meetings/elections. Spreadsheet with contact info, size, and current provider.", whoDoesWhat: "AI Acrobatics handles research and calendar. Elliott reviews and adds known communities." },
      { id: "wf-hoa-2", title: "Create HOA-Specific Pitch Deck", description: "Build a presentation tailored for HOA boards: compliance, liability reduction, resident satisfaction, cost savings.", estimatedDate: "Week 2-3", detailedDescription: "10-12 slide deck for board meetings: 1) Intro, 2) Parking problem stats, 3) AZ towing law overview, 4) Our solution, 5) Case study, 6) What's included, 7) Pricing (no cost to HOA), 8) Compliance guarantee, 9) FAQ, 10) Next steps. Professional design, not flashy -- boards want competence.", deliverables: "Pitch deck (PPT/Slides + PDF). Printed handout version. Leave-behind summary sheet.", whoDoesWhat: "AI Acrobatics designs deck. Elliott provides case study details and reviews content. Elliott presents in person." },
      { id: "wf-hoa-3", title: "Attend HOA Meetings", description: "Request time on the agenda at HOA board meetings. Present services and answer board member questions.", estimatedDate: "Week 3-8", detailedDescription: "Contact each HOA's management company or board president for 15 minutes on agenda. Prepare for common questions: disputed tows, guest parking, resident mistakes, cost to HOA, response time. Dress professionally, bring printed materials for each board member.", deliverables: "Presentations at 8-12 HOA communities. Follow-up contact with each board. Attendance logged in CRM.", whoDoesWhat: "Elliott presents at all meetings. Brian may attend larger presentations. AI Acrobatics customizes pitch decks per community." },
      { id: "wf-hoa-4", title: "Follow-up Proposal Delivery", description: "Send customized proposals within 48 hours of each meeting. Include pricing, signage mockups, and timeline.", estimatedDate: "Week 4-9", detailedDescription: "Within 48 hours of each meeting, send customized proposal: personalized cover letter, service overview for their community size, pricing, signage mockup with community name, timeline (contract to enforcement in 48 hrs), references, service agreement. Phone follow-up 3-5 days after.", deliverables: "Proposals delivered within 48 hours. Follow-up calls completed. Responses tracked in CRM.", whoDoesWhat: "AI Acrobatics prepares proposal documents. Elliott reviews, personalizes, sends, and handles follow-up calls." },
      { id: "wf-hoa-5", title: "Onboarding", description: "Onboard approved HOAs: install signage, configure dispatch zones, assign dedicated account manager.", estimatedDate: "Week 5-10", detailedDescription: "For approved HOAs: 1) Property walk-through for sign placement, 2) Install ARS 9-499.05 compliant signage within 48 hours, 3) Configure dispatch zones, 4) Set up authorization protocols, 5) Create CRM profile, 6) Send welcome packet with dispatch instructions and signage photos, 7) Provide resident notification template.", deliverables: "Signage installed. Dispatch zones configured. Protocols established. Welcome packets delivered. CRM profiles created.", whoDoesWhat: "Elliott handles walk-through and placement decisions. Brian coordinates sign ordering/installation. AI Acrobatics sets up CRM profiles and templates." },
    ],
  },
];

const marketingMaterials = [
  {
    id: "mat-pm-brochure",
    title: "Property Manager Leave-Behind Brochure",
    description: "2-page PDF brochure highlighting 24/7 towing services, compliance features, and property management benefits.",
    type: "2-Page PDF",
  },
  {
    id: "mat-hoa-pitch",
    title: "HOA Board Pitch Packet",
    description: "Professional pitch packet with service overview, pricing tiers, compliance certifications, and case studies for HOA presentations.",
    type: "Multi-Page Packet",
  },
  {
    id: "mat-locksmith-onepager",
    title: "Locksmith Partnership One-Pager",
    description: "Co-branded one-page flyer outlining the mutual referral program, commission structure, and contact info.",
    type: "One-Pager",
  },
  {
    id: "mat-doorhanger",
    title: "Parking Lot Door Hanger",
    description: "Eye-catching door hanger for property manager offices promoting unauthorized vehicle removal services.",
    type: "Door Hanger",
  },
  {
    id: "mat-vehicle-faq",
    title: "Vehicle Owner FAQ Card",
    description: "FAQ card for the impound lot explaining the retrieval process, fees, required documents, and hours of operation.",
    type: "Info Card",
  },
  {
    id: "mat-referral-kit",
    title: "Referral Partner Welcome Kit",
    description: "Welcome packet for new referral partners including business cards, referral tracking codes, and service overview.",
    type: "Welcome Kit",
  },
];

/* ── Component ─────────────────────────────────────── */

export default function MarketingPage() {
  const [activeTab, setActiveTab] = useState<SectionTab>("templates");

  // Template states
  const [templateStates, setTemplateStates] = useState<Record<string, ApprovalState>>({});
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const [showCommentFor, setShowCommentFor] = useState<string | null>(null);
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);

  // Workflow states
  const [workflowStates, setWorkflowStates] = useState<Record<string, WorkflowStepState>>({});
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  // Material states
  const [materialStates, setMaterialStates] = useState<Record<string, ApprovalState>>({});
  const [materialCommentInputs, setMaterialCommentInputs] = useState<Record<string, string>>({});
  const [showMaterialCommentFor, setShowMaterialCommentFor] = useState<string | null>(null);
  const [scheduledMaterials, setScheduledMaterials] = useState<Record<string, boolean>>({});

  // GHL Deploy state
  const [ghlDeploy, setGhlDeploy] = useState<GhlDeployState>({
    isOpen: false,
    templateId: null,
    templateTitle: "",
    templateCategory: "",
    templateCopy: "",
    status: "idle",
    message: "",
  });
  const [ghlStatus, setGhlStatus] = useState<GhlConnectionStatus | null>(null);
  const [deployedTemplates, setDeployedTemplates] = useState<Record<string, boolean>>({});

  /* ── Load from localStorage ──────────────────────── */

  useEffect(() => {
    try {
      const tpl = localStorage.getItem(STORAGE_KEY);
      if (tpl) setTemplateStates(JSON.parse(tpl));

      const wf = localStorage.getItem(WORKFLOW_STORAGE_KEY);
      if (wf) setWorkflowStates(JSON.parse(wf));

      const mat = localStorage.getItem(MATERIALS_STORAGE_KEY);
      if (mat) {
        const parsed = JSON.parse(mat);
        setMaterialStates(parsed.approvals || {});
        setScheduledMaterials(parsed.scheduled || {});
      }

      const deployed = localStorage.getItem("axle-portal-ghl-deployed");
      if (deployed) setDeployedTemplates(JSON.parse(deployed));
    } catch {
      // Ignore parse errors
    }

    // Check GHL connection status
    fetch("/api/ghl/deploy")
      .then((r) => r.json())
      .then((data) => setGhlStatus(data))
      .catch(() => setGhlStatus({ connected: false, configured: false, message: "API route unavailable" }));
  }, []);

  /* ── Persist helpers ─────────────────────────────── */

  const saveTemplateStates = (states: Record<string, ApprovalState>) => {
    setTemplateStates(states);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
  };

  const saveWorkflowStates = (states: Record<string, WorkflowStepState>) => {
    setWorkflowStates(states);
    localStorage.setItem(WORKFLOW_STORAGE_KEY, JSON.stringify(states));
  };

  const saveMaterialStates = (approvals: Record<string, ApprovalState>, scheduled: Record<string, boolean>) => {
    setMaterialStates(approvals);
    setScheduledMaterials(scheduled);
    localStorage.setItem(MATERIALS_STORAGE_KEY, JSON.stringify({ approvals, scheduled }));
  };

  /* ── Template actions ────────────────────────────── */

  const handleTemplateApprove = (id: string) => {
    saveTemplateStates({ ...templateStates, [id]: { status: "approved" } });
    setShowCommentFor(null);
  };

  const handleTemplateRequestChanges = (id: string) => {
    if (showCommentFor === id) {
      const comment = commentInputs[id]?.trim() || "";
      saveTemplateStates({ ...templateStates, [id]: { status: "changes-requested", comment } });
      setShowCommentFor(null);
      setCommentInputs((prev) => ({ ...prev, [id]: "" }));
    } else {
      setShowCommentFor(id);
    }
  };

  const handleTemplateReset = (id: string) => {
    const updated = { ...templateStates };
    delete updated[id];
    saveTemplateStates(updated);
    setShowCommentFor(null);
  };

  /* ── Workflow actions ────────────────────────────── */

  const handleWorkflowApprove = (stepId: string) => {
    saveWorkflowStates({ ...workflowStates, [stepId]: { status: "approved" } });
  };

  const handleWorkflowProgress = (stepId: string) => {
    saveWorkflowStates({ ...workflowStates, [stepId]: { status: "in-progress" } });
  };

  const handleWorkflowComplete = (stepId: string) => {
    saveWorkflowStates({ ...workflowStates, [stepId]: { status: "complete" } });
  };

  const handleWorkflowReset = (stepId: string) => {
    const updated = { ...workflowStates };
    delete updated[stepId];
    saveWorkflowStates(updated);
  };

  /* ── Material actions ────────────────────────────── */

  const handleMaterialApprove = (id: string) => {
    const updated = { ...materialStates, [id]: { status: "approved" as const } };
    saveMaterialStates(updated, scheduledMaterials);
    setShowMaterialCommentFor(null);
  };

  const handleMaterialRequestChanges = (id: string) => {
    if (showMaterialCommentFor === id) {
      const comment = materialCommentInputs[id]?.trim() || "";
      const updated = { ...materialStates, [id]: { status: "changes-requested" as const, comment } };
      saveMaterialStates(updated, scheduledMaterials);
      setShowMaterialCommentFor(null);
      setMaterialCommentInputs((prev) => ({ ...prev, [id]: "" }));
    } else {
      setShowMaterialCommentFor(id);
    }
  };

  const handleMaterialReset = (id: string) => {
    const updatedApprovals = { ...materialStates };
    delete updatedApprovals[id];
    const updatedScheduled = { ...scheduledMaterials };
    delete updatedScheduled[id];
    saveMaterialStates(updatedApprovals, updatedScheduled);
    setShowMaterialCommentFor(null);
  };

  const handleScheduleDistribution = (id: string) => {
    saveMaterialStates(materialStates, { ...scheduledMaterials, [id]: true });
  };

  /* ── GHL Deploy actions ─────────────────────────── */

  const openGhlDeploy = (tpl: typeof messageTemplates[0]) => {
    setGhlDeploy({
      isOpen: true,
      templateId: tpl.id,
      templateTitle: tpl.title,
      templateCategory: tpl.category,
      templateCopy: tpl.copy,
      status: "idle",
      message: "",
    });
  };

  const closeGhlDeploy = () => {
    setGhlDeploy((prev) => ({ ...prev, isOpen: false, status: "idle", message: "" }));
  };

  const executeGhlDeploy = async () => {
    if (!ghlDeploy.templateId) return;

    setGhlDeploy((prev) => ({ ...prev, status: "deploying", message: "Deploying to GoHighLevel..." }));

    // Determine if this is an email or SMS template
    const isEmail = ghlDeploy.templateCategory.toLowerCase().includes("email") ||
                    ghlDeploy.templateCategory.toLowerCase().includes("intro") ||
                    ghlDeploy.templateCategory.toLowerCase().includes("door hanger") ||
                    ghlDeploy.templateCategory.toLowerCase().includes("signage");
    const isSms = ghlDeploy.templateCategory.toLowerCase().includes("sms");

    try {
      const htmlContent = isEmail
        ? `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #1B2A3F; padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="color: white; margin: 0;">Axle Towing & Impound</h2>
              <p style="color: #94a3b8; margin: 4px 0 0;">Professional Towing Services | Phoenix Metro</p>
            </div>
            <div style="background: white; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
              ${ghlDeploy.templateCopy.split("\n").map((line: string) => `<p style="margin: 8px 0; color: #334155;">${line}</p>`).join("")}
            </div>
            <div style="text-align: center; padding: 16px; color: #94a3b8; font-size: 12px;">
              Axle Towing & Impound | 480-288-5526 | axletowing.com
            </div>
          </div>`
        : `<p>${ghlDeploy.templateCopy}</p>`;

      const resp = await fetch("/api/ghl/deploy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create-email-template",
          templateId: ghlDeploy.templateId,
          name: `Axle Towing - ${ghlDeploy.templateTitle}`,
          subject: ghlDeploy.templateTitle,
          html: htmlContent,
        }),
      });

      const result = await resp.json();

      if (result.dryRun) {
        setGhlDeploy((prev) => ({
          ...prev,
          status: "success",
          message: `Dry run complete. GHL API not configured yet. Template "${ghlDeploy.templateTitle}" would be created as ${isEmail ? "an email" : isSms ? "an SMS" : "a"} template in GoHighLevel.`,
        }));
      } else if (result.success) {
        setGhlDeploy((prev) => ({
          ...prev,
          status: "success",
          message: `Template "${ghlDeploy.templateTitle}" has been deployed to GoHighLevel successfully!`,
        }));
      } else {
        throw new Error(result.error || "Deployment failed");
      }

      // Mark as deployed
      const updated = { ...deployedTemplates, [ghlDeploy.templateId!]: true };
      setDeployedTemplates(updated);
      localStorage.setItem("axle-portal-ghl-deployed", JSON.stringify(updated));
    } catch (err) {
      setGhlDeploy((prev) => ({
        ...prev,
        status: "error",
        message: `Deploy failed: ${err instanceof Error ? err.message : "Unknown error"}`,
      }));
    }
  };

  /* ── Status helpers ──────────────────────────────── */

  const getTemplateStatus = (id: string) => templateStates[id]?.status || "pending";
  const getWorkflowStepStatus = (stepId: string) => workflowStates[stepId]?.status || "pending";
  const getMaterialStatus = (id: string) => materialStates[id]?.status || "pending";

  /* ── Computed counts ─────────────────────────────── */

  const templateApproved = Object.values(templateStates).filter((s) => s.status === "approved").length;
  const templateChanges = Object.values(templateStates).filter((s) => s.status === "changes-requested").length;
  const templatePending = messageTemplates.length - templateApproved - templateChanges;

  const allWorkflowSteps = workflows.flatMap((w) => w.steps);
  const workflowApproved = allWorkflowSteps.filter((s) => {
    const st = getWorkflowStepStatus(s.id);
    return st === "approved" || st === "in-progress" || st === "complete";
  }).length;
  const workflowComplete = allWorkflowSteps.filter((s) => getWorkflowStepStatus(s.id) === "complete").length;

  const materialApproved = Object.values(materialStates).filter((s) => s.status === "approved").length;
  const materialScheduled = Object.keys(scheduledMaterials).filter((k) => scheduledMaterials[k]).length;

  /* ── Tab groups by category for templates ────────── */

  const templateCategories = messageTemplates.reduce<Record<string, typeof messageTemplates>>((acc, tpl) => {
    if (!acc[tpl.category]) acc[tpl.category] = [];
    acc[tpl.category].push(tpl);
    return acc;
  }, {});

  /* ── Status badge component ──────────────────────── */

  const StatusBadge = ({ status }: { status: string }) => {
    switch (status) {
      case "approved":
        return (
          <span className="flex items-center gap-1.5 text-green-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-wider">Approved</span>
          </span>
        );
      case "changes-requested":
        return (
          <span className="flex items-center gap-1.5 text-orange-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-wider">Changes Requested</span>
          </span>
        );
      case "in-progress":
        return (
          <span className="flex items-center gap-1.5 text-brand-blue">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-wider">In Progress</span>
          </span>
        );
      case "complete":
        return (
          <span className="flex items-center gap-1.5 text-green-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-wider">Complete</span>
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1.5 text-amber-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-wider">Pending</span>
          </span>
        );
    }
  };

  /* ── Render ──────────────────────────────────────── */

  return (
    <>
      <PageHeader
        badge="Marketing Campaigns"
        title="Guerrilla Marketing Hub"
        subtitle="Review and approve messaging, workflows, and marketing materials before they go live. Everything here needs your green light."
      />

      {/* GHL Connection Status */}
      <ScrollReveal>
        <div className="mb-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
            ghlStatus?.connected
              ? "bg-green-50 text-green-700 border border-green-200"
              : ghlStatus?.configured
              ? "bg-amber-50 text-amber-700 border border-amber-200"
              : "bg-gray-50 text-gray-500 border border-gray-200"
          }`}>
            <span className={`w-2 h-2 rounded-full ${
              ghlStatus?.connected ? "bg-green-500" : ghlStatus?.configured ? "bg-amber-500 animate-pulse" : "bg-gray-400"
            }`} />
            {ghlStatus?.connected
              ? "GoHighLevel Connected"
              : ghlStatus?.configured
              ? "GHL Configured (checking...)"
              : "GHL Not Configured"}
          </div>
        </div>
      </ScrollReveal>

      {/* Summary stats */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="glass-card p-5 text-center">
            <p className="text-3xl font-bold font-display text-gray-900">{messageTemplates.length}</p>
            <p className="text-xs text-gray-500 mt-1">Message Templates</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-3xl font-bold font-display text-amber-500">{templatePending}</p>
            <p className="text-xs text-gray-500 mt-1">Awaiting Approval</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-3xl font-bold font-display text-green-600">{workflowApproved}/{allWorkflowSteps.length}</p>
            <p className="text-xs text-gray-500 mt-1">Workflow Steps Approved</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-3xl font-bold font-display text-brand-blue">{materialApproved}/{marketingMaterials.length}</p>
            <p className="text-xs text-gray-500 mt-1">Materials Approved</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-3xl font-bold font-display text-purple-600">{Object.keys(deployedTemplates).filter((k) => deployedTemplates[k]).length}</p>
            <p className="text-xs text-gray-500 mt-1">Deployed to GHL</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Tab navigation */}
      <ScrollReveal delay={80}>
        <div className="flex gap-2 mb-8">
          {[
            { key: "templates" as SectionTab, label: "Message Templates", count: templatePending },
            { key: "workflows" as SectionTab, label: "Workflows", count: allWorkflowSteps.length - workflowApproved },
            { key: "materials" as SectionTab, label: "Materials & Brochures", count: marketingMaterials.length - materialApproved },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/25"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span className={`text-[10px] font-bold min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center ${
                  activeTab === tab.key ? "bg-white/20 text-white" : "bg-amber-100 text-amber-700"
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* ─────────────────────────────────────────────── */}
      {/* SECTION A: Message Templates                    */}
      {/* ─────────────────────────────────────────────── */}

      {activeTab === "templates" && (
        <>
          <ScrollReveal delay={100}>
            <div className="glass-card p-6 mb-8 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-brand-blue font-semibold">How This Works</p>
                  <p className="text-sm text-blue-700/70 mt-1">
                    These are the exact messages we&apos;ll send on your behalf to referral partners, property managers, and prospects. Review each template, approve what looks good, and request changes on anything you&apos;d like adjusted. Nothing goes out without your green light.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {Object.entries(templateCategories).map(([category, templates], catIndex) => {
              const catApproved = templates.filter((t) => getTemplateStatus(t.id) === "approved").length;
              return (
                <ScrollReveal key={category} delay={catIndex * 80}>
                  <div className="glass-card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-lg font-bold font-display text-gray-900">{category}</h2>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        catApproved === templates.length
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {catApproved}/{templates.length} approved
                      </span>
                    </div>

                    <div className="divide-y divide-gray-100 mt-4">
                      {templates.map((tpl) => {
                        const status = getTemplateStatus(tpl.id);
                        const state = templateStates[tpl.id];
                        const isExpanded = expandedTemplate === tpl.id;

                        return (
                          <div key={tpl.id} className={`py-4 first:pt-0 last:pb-0 ${
                            status === "approved" ? "bg-green-50/30 -mx-6 px-6" : status === "changes-requested" ? "bg-orange-50/30 -mx-6 px-6" : ""
                          }`}>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-1">
                                  <h3 className={`text-sm font-semibold text-gray-800 ${status === "approved" ? "line-through opacity-60" : ""}`}>
                                    {tpl.title}
                                  </h3>
                                  <StatusBadge status={status} />
                                </div>
                                <button
                                  onClick={() => setExpandedTemplate(isExpanded ? null : tpl.id)}
                                  className="text-xs text-brand-blue hover:text-blue-700 font-medium transition-colors"
                                >
                                  {isExpanded ? "Hide Preview" : "Show Preview"}
                                </button>

                                {isExpanded && (
                                  <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                                    <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">{tpl.copy}</pre>
                                  </div>
                                )}

                                {status === "changes-requested" && state?.comment && (
                                  <p className="text-xs text-orange-600 mt-2 italic">&quot;{state.comment}&quot;</p>
                                )}

                                {showCommentFor === tpl.id && (
                                  <div className="mt-3 flex gap-2">
                                    <input
                                      type="text"
                                      placeholder="What needs to change? (optional)"
                                      value={commentInputs[tpl.id] || ""}
                                      onChange={(e) => setCommentInputs((prev) => ({ ...prev, [tpl.id]: e.target.value }))}
                                      onKeyDown={(e) => e.key === "Enter" && handleTemplateRequestChanges(tpl.id)}
                                      className="flex-1 bg-white border border-orange-200 rounded-lg px-3 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400"
                                      autoFocus
                                    />
                                    <button
                                      onClick={() => handleTemplateRequestChanges(tpl.id)}
                                      className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                      Submit
                                    </button>
                                    <button
                                      onClick={() => setShowCommentFor(null)}
                                      className="text-xs text-gray-400 hover:text-gray-600 px-2"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                )}
                              </div>

                              <div className="flex-shrink-0">
                                {status === "pending" ? (
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => handleTemplateApprove(tpl.id)}
                                      className="bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                      Approve
                                    </button>
                                    <button
                                      onClick={() => handleTemplateRequestChanges(tpl.id)}
                                      className="bg-orange-100 hover:bg-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors border border-orange-200"
                                    >
                                      Request Changes
                                    </button>
                                  </div>
                                ) : status === "approved" ? (
                                  <div className="flex items-center gap-2">
                                    {deployedTemplates[tpl.id] ? (
                                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        In GHL
                                      </span>
                                    ) : (
                                      <button
                                        onClick={() => openGhlDeploy(tpl)}
                                        className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors"
                                      >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        Deploy to GHL
                                      </button>
                                    )}
                                    <button
                                      onClick={() => handleTemplateReset(tpl.id)}
                                      className="text-[10px] font-medium text-gray-400 hover:text-gray-600 underline transition-colors"
                                    >
                                      Reset
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => handleTemplateReset(tpl.id)}
                                    className="text-[10px] font-medium text-gray-400 hover:text-gray-600 underline transition-colors"
                                  >
                                    Reset
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────── */}
      {/* SECTION B: Guerrilla Marketing Workflows        */}
      {/* ─────────────────────────────────────────────── */}

      {activeTab === "workflows" && (
        <>
          <ScrollReveal delay={100}>
            <div className="glass-card p-6 mb-8 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-brand-blue font-semibold">Campaign Workflows</p>
                  <p className="text-sm text-blue-700/70 mt-1">
                    Each workflow below is a step-by-step marketing campaign. Approve individual steps to greenlight execution. Once a step is approved, we&apos;ll mark it as in-progress and update you on completion.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {workflows.map((workflow, wfIndex) => {
              const wfApproved = workflow.steps.filter((s) => {
                const st = getWorkflowStepStatus(s.id);
                return st === "approved" || st === "in-progress" || st === "complete";
              }).length;
              const wfComplete = workflow.steps.filter((s) => getWorkflowStepStatus(s.id) === "complete").length;

              return (
                <ScrollReveal key={workflow.id} delay={wfIndex * 100}>
                  <div className="glass-card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-lg font-bold font-display text-gray-900">{workflow.title}</h2>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          wfComplete === workflow.steps.length
                            ? "bg-green-100 text-green-700"
                            : wfApproved > 0
                            ? "bg-blue-100 text-brand-blue"
                            : "bg-gray-100 text-gray-500"
                        }`}>
                          {wfComplete}/{workflow.steps.length} complete
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">{workflow.description}</p>

                    {/* Workflow step timeline */}
                    <div className="relative">
                      {workflow.steps.map((step, stepIndex) => {
                        const stepStatus = getWorkflowStepStatus(step.id);
                        const isLast = stepIndex === workflow.steps.length - 1;

                        return (
                          <div key={step.id} className="relative flex gap-4 pb-6 last:pb-0">
                            {/* Timeline connector */}
                            {!isLast && (
                              <div className={`absolute left-[15px] top-[32px] w-0.5 h-[calc(100%-16px)] ${
                                stepStatus === "complete" ? "bg-green-300" : stepStatus === "approved" || stepStatus === "in-progress" ? "bg-blue-200" : "bg-gray-200"
                              }`} />
                            )}

                            {/* Step number circle */}
                            <div className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              stepStatus === "complete"
                                ? "bg-green-600 text-white"
                                : stepStatus === "in-progress"
                                ? "bg-brand-blue text-white"
                                : stepStatus === "approved"
                                ? "bg-blue-100 text-brand-blue border-2 border-brand-blue"
                                : "bg-gray-100 text-gray-400 border-2 border-gray-200"
                            }`}>
                              {stepStatus === "complete" ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                stepIndex + 1
                              )}
                            </div>

                            {/* Step content */}
                            <div className={`flex-1 rounded-xl p-4 border transition-all ${
                              stepStatus === "complete"
                                ? "bg-green-50/50 border-green-200"
                                : stepStatus === "in-progress"
                                ? "bg-blue-50/50 border-blue-200"
                                : stepStatus === "approved"
                                ? "bg-blue-50/30 border-blue-100"
                                : "bg-white border-gray-100"
                            }`}>
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-sm font-semibold text-gray-800">{step.title}</h3>
                                    <StatusBadge status={stepStatus} />
                                  </div>
                                  <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                                  <div className="flex items-center gap-3 mt-2">
                                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                                      Target: {step.estimatedDate}
                                    </p>
                                    {(step as any).detailedDescription && (
                                      <button
                                        onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                                        className="text-xs text-brand-blue hover:text-blue-700 font-medium transition-colors"
                                      >
                                        {expandedStep === step.id ? "Hide Details" : "View Full Details"}
                                      </button>
                                    )}
                                  </div>
                                  {expandedStep === step.id && (step as any).detailedDescription && (
                                    <div className="mt-3 bg-white rounded-xl p-4 border border-gray-200 space-y-3">
                                      <div>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Detailed Description</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">{(step as any).detailedDescription}</p>
                                      </div>
                                      {(step as any).deliverables && (
                                        <div>
                                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Deliverables</p>
                                          <p className="text-xs text-gray-600 leading-relaxed">{(step as any).deliverables}</p>
                                        </div>
                                      )}
                                      {(step as any).whoDoesWhat && (
                                        <div>
                                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Who Does What</p>
                                          <p className="text-xs text-gray-600 leading-relaxed">{(step as any).whoDoesWhat}</p>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>

                                <div className="flex-shrink-0">
                                  {stepStatus === "pending" && (
                                    <button
                                      onClick={() => handleWorkflowApprove(step.id)}
                                      className="bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                      Approve
                                    </button>
                                  )}
                                  {stepStatus === "approved" && (
                                    <div className="flex gap-2">
                                      <button
                                        onClick={() => handleWorkflowProgress(step.id)}
                                        className="bg-brand-blue hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors"
                                      >
                                        Start
                                      </button>
                                      <button
                                        onClick={() => handleWorkflowReset(step.id)}
                                        className="text-[10px] font-medium text-gray-400 hover:text-gray-600 underline transition-colors"
                                      >
                                        Reset
                                      </button>
                                    </div>
                                  )}
                                  {stepStatus === "in-progress" && (
                                    <div className="flex gap-2">
                                      <button
                                        onClick={() => handleWorkflowComplete(step.id)}
                                        className="bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors"
                                      >
                                        Mark Complete
                                      </button>
                                      <button
                                        onClick={() => handleWorkflowReset(step.id)}
                                        className="text-[10px] font-medium text-gray-400 hover:text-gray-600 underline transition-colors"
                                      >
                                        Reset
                                      </button>
                                    </div>
                                  )}
                                  {stepStatus === "complete" && (
                                    <button
                                      onClick={() => handleWorkflowReset(step.id)}
                                      className="text-[10px] font-medium text-gray-400 hover:text-gray-600 underline transition-colors"
                                    >
                                      Reset
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────── */}
      {/* SECTION C: Marketing Materials / Brochures      */}
      {/* ─────────────────────────────────────────────── */}

      {activeTab === "materials" && (
        <>
          <ScrollReveal delay={100}>
            <div className="glass-card p-6 mb-8 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-brand-blue font-semibold">Marketing Materials</p>
                  <p className="text-sm text-blue-700/70 mt-1">
                    These are the physical and digital marketing materials we&apos;ll create for your campaigns. Approve designs before we send them to print or distribution. Once approved, you can schedule distribution to add it to the task list.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Summary bar */}
          <ScrollReveal delay={120}>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="glass-card p-4 text-center">
                <p className="text-2xl font-bold font-display text-amber-500">{marketingMaterials.length - materialApproved}</p>
                <p className="text-xs text-gray-500 mt-1">Awaiting Approval</p>
              </div>
              <div className="glass-card p-4 text-center">
                <p className="text-2xl font-bold font-display text-green-600">{materialApproved}</p>
                <p className="text-xs text-gray-500 mt-1">Approved</p>
              </div>
              <div className="glass-card p-4 text-center">
                <p className="text-2xl font-bold font-display text-brand-blue">{materialScheduled}</p>
                <p className="text-xs text-gray-500 mt-1">Scheduled</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketingMaterials.map((material, matIndex) => {
              const status = getMaterialStatus(material.id);
              const state = materialStates[material.id];
              const isScheduled = scheduledMaterials[material.id];

              return (
                <ScrollReveal key={material.id} delay={matIndex * 60}>
                  <div className={`glass-card p-6 h-full flex flex-col ${
                    status === "approved" ? "border-green-200" : status === "changes-requested" ? "border-orange-200" : ""
                  }`}>
                    {/* Thumbnail placeholder */}
                    <div className={`w-full h-36 rounded-xl mb-4 flex items-center justify-center ${
                      status === "approved" ? "bg-green-50" : "bg-gray-50"
                    }`}>
                      <div className="text-center">
                        <svg className={`w-10 h-10 mx-auto mb-2 ${status === "approved" ? "text-green-300" : "text-gray-300"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Preview Coming Soon</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-sm font-bold text-gray-900">{material.title}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 whitespace-nowrap">
                          {material.type}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">{material.description}</p>

                      {/* Status */}
                      <div className="mb-4">
                        <StatusBadge status={status} />
                        {status === "changes-requested" && state?.comment && (
                          <p className="text-xs text-orange-600 mt-1 italic">&quot;{state.comment}&quot;</p>
                        )}
                        {isScheduled && (
                          <div className="flex items-center gap-1.5 mt-2 text-brand-blue">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider">Distribution Scheduled</span>
                          </div>
                        )}
                      </div>

                      {/* Comment input */}
                      {showMaterialCommentFor === material.id && (
                        <div className="mb-4 flex gap-2">
                          <input
                            type="text"
                            placeholder="What needs to change? (optional)"
                            value={materialCommentInputs[material.id] || ""}
                            onChange={(e) => setMaterialCommentInputs((prev) => ({ ...prev, [material.id]: e.target.value }))}
                            onKeyDown={(e) => e.key === "Enter" && handleMaterialRequestChanges(material.id)}
                            className="flex-1 bg-white border border-orange-200 rounded-lg px-3 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400"
                            autoFocus
                          />
                          <button
                            onClick={() => handleMaterialRequestChanges(material.id)}
                            className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                          >
                            Submit
                          </button>
                          <button
                            onClick={() => setShowMaterialCommentFor(null)}
                            className="text-xs text-gray-400 hover:text-gray-600 px-2"
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100 mt-auto">
                      {status === "pending" ? (
                        <>
                          <button
                            onClick={() => handleMaterialApprove(material.id)}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors text-center"
                          >
                            Approve Design
                          </button>
                          <button
                            onClick={() => handleMaterialRequestChanges(material.id)}
                            className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors border border-orange-200 text-center"
                          >
                            Request Changes
                          </button>
                        </>
                      ) : status === "approved" ? (
                        <div className="flex items-center gap-2 w-full">
                          <a
                            href="#"
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors text-center"
                          >
                            Download
                          </a>
                          {!isScheduled ? (
                            <button
                              onClick={() => handleScheduleDistribution(material.id)}
                              className="flex-1 bg-brand-blue hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors text-center"
                            >
                              Schedule Distribution
                            </button>
                          ) : (
                            <span className="flex-1 bg-blue-50 text-brand-blue text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg text-center border border-blue-100">
                              Scheduled
                            </span>
                          )}
                          <button
                            onClick={() => handleMaterialReset(material.id)}
                            className="text-[10px] font-medium text-gray-400 hover:text-gray-600 underline transition-colors"
                          >
                            Reset
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 w-full">
                          <button
                            onClick={() => handleMaterialReset(material.id)}
                            className="text-[10px] font-medium text-gray-400 hover:text-gray-600 underline transition-colors"
                          >
                            Reset
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────── */}
      {/* GHL Deploy Modal                                */}
      {/* ─────────────────────────────────────────────── */}

      {ghlDeploy.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeGhlDeploy} />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-purple-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Deploy to GoHighLevel</h3>
                    <p className="text-purple-200 text-xs">Push approved template to your CRM</p>
                  </div>
                </div>
                <button onClick={closeGhlDeploy} className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              {ghlDeploy.status === "idle" && (
                <>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-1">{ghlDeploy.templateTitle}</p>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                      {ghlDeploy.templateCategory}
                    </span>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Template Preview</p>
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans leading-relaxed max-h-40 overflow-y-auto">{ghlDeploy.templateCopy}</pre>
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-semibold text-gray-900">What will happen:</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <p className="text-xs text-gray-600">An email template named <strong>&quot;Axle Towing - {ghlDeploy.templateTitle}&quot;</strong> will be created in your GHL account</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <p className="text-xs text-gray-600">The template will be formatted with Axle Towing branding (dark navy header, clean body layout)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <p className="text-xs text-gray-600">You can then use this template in GHL campaigns, workflows, and manual sends</p>
                      </div>
                    </div>
                  </div>

                  {!ghlStatus?.configured && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <p className="text-xs text-amber-700">
                          GHL API is not configured yet. This will run as a <strong>dry run</strong> -- no data will be sent to GHL. The template will be marked as deployed once API credentials are added.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={executeGhlDeploy}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      {ghlStatus?.configured ? "Deploy Now" : "Deploy (Dry Run)"}
                    </button>
                    <button
                      onClick={closeGhlDeploy}
                      className="px-4 py-2.5 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}

              {ghlDeploy.status === "deploying" && (
                <div className="text-center py-8">
                  <div className="w-12 h-12 mx-auto mb-4 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
                  <p className="text-sm font-medium text-gray-700">{ghlDeploy.message}</p>
                </div>
              )}

              {ghlDeploy.status === "success" && (
                <div className="text-center py-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Template Deployed</p>
                  <p className="text-xs text-gray-500 mb-6">{ghlDeploy.message}</p>
                  <button
                    onClick={closeGhlDeploy}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-6 py-2 rounded-xl transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}

              {ghlDeploy.status === "error" && (
                <div className="text-center py-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Deployment Failed</p>
                  <p className="text-xs text-red-500 mb-6">{ghlDeploy.message}</p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={executeGhlDeploy}
                      className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-2 rounded-xl transition-colors"
                    >
                      Retry
                    </button>
                    <button
                      onClick={closeGhlDeploy}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-6 py-2 rounded-xl transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
