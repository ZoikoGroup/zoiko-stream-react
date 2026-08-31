import React from 'react';
import {
  HeroSection,
  UnderstandCorpusSection,
  FastTransparentRetrievalSection,
  SharedVocabularySection,
  GuidanceByBuildingSection,
  PrerequisitesBeforeRequestsSection,
  PickIntegrationSurfaceSection,
  BuildNonInstantOutcomesSection,
  TrustBoundariesSection,
  ShippingNotEndSection,
  SymptomToSafeResolutionSection,
  CopyWithConfidenceSection,
  KnowVersionReadingSection,
  KeepTechnicalRelationshipOpenSection,
  AnswerReadyFaqSection,
  ContinueFromWhereYouAreSection,
} from '@/components/developer-documentation';

export default function DeveloperDocumentationPage() {
  return (
    <main className="w-full min-h-screen bg-slate-100 flex flex-col justify-start items-start overflow-hidden">
      <HeroSection />
      <UnderstandCorpusSection />
      <FastTransparentRetrievalSection />
      <SharedVocabularySection />
      <GuidanceByBuildingSection />
      <PrerequisitesBeforeRequestsSection />
      <PickIntegrationSurfaceSection />
      <BuildNonInstantOutcomesSection />
      <TrustBoundariesSection />
      <ShippingNotEndSection />
      <SymptomToSafeResolutionSection />
      <CopyWithConfidenceSection />
      <KnowVersionReadingSection />
      <KeepTechnicalRelationshipOpenSection />
      <AnswerReadyFaqSection />
      <ContinueFromWhereYouAreSection />
    </main>
  );
}
