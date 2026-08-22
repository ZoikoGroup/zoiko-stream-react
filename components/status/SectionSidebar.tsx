import React from 'react';

const QUICK_LINKS = [
  { label: "Component health", href: "#component-health" },
  { label: "Regional status", href: "#regional-status" },
  { label: "Scheduled maintenance", href: "#scheduled-maintenance" },
  { label: "Incident history", href: "#recent-history" },
  { label: "Subscribe to updates", href: "#subscribe" },
  { label: "Status API / Feed", href: "#" },
];

export default function SectionSidebar() {
  return (
    <div className="w-full lg:w-[220px] lg:shrink-0 flex flex-col gap-[16px]">
      <div className="bg-white border border-[#dde2ea] rounded-[12px] p-[18px]">
        <p className="font-sora font-bold text-[#9aa1ae] text-[12px] tracking-[0.72px] uppercase m-0 mb-[16px]">
          Quick links
        </p>
        <div className="flex flex-col gap-[12px]">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter font-semibold text-[#2b2e35] text-[13.5px] no-underline hover:text-[#5b8def] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="bg-white border border-[#dde2ea] rounded-[12px] p-[18px]">
        <p className="font-sora font-bold text-[#9aa1ae] text-[12px] tracking-[0.72px] uppercase m-0 mb-[12px]">
          About this page
        </p>
        <p className="font-inter font-normal text-[#9aa1ae] text-[11.5px] leading-[1.5] m-0">
          Public status covers production Live mode only. Test and non-production environments are not shown.
        </p>
      </div>
    </div>
  );
}
