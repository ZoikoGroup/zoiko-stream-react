import React from 'react';
import Section1Hero from '@/components/developers-changelog/Section1Hero';
import Section2HowToRead from '@/components/developers-changelog/Section2HowToRead';
import Section3LatestRelease from '@/components/developers-changelog/Section3LatestRelease';
import Section4SearchAndFilter from '@/components/developers-changelog/Section4SearchAndFilter';
import Section5ReleaseFeed from '@/components/developers-changelog/Section5ReleaseFeed';
import Section6ReleaseDetail from '@/components/developers-changelog/Section6ReleaseDetail';
import Section7ImpactModel from '@/components/developers-changelog/Section7ImpactModel';
import Section8ApiSchemaChanges from '@/components/developers-changelog/Section8ApiSchemaChanges';
import Section9SdkChanges from '@/components/developers-changelog/Section9SdkChanges';
import Section10MigrationWorkspace from '@/components/developers-changelog/Section10MigrationWorkspace';
import Section11DeprecationLifecycle from '@/components/developers-changelog/Section11DeprecationLifecycle';
import Section12Corrections from '@/components/developers-changelog/Section12Corrections';
import Section13Subscriptions from '@/components/developers-changelog/Section13Subscriptions';
import Section14Governance from '@/components/developers-changelog/Section14Governance';
import Section15Faq from '@/components/developers-changelog/Section15Faq';
import Footer from '@/components/footer/footer';

export default function DevelopersChangelogPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0d14] w-full">
      <Section1Hero />
      <Section2HowToRead />
      <Section3LatestRelease />
      <Section4SearchAndFilter />
      <Section5ReleaseFeed />
      <Section6ReleaseDetail />
      <Section7ImpactModel />
      <Section8ApiSchemaChanges />
      <Section9SdkChanges />
      <Section10MigrationWorkspace />
      <Section11DeprecationLifecycle />
      <Section12Corrections />
      <Section13Subscriptions />
      <Section14Governance />
      <Section15Faq />
      <Footer />
    </main>
  );
}
