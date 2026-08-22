import React from 'react';

const imgHero = "/images/enterprise-inquiries/hero-network-operations.png";

export default function SectionHero() {
  return (
    <div className="bg-gradient-to-b from-[#fbfcfd] to-[#f1f4f8] w-full px-6 lg:px-[132px] py-[64px] lg:py-[120px] flex flex-col lg:flex-row items-center gap-[48px] lg:gap-[24px]">
      <div className="flex-1 flex flex-col items-start gap-[24px] max-w-[640px]">
        <div className="flex items-center gap-[8px]">
          <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
            Enterprise ZoikoStream
          </p>
        </div>
        <h1 className="font-sora font-bold text-[#32353c] text-[36px] lg:text-[46px] leading-[1.12] tracking-[-0.46px] m-0">
          Talk to ZoikoStream<br />about your enterprise<br />video requirements.
        </h1>
        <p className="font-inter font-normal text-[#6b7280] text-[15.5px] lg:text-[16.5px] leading-[1.6] m-0">
          Plan secure, scalable video infrastructure, live streaming, integrations, migration and enterprise operations with a team that can align product, architecture, trust and commercial requirements.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-[16px] w-full sm:w-auto">
          <button className="bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:opacity-90 transition-opacity border-none cursor-pointer">
            <span className="font-inter font-semibold text-[#1c2430] text-[15px] whitespace-nowrap">
              Talk to an enterprise specialist ↓
            </span>
          </button>
          <button className="border border-[#32353c] border-solid bg-transparent flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:bg-[rgba(50,53,60,0.05)] transition-colors cursor-pointer">
            <span className="font-inter font-semibold text-[#32353c] text-[15px] whitespace-nowrap">
              Explore the platform →
            </span>
          </button>
        </div>
      </div>
      <div className="flex-1 w-full lg:w-auto max-w-[608px]">
        <div className="relative aspect-[608/486] w-full rounded-t-[22px] overflow-hidden shadow-[0px_30px_60px_-30px_rgba(30,35,50,0.3)]">
          <img
            alt="Global network operations and enterprise infrastructure planning."
            className="absolute inset-0 size-full object-cover"
            src={imgHero}
          />
        </div>
      </div>
    </div>
  );
}
