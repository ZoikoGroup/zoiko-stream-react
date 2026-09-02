import React from 'react';

import {
  DevelopersHeroSection,
  DevelopersStageProgressSection,
  DevelopersNowSection,
  DevelopersGetStartedDestinationsSection,
  DevelopersSuccessPathSection,
  DevelopersPrerequisitesAuthoritiesSection,
  DevelopersBuildSurfacesSection,
  DevelopersTaxonomySection,
  DevelopersBuildForRealitySection,
  DevelopersTrustBoundariesSection,
  DevelopersOperateMapSection,
  DevelopersRecordingLifecycleSection,
  DevelopersBoundariesUpFrontSection,
  DevelopersEvidenceWithoutFrictionSection,
  DevelopersAnswerReadyFaqSection,
  DevelopersNextStepCtaSection,
} from '@/components/developers';

export const metadata = {
  title: 'Developers - ZoikoStream',
  description: 'Build video without rebuilding the media infrastructure. Programmable APIs, SDKs, media protocols, webhooks, secure playback, and operational tools for live, real-time, and on-demand video.',
};

export default function DevelopersPage() {
  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <DevelopersHeroSection />
        <DevelopersStageProgressSection />
        <DevelopersNowSection />
        <DevelopersGetStartedDestinationsSection />
        <DevelopersSuccessPathSection />
        <DevelopersPrerequisitesAuthoritiesSection />
        <DevelopersBuildSurfacesSection />
        <DevelopersTaxonomySection />
        <DevelopersBuildForRealitySection />
        <DevelopersTrustBoundariesSection />
        <DevelopersOperateMapSection />
        <DevelopersRecordingLifecycleSection />
        <DevelopersBoundariesUpFrontSection />
        <DevelopersEvidenceWithoutFrictionSection />
        <DevelopersAnswerReadyFaqSection />
        <DevelopersNextStepCtaSection />
      </main>
    </div>
  );
}
