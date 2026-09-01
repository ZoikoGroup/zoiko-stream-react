import React from 'react';

import {
  HelpCenterHeroSection,
  HelpCenterPathwaysSection,
  HelpCenterTopTopicsSection,
  HelpCenterBrowseProductSection,
  HelpCenterEditorialSection,
  HelpCenterTroubleshootingSection,
  HelpCenterAccountAccessSection,
  HelpCenterDeveloperResourcesSection,
  HelpCenterLiveEventsSection,
  HelpCenterServiceHealthSection,
  HelpCenterTrustSection,
  HelpCenterHumanSupportSection,
  HelpCenterFaqSection,
} from '@/components/resource-help-center';

export const metadata = {
  title: 'Help Center - ZoikoStream',
  description: 'Search approved ZoikoStream help content, browse by product task, guided troubleshooting, developer guidance, live service status, and human support.',
};

export default function ResourceHelpCenterPage() {
  return (
    <div className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <HelpCenterHeroSection />
        <HelpCenterPathwaysSection />
        <HelpCenterTopTopicsSection />
        <HelpCenterBrowseProductSection />
        <HelpCenterEditorialSection />
        <HelpCenterTroubleshootingSection />
        <HelpCenterAccountAccessSection />
        <HelpCenterDeveloperResourcesSection />
        <HelpCenterLiveEventsSection />
        <HelpCenterServiceHealthSection />
        <HelpCenterTrustSection />
        <HelpCenterHumanSupportSection />
        <HelpCenterFaqSection />
      </main>
    </div>
  );
}
