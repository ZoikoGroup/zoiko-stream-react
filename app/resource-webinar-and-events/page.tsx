import React from 'react';
import {
  WebinarHeroSection,
  WebinarSessionFilterSection,
  WebinarFeaturedEventSection,
  WebinarBrowseEventsSection,
  WebinarSeriesSection,
  WebinarHowItWorksSection,
  WebinarGuidedPathSection,
  WebinarRelatedResourcesSection,
  WebinarExpertContactCtaSection,
  WebinarFaqSection,
} from '@/components/resource-webinar-and-events';

export default function ResourceWebinarAndEventsPage() {
  return (
    <main className="w-full flex flex-col justify-start items-start min-h-screen bg-slate-950 overflow-x-hidden">
      <WebinarHeroSection />
      <WebinarSessionFilterSection />
      <WebinarFeaturedEventSection />
      <WebinarBrowseEventsSection />
      <WebinarSeriesSection />
      <WebinarHowItWorksSection />
      <WebinarGuidedPathSection />
      <WebinarRelatedResourcesSection />
      <WebinarExpertContactCtaSection />
      <WebinarFaqSection />
    </main>
  );
}
