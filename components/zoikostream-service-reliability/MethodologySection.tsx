import React from 'react';
const imgMethodologySection = "/images/zoikostream-service-reliability/methodology-section-methodology-section.png";
const imgBgBlob2 = "/images/zoikostream-service-reliability/controlled-access-section-bg-blob2.svg";
const imgBgBlob1 = "/images/zoikostream-service-reliability/controlled-access-section-bg-blob1.svg";

export default function MethodologySection() {
  return (
    <div className="flex flex-col gap-8 lg:gap-[48px] flex-wrap items-center px-6 lg:px-[112px] py-12 lg:py-[100px] relative w-full overflow-hidden" data-node-id="3842:3283" data-name="Methodology-Section">
      <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none size-full" src="/images/zoikostream-data-protection/faq-bg.png" />
      <div className="absolute bottom-[-80px] right-[-176px] size-[520px]" data-node-id="3842:3284" data-name="bg-blob-2">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="absolute left-[-140px] size-[420px] top-[-88px]" data-node-id="3842:3285" data-name="bg-blob-1">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="flex flex-col gap-[56px] items-start px-6 xl:px-0 w-full max-w-[1247px] relative z-10">
      <div className="[word-break:break-word] flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="3842:3286" data-name="Section-Header">
        <p className="font-sans font-bold font-bold leading-[48px] relative shrink-0 text-[#0a0d13] text-[38px] tracking-[-0.38px] w-full" data-node-id="3842:3287">
          Availability methodology
        </p>
        <p className="font-sans font-normal font-normal leading-[28px] relative shrink-0 text-[#4f5e74] text-[18px] w-full" data-node-id="3842:3288">
          No metric renders without an approved methodology defining scope, calculation, exclusions, and data-quality rules.
        </p>
      </div>
      <div className="flex gap-8 lg:gap-[48px] flex-wrap items-center relative shrink-0 w-full" data-node-id="3842:3289" data-name="Methodology-Row">
        <div className="[word-break:break-word] bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col gap-[20px] items-start leading-[normal] p-[28px] relative rounded-[16px] shrink-0 w-full max-w-[640px] whitespace-nowrap" data-node-id="3842:3290" data-name="MethodExplanation">
          <p className="font-sans font-bold font-bold relative shrink-0 text-[#0a0d13] text-[18px]" data-node-id="3842:3291">
            Approved Method Parameters
          </p>
          <div className="flex flex-col gap-[12px] items-start relative shrink-0 text-[13px] w-full" data-node-id="3842:3292" data-name="MethodItems">
            <div className="bg-[rgba(10,15,26,0.25)] flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="3842:3293" data-name="method-item">
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#4f5e74]" data-node-id="3842:3294">
                Metric label
              </p>
              <p className="font-sans font-normal font-normal relative shrink-0 text-[#0a0d13]" data-node-id="3842:3295">
                Core Ingest Availability Ratio (CIAR)
              </p>
            </div>
            <div className="bg-[rgba(10,15,26,0.25)] flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="3842:3296" data-name="method-item">
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#4f5e74]" data-node-id="3842:3297">
                Measured subject
              </p>
              <p className="font-sans font-normal font-normal relative shrink-0 text-[#0a0d13]" data-node-id="3842:3298">
                Primary SRT Endpoints (SF, London sat hubs)
              </p>
            </div>
            <div className="bg-[rgba(10,15,26,0.25)] flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="3842:3299" data-name="method-item">
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#4f5e74]" data-node-id="3842:3300">
                Observation window
              </p>
              <p className="font-sans font-normal font-normal relative shrink-0 text-[#0a0d13]" data-node-id="3842:3301">
                Q1-Q2 (2026) — 180 continuous days
              </p>
            </div>
            <div className="bg-[rgba(10,15,26,0.25)] flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="3842:3302" data-name="method-item">
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#4f5e74]" data-node-id="3842:3303">
                Numerator / Denominator
              </p>
              <p className="font-sans font-normal font-normal relative shrink-0 text-[#0a0d13]" data-node-id="3842:3304">
                Successful handshakes / Total ping signals
              </p>
            </div>
            <div className="bg-[rgba(10,15,26,0.25)] flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="3842:3305" data-name="method-item">
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#4f5e74]" data-node-id="3842:3306">
                Excluded intervals
              </p>
              <p className="font-sans font-normal font-normal relative shrink-0 text-[#0a0d13]" data-node-id="3842:3307">
                Scheduled maintenance (2h max per quarter)
              </p>
            </div>
            <div className="bg-[rgba(10,15,26,0.25)] flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="3842:3308" data-name="method-item">
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#4f5e74]" data-node-id="3842:3309">
                Rounding
              </p>
              <p className="font-sans font-normal font-normal relative shrink-0 text-[#0a0d13]" data-node-id="3842:3310">
                Truncated at 4 decimal nodes
              </p>
            </div>
            <div className="bg-[rgba(10,15,26,0.25)] flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="3842:3311" data-name="method-item">
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#4f5e74]" data-node-id="3842:3312">
                Missing-data rule
              </p>
              <p className="font-sans font-normal font-normal relative shrink-0 text-[#0a0d13]" data-node-id="3842:3313">
                Fail closed (unregistered ping = failure)
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-node-id="3842:3314" data-name="MethodVersionCol">
          <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[24px] w-full" data-node-id="3842:3315">
            No infinite logic variations. Just pure metrics <br className="hidden lg:block" /> integrity.
          </p>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[24px] relative shrink-0 text-[#4f5e74] text-[15px] w-full" data-node-id="3842:3316">
            By isolating and standardizing methodology configurations, we ensure <br className="hidden lg:block" /> metrics comparisons are scientifically valid. Different components <br className="hidden lg:block" /> leverage distinct version paths to guarantee calculations map to true <br className="hidden lg:block" /> on-site hardware performance rather than generalized statistics.
          </p>
          <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex gap-[16px] items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="3842:3317" data-name="VersionCard">
            <div className="bg-[rgba(0,212,170,0.08)] flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-node-id="3842:3318" data-name="AvatarPlaceholder">
              <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#00d4aa] text-[16px] whitespace-nowrap" data-node-id="3842:3319">
                V
              </p>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative" data-node-id="3842:3320" data-name="Card-Text">
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#0a0d13] text-[15px] whitespace-nowrap" data-node-id="3842:3321">
                Methodology Version 1.4.2
              </p>
              <p className="font-sans font-normal font-normal min-w-full relative shrink-0 text-[#4f5e74] text-[13px] w-[min-content]" data-node-id="3842:3322">
                Audited on January 10, 2026. Fully compatible with Q1 and Q2 metric standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f7fc] border border-[#e2e8f0] border-solid flex items-center justify-between p-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="3842:3323" data-name="NoteBannerRow">
        <div className="[word-break:break-word] flex-[1_0_0] font-sans font-normal font-normal leading-[0] min-w-px relative text-[#4f5e74] text-[14px] whitespace-pre-wrap" data-node-id="3842:3324">
          <p className="leading-[normal] mb-0">{`*Two percentages cannot be compared merely because they share a label. Compatible methodology, scope, aggregation, `}</p>
          <p className="leading-[normal]">and exclusion rules are required.</p>
        </div>
      </div>
      </div>
    </div>
  );
}