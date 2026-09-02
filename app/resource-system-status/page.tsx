import React from 'react';

import {
  StatusHeroSection,
  StatusServiceComponentsSection,
  StatusActiveIncidentsSection,
  StatusPlannedMaintenanceSection,
  StatusInsideIncidentReportSection,
  StatusRecentHistorySection,
  StatusSubscribeUpdatesSection,
  StatusStillNeedHelpSection,
} from '@/components/resource-system-status';

export const metadata = {
  title: 'System Status - ZoikoStream',
  description: 'Live operational status, availability metrics, active incidents, and scheduled maintenance history for ZoikoStream platform services.',
};

export default function ResourceSystemStatusPage() {
  return (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <StatusHeroSection />
        <StatusServiceComponentsSection />
        <StatusActiveIncidentsSection />
        <StatusPlannedMaintenanceSection />
        <StatusInsideIncidentReportSection />
        <StatusRecentHistorySection />
        <StatusSubscribeUpdatesSection />
        <StatusStillNeedHelpSection />
      </main>
    </div>
  );
}
