import React from 'react';
import {
  HeroSection,
  OperatingModelsSection,
  FootprintConfigSection,
  PipelineStepperSection,
  IngestCleanlinessSection,
  BroadcastOperationSection,
  PlaybackUsabilitySection,
  DeliveryVerificationTableSection,
  AccessRoutingComparisonSection,
  DegradationContinuitySection,
  UsableAudienceExperiencesSection,
  OperatorHealthTelemetrySection,
  PostLiveWindowSection,
  ResponsibilitiesProofMatrixSection,
} from '@/components/Broadcast-globally';

export default function BroadcastGloballyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-900">
      <HeroSection />
      <OperatingModelsSection />
      <FootprintConfigSection />
      <PipelineStepperSection />
      <IngestCleanlinessSection />
      <BroadcastOperationSection />
      <PlaybackUsabilitySection />
      <DeliveryVerificationTableSection />
      <AccessRoutingComparisonSection />
      <DegradationContinuitySection />
      <UsableAudienceExperiencesSection />
      <OperatorHealthTelemetrySection />
      <PostLiveWindowSection />
      <ResponsibilitiesProofMatrixSection />
    </main>
  );
}
