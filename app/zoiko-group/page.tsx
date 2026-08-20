import {
  AtAGlanceSection,
  DecisionRoutingSection,
  EvidencePathsSection,
  GlobalPresenceSection,
  GroupRoleSection,
  HowZoikoStreamFitsSection,
  PracticalMeaningSection,
  RelationshipBanner,
  TrustBoundarySection,
  ZoikoGroupFaqSection,
  ZoikoGroupHero,
} from "@/components/zoiko-group";

export default function page() {
  return (
    <main>
      <ZoikoGroupHero />
      <RelationshipBanner />
      <AtAGlanceSection />
      <GroupRoleSection />
      <HowZoikoStreamFitsSection />
      <PracticalMeaningSection />
      <TrustBoundarySection />
      <GlobalPresenceSection />
      <DecisionRoutingSection />
      <EvidencePathsSection />
      <ZoikoGroupFaqSection />
    </main>
  );
}
