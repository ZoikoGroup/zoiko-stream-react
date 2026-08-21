import React from 'react';
import {
  HeroSection,
  WhatDoYouNeedToDoSection,
  GovernedMediaRecordSection,
  MediaReadinessReviewSection,
  SearchWithoutCompromiseSection,
  RightsProvenanceSection,
  VersionsLineageSection,
  AccessibilityContinuitySection,
  AccessClassificationSection,
  LifecyclePreservationSection,
  MediaGovernanceRecordDashboardSection,
  DeveloperHandoffSection,
  OperationsAnalyticsSection,
  SecurityPrivacySection,
  AlreadyACustomerSection,
  FaqSection,
  FinalCtaSection,
} from '@/components/platform-media-management';

export default function PlatformMediaManagementPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      <HeroSection />
      <WhatDoYouNeedToDoSection />
      <GovernedMediaRecordSection />
      <MediaReadinessReviewSection />
      <SearchWithoutCompromiseSection />
      <RightsProvenanceSection />
      <VersionsLineageSection />
      <AccessibilityContinuitySection />
      <AccessClassificationSection />
      <LifecyclePreservationSection />
      <MediaGovernanceRecordDashboardSection />
      <DeveloperHandoffSection />
      <OperationsAnalyticsSection />
      <SecurityPrivacySection />
      <AlreadyACustomerSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
