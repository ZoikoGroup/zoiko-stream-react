import React from 'react';
import HeroSection from '@/components/platform-captions-and-translation/HeroSection';
import TrustStripSection from '@/components/platform-captions-and-translation/TrustStripSection';
import JobSelectorSection from '@/components/platform-captions-and-translation/JobSelectorSection';
import ModalitySection from '@/components/platform-captions-and-translation/ModalitySection';
import LifecycleSection from '@/components/platform-captions-and-translation/LifecycleSection';
import ReadinessSection from '@/components/platform-captions-and-translation/ReadinessSection';
import OperationsSection from '@/components/platform-captions-and-translation/OperationsSection';
import ViewerControlSection from '@/components/platform-captions-and-translation/ViewerControlSection';
import QualitySection from '@/components/platform-captions-and-translation/QualitySection';
import ContinuitySection from '@/components/platform-captions-and-translation/ContinuitySection';
import SecurityPrivacyAccessibilitySection from '@/components/platform-captions-and-translation/SecurityPrivacyAccessibilitySection';
import DeveloperSection from '@/components/platform-captions-and-translation/DeveloperSection';
import EnterpriseSection from '@/components/platform-captions-and-translation/EnterpriseSection';
import FaqSection from '@/components/platform-captions-and-translation/FaqSection';
import FinalCtaSection from '@/components/platform-captions-and-translation/FinalCtaSection';

export default function PlatformCaptionsAndTranslationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0f1a]">
      <HeroSection />
      <TrustStripSection />
      <JobSelectorSection />
      <ModalitySection />
      <LifecycleSection />
      <ReadinessSection />
      <OperationsSection />
      <ViewerControlSection />
      <QualitySection />
      <ContinuitySection />
      <SecurityPrivacyAccessibilitySection />
      <DeveloperSection />
      <EnterpriseSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
