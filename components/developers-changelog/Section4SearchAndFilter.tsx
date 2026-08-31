import React from 'react';

export default function Section4SearchAndFilter() {
  const states = [
    {
      badgeText: "STATE: RESOLVED",
      badgeColor: "#10b981",
      badgeIcon: "/images/developers-changelog/sec4-ellipse-resolved.svg",
      title: "14 matches found",
      desc: "Active filter parameters match 14 distinct platform records. Indices are verified current."
    },
    {
      badgeText: "STATE: EMPTY",
      badgeColor: "#4f5e74",
      badgeIcon: "/images/developers-changelog/sec4-ellipse-empty.svg",
      title: "No results matched",
      desc: "No records align with the active query. Try loosening date scopes or removing specific surface filters."
    },
    {
      badgeText: "STATE: CACHE REBUILD",
      badgeColor: "#d97706",
      badgeIcon: "/images/developers-changelog/sec4-ellipse-rebuild.svg",
      title: "Indices rebuilding",
      desc: "Platform cache index is refreshing to capture latest hotfixes. Results displayed may have a 60-second skew."
    }
  ];

  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[40px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec4-bg.png" />
      </div>

      <div className="absolute bottom-[-336px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-changelog/sec2-blob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-180px] w-[420px] h-[420px] top-[-54px] pointer-events-none z-0">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-changelog/sec2-blob1.svg" />
        </div>
      </div>

      <div className="flex flex-col items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-[#0f1b2d] text-3xl md:text-[38px] w-full">
          Search and filter with precision.
        </h2>
      </div>

      <div className="bg-[#f8fafc] border-[#e1e6eb] border-[1.5px] border-solid flex flex-wrap lg:flex-nowrap gap-[12px] items-center p-[16px] relative rounded-[12px] w-full z-10">
        <div className="bg-white border border-[#e1e6eb] border-solid flex flex-[1_0_0] gap-[8px] items-center min-w-[200px] px-[14px] py-[10px] relative rounded-[8px] w-full lg:w-auto">
          <div className="relative shrink-0 w-[16px] h-[16px] flex items-center justify-center">
            <img alt="Search" className="absolute block max-w-none w-full h-full" src="/images/developers-changelog/sec4-search.svg" />
          </div>
          <input 
            type="text" 
            placeholder="Search release payload, fields or endpoints..." 
            className="flex-[1_0_0] bg-transparent border-none outline-none font-[family-name:var(--font-inter)] font-normal text-[#4f5e74] text-[14px] w-full"
          />
        </div>
        
        <div className="flex flex-wrap sm:flex-nowrap gap-[12px] items-center w-full lg:w-auto">
          <div className="bg-white border border-[#e1e6eb] border-solid flex gap-[8px] items-center px-[14px] py-[10px] relative rounded-[8px] cursor-pointer hover:bg-slate-50 transition-colors w-full sm:w-auto justify-between">
            <span className="font-[family-name:var(--font-inter)] font-normal text-[#0f1b2d] text-[14px] whitespace-nowrap">
              Surface: API
            </span>
            <img alt="" className="block w-[14px] h-[14px]" src="/images/developers-changelog/sec4-chevron.svg" />
          </div>
          <div className="bg-white border border-[#e1e6eb] border-solid flex gap-[8px] items-center px-[14px] py-[10px] relative rounded-[8px] cursor-pointer hover:bg-slate-50 transition-colors w-full sm:w-auto justify-between">
            <span className="font-[family-name:var(--font-inter)] font-normal text-[#0f1b2d] text-[14px] whitespace-nowrap">
              Impact: Breaking
            </span>
            <img alt="" className="block w-[14px] h-[14px]" src="/images/developers-changelog/sec4-chevron.svg" />
          </div>
          <div className="bg-white border border-[#e1e6eb] border-solid flex gap-[8px] items-center px-[14px] py-[10px] relative rounded-[8px] cursor-pointer hover:bg-slate-50 transition-colors w-full sm:w-auto justify-between">
            <span className="font-[family-name:var(--font-inter)] font-normal text-[#0f1b2d] text-[14px] whitespace-nowrap">
              Status: Active
            </span>
            <img alt="" className="block w-[14px] h-[14px]" src="/images/developers-changelog/sec4-chevron.svg" />
          </div>
          <button className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#4a8cfb] text-[14px] hover:underline underline-offset-2 bg-transparent border-none cursor-pointer px-2 shrink-0">
            Clear all
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-start relative w-full z-10">
        {states.map((state, idx) => (
          <div key={idx} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[16px] h-full items-start p-[24px] relative rounded-[12px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300">
            <div className="flex items-center justify-between relative w-full">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[13px] whitespace-nowrap" style={{ color: state.badgeColor }}>
                {state.badgeText}
              </span>
              <div className="relative shrink-0 w-[8px] h-[8px]">
                <img alt="" className="absolute block max-w-none w-full h-full" src={state.badgeIcon} />
              </div>
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[18px]">
              {state.title}
            </h3>
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] not-italic relative text-[#4f5e74] text-[13px] w-full">
              {state.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
