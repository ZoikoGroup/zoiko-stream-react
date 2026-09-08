import { TrustBreadcrumb, TrustSidebar, TrustMobileTabs } from '@/components/company-trust-center/TrustNav';
import SectionHero from '@/components/company-trust-center/SectionHero';
import SectionDirectAnswer from '@/components/company-trust-center/SectionDirectAnswer';
import SectionSearch from '@/components/company-trust-center/SectionSearch';
import SectionTrustDomains from '@/components/company-trust-center/SectionTrustDomains';
import SectionEvidenceSnapshot from '@/components/company-trust-center/SectionEvidenceSnapshot';
import SectionPrivacyReliability from '@/components/company-trust-center/SectionPrivacyReliability';
import SectionVulnerabilityAdvisories from '@/components/company-trust-center/SectionVulnerabilityAdvisories';
import SectionSharedResponsibility from '@/components/company-trust-center/SectionSharedResponsibility';
import SectionRequestEvidenceCta from '@/components/company-trust-center/SectionRequestEvidenceCta';
import SectionFaq from '@/components/company-trust-center/SectionFaq';

export const metadata = {
  title: 'Trust Center - Zoiko Stream',
  description: "Review how ZoikoStream approaches platform security, privacy, compliance and service resilience. Explore public trust resources, check live service health, report a vulnerability, or request governed evidence for due diligence.",
};

export default function ZoikostreamTrustCenterPage() {
  return (
    <main>
      <TrustBreadcrumb />
      <div className="flex flex-col lg:flex-row w-full">
        <TrustSidebar />
        <div className="flex-1 min-w-0 lg:pl-[88px] lg:pr-[80px] lg:pt-[64px]">
          <TrustMobileTabs />
          <SectionHero />
          <SectionDirectAnswer />
          <SectionSearch />
          <SectionTrustDomains />
          <SectionEvidenceSnapshot />
          <SectionPrivacyReliability />
          <SectionVulnerabilityAdvisories />
          <SectionSharedResponsibility />
          <SectionRequestEvidenceCta />
          <SectionFaq />
        </div>
      </div>
    </main>
  );
}
