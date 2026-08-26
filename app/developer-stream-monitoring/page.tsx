import React from 'react';
import {
  HeroSection,
  StartWithQuestionSection,
  FirstHealthCheckSection,
  TwoDifferentQuestionsSection,
  DiagnoseFromBoundarySection,
  SignalEvidenceSection,
  TrustModelSection,
  AlertingModelSection,
  ChronologyNotConjectureSection,
  OperateAtScaleSection,
  AutomateItSection,
  EvidenceFirstSection,
  OperationalReadinessSection,
  ConversionRetentionSection,
  ReadyToGoFurtherCtaSection,
} from '@/components/developer-stream-monitoring';

export default function DeveloperStreamMonitoringPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col justify-start items-start overflow-hidden">
      <HeroSection />
      <StartWithQuestionSection />
      <FirstHealthCheckSection />
      <TwoDifferentQuestionsSection />
      <DiagnoseFromBoundarySection />
      <SignalEvidenceSection />
      <TrustModelSection />
      <AlertingModelSection />
      <ChronologyNotConjectureSection />
      <OperateAtScaleSection />
      <AutomateItSection />
      <EvidenceFirstSection />
      <OperationalReadinessSection />
      <ConversionRetentionSection />
      <ReadyToGoFurtherCtaSection />
    </main>
  );
}
