import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#232b3a] min-h-[600px] flex items-center bg-[#0a0d14]">
      {/* Background Image & Overlay */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img 
          alt="" 
          className="absolute max-w-none object-cover w-full h-full" 
          src="/images/live-streaming-api/hero-bg.png" 
        />
        <div className="absolute bg-[rgba(10,13,20,0.51)] inset-0" />
      </div>

      <div className="relative z-10 flex w-full flex-col lg:flex-row items-center justify-between gap-[48px] px-6 xl:px-[112px] pt-[220px] pb-[200px]">
        
        {/* Left Side Content */}
        <div className="flex flex-[1_1_auto] flex-col gap-[24px] items-start min-w-px max-w-[640px]">
          <div className="border border-[#34d4ca] border-solid flex items-center justify-center px-[12px] py-[6px] rounded-[100px]">
            <p className="font-sora font-bold text-[#34d4ca] text-[11px] tracking-[1px] uppercase">
              LIVE STREAMING API
            </p>
          </div>
          
          <h1 className="font-sora font-bold leading-[1.2] text-[36px] lg:text-[44px] text-white tracking-[-1px] w-full">
            Build a live stream from API request to playback.
          </h1>
          
          <p className="font-inter font-normal leading-[1.6] text-[#aab3c4] text-[15px] lg:text-[16px] w-full">
            Create and manage a live-stream lifecycle, connect an ingest source, hand off playback, and operate the stream with explicit states and production guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-[16px] items-start sm:items-center w-full">
            <Link 
              href="/start-building"
              className="bg-gradient-to-r from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center px-[28px] py-[14px] rounded-[8px] hover:opacity-90 transition-opacity whitespace-nowrap min-w-[140px]"
            >
              <span className="font-sora font-bold text-[#0a0d14] text-[15px]">
                Start building
              </span>
            </Link>
            <Link 
              href="/api-reference"
              className="border-[#aab3c4] border-[1.5px] border-solid flex items-center justify-center px-[28px] py-[14px] rounded-[8px] hover:bg-white/5 transition-colors whitespace-nowrap min-w-[180px]"
            >
              <span className="font-sora font-bold text-white text-[15px]">
                Read API reference
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side Code Panel */}
        <div className="bg-[#06080c] border-[#232b3a] border-[1.5px] border-solid flex flex-col items-start overflow-hidden rounded-[12px] w-full lg:w-[520px] shrink-0 shadow-2xl mt-8 lg:mt-0">
          <div className="bg-[#0c0e14] border-[#232b3a] border-b border-solid flex items-center justify-between p-[16px] w-full">
            <div className="flex items-center gap-[6px]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f56]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#27c93f]" />
            </div>
            <p className="font-mono font-bold text-[#aab3c4] text-[12px]">
              POST /v1/streams
            </p>
          </div>
          <div className="flex flex-col font-mono font-normal gap-[12px] items-start p-[20px] text-[13px] w-full overflow-x-auto min-h-[140px]">
            <p className="leading-[20px] text-[#8b949e]">
              // Request payload to initialize stream
            </p>
            <p className="leading-[20px] text-white whitespace-nowrap">
              <span className="text-[#ff7b72]">curl </span>
              <span className="text-[#a5d6ff]">"Authorization: Bearer sk_test_51Mz..."</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
