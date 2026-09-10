import { Metadata } from 'next';
import {
  HeroSection,
  TermsContentSections,
  FaqSection,
  RelatedLegalDocsSection,
  QuestionsCtaSection,
} from '@/components/terms-of-service';

export const metadata: Metadata = {
  title: 'Terms of Service | ZoikoStream Legal',
  description:
    'These Terms of Service govern your access to and use of zoikostream.com and the ZoikoStream platform, including video APIs, developer tools, and Live Events capabilities.',
};

export default function TermsOfServicePage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch bg-white">
      <HeroSection />
      <TermsContentSections />
      <FaqSection />
      <RelatedLegalDocsSection />
      <QuestionsCtaSection />
    </main>
  );
}
