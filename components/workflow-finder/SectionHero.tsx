import React from 'react';

const imgSectionBg = "/images/workflow-finder/hero-section-bg.png";
const imgShieldCheck = "/images/workflow-finder/hero-icon-shield-check.svg";

export default function SectionHero() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.85)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-[48px] items-center w-full">
        <div className="flex flex-col gap-[32px] items-start flex-1 min-w-0 w-full">
          <div className="border-[1.5px] border-[#4ecdc4] border-solid rounded-full px-[12px] py-[6px]">
            <p className="font-sans font-bold text-[#4ecdc4] text-[11px] tracking-[1px] uppercase m-0 whitespace-nowrap">
              Workflow Finder
            </p>
          </div>
          <h1 className="font-sans font-bold text-white text-[32px] lg:text-[48px] leading-[1.2] lg:leading-[56px] tracking-[-1.5px] m-0 w-full">
            Answer three questions. Find the right place to start.
          </h1>
          <p className="font-inter font-normal text-[#aab3c4] text-[16px] lg:text-[18px] leading-[1.5] lg:leading-[28px] m-0 w-full">
            Tell us the outcome, audience/access context, and operating model you have in mind. ZoikoStream will show an explainable starting path, relevant workflow, and alternatives — without hidden scoring or a required sales form.
          </p>
          <div className="flex flex-col sm:flex-row gap-[16px] items-center w-full sm:w-auto">
            <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto">
              <span className="font-sans font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">Start the finder</span>
            </button>
            <button className="border-[1.5px] border-[#aab3c4] border-solid px-[28px] py-[14px] rounded-[8px] bg-transparent cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors w-full sm:w-auto">
              <span className="font-sans font-bold text-white text-[15px] whitespace-nowrap">See all workflows</span>
            </button>
          </div>
          <div className="flex gap-[8px] items-start w-full">
            <img alt="" className="size-[16px] shrink-0 mt-[1px]" src={imgShieldCheck} />
            <p className="font-inter font-normal text-[#aab3c4] text-[13px] m-0 flex-1 min-w-0">
              Three bounded questions. Transparent rules. Change or clear answers at any time.
            </p>
          </div>
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[24px] lg:p-[32px] flex flex-col gap-[24px] items-start w-full lg:w-[480px] shrink-0">
          <div className="flex flex-col gap-[12px] items-start w-full">
            <p className="font-sans font-bold text-[#4ecdc4] text-[12px] tracking-[1px] m-0 whitespace-nowrap">QUESTION 1 OF 3 (ACTIVE)</p>
            <p className="font-sans font-bold text-white text-[16px] m-0 w-full">What are you trying to do?</p>
            <div className="flex flex-wrap gap-[8px] items-start w-full">
              <div className="bg-[#4ecdc4] rounded-[20px] px-[12px] py-[6px]">
                <p className="font-inter font-semibold text-[#0a0d14] text-[12px] m-0 whitespace-nowrap">Embed Video Feature</p>
              </div>
              <div className="bg-[#1b2330] rounded-[20px] px-[12px] py-[6px]">
                <p className="font-inter font-normal text-white text-[12px] m-0 whitespace-nowrap">Broadcast live scale</p>
              </div>
            </div>
          </div>

          <div className="bg-[#232b3a] h-px w-full" />

          <div className="flex flex-col gap-[12px] items-start w-full">
            <p className="font-sans font-bold text-[#4ecdc4] text-[12px] tracking-[1px] m-0 whitespace-nowrap">BEST MATCHING PATH</p>
            <div className="bg-[#1b2330] rounded-[8px] p-[16px] flex flex-col gap-[8px] items-start w-full">
              <p className="font-sans font-bold text-white text-[18px] m-0 w-full">Interactive Feature API</p>
              <p className="font-inter font-normal text-[#aab3c4] text-[13px] leading-[18px] m-0 w-full">
                Matches your preference for building customized video experiences within native applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
