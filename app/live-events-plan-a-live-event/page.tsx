import { Metadata } from 'next';
import {
  HeroSection,
  LifecycleSection,
  EventFocusSection,
  OwnershipSection,
  ContributionSection,
  ProductionDesignSection,
  AudienceAccessSection,
  AccessibilitySection,
  ResilienceMonitoringSection,
  ReadinessGateSection,
  RecordingArchiveSection,
  AnalyticsReportingSection,
  RolesHandoffsSection,
  ReviewTransferSection,
  FaqSection,
  BottomCtaSection,
} from '@/components/live-events-plan-a-live-event';

export const metadata: Metadata = {
  title: 'Plan a Live Event | ZoikoStream Live Events',
  description:
    'Use this planning intake to share baseline event context for a future ZoikoStream Live Event and reach the correct technical planning or specialist path.',
};

export default function LiveEventsPlanALiveEventPage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch bg-white">
      <HeroSection />
      <LifecycleSection />
      <EventFocusSection />
      <OwnershipSection />
      <ContributionSection />
      <ProductionDesignSection />
      <AudienceAccessSection />
      <AccessibilitySection />
      <ResilienceMonitoringSection />
      <ReadinessGateSection />
      <RecordingArchiveSection />
      <AnalyticsReportingSection />
      <RolesHandoffsSection />
      <ReviewTransferSection />
      <FaqSection />
      <BottomCtaSection />
    </main>
  );
}
