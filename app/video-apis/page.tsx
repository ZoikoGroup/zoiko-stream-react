import { Metadata } from 'next';
import {
  ApiHero,
  ApiWorkflows,
  ApiArchitecture,
  ApiLifecycleMapping,
  ApiCapabilityExplorer,
  ApiRequestProof,
  ApiReadinessChecklist,
  ApiDocHandoff,
  ApiSecurityTrust,
  ApiFaq,
  ApiCta
} from '@/components/video-apis';

export const metadata: Metadata = {
  title: 'Programmable Video APIs | ZoikoStream',
  description: 'Deploy, control, and analyze your streaming pipelines programmatically with developer REST APIs and SDKs.',
};

export default function VideoApisPage() {
  return (
    <main className="w-full bg-white min-h-screen text-zinc-900 font-spaceGrotesk">
      <ApiHero />
      <ApiWorkflows />
      <ApiArchitecture />
      <ApiLifecycleMapping />
      <ApiCapabilityExplorer />
      <ApiRequestProof />
      <ApiReadinessChecklist />
      <ApiDocHandoff />
      <ApiSecurityTrust />
      <ApiFaq />
      <ApiCta />
    </main>
  );
}
