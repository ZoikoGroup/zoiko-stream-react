import React from 'react';
import Image from 'next/image';

export default function Section6Planner() {
  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full z-0 opacity-40" src="/images/developers-rate-limits/sec4-bg.png" />
      
      <div className="absolute bottom-[-179px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-rate-limits/sec2-blob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-180px] w-[420px] h-[420px] top-[-54px] pointer-events-none z-0">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-rate-limits/sec2-blob1.svg" />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[38px] text-[#0f1b2d] tracking-[-0.8px] w-full">
          Model your demand against published limits.
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] md:leading-[28px] text-[#4f5e74] text-base md:text-[18px] w-full">
          Estimate expected traffic and compare it with authoritative capacity values before you launch.
        </p>
      </div>

      <div className="bg-[#f8fafc] border-[#e1e6eb] border-[1.5px] border-solid flex flex-col lg:flex-row items-stretch overflow-hidden relative rounded-[16px] w-full z-10 shadow-md">
        {/* Left Input Panel */}
        <div className="border-[#e1e6eb] border-b lg:border-b-0 lg:border-r border-solid flex flex-col gap-[24px] items-start p-6 md:p-[32px] w-full lg:w-[580px] shrink-0 bg-white/50 backdrop-blur-sm">
          <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0f1b2d] text-[16px] uppercase tracking-wide">
            SCENARIO TRAFFIC PARAMETERS
          </p>
          
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#4f5e74] text-[12px] uppercase">
              TARGET WORKLOAD
            </p>
            <div className="bg-white border border-[#e1e6eb] border-solid flex items-center p-[12px] rounded-[8px] w-full shadow-sm">
              <p className="font-[family-name:var(--font-inter)] font-normal text-[#0f1b2d] text-[14px]">
                Live Stream Ingest (Write)
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-[16px] items-start w-full">
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#4f5e74] text-[12px] uppercase">
                AVG DEMAND RATE
              </p>
              <div className="bg-white border border-[#e1e6eb] border-solid flex items-center p-[12px] rounded-[8px] w-full shadow-sm">
                <p className="font-[family-name:var(--font-inter)] font-normal text-[#0f1b2d] text-[14px]">
                  350 req/sec
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#4f5e74] text-[12px] uppercase">
                PEAK MULTIPLIER
              </p>
              <div className="bg-white border border-[#e1e6eb] border-solid flex items-center p-[12px] rounded-[8px] w-full shadow-sm">
                <p className="font-[family-name:var(--font-inter)] font-normal text-[#0f1b2d] text-[14px]">
                  1.5x spikes
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#4f5e74] text-[12px] uppercase">
              TIME HORIZON BUDGET
            </p>
            <div className="flex flex-wrap sm:flex-nowrap gap-[8px] items-start w-full">
              <button className="bg-white hover:bg-gray-50 border border-[#e1e6eb] border-solid flex flex-[1_0_0] items-center justify-center px-[12px] py-[8px] rounded-[20px] transition-colors">
                <span className="font-[family-name:var(--font-inter)] font-normal text-[#4f5e74] text-[12px] whitespace-nowrap">
                  10 Seconds
                </span>
              </button>
              <button className="bg-[#4a8cfb] flex flex-[1_0_0] items-center justify-center px-[12px] py-[8px] rounded-[20px] shadow-sm">
                <span className="font-[family-name:var(--font-inter)] font-bold text-white text-[12px] whitespace-nowrap">
                  1 Minute
                </span>
              </button>
              <button className="bg-white hover:bg-gray-50 border border-[#e1e6eb] border-solid flex flex-[1_0_0] items-center justify-center px-[12px] py-[8px] rounded-[20px] transition-colors">
                <span className="font-[family-name:var(--font-inter)] font-normal text-[#4f5e74] text-[12px] whitespace-nowrap">
                  1 Hour
                </span>
              </button>
              <button className="bg-white hover:bg-gray-50 border border-[#e1e6eb] border-solid flex flex-[1_0_0] items-center justify-center px-[12px] py-[8px] rounded-[20px] transition-colors">
                <span className="font-[family-name:var(--font-inter)] font-normal text-[#4f5e74] text-[12px] whitespace-nowrap">
                  1 Day
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="flex flex-[1_0_0] flex-col items-center justify-center p-6 md:p-[40px] relative w-full bg-[#f8fafc]">
          <div className="bg-white border border-[#e1e6eb] border-solid flex flex-col gap-[24px] items-start p-6 md:p-[32px] rounded-[12px] w-full shadow-lg">
            <div className="flex items-center justify-between w-full">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#4f5e74] text-[13px] tracking-wide uppercase">
                SCENARIO COMPLIANCE STATUS
              </p>
              <div className="bg-[#e8f8f5] flex items-center px-[8px] py-[4px] rounded-[4px]">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#10b981] text-[11px] uppercase tracking-wider">
                  WITHIN BUDGET
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0f1b2d] text-[28px]">
                Scenario demand is safe.
              </p>
              <p className="font-[family-name:var(--font-inter)] font-normal text-[#4f5e74] text-[14px] leading-relaxed">
                Estimated total usage of <strong className="font-bold text-[#0f1b2d]">21,000 requests / minute</strong> stays safely below the current contract threshold.
              </p>
            </div>
            
            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-[family-name:var(--font-inter)] font-bold text-[#4f5e74] text-[11px] uppercase tracking-wide">
                  SCENARIO HEADROOM
                </p>
                <p className="font-[family-name:var(--font-inter)] font-bold text-[#4f5e74] text-[11px] uppercase tracking-wide">
                  70% REMAINING
                </p>
              </div>
              <div className="bg-[#e1e6eb] h-[10px] w-full rounded-[100px] overflow-hidden">
                <div className="bg-[#4a8cfb] h-full w-[30%] transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(74,140,251,0.5)]" />
              </div>
            </div>
            
            <hr className="w-full border-t border-[#e1e6eb] border-dashed" />
            
            <p className="font-[family-name:var(--font-inter)] italic text-[#4f5e74] text-[12px]">
              Planner results are scenario math, not an SLA or operational guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
