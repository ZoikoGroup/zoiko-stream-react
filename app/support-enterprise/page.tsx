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
