import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-[#0a0f1a] border-[#232b3a] border-b border-solid flex flex-col gap-[40px] items-start justify-center px-[112px] py-[100px] relative w-full h-[784px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          className="absolute max-w-none object-cover size-full"
          src="/images/support-system-status/imgHeroBackground.png"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/77" />
      </div>

      <div className="flex gap-[40px] items-center justify-between relative z-10 w-full max-w-[1216px] mx-auto">
        <div className="flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[726px]">
          <div className="border border-[#34d4ca] border-solid flex items-center px-[12px] py-[6px] relative rounded-[100px] shrink-0">
            <p className="font-mono font-bold leading-none text-[#34d4ca] text-[11px] tracking-[1px] uppercase">
              SYSTEM STATUS
            </p>
          </div>
          <p className="font-sans font-bold leading-[66px] text-[#eef1f6] text-[56px] tracking-[-1.5px] max-w-full">
            Current ZoikoStream Service Status
          </p>
          
          <div className="bg-[#10b981]/10 border border-[#10b981]/25 border-solid flex gap-[16px] items-center px-[24px] py-[16px] relative rounded-[12px] shrink-0 w-full">
            <div className="relative shrink-0 size-[8px]">
              <img alt="Status Dot" className="block w-full h-full" src="/images/support-system-status/imgStatusDot.svg" />
            </div>
            <p className="font-sans font-bold leading-none text-[#10b981] text-[20px]">
              All Systems Operational
            </p>
            <p className="font-mono leading-none text-[#aab3c4] text-[13px]">
              as of September 1, 2025 14:32 UTC
            </p>
          </div>

          <p className="font-sans font-normal leading-[28.8px] text-[#aab3c4] text-[18px] max-w-full">
            See current service health, active incidents, planned maintenance, recent history, and operational update options.
          </p>
          
          <div className="flex gap-[16px] items-center relative mt-4">
            <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center px-[28px] py-[14px] relative rounded-[8px] hover:opacity-90 transition-opacity">
              <span className="font-sans font-bold leading-none text-white text-[15px]">
                Subscribe to Updates
              </span>
            </button>
            <button className="border border-[#aab3c4] border-solid flex items-center justify-center px-[28px] py-[14px] relative rounded-[8px] hover:bg-[#aab3c4]/10 transition-colors">
              <span className="font-sans font-medium leading-none text-[#eef1f6] text-[15px]">
                View History
              </span>
            </button>
          </div>
        </div>

        <div className="relative shrink-0 w-[477px] h-[446px] rounded-[12px]">
          <Image
            alt="Service Status Illustration"
            className="object-cover rounded-[12px]"
            src="/images/support-system-status/imgFrame152.png"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
}
