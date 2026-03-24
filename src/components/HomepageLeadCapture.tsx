'use client';

import { useState, FormEvent } from 'react';
import FormConfirmation from './FormConfirmation';

const STEPS = [
  { label: 'Property Type', number: 1 },
  { label: 'Details', number: 2 },
  { label: 'Contact Info', number: 3 },
];

export default function HomepageLeadCapture() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    propertyType: '',
    propertyName: '',
    units: '',
    address: '',
    name: '',
    email: '',
    phone: '',
    timeline: '',
  });

  function updateField(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function nextStep() {
    setStep((s) => Math.min(s + 1, 3));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'homepage-lead-capture' }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white text-gray-900 text-sm';
  const selectClass = inputClass;
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider font-heading">Free Assessment</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>
            Get Your Free Property Assessment
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full mb-6" />
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Tell us about your property and we will design a custom parking enforcement program — completely free.
          </p>
        </div>

        <div className="glass-card-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 reveal">
          {submitted ? (
            <FormConfirmation variant="light" />
          ) : (
            <>
              {/* Progress indicator */}
              <div className="flex items-center justify-center gap-2 mb-8">
                {STEPS.map((s, i) => (
                  <div key={s.number} className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-heading transition-all ${
                          step >= s.number
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {step > s.number ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          s.number
                        )}
                      </div>
                      <span className={`text-xs font-medium hidden sm:inline ${step >= s.number ? 'text-blue-600' : 'text-gray-400'}`}>
                        {s.label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`w-12 sm:w-20 h-0.5 mx-2 transition-colors ${step > s.number ? 'bg-blue-600' : 'bg-gray-200'}`} />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Property Type */}
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in-up">
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">What type of property do you manage?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { value: 'apartment', label: 'Apartment Complex', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                        { value: 'hoa', label: 'HOA Community', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1' },
                        { value: 'commercial', label: 'Commercial Property', icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' },
                        { value: 'retail', label: 'Retail / Shopping Center', icon: 'M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z' },
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => {
                            updateField('propertyType', type.value);
                            nextStep();
                          }}
                          className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                            formData.propertyType === type.value
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d={type.icon} />
                            </svg>
                          </div>
                          <span className="font-heading font-bold text-sm text-gray-900">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Details */}
                {step === 2 && (
                  <div className="space-y-4 animate-fade-in-up">
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">Tell us about your property</h3>
                    <div>
                      <label className={labelClass}>Property Name</label>
                      <input
                        type="text"
                        value={formData.propertyName}
                        onChange={(e) => updateField('propertyName', e.target.value)}
                        placeholder="e.g., Sunrise Apartments"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Property Address</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => updateField('address', e.target.value)}
                        placeholder="Street address, city, state"
                        className={inputClass}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Number of Units / Spaces</label>
                        <input
                          type="number"
                          min={1}
                          value={formData.units}
                          onChange={(e) => updateField('units', e.target.value)}
                          placeholder="e.g., 150"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>How soon do you need service?</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => updateField('timeline', e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Select timeline</option>
                          <option value="immediately">Immediately (within 24 hours)</option>
                          <option value="this-week">This week</option>
                          <option value="exploring">Exploring options</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-heading font-bold text-sm hover:bg-gray-50 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex-1 py-3 rounded-lg font-heading font-bold text-white text-sm tracking-wide transition-all shadow-md bg-blue-600 hover:bg-blue-700"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {step === 3 && (
                  <div className="space-y-4 animate-fade-in-up">
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">How can we reach you?</h3>
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="john@example.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          placeholder="(480) 555-1234"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-heading font-bold text-sm hover:bg-gray-50 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex-1 py-3 rounded-lg font-heading font-bold text-white text-sm tracking-wide transition-all shadow-lg disabled:opacity-60"
                        style={{ background: '#DC2626' }}
                      >
                        {submitting ? 'Submitting...' : 'Get My Free Assessment'}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </>
          )}
        </div>

        {/* Trust badges below form */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 reveal">
          {[
            { label: 'Zero Cost', icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { label: 'No Obligation', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
            { label: '1-Hour Response', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-gray-500">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={badge.icon} />
              </svg>
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
