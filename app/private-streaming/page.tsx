import type { Metadata } from 'next';
import {
  AccessMethodsSection,
  AccessibilitySection,
  ClosedRoomSection,
  DestinationRouterSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  LifecycleSection,
  LiveReplayPolicySection,
  PlanningBriefSection,
  PrivacyPrinciplesSection,
  ResilienceSection,
  RoomControlPanelSection,
  RoomControlsSection,
  ViewerJourneySection,
} from '@/components/private-streaming';

export const metadata: Metadata = {
  title: 'Private streaming | ZoikoStream',
  description:
    'Plan a closed, credentialed live-event room with explicit membership, viewing windows, recovery, accessibility, and separate replay authorization.',
};

export default function PrivateStreamingPage() {
  return (
    <main>
      <HeroSection />
      <ClosedRoomSection />
      <RoomControlsSection />
      <RoomControlPanelSection />
      <LifecycleSection />
      <ViewerJourneySection />
      <AccessMethodsSection />
      <PrivacyPrinciplesSection />
      <AccessibilitySection />
      <LiveReplayPolicySection />
      <ResilienceSection />
      <DestinationRouterSection />
      <PlanningBriefSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
