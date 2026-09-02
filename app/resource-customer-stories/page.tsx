import React from 'react';
import {
  ResourceCustomerStoriesHeroSection,
  ResourceCustomerStoriesFeaturedSection,
  ResourceCustomerStoriesGridSection,
  ResourceCustomerStoriesStructureSection,
  ResourceCustomerStoriesQuotesSection,
  ResourceCustomerStoriesResearchSection,
  ResourceCustomerStoriesGovernanceSection,
  ResourceCustomerStoriesCtaSection,
} from '@/components/resource-customer-stories';

export const metadata = {
  title: 'Customer Stories - ZoikoStream',
  description: 'Hear how teams build, launch, and operate with ZoikoStream. Approved stories from organizations using ZoikoStream for live events, video delivery, media operations, developer workflows, and enterprise video.',
};

export default function ResourceCustomerStoriesPage() {
  return (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <ResourceCustomerStoriesHeroSection />
        <ResourceCustomerStoriesFeaturedSection />
        <ResourceCustomerStoriesGridSection />
        <ResourceCustomerStoriesStructureSection />
        <ResourceCustomerStoriesQuotesSection />
        <ResourceCustomerStoriesResearchSection />
        <ResourceCustomerStoriesGovernanceSection />
        <ResourceCustomerStoriesCtaSection />
      </main>
    </div>
  );
}
