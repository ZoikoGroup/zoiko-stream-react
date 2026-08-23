import SolutionsHeroSection from '@/components/solutions-overview/SolutionsHeroSection';
import SectionThreeWays from '@/components/solutions-overview/SectionThreeWays';
import SectionObjectives from '@/components/solutions-overview/SectionObjectives';
import SectionComparison from '@/components/solutions-overview/SectionComparison';
import SectionOrganization from '@/components/solutions-overview/SectionOrganization';
import SectionQualifier from '@/components/solutions-overview/SectionQualifier';
import SectionFinder from '@/components/solutions-overview/SectionFinder';
import SectionWorkflows from '@/components/solutions-overview/SectionWorkflows';
import SectionLifecycleMap from '@/components/solutions-overview/SectionLifecycleMap';
import SectionTrustEvaluator from '@/components/solutions-overview/SectionTrustEvaluator';
import SectionInspectEvidence from '@/components/solutions-overview/SectionInspectEvidence';
import SectionOperatingModel from '@/components/solutions-overview/SectionOperatingModel';
import SectionConversionPaths from '@/components/solutions-overview/SectionConversionPaths';
import SectionFaq from '@/components/solutions-overview/SectionFaq';
import SectionDecisionClosure from '@/components/solutions-overview/SectionDecisionClosure';

export const metadata = {
  title: 'Solutions Overview - Zoiko Stream',
  description: 'Video infrastructure and operations built around your outcome.',
};

export default function SolutionsOverviewPage() {
  return (
    <main>
      <SolutionsHeroSection />
      <SectionThreeWays />
      <SectionObjectives />
      <SectionComparison />
      <SectionOrganization />
      <SectionQualifier />
      <SectionFinder />
      <SectionWorkflows />
      <SectionLifecycleMap />
      <SectionTrustEvaluator />
      <SectionInspectEvidence />
      <SectionOperatingModel />
      <SectionConversionPaths />
      <SectionFaq />
      <SectionDecisionClosure />
    </main>
  );
}
