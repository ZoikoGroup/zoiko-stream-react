import SecurityHero from "@/components/security/SecurityHero";
import SecurityControlDomains from "@/components/security/SecurityControlDomains";
import SecurityGovernance from "@/components/security/SecurityGovernance";
import SecurityAccessGovernance from "@/components/security/SecurityAccessGovernance";
import SecurityDataProtection from "@/components/security/SecurityDataProtection";
import SecurityOperational from "@/components/security/SecurityOperational";
import SecuritySharedResponsibility from "@/components/security/SecuritySharedResponsibility";
import SecurityEvidence from "@/components/security/SecurityEvidence";
import SecuritySafetyOperations from "@/components/security/SecuritySafetyOperations";
import SecurityReviewPaths from "@/components/security/SecurityReviewPaths";
import SecurityFAQ from "@/components/security/SecurityFAQ";

export default function SecurityPage() {
  return (
    <>
      <SecurityHero />
      <SecurityControlDomains />
      <SecurityGovernance />
      <SecurityAccessGovernance />
      <SecurityDataProtection />
      <SecurityOperational />
      <SecuritySharedResponsibility />
      <SecurityEvidence />
      <SecuritySafetyOperations />
      <SecurityFAQ />
      <SecurityReviewPaths />
    </>
  );
}
