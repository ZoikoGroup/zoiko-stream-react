import { Metadata } from 'next';
import {
  HeroSection,
  SupportAccessMatrixSection,
  SelectSupportNeedSection,
  FastestPathSection,
  ReportImpactFactsSection,
  AuthorizedSupportOptionsSection,
  MinimumContextSection,
  EvidenceTransferSection,
  NoFabricatedCasesSection,
  EveryPathLeadsSection,
  EnterpriseSupportFaqSection,
  EnterpriseCtaSection,
} from '@/components/support-enterprise';

export const metadata: Metadata = {
  title: 'Enterprise Support & Organization Access | ZoikoStream',
  description:
    'Start with your organization and support need. ZoikoStream routes you to the correct support authority and asks only for the context needed to continue.',
};

export default function SupportEnterprisePage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch bg-[#070b14]">
      <HeroSection />
      <SupportAccessMatrixSection />
      <SelectSupportNeedSection />
      <FastestPathSection />
      <ReportImpactFactsSection />
      <AuthorizedSupportOptionsSection />
      <MinimumContextSection />
      <EvidenceTransferSection />
      <NoFabricatedCasesSection />
      <EveryPathLeadsSection />
      <EnterpriseSupportFaqSection />
      <EnterpriseCtaSection />
    </main>
  );
}
