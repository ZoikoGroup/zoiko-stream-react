import React from 'react';
import HeroSection from '@/components/footer-trust-center/HeroSection';
import StateExplainerSection from '@/components/footer-trust-center/StateExplainerSection';
import EvidenceFinderSection from '@/components/footer-trust-center/EvidenceFinderSection';
import SpecialistMapSection from '@/components/footer-trust-center/SpecialistMapSection';
import SharedResponsibilitySection from '@/components/footer-trust-center/SharedResponsibilitySection';
import ControlledAccessSection from '@/components/footer-trust-center/ControlledAccessSection';
import UpdatesCorrectionsSection from '@/components/footer-trust-center/UpdatesCorrectionsSection';
import OperationalRoutesSection from '@/components/footer-trust-center/OperationalRoutesSection';
import FaqSection from '@/components/footer-trust-center/FaqSection';
import NextStepsSection from '@/components/footer-trust-center/NextStepsSection';

export const metadata = {
  title: 'Trust Center | ZoikoStream',
  description: 'Find approved trust evidence, see what each record covers, and reach the right authority.',
};

export default function ZoikoStreamTrustCenterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#0a0f1a] w-full">
      <HeroSection />
      <StateExplainerSection />
      <EvidenceFinderSection />
      <SpecialistMapSection />
      <SharedResponsibilitySection />
      <ControlledAccessSection />
      <UpdatesCorrectionsSection />
      <OperationalRoutesSection />
      <FaqSection />
      <NextStepsSection />
    </main>
  );
}
