import React from 'react';
import Link from 'next/link';

const imgBg = "/images/webhooks/hero-background.webp";

export default function HeroSection() {
  return (
    <section className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-16 sm:py-24 lg:pt-[176px] lg:pb-[96px] relative w-full overflow-hidden" data-name="Hero-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.45] contrast-[1.05]" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.15)] inset-0" />
      </div>
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start lg:items-center w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[24px] items-start flex-1 w-full">
          <div className="border border-[#00d4aa] border-solid flex items-center px-[12px] py-[6px] rounded-[100px]">
            <span className="font-sans font-bold text-[#00d4aa] text-[12px] tracking-[0.6px] uppercase">Webhooks</span>
          </div>

          <h1 className="[word-break:break-word] font-sans font-bold text-[#f1f5f9] text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] lg:leading-[58px] w-full">
            React to video workflow changes without guessing delivery behavior.
          </h1>

          <p className="font-sans font-normal text-[#94a3b8] text-[15px] sm:text-[16px] leading-[24px] w-full">
            ZoikoStream Webhooks lets developers subscribe to current source-approved events and process deliveries
            using explicit event versions, endpoint requirements, verification, retry, duplicate/order,
            replay/recovery, and lifecycle rules.
          </p>

          <div className="flex flex-wrap gap-[16px] items-center">
            <Link
              href="#event-catalog"
              className="bg-gradient-to-b from-[#00d4aa] to-[#4c86ff] flex items-start px-[24px] py-[14px] rounded-[10px] transition-opacity hover:opacity-90"
            >
              <span className="font-sans font-bold text-[#0a0d13] text-[16px]">Explore events</span>
            </Link>
            <Link
              href="#verification"
              className="border-[1.5px] border-[#94a3b8] border-solid flex items-start px-[28px] py-[14px] rounded-[10px] transition-colors hover:border-[#f1f5f9]"
            >
              <span className="font-sans font-medium text-[#f1f5f9] text-[16px]">Review endpoint verification</span>
            </Link>
          </div>

          <div className="border-t border-[#1e2530] border-solid flex items-start pt-[16px] px-[16px] w-full">
            <p className="font-sans font-normal text-[#64748b] text-[12px]">
              Exact events and delivery/security semantics remain controlled by the current Webhook/Event contract.
            </p>
          </div>
        </div>

        <div className="bg-[rgba(24,27,33,0.8)] border-[1.5px] border-[#1e2530] border-solid backdrop-blur-sm flex flex-col gap-[20px] items-start p-[24px] rounded-[16px] w-full lg:w-[540px] overflow-hidden" data-name="Event-Monitor-Card">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-[8px] items-center">
              <div className="size-[8px] bg-[#00d4aa] rounded-full" />
              <span className="font-mono font-bold text-[#f1f5f9] text-[12px]">EVENT MONITOR SEQUENCE</span>
            </div>
            <span className="font-mono font-normal text-[#64748b] text-[10px]">STATUS: LISTENING</span>
          </div>

          <div className="bg-[rgba(0,212,170,0.05)] border border-[#00d4aa] border-solid flex flex-col gap-[12px] items-start p-[16px] rounded-[8px] w-full">
            <div className="flex justify-between items-start w-full">
              <span className="font-sans font-bold text-[#f1f5f9] text-[14px]">stream.status.changed</span>
              <span className="font-sans font-normal text-[#00d4aa] text-[12px]">DELIVERED</span>
            </div>
            <div className="bg-[#1e2530] flex h-[4px] items-start rounded-[2px] w-full">
              <div className="bg-[#00d4aa] h-full w-[92%] rounded-[2px]" />
            </div>
            <div className="flex flex-wrap gap-2 justify-between items-start w-full">
              <span className="font-mono font-normal text-[#94a3b8] text-[12px]">Version: 2.1</span>
              <span className="font-mono font-normal text-[#00d4aa] text-[12px] break-all min-w-0">Signature Verified: HMAC-SHA256</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-between items-start w-full">
            <span className="font-sans font-normal text-[#94a3b8] text-[12px]">Verification: Passed (24ms)</span>
            <span className="font-sans font-normal text-[#00d4aa] text-[12px]">Payload Integrity: 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
