import Image from "next/image";

export default function AnalyticsReviewSection() {
  const kpis = [
    { label: "Event Delivery Health", value: "98.2%", status: "OPTIMAL", bg: "bg-[#10b981]/10", border: "border-[#10b981]/25", color: "text-[#10b981]" },
    { label: "Playback Start Success", value: "99.1%", status: "EXCELLENT", bg: "bg-[#10b981]/10", border: "border-[#10b981]/25", color: "text-[#10b981]" },
    { label: "Avg Buffer Ratio", value: "0.3%", status: "STABLE", bg: "bg-[#10b981]/10", border: "border-[#10b981]/25", color: "text-[#10b981]" },
    { label: "Caption Track Usage", value: "67%", status: "HIGH", bg: "bg-[#4a8cfb]/10", border: "border-[#4a8cfb]/25", color: "text-[#4a8cfb]" },
    { label: "Replay Continuation", value: "42%", status: "ACTIVE", bg: "bg-[#4a8cfb]/10", border: "border-[#4a8cfb]/25", color: "text-[#4a8cfb]" },
    { label: "Incidents Resolved", value: "3 / 3", status: "CLOSED", bg: "bg-[#10b981]/10", border: "border-[#10b981]/25", color: "text-[#10b981]" }
  ];

  const regions = [
    { name: "North America", health: "99.4%", healthColor: "text-[#10b981]", errors: "0.05%", buffer: "0.1%", caption: "52%", views: "145K" },
    { name: "Western Europe", health: "98.9%", healthColor: "text-[#10b981]", errors: "0.08%", buffer: "0.2%", caption: "61%", views: "112K" },
    { name: "Asia-Pacific", health: "96.3%", healthColor: "text-[#f59e0b]", errors: "0.45%", buffer: "0.8%", caption: "78%", views: "89K", warn: true }
  ];

  const actions = [
    "Review Asia-Pacific buffering reports",
    "Update caption SLA for next event",
    "Archive event telemetry evidence"
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#0a0d14]">
      {/* Background Image & Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/global-event-streaming/analytics-bg.png"
          alt="Analytics Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1b2d]/90" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[56px] text-white text-[44px] tracking-[-1px] w-full">
          Review the Event by Operational Evidence, <br /> Not Vanity Geography
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#aab3c4] text-[18px] w-full max-w-[1000px]">
          Use aggregate event, playback, region-group, accessibility and replay evidence to identify delivery issues and operational improvements. Metric availability is governed by the Analytics Registry.
        </p>
      </div>

      <div className="flex gap-[16px] items-start relative shrink-0 w-full z-10">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-[#10151e]/80 border border-[#232b3a] border-solid flex flex-1 flex-col gap-[8px] items-start p-[20px] rounded-[12px]">
            <span className="font-['Inter'] font-normal text-[#aab3c4] text-[13px] whitespace-nowrap">
              {kpi.label}
            </span>
            <span className="font-['Space_Grotesk'] font-bold text-[28px] text-white whitespace-nowrap">
              {kpi.value}
            </span>
            <div className={`${kpi.bg} border ${kpi.border} border-solid flex items-start px-[12px] py-[4px] rounded-[4px]`}>
              <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] uppercase whitespace-nowrap ${kpi.color}`}>
                {kpi.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-[32px] items-start relative shrink-0 w-full z-10">
        {/* Region-Group Performance Table */}
        <div className="bg-[#10151e]/80 border border-[#232b3a] border-solid flex flex-1 flex-col gap-[16px] items-start p-[24px] rounded-[16px]">
          <h3 className="font-['Space_Grotesk'] font-bold text-[18px] text-white whitespace-nowrap">
            Region-Group Performance
          </h3>
          <div className="flex flex-col gap-[12px] items-start w-full">
            <div className="border-[#232b3a] border-b border-solid flex items-start pb-[8px] w-full">
              <span className="font-['Space_Grotesk'] font-bold text-[#aab3c4] text-[12px] w-[130px]">Region Group</span>
              <span className="font-['Space_Grotesk'] font-bold text-[#aab3c4] text-[12px] w-[110px]">Delivery Health</span>
              <span className="font-['Space_Grotesk'] font-bold text-[#aab3c4] text-[12px] w-[110px]">Errors</span>
              <span className="font-['Space_Grotesk'] font-bold text-[#aab3c4] text-[12px] w-[90px]">Buffering</span>
              <span className="font-['Space_Grotesk'] font-bold text-[#aab3c4] text-[12px] w-[100px]">Caption Use</span>
              <span className="flex-1 font-['Space_Grotesk'] font-bold text-[#aab3c4] text-[12px]">Views</span>
            </div>
            
            {regions.map((reg, idx) => (
              <div key={idx} className="flex items-center w-full">
                <span className="font-['Inter'] font-semibold text-white text-[13px] w-[130px]">{reg.name}</span>
                <span className={`font-['Inter'] font-normal text-[13px] w-[110px] ${reg.healthColor}`}>{reg.health}</span>
                <span className={`font-['Inter'] font-normal text-[13px] w-[110px] ${reg.warn ? 'text-[#f59e0b]' : 'text-[#aab3c4]'}`}>{reg.errors}</span>
                <span className={`font-['Inter'] font-normal text-[13px] w-[90px] ${reg.warn ? 'text-[#f59e0b]' : 'text-[#aab3c4]'}`}>{reg.buffer}</span>
                <span className="font-['Inter'] font-normal text-[#aab3c4] text-[13px] w-[100px]">{reg.caption}</span>
                <span className="flex-1 font-['Inter'] font-normal text-white text-[13px]">{reg.views}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Event Actions & Privacy Guarantee */}
        <div className="flex flex-col gap-[24px] items-start w-[420px]">
          <div className="bg-[#10151e]/80 border border-[#232b3a] border-solid flex flex-col gap-[16px] items-start p-[24px] rounded-[16px] w-full">
            <h3 className="font-['Space_Grotesk'] font-bold text-[18px] text-white whitespace-nowrap">
              Post-Event Actions
            </h3>
            {actions.map((action, idx) => (
              <div key={idx} className="flex gap-[12px] items-center">
                <div className="bg-[#4ecdc4] flex items-center justify-center rounded-[4px] size-[20px] shrink-0">
                  <div className="relative size-[12px]">
                    <Image src="/images/global-event-streaming/check-teal.svg" alt="" fill />
                  </div>
                </div>
                <span className="font-['Inter'] font-normal text-[14px] text-white whitespace-nowrap">
                  {action}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-[#f59e0b]/5 border border-[#f59e0b]/30 border-solid flex flex-col gap-[8px] items-start p-[20px] rounded-[12px] w-full">
            <span className="font-['Space_Grotesk'] font-bold text-[#f59e0b] text-[13px] uppercase whitespace-nowrap">
              Privacy Guarantee
            </span>
            <p className="font-['Inter'] font-normal leading-[18px] text-[#aab3c4] text-[12px]">
              All metrics are aggregate. No individual viewer scoring, nationality inference, or sensitive profiling. Verified by telemetry policy auditing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
