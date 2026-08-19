import { Metadata } from 'next';
import {
  ConferenceHero,
  ConferenceCapabilities,
  ConferenceComplexity,
  ConferenceProgramMap,
  ConferenceDemo,
  ConferenceControlDrawer,
  ConferenceAudienceView,
  ConferenceAccessibility,
  ConferenceNocOperations,
  ConferencePostEvent,
  ConferenceScenarios,
  ConferenceStartPlanning,
  ConferenceFaq,
  ConferenceDashboardSignIn,
  ConferenceCtaBand,
  ConferenceTrust,
} from '@/components/conference-and-multitrack';

export const metadata: Metadata = {
  title: 'Conferences & Multi-Track Stream Orchestration | ZoikoStream',
  description: 'Deliver beautiful multi-track virtual and hybrid conferences. Plan, deploy, and verify dozens of simultaneous streams inside a single integrated scheduling architecture.',
};

export default function ConferenceAndMultitrackPage() {
  return (
    <main className="w-full bg-zinc-955 min-h-screen text-zinc-900 dark:text-white transition-colors duration-250">
      <ConferenceHero />
      <ConferenceCapabilities />
      <ConferenceComplexity />
      <ConferenceProgramMap />
      <ConferenceDemo />
      <ConferenceControlDrawer />
      <ConferenceAudienceView />
      <ConferenceAccessibility />
      <ConferenceNocOperations />
      <ConferencePostEvent />
      <ConferenceScenarios />
      <ConferenceStartPlanning />
      <ConferenceTrust />
      <ConferenceFaq />
      <ConferenceDashboardSignIn />
      <ConferenceCtaBand />
    </main>
  );
}
