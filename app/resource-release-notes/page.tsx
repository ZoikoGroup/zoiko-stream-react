import React from 'react';

import {
  ReleaseNotesHeroSection,
  ReleaseNotesMilestoneSection,
  ReleaseNotesProductAreasSection,
  ReleaseNotesAllReleasesSection,
  ReleaseNotesCompleteRecordSection,
  ReleaseNotesClassificationSection,
  ReleaseNotesRolloutSection,
  ReleaseNotesConnectedResourcesSection,
  ReleaseNotesFaqSection,
  ReleaseNotesStayInformedSection,
  ReleaseNotesAdoptionCtaSection,
} from '@/components/resource-release-notes';

export const metadata = {
  title: 'Release Notes - ZoikoStream',
  description: 'Follow customer-facing updates across ZoikoStream products, platform capabilities, developer surfaces, Live Events, and media operations.',
};

export default function ResourceReleaseNotesPage() {
  return (
    <div className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <ReleaseNotesHeroSection />
        <ReleaseNotesMilestoneSection />
        <ReleaseNotesProductAreasSection />
        <ReleaseNotesAllReleasesSection />
        <ReleaseNotesCompleteRecordSection />
        <ReleaseNotesClassificationSection />
        <ReleaseNotesRolloutSection />
        <ReleaseNotesConnectedResourcesSection />
        <ReleaseNotesFaqSection />
        <ReleaseNotesStayInformedSection />
        <ReleaseNotesAdoptionCtaSection />
      </main>
    </div>
  );
}
