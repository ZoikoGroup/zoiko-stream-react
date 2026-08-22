import React from 'react';

const imgSectionHero = "/images/solutions-overview/hero-bg.png";
const imgEllipse = "/images/solutions-overview/hero-ellipse-teal.svg";
const imgEllipse1 = "/images/solutions-overview/hero-ellipse-blue.svg";
const imgGitMerge = "/images/solutions-overview/hero-git-merge.svg";

export default function SolutionsHeroSection() {
  return (
    <div className="border-[#232b3a] border-b border-solid flex flex-col items-start px-6 lg:px-[112px] py-[64px] lg:py-[120px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSectionHero} />
        <div className="absolute bg-[rgba(15,27,45,0.65)] inset-0" />
      </div>
      <div className="flex flex-col lg:flex-row gap-[48px] items-center relative shrink-0 w-full">
        <div className="flex flex-1 flex-col gap-[32px] items-start max-w-[680px] min-w-px relative">
          <div className="border border-[#34d4ca] border-solid flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[11px] tracking-[1px] uppercase whitespace-nowrap m-0">
              OUTCOME-LED SOLUTIONS
            </p>
          </div>
          <h1 className="[word-break:break-word] font-sans font-bold leading-[1.15] lg:leading-[60px] relative shrink-0 text-[36px] lg:text-[52px] text-white tracking-[-1.5px] w-full m-0">
            Video infrastructure and operations built around your outcome.
          </h1>
          <p className="[word-break:break-word] font-inter font-normal leading-[28px] not-italic relative shrink-0 text-[#c2c2c2] text-[18px] w-full m-0">
            Choose by the result you need, the organization you operate in, or a workflow you already recognize. ZoikoStream routes you to the relevant platform, trust, and operating path without requiring you to learn the product taxonomy first.
          </p>
          <div className="flex gap-[16px] items-center relative shrink-0">
            <div className="bg-gradient-to-b cursor-pointer flex from-[#34d4ca] items-center justify-center px-[28px] py-[14px] relative rounded-[8px] shrink-0 to-[#4a8cfb]">
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[15px] whitespace-nowrap m-0">
                Find your solution
              </p>
            </div>
            <div className="border-[#aab3c4] cursor-pointer border-[1.5px] border-solid flex items-center justify-center px-[28px] py-[14px] relative rounded-[8px] shrink-0 hover:bg-[rgba(170,179,196,0.1)] transition-colors">
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap m-0">
                Talk to an expert
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(16,21,30,0.8)] border-[#232b3a] border-[1.5px] border-solid flex flex-col gap-[24px] h-[389px] items-center justify-center p-[40px] relative rounded-[16px] shrink-0 w-full lg:w-[480px]">
          <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap m-0">
            CONVERGING DECISION PATHS
          </p>
          <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="bg-[#1b2330] border border-[#232b3a] border-solid flex items-center justify-between p-[16px] relative rounded-[8px] shrink-0 w-full">
              <div className="flex gap-[12px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[8px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                </div>
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap m-0">
                  By Objective
                </p>
              </div>
              <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[#34d4ca] text-[11px] whitespace-nowrap m-0">
                TARGET OUTCOME
              </p>
            </div>
            <div className="bg-[#1b2330] border border-[#232b3a] border-solid flex items-center justify-between p-[16px] relative rounded-[8px] shrink-0 w-full">
              <div className="flex gap-[12px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[8px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
                </div>
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap m-0">
                  By Organization
                </p>
              </div>
              <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[#4a8cfb] text-[11px] whitespace-nowrap m-0">
                OPERATING CONTEXT
              </p>
            </div>
            <div className="bg-[#1b2330] border border-[#232b3a] border-solid flex items-center justify-between p-[16px] relative rounded-[8px] shrink-0 w-full">
              <div className="flex gap-[12px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[8px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                </div>
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap m-0">
                  Featured Workflows
                </p>
              </div>
              <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[#34d4ca] text-[11px] whitespace-nowrap m-0">
                KNOWN SCHEMAS
              </p>
            </div>
          </div>
          <div className="flex gap-[8px] items-center relative shrink-0">
            <div className="flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]">
              <div className="relative shrink-0 size-[14.4px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGitMerge} />
              </div>
            </div>
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[13px] whitespace-nowrap m-0">
              Unified ZoikoStream Platform Engine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
