import React from 'react';

export default function SectionSearch() {
  return (
    <div className="lg:hidden border-b border-[#dde2ea] border-solid w-full px-6 py-[40px]">
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="flex gap-[12px] items-center">
          <div className="bg-[#5b8def] rounded-full h-[6px] w-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase m-0 whitespace-nowrap">Find what you need</p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[26px] leading-[1.6] tracking-[-0.26px] m-0 w-full">
          Search trust resources.
        </h2>
        <div className="flex flex-col gap-[12px] items-start w-full">
          <input
            type="text"
            placeholder="Search security, privacy, subprocessors, advisories or evidence..."
            className="bg-white border border-[#dde2ea] border-solid rounded-[10px] h-[52px] px-[16px] w-full text-[14px] font-inter text-[#32353c] placeholder:text-[#757575] outline-none"
          />
          <button className="border border-[#32353c] border-solid rounded-[10px] h-[52px] px-[24px] flex items-center justify-center bg-transparent cursor-pointer w-full">
            <span className="font-inter font-semibold text-[#32353c] text-[15px]">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
