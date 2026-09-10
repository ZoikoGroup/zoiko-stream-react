import React from 'react';
import Link from 'next/link';

const imgBg = "/images/webhooks/testing-background.webp";

const steps = [
  { num: '01', title: 'Review Catalog', description: 'Browse current event types, versions, and trigger semantics.' },
  { num: '02', title: 'Setup Endpoint', description: 'Configure approved test environment subscription if access model supports.' },
  { num: '03', title: 'Verify Signature', description: 'Implement verification according to current security profile.' },
  { num: '04', title: 'Test Delivery', description: 'Use current test-event capability only when it exists. No theatrical button.' },
  { num: '05', title: 'Simulate Edge Cases', description: 'Test duplicate, delay, order, and retry with source-backed tooling.' },
  { num: '06', title: 'Validate Recovery', description: 'Confirm replay, reconciliation, and Changelog review before production.' },
];

export default function TestingWorkflowSection() {
  return (
    <section className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Testing-Workflow-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.45] contrast-[1.05]" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.22)] inset-0" />
      </div>

      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#f1f5f9] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Testing and development workflow
          </h2>
          <p className="font-sans font-normal text-[#94a3b8] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            A safe path from event discovery to verified endpoint — using only current capabilities and tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[rgba(24,27,33,0.7)] border border-[#1e2530] border-solid flex gap-[16px] items-center px-[20px] py-[18px] rounded-[16px] sm:rounded-[100px]"
            >
              <div className="bg-gradient-to-b from-[#00d4aa] to-[#4c86ff] flex items-center justify-center rounded-full size-[38px] shrink-0">
                <span className="font-sans font-bold text-[#0a0d13] text-[13px]">{step.num}</span>
              </div>
              <div className="flex flex-col gap-[2px] items-start">
                <p className="font-sans font-bold text-[#f1f5f9] text-[15px]">{step.title}</p>
                <p className="font-sans font-normal text-[#94a3b8] text-[12px] leading-[18px]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/start-building"
          className="bg-gradient-to-b from-[#00d4aa] to-[#4c86ff] flex items-start px-[24px] py-[14px] rounded-[10px] transition-opacity hover:opacity-90"
        >
          <span className="font-sans font-bold text-[#0a0d13] text-[16px]">Start testing workflow</span>
        </Link>
      </div>
    </section>
  );
}
