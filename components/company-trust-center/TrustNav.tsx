import React from 'react';

const NAV_ITEMS = [
  { label: "Trust Center", active: true },
  { label: "Security & Compliance", active: false },
  { label: "Privacy & Subprocessors", active: false, sidebarBreakAfter: "Privacy &" },
  { label: "Reliability & Resilience", active: false },
  { label: "Vulnerability Disclosure", active: false },
  { label: "Security Advisories", active: false },
  { label: "Evidence Requests", active: false },
];

export function TrustBreadcrumb() {
  return (
    <div className="lg:hidden border-b border-[#dde2ea] border-solid w-full px-6 py-[16px]">
      <div className="flex items-center gap-[8px]">
        <p className="font-inter font-semibold text-[#6b7280] text-[13.5px] m-0 cursor-pointer">Home</p>
        <p className="font-inter font-normal text-[#9aa1ae] text-[13.5px] m-0">/</p>
        <p className="font-inter font-semibold text-[#32353c] text-[13.5px] m-0">Trust Center</p>
      </div>
    </div>
  );
}

export function TrustSidebar() {
  return (
    <nav className="hidden lg:flex flex-col gap-[8px] border-r border-[#dde2ea] border-solid w-[300px] shrink-0 pl-[48px] pr-[32px] py-[37px] sticky top-[84px] self-start h-fit">
      <p className="font-inter font-bold text-[#9aa1ae] text-[11px] tracking-[0.88px] uppercase m-0 mb-[16px] whitespace-nowrap">Trust suite</p>
      {NAV_ITEMS.map((item) => (
        <div
          key={item.label}
          className={`rounded-[8px] px-[12px] py-[12px] cursor-pointer ${item.active ? "bg-[#eef3ff]" : "hover:bg-[#f7f9fb]"}`}
        >
          <p className={`font-inter font-semibold text-[14px] leading-[1.6] m-0 ${item.active ? "text-[#5b8def]" : "text-[#6b7280]"}`}>
            {item.sidebarBreakAfter ? (
              <>
                {item.sidebarBreakAfter}
                <br />
                {item.label.slice(item.sidebarBreakAfter.length + 1)}
              </>
            ) : (
              item.label
            )}
          </p>
        </div>
      ))}
    </nav>
  );
}

export function TrustMobileTabs() {
  return (
    <div className="lg:hidden border-b border-[#dde2ea] border-solid w-full overflow-x-auto">
      <div className="flex items-center gap-[8px] px-6 py-[16px] min-w-max">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.label}
            className={`rounded-[8px] px-[16px] py-[12px] shrink-0 cursor-pointer ${item.active ? "bg-[#eef3ff]" : ""}`}
          >
            <p className={`font-inter font-semibold text-[14px] whitespace-nowrap m-0 ${item.active ? "text-[#5b8def]" : "text-[#6b7280]"}`}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
