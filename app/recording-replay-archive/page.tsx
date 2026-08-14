import { HeroSection, CapabilitiesSection, WhySection, HowItWorksSection, ArchitectureSection, CaptureReadinessSection, GateSection, AudienceAccessSection, AccessibilityMatrixSection, RightsPrivacySection, ArchiveLifecycleSection, ViewerStatesSection, DecisionGuideSection, TrustSecuritySection, FaqSection, FinalCtaSection } from "@/components/recording-replay-archive";

export default function page(){
    return(
        <main>
        <HeroSection/>
        <CapabilitiesSection/>
        <WhySection/>
        <HowItWorksSection/>
        <ArchitectureSection/>
        <CaptureReadinessSection/>
        <GateSection/>
        <AudienceAccessSection/>
        <AccessibilityMatrixSection/>
        <RightsPrivacySection/>
        <ArchiveLifecycleSection/>
        <ViewerStatesSection/>
        <DecisionGuideSection/>
        <TrustSecuritySection/>
        <FaqSection/>
        <FinalCtaSection/>
        </main>
    )
}
