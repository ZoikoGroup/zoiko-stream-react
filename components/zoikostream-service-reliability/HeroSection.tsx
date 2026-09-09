import React from 'react';
const imgHeroSection = "/images/zoikostream-service-reliability/hero-section-hero-section.png";
const imgEllipse = "/images/zoikostream-service-reliability/current-evidence-section-status-dot.svg";
const imgEllipse1 = "/images/zoikostream-service-reliability/hero-section-ellipse1.svg";

export default function HeroSection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center justify-center py-20 lg:py-[150px] px-6 lg:px-[112px] relative w-full" data-node-id="3842:3110" data-name="Hero-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroSection} />
        <div className="absolute bg-gradient-to-b from-[rgba(10,15,26,0.89)] inset-0 to-[rgba(10,15,26,0.9)] via-[70%] via-[rgba(10,15,26,0.81)]" />
      </div>
      <div className="flex gap-8 lg:gap-[48px] flex-col lg:flex-row items-center w-full max-w-[1247px] relative z-10" data-node-id="3842:3112" data-name="Hero-Content">
        <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-node-id="3842:3113" data-name="HeroLeft">
          <div className="border border-[#00d4aa] border-solid flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="3842:3114" data-name="Eyebrow">
            <div className="relative shrink-0 size-[6px]" data-node-id="3842:3115" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#00d4aa] text-[11px] tracking-[1px] uppercase whitespace-nowrap" data-node-id="3842:3116">
              Service Reliability
            </p>
          </div>
          <p className="[word-break:break-word] font-sans font-bold font-bold leading-[58px] min-w-full relative shrink-0 text-[#eef1f6] text-[48px] tracking-[-1.5px] w-[min-content]" data-node-id="3842:3117">
            Evaluate reliability with the <br className="hidden lg:block" /> evidence and context that <br className="hidden lg:block" /> matter.
          </p>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[26px] min-w-full relative shrink-0 text-[#aab3c4] text-[16px] w-[min-content]" data-node-id="3842:3118">
            Review approved ZoikoStream reliability, resilience, continuity and recovery evidence <br className="hidden lg:block" /> with exact scope, currentness, period, methodology and limitations. For current <br className="hidden lg:block" /> incidents or maintenance, use System status.
          </p>
          <div className="flex gap-[16px] items-center relative shrink-0" data-node-id="3842:3119" data-name="Actions">
            <div className="bg-gradient-to-b flex from-[#00d4aa] items-start px-[26px] py-[14px] relative rounded-[10px] shrink-0 to-[#4c86ff]" data-node-id="3842:3120" data-name="PrimaryBtn">
              <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[15px] whitespace-nowrap" data-node-id="3842:3121">
                Explore reliability evidence
              </p>
            </div>
            <div className="border border-[#aab3c4] border-solid flex items-start px-[28px] py-[14px] relative rounded-[10px] shrink-0" data-node-id="3842:3122" data-name="SecondaryBtn">
              <p className="[word-break:break-word] font-sans font-medium font-medium leading-[normal] relative shrink-0 text-[#eef1f6] text-[15px] whitespace-nowrap" data-node-id="3842:3123">
                View System status
              </p>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-[8px] bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-col gap-[20px] items-start overflow-clip p-[24px] relative rounded-[16px] shrink-0 w-full max-w-[540px]" data-node-id="3842:3124" data-name="HeroRightMockup">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3125" data-name="MockHeader">
            <div className="flex gap-[8px] items-center relative shrink-0" data-node-id="3842:3126" data-name="Frame">
              <div className="relative shrink-0 size-[8px]" data-node-id="3842:3127" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#eef1f6] text-[11px] whitespace-nowrap" data-node-id="3842:3128">
                RELIABILITY DATA ASSURANCE
              </p>
            </div>
            <p className="[word-break:break-word] font-mono font-normal leading-[normal] not-italic relative shrink-0 text-[#707a8c] text-[10px] whitespace-nowrap" data-node-id="3842:3129">
              STATUS: AUDITED
            </p>
          </div>
          <div className="bg-[rgba(0,212,170,0.06)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="3842:3130" data-name="MockTrack">
            <div className="[word-break:break-word] flex items-start justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-node-id="3842:3131" data-name="Frame">
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#eef1f6] text-[14px]" data-node-id="3842:3132">
                01 / CORE INGEST UPTIME
              </p>
              <p className="font-sans font-normal font-normal relative shrink-0 text-[#00d4aa] text-[13px]" data-node-id="3842:3133">
                99.98% OBSERVATION
              </p>
            </div>
            <div className="bg-[#232b3a] flex h-[4px] items-start relative rounded-[2px] shrink-0 w-full" data-node-id="3842:3134" data-name="Frame">
              <div className="bg-[#00d4aa] h-full relative shrink-0 w-full max-w-[360px]" data-node-id="3842:3135" data-name="Rectangle" />
            </div>
            <p className="[word-break:break-word] font-sans font-normal font-normal leading-[normal] relative shrink-0 text-[#aab3c4] text-[12px] whitespace-nowrap" data-node-id="3842:3136">
              Observed availability scoped strictly to primary multi-track SRT endpoints.
            </p>
          </div>
          <div className="[word-break:break-word] flex items-start justify-between leading-[normal] pt-[4px] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="3842:3137" data-name="LiveStats">
            <p className="font-sans font-bold font-bold relative shrink-0 text-[#eef1f6]" data-node-id="3842:3138">
              Interval: Q1-Q2 (2026)
            </p>
            <p className="font-sans font-normal font-normal relative shrink-0 text-[#00d4aa]" data-node-id="3842:3139">
              Methodology Version: 1.4.2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}