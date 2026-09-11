import React from 'react';
import HeroSection from '@/components/github/HeroSection';
import PrinciplesSection from '@/components/github/PrinciplesSection';
import TrustStatesSection from '@/components/github/TrustStatesSection';
import AuthorityBoundariesSection from '@/components/github/AuthorityBoundariesSection';
import TrustSafetySection from '@/components/github/TrustSafetySection';
import ExternalLinkSection from '@/components/github/ExternalLinkSection';
import LifecycleSection from '@/components/github/LifecycleSection';
import ValidationReleaseSection from '@/components/github/ValidationReleaseSection';
import FinalCtaSection from '@/components/github/FinalCtaSection';

export const metadata = {
  title: 'GitHub | ZoikoStream',
  description:
    'Find official ZoikoStream repositories, understand ownership and lifecycle status, and continue to external code with clear, verified trust signals.',
};

export default function GithubPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#0a0d13] w-full overflow-hidden">
      <HeroSection />
      <PrinciplesSection />
      <TrustStatesSection />
      <AuthorityBoundariesSection />
      <TrustSafetySection />
      <LifecycleSection />
      <ExternalLinkSection />
      <ValidationReleaseSection />
      <FinalCtaSection />
    </main>
  );
}
