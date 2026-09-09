import {
  ManagedLiveEventsSection,
  ManagedEventPathSection,
  EventReadinessSection,
  ManagedServiceScopeSection,
  EventLifecycleSection,
  ResponsibilityMatrixSection,
  ContributionProductionSection,
  SecurityAudiencePrivacySection,
  AccessibilitySection,
  MonitoringIncidentSupportSection,
  VideoAnalyticsReportingSection,
  RecordingContinuitySection,
  LeadTimeSchedulingSection,
  PricingQuoteProcurementSection,
  TrustSecurityLegalSection,
  EventEvidenceProofSection,
  FAQSection,
  PlanManagedLiveEventSection
} from "@/components/managed-live-events";

export default function ManagedLiveEventsPage() {
  return (
    <main>
      <ManagedLiveEventsSection />
      <ManagedEventPathSection />
      <EventReadinessSection />
      <ManagedServiceScopeSection />
      <EventLifecycleSection />
      <ResponsibilityMatrixSection />
      <ContributionProductionSection />
      <SecurityAudiencePrivacySection />
      <AccessibilitySection />
      <MonitoringIncidentSupportSection />
      <RecordingContinuitySection />
      <VideoAnalyticsReportingSection />
      <LeadTimeSchedulingSection />
      <PricingQuoteProcurementSection />
      <TrustSecurityLegalSection />
      <EventEvidenceProofSection />
      <FAQSection />
      <PlanManagedLiveEventSection/>
    </main>
  );
}
