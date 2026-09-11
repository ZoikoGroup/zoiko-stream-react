import React from 'react';
import { ExternalIcon, MenuIcon } from './icons';

const imgBg = "/images/github/external-link-background.webp";
const imgNav = "/images/github/desktop-navigation.webp";

const navItems = ['Documentation', 'API reference', 'SDKs', 'Code samples'];

const requirements = [
  'External indicator is adjacent to GitHub',
  'Focus ring remains visible on dark surfaces',
  'Tap target meets a 44 × 44 px minimum',
  'Unavailable state explains why access is blocked',
];

export default function ExternalLinkSection() {
  return (
    <section className="bg-[#0a0d13] border-b border-[#1f2937] flex flex-col items-center px-5 sm:px-6 lg:px-12 xl:px-[112px] py-12 sm:py-16 lg:py-[56px] relative w-full overflow-hidden" data-name="External-Link-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.3]" src={imgBg} />
        <div className="absolute bg-[rgba(3,7,18,0.3)] inset-0" />
      </div>

      <div className="flex flex-col gap-[32px] lg:gap-[40px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[16px] items-start w-full lg:max-w-[720px]">
          <h2 className="[word-break:break-word] font-sans font-bold text-white text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] lg:leading-[40px]">
            External link experience
          </h2>
          <p className="font-inter font-normal text-[#94a3b8] text-[16px] sm:text-[18px] leading-[28px]">
            GitHub is the final item in Developers navigation. Its external destination is explicit, keyboard-visible,
            and never inferred from an unverified URL.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-[24px] w-full">
          {/* Desktop navigation preview */}
          <div className="bg-[rgba(15,23,42,0.85)] border border-[#1f2937] border-solid flex flex-col gap-[20px] p-[20px] sm:p-[24px] rounded-[16px] min-w-0">
            <div className="flex justify-between items-center gap-3">
              <span className="font-sans font-bold text-white text-[14px]">Desktop navigation</span>
              <span className="font-inter font-normal text-[#94a3b8] text-[12px]">≥ 1024 px</span>
            </div>
            <img alt="" className="h-[96px] sm:h-[116px] object-cover rounded-[8px] w-full" src={imgNav} />
            <div className="bg-[#16213a] flex flex-col gap-[6px] p-[8px] rounded-[10px]">
              {navItems.map((item) => (
                <span key={item} className="font-inter font-normal text-[#cbd5e1] text-[14px] px-[8px] py-[2px]">
                  {item}
                </span>
              ))}
              <span className="border-2 border-[#2dd4bf] border-solid flex justify-between items-center px-[14px] py-[12px] rounded-[8px] mt-[4px]">
                <span className="font-sans font-bold text-white text-[15px]">GitHub</span>
                <ExternalIcon className="size-[18px] text-[#2dd4bf]" />
              </span>
            </div>
            <p className="font-inter font-normal text-[#94a3b8] text-[13px] leading-[20px]">
              Destination href is supplied only after registry verification—never guessed.
            </p>
          </div>

          {/* Mobile navigation preview */}
          <div className="bg-[rgba(15,23,42,0.85)] border border-[#1f2937] border-solid flex flex-col gap-[16px] p-[20px] sm:p-[24px] rounded-[16px] self-start w-full">
            <div className="flex justify-between items-center">
              <span className="font-sans font-bold text-white text-[14px]">Mobile navigation</span>
              <MenuIcon className="size-[20px] text-white" />
            </div>
            <span className="font-sans font-bold text-white text-[15px]">Developers</span>
            <span className="bg-[#16213a] border border-[#1f2937] border-solid flex justify-between items-center px-[16px] py-[14px] rounded-[8px]">
              <span className="font-inter font-normal text-white text-[16px]">GitHub</span>
              <ExternalIcon className="size-[18px] text-[#2dd4bf]" />
            </span>
            <div className="border border-[#2dd4bf] border-solid flex flex-col gap-[8px] p-[16px] rounded-[10px]">
              <span className="flex gap-[8px] items-center">
                <span className="bg-[#34d399] rounded-full size-[8px]" />
                <span className="font-sans font-bold text-white text-[14px]">Current</span>
              </span>
              <span className="font-inter font-normal text-[#94a3b8] text-[13px]">Verified registry entry is available.</span>
            </div>
            <div className="border border-[#fcd34d] border-solid flex flex-col gap-[8px] p-[16px] rounded-[10px]">
              <span className="flex gap-[8px] items-center">
                <span className="bg-[#fcd34d] rounded-full size-[8px]" />
                <span className="font-sans font-bold text-white text-[14px]">Unavailable</span>
              </span>
              <span className="font-inter font-normal text-[#94a3b8] text-[13px] leading-[20px]">
                Link is suppressed; no fallback URL is invented.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[rgba(15,23,42,0.85)] border border-[#1f2937] border-solid flex flex-col xl:flex-row gap-5 xl:gap-6 items-start xl:items-center p-[20px] sm:p-[24px] rounded-[16px] w-full">
          <div className="flex flex-col gap-[8px] xl:w-[240px] shrink-0">
            <p className="font-sans font-bold text-white text-[22px]">Accessible by default</p>
            <p className="font-inter font-normal text-[#94a3b8] text-[13px]">Required behavior before publication.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] flex-1 w-full">
            {requirements.map((requirement) => (
              <div key={requirement} className="bg-[#16213a] flex flex-col gap-[12px] p-[16px] rounded-[10px]">
                <span className="bg-[#2dd4bf] rounded-full size-[18px]" aria-hidden />
                <span className="font-inter font-normal text-[#e2e8f0] text-[13px] leading-[20px]">{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
