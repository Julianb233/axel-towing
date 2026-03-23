"use client";

import { useState, useEffect, useMemo } from "react";
import { REFERRAL_EMAIL_TEMPLATES, type EmailTemplate } from "../../data/referral-templates";

// ---- Types ----
type PartnerCategory =
  | "locksmith"
  | "property-manager"
  | "hoa"
  | "uber-driver"
  | "mechanic"
  | "mover"
  | "parking-permit";

type OutreachStatus =
  | "not-contacted"
  | "emailed"
  | "called"
  | "meeting-scheduled"
  | "onboarded";

interface ReferralProspect {
  id: string;
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  category: PartnerCategory;
  status: OutreachStatus;
  serviceArea: string;
  notes: string;
  lastContactDate: string | null;
  nextFollowUp: string | null;
  needsDMResearch?: boolean;
  decisionMakerName?: string;
}

type ContactStatusMap = Record<string, "contact" | "dont-contact">;

interface OutreachLog {
  date: string;
  prospectIds: string[];
  count: number;
  type: "dry-run";
}

// ---- Constants ----
const STORAGE_KEY = "axle-referral-outreach";
const CONTACT_STATUS_KEY = "axle-portal-referral-contact-status";
const OUTREACH_LOG_KEY = "axle-referral-outreach-log";
const DM_RESEARCH_KEY = "axle-referral-dm-research";

const CATEGORY_META: Record<PartnerCategory, { label: string; icon: string; color: string }> = {
  locksmith: { label: "Locksmiths", icon: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z", color: "text-amber-600 bg-amber-50" },
  "property-manager": { label: "Property Managers", icon: "M2.25 21h19.5M3.75 3v18h16.5V3H3.75zm3 3.75h3v3h-3v-3zm6.75 0h3v3h-3v-3zm-6.75 6h3v3h-3v-3zm6.75 0h3v3h-3v-3z", color: "text-blue-600 bg-blue-50" },
  hoa: { label: "HOA Boards", icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819", color: "text-green-600 bg-green-50" },
  "uber-driver": { label: "Uber/Lyft Drivers", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12", color: "text-purple-600 bg-purple-50" },
  mechanic: { label: "Auto Mechanics", icon: "M11.42 15.17l-5.1-5.1m0 0L3.07 12.9a1.5 1.5 0 002.12 2.12l2.72-2.72m0 0l5.1 5.1m0 0l2.72-2.72a1.5 1.5 0 00-2.12-2.12l-2.72 2.72m0 0L8.6 8.45m8.49 8.49L19.82 14a1.5 1.5 0 00-2.12-2.12l-2.72 2.72", color: "text-red-600 bg-red-50" },
  mover: { label: "Moving Companies", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0V6.375c0-.621-.504-1.125-1.125-1.125H6.375c-.621 0-1.125.504-1.125 1.125v3.659M6.75 21v-4.5m0 0h10.5", color: "text-orange-600 bg-orange-50" },
  "parking-permit": { label: "Parking Permits", icon: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z", color: "text-teal-600 bg-teal-50" },
};

const STATUS_META: Record<OutreachStatus, { label: string; color: string; bg: string }> = {
  "not-contacted": { label: "Not Contacted", color: "text-gray-700", bg: "bg-gray-100" },
  emailed: { label: "Emailed", color: "text-blue-700", bg: "bg-blue-100" },
  called: { label: "Called", color: "text-yellow-700", bg: "bg-yellow-100" },
  "meeting-scheduled": { label: "Meeting", color: "text-purple-700", bg: "bg-purple-100" },
  onboarded: { label: "Onboarded", color: "text-green-700", bg: "bg-green-100" },
};

const STATUS_ORDER: OutreachStatus[] = ["not-contacted", "emailed", "called", "meeting-scheduled", "onboarded"];

const ALL_CATEGORIES: PartnerCategory[] = ["locksmith", "property-manager", "hoa", "uber-driver", "mechanic", "mover", "parking-permit"];

// Map categories to template IDs
const CATEGORY_TEMPLATE_MAP: Record<PartnerCategory, string> = {
  locksmith: "locksmith-intro",
  "property-manager": "property-manager-intro",
  hoa: "hoa-board-intro",
  "uber-driver": "follow-up-generic",
  mechanic: "follow-up-generic",
  mover: "follow-up-generic",
  "parking-permit": "follow-up-generic",
};

// ---- Default Prospects ----
function getDefaultProspects(): ReferralProspect[] {
  const cats: { cat: PartnerCategory; businesses: [string, string, string, boolean?][] }[] = [
    {
      cat: "locksmith",
      businesses: [
        ["ACME Locksmith", "Mike Torres", "Phoenix Metro"],
        ["Arizona Key Masters", "Dave Chen", "Phoenix, Scottsdale"],
        ["Valley Lock & Safe", "Robert Vance", "Tempe, Mesa, Chandler"],
        ["Pop-A-Lock Phoenix", "Sarah Mitchell", "Phoenix Metro"],
        ["Desert Locksmith Services", "Carlos Mendez", "Glendale, Peoria"],
        ["24/7 Lock Rescue", "Jason Park", "Scottsdale"],
        ["Southwest Lock & Key", "Mark Hughes", "Phoenix Central"],
        ["Scottsdale Locksmith Pro", "Lisa Tran", "Scottsdale"],
        ["KeyMe Emergency Locksmith", "Tom Bradley", "Phoenix Metro"],
        ["Chandler Lock Solutions", "Raj Patel", "Chandler, Gilbert"],
        ["Metro Phoenix Locksmith", "Anthony Reyes", "Downtown Phoenix"],
        ["AZ Lock Doctor", "Kevin O'Brien", "West Phoenix"],
        ["Reliable Lock & Key", "Maria Santos", "Mesa, Apache Junction"],
        ["Quick Pick Locksmith", "James Wilson", "North Phoenix"],
        ["Phoenix Master Locksmith", "Brian Kato", "Phoenix Metro"],
        ["Tempe Lock & Security", "Amanda Cruz", "Tempe, ASU Area"],
        ["Gold Canyon Locksmith", "Steve Diaz", "Gold Canyon"],
        ["Sun City Lock Service", "Howard Stein", "Sun City"],
        ["AZ Mobile Locksmith", "Nick Flores", "Phoenix Metro"],
        ["Cactus Locksmith Co", "Derek Chang", "Gilbert, Mesa"],
      ],
    },
    {
      cat: "property-manager",
      businesses: [
        ["Greystar Real Estate Partners", "Jennifer Walsh", "Phoenix Metro"],
        ["Mark-Taylor Residential", "David Kim", "Scottsdale, Phoenix"],
        ["Avenue5 Residential", "Lauren Beck", "Phoenix Metro"],
        ["Weidner Apartment Homes", "Tom Nguyen", "Mesa, Tempe, Chandler"],
        ["Cushman & Wakefield", "Rachel Adams", "Phoenix Metro"],
        ["Lincoln Property Company", "Greg Martinez", "Phoenix, Scottsdale"],
        ["Apartment Management Consultants", "Heather Price", "Phoenix Metro"],
        ["RPM West Valley", "Scott Baker", "Glendale, Peoria"],
        ["Mynd Property Management", "Ashley Rogers", "Phoenix Metro"],
        ["Caliber Property Management", "Miguel Herrera", "Central Phoenix"],
        ["FirstKey Homes", "Christina Lee", "Phoenix Metro"],
        ["Invitation Homes", "Matt Cooper", "Phoenix Metro"],
        ["RPM East Valley", "Diana Foster", "Gilbert, Chandler, Mesa"],
        ["AZ Residential Management", "Paul Thompson", "Phoenix, Tempe"],
        ["Renters Warehouse Phoenix", "Brittany Hayes", "Phoenix Metro"],
        ["Vintage Realty PM", "Oscar Ruiz", "Scottsdale"],
        ["Darwin Property Management", "Sandra Chen", "Phoenix Metro"],
        ["Cresa Phoenix", "Nathan Black", "Phoenix Metro"],
        ["Landis Property Management", "Kelly Jensen", "East Valley"],
        ["HomeRiver Group Phoenix", "Brian Simmons", "Phoenix Metro"],
      ],
    },
    {
      cat: "hoa",
      businesses: [
        ["Anthem Community Council", "Patricia Morgan", "Anthem"],
        ["DC Ranch Community Council", "William Hart", "Scottsdale"],
        ["Estrella Mountain Ranch HOA", "Maria Gonzalez", "Goodyear"],
        ["Verrado Community Assoc.", "Jeff Collins", "Buckeye"],
        ["Power Ranch HOA", "Susan Blake", "Gilbert"],
        ["Vistancia Community Assoc.", "Robert Ellis", "Peoria"],
        ["Fulton Ranch HOA", "Karen Wright", "Chandler"],
        ["Seville HOA", "Daniel Green", "Gilbert"],
        ["Tramonto HOA", "Lisa Carter", "North Phoenix"],
        ["Tatum Ranch HOA", "Chris Palmer", "Cave Creek"],
        ["Las Sendas HOA", "Monica Rivera", "Mesa"],
        ["Desert Ridge Community", "Andrew Scott", "North Phoenix"],
        ["Surprise Farms HOA", "Janet Murphy", "Surprise"],
        ["Arrowhead Ranch HOA", "Tyler Ross", "Glendale"],
        ["Mountain Park Ranch HOA", "Rebecca Lane", "Ahwatukee"],
        ["Rancho El Dorado HOA", "Michael Stewart", "Maricopa"],
        ["McDowell Mountain Ranch", "Cynthia Brooks", "Scottsdale"],
        ["Sunbird HOA", "Howard Klein", "Chandler"],
        ["Superstition Foothills HOA", "Angela Davis", "Gold Canyon"],
        ["Grayhawk Community", "Richard Cole", "Scottsdale"],
      ],
    },
    {
      cat: "mechanic",
      businesses: [
        ["Sun Devil Auto", "Ray Thompson", "Phoenix Metro (12 locations)"],
        ["Honest-1 Auto Care", "Greg Foster", "Scottsdale"],
        ["Virginia Auto Service", "Matt Cowell", "Central Phoenix"],
        ["Good Works Auto Repair", "Glen Hayward", "Tempe"],
        ["Midas Phoenix", "Tony Romano", "Phoenix"],
        ["Christian Brothers Automotive", "Dan Wheeler", "Gilbert, Mesa"],
        ["Scottsdale Muffler & Auto", "Pete Vasquez", "Scottsdale"],
        ["Bridwell Automotive", "Sam Bridwell", "Scottsdale"],
        ["Precision Auto Sales", "Juan Ramirez", "Central Phoenix"],
        ["Elite Auto Repair", "Chris York", "Chandler"],
        ["Desert Oasis Auto Repair", "Frank Pham", "Peoria, Glendale"],
        ["Camelback Tire & Auto", "Larry Stewart", "Phoenix"],
        ["S&S Tire & Auto", "Steve Santos", "Phoenix Metro"],
        ["Highline Car Care", "Dave Wilton", "Mesa"],
        ["AZ Transmissions", "Roberto Lopez", "South Phoenix"],
        ["Greulich's Automotive", "Mark Greulich", "Mesa, Scottsdale"],
        ["Surprise Auto Repair", "Keith Murray", "Surprise"],
        ["Pep Boys Phoenix", "Amanda Torres", "Phoenix Metro"],
        ["AAMCO Transmissions", "George Palmer", "Mesa, Tempe"],
        ["Apex Automotive", "Ryan Hughes", "North Phoenix"],
      ],
    },
    {
      cat: "mover",
      businesses: [
        ["Two Men and a Truck", "Derek Stone", "Phoenix Metro"],
        ["Muscular Moving Men", "Tyler Grant", "Scottsdale, Phoenix"],
        ["College Hunks Hauling", "Brandon Wise", "Phoenix Metro"],
        ["Arizona Moving Pros", "Marco Diaz", "East Valley"],
        ["Bekins Moving Solutions", "Carol Franklin", "Phoenix Metro"],
        ["Suddath Phoenix", "Nicole Martin", "Phoenix Metro"],
        ["Mergenthaler Transfer", "Bill Mergenthaler", "Phoenix Metro"],
        ["Camelback Moving", "Jose Alvarez", "Central Phoenix"],
        ["PODS Phoenix", "Sarah Bennett", "Phoenix Metro"],
        ["All My Sons Moving", "Patrick Neal", "Phoenix Metro"],
        ["3 Best Rated Movers", "Daniel Garcia", "Phoenix Metro"],
        ["U-Pack Phoenix", "Robin Hayes", "Phoenix Metro"],
        ["FlatRate Moving Phoenix", "Andrew Kim", "Scottsdale, Phoenix"],
        ["Desert Moving Co", "Luis Fernandez", "West Valley"],
        ["ProStar Moving & Storage", "Amy Richardson", "East Valley"],
        ["Phoenix Express Movers", "Terrence Adams", "Central Phoenix"],
        ["Valley Relocation", "Christina Wu", "Phoenix Metro"],
        ["Budget Movers Phoenix", "Ray Castillo", "Phoenix, Glendale"],
        ["Gentle Giant Moving", "Peter Walsh", "Scottsdale"],
        ["Mesa Moving & Storage", "Harold Young", "Mesa, Gilbert"],
      ],
    },
    {
      cat: "uber-driver",
      businesses: [
        ["Independent Driver", "Marcus Johnson", "Phoenix Metro"],
        ["Independent Driver", "Rosa Gutierrez", "Scottsdale, Tempe"],
        ["Independent Driver", "Kevin Tran", "Phoenix Airport"],
        ["Independent Driver", "Denise Washington", "West Phoenix"],
        ["Independent Driver", "Ahmad Hassan", "Mesa, Gilbert"],
        ["Independent Driver", "Stephanie Mills", "Downtown Phoenix"],
        ["Independent Driver", "Victor Morales", "Glendale, Peoria"],
        ["Independent Driver", "Michelle Peters", "Chandler, Tempe"],
        ["Independent Driver", "Darnell Brooks", "Phoenix Metro"],
        ["Independent Driver", "Priya Sharma", "Scottsdale"],
        ["Independent Driver", "Jake Hernandez", "South Phoenix"],
        ["Independent Driver", "Tamika Jones", "Surprise, Goodyear"],
        ["Independent Driver", "Wei Lin", "Tempe, ASU"],
        ["Independent Driver", "Francisco Silva", "Phoenix Metro"],
        ["Independent Driver", "Natalie Cooper", "Gilbert, Queen Creek"],
        ["Independent Driver", "Omar Siddiqui", "Central Phoenix"],
        ["Independent Driver", "Chelsea Reed", "Scottsdale Old Town"],
        ["Independent Driver", "Patrick O'Malley", "Glendale"],
        ["Independent Driver", "Yolanda Garcia", "Laveen"],
        ["Independent Driver", "Samuel Kim", "Mesa"],
      ],
    },
    {
      cat: "parking-permit",
      businesses: [
        ["ParkMobile Arizona", "Jason Reed", "Phoenix Metro"],
        ["T2 Systems", "Karen Phillips", "Phoenix Metro"],
        ["LAZ Parking", "Steve Gordon", "Phoenix, Scottsdale"],
        ["ABM Parking Services", "Diana Lopez", "Phoenix Metro"],
        ["SP+ Parking", "Mike Chen", "Phoenix Metro"],
        ["Ace Parking", "Laura Bennett", "Scottsdale, Phoenix"],
        ["Republic Parking System", "Jim Hardy", "Phoenix Metro"],
        ["Premium Parking", "Ashley Moore", "Downtown Phoenix"],
        ["Lanier Parking Solutions", "Robert James", "Phoenix Metro"],
        ["Valley Parking Permits", "Carla Sanchez", "Phoenix Metro"],
        ["AZ Parking Solutions", "Tim Brooks", "Phoenix Metro"],
        ["Towne Park", "Michelle Turner", "Scottsdale, Phoenix"],
        ["Citizens Parking", "Brett Stevens", "Downtown Phoenix"],
        ["Impark Phoenix", "Jenna Clark", "Phoenix Metro"],
        ["ParkWhiz AZ Rep", "David Wu", "Phoenix Metro"],
        ["SpotHero Phoenix", "Sarah O'Brien", "Phoenix Metro"],
        ["ClickPark AZ", "Ryan Martinez", "East Valley"],
        ["Valet Connect Phoenix", "Olivia Grant", "Scottsdale, Phoenix"],
        ["Desert Permit Services", "Marcus Lee", "Phoenix Metro"],
        ["ProPark Phoenix", "Hannah Cole", "Phoenix Metro"],
      ],
    },
  ];

  // Mark some prospects as needing DM research (large companies where listed contact may not be the decision maker)
  const needsDMResearchIds = new Set([
    "property-manager-01", // Greystar
    "property-manager-05", // Cushman & Wakefield
    "property-manager-06", // Lincoln Property
    "property-manager-11", // FirstKey Homes
    "property-manager-12", // Invitation Homes
    "mover-01",  // Two Men and a Truck
    "mover-03",  // College Hunks
    "mover-05",  // Bekins
    "mechanic-01", // Sun Devil Auto (12 locations)
    "parking-permit-04", // ABM
    "parking-permit-05", // SP+
  ]);

  const prospects: ReferralProspect[] = [];
  for (const group of cats) {
    group.businesses.forEach(([biz, contact, area], i) => {
      const id = `${group.cat}-${String(i + 1).padStart(2, "0")}`;
      prospects.push({
        id,
        businessName: biz as string,
        contactName: contact as string,
        phone: "",
        email: "",
        category: group.cat,
        status: "not-contacted",
        serviceArea: area as string,
        notes: "",
        lastContactDate: null,
        nextFollowUp: null,
        needsDMResearch: needsDMResearchIds.has(id),
        decisionMakerName: "",
      });
    });
  }
  return prospects;
}

// ---- Personalization Helper ----
function personalizeTemplate(template: EmailTemplate, prospect: ReferralProspect): { subject: string; body: string } {
  const replacements: Record<string, string> = {
    "[Contact Name]": prospect.decisionMakerName || prospect.contactName,
    "[Business Name]": prospect.businessName,
    "[Company Name]": prospect.businessName,
    "[HOA Name]": prospect.businessName,
  };

  let subject = template.subject;
  let body = template.body;

  for (const [placeholder, value] of Object.entries(replacements)) {
    subject = subject.replaceAll(placeholder, value);
    body = body.replaceAll(placeholder, value);
  }

  return { subject, body };
}

// ---- Component ----
export default function ReferralsPage() {
  const [prospects, setProspects] = useState<ReferralProspect[]>([]);
  const [contactStatuses, setContactStatuses] = useState<ContactStatusMap>({});
  const [activeCategory, setActiveCategory] = useState<PartnerCategory | "all" | "dont-contact">("all");
  const [selectedProspect, setSelectedProspect] = useState<ReferralProspect | null>(null);
  const [previewProspect, setPreviewProspect] = useState<ReferralProspect | null>(null);
  const [viewMode, setViewMode] = useState<"pipeline" | "list">("pipeline");
  const [loaded, setLoaded] = useState(false);
  const [showOutreachConfirm, setShowOutreachConfirm] = useState(false);
  const [outreachSent, setOutreachSent] = useState(false);
  const [outreachLogs, setOutreachLogs] = useState<OutreachLog[]>([]);
  const [dmResearchData, setDmResearchData] = useState<Record<string, string>>({});

  // Load from localStorage or defaults
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProspects(JSON.parse(stored));
      } else {
        const defaults = getDefaultProspects();
        setProspects(defaults);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
      }

      // Load contact statuses
      const storedStatuses = localStorage.getItem(CONTACT_STATUS_KEY);
      if (storedStatuses) {
        setContactStatuses(JSON.parse(storedStatuses));
      }

      // Load outreach logs
      const storedLogs = localStorage.getItem(OUTREACH_LOG_KEY);
      if (storedLogs) {
        setOutreachLogs(JSON.parse(storedLogs));
      }

      // Load DM research data
      const storedDM = localStorage.getItem(DM_RESEARCH_KEY);
      if (storedDM) {
        setDmResearchData(JSON.parse(storedDM));
      }
    } catch {
      setProspects(getDefaultProspects());
    }
    setLoaded(true);
  }, []);

  // Save prospects on change
  useEffect(() => {
    if (loaded && prospects.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prospects));
    }
  }, [prospects, loaded]);

  // Save contact statuses on change
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(CONTACT_STATUS_KEY, JSON.stringify(contactStatuses));
    }
  }, [contactStatuses, loaded]);

  // Save DM research data on change
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(DM_RESEARCH_KEY, JSON.stringify(dmResearchData));
    }
  }, [dmResearchData, loaded]);

  function getContactStatus(id: string): "contact" | "dont-contact" {
    return contactStatuses[id] || "contact";
  }

  function toggleContactStatus(id: string) {
    setContactStatuses((prev) => ({
      ...prev,
      [id]: prev[id] === "dont-contact" ? "contact" : "dont-contact",
    }));
  }

  function updateProspectStatus(id: string, status: OutreachStatus) {
    setProspects((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status, lastContactDate: new Date().toISOString().split("T")[0] }
          : p
      )
    );
    if (selectedProspect?.id === id) {
      setSelectedProspect((prev) => prev ? { ...prev, status, lastContactDate: new Date().toISOString().split("T")[0] } : null);
    }
  }

  function scheduleFollowUp(id: string, date: string) {
    setProspects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, nextFollowUp: date } : p))
    );
    if (selectedProspect?.id === id) {
      setSelectedProspect((prev) => prev ? { ...prev, nextFollowUp: date } : null);
    }
  }

  function updateNotes(id: string, notes: string) {
    setProspects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, notes } : p))
    );
  }

  function updateDMName(id: string, name: string) {
    setDmResearchData((prev) => ({ ...prev, [id]: name }));
    // Also update the prospect's decisionMakerName
    setProspects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, decisionMakerName: name } : p))
    );
  }

  function getTemplateForProspect(prospect: ReferralProspect): EmailTemplate | null {
    const templateId = CATEGORY_TEMPLATE_MAP[prospect.category];
    return REFERRAL_EMAIL_TEMPLATES.find((t) => t.id === templateId) || REFERRAL_EMAIL_TEMPLATES[0];
  }

  function handleStartOutreach() {
    setShowOutreachConfirm(true);
  }

  function handleConfirmOutreach() {
    const contactableIds = prospects
      .filter((p) => getContactStatus(p.id) === "contact" && p.status === "not-contacted")
      .map((p) => p.id);

    // Mark them as emailed
    setProspects((prev) =>
      prev.map((p) =>
        contactableIds.includes(p.id)
          ? { ...p, status: "emailed", lastContactDate: new Date().toISOString().split("T")[0] }
          : p
      )
    );

    // Log the outreach
    const log: OutreachLog = {
      date: new Date().toISOString(),
      prospectIds: contactableIds,
      count: contactableIds.length,
      type: "dry-run",
    };
    const updatedLogs = [...outreachLogs, log];
    setOutreachLogs(updatedLogs);
    localStorage.setItem(OUTREACH_LOG_KEY, JSON.stringify(updatedLogs));

    setShowOutreachConfirm(false);
    setOutreachSent(true);
    setTimeout(() => setOutreachSent(false), 5000);
  }

  // Computed values
  const contactableCount = useMemo(
    () => prospects.filter((p) => getContactStatus(p.id) === "contact").length,
    [prospects, contactStatuses]
  );

  const dontContactCount = useMemo(
    () => prospects.filter((p) => getContactStatus(p.id) === "dont-contact").length,
    [prospects, contactStatuses]
  );

  const readyToContactCount = useMemo(
    () => prospects.filter((p) => getContactStatus(p.id) === "contact" && p.status === "not-contacted").length,
    [prospects, contactStatuses]
  );

  // Filtering logic - sort dont-contact to bottom
  const filtered = useMemo(() => {
    let result: ReferralProspect[];

    if (activeCategory === "dont-contact") {
      result = prospects.filter((p) => getContactStatus(p.id) === "dont-contact");
    } else if (activeCategory === "all") {
      result = [...prospects];
    } else {
      result = prospects.filter((p) => p.category === activeCategory);
    }

    // Sort: contact first, dont-contact last
    if (activeCategory !== "dont-contact") {
      result.sort((a, b) => {
        const aStatus = getContactStatus(a.id);
        const bStatus = getContactStatus(b.id);
        if (aStatus === "dont-contact" && bStatus !== "dont-contact") return 1;
        if (aStatus !== "dont-contact" && bStatus === "dont-contact") return -1;
        return 0;
      });
    }

    return result;
  }, [prospects, activeCategory, contactStatuses]);

  // Pipeline counts
  const pipelineCounts = STATUS_ORDER.map((status) => ({
    status,
    count: filtered.filter((p) => p.status === status && getContactStatus(p.id) === "contact").length,
  }));

  const totalProspects = filtered.length;
  const onboardedCount = filtered.filter((p) => p.status === "onboarded").length;
  const inProgressCount = filtered.filter((p) => p.status !== "not-contacted" && p.status !== "onboarded").length;

  if (!loaded) return null;

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Referral Partner Outreach</h1>
          <p className="text-gray-500 text-sm mt-1">
            Track and manage outreach to potential referral partners across the Phoenix metro area.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("pipeline")}
            className={`px-3 py-1.5 text-sm rounded-lg border transition ${viewMode === "pipeline" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
          >
            Pipeline
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-1.5 text-sm rounded-lg border transition ${viewMode === "list" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
          >
            List
          </button>
        </div>
      </div>

      {/* Contact Counter Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 mb-6 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-blue-100">Outreach Status</p>
            <p className="text-xl font-bold">
              {contactableCount} of {prospects.length} will be contacted
            </p>
            {dontContactCount > 0 && (
              <p className="text-xs text-blue-200 mt-0.5">
                {dontContactCount} prospect{dontContactCount !== 1 ? "s" : ""} excluded
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Send Outreach Section */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Outreach Campaign
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {readyToContactCount} prospect{readyToContactCount !== 1 ? "s" : ""} ready for initial outreach
              {outreachLogs.length > 0 && (
                <span className="text-gray-400"> -- {outreachLogs.length} campaign{outreachLogs.length !== 1 ? "s" : ""} sent previously</span>
              )}
            </p>
          </div>
          <button
            onClick={handleStartOutreach}
            disabled={readyToContactCount === 0}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${
              readyToContactCount > 0
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Start Outreach Campaign ({readyToContactCount})
          </button>
        </div>

        {/* Outreach success message */}
        {outreachSent && (
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-green-700 font-medium">
              Outreach campaign logged successfully! Prospects marked as &quot;Emailed&quot;. (Dry-run -- actual emails will go through GHL API)
            </p>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Total Prospects</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{totalProspects}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">In Progress</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{inProgressCount}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Onboarded</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{onboardedCount}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Conversion Rate</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">
            {totalProspects > 0 ? Math.round((onboardedCount / totalProspects) * 100) : 0}%
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-3 py-1.5 text-sm rounded-full border transition ${activeCategory === "all" ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
        >
          All ({prospects.length})
        </button>
        {ALL_CATEGORIES.map((cat) => {
          const meta = CATEGORY_META[cat];
          const count = prospects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-sm rounded-full border transition flex items-center gap-1.5 ${activeCategory === cat ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={meta.icon} />
              </svg>
              {meta.label} ({count})
            </button>
          );
        })}
        {/* Don't Contact filter tab */}
        <button
          onClick={() => setActiveCategory("dont-contact")}
          className={`px-3 py-1.5 text-sm rounded-full border transition flex items-center gap-1.5 ${activeCategory === "dont-contact" ? "bg-red-600 text-white border-red-600" : "bg-white text-red-500 border-red-200 hover:bg-red-50"}`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
          Don&apos;t Contact ({dontContactCount})
        </button>
      </div>

      {/* Pipeline View */}
      {viewMode === "pipeline" && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {pipelineCounts.map(({ status, count }) => {
            const meta = STATUS_META[status];
            const statusProspects = filtered.filter((p) => p.status === status);
            return (
              <div key={status} className="bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <span className={`text-xs font-bold uppercase tracking-wider ${meta.color}`}>{meta.label}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${meta.bg} ${meta.color}`}>{count}</span>
                </div>
                <div className="p-2 space-y-1.5 max-h-[400px] overflow-y-auto">
                  {statusProspects.length === 0 && (
                    <p className="text-xs text-gray-400 text-center py-4">No prospects</p>
                  )}
                  {statusProspects.map((prospect) => {
                    const catMeta = CATEGORY_META[prospect.category];
                    const isDontContact = getContactStatus(prospect.id) === "dont-contact";
                    return (
                      <div
                        key={prospect.id}
                        className={`relative w-full text-left p-2.5 rounded-lg transition border ${
                          isDontContact
                            ? "border-red-300 bg-red-50/50 opacity-60"
                            : "border-transparent hover:border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <button
                          onClick={() => {
                            setSelectedProspect(prospect);
                            setPreviewProspect(null);
                          }}
                          className="w-full text-left"
                        >
                          <p className={`text-sm font-medium text-gray-900 truncate ${isDontContact ? "line-through text-gray-400" : ""}`}>
                            {prospect.businessName}
                          </p>
                          <p className={`text-xs truncate ${isDontContact ? "text-gray-400 line-through" : "text-gray-500"}`}>
                            {prospect.contactName}
                          </p>
                          <div className="flex items-center gap-1 mt-1 flex-wrap">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${catMeta.color}`}>{catMeta.label}</span>
                            {prospect.needsDMResearch && !dmResearchData[prospect.id] && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">Needs DM Research</span>
                            )}
                          </div>
                        </button>
                        {/* Contact toggle */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleContactStatus(prospect.id);
                          }}
                          className={`absolute top-2 right-2 text-[10px] px-1.5 py-0.5 rounded-full font-semibold transition ${
                            isDontContact
                              ? "bg-red-100 text-red-600 hover:bg-red-200"
                              : "bg-green-100 text-green-600 hover:bg-green-200"
                          }`}
                          title={isDontContact ? "Click to mark as Contact" : "Click to mark as Don't Contact"}
                        >
                          {isDontContact ? "No" : "OK"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-10">Contact</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Business</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Area</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((prospect) => {
                  const catMeta = CATEGORY_META[prospect.category];
                  const statusMeta = STATUS_META[prospect.status];
                  const isDontContact = getContactStatus(prospect.id) === "dont-contact";
                  return (
                    <tr key={prospect.id} className={`transition ${isDontContact ? "bg-red-50/50 opacity-60" : "hover:bg-gray-50"}`}>
                      {/* Contact Toggle */}
                      <td className="px-4 py-3">
                        <button
                          onClick={() => toggleContactStatus(prospect.id)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition border-2 ${
                            isDontContact
                              ? "border-red-400 bg-red-100 text-red-600 hover:bg-red-200"
                              : "border-green-400 bg-green-100 text-green-600 hover:bg-green-200"
                          }`}
                          title={isDontContact ? "Click to allow contact" : "Click to exclude from outreach"}
                        >
                          {isDontContact ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <button onClick={() => { setSelectedProspect(prospect); setPreviewProspect(null); }} className="text-left">
                          <p className={`font-medium ${isDontContact ? "text-gray-400 line-through" : "text-gray-900"}`}>
                            {prospect.businessName}
                          </p>
                          {prospect.needsDMResearch && !dmResearchData[prospect.id] && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">Needs DM Research</span>
                          )}
                        </button>
                      </td>
                      <td className={`px-4 py-3 ${isDontContact ? "text-gray-400 line-through" : "text-gray-600"}`}>
                        {prospect.contactName}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded ${catMeta.color}`}>{catMeta.label}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{prospect.serviceArea}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusMeta.bg} ${statusMeta.color}`}>{statusMeta.label}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <select
                            value={prospect.status}
                            onChange={(e) => updateProspectStatus(prospect.id, e.target.value as OutreachStatus)}
                            className="text-xs border border-gray-200 rounded px-2 py-1 bg-white"
                          >
                            {STATUS_ORDER.map((s) => (
                              <option key={s} value={s}>{STATUS_META[s].label}</option>
                            ))}
                          </select>
                          <button
                            onClick={() => {
                              setPreviewProspect(prospect);
                              setSelectedProspect(null);
                            }}
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                            title="Preview email"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detail Panel / Modal */}
      {selectedProspect && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProspect(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className={`text-lg font-bold truncate ${getContactStatus(selectedProspect.id) === "dont-contact" ? "text-gray-400 line-through" : "text-gray-900"}`}>
                    {selectedProspect.businessName}
                  </h2>
                  {selectedProspect.needsDMResearch && !dmResearchData[selectedProspect.id] && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold flex-shrink-0 whitespace-nowrap">
                      Needs DM Research
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{selectedProspect.contactName}</p>
              </div>
              <div className="flex items-center gap-2 ml-3">
                {/* Contact/Don't Contact toggle in modal */}
                <button
                  onClick={() => toggleContactStatus(selectedProspect.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    getContactStatus(selectedProspect.id) === "dont-contact"
                      ? "bg-red-100 text-red-700 hover:bg-red-200 border border-red-300"
                      : "bg-green-100 text-green-700 hover:bg-green-200 border border-green-300"
                  }`}
                >
                  {getContactStatus(selectedProspect.id) === "dont-contact" ? "Don't Contact" : "Contact"}
                </button>
                <button onClick={() => setSelectedProspect(null)} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-5">
              {/* DM Research Section */}
              {selectedProspect.needsDMResearch && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <label className="block text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                    Decision Maker Research
                  </label>
                  <p className="text-xs text-amber-600 mb-2">
                    This is a large organization. The listed contact may not be the decision maker. Enter the actual decision maker once identified.
                  </p>
                  <input
                    type="text"
                    value={dmResearchData[selectedProspect.id] || ""}
                    onChange={(e) => updateDMName(selectedProspect.id, e.target.value)}
                    placeholder="Enter decision maker name..."
                    className="w-full border border-amber-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  {dmResearchData[selectedProspect.id] && (
                    <p className="text-xs text-green-600 mt-1 font-medium">
                      Decision maker identified: {dmResearchData[selectedProspect.id]}
                    </p>
                  )}
                </div>
              )}

              {/* Status */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Status</label>
                <div className="flex flex-wrap gap-2">
                  {STATUS_ORDER.map((s) => {
                    const meta = STATUS_META[s];
                    return (
                      <button
                        key={s}
                        onClick={() => updateProspectStatus(selectedProspect.id, s)}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium border transition ${selectedProspect.status === s ? `${meta.bg} ${meta.color} border-current` : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"}`}
                      >
                        {meta.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Category</label>
                  <span className={`text-xs px-2 py-1 rounded ${CATEGORY_META[selectedProspect.category].color}`}>
                    {CATEGORY_META[selectedProspect.category].label}
                  </span>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Service Area</label>
                  <p className="text-sm text-gray-700">{selectedProspect.serviceArea}</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Last Contact</label>
                  <p className="text-sm text-gray-700">{selectedProspect.lastContactDate || "Never"}</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Next Follow-up</label>
                  <p className="text-sm text-gray-700">{selectedProspect.nextFollowUp || "Not scheduled"}</p>
                </div>
              </div>

              {/* Schedule Outreach */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Schedule Outreach</label>
                <input
                  type="date"
                  value={selectedProspect.nextFollowUp || ""}
                  onChange={(e) => scheduleFollowUp(selectedProspect.id, e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Notes</label>
                <textarea
                  rows={3}
                  defaultValue={selectedProspect.notes}
                  onBlur={(e) => updateNotes(selectedProspect.id, e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none"
                  placeholder="Add notes about this prospect..."
                />
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    setPreviewProspect(selectedProspect);
                    setSelectedProspect(null);
                  }}
                  className="flex-1 text-sm bg-gray-100 text-gray-700 rounded-lg px-3 py-2 hover:bg-gray-200 transition font-medium"
                >
                  Preview Email
                </button>
                <button
                  onClick={() => {
                    updateProspectStatus(selectedProspect.id, "emailed");
                    setSelectedProspect(null);
                  }}
                  className="flex-1 text-sm bg-blue-600 text-white rounded-lg px-3 py-2 hover:bg-blue-700 transition"
                >
                  Mark Emailed
                </button>
                <button
                  onClick={() => {
                    updateProspectStatus(selectedProspect.id, "called");
                    setSelectedProspect(null);
                  }}
                  className="flex-1 text-sm bg-yellow-500 text-white rounded-lg px-3 py-2 hover:bg-yellow-600 transition"
                >
                  Mark Called
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Email Preview Modal */}
      {previewProspect && (() => {
        const template = getTemplateForProspect(previewProspect);
        if (!template) return null;
        const { subject, body } = personalizeTemplate(template, previewProspect);
        return (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setPreviewProspect(null)}>
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Preview
                  </h2>
                  <button onClick={() => setPreviewProspect(null)} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 space-y-1.5">
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">To:</span> {previewProspect.contactName} at {previewProspect.businessName}
                  </p>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">Template:</span> {template.name}
                    {!template.approved && (
                      <span className="ml-2 text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded text-[10px] font-medium">Pending Approval</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">Category:</span> {CATEGORY_META[previewProspect.category].label}
                  </p>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">Service Area:</span> {previewProspect.serviceArea}
                  </p>
                  {previewProspect.needsDMResearch && (
                    <p className="text-xs text-amber-600 font-medium">
                      {dmResearchData[previewProspect.id]
                        ? `Decision maker identified: ${dmResearchData[previewProspect.id]}`
                        : "Warning: Decision maker not yet identified -- email addressed to listed contact"
                      }
                    </p>
                  )}
                </div>
              </div>
              <div className="p-6">
                {/* Subject line */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Subject</label>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2.5">
                    <p className="text-sm font-medium text-blue-900">{subject}</p>
                  </div>
                </div>

                {/* Email body */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Body</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-4">
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">{body}</pre>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-5 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setSelectedProspect(previewProspect);
                      setPreviewProspect(null);
                    }}
                    className="flex-1 text-sm bg-gray-100 text-gray-700 rounded-lg px-3 py-2.5 hover:bg-gray-200 transition font-medium"
                  >
                    Back to Details
                  </button>
                  <button
                    onClick={() => {
                      updateProspectStatus(previewProspect.id, "emailed");
                      setPreviewProspect(null);
                    }}
                    className="flex-1 text-sm bg-blue-600 text-white rounded-lg px-3 py-2.5 hover:bg-blue-700 transition font-medium"
                  >
                    Mark as Emailed
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Outreach Confirmation Modal */}
      {showOutreachConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowOutreachConfirm(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Confirm Outreach Campaign
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  This will send personalized intro emails to <strong>{readyToContactCount} prospect{readyToContactCount !== 1 ? "s" : ""}</strong>.
                  Each email will be customized based on their business type and service area.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>Dry-run mode:</strong> This will mark prospects as &quot;Emailed&quot; and log the campaign, but actual emails will be sent through the GHL API when connected.
                </p>
              </div>

              <div className="text-xs text-gray-500">
                <p className="font-semibold mb-1">Campaign breakdown:</p>
                <ul className="space-y-0.5">
                  {ALL_CATEGORIES.map((cat) => {
                    const catCount = prospects.filter(
                      (p) => p.category === cat && getContactStatus(p.id) === "contact" && p.status === "not-contacted"
                    ).length;
                    if (catCount === 0) return null;
                    return (
                      <li key={cat} className="flex justify-between">
                        <span>{CATEGORY_META[cat].label}</span>
                        <span className="font-medium">{catCount}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowOutreachConfirm(false)}
                  className="flex-1 text-sm bg-gray-100 text-gray-700 rounded-lg px-3 py-2.5 hover:bg-gray-200 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmOutreach}
                  className="flex-1 text-sm bg-blue-600 text-white rounded-lg px-3 py-2.5 hover:bg-blue-700 transition font-medium"
                >
                  Confirm &amp; Send ({readyToContactCount})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
