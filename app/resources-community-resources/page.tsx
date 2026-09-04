import { Metadata } from 'next';
import {
  HeroSection,
  BeforeYouPostSection,
  NewToCommunitySection,
  BrowseResourcesSection,
  GiveBackCommunitySection,
  CommunityStandardsTrustSection,
  WhenCommunityNotAnswerSection,
  CommunityParticipationFaqSection,
  ArchitectureGuidanceSection,
} from '@/components/resources-community-resources';

export const metadata: Metadata = {
  title: 'Community Resources & Builder Spaces | ZoikoStream',
  description:
    'Find approved community spaces and peer-learning resources for video, live events, APIs, media operations, and implementation conversations.',
};

export default function ResourcesCommunityResourcesPage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch bg-[#070b14]">
      <HeroSection />
      <BeforeYouPostSection />
      <NewToCommunitySection />
      <BrowseResourcesSection />
      <GiveBackCommunitySection />
      <CommunityStandardsTrustSection />
      <WhenCommunityNotAnswerSection />
      <CommunityParticipationFaqSection />
      <ArchitectureGuidanceSection />
    </main>
  );
}
