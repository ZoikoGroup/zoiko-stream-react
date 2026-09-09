import React from 'react';

const imgBg = "/images/responsible-disclosure/lifecycle-section.png";

const stats = [
  {
    icon: "/images/responsible-disclosure/check-circle-teal.svg",
    tag: "ACTIVE",
    tagClass: "text-[#00d4aa]",
    label: "Policy State",
    value: "Current",
  },
  {
    icon: "/images/responsible-disclosure/git-branch.svg",
    tag: "V2.4",
    tagClass: "text-[#4f5e74]",
    label: "Version",
    value: "2.4.1-PROD",
  },
  {
    icon: "/images/responsible-disclosure/calendar.svg",
    tag: "HISTORIC",
    tagClass: "text-[#4f5e74]",
    label: "Effective Date",
    value: "July 30, 2026",
  },
  {
    icon: "/images/responsible-disclosure/users-teal.svg",
    tag: "GOVERNED",
    tagClass: "text-[#00d4aa]",
    label: "Owner",
    value: "Product Security",
  },
];

export default function PolicyStateSection() {
  return (
    <div className="bg-white border-b border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Policy-State-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-146px] bottom-[-40px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[36px] sm:gap-[56px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Current Policy State and Version
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#4f5e74] text-[15px] sm:text-[17px] w-full">
            The responsible disclosure policy follows a governed lifecycle with versioning and review dates.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative shrink-0 w-full" data-name="Stat-Grid">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[16px] items-start p-[20px] sm:p-[24px] relative rounded-[12px] shrink-0" data-name="Stat-Card">
              <div className="flex items-center justify-between relative shrink-0 w-full">
                <img alt="" className="block max-w-none size-[24px]" src={stat.icon} />
                <span className={`${stat.tagClass} font-mono font-bold leading-[normal] not-italic text-[10px]`}>{stat.tag}</span>
              </div>
              <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <span className="font-sans font-medium leading-[normal] text-[#4f5e74] text-[12px]">{stat.label}</span>
                <span className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#0a0d13] text-[17px]">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid flex flex-col gap-[16px] items-start justify-between lg:flex-row lg:gap-[24px] lg:items-center p-[20px] sm:p-[24px] relative rounded-[12px] shrink-0 w-full" data-name="Channel-Status">
          <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0 relative">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#0a0d13] text-[15px]">
              Reporting Channel Status: Available
            </p>
            <p className="[word-break:break-word] font-sans font-normal leading-[20px] text-[#4f5e74] text-[12px]">
              Our security ingestion pipeline is monitored 24/7. Current response SLA is active.
            </p>
          </div>
          <a href="#report-intake" className="bg-gradient-to-b cursor-pointer flex from-[#00d4aa] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 to-[#4c86ff] transition-opacity hover:opacity-90 w-full lg:w-auto">
            <span className="font-sans font-bold leading-[normal] text-[#0a0d13] text-[12px] whitespace-nowrap">Submit Report</span>
          </a>
        </div>
      </div>
    </div>
  );
}
