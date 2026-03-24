import type { Metadata } from 'next';
import VoiceAgentContent from './VoiceAgentContent';

export const metadata: Metadata = {
  title: 'AI Voice Agent Dashboard | Axle Towing',
  description: 'Internal AI voice agent dashboard for managing inbound and outbound calls.',
  robots: { index: false, follow: false },
};

export default function VoiceAgentPage() {
  return <VoiceAgentContent />;
}
