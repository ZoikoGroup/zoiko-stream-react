import React from 'react';
import {
  HeroSection,
  StartWithTheQuestionSection,
  MakeOneAnalyticsQuerySection,
  KnowWhatEachMetricMeansSection,
  QueryVerifiedTechnicalEndpointsSection,
  SegmentResultsWithDimensionsSection,
  MakeTimeExplicitSection,
  UnderstandAudiencesAndContentSection,
  InvestigatePlaybackQualitySection,
  SetAudienceBoundarySection,
  ChooseDatasetMatchesDecisionSection,
  KnowHowResultsAreShapedSection,
  QueryAnalyticsLeastPrivilegeSection,
  HandleQueryFailuresSection,
  ComposeValidQuerySection,
  TakeAnalyticsToProductionWorkflowSection,
  ReadyToPutAnalyticsSection,
  CtaSection,
} from '@/components/developer-analytics-api';

export default function DeveloperAnalyticsApiPage() {
  return (
    <main className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <HeroSection />
      <StartWithTheQuestionSection />
      <MakeOneAnalyticsQuerySection />
      <KnowWhatEachMetricMeansSection />
      <QueryVerifiedTechnicalEndpointsSection />
      <SegmentResultsWithDimensionsSection />
      <MakeTimeExplicitSection />
      <UnderstandAudiencesAndContentSection />
      <InvestigatePlaybackQualitySection />
      <SetAudienceBoundarySection />
      <ChooseDatasetMatchesDecisionSection />
      <KnowHowResultsAreShapedSection />
      <QueryAnalyticsLeastPrivilegeSection />
      <HandleQueryFailuresSection />
      <ComposeValidQuerySection />
      <TakeAnalyticsToProductionWorkflowSection />
      <ReadyToPutAnalyticsSection />
      <CtaSection />
    </main>
  );
}
