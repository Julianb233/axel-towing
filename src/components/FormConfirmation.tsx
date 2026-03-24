import { COMPANY } from '@/lib/constants';

interface FormConfirmationProps {
  variant?: 'light' | 'dark';
}

export default function FormConfirmation({ variant = 'light' }: FormConfirmationProps) {
  const isDark = variant === 'dark';

  return (
    <div className="text-center py-8">
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-green-500/20 border border-green-400/30' : 'bg-green-100'}`}>
        <svg className={`w-10 h-10 ${isDark ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h3 className={`text-2xl font-bold font-heading mb-3 ${isDark ? 'text-white' : 'text-blue-900'}`}>
        Request Received!
      </h3>
      <p className={`text-lg mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
        We will contact you within <strong>1 hour</strong>.
      </p>
      <div className={`max-w-sm mx-auto rounded-xl p-4 mt-6 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-blue-50 border border-blue-100'}`}>
        <h4 className={`font-heading font-bold text-sm mb-2 ${isDark ? 'text-white' : 'text-blue-900'}`}>What Happens Next:</h4>
        <ul className={`text-sm space-y-2 text-left ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
          <li className="flex items-start gap-2">
            <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Our team reviews your property details
          </li>
          <li className="flex items-start gap-2">
            <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            We schedule a free on-site assessment
          </li>
          <li className="flex items-start gap-2">
            <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            You get a custom enforcement plan — no obligation
          </li>
        </ul>
      </div>
      <div className={`mt-6 pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
        <p className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
          Need immediate help? Call{' '}
          <a href={`tel:${COMPANY.phone.replace(/-/g, '')}`} className={`font-semibold ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
            {COMPANY.phone}
          </a>{' '}
          — dispatch is available 24/7.
        </p>
      </div>
    </div>
  );
}
