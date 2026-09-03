import React from "react";
import Image from "next/image";

export default function CurrentOperationalEventsSection() {
  return (
    <div className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full h-auto overflow-hidden bg-white">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full z-0"
        src="/images/support-system-status/imgOperationalHistorySection.png"
      />
      
      {/* Background blobs */}
      <div className="absolute bottom-[-137px] right-[-153px] w-[520px] h-[520px] z-0 pointer-events-none">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src="/images/support-system-status/imgBgBlob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-140px] top-[-88px] w-[420px] h-[420px] z-0 pointer-events-none">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src="/images/support-system-status/imgBgBlob1.svg" />
        </div>
      </div>

      <div className="flex flex-col items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-sans font-bold leading-[48px] text-[#0a0d13] text-[38px] w-full">
          Current Operational Events
        </h2>
      </div>

      <div className="flex gap-[32px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        {/* Incident Card 1 */}
        <div className="bg-[#0a0f1a] border-[#232b3a] border-[1.5px] border-solid flex flex-1 flex-col gap-[20px] items-start p-[32px] relative rounded-[16px]">
          <div className="flex items-center justify-between relative w-full">
            <div className="bg-[#fef3c7] flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px]">
              <span className="font-mono font-bold leading-none text-[#f59e0b] text-[11px] whitespace-nowrap">
                Degraded Performance
              </span>
            </div>
            <span className="font-mono leading-none text-[#707a8c] text-[12px] whitespace-nowrap">
              ID: INC-2025-0847
            </span>
          </div>

          <h3 className="font-sans font-bold leading-tight text-[#eef1f6] text-[22px] w-full">
            Elevated API Response Times — US-East Region
          </h3>
          <p className="font-sans font-normal leading-[22px] text-[#aab3c4] text-[14px] w-full">
            Some API requests in US-East are experiencing higher than normal latency. Video ingest and playback are unaffected.
          </p>

          <div className="h-px relative w-full bg-[#232b3a]" />

          <div className="flex flex-col gap-[12px] items-start w-full whitespace-nowrap">
            <div className="flex gap-[8px] items-center w-full flex-wrap">
              <span className="font-mono font-bold text-[#34d4ca] text-[11px] uppercase">
                AFFECTED COMPONENTS:
              </span>
              <span className="font-sans font-normal text-[#eef1f6] text-[13px]">
                API Gateway, Developer Tools
              </span>
            </div>
            <div className="flex gap-[8px] items-center w-full flex-wrap">
              <span className="font-mono font-bold text-[#34d4ca] text-[11px] uppercase">
                STARTED:
              </span>
              <span className="font-sans font-normal text-[#eef1f6] text-[13px]">
                September 1, 2025 12:15 UTC
              </span>
            </div>
          </div>

          <div className="bg-[#232b3a] flex flex-col gap-[8px] items-start p-[16px] relative rounded-[8px] w-full">
            <span className="font-mono font-bold leading-none text-[#f59e0b] text-[11px]">
              LATEST UPDATE (13:45 UTC):
            </span>
            <p className="font-sans font-normal leading-[18px] text-[#aab3c4] text-[13px] whitespace-normal">
              Engineering team has identified the root cause and is deploying a fix.
            </p>
          </div>

          <button className="flex items-center py-[12px] relative mt-auto group">
            <span className="font-sans font-bold leading-none text-[#34d4ca] text-[14px] whitespace-nowrap group-hover:underline">
              View Full Incident →
            </span>
          </button>
        </div>

        {/* Maintenance Card */}
        <div className="bg-[#0a0f1a] border-[#232b3a] border-[1.5px] border-solid flex flex-1 flex-col gap-[20px] h-full min-h-[438px] items-start p-[32px] relative rounded-[16px]">
          <div className="flex items-center justify-between relative w-full">
            <div className="bg-[#4c86ff]/10 flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px]">
              <span className="font-mono font-bold leading-none text-[#4c86ff] text-[11px] whitespace-nowrap">
                Scheduled
              </span>
            </div>
            <span className="font-mono leading-none text-[#707a8c] text-[12px] whitespace-nowrap">
              ID: MNT-2025-0312
            </span>
          </div>

          <h3 className="font-sans font-bold leading-tight text-[#eef1f6] text-[22px] w-full">
            Database Infrastructure Optimization
          </h3>
          <p className="font-sans font-normal leading-[22px] text-[#aab3c4] text-[14px] w-full">
            Brief intermittent delays in dashboard loading. No impact to live streaming or video playback.
          </p>

          <div className="h-px relative w-full bg-[#232b3a]" />

          <div className="flex flex-col gap-[12px] items-start w-full whitespace-nowrap">
            <div className="flex gap-[8px] items-center w-full flex-wrap">
              <span className="font-mono font-bold text-[#34d4ca] text-[11px] uppercase">
                MAINTENANCE WINDOW:
              </span>
              <span className="font-sans font-normal text-[#eef1f6] text-[13px]">
                Sept 3, 2025 02:00–06:00 UTC
              </span>
            </div>
            <div className="flex gap-[8px] items-center w-full flex-wrap">
              <span className="font-mono font-bold text-[#34d4ca] text-[11px] uppercase">
                AFFECTED SERVICES:
              </span>
              <span className="font-sans font-normal text-[#eef1f6] text-[13px]">
                Analytics Dashboard, Reporting
              </span>
            </div>
          </div>

          <div className="flex-grow" />

          <div className="flex gap-[16px] items-start w-full mt-auto">
            <button className="flex items-center py-[12px] relative group">
              <span className="font-sans font-bold leading-none text-[#34d4ca] text-[14px] whitespace-nowrap group-hover:underline">
                View Details →
              </span>
            </button>
            <button className="flex items-center py-[12px] relative group">
              <span className="font-sans font-bold leading-none text-[#aab3c4] text-[14px] whitespace-nowrap group-hover:text-white transition-colors">
                Set Reminder
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
