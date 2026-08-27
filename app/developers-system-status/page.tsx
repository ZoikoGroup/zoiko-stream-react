import React from 'react';
import Section1Hero from '@/components/developers-system-status/Section1Hero';
import Section2MentalModel from '@/components/developers-system-status/Section2MentalModel';
import Section3HealthSummary from '@/components/developers-system-status/Section3HealthSummary';
import Section4Components from '@/components/developers-system-status/Section4Components';
import Section5Scope from '@/components/developers-system-status/Section5Scope';
import Section6ActiveIncidents from '@/components/developers-system-status/Section6ActiveIncidents';
import Section7Timeline from '@/components/developers-system-status/Section7Timeline';
import Section8Maintenance from '@/components/developers-system-status/Section8Maintenance';
import Section9HistoricalHealth from '@/components/developers-system-status/Section9HistoricalHealth';
import Section10Subscriptions from '@/components/developers-system-status/Section10Subscriptions';
import Section11DeveloperResources from '@/components/developers-system-status/Section11DeveloperResources';
import Section12MachineReadable from '@/components/developers-system-status/Section12MachineReadable';
import Section13DiagnosticsEvidence from '@/components/developers-system-status/Section13DiagnosticsEvidence';
import Section14TrustProvenance from '@/components/developers-system-status/Section14TrustProvenance';
import Section15Faq from '@/components/developers-system-status/Section15Faq';

export const metadata = {
  title: 'System Status | ZoikoStream',
  description: 'Live platform health and system status for ZoikoStream services.',
};

export default function DevelopersSystemStatus() {
  return (
    <main className="flex flex-col w-full bg-white overflow-hidden min-h-screen">
      <Section1Hero />
      <Section2MentalModel />
      <Section3HealthSummary />
      <Section4Components />
      <Section5Scope />
      <Section6ActiveIncidents />
      <Section7Timeline />
      <Section8Maintenance />
      <Section9HistoricalHealth />
      <Section10Subscriptions />
      <Section11DeveloperResources />
      <Section12MachineReadable />
      <Section13DiagnosticsEvidence />
      <Section14TrustProvenance />
      <Section15Faq />

    </main>
  );
}
