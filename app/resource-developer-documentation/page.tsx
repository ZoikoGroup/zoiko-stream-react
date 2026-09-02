import React from 'react';
import {
  ResourceDeveloperDocumentationHeroSection,
  ResourceDeveloperDocumentationTrustSection,
  ResourceDeveloperDocumentationTasksSection,
  ResourceDeveloperDocumentationBuildSurfacesSection,
  ResourceDeveloperDocumentationEnvironmentSection,
  ResourceDeveloperDocumentationOperateSurfacesSection,
  ResourceDeveloperDocumentationProtocolsSection,
  ResourceDeveloperDocumentationReferenceExplorerSection,
  ResourceDeveloperDocumentationExamplesSection,
  ResourceDeveloperDocumentationErrorsLifecycleSection,
  ResourceDeveloperDocumentationTroubleshootingSection,
  ResourceDeveloperDocumentationFaqSection,
  ResourceDeveloperDocumentationCtaSection,
} from '@/components/resource-developer-documentation';

export const metadata = {
  title: 'Developer Documentation - ZoikoStream',
  description: 'Search source-governed ZoikoStream technical guidance for approved APIs, protocols, events, playback, analytics, operations, errors, versioning, and implementation boundaries.',
};

export default function ResourceDeveloperDocumentationPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <ResourceDeveloperDocumentationHeroSection />
        <ResourceDeveloperDocumentationTrustSection />
        <ResourceDeveloperDocumentationTasksSection />
        <ResourceDeveloperDocumentationBuildSurfacesSection />
        <ResourceDeveloperDocumentationEnvironmentSection />
        <ResourceDeveloperDocumentationOperateSurfacesSection />
        <ResourceDeveloperDocumentationProtocolsSection />
        <ResourceDeveloperDocumentationReferenceExplorerSection />
        <ResourceDeveloperDocumentationExamplesSection />
        <ResourceDeveloperDocumentationErrorsLifecycleSection />
        <ResourceDeveloperDocumentationTroubleshootingSection />
        <ResourceDeveloperDocumentationFaqSection />
        <ResourceDeveloperDocumentationCtaSection />
      </main>
    </div>
  );
}
