import React from 'react';
import Image from 'next/image';

export default function Section3Explorer() {
  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <Image alt="" className="object-cover" src="/images/developers-rate-limits/sec3-bg.png" fill />
        <div className="absolute bg-[rgba(5,8,14,0.9)] inset-0" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full max-w-[1360px] mx-auto text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
          Find the authoritative contract for any limit.
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] md:leading-[28px] text-[#aab3c4] text-base md:text-[18px] w-full">
          Select an API, environment, and pressure class to see published values, scope, effective dates, and implementation guidance.
        </p>
      </div>

      <div className="bg-[rgba(16,21,30,0.8)] border-[#232b3a] border-[1.5px] border-solid flex flex-col lg:flex-row items-stretch overflow-hidden relative rounded-[16px] w-full max-w-[1360px] mx-auto z-10">
        {/* Left Rail */}
        <div className="border-[#232b3a] border-b lg:border-b-0 lg:border-r border-solid flex flex-col gap-[24px] items-start p-6 md:p-[32px] w-full lg:w-[440px] shrink-0">
          
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#aab3c4] text-[12px] tracking-[0.5px]">
              SELECT API OR WORKLOAD
            </p>
            <div className="bg-[#1b2330] border border-[#232b3a] border-solid flex items-center justify-between p-[12px] rounded-[8px] w-full cursor-pointer hover:bg-[#232b3a] transition-colors">
              <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-white">
                Live Transcoding Ingest
              </p>
              <p className="text-[#aab3c4] text-[10px]">
                ▼
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#aab3c4] text-[12px] tracking-[0.5px]">
              ENVIRONMENT
            </p>
            <div className="flex gap-[8px] items-start w-full">
              <button className="bg-[#1b2330] hover:bg-[#232b3a] flex flex-[1_0_0] items-center justify-center px-[16px] py-[10px] rounded-[6px] transition-colors">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[14px] text-white">
                  Sandbox
                </span>
              </button>
              <button className="bg-[#34d4ca] hover:bg-[#2ed2c8] flex flex-[1_0_0] items-center justify-center px-[16px] py-[10px] rounded-[6px] transition-colors">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[14px] text-[#0a0d14]">
                  Production
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#aab3c4] text-[12px] tracking-[0.5px]">
              PRESSURE CLASS
            </p>
            <div className="flex flex-wrap gap-[8px] items-start w-full">
              <div className="bg-[#4a8cfb] flex items-center justify-center px-[14px] py-[8px] rounded-[20px] cursor-pointer">
                <span className="font-[family-name:var(--font-inter)] font-bold text-[12px] text-white">
                  Write/Mutation
                </span>
              </div>
              <div className="bg-[#1b2330] hover:bg-[#232b3a] flex items-center justify-center px-[14px] py-[8px] rounded-[20px] cursor-pointer transition-colors border border-[#232b3a]">
                <span className="font-[family-name:var(--font-inter)] font-normal text-[12px] text-white">
                  Read-Only
                </span>
              </div>
              <div className="bg-[#1b2330] hover:bg-[#232b3a] flex items-center justify-center px-[14px] py-[8px] rounded-[20px] cursor-pointer transition-colors border border-[#232b3a]">
                <span className="font-[family-name:var(--font-inter)] font-normal text-[12px] text-white">
                  Bulk Export
                </span>
              </div>
              <div className="bg-[#1b2330] hover:bg-[#232b3a] flex items-center justify-center px-[14px] py-[8px] rounded-[20px] cursor-pointer transition-colors border border-[#232b3a]">
                <span className="font-[family-name:var(--font-inter)] font-normal text-[12px] text-white">
                  Real-Time Metadata
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col flex-1 items-center justify-center p-6 md:p-[40px] relative w-full bg-[rgba(16,21,30,0.5)]">
          <div className="bg-[#1b2330] border border-[#232b3a] border-solid flex flex-col gap-[24px] items-start max-w-[600px] p-6 md:p-[32px] rounded-[12px] w-full shadow-2xl">
            <div className="flex items-center justify-between w-full">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#34d4ca] text-[12px] tracking-[1px] uppercase">
                MUTATION INGEST RATE
              </p>
              <div className="bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)] border-solid flex items-center px-[8px] py-[4px] rounded-[4px]">
                <p className="font-[family-name:var(--font-inter)] font-semibold text-[#34d4ca] text-[11px] tracking-wide uppercase">
                  PUBLISHED
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-4xl md:text-[32px]">
                  500
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] font-normal text-[#aab3c4] text-base md:text-[16px]">
                  requests / 10 seconds
                </span>
              </div>
              <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[14px] leading-relaxed">
                Scoped per API credential pair. Counted in a sliding-window duration of 10s.
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-[#232b3a] via-[#374151] to-[#232b3a]" />

            <div className="flex items-start justify-between w-full mt-2">
              <div className="flex flex-col gap-[4px] items-start">
                <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[11px] tracking-wide">
                  EFFECTIVE DATE
                </p>
                <p className="font-[family-name:var(--font-space-grotesk)] text-[13px] text-white">
                  January 15, 2026
                </p>
              </div>
              <div className="flex flex-col gap-[4px] items-end">
                <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[11px] tracking-wide">
                  NEXT CRITICAL PATH
                </p>
                <a href="#" className="font-[family-name:var(--font-space-grotesk)] text-[#4a8cfb] text-[13px] hover:underline decoration-1 underline-offset-4 transition-all">
                  View SDK Retry logic &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
