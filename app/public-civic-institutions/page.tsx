import React from 'react';
import SectionHero from '@/components/public-civic-institutions/SectionHero';
import SectionContext from '@/components/public-civic-institutions/SectionContext';
import SectionWorkflows from '@/components/public-civic-institutions/SectionWorkflows';
import SectionContract from '@/components/public-civic-institutions/SectionContract';
import SectionGovernance from '@/components/public-civic-institutions/SectionGovernance';
import SectionAudienceAccess from '@/components/public-civic-institutions/SectionAudienceAccess';
import SectionAccessibility from '@/components/public-civic-institutions/SectionAccessibility';
import SectionPlanning from '@/components/public-civic-institutions/SectionPlanning';
import SectionLiveOperations from '@/components/public-civic-institutions/SectionLiveOperations';
import SectionParticipationBoundary from '@/components/public-civic-institutions/SectionParticipationBoundary';
import SectionRecordingBoundary from '@/components/public-civic-institutions/SectionRecordingBoundary';
import SectionRetentionGovernance from '@/components/public-civic-institutions/SectionRetentionGovernance';
import SectionSecurityEvidence from '@/components/public-civic-institutions/SectionSecurityEvidence';
import SectionAnalyticsTransparency from '@/components/public-civic-institutions/SectionAnalyticsTransparency';
import SectionConversionFaq from '@/components/public-civic-institutions/SectionConversionFaq';

export default function PublicCivicInstitutionsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <SectionHero />
      <SectionContext />
      <SectionWorkflows />
      <SectionContract />
      <SectionGovernance />
      <SectionAudienceAccess />
      <SectionAccessibility />
      <SectionPlanning />
      <SectionLiveOperations />
      <SectionParticipationBoundary />
      <SectionRecordingBoundary />
      <SectionRetentionGovernance />
      <SectionSecurityEvidence />
      <SectionAnalyticsTransparency />
      <SectionConversionFaq />
    </main>
  );
}
