import React from 'react';
import Image from 'next/image';

export default function Section1Hero() {
  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col items-start justify-center px-4 md:px-[112px] py-16 md:py-[120px] relative w-full min-h-[918px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          alt=""
          className="absolute object-cover w-full h-full"
          src="/images/developers-rate-limits/hero-bg.png"
          fill
          priority
        />
        <div className="absolute bg-[rgba(10,13,20,0.76)] inset-0" />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[48px] items-center relative z-10 w-full max-w-[1440px] mx-auto h-full">
        {/* Left Column */}
        <div className="flex flex-[1_0_0] flex-col gap-6 lg:gap-[32px] items-start max-w-[680px] w-full">
          <div className="border-[#34d4ca] border-[1.5px] border-solid flex items-start px-[12px] py-[6px] rounded-[100px]">
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#34d4ca] text-[11px] tracking-[1px] uppercase">
              RATE LIMITS
            </p>
          </div>
          
          <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.1] md:leading-[60px] text-4xl md:text-[52px] text-white tracking-[-1.5px]">
            Know your ceilings up front.
          </h1>
          
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] md:leading-[28px] text-[#aab3c4] text-base md:text-[18px]">
            See how request and capacity limits are scoped, where authoritative values come from, how to recognize pressure, and how to build clients that respond safely.
          </p>
          
          <div className="flex flex-wrap gap-[16px] items-center mt-4">
            <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center px-[28px] py-[14px] rounded-[8px] hover:opacity-90 transition-opacity">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0a0d14] text-[15px]">
                Explore published limits
              </span>
            </button>
            <button className="border-[#aab3c4] border-[1.5px] border-solid flex items-center justify-center px-[28px] py-[14px] rounded-[8px] hover:bg-[#aab3c4]/10 transition-colors">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-[15px]">
                Plan request volume
              </span>
            </button>
          </div>
        </div>
        
        {/* Right Column - Visual */}
        <div className="bg-[rgba(16,21,30,0.8)] border-[#232b3a] border-[1.5px] border-solid flex flex-col gap-[24px] items-start p-6 md:p-[32px] rounded-[16px] w-full max-w-[480px]">
          <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[14px] text-white tracking-[1px] uppercase">
            LIMIT EXPLORER PREVIEW
          </p>
          
          <div className="flex flex-col gap-[16px] items-start w-full">
            <div className="flex flex-col sm:flex-row gap-[12px] items-start w-full">
              <div className="bg-[#1b2330] border border-[#232b3a] border-solid flex flex-1 flex-col gap-[4px] items-start p-[12px] rounded-[8px] w-full">
                <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[11px] uppercase">
                  API TARGET
                </p>
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[16px] text-white">
                  Live Ingest API
                </p>
              </div>
              <div className="bg-[#1b2330] border border-[#232b3a] border-solid flex flex-1 flex-col gap-[4px] items-start p-[12px] rounded-[8px] w-full">
                <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[11px] uppercase">
                  Environment
                </p>
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#34d4ca] text-[16px]">
                  Production
                </p>
              </div>
            </div>
            
            <div className="bg-[#1b2330] border border-[#232b3a] border-solid flex flex-col gap-[8px] items-start p-[16px] rounded-[8px] w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[11px] uppercase">
                  COUNTING SCOPE
                </p>
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#4a8cfb] text-[10px] uppercase">
                  PER CREDENTIAL
                </p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-[28px]">
                  10,000
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] font-normal text-[#aab3c4] text-[14px]">
                  req/min
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-[8px] items-center">
            <div className="relative w-[8px] h-[8px] shrink-0">
              <Image 
                alt="" 
                className="object-contain" 
                src="/images/developers-rate-limits/ellipse.svg" 
                fill
              />
            </div>
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#34d4ca] text-[13px]">
              Authoritative Source Contract Sync
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
