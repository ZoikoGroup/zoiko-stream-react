import React from 'react';
import StatusPill from './StatusPill';

const REGIONS = ["North America", "Europe", "Asia Pacific"];

export default function SectionRegionalStatus() {
  return (
    <div id="regional-status" className="bg-white border border-[#dde2ea] rounded-[16px] p-[26px] flex-1">
      <div className="flex items-center justify-between mb-[16px]">
        <h2 className="font-sora font-bold text-[#2b2e35] text-[17px] tracking-[-0.17px] m-0">
          Regional status
        </h2>
        <a href="#" className="font-inter font-semibold text-[#5b8def] text-[13px] no-underline whitespace-nowrap">
          View regions →
        </a>
      </div>
      <div className="flex flex-col">
        {REGIONS.map((name, index) => (
          <div
            key={name}
            className={`flex items-center justify-between gap-[16px] py-[16px] ${
              index < REGIONS.length - 1 ? "border-b border-[#dde2ea]" : ""
            }`}
          >
            <span className="font-inter font-semibold text-[#2b2e35] text-[14px]">{name}</span>
            <StatusPill />
          </div>
        ))}
      </div>
      <p className="font-inter font-normal text-[#9aa1ae] text-[11.5px] m-0 mt-[16px]">
        Service region is not inferred from your physical location.
      </p>
    </div>
  );
}
