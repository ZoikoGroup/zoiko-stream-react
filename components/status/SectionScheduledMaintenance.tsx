import React from 'react';

const MAINTENANCE = [
  {
    date: "Aug 27, 2026 · 02:00–04:00 UTC",
    title: "Ingest pipeline routing upgrade",
    affected: "Affected: Ingest & Encoding · Global — Expected impact: possible degradation",
  },
  {
    date: "Sep 3, 2026 · 01:00–02:00 UTC",
    title: "Dashboard authentication maintenance window",
    affected: "Affected: Dashboard & Authentication · Global — No action required",
  },
];

export default function SectionScheduledMaintenance() {
  return (
    <div id="scheduled-maintenance" className="bg-white border border-[#dde2ea] rounded-[16px] p-[26px] flex-1">
      <div className="flex items-center justify-between mb-[16px]">
        <h2 className="font-sora font-bold text-[#2b2e35] text-[17px] tracking-[-0.17px] m-0">
          Scheduled maintenance
        </h2>
        <a href="#" className="font-inter font-semibold text-[#5b8def] text-[13px] no-underline whitespace-nowrap">
          View maintenance →
        </a>
      </div>
      <div className="flex flex-col">
        {MAINTENANCE.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col gap-[8px] py-[16px] ${
              index < MAINTENANCE.length - 1 ? "border-b border-[#dde2ea]" : ""
            }`}
          >
            <span className="font-mono text-[#9aa1ae] text-[11.5px]">{item.date}</span>
            <span className="font-inter font-semibold text-[#2b2e35] text-[14px]">{item.title}</span>
            <span className="font-inter font-normal text-[#63697a] text-[12.5px] leading-[1.5]">{item.affected}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
