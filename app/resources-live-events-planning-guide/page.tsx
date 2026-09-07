import { Metadata } from 'next';
import {
  HeroSection,
  FivePhasesSection,
  DefineObjectiveSection,
  DesignProductionWorkflowSection,
  ProtectAudienceSection,
  PlanWhatCanGoWrongSection,
  AssignOwnersReadinessSection,
  RecordingCommsSection,
  ReviewPlanningSummarySection,
  AuthorityRoutingGridSection,
  GuideFaqSection,
  GuideCtaSection,
} from '@/components/resources-live-events-planning-guide';

export const metadata: Metadata = {
  title: 'Live Events Planning Guide | ZoikoStream',
  description:
    'Plan a live event with decisions clear before the day matters. Navigate through the five phases from idea to live broadcast.',
};

export default function ResourcesLiveEventsPlanningGuidePage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch bg-[#070b14]">
      <HeroSection />
      <FivePhasesSection />
      <DefineObjectiveSection />
      <DesignProductionWorkflowSection />
      <ProtectAudienceSection />
      <PlanWhatCanGoWrongSection />
      <AssignOwnersReadinessSection />
      <RecordingCommsSection />
      <ReviewPlanningSummarySection />
      <AuthorityRoutingGridSection />
      <GuideFaqSection />
      <GuideCtaSection />
    </main>
  );
}
