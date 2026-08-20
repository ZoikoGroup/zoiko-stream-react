import {
  FounderSection,
  LeadershipCtaBand,
  LeadershipFaqSection,
  LeadershipHero,
  LeadershipTeamSection,
  OperatingModelSection,
  ProofPathsSection,
  ResponsibilityMapSection,
  WhoLeadsSection,
} from "@/components/leadership";

export default function page() {
  return (
    <main>
      <LeadershipHero />
      <WhoLeadsSection />
      <FounderSection />
      <LeadershipTeamSection />
      <ResponsibilityMapSection />
      <OperatingModelSection />
      <ProofPathsSection />
      <LeadershipFaqSection />
      <LeadershipCtaBand />
    </main>
  );
}
