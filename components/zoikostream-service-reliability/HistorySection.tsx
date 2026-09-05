import React from 'react';
const imgHistorySection = "/images/zoikostream-service-reliability/history-section-history-section.png";
const imgStatusDot = "/images/zoikostream-service-reliability/current-evidence-section-status-dot.svg";
const imgLine = "/images/zoikostream-service-reliability/history-section-line.svg";

export default function HistorySection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col gap-8 lg:gap-[48px] flex-wrap items-center px-6 lg:px-[112px] py-12 lg:py-[100px] relative w-full overflow-hidden" data-node-id="3842:3325" data-name="History-Section">
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHistorySection} />
        <div className="absolute z-0 bg-[rgba(10,15,26,0.85)] inset-0" />
      </div>
      <div className="flex flex-col gap-[56px] items-start px-6 xl:px-0 w-full max-w-[1247px] relative z-10">
      <div className="[word-break:break-word] flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="3842:3327" data-name="SectionHeader">
        <p className="font-sans font-bold font-bold leading-[48px] relative shrink-0 text-[#eef1f6] text-[38px] tracking-[-0.38px] w-full" data-node-id="3842:3328">
          Historical availability and reliability observations
        </p>
        <p className="font-sans font-normal font-normal leading-[28px] relative shrink-0 text-[#aab3c4] text-[18px] w-full" data-node-id="3842:3329">
          Source-backed periods and scope — no extrapolation, no cherry-picked windows.
        </p>
      </div>
      <div className="backdrop-blur-[8px] bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] shrink-0 w-full" data-node-id="3842:3330" data-name="TimelinePreviewBoard">
        <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3331" data-name="BoardHeader">
          <div className="flex gap-[12px] items-center relative shrink-0" data-node-id="3842:3332" data-name="BoardTitle">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#eef1f6] text-[20px] whitespace-nowrap" data-node-id="3842:3333">
              Historical Availability Monitor
            </p>
            <div className="bg-[rgba(0,212,170,0.08)] flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="3842:3334" data-name="status-chip">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3335" data-name="status-dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStatusDot} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#00d4aa] text-[11px] uppercase whitespace-nowrap" data-node-id="3842:3336">
                ACTIVE METHOD V1.4
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] font-mono font-normal leading-[normal] not-italic relative shrink-0 text-[#707a8c] text-[11px] whitespace-nowrap" data-node-id="3842:3337">
            SYSTEM SCOPE: CORE INGEST
          </p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-node-id="3842:3338" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine} />
          </div>
        </div>
        <div className="flex gap-[40px] items-center relative shrink-0 w-full" data-node-id="3842:3339" data-name="TimelineContent">
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full max-w-[340px]" data-node-id="3842:3340" data-name="MetricMeta">
            <div className="bg-[#232b3a] flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="3842:3341" data-name="PeriodPill">
              <p className="[word-break:break-word] font-sans font-medium font-medium leading-[normal] relative shrink-0 text-[#eef1f6] text-[13px] whitespace-nowrap" data-node-id="3842:3342">
                Observation Window: Q2 2026
              </p>
            </div>
            <div className="[word-break:break-word] flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-node-id="3842:3343" data-name="LargeMetric">
              <p className="font-sans font-bold font-bold leading-[66px] relative shrink-0 text-[#eef1f6] text-[56px]" data-node-id="3842:3344">
                99.9821%
              </p>
              <p className="font-mono font-normal leading-[normal] not-italic relative shrink-0 text-[#00d4aa] text-[11px] uppercase" data-node-id="3842:3345">
                AUDITED CORE INGEST UPTIME
              </p>
            </div>
            <p className="[word-break:break-word] font-sans font-normal font-normal leading-[16px] min-w-full relative shrink-0 text-[#707a8c] text-[12px] w-[min-content]" data-node-id="3842:3346">
              SLA boundary note: Historical observation is not contractual availability or service-credit eligibility.
            </p>
          </div>
          <div className="[word-break:break-word] flex flex-[1_0_0] gap-[16px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-node-id="3842:3347" data-name="HistoryBlocks">
            <div className="bg-[#232b3a] flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px p-[20px] relative rounded-[12px]" data-node-id="3842:3348" data-name="HistCard-1">
              <p className="font-mono font-normal not-italic relative shrink-0 text-[#00d4aa] text-[11px]" data-node-id="3842:3349">
                Q1 2026
              </p>
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#eef1f6] text-[24px]" data-node-id="3842:3350">
                99.9784%
              </p>
              <p className="font-sans font-normal font-normal relative shrink-0 text-[#aab3c4] text-[12px]" data-node-id="3842:3351">
                Target: 99.9500% (Met)
              </p>
            </div>
            <div className="bg-[#232b3a] flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px p-[20px] relative rounded-[12px]" data-node-id="3842:3352" data-name="HistCard-2">
              <p className="font-mono font-normal not-italic relative shrink-0 text-[#00d4aa] text-[11px]" data-node-id="3842:3353">
                Q4 2025
              </p>
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#eef1f6] text-[24px]" data-node-id="3842:3354">
                99.9912%
              </p>
              <p className="font-sans font-normal font-normal relative shrink-0 text-[#aab3c4] text-[12px]" data-node-id="3842:3355">
                Target: 99.9500% (Met)
              </p>
            </div>
            <div className="bg-[#232b3a] flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px p-[20px] relative rounded-[12px]" data-node-id="3842:3356" data-name="HistCard-3">
              <p className="font-mono font-normal not-italic relative shrink-0 text-[#00d4aa] text-[11px]" data-node-id="3842:3357">
                Q3 2025
              </p>
              <p className="font-sans font-bold font-bold relative shrink-0 text-[#eef1f6] text-[24px]" data-node-id="3842:3358">
                99.9620%
              </p>
              <p className="font-sans font-normal font-normal relative shrink-0 text-[#aab3c4] text-[12px]" data-node-id="3842:3359">
                Target: 99.9500% (Met)
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}