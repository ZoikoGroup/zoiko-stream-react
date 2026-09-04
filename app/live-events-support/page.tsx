import { Metadata } from 'next';
import {
  HeroSection,
  EventLifecycleSection,
  VerifyContextSection,
  SelectSupportNeedSection,
  UrgentIncidentDispatchSection,
  CheckServiceStatusSection,
  ReportImpactFactsSection,
  AuthorizedSupportOptionsSection,
  ProvideCaseContextSection,
  AttachEvidenceSection,
  ConfirmCaseContextSection,
  TrackCaseSection,
  EventSupportFaqSection,
  LiveEventsCtaSection,
} from '@/components/live-events-support';

export const metadata: Metadata = {
  title: 'Live Events Support | ZoikoStream',
  description:
    'Get the right help for your Live Event. ZoikoStream routes you to the correct support path and asks only for the context needed to continue.',
};

export default function LiveEventsSupportPage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch">
      <HeroSection />
      <EventLifecycleSection />
      <VerifyContextSection />
      <SelectSupportNeedSection />
      <UrgentIncidentDispatchSection />
      <CheckServiceStatusSection />
      <ReportImpactFactsSection />
      <AuthorizedSupportOptionsSection />
      <ProvideCaseContextSection />
      <AttachEvidenceSection />
      <ConfirmCaseContextSection />
      <TrackCaseSection />
      <EventSupportFaqSection />
      <LiveEventsCtaSection />
    </main>
  );
}
