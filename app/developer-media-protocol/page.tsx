import React from 'react';
import {
  HeroSection,
  WhyProtocolChoiceMattersSection,
  ProtocolDecisionMatrixSection,
  RtmpsContributionSection,
  SrtContributionSection,
  WhipContributionSection,
  VerifyPublishingSourceSection,
  CreateStreamConfigurePublisherSection,
  ConfirmNetworkPathSection,
  TreatIngestCredentialsAsSecretsSection,
  ExactEncoderSettingsSection,
  TroubleshootingSymptomsSection,
  PlanContributionRecoverySection,
  RepeatablePreEventGateSection,
  FaqProtocolChoiceSection,
  CtaConfigureContributionSection,
} from '@/components/developer-media-protocol';

export default function DeveloperMediaProtocolPage() {
  return (
    <main className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <HeroSection />
      <WhyProtocolChoiceMattersSection />
      <ProtocolDecisionMatrixSection />
      <RtmpsContributionSection />
      <SrtContributionSection />
      <WhipContributionSection />
      <VerifyPublishingSourceSection />
      <CreateStreamConfigurePublisherSection />
      <ConfirmNetworkPathSection />
      <TreatIngestCredentialsAsSecretsSection />
      <ExactEncoderSettingsSection />
      <TroubleshootingSymptomsSection />
      <PlanContributionRecoverySection />
      <RepeatablePreEventGateSection />
      <FaqProtocolChoiceSection />
      <CtaConfigureContributionSection />
    </main>
  );
}
