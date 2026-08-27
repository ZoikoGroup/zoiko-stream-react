import React from 'react';
import Image from 'next/image';

export default function Section5Observation() {
  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full overflow-hidden bg-[#0a0d14]">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <Image alt="" className="object-cover" src="/images/developers-rate-limits/sec5-bg.png" fill />
        <div className="absolute bg-[rgba(10,13,20,0.88)] inset-0" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
          See where you stand in real time.
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] md:leading-[28px] text-[#aab3c4] text-base md:text-[18px] w-full">
          Distinguish the published contract from a runtime observation. Live evidence is only useful when its source and freshness are explicit.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[48px] items-start relative z-10 w-full">
        {/* Left Column Data Feed */}
        <div className="flex flex-[1_0_0] flex-col gap-[16px] items-start w-full">
          {/* Card 1 */}
          <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex items-center justify-between p-[20px] rounded-[8px] w-full hover:bg-[rgba(23,31,45,0.8)] transition-colors">
            <div className="flex flex-col gap-[4px] items-start">
              <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[11px] uppercase tracking-wide">
                Remaining Budget
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[16px] text-white">
                482 / 500 requests
              </p>
            </div>
            <div className="bg-[#1b2330] flex items-start px-[10px] py-[4px] rounded-[4px]">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#34d4ca] text-[11px] uppercase">
                Known Context
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex items-center justify-between p-[20px] rounded-[8px] w-full hover:bg-[rgba(23,31,45,0.8)] transition-colors">
            <div className="flex flex-col gap-[4px] items-start">
              <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[11px] uppercase tracking-wide">
                Reset Evidence
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[16px] text-white">
                Available in headers (x-rate-limit-reset)
              </p>
            </div>
            <div className="bg-[#1b2330] flex items-start px-[10px] py-[4px] rounded-[4px]">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#10b981] text-[11px] uppercase">
                Present
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex items-center justify-between p-[20px] rounded-[8px] w-full hover:bg-[rgba(23,31,45,0.8)] transition-colors">
            <div className="flex flex-col gap-[4px] items-start">
              <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[11px] uppercase tracking-wide">
                Observed At
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[16px] text-white">
                2026-03-05 14:02:11.458z
              </p>
            </div>
            <div className="bg-[#1b2330] flex items-start px-[10px] py-[4px] rounded-[4px]">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#34d4ca] text-[11px] uppercase">
                Fresh (24ms ago)
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex items-center justify-between p-[20px] rounded-[8px] w-full hover:bg-[rgba(23,31,45,0.8)] transition-colors">
            <div className="flex flex-col gap-[4px] items-start">
              <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[11px] uppercase tracking-wide">
                Scope Match
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[16px] text-white">
                Credential aggregation target matched
              </p>
            </div>
            <div className="bg-[#1b2330] flex items-start px-[10px] py-[4px] rounded-[4px]">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#10b981] text-[11px] uppercase">
                Direct Match
              </p>
            </div>
          </div>
        </div>

        {/* Right Column Process Flow */}
        <div className="bg-[rgba(16,21,30,0.8)] border-[#232b3a] border-[1.5px] border-solid flex flex-col gap-[24px] items-start p-6 md:p-[40px] rounded-[16px] w-full lg:w-[480px]">
          <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[14px] text-white tracking-[1px] uppercase">
            FRESHNESS PRECEDENCE PATHWAY
          </p>
          
          <div className="flex flex-col gap-[16px] items-start w-full mt-2">
            
            <div className="flex gap-[16px] items-start w-full group">
              <div className="bg-[#34d4ca] flex items-center justify-center opacity-80 rounded-[14px] w-[28px] h-[28px] shrink-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(52,212,202,0.3)]">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0a0d14] text-[12px]">
                  01
                </p>
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start w-full">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[15px] text-white group-hover:text-[#34d4ca] transition-colors">
                  Fresh & Matched
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[13px] leading-relaxed">
                  Highest precedence. Real-time headers align perfectly with local metrics.
                </p>
              </div>
            </div>

            <div className="flex gap-[16px] items-start w-full group">
              <div className="bg-[#4a8cfb] flex items-center justify-center opacity-80 rounded-[14px] w-[28px] h-[28px] shrink-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(74,140,251,0.3)]">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0a0d14] text-[12px]">
                  02
                </p>
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start w-full">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[15px] text-white group-hover:text-[#4a8cfb] transition-colors">
                  Stale with warning
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[13px] leading-relaxed">
                  Fallback. Using cached budget info with an explicit stale telemetry state.
                </p>
              </div>
            </div>

            <div className="flex gap-[16px] items-start w-full group">
              <div className="bg-[#8b5cf6] flex items-center justify-center opacity-80 rounded-[14px] w-[28px] h-[28px] shrink-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0a0d14] text-[12px]">
                  03
                </p>
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start w-full">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[15px] text-white group-hover:text-[#8b5cf6] transition-colors">
                  Unavailable / Unknown
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[13px] leading-relaxed">
                  Critical warning. Remote telemetry headers are absent. Reverting to static defaults.
                </p>
              </div>
            </div>

            <div className="flex gap-[16px] items-start w-full group">
              <div className="bg-[#34d4ca] flex items-center justify-center opacity-80 rounded-[14px] w-[28px] h-[28px] shrink-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(52,212,202,0.3)]">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0a0d14] text-[12px]">
                  04
                </p>
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start w-full">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[15px] text-white group-hover:text-[#34d4ca] transition-colors">
                  Conflict Scenarios
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[13px] leading-relaxed">
                  Conflict detected between contract promise and evidence. Resolving to safest minimum.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
