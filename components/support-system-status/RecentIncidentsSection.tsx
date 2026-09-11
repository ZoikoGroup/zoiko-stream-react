import React from "react";
import Image from "next/image";

export default function RecentIncidentsSection() {
  const incidents = [
    {
      title: "CDN Edge Cache Refresh Delay",
      status: "RESOLVED",
      statusBg: "bg-[#10b981]/10",
      statusColor: "text-[#10b981]",
      description: "Aug 28, 2025 · Core platform was monitored for sync times across nodes.",
      duration: "Duration: 47 min"
    },
    {
      title: "Dashboard Loading Intermittent Errors",
      status: "RESOLVED",
      statusBg: "bg-[#10b981]/10",
      statusColor: "text-[#10b981]",
      description: "Aug 22, 2025 · Transmissions to the analytics nodes experienced packet loss.",
      duration: "Duration: 1h 23min"
    },
    {
      title: "Scheduled: Encoder Fleet Update v4.2",
      status: "COMPLETED",
      statusBg: "bg-[#4c86ff]/10",
      statusColor: "text-[#4c86ff]",
      description: "Aug 18, 2025 · Routine updates deployed seamlessly across all regional hosts.",
      duration: "Duration: 4h 00min"
    },
    {
      title: "Live Stream Start Failures — APAC",
      status: "RESOLVED",
      statusBg: "bg-[#10b981]/10",
      statusColor: "text-[#10b981]",
      description: "Aug 12, 2025 · Edge resolver failures locked stream initialization processes.",
      duration: "Duration: 2h 05min"
    }
  ];

  const metrics = [
    { name: "Live Streaming", value: "99.97%", width: "w-[99.97%]", color: "bg-[#10b981]", text: "text-[#10b981]" },
    { name: "Video Playback & CDN", value: "99.99%", width: "w-[99.99%]", color: "bg-[#10b981]", text: "text-[#10b981]" },
    { name: "API Gateway", value: "99.91%", width: "w-[99.91%]", color: "bg-[#f59e0b]", text: "text-[#f59e0b]" },
    { name: "Analytics", value: "99.95%", width: "w-[99.95%]", color: "bg-[#10b981]", text: "text-[#10b981]" }
  ];

  return (
    <div className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full h-auto overflow-hidden bg-white">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full z-0"
        src="/images/support-system-status/imgOperationalHistorySection.png"
      />
      
      {/* Background blobs */}
      <div className="absolute bottom-px right-[-153px] w-[520px] h-[520px] z-0 pointer-events-none">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src="/images/support-system-status/imgBgBlob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-140px] top-[-83px] w-[420px] h-[420px] z-0 pointer-events-none">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src="/images/support-system-status/imgBgBlob1.svg" />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-sans font-bold leading-[48px] text-[#0a0d13] text-[38px] w-full">
          Recent Incidents & Availability
        </h2>
        <p className="font-sans font-normal leading-[28.8px] text-[#4f5e74] text-[18px] w-full">
          Chronological public incident and maintenance records with transparent measurement methodology.
        </p>
      </div>

      <div className="flex gap-[48px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <div className="flex flex-1 flex-col gap-[16px] items-start min-w-px relative">
          {incidents.map((incident, idx) => (
            <div key={idx} className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex items-center justify-between p-[20px] relative rounded-[8px] w-full">
              <div className="flex flex-col gap-[4px] items-start relative w-[500px]">
                <div className="flex gap-[12px] items-center relative">
                  <h3 className="font-sans font-bold leading-none text-[#0a0d13] text-[16px] whitespace-nowrap">
                    {incident.title}
                  </h3>
                  <div className={`${incident.statusBg} flex items-start px-[8px] py-[2px] relative rounded-[4px]`}>
                    <span className={`font-mono font-bold leading-none ${incident.statusColor} text-[9px] whitespace-nowrap`}>
                      {incident.status}
                    </span>
                  </div>
                </div>
                <p className="font-sans font-normal leading-normal text-[#4f5e74] text-[13px] whitespace-nowrap">
                  {incident.description}
                </p>
              </div>
              <span className="font-mono leading-none text-[#9ca3af] text-[13px] whitespace-nowrap">
                {incident.duration}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[480px]">
          <h3 className="font-sans font-bold leading-none text-[#0a0d13] text-[18px] whitespace-nowrap">
            Availability (Rolling 30 Days)
          </h3>
          
          <div className="flex flex-col gap-[20px] items-start relative w-full">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-[8px] items-start relative w-full">
                <div className="flex items-start justify-between leading-none relative text-[14px] w-full whitespace-nowrap">
                  <span className="font-sans font-medium text-[#0a0d13]">
                    {metric.name}
                  </span>
                  <span className={`font-mono font-bold ${metric.text}`}>
                    {metric.value}
                  </span>
                </div>
                <div className="bg-[#e2e8f0] flex h-[8px] items-start overflow-hidden relative rounded-[4px] w-full">
                  <div className={`${metric.color} h-full relative ${metric.width}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="h-px relative w-full bg-[#e2e8f0]" />

          <p className="font-sans font-normal leading-[18px] text-[#4f5e74] text-[12px]">
            Measurement window: rolling 30 days. Methodology v2.1. Excludes scheduled maintenance windows. Detailed reporting metrics are available on customized corporate billing instances.
          </p>
        </div>
      </div>

      <div className="flex items-start justify-center pt-[24px] relative z-10 w-full max-w-[1216px] mx-auto">
        <button className="border border-[#0a0d13] border-solid flex items-center justify-center px-[32px] py-[14px] relative rounded-[8px] hover:bg-[#0a0d13]/5 transition-colors">
          <span className="font-sans font-bold leading-none text-[#0a0d13] text-[15px] whitespace-nowrap">
            View Full History
          </span>
        </button>
      </div>
    </div>
  );
}
