import HeroSection from "@/components/global-event-streaming/HeroSection";
import DescribeSection from "@/components/global-event-streaming/DescribeSection";
import ProtocolsSection from "@/components/global-event-streaming/ProtocolsSection";
import InspectSection from "@/components/global-event-streaming/InspectSection";
import ProofSection from "@/components/global-event-streaming/ProofSection";
import ProductionControlSection from "@/components/global-event-streaming/ProductionControlSection";
import CoverageTruthSection from "@/components/global-event-streaming/CoverageTruthSection";
import AudienceAccessSection from "@/components/global-event-streaming/AudienceAccessSection";
import AccessibilitySection from "@/components/global-event-streaming/AccessibilitySection";
import LiveOpsSection from "@/components/global-event-streaming/LiveOpsSection";
import TelemetrySection from "@/components/global-event-streaming/TelemetrySection";
import RecordingReplaySection from "@/components/global-event-streaming/RecordingReplaySection";
import AnalyticsReviewSection from "@/components/global-event-streaming/AnalyticsReviewSection";
import EvidenceTrustSection from "@/components/global-event-streaming/EvidenceTrustSection";
import DecisionChecklistSection from "@/components/global-event-streaming/DecisionChecklistSection";
import FaqSection from "@/components/global-event-streaming/FaqSection";
import CtaBannerSection from "@/components/global-event-streaming/CtaBannerSection";

export const metadata = {
  title: "Global Event Streaming | ZoikoStream",
  description: "Stream One Event Across Time Zones With Control",
};

export default function GlobalEventStreamingPage() {
  return (
    <main className="flex flex-col w-full bg-[#0a0d14] min-h-screen">
      <HeroSection />
      <DescribeSection />
      <ProtocolsSection />
      <InspectSection />
      <ProofSection />
      <ProductionControlSection />
      <CoverageTruthSection />
      <AudienceAccessSection />
      <AccessibilitySection />
      <LiveOpsSection />
      <TelemetrySection />
      <RecordingReplaySection />
      <AnalyticsReviewSection />
      <EvidenceTrustSection />
      <DecisionChecklistSection />
      <FaqSection />
      <CtaBannerSection />
    </main>
  );
}
