import React from 'react';

export default function SectionClosingCta() {
  return (
    <div
      className="bg-[#0a0d13] relative w-full px-6 lg:px-[112px] py-[80px] lg:py-[120px] flex flex-col items-center text-center overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(51,217,199,0.16) 0%, rgba(51,217,199,0) 55%), radial-gradient(circle at 85% 80%, rgba(199,79,209,0.16) 0%, rgba(199,79,209,0) 55%)",
      }}
    >
      <h2 className="font-sora font-bold text-white text-[28px] lg:text-[34px] tracking-[-0.34px] leading-[1.3] m-0 mb-[24px] max-w-[730px]">
        Ready to plan your enterprise video architecture?
      </h2>
      <p className="font-inter font-normal text-[#c7cbd3] text-[15px] lg:text-[16px] leading-[1.6] m-0 mb-[40px] max-w-[580px]">
        Talk to a specialist about scale, integration, control, trust and operations — or keep exploring on your own.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-[16px] w-full sm:w-auto">
        <button className="bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:opacity-90 transition-opacity border-none cursor-pointer">
          <span className="font-inter font-semibold text-[#1c2430] text-[15px] whitespace-nowrap">
            Talk to an enterprise specialist
          </span>
        </button>
        <button className="border border-[rgba(255,255,255,0.35)] border-solid bg-transparent flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer">
          <span className="font-inter font-semibold text-white text-[15px] whitespace-nowrap">
            Start building
          </span>
        </button>
      </div>
    </div>
  );
}
