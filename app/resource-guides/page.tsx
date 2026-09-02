import React from 'react';
import {
  ResourceGuidesHeroSection,
  ResourceGuidesAccomplishSection,
  ResourceGuidesFilterSection,
  ResourceGuidesFeaturedSection,
  ResourceGuidesBrowseAllSection,
  ResourceGuidesTopicsSection,
  ResourceGuidesLearningPathsSection,
  ResourceGuidesRecentlyUpdatedSection,
  ResourceGuidesGoDeeperSection,
  ResourceGuidesVisualLearningSection,
  ResourceGuidesBeyondHelpSection,
  ResourceGuidesReadyToBuildSection,
  ResourceGuidesFaqSection,
} from '@/components/resource-guides';

export const metadata = {
  title: 'Resource Guides - ZoikoStream',
  description: 'Practical guides for building and operating better video. Step-by-step guidance for implementation, live delivery, media operations, integrations, and security.',
};

export default function ResourceGuidesPage() {
  return (
    <div className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <ResourceGuidesHeroSection />
        <ResourceGuidesAccomplishSection />
        <ResourceGuidesFilterSection />
        <ResourceGuidesFeaturedSection />
        <ResourceGuidesBrowseAllSection />
        <ResourceGuidesTopicsSection />
        <ResourceGuidesLearningPathsSection />
        <ResourceGuidesRecentlyUpdatedSection />
        <ResourceGuidesGoDeeperSection />
        <ResourceGuidesVisualLearningSection />
        <ResourceGuidesBeyondHelpSection />
        <ResourceGuidesReadyToBuildSection />
        <ResourceGuidesFaqSection />
      </main>
    </div>
  );
}
