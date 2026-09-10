import React from 'react';
import TrademarkInfo from '@/components/zoikostream-trademark/TrademarkInfo';
import TrademarkUseCases from '@/components/zoikostream-trademark/TrademarkUseCases';
import TrademarkDirectory from '@/components/zoikostream-trademark/TrademarkDirectory';
import TrademarkAttributionRules from '@/components/zoikostream-trademark/TrademarkAttributionRules';
import TrademarkLogoRules from '@/components/zoikostream-trademark/TrademarkLogoRules';
import TrademarkUseRuleMatrix from '@/components/zoikostream-trademark/TrademarkUseRuleMatrix';
import TrademarkPartnerRules from '@/components/zoikostream-trademark/TrademarkPartnerRules';
import TrademarkWorkflow from '@/components/zoikostream-trademark/TrademarkWorkflow';
import TrademarkThirdPartyMarks from '@/components/zoikostream-trademark/TrademarkThirdPartyMarks';
import TrademarkReportConcern from '@/components/zoikostream-trademark/TrademarkReportConcern';
import TrademarkHistory from '@/components/zoikostream-trademark/TrademarkHistory';
import TrademarkFAQ from '@/components/zoikostream-trademark/TrademarkFAQ';

export default function ZoikoStreamTrademarkPage() {
  return (
    <div className="flex flex-col w-full bg-white text-black min-h-screen font-inter">
      <TrademarkInfo />
      <TrademarkUseCases />
      <TrademarkDirectory />
      <TrademarkAttributionRules />
      <TrademarkLogoRules />
      <TrademarkUseRuleMatrix />
      <TrademarkPartnerRules />
      <TrademarkWorkflow />
      <TrademarkThirdPartyMarks />
      <TrademarkReportConcern />
      <TrademarkHistory />
      <TrademarkFAQ />
    </div>
  );
}
