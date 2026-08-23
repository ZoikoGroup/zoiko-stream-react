import SectionHero from '@/components/enterprise-inquiries/SectionHero';
import SectionDirectAnswer from '@/components/enterprise-inquiries/SectionDirectAnswer';
import SectionNeedSelector from '@/components/enterprise-inquiries/SectionNeedSelector';
import SectionValuePillars from '@/components/enterprise-inquiries/SectionValuePillars';
import SectionEvaluationRail from '@/components/enterprise-inquiries/SectionEvaluationRail';
import SectionBuyingJourney from '@/components/enterprise-inquiries/SectionBuyingJourney';
import SectionGuidedInquiryForm from '@/components/enterprise-inquiries/SectionGuidedInquiryForm';
import SectionFaq from '@/components/enterprise-inquiries/SectionFaq';
import SectionClosingCta from '@/components/enterprise-inquiries/SectionClosingCta';

export const metadata = {
  title: 'Enterprise Inquiries - Zoiko Stream',
  description: 'Talk to ZoikoStream about your enterprise video requirements.',
};

export default function EnterpriseInquiriesPage() {
  return (
    <main>
      <SectionHero />
      <SectionDirectAnswer />
      <SectionNeedSelector />
      <SectionValuePillars />
      <SectionEvaluationRail />
      <SectionBuyingJourney />
      <SectionGuidedInquiryForm />
      <SectionFaq />
      <SectionClosingCta />
    </main>
  );
}
