import React from 'react';
import {
  VideoTutorialHeroSection,
  VideoTutorialPrinciplesSection,
  VideoTutorialGoalsSection,
  VideoTutorialFeaturedSection,
  VideoTutorialBrowseSection,
  VideoTutorialGuidedPathSection,
  VideoTutorialHowItWorksSection,
  VideoTutorialRecentlyUpdatedSection,
  VideoTutorialBeyondVideoSection,
  VideoTutorialCustomWorkflowCtaSection,
  VideoTutorialFaqSection,
} from '@/components/resource-video-tutorial';

export default function ResourceVideoTutorialPage() {
  return (
    <main className="w-full flex flex-col justify-start items-start min-h-screen bg-gray-950 overflow-x-hidden">
      <VideoTutorialHeroSection />
      <VideoTutorialPrinciplesSection />
      <VideoTutorialGoalsSection />
      <VideoTutorialFeaturedSection />
      <VideoTutorialBrowseSection />
      <VideoTutorialGuidedPathSection />
      <VideoTutorialHowItWorksSection />
      <VideoTutorialRecentlyUpdatedSection />
      <VideoTutorialBeyondVideoSection />
      <VideoTutorialCustomWorkflowCtaSection />
      <VideoTutorialFaqSection />
    </main>
  );
}
