import React from 'react';
import {
  GlossaryHeroSection,
  GlossaryAlphabeticalSection,
  GlossaryTopicBrowseSection,
  GlossaryFoundationalTermsSection,
  GlossaryProtocolCompareSection,
  GlossaryAllTermsDirectorySection,
  GlossaryTermDeepDiveSection,
  GlossaryLearningPathwaysSection,
  GlossaryUsageGuidanceSection,
  GlossaryNeedHelpSection,
} from '@/components/resource-glossary';

export default function ResourceGlossaryPage() {
  return (
    <main className="w-full flex flex-col justify-start items-start min-h-screen bg-slate-950 overflow-x-hidden">
      <GlossaryHeroSection />
      <GlossaryAlphabeticalSection />
      <GlossaryTopicBrowseSection />
      <GlossaryFoundationalTermsSection />
      <GlossaryProtocolCompareSection />
      <GlossaryAllTermsDirectorySection />
      <GlossaryTermDeepDiveSection />
      <GlossaryLearningPathwaysSection />
      <GlossaryUsageGuidanceSection />
      <GlossaryNeedHelpSection />
    </main>
  );
}
