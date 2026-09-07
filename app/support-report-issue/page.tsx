import { Metadata } from 'next';
import {
  HeroSection,
  FasterPathSection,
  IssueTypeCategorySection,
  WhereDidItHappenSection,
  DescribeImpactOccurrenceSection,
  StepsToReproduceSafeEvidenceSection,
  ProtectSensitiveInfoSection,
  HowShouldWeFollowUpSection,
  ReviewPayloadSection,
  ReportSubmissionAcknowledgementSection,
  ReportLifecycleSection,
  IssueReportingFaqSection,
  ReportIssueCtaSection,
} from '@/components/support-report-issue';

export const metadata: Metadata = {
  title: 'Report an Issue | ZoikoStream',
  description:
    'Tell us what is not working as expected. Report a product, website, content, reliability, or quality problem. ZoikoStream routes the report to the appropriate team or support path.',
};

export default function SupportReportIssuePage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch">
      <HeroSection />
      <FasterPathSection />
      <IssueTypeCategorySection />
      <WhereDidItHappenSection />
      <DescribeImpactOccurrenceSection />
      <StepsToReproduceSafeEvidenceSection />
      <ProtectSensitiveInfoSection />
      <HowShouldWeFollowUpSection />
      <ReviewPayloadSection />
      <ReportSubmissionAcknowledgementSection />
      <ReportLifecycleSection />
      <IssueReportingFaqSection />
      <ReportIssueCtaSection />
    </main>
  );
}
