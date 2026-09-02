import React from 'react';
import {
  ResourceContactSupportHeroSection,
  ResourceContactSupportImmediateSection,
  ResourceContactSupportPathSection,
  ResourceContactSupportFormSection,
  ResourceContactSupportReviewSection,
  ResourceContactSupportConfirmationSection,
  ResourceContactSupportResourcesSection,
  ResourceContactSupportFaqSection,
  ResourceContactSupportCtaSection,
} from '@/components/resource-contact-support';

export const metadata = {
  title: 'Contact Support - ZoikoStream',
  description: 'Get help with ZoikoStream. Route to the right support path with minimum data, clear expectations, and fast operational recovery.',
};

export default function ResourceContactSupportPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <ResourceContactSupportHeroSection />
        <ResourceContactSupportImmediateSection />
        <ResourceContactSupportPathSection />
        <ResourceContactSupportFormSection />
        <ResourceContactSupportReviewSection />
        <ResourceContactSupportConfirmationSection />
        <ResourceContactSupportResourcesSection />
        <ResourceContactSupportFaqSection />
        <ResourceContactSupportCtaSection />
      </main>
    </div>
  );
}
