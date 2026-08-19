import { Metadata } from 'next';
import {
  WeddingHero,
  WeddingPatterns,
  WeddingRemoteGuests,
  WeddingSteps,
  WeddingAccessOptions,
  WeddingTimelineTable,
  WeddingVenueClarity,
  WeddingAudioRights,
  WeddingContributors,
  WeddingA11y,
  WeddingRecordingReplay,
  WeddingPrivacyControl,
  WeddingSupport,
  WeddingTrustDoctrine,
  WeddingFaq,
  WeddingCta,
} from '@/components/wedding-celebration';

export const metadata: Metadata = {
  title: 'Weddings & Celebrations Low-Latency Stream Planning | ZoikoStream',
  description: 'Share your special day with virtual guests globally. Low-latency ceremony streams, interactive remote toasts, automated replay access, and secure passcode protection.',
};

export default function WeddingCelebrationPage() {
  return (
    <main className="w-full bg-white min-h-screen text-zinc-900 font-spaceGrotesk">
      <WeddingHero />
      <WeddingPatterns />
      <WeddingRemoteGuests />
      <WeddingSteps />
      <WeddingAccessOptions />
      <WeddingTimelineTable />
      <WeddingVenueClarity />
      <WeddingAudioRights />
      <WeddingContributors />
      <WeddingA11y />
      <WeddingRecordingReplay />
      <WeddingPrivacyControl />
      <WeddingSupport />
      <WeddingTrustDoctrine />
      <WeddingFaq />
      <WeddingCta />
    </main>
  );
}
