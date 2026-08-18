import HeroSection from "@/components/sdks/HeroSection";
import ChooseEnvironmentSection from "@/components/sdks/ChooseEnvironmentSection";
import CompatibilitySection from "@/components/sdks/CompatibilitySection";
import QuickstartSection from "@/components/sdks/QuickstartSection";
import CapabilityCoverageSection from "@/components/sdks/CapabilityCoverageSection";
import MaintenanceSection from "@/components/sdks/MaintenanceSection";
import SupplyChainSection from "@/components/sdks/SupplyChainSection";
import OperateSection from "@/components/sdks/OperateSection";
import EnterpriseSection from "@/components/sdks/EnterpriseSection";
import FaqSection from "@/components/sdks/FaqSection";
import FinalCtaSection from "@/components/sdks/FinalCtaSection";

export const metadata = {
  title: "SDKs | Zoiko Stream",
  description: "Integrate Zoiko Stream with our powerful and easy-to-use SDKs.",
};

export default function SdksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-black w-full">
      <HeroSection />
      <ChooseEnvironmentSection />
      <CompatibilitySection />
      <QuickstartSection />
      <CapabilityCoverageSection />
      <MaintenanceSection />
      <SupplyChainSection />
      <OperateSection />
      <EnterpriseSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
