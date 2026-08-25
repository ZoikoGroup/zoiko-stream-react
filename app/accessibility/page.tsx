import React from 'react';
import {
  AccessibilityHeroSection,
  HowToReportBarSection,
  ChooseWhatYouNeedSection,
  ScopeAndBoundariesSection,
  AccessibilityFormSection,
  AccessibleVideoGuidanceSection,
  AlternativeContactSection,
  AccessibilityFaqSection,
  MakeAccessBetterCtaSection,
} from '@/components/accessibility';

export default function AccessibilityPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col">
      <AccessibilityHeroSection />
      <HowToReportBarSection />
      <ChooseWhatYouNeedSection />
      <ScopeAndBoundariesSection />
      <AccessibilityFormSection />
      <AccessibleVideoGuidanceSection />
      <AlternativeContactSection />
      <AccessibilityFaqSection />
      <MakeAccessBetterCtaSection />
    </main>
  );
}
