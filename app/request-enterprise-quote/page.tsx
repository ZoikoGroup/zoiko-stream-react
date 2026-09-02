import React from 'react';
import {
  RequestEnterpriseQuoteHeroSection,
  RequestEnterpriseQuoteFormSection,
  RequestEnterpriseQuoteHighlightsSection,
} from '@/components/request-enterprise-quote';

export const metadata = {
  title: 'Request Enterprise Quote - ZoikoStream',
  description: 'Talk to the right expert, faster. Route your enterprise streaming inquiry to the ZoikoStream team best equipped to help.',
};

export default function RequestEnterpriseQuotePage() {
  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col justify-start items-start overflow-hidden">
      <main className="w-full flex flex-col justify-start items-start">
        <RequestEnterpriseQuoteHeroSection />
        <RequestEnterpriseQuoteFormSection />
        <RequestEnterpriseQuoteHighlightsSection />
      </main>
    </div>
  );
}
