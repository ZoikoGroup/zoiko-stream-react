import { Metadata } from 'next';
import {
  CorpHero,
  CorpProceedingsLedgerSection,
  WhyCorpBroadcastSection,
  CorpEventShapeSection,
  CorpEvidenceTrustSection,
  CorpPublicAccessSection,
  CorpViewerExperienceSection,
  CorpOperationalMatrixSection,
  CorpRemoteContributionSection,
  CorpInclusiveParticipationSection,
  CorpInformationContextSection,
  CorpMediaLifecycleSection,
  CorpParticipationBoundariesSection,
  CorpTechnicalAuditSection,
  CorpOrganizationEventsSection,
  CorpBriefSection,
  CorpFaqAccordion,
  CorpCtaBand
} from '@/components/corporate-broadcast-detailed';

export const metadata: Metadata = {
  title: 'Corporate Live Streams & Enterprise Broadcasts | ZoikoStream',
  description: 'Plan public access, SSO employee auth, production responsibility, and readiness for corporate keynotes, all-hands meetings, and board broadcasts.'
};

export default function CorporateBroadcastDetailedPage() {
  return (
    <main className="w-full bg-zinc-950 min-h-screen text-white transition-colors duration-250">
      <CorpHero />
      <CorpProceedingsLedgerSection />
      <WhyCorpBroadcastSection />
      <CorpEventShapeSection />
      <CorpEvidenceTrustSection />
      <CorpPublicAccessSection />
      <CorpViewerExperienceSection />
      <CorpOperationalMatrixSection />
      <CorpRemoteContributionSection />
      <CorpInclusiveParticipationSection />
      <CorpInformationContextSection />
      <CorpMediaLifecycleSection />
      <CorpParticipationBoundariesSection />
      <CorpTechnicalAuditSection />
      <CorpOrganizationEventsSection />
      <CorpBriefSection />
      <CorpFaqAccordion />
      <CorpCtaBand />
    </main>
  );
}
