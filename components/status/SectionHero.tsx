import React from 'react';

export default function SectionHero() {
  return (
    <div id="overview" className="bg-white border-l-[5px] border-t border-r border-b border-[#1f9d6f] border-solid rounded-[16px] p-[28px]">
      <p className="font-inter font-bold text-[#9aa1ae] text-[11.5px] tracking-[0.92px] uppercase m-0 mb-[14px]">
        System status
      </p>
      <div className="inline-flex items-center gap-[8px] bg-[#eafaf3] rounded-[9px] px-[14px] py-[9px] mb-[16px]">
        <div className="size-[8px] rounded-full bg-[#1f9d6f]" />
        <span className="font-sora font-bold text-[#1f9d6f] text-[15px]">Operational</span>
      </div>
      <h1 className="font-sora font-bold text-[#2b2e35] text-[21px] lg:text-[23px] tracking-[-0.23px] m-0 mb-[16px]">
        ZoikoStream service status
      </h1>
      <p className="font-inter font-normal text-[#2b2e35] text-[15px] m-0 mb-[16px]">
        All published production services are operating normally.
      </p>
      <p className="font-inter font-normal text-[#9aa1ae] text-[12.5px] m-0 mb-[24px]">
        Last updated: <span className="font-mono text-[#63697a]">Aug 22, 2026 · 14:02 UTC</span>
      </p>
      <button className="bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] rounded-[9px] px-[24px] py-[13px] border-none cursor-pointer hover:opacity-90 transition-opacity">
        <span className="font-inter font-semibold text-[#1c2430] text-[14px]">Subscribe to updates</span>
      </button>
    </div>
  );
}
