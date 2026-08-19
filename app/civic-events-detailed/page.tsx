import { Metadata } from 'next';
import {
  CivicHero,
  WhyCivicEventSection,
  CivicEventShapeSection,
  ProceedingsLedgerSection,
  PublicAccessSection,
  ViewerExperienceSection,
  OperationalMatrixSection,
  RemoteContributionSection,
  InclusiveParticipationSection,
  InformationContextSection,
  MediaLifecycleSection,
  ParticipationBoundariesSection,
  TechnicalAuditSection,
  OrganizationEventsSection,
  CivicBriefSection,
  EvidenceTrustSection,
  CivicFaqAccordion,
  CivicCtaBand
} from '@/components/civic-events-detailed';

export const metadata: Metadata = {
  title: 'Civic Live Streams & Public Proceedings | ZoikoStream',
  description: 'Plan public access, accessibility, production responsibility, and event-day readiness for civic events and legislative hearings.'
};

export default function CivicEventsDetailedPage() {
  return (
    <main className="w-full bg-white min-h-screen text-zinc-900 transition-colors duration-250">
      <CivicHero />
      <WhyCivicEventSection />
      <CivicEventShapeSection />
      <ProceedingsLedgerSection />
      <PublicAccessSection />
      <ViewerExperienceSection />
      <OperationalMatrixSection />
      <RemoteContributionSection />
      <InclusiveParticipationSection />
      <InformationContextSection />
      <MediaLifecycleSection />
      <ParticipationBoundariesSection />
      <TechnicalAuditSection />
      <OrganizationEventsSection />
      <CivicBriefSection />
      <EvidenceTrustSection />
      <CivicFaqAccordion />
      <CivicCtaBand />
    </main>
  );
}
