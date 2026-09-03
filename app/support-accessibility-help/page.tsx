import React from "react";
import HeroSection from "@/components/support-accessibility-help/HeroSection";
import HelpIntentSelectorSection from "@/components/support-accessibility-help/HelpIntentSelectorSection";
import BarrierDetailsSection from "@/components/support-accessibility-help/BarrierDetailsSection";
import AccessibleAlternativesSection from "@/components/support-accessibility-help/AccessibleAlternativesSection";
import CommunicationPreferenceSection from "@/components/support-accessibility-help/CommunicationPreferenceSection";
import SpecialistSupportSection from "@/components/support-accessibility-help/SpecialistSupportSection";
import ReviewSubmitSection from "@/components/support-accessibility-help/ReviewSubmitSection";
import ConfirmationRecoverySection from "@/components/support-accessibility-help/ConfirmationRecoverySection";
import FaqDirectAnswersSection from "@/components/support-accessibility-help/FaqDirectAnswersSection";
import RelatedSupportDestinationsSection from "@/components/support-accessibility-help/RelatedSupportDestinationsSection";
import EnterpriseFooter from "@/components/EnterpriseFooter";
import EnterpriseNavbar from "@/components/EnterpriseNavbar";

export const metadata = {
  title: "Accessibility Help | ZoikoStream",
  description: "Get help with an accessibility barrier in ZoikoStream.",
};

export default function SupportAccessibilityHelpPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0f1a] w-full">
      <EnterpriseNavbar />
      <main className="flex flex-col flex-1 w-full">
        <HeroSection />
        <HelpIntentSelectorSection />
        <BarrierDetailsSection />
        <AccessibleAlternativesSection />
        <CommunicationPreferenceSection />
        <SpecialistSupportSection />
        <ReviewSubmitSection />
        <ConfirmationRecoverySection />
        <FaqDirectAnswersSection />
        <RelatedSupportDestinationsSection />
      </main>
      <EnterpriseFooter />
    </div>
  );
}
