import React from 'react';
import HeroSection from '@/components/documentation-page/HeroSection';
import DocMapSection from '@/components/documentation-page/DocMapSection';
import SearchSection from '@/components/documentation-page/SearchSection';
import FundamentalsSection from '@/components/documentation-page/FundamentalsSection';
import WorkflowsSection from '@/components/documentation-page/WorkflowsSection';
import AccessSection from '@/components/documentation-page/AccessSection';
import ProtocolSelectorSection from '@/components/documentation-page/ProtocolSelectorSection';
import AsyncLifecycleSection from '@/components/documentation-page/AsyncLifecycleSection';
import SecurePlaybackSection from '@/components/documentation-page/SecurePlaybackSection';
import OperateSection from '@/components/documentation-page/OperateSection';
import TroubleshootingSection from '@/components/documentation-page/TroubleshootingSection';
import CodeExamplesSection from '@/components/documentation-page/CodeExamplesSection';
import VersioningSection from '@/components/documentation-page/VersioningSection';
import SupportSection from '@/components/documentation-page/SupportSection';
import ClosureSection from '@/components/documentation-page/ClosureSection';

export default function DocumentationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <HeroSection />
      <DocMapSection />
      <SearchSection />
      <FundamentalsSection />
      <WorkflowsSection />
      <AccessSection />
      <ProtocolSelectorSection />
      <AsyncLifecycleSection />
      <SecurePlaybackSection />
      <OperateSection />
      <TroubleshootingSection />
      <CodeExamplesSection />
      <VersioningSection />
      <SupportSection />
      <ClosureSection />
    </main>
  );
}
