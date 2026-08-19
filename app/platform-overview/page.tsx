import { Metadata } from 'next';
import {
  PlatformHero,
  PlatformLifecycle,
  PlatformApis,
  PlatformEnterpriseMedia,
  PlatformSecureDeliver,
  PlatformRecordReplay,
  PlatformManagedEvents,
  PlatformInspectEvidence,
  PlatformFaq,
  PlatformCta,
} from '@/components/platform-overview';

export const metadata: Metadata = {
  title: 'Platform Infrastructure Overview | ZoikoStream',
  description: 'Scale your video pipeline with programmable media APIs, federal-grade stream security, global CDN delivery, and centralized live operations.',
};

export default function PlatformOverviewPage() {
  return (
    <main className="w-full bg-zinc-955 min-h-screen text-zinc-900 dark:text-white transition-colors duration-250 font-spaceGrotesk">
      <PlatformHero />
      <PlatformLifecycle />
      <PlatformApis />
      <PlatformEnterpriseMedia />
      <PlatformSecureDeliver />
      <PlatformRecordReplay />
      <PlatformManagedEvents />
      <PlatformInspectEvidence />
      <PlatformFaq />
      <PlatformCta />
    </main>
  );
}
