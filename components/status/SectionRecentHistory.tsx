import React from 'react';

const INCIDENTS = [
  {
    date: "Resolved Aug 12, 2026",
    title: "Elevated playback errors in Europe",
    affected: "Affected: Streaming & Playback · Europe — Duration: 41 minutes",
  },
  {
    date: "Resolved Jul 29, 2026",
    title: "Delayed webhook delivery for stream events",
    affected: "Affected: APIs & Developer Platform · Global — Duration: 1h 12m",
  },
];

export default function SectionRecentHistory() {
  return (
    <div id="recent-history" className="bg-white border border-[#dde2ea] rounded-[16px] p-[26px]">
      <div className="flex items-center justify-between mb-[16px]">
        <h2 className="font-sora font-bold text-[#2b2e35] text-[17px] tracking-[-0.17px] m-0">
          Recent incidents
        </h2>
        <a href="#" className="font-inter font-semibold text-[#5b8def] text-[13px] no-underline whitespace-nowrap">
          View incident history →
        </a>
      </div>
      <div className="flex flex-col">
        {INCIDENTS.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col gap-[6px] py-[16px] ${
              index < INCIDENTS.length - 1 ? "border-b border-[#dde2ea]" : ""
            }`}
          >
            <span className="font-mono text-[#9aa1ae] text-[11.5px]">{item.date}</span>
            <span className="font-inter font-semibold text-[#2b2e35] text-[14px]">{item.title}</span>
            <span className="font-inter font-normal text-[#63697a] text-[12.5px]">{item.affected}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
