import Image from "next/image";

export default function LiveOpsSection() {
  const subsystems = [
    { name: "SOURCE STREAM", status: "Receiving ✓", health: "HEALTHY", healthBg: "bg-[#10b981]/10", healthColor: "text-[#10b981]", healthBorder: "border-[#10b981]/20" },
    { name: "PROGRAM PROCESSING", status: "Live ✓", health: "HEALTHY", healthBg: "bg-[#10b981]/10", healthColor: "text-[#10b981]", healthBorder: "border-[#10b981]/20" },
    { name: "ACCESS CONTROL GATE", status: "Verified ✓", health: "HEALTHY", healthBg: "bg-[#10b981]/10", healthColor: "text-[#10b981]", healthBorder: "border-[#10b981]/20" },
    { name: "DELIVERY NETWORKS", status: "Healthy ✓", health: "HEALTHY", healthBg: "bg-[#10b981]/10", healthColor: "text-[#10b981]", healthBorder: "border-[#10b981]/20" },
    { name: "TRACK CAPTIONS", status: "Active ✓", health: "HEALTHY", healthBg: "bg-[#10b981]/10", healthColor: "text-[#10b981]", healthBorder: "border-[#10b981]/20" },
    { name: "ARCHIVAL RECORDING", status: "Recording ✓", health: "HEALTHY", healthBg: "bg-[#10b981]/10", healthColor: "text-[#10b981]", healthBorder: "border-[#10b981]/20" },
    { name: "OPERATIONAL INCIDENTS", status: "None Active", health: "HEALTHY", healthBg: "bg-[#10b981]/10", healthColor: "text-[#10b981]", healthBorder: "border-[#10b981]/20" },
    { name: "TELEMETRY FRESHNESS", status: "12s ago", health: "INFO", healthBg: "bg-[#4a8cfb]/10", healthColor: "text-[#4a8cfb]", healthBorder: "border-[#4a8cfb]/20" }
  ];

  const regionTelemetry = [
    {
      region: "North America",
      state: "HEALTHY", stateColor: "text-[#10b981]", stateBg: "bg-[#10b981]/10", stateBorder: "border-[#10b981]/20",
      health: "Normal (0.01% buffer)", healthColor: "text-[#10b981]",
      captions: "Active",
      incidents: "NONE", incColor: "text-[#10b981]", incBg: "bg-[#10b981]/10", incBorder: "border-[#10b981]/20",
      updated: "15s ago"
    },
    {
      region: "Europe (West)",
      state: "HEALTHY", stateColor: "text-[#10b981]", stateBg: "bg-[#10b981]/10", stateBorder: "border-[#10b981]/20",
      health: "Normal (0.03% buffer)", healthColor: "text-[#10b981]",
      captions: "Active",
      incidents: "NONE", incColor: "text-[#10b981]", incBg: "bg-[#10b981]/10", incBorder: "border-[#10b981]/20",
      updated: "18s ago"
    },
    {
      region: "Asia-Pacific",
      state: "DEGRADED", stateColor: "text-[#f59e0b]", stateBg: "bg-[#f59e0b]/10", stateBorder: "border-[#f59e0b]/20",
      health: "Buffering reported (3.2%)", healthColor: "text-[#ef4444]",
      captions: "Active",
      incidents: "INVESTIGATING", incColor: "text-[#f59e0b]", incBg: "bg-[#f59e0b]/10", incBorder: "border-[#f59e0b]/20",
      updated: "8s ago"
    }
  ];

  const timelineLogs = [
    {
      time: "14:38:12 UTC",
      log: "[APAC-S] Triggered primary ingest buffer threshold alarm - Under investigation.",
      color: "text-[#0f1b2d]"
    },
    {
      time: "14:20:00 UTC",
      log: "[EU-W] Switch secondary fallback CDN pathway validated & active.",
      color: "text-[#10b981]"
    }
  ];

  return (
    <section className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#f8fafc]">
      {/* Background Image & Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0 mix-blend-multiply opacity-[0.8]">
        <Image
          src="/images/global-event-streaming/describe-bg.png"
          alt="Live Ops Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-[-209px] right-[-120px] w-[520px] h-[520px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-[-180px] top-[-54px] w-[420px] h-[420px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-1.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[56px] text-[#0f1b2d] text-[44px] tracking-[-1px] w-full">
          Know What Is Live, Degraded, Unknown, and Recovering
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#4f5e74] text-[18px] w-full max-w-[1000px]">
          One event can have different states across source, program, access, delivery, captions, recording and regions. The control surface must expose those differences and their freshness.
        </p>
      </div>

      <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full z-10">
        {/* Top Summary Row */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex items-center justify-between p-[20px] rounded-[12px] w-full">
          <div className="flex gap-[32px] items-center">
            <div className="flex gap-[8px] items-center">
              <span className="font-['Inter'] font-normal text-[#4f5e74] text-[14px] whitespace-nowrap">
                OVERALL EVENT STATE:
              </span>
              <div className="bg-[#10b981]/10 border border-[#10b981]/20 border-solid flex items-start px-[12px] py-[4px] rounded-[4px]">
                <span className="font-['Space_Grotesk'] font-bold text-[#10b981] text-[12px] whitespace-nowrap">
                  ● LIVE
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[2px] items-start whitespace-nowrap">
              <span className="font-['Inter'] font-normal text-[#4f5e74] text-[11px]">DURATION</span>
              <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[18px]">01:45:22</span>
            </div>
            <div className="flex flex-col gap-[2px] items-start whitespace-nowrap">
              <span className="font-['Inter'] font-normal text-[#4f5e74] text-[11px]">ACTIVE VIEWERS</span>
              <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[18px]">124.5K</span>
            </div>
          </div>
          <div className="flex gap-[8px] items-center">
            <div className="relative size-[8px]">
              <Image src="/images/global-event-streaming/ellipse-red.svg" alt="" fill />
            </div>
            <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[14px] whitespace-nowrap">
              ARCHIVE RECORDING ACTIVE
            </span>
          </div>
        </div>

        {/* Subsystem Health Grid */}
        <div className="grid grid-cols-4 gap-[12px] w-full">
          {subsystems.map((sub, idx) => (
            <div key={idx} className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col gap-[8px] items-start p-[16px] rounded-[8px]">
              <span className="font-['Inter'] font-normal text-[#4f5e74] text-[12px] whitespace-nowrap uppercase">
                {sub.name}
              </span>
              <div className="flex items-center justify-between w-full">
                <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[16px] whitespace-nowrap">
                  {sub.status}
                </span>
                <div className={`border border-solid flex items-start px-[12px] py-[4px] rounded-[4px] ${sub.healthBg} ${sub.healthBorder}`}>
                  <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] whitespace-nowrap ${sub.healthColor}`}>
                    {sub.health}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Delivery & Audience Telemetry */}
        <div className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[16px] items-start p-[20px] rounded-[12px] w-full">
          <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[18px] whitespace-nowrap">
            Regional Delivery & Audience Telemetry
          </h3>
          <div className="flex flex-col items-start w-full">
            <div className="bg-[#f8fafc] flex gap-[12px] items-start p-[10px] w-full">
              <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[12px] w-[180px]">Region Group</span>
              <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[12px] w-[140px]">Delivery State</span>
              <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[12px] w-[160px]">Viewer Health</span>
              <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[12px] w-[120px]">Captions</span>
              <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[12px] w-[180px]">Active Incidents</span>
              <span className="flex-1 font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[12px]">Last Updated</span>
            </div>
            
            {regionTelemetry.map((row, idx) => (
              <div key={idx} className="border-[#e2e8f0] border-b border-solid flex gap-[12px] items-center p-[10px] w-full">
                <span className="font-['Inter'] font-semibold text-[#0f1b2d] text-[13px] w-[180px]">{row.region}</span>
                <div className="flex items-start w-[140px]">
                  <div className={`border border-solid flex items-start px-[12px] py-[4px] rounded-[4px] ${row.stateBg} ${row.stateBorder}`}>
                    <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] whitespace-nowrap ${row.stateColor}`}>
                      {row.state}
                    </span>
                  </div>
                </div>
                <span className={`font-['Inter'] font-semibold text-[13px] w-[160px] ${row.healthColor}`}>{row.health}</span>
                <span className="font-['Inter'] font-normal text-[#4f5e74] text-[13px] w-[120px]">{row.captions}</span>
                <div className="flex items-start w-[180px]">
                  <div className={`border border-solid flex items-start px-[12px] py-[4px] rounded-[4px] ${row.incBg} ${row.incBorder}`}>
                    <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] whitespace-nowrap ${row.incColor}`}>
                      {row.incidents}
                    </span>
                  </div>
                </div>
                <span className="flex-1 font-['Inter'] font-normal text-[#4f5e74] text-[13px]">{row.updated}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Ops Timeline Log */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col gap-[12px] items-start p-[20px] rounded-[12px] w-full whitespace-nowrap">
          <h4 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[14px] uppercase">
            Recent Ops Timeline Log
          </h4>
          {timelineLogs.map((log, idx) => (
            <div key={idx} className="flex gap-[12px] items-start w-full">
              <span className="font-['IBM_Plex_Mono'] font-bold text-[#4f5e74] text-[12px]">
                {log.time}
              </span>
              <span className={`font-['Inter'] font-normal text-[13px] ${log.color}`}>
                {log.log}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
