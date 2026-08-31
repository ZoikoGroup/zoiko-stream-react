import React from 'react';
import {
  HeroSection,
  ChooseIntegrationPathSection,
  GetToFirstPlaybackSection,
  TreatPlaybackAsSessionSection,
  KeepEntitlementDecisionsOutOfBrowserSection,
  DesignForFullPlayerLifecycleSection,
  GiveUsersControlWithoutExposingUnsupportedActionsSection,
  SetAudienceBoundaryPlayerSection,
  DesignForBrowserPolicySection,
  HandleLiveAndOnDemandPlaybackSection,
  DiagnosePlaybackFailuresByLayerSection,
  MeasurePlaybackQualityWithoutLeakingCredentialsSection,
  IntegratePlayerWithApplicationLifecycleSection,
  ValidateIntegrationBeforeProductionSection,
  FirstPlaybackToProductionConfidenceSection,
} from '@/components/developer-player-integrations';

export default function DeveloperPlayerIntegrationsPage() {
  return (
    <main className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <HeroSection />
      <ChooseIntegrationPathSection />
      <GetToFirstPlaybackSection />
      <TreatPlaybackAsSessionSection />
      <KeepEntitlementDecisionsOutOfBrowserSection />
      <DesignForFullPlayerLifecycleSection />
      <GiveUsersControlWithoutExposingUnsupportedActionsSection />
      <SetAudienceBoundaryPlayerSection />
      <DesignForBrowserPolicySection />
      <HandleLiveAndOnDemandPlaybackSection />
      <DiagnosePlaybackFailuresByLayerSection />
      <MeasurePlaybackQualityWithoutLeakingCredentialsSection />
      <IntegratePlayerWithApplicationLifecycleSection />
      <ValidateIntegrationBeforeProductionSection />
      <FirstPlaybackToProductionConfidenceSection />
    </main>
  );
}
