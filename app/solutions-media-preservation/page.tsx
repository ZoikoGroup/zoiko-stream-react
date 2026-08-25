import React from 'react';
import {
  HeroSection,
  ScopeDifferentiationSection,
  NeedExplicitSection,
  PreservationLifecycleSection,
  InventoryResponsibilitySection,
  MediaContextSection,
  VerifyUncertaintySection,
  PolicyProofSection,
  ControlVsPermissionSection,
  FormatUsabilitySection,
  AccessibilityArtifactsSection,
  MediaLineageSection,
  LifecycleAuthoritySection,
  PreservationHealthSection,
  EvidenceBeforePitchSection,
} from '@/components/solutions-media-preservation';

export default function SolutionsMediaPreservationPage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 flex flex-col">
      <HeroSection />
      <ScopeDifferentiationSection />
      <NeedExplicitSection />
      <PreservationLifecycleSection />
      <InventoryResponsibilitySection />
      <MediaContextSection />
      <VerifyUncertaintySection />
      <PolicyProofSection />
      <ControlVsPermissionSection />
      <FormatUsabilitySection />
      <AccessibilityArtifactsSection />
      <MediaLineageSection />
      <LifecycleAuthoritySection />
      <PreservationHealthSection />
      <EvidenceBeforePitchSection />
    </main>
  );
}
