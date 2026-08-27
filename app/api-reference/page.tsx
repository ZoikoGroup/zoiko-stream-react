import React from 'react';
import {
  HeroSection,
  BrowseApiFamiliesSection,
  FindOperationInSecondsSection,
  ContractVersionReadingSection,
  UnderstandOperationBeforeCallingSection,
  ConstructRequestsPrecisionSection,
  InspectEveryResponseSection,
  TreatFailureAsFirstClassSection,
  PreventDuplicateWritesSection,
  NavigateCollectionsSection,
  TrackProcessingStateSection,
  KnowYourCeilingsSection,
  CopyValidatedExamplesSection,
  KeepIntegrationsMaintainableSection,
  CommonIntegrationQuestionsSection,
} from '@/components/api-reference';

export default function ApiReferencePage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 flex flex-col justify-start items-start">
      <HeroSection />
      <BrowseApiFamiliesSection />
      <FindOperationInSecondsSection />
      <ContractVersionReadingSection />
      <UnderstandOperationBeforeCallingSection />
      <ConstructRequestsPrecisionSection />
      <InspectEveryResponseSection />
      <TreatFailureAsFirstClassSection />
      <PreventDuplicateWritesSection />
      <NavigateCollectionsSection />
      <TrackProcessingStateSection />
      <KnowYourCeilingsSection />
      <CopyValidatedExamplesSection />
      <KeepIntegrationsMaintainableSection />
      <CommonIntegrationQuestionsSection />
    </main>
  );
}
