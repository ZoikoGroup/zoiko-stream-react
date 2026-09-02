import React from 'react';
import {
  ResourceOverviewHeroSection,
  ResourceOverviewAudienceSection,
  ResourceOverviewTopicSection,
  ResourceOverviewUpdatesSection,
  ResourceOverviewSupportSection,
  ResourceOverviewCommunitySection,
  ResourceOverviewTimelineSection,
  ResourceOverviewIntegrationsSection,
  ResourceOverviewHighlightsSection,
  ResourceOverviewNewsletterSection,
  ResourceOverviewReadyToBuildCtaSection,
  ResourceOverviewFaqSection,
} from '@/components/resource-overview';

export const metadata = {
  title: 'Resources Overview - ZoikoStream',
  description: 'Find practical guidance, technical references, product updates, customer proof, support, and live-event planning resources for every stage of the ZoikoStream journey.',
};

export default function ResourcesOverviewAliasPage() {
  return (
    <div className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <ResourceOverviewHeroSection />
        <ResourceOverviewAudienceSection />
        <ResourceOverviewTopicSection />
        <ResourceOverviewUpdatesSection />
        <ResourceOverviewSupportSection />
        <ResourceOverviewCommunitySection />
        <ResourceOverviewTimelineSection />
        <ResourceOverviewIntegrationsSection />
        <ResourceOverviewHighlightsSection />
        <ResourceOverviewNewsletterSection />
        <ResourceOverviewReadyToBuildCtaSection />
        <ResourceOverviewFaqSection />
      </main>
    </div>
  );
}
