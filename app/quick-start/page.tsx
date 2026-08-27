import React from 'react';
import {
  HeroSection,
  EveryMilestoneVerifiedSection,
  DiscoverBlockersSection,
  ConfirmAccessEnvironmentSection,
  StoreCredentialsSafelySection,
  CreateStreamResourceSection,
  ConnectContributionSourceSection,
  VerifyLiveSignalSection,
  SeparateMediaAvailabilitySection,
  CloseLoopViewerOutcomeSection,
  MutationsAsynchronousSection,
  RecoverBeforeLeavingSection,
  LiveStreamToRecordingSection,
  ReadinessModulesGapSection,
  ContinueFromWhereYouAreSection,
} from '@/components/quick-start';

export default function QuickStartPage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 flex flex-col justify-start items-start">
      <HeroSection />
      <EveryMilestoneVerifiedSection />
      <DiscoverBlockersSection />
      <ConfirmAccessEnvironmentSection />
      <StoreCredentialsSafelySection />
      <CreateStreamResourceSection />
      <ConnectContributionSourceSection />
      <VerifyLiveSignalSection />
      <SeparateMediaAvailabilitySection />
      <CloseLoopViewerOutcomeSection />
      <MutationsAsynchronousSection />
      <RecoverBeforeLeavingSection />
      <LiveStreamToRecordingSection />
      <ReadinessModulesGapSection />
      <ContinueFromWhereYouAreSection />
    </main>
  );
}
