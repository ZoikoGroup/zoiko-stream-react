import React from 'react';
import Link from 'next/link';

const imgBg = "/images/webhooks/mental-model-background.webp";

const routing = [
  { question: 'Something changed?', answer: 'Webhook event signal' },
  { question: 'Current state?', answer: 'API/resource read' },
  { question: 'Create/change?', answer: 'API operation' },
  { question: 'Missed delivery?', answer: 'Replay/read recovery' },
  { question: 'Unknown status?', answer: 'Authoritative reconciliation' },
];

export default function WebhooksVsApiSection() {
  return (
    <section className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Webhooks-Vs-API-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.45] contrast-[1.05]" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.18)] inset-0" />
      </div>

      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#f1f5f9] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Webhooks vs API polling and async jobs
          </h2>
          <p className="font-sans font-normal text-[#94a3b8] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            Understand when events notify and when authoritative reads reconcile.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start lg:items-center w-full">
          <div className="flex flex-col gap-[24px] items-start flex-1 w-full">
            <h3 className="font-sans font-bold text-[#f1f5f9] text-[20px] sm:text-[24px] w-full">
              Event notification, not a replacement for authoritative state
            </h3>
            <p className="font-sans font-normal text-[#94a3b8] text-[15px] sm:text-[16px] leading-[24px] w-full">
              Webhooks provide real-time signals that some state has transitioned in our delivery pipeline. However,
              they are not designed to transmit heavy data. Use webhook payloads to trigger lightweight listeners, then
              query the authoritative API endpoints for current resource state.
            </p>
            <Link
              href="/developer-api-reference"
              className="border-[1.5px] border-[#94a3b8] border-solid flex items-start px-[28px] py-[14px] rounded-[10px] transition-colors hover:border-[#f1f5f9]"
            >
              <span className="font-sans font-medium text-[#f1f5f9] text-[16px]">View API reference</span>
            </Link>
          </div>

          <div className="bg-[rgba(24,27,33,0.8)] border-[1.5px] border-[#1e2530] border-solid flex flex-col gap-[20px] items-start p-[28px] rounded-[16px] w-full lg:w-[600px]">
            <p className="font-sans font-bold text-[#f1f5f9] text-[18px]">How to distribute work</p>
            <div className="flex flex-col gap-[12px] items-start w-full">
              {routing.map((row) => (
                <div
                  key={row.question}
                  className="bg-[rgba(2,6,23,0.5)] flex flex-wrap gap-2 justify-between items-start p-[12px] rounded-[8px] w-full"
                >
                  <span className="font-sans font-bold text-[#94a3b8] text-[12px]">{row.question}</span>
                  <span className="font-sans font-normal text-[#00d4aa] text-[12px]">{row.answer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
