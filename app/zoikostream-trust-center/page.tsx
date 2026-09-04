import React from 'react';
import HeroSection from '@/components/zoikostream-trust-center/HeroSection';
import StateExplainerSection from '@/components/zoikostream-trust-center/StateExplainerSection';
import EvidenceFinderSection from '@/components/zoikostream-trust-center/EvidenceFinderSection';
import SpecialistMapSection from '@/components/zoikostream-trust-center/SpecialistMapSection';
import SharedResponsibilitySection from '@/components/zoikostream-trust-center/SharedResponsibilitySection';
import ControlledAccessSection from '@/components/zoikostream-trust-center/ControlledAccessSection';
import UpdatesCorrectionsSection from '@/components/zoikostream-trust-center/UpdatesCorrectionsSection';
import OperationalRoutesSection from '@/components/zoikostream-trust-center/OperationalRoutesSection';
import FaqSection from '@/components/zoikostream-trust-center/FaqSection';
import NextStepsSection from '@/components/zoikostream-trust-center/NextStepsSection';

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
