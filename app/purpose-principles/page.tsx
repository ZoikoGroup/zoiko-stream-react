import {
  CorePrinciplesSection,
  EvidencePathsSection,
  GlobalReachBanner,
  PrinciplesInPracticeSection,
  PurposeCtaBand,
  PurposeFaqSection,
  PurposeHero,
  PurposeStatement,
  TradeoffsSection,
} from "@/components/purpose-principles";

export default function page() {
  return (
    <main>
      <PurposeHero />
      <PurposeStatement />
      <CorePrinciplesSection />
      <PrinciplesInPracticeSection />
      <TradeoffsSection />
      <GlobalReachBanner />
      <EvidencePathsSection />
      <PurposeFaqSection />
      <PurposeCtaBand />
    </main>
  );
}
