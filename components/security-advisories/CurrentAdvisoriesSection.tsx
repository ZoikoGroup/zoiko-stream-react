import React from 'react';

const imgBg = "/images/security-advisories/advisories-bg.png";

const advisories = [
  {
    id: "ZSA-2025-001",
    title: "Authentication Token Validation Flaw",
    state: "Published",
    stateClass: "bg-[#d1fae5] text-[#10b981]",
    published: "2025-08-15",
    scope: "ZoikoStream API v3.x",
    severity: "Critical",
    severityClass: "bg-[#fee2e2] text-[#ef4444]",
    action: "Action Required",
    actionClass: "bg-[#fee2e2] text-[#ef4444]",
  },
  {
    id: "ZSA-2025-002",
    title: "Player SDK Input Boundary Sanitization",
    state: "Updated",
    stateClass: "bg-[#d1fae5] text-[#10b981]",
    published: "2025-07-22",
    scope: "Player SDK 4.2-4.5",
    severity: "Medium",
    severityClass: "bg-[#fef3c7] text-[#f59e0b]",
    action: "Guidance Ready",
    actionClass: "bg-[rgba(59,130,246,0.1)] text-[#3b82f6]",
  },
  {
    id: "ZSA-2024-008",
    title: "Session Management Encryption Enhancement",
    state: "Superseded",
    stateClass: "bg-[#fef3c7] text-[#f59e0b]",
    published: "2024-11-03",
    scope: "All Services",
    severity: "Low",
    severityClass: "bg-[#d1fae5] text-[#10b981]",
    action: "No Action",
    actionClass: "bg-[#e2e8f0] text-[#9ca3af]",
  },
  {
    id: "ZSA-2024-006",
    title: "CDN Edge Routing Configuration Optimization",
    state: "Archived",
    stateClass: "bg-[#e2e8f0] text-[#9ca3af]",
    published: "2024-09-18",
    scope: "CDN Edge Layers",
    severity: "Low",
    severityClass: "bg-[#d1fae5] text-[#10b981]",
    action: "No Action",
    actionClass: "bg-[#e2e8f0] text-[#9ca3af]",
  },
];

export default function CurrentAdvisoriesSection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative scroll-mt-[80px] w-full overflow-hidden" id="current-advisories" data-name="Current-Advisories-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.16)] inset-0" />
      </div>
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#eef1f6] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
          Current Public Security Advisories
        </h2>
        <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid hidden lg:flex flex-col items-start overflow-x-auto relative rounded-[12px] shrink-0 w-full" data-name="Advisory-Table">
          <div className="flex flex-col items-start min-w-[1000px] relative w-full">
            <div className="bg-[#111722] flex gap-[16px] items-start p-[16px] relative shrink-0 w-full" data-name="Table-Header">
              <span className="font-sans font-bold leading-[normal] shrink-0 text-[#aab3c4] text-[12px] w-[128px]">Advisory ID</span>
              <span className="flex-1 font-sans font-bold leading-[normal] min-w-px text-[#aab3c4] text-[12px]">Title</span>
              <span className="font-sans font-bold leading-[normal] shrink-0 text-[#aab3c4] text-[12px] w-[112px]">State</span>
              <span className="font-sans font-bold leading-[normal] shrink-0 text-[#aab3c4] text-[12px] w-[112px]">Published</span>
              <span className="font-sans font-bold leading-[normal] shrink-0 text-[#aab3c4] text-[12px] w-[192px]">Affected Scope</span>
              <span className="font-sans font-bold leading-[normal] shrink-0 text-[#aab3c4] text-[12px] w-[96px]">Severity</span>
              <span className="font-sans font-bold leading-[normal] shrink-0 text-[#aab3c4] text-[12px] w-[144px]">Action Status</span>
            </div>
            {advisories.map((advisory, index) => (
              <div
                key={advisory.id}
                className={`flex gap-[16px] items-center p-[20px] relative shrink-0 w-full ${index < advisories.length - 1 ? "border-b border-[#232b3a] border-solid" : ""}`}
                data-name="Table-Row"
              >
                <span className="font-mono font-bold leading-[normal] not-italic shrink-0 text-[#00d4aa] text-[12px] w-[128px]">{advisory.id}</span>
                <span className="flex-1 font-sans font-medium leading-[20px] min-w-px text-[#eef1f6] text-[14px]">{advisory.title}</span>
                <div className="flex items-start shrink-0 w-[112px]">
                  <span className={`${advisory.stateClass} font-mono font-bold leading-[normal] not-italic px-[8px] py-[2px] rounded-[4px] text-[11px]`}>
                    {advisory.state}
                  </span>
                </div>
                <span className="font-sans font-normal leading-[normal] shrink-0 text-[#aab3c4] text-[12px] w-[112px]">{advisory.published}</span>
                <span className="font-sans font-normal leading-[normal] shrink-0 text-[#eef1f6] text-[12px] w-[192px]">{advisory.scope}</span>
                <div className="flex items-start shrink-0 w-[96px]">
                  <span className={`${advisory.severityClass} font-sans font-bold leading-[normal] px-[6px] py-[2px] rounded-[4px] text-[11px]`}>
                    {advisory.severity}
                  </span>
                </div>
                <div className={`${advisory.actionClass} flex items-start justify-center px-[10px] py-[4px] rounded-[4px] shrink-0 w-[144px]`}>
                  <span className="font-sans font-bold leading-[normal] text-[11px] whitespace-nowrap">{advisory.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[12px] items-start lg:hidden relative shrink-0 w-full" data-name="Advisory-Cards">
          {advisories.map((advisory) => (
            <div
              key={advisory.id}
              className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-col gap-[14px] items-start p-[18px] relative rounded-[12px] shrink-0 w-full"
              data-name="Advisory-Card"
            >
              <div className="flex flex-wrap gap-[10px] items-center justify-between relative shrink-0 w-full">
                <span className="font-mono font-bold leading-[normal] not-italic text-[#00d4aa] text-[12px]">{advisory.id}</span>
                <span className={`${advisory.stateClass} font-mono font-bold leading-[normal] not-italic px-[8px] py-[2px] rounded-[4px] text-[11px]`}>
                  {advisory.state}
                </span>
              </div>
              <p className="[word-break:break-word] font-sans font-medium leading-[22px] relative shrink-0 text-[#eef1f6] text-[15px] w-full">
                {advisory.title}
              </p>
              <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="flex gap-[12px] items-start justify-between relative shrink-0 w-full">
                  <span className="font-sans font-bold leading-[normal] shrink-0 text-[#707a8c] text-[11px] uppercase tracking-[0.5px]">Published</span>
                  <span className="font-sans font-normal leading-[normal] text-[#aab3c4] text-[12px] text-right">{advisory.published}</span>
                </div>
                <div className="flex gap-[12px] items-start justify-between relative shrink-0 w-full">
                  <span className="font-sans font-bold leading-[normal] shrink-0 text-[#707a8c] text-[11px] uppercase tracking-[0.5px]">Affected Scope</span>
                  <span className="font-sans font-normal leading-[normal] text-[#eef1f6] text-[12px] text-right">{advisory.scope}</span>
                </div>
                <div className="flex gap-[12px] items-center justify-between relative shrink-0 w-full">
                  <span className="font-sans font-bold leading-[normal] shrink-0 text-[#707a8c] text-[11px] uppercase tracking-[0.5px]">Severity</span>
                  <span className={`${advisory.severityClass} font-sans font-bold leading-[normal] px-[6px] py-[2px] rounded-[4px] text-[11px]`}>
                    {advisory.severity}
                  </span>
                </div>
              </div>
              <div className={`${advisory.actionClass} flex items-center justify-center px-[10px] py-[8px] rounded-[4px] shrink-0 w-full`}>
                <span className="font-sans font-bold leading-[normal] text-[11px] whitespace-nowrap">{advisory.action}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="[word-break:break-word] font-sans font-normal leading-[20px] relative shrink-0 text-[#707a8c] text-[12px] w-full">
          * Absence of a public security advisory on this portal does not mean no vulnerabilities currently exist. We
          actively verify our deployment parameters daily.
        </p>
      </div>
    </div>
  );
}
