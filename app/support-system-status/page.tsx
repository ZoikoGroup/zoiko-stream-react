import React from "react";
import HeroSection from "@/components/support-system-status/HeroSection";
import CurrentOperationalEventsSection from "@/components/support-system-status/CurrentOperationalEventsSection";
import PublicComponentStatusSection from "@/components/support-system-status/PublicComponentStatusSection";
import RecentIncidentsSection from "@/components/support-system-status/RecentIncidentsSection";
import SubscribeUpdatesSection from "@/components/support-system-status/SubscribeUpdatesSection";
import WhatShouldIDoNextSection from "@/components/support-system-status/WhatShouldIDoNextSection";
import UnderstandingSystemStatusSection from "@/components/support-system-status/UnderstandingSystemStatusSection";

export const metadata = {
  title: "System Status | ZoikoStream",
  description: "Check the current operational status of ZoikoStream services.",
};

export default function SupportSystemStatusPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0f1a]">
      <main className="flex-grow">
        <HeroSection />
        <CurrentOperationalEventsSection />
        <PublicComponentStatusSection />
        <RecentIncidentsSection />
        <SubscribeUpdatesSection />
        <WhatShouldIDoNextSection />
        <UnderstandingSystemStatusSection />
      </main>
    </div>
  );
}
