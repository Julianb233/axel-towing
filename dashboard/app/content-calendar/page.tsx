"use client";

import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";

/* ============================================================
   DATA
   ============================================================ */

type ContentType = "blog" | "location" | "spanish" | "niche";
type ContentStatus = "published" | "scheduled" | "draft" | "idea";

interface ContentPiece {
  id: number;
  title: string;
  type: ContentType;
  targetKeyword: string;
  searchVolume: number;
  difficulty: number;
  priority: "high" | "medium" | "low";
  status: ContentStatus;
  scheduledDate?: string;
}

interface CalendarEvent {
  date: string; // YYYY-MM-DD
  title: string;
  type: ContentType;
  status: ContentStatus;
}

// Pipeline stats
const pipelineStats = {
  totalPlanned: 123,
  published: { blog: 62, city: 38, spanish: 5, niche: 11 },
  remaining: 7,
};

const publishedTotal =
  pipelineStats.published.blog +
  pipelineStats.published.city +
  pipelineStats.published.spanish +
  pipelineStats.published.niche;

// Calendar events — March through June 2026
const calendarEvents: CalendarEvent[] = [
  // March (already published)
  { date: "2026-03-03", title: "AZ HB 2269 Signage Requirements", type: "blog", status: "published" },
  { date: "2026-03-03", title: "AZ Private Property Towing Laws Guide", type: "blog", status: "published" },
  { date: "2026-03-10", title: "Best Private Property Towing Phoenix", type: "blog", status: "published" },
  { date: "2026-03-10", title: "Car Towed Phoenix What To Do", type: "blog", status: "published" },
  { date: "2026-03-17", title: "Impound Fees Phoenix Cost Guide", type: "blog", status: "published" },
  { date: "2026-03-17", title: "San Tan Heights Location Page", type: "location", status: "published" },
  { date: "2026-03-22", title: "Coolidge Location Page", type: "location", status: "published" },
  { date: "2026-03-22", title: "Rio Verde Location Page", type: "location", status: "published" },
  { date: "2026-03-24", title: "New River Location Page", type: "location", status: "published" },
  // April
  { date: "2026-04-01", title: "Apartment Towing Mesa AZ Guide", type: "blog", status: "scheduled" },
  { date: "2026-04-01", title: "HOA Towing Chandler AZ Guide", type: "blog", status: "scheduled" },
  { date: "2026-04-07", title: "Towing Chandler AZ Complete Guide", type: "blog", status: "scheduled" },
  { date: "2026-04-07", title: "Parking Enforcement Gilbert AZ Guide", type: "blog", status: "scheduled" },
  { date: "2026-04-14", title: "Private Property Towing Scottsdale", type: "blog", status: "scheduled" },
  { date: "2026-04-14", title: "Towing Apache Junction Guide", type: "blog", status: "scheduled" },
  { date: "2026-04-21", title: "Phoenix Impound Lots Complete Map", type: "blog", status: "scheduled" },
  { date: "2026-04-21", title: "AZ Parking Sign Templates", type: "blog", status: "scheduled" },
  { date: "2026-04-28", title: "Car Towed ASU Tempe Student Guide", type: "blog", status: "scheduled" },
  { date: "2026-04-28", title: "Commercial Towing Phoenix Guide", type: "blog", status: "scheduled" },
  // May
  { date: "2026-05-04", title: "Que Hacer Cuando Tu Auto Se Descompone en Phoenix", type: "spanish", status: "draft" },
  { date: "2026-05-04", title: "Costos de Grua en Phoenix 2026", type: "spanish", status: "draft" },
  { date: "2026-05-11", title: "Servicios de Remolque para Propiedades en Phoenix", type: "spanish", status: "draft" },
  { date: "2026-05-11", title: "Surprise City Location Page", type: "location", status: "draft" },
  { date: "2026-05-18", title: "Derechos del Inquilino Cuando Remolcan Tu Auto en Arizona", type: "spanish", status: "draft" },
  { date: "2026-05-18", title: "Avondale Location Page", type: "location", status: "draft" },
  { date: "2026-05-25", title: "Monsoon Season Parking Prep Guide", type: "niche", status: "idea" },
  { date: "2026-05-25", title: "Leyes de Remolque en Arizona: Guia Completa 2026", type: "spanish", status: "draft" },
  // June
  { date: "2026-06-01", title: "Como Recuperar Tu Vehiculo del Corralon en Phoenix", type: "spanish", status: "idea" },
  { date: "2026-06-01", title: "Goodyear Location Page", type: "location", status: "idea" },
  { date: "2026-06-08", title: "HOA Election Season Towing Guide", type: "niche", status: "idea" },
  { date: "2026-06-08", title: "Buckeye Location Page", type: "location", status: "idea" },
  { date: "2026-06-15", title: "Servicios de Remolque para HOA en Phoenix", type: "spanish", status: "idea" },
  { date: "2026-06-15", title: "Summer Heat Vehicle Abandonment Guide", type: "niche", status: "idea" },
  { date: "2026-06-22", title: "Remolque de Apartamentos en Mesa y Tempe", type: "spanish", status: "idea" },
  { date: "2026-06-22", title: "Fountain Hills Location Page", type: "location", status: "idea" },
  { date: "2026-06-29", title: "Servicios de Grua Cerca de ASU para Estudiantes", type: "spanish", status: "idea" },
  { date: "2026-06-29", title: "Maricopa City Location Page", type: "location", status: "idea" },
];

// Content backlog
const contentBacklog: ContentPiece[] = [
  // Spanish blog posts
  { id: 1, title: "Que Hacer Cuando Tu Auto Se Descompone en Phoenix", type: "spanish", targetKeyword: "grua phoenix", searchVolume: 90, difficulty: 8, priority: "high", status: "draft", scheduledDate: "2026-05-04" },
  { id: 2, title: "Costos de Grua en Phoenix 2026", type: "spanish", targetKeyword: "costo grua phoenix", searchVolume: 70, difficulty: 5, priority: "high", status: "draft", scheduledDate: "2026-05-04" },
  { id: 3, title: "Servicios de Remolque para Propiedades en Phoenix", type: "spanish", targetKeyword: "remolque propiedad privada phoenix", searchVolume: 40, difficulty: 5, priority: "high", status: "draft", scheduledDate: "2026-05-11" },
  { id: 4, title: "Derechos del Inquilino Cuando Remolcan Tu Auto en Arizona", type: "spanish", targetKeyword: "derechos remolque arizona", searchVolume: 60, difficulty: 5, priority: "high", status: "draft", scheduledDate: "2026-05-18" },
  { id: 5, title: "Leyes de Remolque en Arizona: Guia Completa 2026", type: "spanish", targetKeyword: "leyes remolque arizona", searchVolume: 50, difficulty: 8, priority: "medium", status: "draft", scheduledDate: "2026-05-25" },
  { id: 6, title: "Como Recuperar Tu Vehiculo del Corralon en Phoenix", type: "spanish", targetKeyword: "recuperar vehiculo corralon phoenix", searchVolume: 80, difficulty: 5, priority: "medium", status: "idea", scheduledDate: "2026-06-01" },
  { id: 7, title: "Servicios de Remolque para HOA en Phoenix", type: "spanish", targetKeyword: "remolque hoa phoenix espanol", searchVolume: 30, difficulty: 3, priority: "medium", status: "idea", scheduledDate: "2026-06-15" },
  { id: 8, title: "Remolque de Apartamentos en Mesa y Tempe", type: "spanish", targetKeyword: "remolque apartamentos mesa tempe", searchVolume: 25, difficulty: 3, priority: "medium", status: "idea", scheduledDate: "2026-06-22" },
  { id: 9, title: "Servicios de Grua Cerca de ASU para Estudiantes", type: "spanish", targetKeyword: "grua asu estudiantes", searchVolume: 35, difficulty: 3, priority: "low", status: "idea", scheduledDate: "2026-06-29" },
  { id: 10, title: "Estacionamiento Ilegal en Arizona: Multas y Consecuencias", type: "spanish", targetKeyword: "estacionamiento ilegal arizona", searchVolume: 45, difficulty: 5, priority: "low", status: "idea" },
  // Remaining location pages
  { id: 11, title: "Surprise, AZ - Private Property Towing", type: "location", targetKeyword: "towing surprise az", searchVolume: 110, difficulty: 8, priority: "high", status: "draft", scheduledDate: "2026-05-11" },
  { id: 12, title: "Avondale, AZ - Towing & Impound Services", type: "location", targetKeyword: "towing avondale az", searchVolume: 70, difficulty: 5, priority: "high", status: "draft", scheduledDate: "2026-05-18" },
  { id: 13, title: "Goodyear, AZ - Parking Enforcement", type: "location", targetKeyword: "towing goodyear az", searchVolume: 90, difficulty: 5, priority: "medium", status: "idea", scheduledDate: "2026-06-01" },
  { id: 14, title: "Buckeye, AZ - Private Property Towing", type: "location", targetKeyword: "towing buckeye az", searchVolume: 60, difficulty: 5, priority: "medium", status: "idea", scheduledDate: "2026-06-08" },
  { id: 15, title: "Fountain Hills, AZ - HOA Towing", type: "location", targetKeyword: "towing fountain hills az", searchVolume: 40, difficulty: 3, priority: "low", status: "idea", scheduledDate: "2026-06-22" },
  { id: 16, title: "Maricopa, AZ - Towing Services", type: "location", targetKeyword: "towing maricopa az", searchVolume: 50, difficulty: 5, priority: "low", status: "idea", scheduledDate: "2026-06-29" },
  // Seasonal / niche content
  { id: 17, title: "Monsoon Season Parking Prep: Protect Your Lot (2026)", type: "niche", targetKeyword: "monsoon parking phoenix", searchVolume: 40, difficulty: 5, priority: "medium", status: "idea", scheduledDate: "2026-05-25" },
  { id: 18, title: "HOA Election Season: Why New Boards Switch Towing Providers", type: "niche", targetKeyword: "hoa election towing provider", searchVolume: 20, difficulty: 3, priority: "medium", status: "idea", scheduledDate: "2026-06-08" },
  { id: 19, title: "Summer Heat & Vehicle Abandonment: Property Manager Playbook", type: "niche", targetKeyword: "abandoned vehicle phoenix", searchVolume: 90, difficulty: 10, priority: "high", status: "idea", scheduledDate: "2026-06-15" },
  { id: 20, title: "Holiday Parking Enforcement: How to Handle Visitor Overflow", type: "niche", targetKeyword: "holiday parking enforcement hoa", searchVolume: 30, difficulty: 3, priority: "low", status: "idea" },
  // Competitive gap content
  { id: 21, title: "Tow Truck Cost Estimator Tool Page", type: "niche", targetKeyword: "towing cost estimator", searchVolume: 720, difficulty: 15, priority: "high", status: "idea" },
  { id: 22, title: "24 Hour Towing Phoenix: Why Response Time Matters", type: "blog", targetKeyword: "24 hour towing phoenix", searchVolume: 390, difficulty: 18, priority: "high", status: "idea" },
  { id: 23, title: "Private Property Towing: How It Works & What It Costs", type: "blog", targetKeyword: "private property towing", searchVolume: 480, difficulty: 12, priority: "high", status: "idea" },
];

// Keyword gap analysis — competitors rank, Axle doesn't
const keywordGaps = [
  { keyword: "tow truck phoenix", volume: 390, competitor: "Freeway Towing (#1)", suggestedContent: "24 Hour Tow Truck Services Phoenix page", trafficOpportunity: 180 },
  { keyword: "24 hour towing phoenix", volume: 390, competitor: "Freeway Towing (#2)", suggestedContent: "24/7 Emergency Towing landing page", trafficOpportunity: 150 },
  { keyword: "private property towing", volume: 480, competitor: "No one ranks locally", suggestedContent: "Pillar page: How Private Property Towing Works", trafficOpportunity: 200 },
  { keyword: "private property impound", volume: 390, competitor: "No one ranks locally", suggestedContent: "Impound process explainer + FAQ", trafficOpportunity: 160 },
  { keyword: "towing chandler az", volume: 480, competitor: "No one ranks locally", suggestedContent: "Chandler city page (published, awaiting index)", trafficOpportunity: 190 },
  { keyword: "tow yards near me", volume: 2900, competitor: "Freeway (#5)", suggestedContent: "Complete tow yard directory + map tool", trafficOpportunity: 350 },
  { keyword: "towing cost estimator", volume: 720, competitor: "Freeway (#9)", suggestedContent: "Interactive tow cost calculator page", trafficOpportunity: 280 },
  { keyword: "impound lot near me", volume: 8100, competitor: "No one ranks locally", suggestedContent: "Phoenix impound lot finder + map", trafficOpportunity: 500 },
  { keyword: "towing service near me", volume: 27100, competitor: "No one ranks locally", suggestedContent: "Local service area hub with city links", trafficOpportunity: 800 },
  { keyword: "car towed what to do", volume: 1600, competitor: "Arizona Impound (#4)", suggestedContent: "Step-by-step towed vehicle recovery guide", trafficOpportunity: 320 },
  { keyword: "phoenix tow truck", volume: 260, competitor: "Freeway (#1)", suggestedContent: "Fleet page showcasing Axle trucks & capabilities", trafficOpportunity: 120 },
  { keyword: "tow truck near me", volume: 14800, competitor: "No one ranks locally", suggestedContent: "Near me optimized landing pages by zip code", trafficOpportunity: 600 },
  { keyword: "hoa towing rules arizona", volume: 110, competitor: "No one ranks", suggestedContent: "HOA board towing compliance checklist", trafficOpportunity: 70 },
  { keyword: "apartment parking enforcement phoenix", volume: 70, competitor: "No one ranks", suggestedContent: "Apartment towing services hub page", trafficOpportunity: 50 },
  { keyword: "vehicle impound release", volume: 170, competitor: "AZ Impound (#6)", suggestedContent: "Vehicle release process guide with hours", trafficOpportunity: 80 },
  { keyword: "predatory towing phoenix", volume: 40, competitor: "No one ranks", suggestedContent: "Consumer protection guide (builds trust)", trafficOpportunity: 30 },
  { keyword: "towing cost per mile arizona", volume: 70, competitor: "No one ranks", suggestedContent: "Arizona towing rate guide with calculator", trafficOpportunity: 50 },
  { keyword: "emergency towing phoenix", volume: 140, competitor: "Kwik Tow (#8)", suggestedContent: "Emergency services page with response times", trafficOpportunity: 90 },
  { keyword: "motorcycle towing phoenix", volume: 30, competitor: "No one ranks", suggestedContent: "Specialty vehicle towing page", trafficOpportunity: 20 },
  { keyword: "rv towing phoenix", volume: 50, competitor: "Freeway (#7)", suggestedContent: "RV & oversized vehicle towing page", trafficOpportunity: 35 },
];

// Top performing existing content
const topPerformingContent = [
  { title: "Axle Towing Homepage", url: "/", estimatedTraffic: 97, keyword: "axle towing", position: 1, lastUpdated: "2026-03-24" },
  { title: "Impound Fees Phoenix Cost Guide", url: "/blog/impound-fees-phoenix-cost-guide", estimatedTraffic: 25, keyword: "impound fees phoenix", position: 1, lastUpdated: "2026-03-17" },
  { title: "Best Towing Companies Phoenix", url: "/blog/best-private-property-towing-companies-phoenix", estimatedTraffic: 18, keyword: "private property towing companies phoenix", position: 3, lastUpdated: "2026-03-10" },
  { title: "Car Towed Phoenix What To Do", url: "/blog/car-towed-phoenix-what-to-do", estimatedTraffic: 12, keyword: "car towed phoenix", position: 8, lastUpdated: "2026-03-10" },
  { title: "AZ Private Property Towing Laws", url: "/blog/arizona-private-property-towing-laws-complete-guide", estimatedTraffic: 8, keyword: "arizona private property towing laws", position: 5, lastUpdated: "2026-03-03" },
];

const underperformingContent = [
  { title: "Towing Chandler AZ Guide", url: "/blog/towing-services-chandler-az-guide", estimatedTraffic: 0, keyword: "towing chandler az", issue: "Not indexed yet - awaiting DNS", lastUpdated: "2026-03-22" },
  { title: "Phoenix Impound Lots Map", url: "/blog/phoenix-impound-lots-tow-yards-complete-map", estimatedTraffic: 0, keyword: "phoenix impound lots", issue: "Not indexed - high potential (150 vol)", lastUpdated: "2026-03-22" },
  { title: "Car Towed ASU Student Guide", url: "/blog/car-towed-asu-tempe-student-guide", estimatedTraffic: 0, keyword: "car towed asu tempe", issue: "Not indexed - seasonal opportunity", lastUpdated: "2026-03-22" },
  { title: "Service Area Pages (38)", url: "/locations/*", estimatedTraffic: 2, keyword: "towing [city] az", issue: "Awaiting DNS + backlinks", lastUpdated: "2026-03-23" },
  { title: "Spanish Language Pages (5)", url: "/es/*", estimatedTraffic: 0, keyword: "grua phoenix", issue: "Need 10 more for critical mass", lastUpdated: "2026-03-19" },
];

/* ============================================================
   HELPERS
   ============================================================ */

const typeConfig: Record<ContentType, { label: string; color: string; dot: string; bg: string }> = {
  blog: { label: "Blog", color: "text-blue-700", dot: "bg-blue-500", bg: "bg-blue-50 border-blue-200" },
  location: { label: "Location", color: "text-emerald-700", dot: "bg-emerald-500", bg: "bg-emerald-50 border-emerald-200" },
  spanish: { label: "Spanish", color: "text-purple-700", dot: "bg-purple-500", bg: "bg-purple-50 border-purple-200" },
  niche: { label: "Niche", color: "text-orange-700", dot: "bg-orange-500", bg: "bg-orange-50 border-orange-200" },
};

const statusConfig: Record<ContentStatus, { label: string; color: string }> = {
  published: { label: "Published", color: "bg-green-50 text-green-700 border-green-200" },
  scheduled: { label: "Scheduled", color: "bg-blue-50 text-blue-700 border-blue-200" },
  draft: { label: "Draft", color: "bg-amber-50 text-amber-700 border-amber-200" },
  idea: { label: "Idea", color: "bg-gray-50 text-gray-600 border-gray-200" },
};

const priorityConfig: Record<string, { label: string; color: string }> = {
  high: { label: "High", color: "bg-red-50 text-red-700 border-red-200" },
  medium: { label: "Medium", color: "bg-amber-50 text-amber-700 border-amber-200" },
  low: { label: "Low", color: "bg-gray-50 text-gray-500 border-gray-200" },
};

// Build month grid data
interface MonthData {
  name: string;
  year: number;
  month: number; // 0-indexed
  weeks: { date: Date; events: CalendarEvent[] }[][];
}

function buildMonthGrid(year: number, month: number): { date: Date; events: CalendarEvent[] }[][] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = firstDay.getDay(); // 0=Sun

  const weeks: { date: Date; events: CalendarEvent[] }[][] = [];
  let week: { date: Date; events: CalendarEvent[] }[] = [];

  // Fill start blanks
  for (let i = 0; i < startOffset; i++) {
    const d = new Date(year, month, 1 - startOffset + i);
    week.push({ date: d, events: [] });
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    const d = new Date(year, month, day);
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const events = calendarEvents.filter((e) => e.date === dateStr);
    week.push({ date: d, events });
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  // Fill end blanks
  if (week.length > 0) {
    while (week.length < 7) {
      const lastDate = week[week.length - 1].date;
      const d = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + 1);
      week.push({ date: d, events: [] });
    }
    weeks.push(week);
  }

  return weeks;
}

const months: MonthData[] = [
  { name: "March 2026", year: 2026, month: 2, weeks: buildMonthGrid(2026, 2) },
  { name: "April 2026", year: 2026, month: 3, weeks: buildMonthGrid(2026, 3) },
  { name: "May 2026", year: 2026, month: 4, weeks: buildMonthGrid(2026, 4) },
  { name: "June 2026", year: 2026, month: 5, weeks: buildMonthGrid(2026, 5) },
];

type SortField = "title" | "searchVolume" | "difficulty" | "priority" | "status";
type SortDir = "asc" | "desc";

/* ============================================================
   PAGE COMPONENT
   ============================================================ */

export default function ContentCalendarPage() {
  const [activeMonth, setActiveMonth] = useState(1); // April by default
  const [backlogFilter, setBacklogFilter] = useState<ContentType | "all">("all");
  const [sortField, setSortField] = useState<SortField>("priority");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  // Sort backlog
  const filteredBacklog = contentBacklog
    .filter((item) => backlogFilter === "all" || item.type === backlogFilter)
    .sort((a, b) => {
      const dir = sortDir === "asc" ? 1 : -1;
      switch (sortField) {
        case "title": return a.title.localeCompare(b.title) * dir;
        case "searchVolume": return (a.searchVolume - b.searchVolume) * dir;
        case "difficulty": return (a.difficulty - b.difficulty) * dir;
        case "priority": {
          const pOrder = { high: 0, medium: 1, low: 2 };
          return (pOrder[a.priority] - pOrder[b.priority]) * dir;
        }
        case "status": return a.status.localeCompare(b.status) * dir;
        default: return 0;
      }
    });

  function handleSort(field: SortField) {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  }

  const sortIcon = (field: SortField) => {
    if (sortField !== field) return "";
    return sortDir === "asc" ? " \u2191" : " \u2193";
  };

  const totalGapTraffic = keywordGaps.reduce((sum, g) => sum + g.trafficOpportunity, 0);

  return (
    <>
      <PageHeader
        badge="SEO Content Calendar"
        title="Content Calendar & Pipeline"
        subtitle="123-page content plan to dominate Phoenix towing search results across English, Spanish, and niche markets."
      />

      {/* ============================================================
         1. CONTENT PIPELINE OVERVIEW
         ============================================================ */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="stat-card" style={{ "--accent-color": "#1e6bb8" } as React.CSSProperties}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Total Planned</p>
            <p className="text-3xl font-bold font-display text-brand-blue mt-1">{pipelineStats.totalPlanned}</p>
            <p className="text-xs text-gray-400 mt-1">pages target</p>
          </div>
          <div className="stat-card" style={{ "--accent-color": "#16a34a" } as React.CSSProperties}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Published</p>
            <p className="text-3xl font-bold font-display text-green-600 mt-1">{publishedTotal}</p>
            <p className="text-xs text-gray-400 mt-1">{Math.round((publishedTotal / pipelineStats.totalPlanned) * 100)}% complete</p>
          </div>
          <div className="stat-card" style={{ "--accent-color": "#d97706" } as React.CSSProperties}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Remaining</p>
            <p className="text-3xl font-bold font-display text-amber-600 mt-1">{pipelineStats.remaining}</p>
            <p className="text-xs text-gray-400 mt-1">to reach 123</p>
          </div>
          <div className="stat-card col-span-2 md:col-span-2" style={{ "--accent-color": "#7c3aed" } as React.CSSProperties}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Content Types</p>
            <div className="grid grid-cols-4 gap-2">
              {([
                { type: "blog" as ContentType, count: pipelineStats.published.blog },
                { type: "location" as ContentType, count: pipelineStats.published.city },
                { type: "spanish" as ContentType, count: pipelineStats.published.spanish },
                { type: "niche" as ContentType, count: pipelineStats.published.niche },
              ]).map(({ type, count }) => (
                <div key={type} className="text-center">
                  <div className={`w-3 h-3 rounded-full ${typeConfig[type].dot} mx-auto mb-1`} />
                  <p className="text-lg font-bold font-display text-gray-900">{count}</p>
                  <p className="text-[10px] text-gray-400 uppercase">{typeConfig[type].label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Progress bar */}
      <ScrollReveal delay={50}>
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-700">Pipeline Progress</h3>
            <span className="text-sm font-bold font-display text-brand-blue">{publishedTotal} / {pipelineStats.totalPlanned}</span>
          </div>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden flex">
            <div
              className="bg-blue-500 transition-all duration-1000 progress-shine"
              style={{ width: `${(pipelineStats.published.blog / pipelineStats.totalPlanned) * 100}%` }}
              title={`Blog: ${pipelineStats.published.blog}`}
            />
            <div
              className="bg-emerald-500 transition-all duration-1000"
              style={{ width: `${(pipelineStats.published.city / pipelineStats.totalPlanned) * 100}%` }}
              title={`City: ${pipelineStats.published.city}`}
            />
            <div
              className="bg-purple-500 transition-all duration-1000"
              style={{ width: `${(pipelineStats.published.spanish / pipelineStats.totalPlanned) * 100}%` }}
              title={`Spanish: ${pipelineStats.published.spanish}`}
            />
            <div
              className="bg-orange-500 transition-all duration-1000"
              style={{ width: `${(pipelineStats.published.niche / pipelineStats.totalPlanned) * 100}%` }}
              title={`Niche: ${pipelineStats.published.niche}`}
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-3">
            {(["blog", "location", "spanish", "niche"] as ContentType[]).map((type) => (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${typeConfig[type].dot}`} />
                <span className="text-xs text-gray-500">{typeConfig[type].label} ({pipelineStats.published[type === "location" ? "city" : type]})</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ============================================================
         2. MONTHLY CALENDAR VIEW
         ============================================================ */}
      <ScrollReveal delay={100}>
        <div className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Monthly Calendar</h2>
          <p className="text-sm text-gray-500 mb-6">Content publishing schedule from March through June 2026.</p>

          {/* Month tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {months.map((m, idx) => (
              <button
                key={m.name}
                onClick={() => setActiveMonth(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeMonth === idx
                    ? "bg-brand-blue text-white shadow-sm"
                    : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-1">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d} className="text-center text-xs font-semibold text-gray-400 uppercase py-2">
                    {d}
                  </div>
                ))}
              </div>

              {/* Weeks */}
              {months[activeMonth].weeks.map((week, wi) => (
                <div key={wi} className="grid grid-cols-7 gap-1 mb-1">
                  {week.map((day, di) => {
                    const isCurrentMonth = day.date.getMonth() === months[activeMonth].month;
                    const isToday =
                      day.date.getFullYear() === 2026 &&
                      day.date.getMonth() === 2 &&
                      day.date.getDate() === 24;

                    return (
                      <div
                        key={di}
                        className={`min-h-[80px] rounded-lg p-1.5 border transition-colors ${
                          isCurrentMonth
                            ? isToday
                              ? "bg-blue-50 border-blue-300"
                              : "bg-white border-gray-100 hover:border-gray-200"
                            : "bg-gray-50/50 border-gray-50"
                        }`}
                      >
                        <div className={`text-xs font-semibold mb-1 ${
                          isCurrentMonth ? (isToday ? "text-brand-blue" : "text-gray-700") : "text-gray-300"
                        }`}>
                          {day.date.getDate()}
                          {isToday && <span className="ml-1 text-[9px] text-blue-500">TODAY</span>}
                        </div>
                        <div className="space-y-0.5">
                          {day.events.map((evt, ei) => (
                            <div
                              key={ei}
                              className={`text-[9px] leading-tight px-1 py-0.5 rounded truncate border ${typeConfig[evt.type].bg}`}
                              title={`${evt.title} (${statusConfig[evt.status].label})`}
                            >
                              <span className={`inline-block w-1.5 h-1.5 rounded-full ${typeConfig[evt.type].dot} mr-0.5`} />
                              {evt.title.length > 28 ? evt.title.slice(0, 28) + "..." : evt.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100">
            {(["blog", "location", "spanish", "niche"] as ContentType[]).map((type) => (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${typeConfig[type].dot}`} />
                <span className="text-xs text-gray-500">{typeConfig[type].label}</span>
              </div>
            ))}
            <div className="ml-auto flex gap-3">
              {(["published", "scheduled", "draft", "idea"] as ContentStatus[]).map((s) => (
                <span key={s} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${statusConfig[s].color}`}>
                  {statusConfig[s].label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ============================================================
         3. CONTENT BACKLOG TABLE
         ============================================================ */}
      <ScrollReveal delay={150}>
        <div className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Content Backlog</h2>
          <p className="text-sm text-gray-500 mb-6">{contentBacklog.length} planned content pieces across all categories.</p>

          {/* Type filter */}
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {[
              { key: "all" as const, label: "All", count: contentBacklog.length },
              { key: "spanish" as ContentType, label: "Spanish", count: contentBacklog.filter((c) => c.type === "spanish").length },
              { key: "location" as ContentType, label: "Location", count: contentBacklog.filter((c) => c.type === "location").length },
              { key: "niche" as ContentType, label: "Niche", count: contentBacklog.filter((c) => c.type === "niche").length },
              { key: "blog" as ContentType, label: "Blog", count: contentBacklog.filter((c) => c.type === "blog").length },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setBacklogFilter(tab.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  backlogFilter === tab.key
                    ? "bg-brand-blue text-white"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="cursor-pointer hover:text-brand-blue" onClick={() => handleSort("title")}>
                    Title{sortIcon("title")}
                  </th>
                  <th className="text-center w-20">Type</th>
                  <th>Target Keyword</th>
                  <th className="text-center cursor-pointer hover:text-brand-blue w-20" onClick={() => handleSort("searchVolume")}>
                    Vol{sortIcon("searchVolume")}
                  </th>
                  <th className="text-center cursor-pointer hover:text-brand-blue w-16" onClick={() => handleSort("difficulty")}>
                    KD{sortIcon("difficulty")}
                  </th>
                  <th className="text-center cursor-pointer hover:text-brand-blue w-20" onClick={() => handleSort("priority")}>
                    Priority{sortIcon("priority")}
                  </th>
                  <th className="text-center cursor-pointer hover:text-brand-blue w-24" onClick={() => handleSort("status")}>
                    Status{sortIcon("status")}
                  </th>
                  <th className="text-center w-28">Scheduled</th>
                </tr>
              </thead>
              <tbody>
                {filteredBacklog.map((item) => (
                  <tr key={item.id}>
                    <td className="font-medium text-gray-900 max-w-[250px]">
                      <span className="line-clamp-1">{item.title}</span>
                    </td>
                    <td className="text-center">
                      <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${typeConfig[item.type].bg}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${typeConfig[item.type].dot}`} />
                        {typeConfig[item.type].label}
                      </span>
                    </td>
                    <td className="text-gray-500 text-xs">{item.targetKeyword}</td>
                    <td className="text-center font-medium">{item.searchVolume}</td>
                    <td className="text-center">
                      <span className={`text-xs font-semibold ${item.difficulty <= 5 ? "text-green-600" : item.difficulty <= 10 ? "text-amber-600" : "text-red-600"}`}>
                        {item.difficulty}
                      </span>
                    </td>
                    <td className="text-center">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${priorityConfig[item.priority].color}`}>
                        {priorityConfig[item.priority].label}
                      </span>
                    </td>
                    <td className="text-center">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${statusConfig[item.status].color}`}>
                        {statusConfig[item.status].label}
                      </span>
                    </td>
                    <td className="text-center text-xs text-gray-400">
                      {item.scheduledDate || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

      {/* ============================================================
         4. KEYWORD GAP ANALYSIS
         ============================================================ */}
      <ScrollReveal delay={200}>
        <div className="glass-card p-6 md:p-8 mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold font-display text-gray-900">Keyword Gap Analysis</h2>
            <div className="text-right">
              <p className="text-2xl font-bold font-display text-brand-blue">{totalGapTraffic.toLocaleString()}</p>
              <p className="text-[10px] text-gray-400 uppercase">Est. Monthly Traffic Opportunity</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-6">Top 20 keywords competitors rank for that Axle Towing doesn&apos;t yet target.</p>

          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-gray-50">
                  <th>Keyword</th>
                  <th className="text-center w-20">Volume</th>
                  <th>Who Ranks</th>
                  <th>Suggested Content</th>
                  <th className="text-center w-28">Est. Traffic</th>
                </tr>
              </thead>
              <tbody>
                {keywordGaps.map((gap, i) => (
                  <tr key={i}>
                    <td className="font-medium text-gray-900">{gap.keyword}</td>
                    <td className="text-center">
                      <span className={`text-sm font-bold ${gap.volume >= 1000 ? "text-red-600" : gap.volume >= 300 ? "text-amber-600" : "text-gray-700"}`}>
                        {gap.volume.toLocaleString()}
                      </span>
                    </td>
                    <td className="text-xs text-gray-500">{gap.competitor}</td>
                    <td className="text-xs text-gray-600">{gap.suggestedContent}</td>
                    <td className="text-center">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-brand-blue to-blue-400 rounded-full"
                            style={{ width: `${Math.min((gap.trafficOpportunity / 800) * 100, 100)}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 w-8 text-right">{gap.trafficOpportunity}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Top opportunities callout */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="rounded-xl p-4 bg-red-50 border border-red-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-1">Biggest Gap</p>
              <p className="text-lg font-bold font-display text-gray-900">&quot;towing service near me&quot;</p>
              <p className="text-xs text-gray-500 mt-1">27,100 monthly searches - no local competitor ranks</p>
            </div>
            <div className="rounded-xl p-4 bg-amber-50 border border-amber-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-1">Quick Win</p>
              <p className="text-lg font-bold font-display text-gray-900">&quot;towing chandler az&quot;</p>
              <p className="text-xs text-gray-500 mt-1">480/mo - page published, awaiting indexing</p>
            </div>
            <div className="rounded-xl p-4 bg-purple-50 border border-purple-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-500 mb-1">Tool Opportunity</p>
              <p className="text-lg font-bold font-display text-gray-900">&quot;towing cost estimator&quot;</p>
              <p className="text-xs text-gray-500 mt-1">720/mo - Freeway Towing drives 1,300 visits from their calc</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ============================================================
         5. CONTENT PERFORMANCE
         ============================================================ */}
      <ScrollReveal delay={250}>
        <div className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Content Performance</h2>
          <p className="text-sm text-gray-500 mb-6">How existing content is performing and where improvements are needed.</p>

          {/* Top performing */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Top Performing Content
            </h3>
            <div className="space-y-3">
              {topPerformingContent.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-green-50/50 border border-green-100 hover:border-green-200 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{item.title}</p>
                    <p className="text-xs text-gray-500">Keyword: {item.keyword} | Position: #{item.position}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-bold font-display text-green-600">{item.estimatedTraffic}</p>
                    <p className="text-[10px] text-gray-400">est. visits/mo</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[10px] text-gray-400">Updated</p>
                    <p className="text-xs text-gray-500">{item.lastUpdated}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Underperforming */}
          <div>
            <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              Needs Attention (Underperforming)
            </h3>
            <div className="space-y-3">
              {underperformingContent.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-amber-50/50 border border-amber-100 hover:border-amber-200 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{item.title}</p>
                    <p className="text-xs text-gray-500">Target: {item.keyword}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-2 py-1 border border-amber-100 inline-block">
                      {item.issue}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-bold font-display text-amber-500">{item.estimatedTraffic}</p>
                    <p className="text-[10px] text-gray-400">visits/mo</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom insight */}
      <ScrollReveal delay={300}>
        <div className="glass-card p-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-4">Key Takeaway</h2>
          <div className="rounded-xl p-6 bg-brand-navy text-white">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-1">Content Moat</p>
                <p className="text-2xl font-bold font-display">{publishedTotal} pages</p>
                <p className="text-xs text-blue-200 mt-1">15x more than any Phoenix competitor</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-1">Traffic Opportunity</p>
                <p className="text-2xl font-bold font-display">{totalGapTraffic.toLocaleString()}+ visits/mo</p>
                <p className="text-xs text-blue-200 mt-1">Capturable from keyword gaps alone</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-1">Next Milestone</p>
                <p className="text-2xl font-bold font-display">123 pages</p>
                <p className="text-xs text-blue-200 mt-1">Just {pipelineStats.remaining} more pieces needed</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-blue-100 leading-relaxed">
                The remaining {pipelineStats.remaining} pages focus on <strong className="text-white">Spanish-language SEO</strong> (capturing the 30% of Phoenix metro residents who search in Spanish) and <strong className="text-white">remaining city pages</strong> (Surprise, Avondale, Goodyear, Buckeye, Fountain Hills, Maricopa). Once DNS is pointed and Google indexes all {publishedTotal} pages, organic traffic is projected to grow from 529 to 3,500+ monthly visitors within 6 months.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
