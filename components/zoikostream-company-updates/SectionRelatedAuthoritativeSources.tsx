import React from 'react';

const SOURCES = ["Newsroom", "Developer updates", "System Status", "Trust Center", "Pricing", "Legal & Privacy", "Live Events"];

export default function SectionRelatedAuthoritativeSources() {
  return (
    <div className="w-full px-6 lg:px-[132px] py-[40px] lg:py-[48px]">
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="flex gap-[12px] items-center">
          <div className="bg-[#5b8def] rounded-full h-[6px] w-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase m-0">Looking for something else?</p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[24px] lg:text-[28px] leading-[1.6] tracking-[-0.28px] m-0 w-full">
          Related authoritative sources.
        </h2>
        <div className="flex flex-wrap gap-[12px] items-center w-full">
          {SOURCES.map((source) => (
            <button
              key={source}
              className="border border-[#dde2ea] border-solid rounded-full px-[20px] h-[46px] flex items-center justify-center bg-transparent cursor-pointer hover:bg-[#f7f9fb] transition-colors"
            >
              <span className="font-inter font-semibold text-[#32353c] text-[13.5px] whitespace-nowrap">{source}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
