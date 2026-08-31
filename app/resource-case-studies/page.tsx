import React from 'react';
import {
  CaseStudiesHeroSection,
  CaseStudiesFeaturedStorySection,
  CaseStudiesProofLibrarySection,
  CaseStudiesInsideSection,
  CaseStudiesGovernanceSection,
  CaseStudiesEvaluationSection,
  CaseStudiesMethodologySection,
  CaseStudiesFitWorkflowSection,
} from '@/components/resource-case-studies';

export default function ResourceCaseStudiesPage() {
  return (
    <main className="w-full flex flex-col justify-start items-start min-h-screen bg-slate-950 overflow-x-hidden">
      <CaseStudiesHeroSection />
      <CaseStudiesFeaturedStorySection />
      <CaseStudiesProofLibrarySection />
      <CaseStudiesInsideSection />
      <CaseStudiesGovernanceSection />
      <CaseStudiesEvaluationSection />
      <CaseStudiesMethodologySection />
      <CaseStudiesFitWorkflowSection />
    </main>
  );
}
