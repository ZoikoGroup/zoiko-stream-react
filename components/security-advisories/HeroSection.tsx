import React from 'react';

const imgHeroBg = "/images/security-advisories/hero-bg.png";

export default function HeroSection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center justify-center py-16 sm:py-20 lg:py-[120px] px-5 sm:px-6 lg:px-[112px] relative w-full overflow-hidden" data-name="Hero-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroBg} />
        <div className="absolute bg-gradient-to-b from-[rgba(10,13,19,0.3)] inset-0 to-[rgba(10,13,19,0.4)] via-[60%] via-[rgba(10,13,19,0.15)]" />
      </div>
      <div className="flex flex-col gap-[24px] sm:gap-[32px] items-start w-full max-w-[1247px] relative z-10" data-name="Hero-Content">
        <div className="border border-[#00d4aa] border-solid flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="Eyebrow">
          <p className="font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#00d4aa] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
            Security Advisories
          </p>
        </div>
        <h1 className="[word-break:break-word] font-sans font-bold leading-[38px] sm:leading-[48px] lg:leading-[58px] max-w-[900px] relative shrink-0 text-[#eef1f6] text-[30px] sm:text-[38px] lg:text-[48px] tracking-[-0.5px] sm:tracking-[-1px] lg:tracking-[-1.5px]">
          Security Advisories with Clear Scope and Current Guidance
        </h1>
        <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] max-w-[760px] relative shrink-0 text-[#aab3c4] text-[15px] sm:text-[16px]">
          Review approved ZoikoStream security advisories, affected scope, publication and update history, and
          source-backed remediation guidance. If you found a potential vulnerability that is not already public,
          please use our Responsible Disclosure model. For current live system availability updates, visit our
          System Status registry.
        </p>
        <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[16px] items-stretch sm:items-center relative shrink-0 w-full sm:w-auto" data-name="Actions">
          <a href="#current-advisories" className="bg-gradient-to-b cursor-pointer flex from-[#00d4aa] items-center justify-center px-[26px] py-[14px] relative rounded-[10px] shrink-0 to-[#4c86ff] transition-opacity hover:opacity-90">
            <span className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[15px] whitespace-nowrap">
              Browse Security Advisories
            </span>
          </a>
          <a href="#report-vulnerability" className="border border-[#aab3c4] border-solid cursor-pointer flex items-center justify-center px-[28px] py-[14px] relative rounded-[10px] shrink-0 transition-colors hover:border-[#eef1f6]">
            <span className="font-sans font-bold leading-[normal] relative shrink-0 text-[#eef1f6] text-[15px] whitespace-nowrap">
              Report a Potential Vulnerability
            </span>
          </a>
        </div>
        <div className="bg-[#232b3a] h-px relative shrink-0 w-full" />
        <p className="[word-break:break-word] font-sans font-normal leading-[20px] relative shrink-0 text-[#707a8c] text-[12px] w-full">
          * A published advisory applies only to its explicitly stated product, version and architecture scope.
          Absence of a public security advisory does not establish that no vulnerability exists.
        </p>
      </div>
    </div>
  );
}
