import HeroSection from "@/components/live-streaming/HeroSection";
import ChooseLiveWorkflow from "@/components/live-streaming/ChooseLiveWorkflow";
import DesignEngineerInnovate from "@/components/live-streaming/DesignEngineerInnovate";
import LiveStreamingLifecycle from "@/components/live-streaming/LiveStreamingLifecycle";
import LiveSessionControlCenter from "@/components/live-streaming/LiveSessionControlCenter";
import LiveReadinessSection from "@/components/live-streaming/LiveReadinessSection";
import SecureDeliveryAudienceBoundary from "@/components/live-streaming/SecureDeliveryAudienceBoundary";
import RecordReplayPreserve from "@/components/live-streaming/RecordReplayPreserve";
import DeveloperImplementationHandoff from "@/components/live-streaming/DeveloperImplementationHandoff";
import EnterpriseOperations from "@/components/live-streaming/EnterpriseOperations";
import TrustProofFAQ from "@/components/live-streaming/TrustProofFAQ";
import StartBuildingCTA from "@/components/live-streaming/StartBuildingCTA";

export default function LiveStreamingPage() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <ChooseLiveWorkflow />
      <LiveReadinessSection />
      <LiveStreamingLifecycle />
      <LiveSessionControlCenter />
      <DesignEngineerInnovate />
      <SecureDeliveryAudienceBoundary />
      <RecordReplayPreserve />
      <DeveloperImplementationHandoff />
      <EnterpriseOperations />
      <TrustProofFAQ />
      <StartBuildingCTA />
    </main>
  );
}