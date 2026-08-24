import React from 'react';

import {
  HeroSection,
  SevenPillarsSection,
  WorkflowPatternsSection,
  OperationalRolesSection,
  SourceReadinessSection,
  LiveOperationsConsoleSection,
  DestinationDeliverySection,
  RightsGovernanceSection,
  InclusiveDeliverySection,
  TruthOperationsMonitorSection,
  PostLiveArchiveSection,
  AnalyticsEvidenceSection,
  AssetManagementSection,
  SupportEvidenceSection,
  WorkflowSummarySection,
} from '@/components/solutions-media-communication';

export default function SolutionsMediaCommunicationPage() {
  return (
    
      <main className="flex-1 w-full">
        <HeroSection />
        <SevenPillarsSection />
        <WorkflowPatternsSection />
        <OperationalRolesSection />
        <SourceReadinessSection />
        <LiveOperationsConsoleSection />
        <DestinationDeliverySection />
        <RightsGovernanceSection />
        <InclusiveDeliverySection />
        <TruthOperationsMonitorSection />
        <PostLiveArchiveSection />
        <AnalyticsEvidenceSection />
        <AssetManagementSection />
        <SupportEvidenceSection />
        <WorkflowSummarySection />
      </main>
     
  );
}
