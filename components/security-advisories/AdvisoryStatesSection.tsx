import React from 'react';

const imgBg = "/images/security-advisories/advisory-states-bg.png";

const states = [
  {
    icon: "/images/security-advisories/shield-check.svg",
    iconBg: "bg-[rgba(0,212,170,0.1)]",
    badge: "CURRENT",
    badgeClass: "bg-[rgba(16,185,129,0.12)] text-[#10b981]",
    title: "Published / Current",
    body: "Approved public record has been formally authorized and is actively current for its defined configuration and version scope.",
  },
  {
    icon: "/images/security-advisories/refresh-cw.svg",
    iconBg: "bg-[rgba(76,134,255,0.1)]",
    badge: "UPDATED",
    badgeClass: "bg-[rgba(16,185,129,0.12)] text-[#10b981]",
    title: "Updated",
    body: "The advisory has approved material revisions with explicitly logged change histories for clarity.",
  },
  {
    icon: "/images/security-advisories/circle-x.svg",
    iconBg: "bg-[#e2e8f0]",
    badge: "SUPERSEDED",
    badgeClass: "bg-[rgba(245,158,11,0.14)] text-[#f59e0b]",
    title: "Superseded",
    body: "A newer, more comprehensive security advisory replaces all or part of this advisory\u2019s guidance.",
  },
  {
    icon: "/images/security-advisories/x-circle-slate.svg",
    iconBg: "bg-[#e2e8f0]",
    badge: "WITHDRAWN",
    badgeClass: "bg-[rgba(239,68,68,0.12)] text-[#ef4444]",
    title: "Withdrawn",
    body: "Advisory was formally removed from active reference by authority after thorough investigation.",
  },
  {
    icon: "/images/security-advisories/archive.svg",
    iconBg: "bg-[#e2e8f0]",
    badge: "ARCHIVED",
    badgeClass: "bg-[#e2e8f0] text-[#4f5e74]",
    title: "Archived",
    body: "A historical record retained solely under our standard lifecycle policy. No ongoing client action required.",
  },
  {
    icon: "/images/security-advisories/alert-triangle.svg",
    iconBg: "bg-[rgba(239,68,68,0.1)]",
    badge: "REVIEW REQ",
    badgeClass: "bg-[rgba(239,68,68,0.12)] text-[#ef4444]",
    title: "Review Required",
    body: "Active source conflict detected or currentness verification pending. Recommend failing closed immediately.",
  },
];

export default function AdvisoryStatesSection() {
  return (
    <div className="bg-white border-b border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Advisory-States-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-148px] bottom-[-30px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[36px] sm:gap-[56px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Understanding Advisory States
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#4f5e74] text-[15px] sm:text-[17px] w-full">
            Each security advisory follows a strictly governed lifecycle. Understanding the active state tells you
            whether immediate remediation action is needed on your deployment and whether the published guidance is
            currently current.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full" data-name="States-Grid">
          {states.map((state) => (
            <div key={state.title} className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[16px] items-start p-[20px] sm:p-[24px] relative rounded-[12px] shrink-0" data-name="State-Card">
              <div className="flex items-center justify-between relative shrink-0 w-full">
                <div className={`${state.iconBg} flex items-center justify-center relative rounded-[8px] shrink-0 size-[44px]`}>
                  <img alt="" className="block max-w-none size-[20px]" src={state.icon} />
                </div>
                <div className={`${state.badgeClass} flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0`}>
                  <span className="font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap">
                    {state.badge}
                  </span>
                </div>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[17px]">
                {state.title}
              </p>
              <p className="[word-break:break-word] font-sans font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px] w-full">
                {state.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
