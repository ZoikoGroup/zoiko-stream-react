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
    <main className="w-full bg-white min-h-screen text-zinc-900 font-spaceGrotesk">
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
