import React from 'react';

export default function Section3HealthSummary() {
  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-system-status/sec3-bg.png" />
        <div className="absolute bg-[rgba(10,13,20,0.73)] inset-0" />
      </div>

      <div className="flex flex-col gap-[56px] relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
            Current platform health.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[1000px] mx-auto md:mx-0">
            An aggregate assessment of our globally active ingestion pipelines, edge distribution systems, and API instances.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[24px] items-start relative w-full">
          <div className="bg-[#111622] border-[#1e2638] border-[1.5px] border-solid flex flex-[1_0_0] flex-col gap-[24px] items-start p-[24px] md:p-[32px] relative rounded-[16px] w-full lg:w-auto">
            <div className="flex items-center justify-between relative w-full">
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#34d4ca] text-[14px] whitespace-nowrap">
                AGGREGATE INDEX
              </h3>
              <div className="bg-[rgba(16,185,129,0.1)] flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0">
                <span className="font-[family-name:var(--font-inter)] font-semibold leading-[normal] not-italic relative text-[#10b981] text-[11px] whitespace-nowrap">
                  CURRENT
                </span>
              </div>
            </div>
            
            <div className="flex gap-[16px] items-center relative w-full">
              <div className="relative shrink-0 w-[16px] h-[16px]">
                <img alt="" className="absolute inset-0 max-w-none w-full h-full" src="/images/developers-system-status/sec3-ellipse.svg" />
              </div>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[24px] md:text-[32px] text-white whitespace-nowrap">
                Operational
              </p>
            </div>
            
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[22px] not-italic relative text-[#aab3c4] text-[14px] w-full">
              All monitored global regions are currently resolving video pipelines within our designed sub-second latency SLA limits. Ingestion channels are processing live input signals nominally.
            </p>
          </div>
          
          <div className="flex flex-col gap-[16px] items-start relative w-full lg:w-[380px] shrink-0">
            <div className="bg-[#111622] border border-[#1e2638] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] w-full">
              <p className="font-[family-name:var(--font-space-grotesk)] font-normal relative text-[#707a8c] text-[13px] uppercase tracking-wide">
                Monitored Services
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[28px] md:text-[32px] text-white">
                12 / 12
              </p>
              <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4] text-[12px]">
                Fully operational globally
              </p>
            </div>
            <div className="bg-[#111622] border border-[#1e2638] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] w-full">
              <p className="font-[family-name:var(--font-space-grotesk)] font-normal relative text-[#707a8c] text-[13px] uppercase tracking-wide">
                Active Incidents
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[28px] md:text-[32px] text-white">
                0
              </p>
              <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4] text-[12px]">
                No active degradations reported
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
