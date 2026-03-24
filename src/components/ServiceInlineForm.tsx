'use client';

import { useState, FormEvent } from 'react';
import FormConfirmation from './FormConfirmation';

type ServiceType = 'property' | 'relocation' | 'enforcement';

interface ServiceInlineFormProps {
  serviceType: ServiceType;
  serviceTitle: string;
}

const FIELD_CONFIG: Record<ServiceType, { fields: { name: string; label: string; type: string; placeholder: string; required?: boolean }[] }> = {
  property: {
    fields: [
      { name: 'propertyName', label: 'Property Name', type: 'text', placeholder: 'e.g., Sunrise Apartments', required: true },
      { name: 'units', label: 'Number of Units', type: 'number', placeholder: 'e.g., 150' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', required: true },
      { name: 'phone', label: 'Phone', type: 'tel', placeholder: '(480) 555-1234', required: true },
    ],
  },
  relocation: {
    fields: [
      { name: 'location', label: 'Location / Address', type: 'text', placeholder: 'Property address', required: true },
      { name: 'vehicleDetails', label: 'Vehicle Details', type: 'text', placeholder: 'Number of vehicles, types, etc.' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', required: true },
      { name: 'phone', label: 'Phone', type: 'tel', placeholder: '(480) 555-1234', required: true },
    ],
  },
  enforcement: {
    fields: [
      { name: 'propertyAddress', label: 'Property Address', type: 'text', placeholder: 'Full property address', required: true },
      { name: 'spaces', label: 'Number of Parking Spaces', type: 'number', placeholder: 'e.g., 200' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', required: true },
      { name: 'phone', label: 'Phone', type: 'tel', placeholder: '(480) 555-1234', required: true },
    ],
  },
};

export default function ServiceInlineForm({ serviceType, serviceTitle }: ServiceInlineFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const config = FIELD_CONFIG[serviceType];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data: Record<string, string> = { source: `service-page-${serviceType}`, serviceTitle };

    config.fields.forEach((field) => {
      const el = form.elements.namedItem(field.name) as HTMLInputElement;
      if (el) data[field.name] = el.value;
    });

    const nameEl = form.elements.namedItem('contactName') as HTMLInputElement;
    if (nameEl) data.name = nameEl.value;

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition text-sm';

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(160deg, rgba(15,31,54,1) 0%, rgba(27,42,63,0.97) 50%, rgba(30,107,184,0.9) 100%)' }}
      />
      <div className="absolute inset-0 grain-overlay z-[1]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-1.5 mb-4">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-green-300 text-xs font-semibold uppercase tracking-wider">Free Service</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-3">
            Get Started with {serviceTitle}
          </h2>
          <p className="text-white/70 text-lg">
            Fill out the form below and our team will reach out within 1 hour to discuss your needs.
          </p>
        </div>

        <div
          className="rounded-2xl border border-white/15 p-8 md:p-10 reveal"
          style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)' }}
        >
          {submitted ? (
            <FormConfirmation variant="dark" />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Your Name *</label>
                <input
                  type="text"
                  name="contactName"
                  required
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {config.fields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">
                      {field.label} {field.required && '*'}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      min={field.type === 'number' ? 1 : undefined}
                      className={inputClass}
                    />
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl font-heading font-bold text-white text-base tracking-wide transition-all shadow-lg disabled:opacity-60 hover:shadow-xl"
                  style={{ background: '#DC2626' }}
                >
                  {submitting ? 'Submitting...' : 'Get Started — It\'s Free'}
                </button>
              </div>
              <p className="text-center text-white/30 text-xs">No contracts. No hidden fees. Cancel anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
