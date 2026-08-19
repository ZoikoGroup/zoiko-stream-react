import { Metadata } from 'next';
import {
  ManagedHero,
  ManagedCapabilities,
  ManagedScopeSection,
  ManagedLifecycleSection,
  ManagedOperatingPlanSection,
  ManagedBriefSection,
  ManagedSourcesSection,
  ManagedRunOfShowSection,
  ManagedAudienceAccessSection,
  ManagedReadinessSection,
  ManagedSupportSection,
  ManagedArchiveSection,
  ManagedFaqAccordion,
  ManagedCtaBand
} from '@/components/managed-live-event';

export const metadata: Metadata = {
  title: 'Managed Live Event Streaming & Coordinated Broadcasts | ZoikoStream',
  description: 'Submit your requirements brief. Plan access, production, network, and active-event SLA monitoring with verified operating scopes.'
};

export default function ManagedLiveEventStreamingPage() {
  return (
    <main className="w-full bg-white dark:bg-zinc-955 min-h-screen text-zinc-900 dark:text-white transition-colors duration-250">
      <ManagedHero />
      <ManagedCapabilities />
      <ManagedScopeSection />
      <ManagedLifecycleSection />
      <ManagedOperatingPlanSection />
      <ManagedBriefSection />
      <ManagedSourcesSection />
      <ManagedRunOfShowSection />
      <ManagedAudienceAccessSection />
      <ManagedReadinessSection />
      <ManagedSupportSection />
      <ManagedArchiveSection />
      <ManagedFaqAccordion />
      <ManagedCtaBand />
    </main>
  );
}
