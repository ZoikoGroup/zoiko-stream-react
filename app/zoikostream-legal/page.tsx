import { Metadata } from 'next';
import { LegalPoliciesSection } from '@/components/zoikostream-legal';

export const metadata: Metadata = {
  title: 'Legal Policies | ZoikoStream Legal',
  description:
    'Current versions of the agreements and policies that govern use of ZoikoStream. The authoritative legal documents for our services.',
};

export default function ZoikostreamLegalPage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-stretch bg-white">
      <LegalPoliciesSection />
    </main>
  );
}
