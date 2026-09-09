import React from 'react';

const imgBg = "/images/security-advisories/search-filters-bg.png";
const imgSearch = "/images/security-advisories/search-slate.svg";
const imgChevronDown = "/images/security-advisories/chevron-down.svg";

const filters = [
  "Product / Surface: All",
  "State: All Public",
  "Date / Year: 2025",
  "Severity: Critical & High",
];

export default function SearchFiltersSection() {
  return (
    <div className="bg-white border-b border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Search-Filters-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-142px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-146px] bottom-[-30px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
          Find Specific Advisories
        </h2>
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Search-Controls">
          <label className="bg-white border border-[#e2e8f0] border-solid flex gap-[12px] items-center p-[12px] relative rounded-[8px] shrink-0 w-full">
            <img alt="" className="block max-w-none shrink-0 size-[20px]" src={imgSearch} />
            <input
              type="search"
              placeholder="Search by advisory ID, keyword, CVE identifier..."
              className="flex-1 font-sans font-normal leading-[normal] min-w-px outline-none placeholder:text-[#4f5e74] text-[#0a0d13] text-[15px]"
            />
          </label>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative shrink-0 w-full" data-name="Filter-Row">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="bg-white border border-[#e2e8f0] border-solid cursor-pointer flex gap-[10px] items-center p-[12px] relative rounded-[8px] shrink-0 transition-colors hover:border-[#aab3c4]"
              >
                <span className="flex-1 font-sans font-medium leading-[normal] min-w-px text-[#0a0d13] text-[13.5px] text-left">
                  {filter}
                </span>
                <img alt="" className="block max-w-none shrink-0 size-[14px]" src={imgChevronDown} />
              </button>
            ))}
          </div>
        </div>
        <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid flex flex-col gap-[16px] items-start justify-between lg:flex-row lg:gap-[24px] lg:items-center p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="Empty-State">
          <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0 relative">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[15px]">
              No public advisories match these exact combinations of active filters.
            </p>
            <p className="[word-break:break-word] font-sans font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[12px]">
              Try broadening your selection limits, or reset the parameter parameters to show the complete list.
            </p>
          </div>
          <button type="button" className="border border-[#4f5e74] border-solid cursor-pointer flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0 w-full lg:w-auto transition-colors hover:bg-[#0a0d13] hover:border-[#0a0d13] group">
            <span className="font-sans font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[12px] whitespace-nowrap group-hover:text-white">
              Reset Filters
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
