import {
    ChooseByObjectiveSection,
  ChooseByOrganizationSection,
  KnownWorkflowSection,
  NextStepsSection,
  OutcomeHeroSection,
  ProofSection,
  RequirementsTrustSection,
} from '@/components/solutions';

export default function SolutionsPage() {
  return (
    <main>

      <OutcomeHeroSection />
      <ChooseByObjectiveSection/>
      <ChooseByOrganizationSection />
      <KnownWorkflowSection/>
      <RequirementsTrustSection />
      <ProofSection/>
      <NextStepsSection />
    </main>
  );
}
