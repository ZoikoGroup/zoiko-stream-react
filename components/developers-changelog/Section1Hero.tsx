import React from 'react';
import Link from 'next/link';

export default function Section1Hero() {
  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col items-center justify-center px-4 md:px-[112px] py-16 md:py-[120px] relative w-full min-h-[918px] bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec1-bg.png" />
        <div className="absolute bg-[rgba(13,18,31,0.21)] inset-0" />
      </div>

      <div className="flex flex-col lg:flex-row gap-[64px] items-center justify-between relative z-10 w-full max-w-[1440px] mx-auto h-full">
        <div className="flex flex-col gap-[32px] items-start relative w-full lg:w-[563px] text-center lg:text-left">
          <div className="border border-[#34d4ca] border-solid flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0 mx-auto lg:mx-0">
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
              CHANGELOG
            </p>
          </div>
          
          <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] lg:leading-[60px] relative w-full text-[40px] md:text-[52px] text-white tracking-[-1.5px]">
            What shipped, <br className="hidden lg:block" />
            and when.
          </h1>
          
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[28px] not-italic relative text-[#aab3c4] text-[16px] md:text-[18px] w-full max-w-[600px] mx-auto lg:mx-0">
            Track approved ZoikoStream changes across developer surfaces with version/date context, impact, compatibility, and migration guidance where the source record provides it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center lg:justify-start relative w-full lg:w-auto mt-4">
            <Link href="#latest" className="bg-gradient-to-b flex from-[#34d4ca] to-[#4a8cfb] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] transition-transform duration-200 hover:scale-[1.02] w-full sm:w-auto">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#0a0d14] text-[14px] whitespace-nowrap">
                View latest changes
              </span>
            </Link>
            <Link href="#areas" className="border-[#aab3c4] border-[1.5px] border-solid flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] transition-colors hover:bg-white/10 w-full sm:w-auto">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-white text-[14px] whitespace-nowrap">
                Browse by product area
              </span>
            </Link>
          </div>
          
          <div className="relative shrink-0 w-[8px] h-[8px] mx-auto lg:mx-0 mt-4"></div>
        </div>

        <div className="backdrop-blur-[10px] bg-[rgba(16,21,30,0.8)] border-[#232b3a] border-[1.5px] border-solid flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] shrink-0 w-full lg:w-[480px] mx-auto lg:mx-0">
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between relative w-full gap-4">
            <div className="bg-[rgba(16,185,129,0.11)] border border-[rgba(52,212,202,0.3)] border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#34d4ca] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap">
                LATEST RELEASE
              </span>
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#34d4ca] text-[13px] whitespace-nowrap">
              v2.14.0
            </span>
          </div>
          
          <div className="flex flex-col gap-[8px] items-start relative w-full">
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[20px] sm:text-[24px] text-white">
              Core Streaming Ingest v2.14
            </h3>
            <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4] text-[14px]">
              Published February 18, 2026 · 14 commits
            </p>
          </div>
          
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none w-full h-[1px]" src="/images/developers-changelog/sec1-line.svg" />
            </div>
          </div>
          
          <div className="flex flex-col gap-[12px] items-start relative w-full">
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[12px] text-white tracking-[0.5px] whitespace-nowrap">
              AFFECTED SURFACES
            </p>
            <div className="flex flex-wrap gap-[8px] items-start relative w-full">
              <div className="bg-[rgba(52,212,202,0.1)] border border-[rgba(52,212,202,0.3)] border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#34d4ca] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap">
                  API
                </span>
              </div>
              <div className="bg-[rgba(74,140,251,0.1)] border border-[rgba(74,140,251,0.3)] border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#4a8cfb] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap">
                  SDK-iOS
                </span>
              </div>
              <div className="bg-[rgba(74,140,251,0.1)] border border-[rgba(74,140,251,0.3)] border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#4a8cfb] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap">
                  Web-Player
                </span>
              </div>
              <div className="border border-[#232b3a] border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#aab3c4] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap">
                  Live-Events
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1b2330] flex gap-[16px] items-center p-[12px] relative rounded-[8px] w-full">
            <div className="relative shrink-0 w-[8px] h-[8px] flex items-center justify-center">
              <img alt="" className="absolute block max-w-none w-full h-full" src="/images/developers-changelog/sec1-ellipse.svg" />
            </div>
            <p className="flex-[1_0_0] font-[family-name:var(--font-inter)] font-medium leading-[normal] not-italic relative text-[13px] text-white">
              Contains 1 breaking API model alteration. Action required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
