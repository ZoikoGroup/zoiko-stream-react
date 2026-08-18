import HeroSection from "@/components/secure-audience-access/HeroSection";
import OperatingModelSection from "@/components/secure-audience-access/OperatingModel";
import ControlledAccessSection from "@/components/secure-audience-access/ControlledAccessSection";
import HowSecureAudienceAccessWorks from "@/components/secure-audience-access/HowSecureAudienceAccessWorks";
import AudienceAccessIntent from "@/components/secure-audience-access/AudienceAccessIntent";
import InviteOnlyAccessLifecycle from "@/components/secure-audience-access/InviteOnlyAccessLifecycle";
import TicketCommerceAuthorization from "@/components/secure-audience-access/TicketCommerceAuthorization";
import ViewerAccessPath from "@/components/secure-audience-access/ViewerAccessPath";
import PrivacySecurityAccessibility from "@/components/secure-audience-access/PrivacySecurityAccessibility";
import SecureAudienceAccessFAQ from "@/components/secure-audience-access/SecureAudienceAccessFAQ";
import SecureAudienceAccessCTA from "@/components/secure-audience-access/SecureAudienceAccessCTA";

export default function SecureAudienceAccessPage() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <OperatingModelSection />
      <ControlledAccessSection />
      <HowSecureAudienceAccessWorks />
      <AudienceAccessIntent />
      <InviteOnlyAccessLifecycle />
      <TicketCommerceAuthorization />
      <ViewerAccessPath />
      <PrivacySecurityAccessibility />
      <SecureAudienceAccessFAQ />
      <SecureAudienceAccessCTA />
    </main>
  );
}