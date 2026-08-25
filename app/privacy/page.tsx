import React from 'react';
import {
  PrivacyHeroSection,
  RelationshipSelectorSection,
  PrivacyAtAGlanceSection,
  PrivacyChoicesSection,
  PrivacyRightsSection,
  DataFlowSection,
  LiveEventsPrivacySection,
  RelatedPrivacyTopicsSection,
  PrivacyFaqSection,
  PrivacyHelpRoutesSection,
} from '@/components/privacy';

export default function PrivacyPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col ">
      <PrivacyHeroSection />
      <RelationshipSelectorSection />
      <PrivacyAtAGlanceSection />
      <PrivacyChoicesSection />
      <PrivacyRightsSection />
      <DataFlowSection />
      <LiveEventsPrivacySection />
      <RelatedPrivacyTopicsSection />
      <PrivacyFaqSection />
      <PrivacyHelpRoutesSection />
    </main>
  );
}
