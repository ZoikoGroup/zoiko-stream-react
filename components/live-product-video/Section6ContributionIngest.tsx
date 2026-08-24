import React from 'react';

const imgSectionBg = "/images/live-product-video/contribution-ingest-section-bg.png";
const imgBgBlob1 = "/images/live-product-video/contribution-ingest-bg-blob-1.svg";
const imgBgBlob2 = "/images/live-product-video/contribution-ingest-bg-blob-2.svg";

const TABLE_ROWS = [
  { state: "Not Expected", meaning: "No stream is configured or expected on this endpoint.", behavior: "Display offline placeholder, hide action triggers.", tone: "neutral" as const },
  { state: "Expected", meaning: "A stream is registered but connection has not been initialized.", behavior: "Show standby poster. Listen for active webhook.", tone: "neutral" as const },
  { state: "Connecting", meaning: "Negotiation is active (SDP exchange, ICE connection).", behavior: "Show connecting animation. Timeout after 15 seconds.", tone: "neutral" as const },
  { state: "Receiving", meaning: "Active RTP stream payload is successfully arriving.", behavior: "Transition player to active stream. Render telemetry.", tone: "teal" as const },
  { state: "Degraded", meaning: "Payload received with high packet loss or severe jitter.", behavior: "Fallback to lower bitrate. Warn operations dashboard.", tone: "neutral" as const },
  { state: "Lost", meaning: "RTP delivery halted abruptly without standard termination.", behavior: "Initiate hot standby loop. Prompt viewer retry UI.", tone: "neutral" as const },
  { state: "Unknown", meaning: "Internal pipeline status query timeout or error state.", behavior: "Treat as degraded. Query secondary status pathway.", tone: "neutral" as const },
  { state: "Ended", meaning: "Standard teardown sequence completed by source encoder.", behavior: "Present session recap, load VOD playback available.", tone: "neutral" as const },
];

const METRICS = [
  { label: "Source Label", value: "cam-production-main-01", tone: "default" as const },
  { label: "Environment", value: "PROD-US-EAST", tone: "default" as const },
  { label: "Last Transition", value: "2026-03-24 14:02:11", tone: "default" as const },
  { label: "Active Alerts", value: "0 detected", tone: "red" as const },
];

export default function Section6ContributionIngest() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-34px] right-[-116px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[42px] leading-[1.19] tracking-[-1px] m-0 w-full">
            Show source truth in real time
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[1.56] m-0 w-full">
            A product team must know whether media is actually arriving.
          </p>
        </div>

        <div className="bg-white border-[1.5px] border-[#e1e6eb] border-solid rounded-[16px] w-full overflow-x-auto">
          <div className="min-w-[820px]">
            <div className="bg-[#f8fafc] border-b-2 border-[#e1e6eb] border-solid flex gap-[16px] items-start px-[24px] py-[16px] w-full">
              <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 w-[200px] shrink-0">Source State</p>
              <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 flex-1 min-w-0">Meaning</p>
              <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 flex-1 min-w-0">UI / Recovery Behavior</p>
            </div>
            {TABLE_ROWS.map((row, index) => (
              <div
                key={row.state}
                className={`flex gap-[16px] items-center px-[24px] py-[16px] w-full ${index % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} ${
                  index < TABLE_ROWS.length - 1 ? "border-b border-[#e1e6eb] border-solid" : ""
                }`}
              >
                <div className="w-[200px] shrink-0">
                  <div className={`rounded-full px-[10px] py-[4px] inline-flex items-center justify-center ${row.tone === "teal" ? "bg-[rgba(52,212,202,0.1)]" : "bg-[#e2e8f0]"}`}>
                    <p className={`font-sans font-bold text-[11px] tracking-[0.5px] uppercase m-0 whitespace-nowrap ${row.tone === "teal" ? "text-[#34d4ca]" : "text-[#4f5e74]"}`}>
                      {row.state}
                    </p>
                  </div>
                </div>
                <p className="font-inter font-normal text-[#4f5e74] text-[14px] leading-[1.57] m-0 flex-1 min-w-0">{row.meaning}</p>
                <p className="font-inter font-normal text-[#4f5e74] text-[14px] leading-[1.57] m-0 flex-1 min-w-0">{row.behavior}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid rounded-[16px] p-[24px] lg:p-[32px] flex flex-col gap-[24px] items-start w-full">
          <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-0 items-start sm:items-center justify-between w-full">
            <div className="flex flex-wrap gap-[16px] items-center">
              <p className="font-sans font-bold text-[#0f1b2d] text-[18px] m-0 whitespace-nowrap">Source Health Monitor</p>
              <div className="bg-[rgba(52,212,202,0.1)] rounded-full px-[10px] py-[4px]">
                <p className="font-sans font-bold text-[#34d4ca] text-[11px] tracking-[0.5px] uppercase m-0 whitespace-nowrap">Active</p>
              </div>
            </div>
            <p className="font-sans font-bold text-[#34d4ca] text-[14px] underline m-0 whitespace-nowrap cursor-pointer">View event history</p>
          </div>

          <div className="h-px w-full bg-[#e1e6eb]" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
            {METRICS.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-[8px] items-start min-w-0">
                <p className="font-sans font-bold text-[#4f5e74] text-[12px] uppercase m-0 whitespace-nowrap">{metric.label}</p>
                <p className={`font-inter font-semibold text-[16px] m-0 w-full ${metric.tone === "red" ? "text-[#e53e3e]" : "text-[#0f1b2d]"}`}>{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
