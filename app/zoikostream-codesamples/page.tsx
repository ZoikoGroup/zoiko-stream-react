import React from 'react';
import CodeSamplesHeroSection from '@/components/zoikostream-codesamples/CodeSamplesHeroSection';
import CodeSamplesGridSection from '@/components/zoikostream-codesamples/CodeSamplesGridSection';
import CodeSamplesSafetySection from '@/components/zoikostream-codesamples/CodeSamplesSafetySection';
import CodeSamplesValidationSection from '@/components/zoikostream-codesamples/CodeSamplesValidationSection';
import CodeSamplesExplainSection from '@/components/zoikostream-codesamples/CodeSamplesExplainSection';
import CodeSamplesGovernanceSection from '@/components/zoikostream-codesamples/CodeSamplesGovernanceSection';
import CodeSamplesFAQSection from '@/components/zoikostream-codesamples/CodeSamplesFAQSection';
import CodeSamplesCTASection from '@/components/zoikostream-codesamples/CodeSamplesCTASection';

export default function ZoikoStreamCodeSamplesPage() {
  return (
    <main className="w-full flex flex-col justify-start items-start min-h-screen bg-slate-950 overflow-x-hidden">
      <CodeSamplesHeroSection />
      <CodeSamplesGridSection />
      <CodeSamplesSafetySection />
      <CodeSamplesValidationSection />
      <CodeSamplesExplainSection />
      <CodeSamplesGovernanceSection />
      <CodeSamplesFAQSection />
      <CodeSamplesCTASection />
    </main>
  );
}
