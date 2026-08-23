import React from 'react';

export default function SectionSubscribeHelp() {
  return (
    <div className="flex flex-col lg:flex-row gap-[24px]">
      <div id="subscribe" className="bg-white border border-[#dde2ea] rounded-[16px] p-[26px] flex-1">
        <h2 className="font-sora font-bold text-[#2b2e35] text-[16.5px] tracking-[-0.165px] m-0 mb-[16px]">
          Stay informed
        </h2>
        <p className="font-inter font-normal text-[#63697a] text-[13.5px] m-0 mb-[20px]">
          Choose only the incidents and maintenance updates relevant to you.
        </p>
        <button className="bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] rounded-[9px] px-[24px] py-[13px] border-none cursor-pointer hover:opacity-90 transition-opacity">
          <span className="font-inter font-semibold text-[#1c2430] text-[14px]">Subscribe to updates</span>
        </button>
      </div>
      <div className="bg-white border border-[#dde2ea] rounded-[16px] p-[26px] flex-1">
        <h2 className="font-sora font-bold text-[#2b2e35] text-[16.5px] tracking-[-0.165px] m-0 mb-[16px]">
          Not seeing your issue?
        </h2>
        <p className="font-inter font-normal text-[#63697a] text-[13.5px] leading-[1.5] m-0 mb-[20px]">
          Public status covers published production incidents. Customer-specific issues may not appear here.
        </p>
        <button className="bg-white border border-[#dde2ea] rounded-[9px] px-[24px] py-[13px] cursor-pointer hover:bg-[#f7f9fb] transition-colors">
          <span className="font-inter font-semibold text-[#2b2e35] text-[14px]">Get support</span>
        </button>
      </div>
    </div>
  );
}
