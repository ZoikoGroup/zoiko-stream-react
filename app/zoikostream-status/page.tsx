import SectionMobileNav from '@/components/status/SectionMobileNav';
import SectionSidebar from '@/components/status/SectionSidebar';
import SectionHero from '@/components/status/SectionHero';
import SectionDirectAnswer from '@/components/status/SectionDirectAnswer';
import SectionActiveIncidents from '@/components/status/SectionActiveIncidents';
import SectionComponentHealth from '@/components/status/SectionComponentHealth';
import SectionRegionalStatus from '@/components/status/SectionRegionalStatus';
import SectionScheduledMaintenance from '@/components/status/SectionScheduledMaintenance';
import SectionRecentHistory from '@/components/status/SectionRecentHistory';
import SectionSubscribeHelp from '@/components/status/SectionSubscribeHelp';
import SectionReliabilityBand from '@/components/status/SectionReliabilityBand';
import SectionStatusFooterLinks from '@/components/status/SectionStatusFooterLinks';

export const metadata = {
  title: 'System Status - Zoiko Stream',
  description: 'ZoikoStream service status, active incidents, scheduled maintenance and regional status.',
};

export default function StatusPage() {
  return (
    <main className="bg-[#f7f9fb]">
      <SectionMobileNav />
      <div className="max-w-[1264px] mx-auto px-6 lg:px-8 py-[40px] lg:py-[60px] flex flex-col lg:flex-row gap-[32px] items-start">
        <SectionSidebar />
        <div className="flex-1 w-full flex flex-col gap-[24px]">
          <SectionHero />
          <SectionDirectAnswer />
          <SectionActiveIncidents />
          <SectionComponentHealth />
          <div className="flex flex-col lg:flex-row gap-[24px]">
            <SectionRegionalStatus />
            <SectionScheduledMaintenance />
          </div>
          <SectionRecentHistory />
          <SectionReliabilityBand />
          <SectionSubscribeHelp />
        </div>
      </div>
      <SectionStatusFooterLinks />
    </main>
  );
}
