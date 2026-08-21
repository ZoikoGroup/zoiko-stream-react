import HeroSection from '@/components/live-events-inquiries/HeroSection';
import SectionRightRouteTriage from '@/components/live-events-inquiries/SectionRightRouteTriage';
import SectionEventTypeSelectorMosaic from '@/components/live-events-inquiries/SectionEventTypeSelectorMosaic';
import SectionReadinessDimensions from '@/components/live-events-inquiries/SectionReadinessDimensions';
import SectionJourneyHorizontalScroll from '@/components/live-events-inquiries/SectionJourneyHorizontalScroll';
import SectionGuidedInquiryForm from '@/components/live-events-inquiries/SectionGuidedInquiryForm';
import SectionFaq from '@/components/live-events-inquiries/SectionFaq';
import SectionDecisionClosure from '@/components/live-events-inquiries/SectionDecisionClosure';

export const metadata = {
  title: 'Live Events Inquiries - Zoiko Stream',
  description: 'Plan live event streaming with ZoikoStream.',
};

export default function LiveEventsInquiriesPage() {
  return (
    <main>
      <HeroSection />
      <SectionRightRouteTriage />
      <SectionEventTypeSelectorMosaic />
      <SectionReadinessDimensions />
      <SectionJourneyHorizontalScroll />
      <SectionGuidedInquiryForm />
      <SectionFaq />
      <SectionDecisionClosure />
    </main>
  );
}
