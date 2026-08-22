import React from 'react';
import { Target, Users, GitBranch } from 'lucide-react';

const imgSectionThreeWays = "/images/solutions-overview/three-ways-section-bg.png";
const imgBgBlob1 = "/images/solutions-overview/three-ways-bg-blob-1.svg";
const imgBgBlob2 = "/images/solutions-overview/three-ways-bg-blob-2.svg";

export default function SectionThreeWays() {
  return (
    <div className="border-[#e1e6eb] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative size-full overflow-hidden w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionThreeWays} />
      <div className="absolute left-[-180px] size-[420px] top-[-120px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-271px] right-[-160px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-sans font-bold leading-[48px] relative shrink-0 text-[#0f1b2d] text-[38px] tracking-[-0.8px] w-full m-0">
          Start with what you already know.
        </h2>
        <p className="font-inter font-normal leading-[28px] not-italic relative shrink-0 text-[#4f5e74] text-[18px] w-full m-0">
          Choose the entry point that feels easiest. You can switch at any time without losing your place.
        </p>
      </div>
      <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full z-10">
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px]">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[32px]">
              <div className="relative flex items-center justify-center shrink-0 size-[28.8px] text-[#4a8cfb]">
                <Target className="size-[24px]" strokeWidth={2.5} />
              </div>
            </div>
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#4a8cfb] text-[12px] tracking-[1px] whitespace-nowrap m-0">
              PATH 01
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[22px] whitespace-nowrap m-0">
              Choose by objective
            </h3>
            <p className="font-inter font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#4f5e74] text-[15px] w-[min-content] m-0">
              Best when you can describe the result you need. Focuses on stream mechanics, delivery scales, and security levels.
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px]">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[32px]">
              <div className="relative flex items-center justify-center shrink-0 size-[28.8px] text-[#34d4ca]">
                <Users className="size-[24px]" strokeWidth={2.5} />
              </div>
            </div>
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[12px] tracking-[1px] whitespace-nowrap m-0">
              PATH 02
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[22px] whitespace-nowrap m-0">
              Choose by organization
            </h3>
            <p className="font-inter font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#4f5e74] text-[15px] w-[min-content] m-0">
              Best when your operating context defines your requirements. Built around governance, ownership, and accessibility guardrails.
            </p>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px]">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[32px]">
              <div className="relative flex items-center justify-center shrink-0 size-[28.8px] text-[#8b5cf6]">
                <GitBranch className="size-[24px]" strokeWidth={2.5} />
              </div>
            </div>
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#8b5cf6] text-[12px] tracking-[1px] whitespace-nowrap m-0">
              PATH 03
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <h3 className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[22px] whitespace-nowrap m-0">
              Start with a workflow
            </h3>
            <p className="font-inter font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#4f5e74] text-[15px] w-[min-content] m-0">
              Best when you already know the workflow template (e.g. Town Hall, continuous monitoring, user video features).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
