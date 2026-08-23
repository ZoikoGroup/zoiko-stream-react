import React from 'react';
import {
  HeroSection,
  WhoOutcomeIsForSection,
  RequirementsBuilderSection,
  InclusiveArchitectureSection,
  CaptionsTerminologySection,
  CaptionWorkflowSection,
  MultilingualVideoTableSection,
  InclusivePlayerExperienceSection,
  HumanReviewCorrectionsSection,
  ReplayContinuitySection,
  AccessibilityGovernanceSection,
  PrivacySensitiveContentSection,
  RequirementsValidationEvidenceSection,
  ImplementationOperatingModelSection,
  FaqSection,
} from '@/components/accessible-multilingual';

export default function AccessibleMultilingualPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-900">
      <HeroSection />
      <WhoOutcomeIsForSection />
      <RequirementsBuilderSection />
      <InclusiveArchitectureSection />
      <CaptionsTerminologySection />
      <CaptionWorkflowSection />
      <MultilingualVideoTableSection />
      <InclusivePlayerExperienceSection />
      <HumanReviewCorrectionsSection />
      <ReplayContinuitySection />
      <AccessibilityGovernanceSection />
      <PrivacySensitiveContentSection />
      <RequirementsValidationEvidenceSection />
      <ImplementationOperatingModelSection />
      <FaqSection />
    </main>
  );
}
