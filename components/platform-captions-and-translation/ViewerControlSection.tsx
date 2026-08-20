import React from 'react';
import Image from 'next/image';

const points = [
  {
    title: '1. Discover',
    description: <>Clearly visible controls inside the player frame ensure viewers easily find localized track<br className="hidden lg:block" /> settings.</>
  },
  {
    title: '2. Explicit Selection',
    description: 'No automatic fallback to default language without user acknowledgement. States are clean.'
  },
  {
    title: '3. Remember Preference',
    description: 'Preferences are saved securely on the local client without sharing sensitive user profiles.'
  }
];

export default function ViewerControlSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#e2e8f0] border-solid flex flex-col gap-[56px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/viewer-control-bg.png" 
          alt="Viewer Control Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0a0d13] text-[38px] leading-[61px] tracking-[-0.38px]">
          Viewer Language Control
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[29px]">
          Discoverable, explicit, no silent fallback.
        </p>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-[48px] items-center w-full">
        {/* Left Side: Points */}
        <div className="flex flex-col gap-[24px] items-start w-full lg:flex-1">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col gap-[8px] items-start w-full">
              <h3 className="font-spaceGrotesk font-bold text-[#0a0d13] text-[16px] leading-tight">
                {point.title}
              </h3>
              <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[14px] leading-[22px] w-full">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: Mockup Form */}
        <div className="bg-[#0a0f1a] border border-[#232b3a] border-solid rounded-[16px] flex flex-col gap-[16px] p-[24px] w-full lg:w-[540px] shrink-0 shadow-2xl">
          <p className="font-spaceGrotesk font-bold text-[#34d4ca] text-[13px]">
            PLAYER CONTROLS — AUDIO & CAPTIONS
          </p>
          <div className="w-full h-[1px] bg-[#232b3a]" />
          
          {/* Captions Control */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-spaceGrotesk font-bold text-[#707a8c] text-[12px] uppercase">
              CC / CAPTIONS
            </p>
            <div className="flex flex-col gap-[8px] items-start w-full max-w-[460px]">
              <div className="flex gap-[4px] items-center">
                <p className="font-spaceGrotesk font-bold text-[#d9dee5] text-[16px] leading-[24px]">
                  Select target captions track
                </p>
                <span className="font-sans font-semibold text-[#ef4444] text-[14px]">
                  *
                </span>
              </div>
              <button className="bg-white border border-[#e5e7eb] border-solid rounded-[6px] flex items-center justify-between px-[16px] py-[12px] w-full hover:border-[#4a8cfb] transition-colors group">
                <span className="font-sans font-normal text-[#6b7280] text-[15px]">
                  English (United States)
                </span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-[#6b7280] group-hover:text-[#4a8cfb] transition-colors"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Audio Control */}
          <div className="flex flex-col gap-[8px] items-start w-full mt-2">
            <p className="font-spaceGrotesk font-bold text-[#707a8c] text-[12px] uppercase">
              AUDIO LANGUAGE
            </p>
            <div className="flex flex-col gap-[8px] items-start w-full max-w-[460px]">
              <div className="flex gap-[4px] items-center">
                <p className="font-spaceGrotesk font-bold text-[#d9dee5] text-[16px] leading-[24px]">
                  Select alternate audio track
                </p>
                <span className="font-sans font-semibold text-[#ef4444] text-[14px]">
                  *
                </span>
              </div>
              <button className="bg-white border border-[#e5e7eb] border-solid rounded-[6px] flex items-center justify-between px-[16px] py-[12px] w-full hover:border-[#4a8cfb] transition-colors group">
                <span className="font-sans font-normal text-[#6b7280] text-[15px]">
                  Original Speech (English)
                </span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-[#6b7280] group-hover:text-[#4a8cfb] transition-colors"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
