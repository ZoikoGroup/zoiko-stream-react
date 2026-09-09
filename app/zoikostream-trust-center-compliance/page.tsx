import React from 'react';
import HeroSection from '@/components/zoikostream-trust-center-compliance/HeroSection';
import ExplainerSection from '@/components/zoikostream-trust-center-compliance/ExplainerSection';
import FinderSection from '@/components/zoikostream-trust-center-compliance/FinderSection';
import DirectorySection from '@/components/zoikostream-trust-center-compliance/DirectorySection';
import EvidenceInventorySection from '@/components/zoikostream-trust-center-compliance/EvidenceInventorySection';
import EvidenceHistorySection from '@/components/zoikostream-trust-center-compliance/EvidenceHistorySection';
import EvidenceAccessSection from '@/components/zoikostream-trust-center-compliance/EvidenceAccessSection';
import ResourcesSection from '@/components/zoikostream-trust-center-compliance/ResourcesSection';
import ValidationSection from '@/components/zoikostream-trust-center-compliance/ValidationSection';
import FaqSection from '@/components/zoikostream-trust-center-compliance/FaqSection';
import CtaBannerSection from '@/components/zoikostream-trust-center-compliance/CtaBannerSection';

export const metadata = {
  title: 'Compliance | ZoikoStream Trust Center',
  description: 'Every compliance claim at ZoikoStream is backed by evidence — with exact type, scope, status, and limitations.',
};

export default function ZoikoStreamTrustCenterCompliancePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white w-full">
      <HeroSection />
      <ExplainerSection />
      <FinderSection />
      <DirectorySection />
      <EvidenceInventorySection />
      <EvidenceHistorySection />
      <EvidenceAccessSection />
      <ResourcesSection />
      <ValidationSection />
      <FaqSection />
      <CtaBannerSection />
    </main>
  );
}
