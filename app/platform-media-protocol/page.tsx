import React from 'react';
import {
  HeroSection,
  DescribeConnectionSection,
  CompareQualifiedProtocolPathsSection,
  InspectProtocolQualificationSection,
  ConnectionProofSection,
  OperateObserveDiagnoseSection,
  TrustLifecycleConfidenceSection,
  ContinueRightDestinationSection,
  FaqSection,
} from '@/components/platform-media-protocol';

export default function PlatformMediaProtocolPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      <HeroSection />
      <DescribeConnectionSection />
      <CompareQualifiedProtocolPathsSection />
      <InspectProtocolQualificationSection />
      <ConnectionProofSection />
      <OperateObserveDiagnoseSection />
      <TrustLifecycleConfidenceSection />
      <ContinueRightDestinationSection />
      <FaqSection />
    </main>
  );
}
