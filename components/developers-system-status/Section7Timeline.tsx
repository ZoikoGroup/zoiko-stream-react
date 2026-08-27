import React from 'react';

export default function Section7Timeline() {
  const events = [
    {
      time: "14:42 UTC",
      status: "Resolved",
      statusColor: "#10b981",
      statusBg: "rgba(16,185,129,0.1)",
      desc: "API query latency has returned to nominal levels. The affected query cache indexes have been fully rebuilt, and database load is stable. We will publish a full post-mortem analysis.",
      isFirst: true
    },
    {
      time: "14:25 UTC",
      status: "Mitigating",
      statusColor: "#4a8cfb",
      statusBg: "rgba(74,140,251,0.1)",
      desc: "We have deployed a hotfix database index patch to bypass the locked query path. Latency metrics are beginning to trend downwards in us-east-1.",
      isFirst: false
    },
    {
      time: "14:12 UTC",
      status: "Identified",
      statusColor: "#f59e0b",
      statusBg: "rgba(245,158,11,0.1)",
      desc: "We have identified a database table query locking issue triggered by a heavy batch analytics query. We are initiating fallback caching rules.",
      isFirst: false
    },
    {
      time: "14:00 UTC",
      status: "Investigating",
      statusColor: "#ef4444",
      statusBg: "rgba(239,68,68,0.1)",
      desc: "We are investigating elevated response times on our primary API query routes in us-east-1. Our developers are actively analyzing database performance.",
      isFirst: false,
      isLast: true
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full opacity-30" src="/images/developers-system-status/sec7-bg.png" />
      </div>

      <div className="flex flex-col gap-[56px] relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
            Incident timeline.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
            Detailed chronological logs of our most recent major resolved incident (#INC-2026-08).
          </p>
        </div>

        <div className="bg-[#111622] border border-[#232b3a] border-solid flex flex-col items-start relative rounded-[12px] w-full">
          <div className="flex flex-col gap-[12px] items-start p-[32px] md:p-[40px] w-full border-b border-[#232b3a]">
            <div className="flex items-start px-[8px] py-[2px] relative rounded-[4px] bg-[rgba(16,185,129,0.1)]">
              <p className="font-[family-name:var(--font-inter)] font-semibold leading-[normal] not-italic relative text-[#10b981] text-[11px] uppercase whitespace-nowrap">
                RESOLVED
              </p>
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-white text-[24px]">
              API Query Performance Degradation
            </h3>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[#aab3c4] text-[14px]">
              Affected components: Control Plane API (us-east-1) · Total duration: 42 minutes
            </p>
          </div>
          
          <div className="flex flex-col w-full relative p-[32px] md:p-[40px]">
            {events.map((event, idx) => (
              <div key={idx} className="flex gap-[20px] items-start relative w-full group">
                <div className="flex flex-col items-center relative w-[24px] md:w-[40px] shrink-0 h-full">
                  <div className="relative shrink-0 w-[12px] h-[12px] rounded-full z-10 mt-[4px]" style={{ backgroundColor: event.statusColor }}>
                  </div>
                  {!event.isLast && (
                    <div className="w-[2px] bg-[#232b3a] absolute top-[24px] bottom-[0px] left-1/2 transform -translate-x-1/2" />
                  )}
                </div>
                
                <div className={`flex flex-[1_0_0] flex-col gap-[8px] items-start relative ${event.isLast ? '' : 'pb-[48px]'}`}>
                  <div className="flex flex-wrap sm:flex-nowrap gap-[12px] items-center relative w-full">
                    <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[14px] text-white whitespace-nowrap">
                      {event.time}
                    </p>
                    <div 
                      className="flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0"
                      style={{ backgroundColor: event.statusBg }}
                    >
                      <p 
                        className="font-[family-name:var(--font-inter)] font-semibold leading-[normal] not-italic relative text-[11px] uppercase whitespace-nowrap"
                        style={{ color: event.statusColor }}
                      >
                        {event.status}
                      </p>
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] font-normal leading-[22px] not-italic relative text-[#aab3c4] text-[14px] w-full">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
