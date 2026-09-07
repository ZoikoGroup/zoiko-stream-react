import React from 'react';

const imgBg = "/images/responsible-disclosure/hero-section.png";
const imgGraphic = "/images/responsible-disclosure/hero-graphic.png";

export default function HeroSection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center justify-center px-5 sm:px-6 lg:px-[112px] py-16 sm:py-20 lg:py-[110px] relative w-full overflow-hidden" data-name="Hero-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.3)] inset-0" />
      </div>
      <div className="flex flex-col gap-10 items-start lg:flex-row lg:gap-[40px] lg:items-center w-full max-w-[1247px] relative z-10" data-name="Hero-Content">
        <div className="flex flex-1 flex-col gap-[32px] items-start min-w-0 relative">
          <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="border border-[#00d4aa] border-solid flex items-center px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="Eyebrow">
              <p className="font-mono font-bold leading-[normal] not-italic text-[#00d4aa] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                Responsible Disclosure
              </p>
            </div>
            <h1 className="[word-break:break-word] font-sans font-bold leading-[38px] sm:leading-[48px] lg:leading-[62px] relative shrink-0 text-[#eef1f6] text-[30px] sm:text-[38px] lg:text-[52px] tracking-[-0.5px] sm:tracking-[-1px] lg:tracking-[-1.5px] w-full">
              Report a Potential Security Vulnerability Responsibly
            </h1>
            <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#aab3c4] text-[15px] sm:text-[16px] w-full">
              This is ZoikoStream&apos;s official public route for reporting a potential security vulnerability.
              Review the current published scope and testing rules before additional testing. This page does not
              itself grant testing permission, safe harbor, rewards, response times, remediation deadlines or
              disclosure rights.
            </p>
          </div>
          <div className="flex flex-col gap-[12px] items-stretch relative shrink-0 sm:flex-row sm:gap-[16px] sm:items-center w-full sm:w-auto" data-name="Actions">
            <a href="#report-intake" className="bg-gradient-to-b cursor-pointer flex from-[#00d4aa] items-center justify-center px-[28px] py-[14px] relative rounded-[10px] shrink-0 to-[#4c86ff] transition-opacity hover:opacity-90">
              <span className="font-sans font-bold leading-[normal] text-[#0a0d13] text-[15px] whitespace-nowrap">Report a Vulnerability</span>
            </a>
            <a href="#asset-scope" className="border border-[#aab3c4] border-solid cursor-pointer flex items-center justify-center px-[28px] py-[14px] relative rounded-[10px] shrink-0 transition-colors hover:border-[#eef1f6]">
              <span className="font-sans font-medium leading-[normal] text-[#eef1f6] text-[15px] whitespace-nowrap">Check Scope</span>
            </a>
          </div>
        </div>
        <img alt="" className="h-auto max-w-[397px] mx-auto lg:mx-0 rounded-[12px] shrink-0 w-full" src={imgGraphic} />
      </div>
    </div>
  );
}
