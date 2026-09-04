import { Metadata } from 'next';
import {
  HeroSection,
  UpcomingMaintenanceSection,
  PastRecordsSection,
  NoticeDetailViewSection,
  GovernedLifecycleSection,
  SourceGovernedImpactSection,
  AppendOnlyHistorySection,
  NotificationSubscriptionSection,
  UpdatesComparisonSection,
  SupportAuthoritySection,
  ServiceUpdatesFaqSection,
} from '@/components/resources-service-updates';

export const metadata: Metadata = {
  title: 'Service Updates & Planned Maintenance | ZoikoStream',
  description:
    'See approved maintenance windows and operational changes, including timing, affected scope, expected impact, reschedules, cancellations, and completion updates.',
};

export default function ResourcesServiceUpdatesPage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch bg-[#070b14]">
      <HeroSection />
      <UpcomingMaintenanceSection />
      <PastRecordsSection />
      <NoticeDetailViewSection />
      <GovernedLifecycleSection />
      <SourceGovernedImpactSection />
      <AppendOnlyHistorySection />
      <NotificationSubscriptionSection />
      <UpdatesComparisonSection />
      <SupportAuthoritySection />
      <ServiceUpdatesFaqSection />
    </main>
  );
}
