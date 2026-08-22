import {
  CategoryClaritySection,
  CoreModelSection,
  DecisionRoutingSection,
  DefinitionsSection,
  EvidencePathsSection,
  OperatingContextCta,
  OperatingContextFaqSection,
  OperatingContextHero,
  RelationshipBanner,
  ResponsibilityRoutingSection,
} from "@/components/operating-context";

export default function page() {
  return (
    <main>
      <OperatingContextHero />
      <RelationshipBanner />
      <CoreModelSection />
      <DefinitionsSection />
      <CategoryClaritySection />
      <ResponsibilityRoutingSection />
      <DecisionRoutingSection />
      <EvidencePathsSection />
      <OperatingContextFaqSection />
      <OperatingContextCta />
    </main>
  );
}
