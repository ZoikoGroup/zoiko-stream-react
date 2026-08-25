import React from 'react';

const imgSectionBg = "/images/workflow-finder/rationale-section-bg.png";

const MAPPING_ROWS = [
  { number: "01", label: "You said you want to: ", value: "[Build video into a product]" },
  { number: "02", label: "Your audience/access context: ", value: "[Application/product users]" },
  { number: "03", label: "You want to operate it: ", value: "[Developer / self-service]" },
];

export default function SectionRationale() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(15,27,45,0.75)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] leading-[1.26] m-0 w-full">
          Why this matched
        </h2>

        <div className="flex flex-col gap-[16px] items-start w-full">
          {MAPPING_ROWS.map((row) => (
            <div key={row.number} className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid rounded-[12px] p-[24px] flex flex-col sm:flex-row gap-[12px] sm:gap-[16px] items-start sm:items-center justify-between w-full">
              <div className="flex gap-[16px] items-center flex-1 min-w-0">
                <div className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] rounded-[18px] flex items-center justify-center shrink-0 size-[32px]">
                  <p className="font-sans font-bold text-white text-[14px] m-0">{row.number}</p>
                </div>
                <p className="font-inter font-normal text-[#aab3c4] text-[15px] m-0 flex-1 min-w-0">
                  {row.label}<span className="font-inter font-bold text-white">{row.value}</span>
                </p>
              </div>
              <button className="font-sans font-bold text-[#4ecdc4] text-[14px] bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0">
                Change choice
              </button>
            </div>
          ))}
        </div>

        <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
          Integrating robust video pipelines into proprietary architectures requires direct programmatic command over player controls, ingest streams, and encoding presets. Your choices select a purely API-driven deployment pathway, eliminating the administrative overhead of pre-packaged viewer portals in favor of direct developer ownership and microservices flexibility.
        </p>
      </div>
    </div>
  );
}
