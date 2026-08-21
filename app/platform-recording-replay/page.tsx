import React from 'react';
import {
  HeroSection,
  WhatBringsYouHereSection,
  ProcessContinuitySection,
  ReadinessCheckSection,
  CaptureOutcomeSection,
  AuthorizedReplaySection,
  ViewerStatesSection,
  SpecialistDestinationsSection,
  FaqSection,
  FinalCtaSection,
} from '@/components/platform-recording-replay';

export default function PlatformRecordingReplayPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <HeroSection />
      <WhatBringsYouHereSection />
      <ProcessContinuitySection />
      <ReadinessCheckSection />
      <CaptureOutcomeSection />
      <AuthorizedReplaySection />
      <ViewerStatesSection />
      <SpecialistDestinationsSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
