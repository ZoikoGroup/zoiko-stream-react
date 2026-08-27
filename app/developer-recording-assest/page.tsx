import React from 'react';
import {
  HeroSection,
  LiveStreamToManagedAssetSection,
  VerifyRecordingConfiguredSection,
  UnderstandEveryAssetStateSection,
  PrimaryOperationalSurfaceSection,
  EveryAnswerInOneWorkspaceSection,
  KnowWhatIsSafeToDoSection,
  OrganizeSearchManageInformationSection,
  DiscoverOutputsHandoffSection,
  UnderstandPolicyBeforeActionSection,
  AutomateAssetWorkflowsSection,
  DependableSequencePipelineSection,
  HandleFailuresWithoutWorseningSection,
  ConnectAssetOperationsToPlatformSection,
  ReadyToOperationalizeRecordedMediaSection,
} from '@/components/developer-recording-assest';

export default function DeveloperRecordingAssetPage() {
  return (
    <main className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <HeroSection />
      <LiveStreamToManagedAssetSection />
      <VerifyRecordingConfiguredSection />
      <UnderstandEveryAssetStateSection />
      <PrimaryOperationalSurfaceSection />
      <EveryAnswerInOneWorkspaceSection />
      <KnowWhatIsSafeToDoSection />
      <OrganizeSearchManageInformationSection />
      <DiscoverOutputsHandoffSection />
      <UnderstandPolicyBeforeActionSection />
      <AutomateAssetWorkflowsSection />
      <DependableSequencePipelineSection />
      <HandleFailuresWithoutWorseningSection />
      <ConnectAssetOperationsToPlatformSection />
      <ReadyToOperationalizeRecordedMediaSection />
    </main>
  );
}
