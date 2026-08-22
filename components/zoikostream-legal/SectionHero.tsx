import React from 'react';

export default function SectionHero() {
  return (
    <div className="bg-gradient-to-b from-[#fbfcfd] to-[#f1f4f8] w-full px-6 lg:px-[132px] py-[60px] lg:py-[90px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
        <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Legal Center
        </p>
      </div>
      <h1 className="font-sora font-bold text-[#32353c] text-[28px] lg:text-[36px] tracking-[-0.36px] leading-[1.16] m-0 mb-[24px] max-w-[720px]">
        Terms, policies and legal notices.
      </h1>
      <p className="font-inter font-normal text-[#6b7280] text-[15px] lg:text-[15.5px] leading-[1.6] m-0 mb-[32px] max-w-[720px]">
        Find the documents that govern use of ZoikoStream, its APIs, Live Events and related services. Current versions, effective dates and previous versions are clearly identified.
      </p>

      <div className="flex flex-col items-start sm:flex-row sm:items-stretch gap-[12px] w-full max-w-[788px] mb-[24px]">
        <div className="w-full sm:flex-1 h-[52px] bg-white border border-[#dde2ea] rounded-[10px] px-[16px] flex items-center">
          <span className="font-inter font-normal text-[#757575] text-[14.5px]">Search legal documents</span>
        </div>
        <button className="h-[52px] px-[40px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] rounded-[10px] border-none cursor-pointer hover:opacity-90 transition-opacity self-start sm:self-auto">
          <span className="font-inter font-semibold text-white text-[15px]">Search</span>
        </button>
      </div>

      {/* Mobile-only quick links (not present in the desktop frame) */}
      <div className="lg:hidden flex flex-col items-start gap-[12px] mb-[24px]">
        <button className="h-[52px] px-[28px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] rounded-[10px] border-none cursor-pointer hover:opacity-90 transition-opacity">
          <span className="font-inter font-semibold text-[#1c2430] text-[15px] whitespace-nowrap">Browse all legal documents</span>
        </button>
        <button className="h-[52px] px-[28px] bg-white border border-[#dde2ea] rounded-[10px] cursor-pointer hover:bg-[#f7f9fb] transition-colors">
          <span className="font-inter font-semibold text-[#32353c] text-[15px] whitespace-nowrap">Contact Legal</span>
        </button>
      </div>

      <div className="flex items-center gap-[24px]">
        <span className="font-inter font-semibold text-[#5b8def] text-[13.5px]">Privacy</span>
        <span className="font-inter font-semibold text-[#5b8def] text-[13.5px]">Cookie Preferences</span>
        <span className="font-inter font-semibold text-[#5b8def] text-[13.5px]">Trust Center</span>
      </div>
    </div>
  );
}
