import React from 'react';

const TONE_CLASSES = {
  green: "bg-[#e9f9f7] text-[#3fbf7f]",
  red: "bg-[#fbe6e4] text-[#e2685f]",
  amber: "bg-[#fdf0dd] text-[#d99a4e]",
};

const ALL_UPDATES = [
  { date: "Aug 20, 2026", category: "Platform & Experience", title: "Live captioning expanded across supported playback surfaces.", actionLabel: "No action required", tone: "green" as const },
  { date: "Eff. Sep 1, 2026", category: "Commercial & Plans", title: "Legacy Starter plan retires; customers migrate to Core.", actionLabel: "Action required", tone: "red" as const },
  { date: "Aug 6, 2026", category: "Company & Operations", title: "ZoikoStream appoints new Chief Trust & Security Officer.", actionLabel: "No action required", tone: "green" as const },
  { date: "Jul 29, 2026", category: "Live Events", title: "Managed production partnerships expand for enterprise events.", actionLabel: "No action required", tone: "green" as const },
  { date: "Jul 21, 2026", category: "Developer Experience", title: "Updated mobile SDKs simplify integration for developers.", actionLabel: "Action recommended", tone: "amber" as const },
  { date: "Jul 8, 2026", category: "Trust & Compliance", title: "Annual third-party security assessment completed.", actionLabel: "No action required", tone: "green" as const },
  { date: "Jun 30, 2026", category: "Availability & Regions", title: "ZoikoStream launches support for the Brazil region.", actionLabel: "No action required", tone: "green" as const },
];

export default function SectionBrowseAllUpdates() {
  return (
    <div className="bg-[#f7f9fb] w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px]">
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="flex gap-[12px] items-center">
          <div className="bg-[#5b8def] rounded-full h-[6px] w-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase m-0 whitespace-nowrap">Browse</p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[24px] lg:text-[28px] leading-[1.6] tracking-[-0.28px] m-0 w-full">
          Browse all updates.
        </h2>

        <div className="flex flex-col gap-[12px] items-start w-full">
          <input
            type="text"
            placeholder="Search company updates"
            className="bg-white border border-[#dde2ea] border-solid rounded-[10px] h-[43px] px-[16px] w-full lg:w-[380px] text-[14px] font-inter text-[#32353c] placeholder:text-[#757575] outline-none"
          />
          <div className="flex flex-wrap gap-[12px] items-center w-full">
            <select className="bg-white border border-[#dde2ea] border-solid rounded-[10px] h-[45px] px-[18px] font-inter text-[14px] text-[#32353c] outline-none flex-1 min-w-[140px] lg:flex-none lg:w-[195px]">
              <option>Category</option>
            </select>
            <select className="bg-white border border-[#dde2ea] border-solid rounded-[10px] h-[45px] px-[18px] font-inter text-[14px] text-[#32353c] outline-none flex-1 min-w-[100px] lg:flex-none lg:w-[195px]">
              <option>Year</option>
            </select>
            <select className="bg-white border border-[#dde2ea] border-solid rounded-[10px] h-[45px] px-[18px] font-inter text-[14px] text-[#32353c] outline-none flex-1 min-w-[100px] lg:flex-none lg:w-[195px]">
              <option>Action</option>
            </select>
            <p className="font-inter font-semibold text-[#9aa1ae] text-[13.5px] m-0 whitespace-nowrap cursor-pointer ml-auto lg:ml-[16px]">Clear filters</p>
          </div>
        </div>

        <p className="font-inter font-normal text-[#9aa1ae] text-[13.5px] m-0">18 updates in 2026</p>

        <div className="border-t border-[#dde2ea] border-solid w-full">
          {ALL_UPDATES.map((update, index) => (
            <div
              key={update.title}
              className={`flex flex-col lg:flex-row lg:items-center gap-[8px] lg:gap-[16px] py-[24px] w-full ${
                index < ALL_UPDATES.length - 1 ? "border-b border-[#dde2ea] border-solid" : ""
              }`}
            >
              <p className="font-inter font-semibold text-[#9aa1ae] text-[13px] m-0 lg:w-[136px] shrink-0 whitespace-nowrap">{update.date}</p>
              <p className="font-inter font-bold text-[#6a6df0] text-[12px] tracking-[0.36px] uppercase m-0 lg:w-[176px] shrink-0">{update.category}</p>
              <p className="font-sora font-bold text-[#32353c] text-[15px] leading-[1.6] tracking-[-0.15px] m-0 flex-1 min-w-0">{update.title}</p>
              <div className={`rounded-full px-[12px] py-[6px] shrink-0 self-start lg:self-center ${TONE_CLASSES[update.tone]}`}>
                <p className="font-inter font-bold text-[11px] m-0 whitespace-nowrap">{update.actionLabel}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-[8px] items-center w-full justify-center pt-[16px]">
          <button className="bg-[#32353c] border border-[#32353c] border-solid rounded-[8px] h-[38px] px-[15px] flex items-center justify-center cursor-pointer">
            <span className="font-inter font-semibold text-white text-[13.5px]">1</span>
          </button>
          <button className="border border-[#dde2ea] border-solid rounded-[8px] h-[38px] px-[15px] flex items-center justify-center cursor-pointer bg-transparent">
            <span className="font-inter font-semibold text-[#32353c] text-[13.5px]">2</span>
          </button>
          <button className="border border-[#dde2ea] border-solid rounded-[8px] h-[38px] px-[15px] flex items-center justify-center cursor-pointer bg-transparent">
            <span className="font-inter font-semibold text-[#32353c] text-[13.5px]">3</span>
          </button>
          <button className="border border-[#dde2ea] border-solid rounded-[8px] h-[38px] px-[15px] flex items-center justify-center gap-[6px] cursor-pointer bg-transparent">
            <span className="font-inter font-semibold text-[#32353c] text-[13.5px]">Next</span>
            <span className="font-inter font-semibold text-[#32353c] text-[13.5px]">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
