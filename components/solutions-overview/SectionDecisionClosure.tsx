import React from 'react';

const imgSectionDecisionClosure = "/images/solutions-overview/decision-closure-section-bg.png";

export default function SectionDecisionClosure() {
  return (
    <div className="border-[#232b3a] border-b border-solid content-stretch flex flex-col gap-[40px] items-center justify-center px-6 lg:px-[112px] py-[60px] lg:py-[140px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSectionDecisionClosure} />
        <div className="absolute bg-[rgba(10,13,20,0.79)] inset-0" />
      </div>
      
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-full max-w-[800px] z-10">
        <h2 className="font-sans font-bold leading-[44px] lg:leading-[56px] relative shrink-0 text-[32px] lg:text-[44px] text-white tracking-[-0.5px] whitespace-normal m-0">
          Ready to choose the right video path?
        </h2>
        <p className="font-inter font-normal leading-[28px] not-italic relative shrink-0 text-[#aab3c4] text-[16px] lg:text-[18px] w-full m-0">
          Start with the outcome, workflow, or operating model that fits your team. If your requirements cross multiple paths, talk to an expert.
        </p>
      </div>

      <div className="content-stretch flex flex-col sm:flex-row gap-[16px] items-center justify-center relative shrink-0 w-full z-10">
        <button className="bg-gradient-to-b content-stretch flex from-[#34d4ca] items-center justify-center px-[28px] py-[14px] relative rounded-[8px] to-[#4a8cfb] border-none cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto">
          <span className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[15px] whitespace-nowrap">
            Find your path
          </span>
        </button>
        <button className="border-[#34d4ca] border-[1.5px] border-solid bg-transparent content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-[8px] cursor-pointer hover:bg-[rgba(52,212,202,0.1)] transition-colors w-full sm:w-auto">
          <span className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap">
            Talk to an expert
          </span>
        </button>
      </div>

      <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[#aab3c4] text-[13px] whitespace-normal text-center z-10 m-0">
        One platform across contribution, ingest, production, security, delivery, understanding, and preservation.
      </p>
    </div>
  );
}
