import { Metadata } from 'next';
import {
  HeroSection,
  EventPathsSection,
  ConferenceStructureSection,
  ScheduleTimezoneSection,
  SpeakersPresentersSection,
  ProductionBoundarySection,
  AudienceAccessSection,
  AccessibilityGlobalSection,
  ResilienceFailoverSection,
  LiveMonitoringSection,
  RecordingReplaySection,
  AnalyticsEngagementSection,
  ReadinessMatrixSection,
  PostEventHandoffSection,
  FaqSection,
  BottomCtaSection,
} from '@/components/live-event-conferences';

export const metadata: Metadata = {
  title: 'Live Event Conferences & Multi-Stage Broadcasts | ZoikoStream',
  description: 'Enterprise multi-track video streaming for global conferences, keynotes, hybrid expos, and multi-stage live broadcasts with failover resilience.',
};

export default function LiveEventConferencesPage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 flex flex-col items-center justify-start overflow-x-hidden">
      <HeroSection />
      <EventPathsSection />
      <ConferenceStructureSection />
      <ScheduleTimezoneSection />
      <SpeakersPresentersSection />
      <ProductionBoundarySection />
      <AudienceAccessSection />
      <AccessibilityGlobalSection />
      <ResilienceFailoverSection />
      <LiveMonitoringSection />
      <RecordingReplaySection />
      <AnalyticsEngagementSection />
      <ReadinessMatrixSection />
      <PostEventHandoffSection />
      <FaqSection />
      <BottomCtaSection />
    </main>
  );
}
