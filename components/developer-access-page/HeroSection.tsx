import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full border-b border-solid border-[#232b3a] px-6 py-24 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/developer-access-page/hero/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.75)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-center gap-[48px] lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-start gap-[32px]">
          <div className="flex items-start rounded-[100px] border border-solid border-[#33d9c7] px-[12px] py-[6px]">
            <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#33d9c7]">
              Developer Access
            </p>
          </div>
          <h1 className="w-full text-[36px] font-bold leading-[1.15] tracking-[-1.5px] text-white md:text-[52px] md:leading-[60px]">
            Understand your developer access before you create credentials or start building
          </h1>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Developer access is your approved relationship with a ZoikoStream workspace — separate
            from authentication, API authorization, or entitlements. Know your access state first.
          </p>
          <div className="flex flex-col items-center gap-[16px] sm:flex-row">
            <button
              type="button"
              className="flex w-full items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90 sm:w-auto"
            >
              Check your access state
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center whitespace-nowrap rounded-[8px] border-[1.5px] border-solid border-[#aab3c4] px-[28px] py-[14px] text-[15px] font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              Read documentation
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[32px] sm:p-[40px] lg:w-[480px] lg:shrink-0">
          <p className="text-[14px] font-bold uppercase tracking-[1px] text-white">
            Workspace Access State
          </p>
          <div className="flex w-full flex-col items-start gap-[12px]">
            <div className="flex w-full items-center justify-between rounded-[8px] border border-solid border-[#232b3a] bg-[#1b2330] p-[16px]">
              <div className="flex items-center gap-[12px]">
                <div className="relative size-[8px]">
                  <Image src="/images/developer-access-page/hero/ellipse-green.svg" alt="" fill className="object-contain" />
                </div>
                <p className="text-[15px] font-bold text-white">Account Verified</p>
              </div>
              <p className="text-[11px] font-normal text-[#33d9c7]">ACTIVE STATE</p>
            </div>
            
            <div className="flex w-full items-center justify-between rounded-[8px] border border-solid border-[#232b3a] bg-[#1b2330] p-[16px]">
              <div className="flex items-center gap-[12px]">
                <div className="relative size-[8px]">
                  <Image src="/images/developer-access-page/hero/ellipse-blue.svg" alt="" fill className="object-contain" />
                </div>
                <p className="text-[15px] font-bold text-white">Workspace Member</p>
              </div>
              <p className="text-[11px] font-normal text-[#4c86ff]">ACTIVE STATE</p>
            </div>

            <div className="flex w-full items-center justify-between rounded-[8px] border border-solid border-[#232b3a] bg-[#1b2330] p-[16px]">
              <div className="flex items-center gap-[12px]">
                <div className="relative size-[8px]">
                  <Image src="/images/developer-access-page/hero/ellipse-green.svg" alt="" fill className="object-contain" />
                </div>
                <p className="text-[15px] font-bold text-white">Role: Developer</p>
              </div>
              <p className="text-[11px] font-normal text-[#33d9c7]">ACTIVE STATE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
