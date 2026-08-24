import React from 'react';
import SectionHero from '@/components/workflow-finder/SectionHero';
import SectionThreeWays from '@/components/workflow-finder/SectionThreeWays';
import SectionObjectives from '@/components/workflow-finder/SectionObjectives';
import SectionAccessIdentity from '@/components/workflow-finder/SectionAccessIdentity';
import SectionOperatingModel from '@/components/workflow-finder/SectionOperatingModel';
import SectionRecommendation from '@/components/workflow-finder/SectionRecommendation';
import SectionRationale from '@/components/workflow-finder/SectionRationale';
import SectionAlternatives from '@/components/workflow-finder/SectionAlternatives';
import SectionWorkflowBridge from '@/components/workflow-finder/SectionWorkflowBridge';
import SectionLifecycle from '@/components/workflow-finder/SectionLifecycle';
import SectionTrustRequirements from '@/components/workflow-finder/SectionTrustRequirements';
import SectionInspectEvidence from '@/components/workflow-finder/SectionInspectEvidence';
import SectionConversionPaths from '@/components/workflow-finder/SectionConversionPaths';
import SectionSaveSharePrivacy from '@/components/workflow-finder/SectionSaveSharePrivacy';
import SectionFaqClosure from '@/components/workflow-finder/SectionFaqClosure';

export default function WorkflowFinderPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <SectionHero />
      <SectionThreeWays />
      <SectionObjectives />
      <SectionAccessIdentity />
      <SectionOperatingModel />
      <SectionRecommendation />
      <SectionRationale />
      <SectionAlternatives />
      <SectionWorkflowBridge />
      <SectionLifecycle />
      <SectionTrustRequirements />
      <SectionInspectEvidence />
      <SectionConversionPaths />
      <SectionSaveSharePrivacy />
      <SectionFaqClosure />
    </main>
  );
}
