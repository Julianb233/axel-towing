"use client";

import { useState, useMemo } from "react";
import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";
import { calendarEvents, type CalendarEvent, type EventStatus } from "../../data/calendar-events";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const STATUS_COLORS: Record<EventStatus, { dot: string; bg: string; border: string; text: string; label: string }> = {
  completed: { dot: "bg-green-500", bg: "bg-green-50", border: "border-green-200", text: "text-green-700", label: "Completed" },
  "in-progress": { dot: "bg-blue-500", bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", label: "In Progress" },
  planned: { dot: "bg-amber-500", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", label: "Planned" },
  critical: { dot: "bg-red-500", bg: "bg-red-50", border: "border-red-200", text: "text-red-700", label: "Critical" },
};

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function formatDateKey(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function getEventsForDate(dateKey: string, events: CalendarEvent[]): CalendarEvent[] {
  return events.filter((event) => {
    if (event.endDate) {
      return dateKey >= event.startDate && dateKey <= event.endDate;
    }
    return dateKey === event.startDate;
  });
}

function getEventsForMonth(year: number, month: number, events: CalendarEvent[]): CalendarEvent[] {
  const monthStr = `${year}-${String(month + 1).padStart(2, "0")}`;
  return events.filter((event) => {
    const eventMonth = event.startDate.substring(0, 7);
    const endMonth = event.endDate ? event.endDate.substring(0, 7) : eventMonth;
    return eventMonth <= monthStr && endMonth >= monthStr;
  });
}

export default function CalendarPage() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(2); // March = 2 (0-indexed)
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const monthEvents = useMemo(
    () => getEventsForMonth(currentYear, currentMonth, calendarEvents),
    [currentYear, currentMonth]
  );

  const selectedEvents = useMemo(
    () => (selectedDate ? getEventsForDate(selectedDate, calendarEvents) : []),
    [selectedDate]
  );

  function goToPrevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  }

  function goToNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  }

  const todayKey = "2026-03-19";

  // Build calendar grid cells
  const calendarCells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarCells.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarCells.push(d);

  return (
    <>
      <PageHeader
        badge="Timeline"
        title="Project Calendar"
        subtitle="Milestones, content publishing dates, and upcoming tasks for the Axle Towing digital growth project."
      />

      <ScrollReveal>
        <div className="glass-card p-6 sm:p-8 mb-8">
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={goToPrevMonth}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </button>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
              {MONTH_NAMES[currentMonth]} {currentYear}
            </h2>
            <button
              onClick={goToNextMonth}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6">
            {(Object.entries(STATUS_COLORS) as [EventStatus, typeof STATUS_COLORS[EventStatus]][]).map(([status, colors]) => (
              <div key={status} className="flex items-center gap-2 text-xs text-gray-600">
                <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
                {colors.label}
              </div>
            ))}
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {DAY_LABELS.map((day) => (
              <div key={day} className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-px bg-gray-100 rounded-xl overflow-hidden border border-gray-100">
            {calendarCells.map((day, idx) => {
              if (day === null) {
                return <div key={`empty-${idx}`} className="bg-gray-50/50 min-h-[80px] sm:min-h-[100px]" />;
              }

              const dateKey = formatDateKey(currentYear, currentMonth, day);
              const dayEvents = getEventsForDate(dateKey, calendarEvents);
              const isToday = dateKey === todayKey;
              const isSelected = dateKey === selectedDate;
              const hasEvents = dayEvents.length > 0;

              return (
                <button
                  key={dateKey}
                  onClick={() => setSelectedDate(isSelected ? null : dateKey)}
                  className={`relative bg-white min-h-[80px] sm:min-h-[100px] p-1.5 sm:p-2 text-left transition-all hover:bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-inset ${
                    isSelected ? "bg-blue-50 ring-2 ring-brand-blue ring-inset" : ""
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full text-xs sm:text-sm font-medium ${
                      isToday
                        ? "bg-brand-blue text-white font-bold"
                        : "text-gray-700"
                    }`}
                  >
                    {day}
                  </span>

                  {hasEvents && (
                    <div className="mt-1 flex flex-col gap-0.5">
                      {dayEvents.slice(0, 3).map((event) => {
                        const colors = STATUS_COLORS[event.status];
                        return (
                          <div
                            key={event.id}
                            className={`hidden sm:block text-[10px] leading-tight truncate rounded px-1 py-0.5 ${colors.bg} ${colors.text} font-medium`}
                          >
                            {event.title.length > 20 ? event.title.substring(0, 20) + "..." : event.title}
                          </div>
                        );
                      })}
                      {/* Mobile: show dots only */}
                      <div className="flex sm:hidden gap-1 mt-0.5">
                        {dayEvents.slice(0, 4).map((event) => (
                          <span key={event.id} className={`w-1.5 h-1.5 rounded-full ${STATUS_COLORS[event.status].dot}`} />
                        ))}
                      </div>
                      {dayEvents.length > 3 && (
                        <span className="hidden sm:block text-[10px] text-gray-400 px-1">
                          +{dayEvents.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Selected date detail panel */}
      {selectedDate && (
        <ScrollReveal>
          <div className="glass-card p-6 sm:p-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold font-display text-gray-900">
                {new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              <button
                onClick={() => setSelectedDate(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {selectedEvents.length === 0 ? (
              <p className="text-sm text-gray-500">No events scheduled for this date.</p>
            ) : (
              <div className="space-y-3">
                {selectedEvents.map((event) => {
                  const colors = STATUS_COLORS[event.status];
                  return (
                    <div
                      key={event.id}
                      className={`rounded-xl p-4 ${colors.bg} border ${colors.border} transition-all`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-2.5 h-2.5 rounded-full mt-1.5 ${colors.dot}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-sm font-semibold text-gray-900">{event.title}</h4>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                              {colors.label}
                            </span>
                          </div>
                          {event.description && (
                            <p className="text-xs text-gray-600 mt-1">{event.description}</p>
                          )}
                          {event.endDate && (
                            <p className="text-[10px] text-gray-400 mt-1.5 font-medium">
                              {new Date(event.startDate + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                              {" - "}
                              {new Date(event.endDate + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </ScrollReveal>
      )}

      {/* Month summary */}
      <ScrollReveal delay={150}>
        <div className="glass-card p-6 sm:p-8 mb-8">
          <h3 className="text-lg font-bold font-display text-gray-900 mb-4">
            {MONTH_NAMES[currentMonth]} {currentYear} Summary
          </h3>
          {monthEvents.length === 0 ? (
            <p className="text-sm text-gray-500">No events scheduled for this month.</p>
          ) : (
            <div className="space-y-2">
              {monthEvents.map((event) => {
                const colors = STATUS_COLORS[event.status];
                return (
                  <div
                    key={event.id}
                    className="flex items-start gap-3 rounded-lg p-3 bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors cursor-pointer"
                    onClick={() => setSelectedDate(event.startDate)}
                  >
                    <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 ${colors.dot}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-gray-900">{event.title}</p>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
                          {colors.label}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {new Date(event.startDate + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        {event.endDate && (
                          <>
                            {" - "}
                            {new Date(event.endDate + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </>
                        )}
                        {event.description && <> &mdash; {event.description}</>}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </ScrollReveal>
    </>
  );
}
