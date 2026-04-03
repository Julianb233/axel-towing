"use client";

import {
  services,
  serviceStats,
  getActiveServices,
  getAvailableServices,
  getComingSoonServices,
  type Service,
  type ServiceStatus,
} from "@/data/services";
import { clientInfo } from "@/data/client-data";

const statusConfig: Record<ServiceStatus, { label: string; dot: string; badge: string }> = {
  active: {
    label: "Your Services",
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  available: {
    label: "Available Add-Ons",
    dot: "bg-blue-500",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
  },
  "coming-soon": {
    label: "Coming Soon",
    dot: "bg-gray-400",
    badge: "bg-gray-50 text-gray-600 border-gray-200",
  },
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  emerald: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
  violet: "bg-violet-50 text-violet-600",
  pink: "bg-pink-50 text-pink-600",
  cyan: "bg-cyan-50 text-cyan-600",
  orange: "bg-orange-50 text-orange-600",
  rose: "bg-rose-50 text-rose-600",
};

function ServiceCard({ service }: { service: Service }) {
  const config = statusConfig[service.status];
  const iconColor = colorMap[service.color] || colorMap.blue;

  return (
    <div className="glass-card p-5">
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-xl ${iconColor} flex items-center justify-center flex-shrink-0`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-semibold text-gray-900">{service.name}</h3>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${config.badge}`}>
              {service.status === "active" ? "Active" : service.status === "available" ? "Available" : "Coming Soon"}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">{service.description}</p>

          {service.scope && (
            <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
              <p className="text-[11px] text-emerald-700 font-medium">Your plan</p>
              <p className="text-xs text-gray-600 mt-0.5">{service.scope}</p>
            </div>
          )}

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {service.features.map((f) => (
              <div key={f.label} className="flex items-center gap-2">
                {f.included ? (
                  <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                <span className={`text-xs ${f.included ? "text-gray-700" : "text-gray-400"}`}>{f.label}</span>
              </div>
            ))}
          </div>

          {service.status === "available" && (
            <a
              href="https://calendly.com/julian-aiacrobatics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-lg bg-brand-blue text-white text-xs font-medium hover:bg-brand-blue-dark transition-colors min-h-[36px]"
            >
              Learn More
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const active = getActiveServices();
  const available = getAvailableServices();
  const comingSoon = getComingSoonServices();

  return (
    <div className="space-y-6">
      <div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue text-white mb-3">
          {serviceStats.active} active
        </span>
        <h1 className="text-2xl font-bold text-gray-900 font-display">Services</h1>
        <p className="text-sm text-gray-500 mt-1">
          What AI Acrobatics is delivering for {clientInfo.name} — and what else we can do.
        </p>
      </div>

      {active.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h2 className="text-sm font-semibold text-gray-900">Your Active Services ({active.length})</h2>
          </div>
          <div className="space-y-3">
            {active.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      )}

      {available.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <h2 className="text-sm font-semibold text-gray-900">Available Add-Ons ({available.length})</h2>
          </div>
          <div className="space-y-3">
            {available.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      )}

      {comingSoon.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
            <h2 className="text-sm font-semibold text-gray-500">Coming Soon ({comingSoon.length})</h2>
          </div>
          <div className="space-y-3">
            {comingSoon.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      )}

      <div className="glass-card p-6">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold text-gray-900">Want to add a service?</p>
          <p className="text-xs text-gray-500">
            Talk to Julian about expanding your package. All add-ons integrate directly with your existing project.
          </p>
          <a
            href="https://calendly.com/julian-aiacrobatics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-medium hover:bg-brand-blue-dark transition-colors min-h-[44px]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </div>
  );
}
