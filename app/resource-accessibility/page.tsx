import React from 'react';

import {
  AccessibilityHeroSection,
  AccessibilityGlanceSection,
  AccessibilityApproachSection,
  AccessibilityEvidenceTableSection,
  AccessibilityLimitationsSection,
  AccessibilityRemediationSection,
  AccessibilityTestedTechSection,
  AccessibilityMediaExperiencesSection,
  AccessibilityReportBarrierSection,
  AccessibilityProcurementResourcesSection,
  AccessibilityFaqSection,
} from '@/components/resource-accessibility';

export const metadata = {
  title: 'Accessibility Trust Center - ZoikoStream',
  description: 'Learn how accessibility is considered across ZoikoStream, review published conformance evidence, VPAT reports, known limitations, and report barriers.',
};

export default function ResourceAccessibilityPage() {
  return (
    <div className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <AccessibilityHeroSection />
        <AccessibilityGlanceSection />
        <AccessibilityApproachSection />
        <AccessibilityEvidenceTableSection />
        <AccessibilityLimitationsSection />
        <AccessibilityRemediationSection />
        <AccessibilityTestedTechSection />
        <AccessibilityMediaExperiencesSection />
        <AccessibilityReportBarrierSection />
        <AccessibilityProcurementResourcesSection />
        <AccessibilityFaqSection />
      </main>
    </div>
  );
}
