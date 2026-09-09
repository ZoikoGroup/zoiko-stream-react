import React from 'react';
import HeroSection from '@/components/zoikostream-contact-support/HeroSection';
import SupportIntentRouterSection from '@/components/zoikostream-contact-support/SupportIntentRouterSection';
import FastRouteCheckSection from '@/components/zoikostream-contact-support/FastRouteCheckSection';
import HumanSupportChannelsSection from '@/components/zoikostream-contact-support/HumanSupportChannelsSection';
import StructuredIntakeFormSection from '@/components/zoikostream-contact-support/StructuredIntakeFormSection';
import SpecialistHandoffMatrixSection from '@/components/zoikostream-contact-support/SpecialistHandoffMatrixSection';
import FAQSection from '@/components/zoikostream-contact-support/FAQSection';
import ClosingSection from '@/components/zoikostream-contact-support/ClosingSection';

export const metadata = {
  title: 'Contact Support | ZoikoStream',
  description: 'Get the right help for your ZoikoStream issue.',
};

export default function ZoikoStreamContactSupportPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white w-full font-inter">
      <HeroSection />
      <SupportIntentRouterSection />
      <FastRouteCheckSection />
      <HumanSupportChannelsSection />
      <StructuredIntakeFormSection />
      <SpecialistHandoffMatrixSection />
      <FAQSection />
      <ClosingSection />
    </main>
  );
}
