import React from 'react';

export default function SectionChangesVersionsRegional() {
  return (
    <div className="bg-white w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
            <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
              Version history
            </p>
          </div>
          <h3 className="font-sora font-bold text-[#32353c] text-[17px] tracking-[-0.17px] m-0 mb-[16px]">
            Changes and previous versions.
          </h3>
          <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[1.6] m-0">
            Current, future and prior versions are clearly identified. Superseded documents remain accessible under Previous versions and carry a non-current banner. ZoikoStream publishes new versions and provides notices or acceptance workflows when required by the governing agreement or applicable law.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
            <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
              Corporate disclosures
            </p>
          </div>
          <h3 className="font-sora font-bold text-[#32353c] text-[17px] tracking-[-0.17px] m-0 mb-[16px]">
            Regional and entity information.
          </h3>
          <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[1.6] m-0">
            Market-specific notices and contracting-entity information are published only where Legal has approved public display, sourced from ZoikoStream&apos;s governed Corporate Entity Registry rather than inferred from browser locale or payment currency.
          </p>
        </div>
      </div>
    </div>
  );
}
