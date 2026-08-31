import React from 'react';

export default function Section13LaunchReadiness() {
  const checklist = [
    "Configure fallback token buckets for regional failover endpoints",
    "Verify client-side retry budgets with randomized jitter values",
    "Set critical database thread limits on production read-replicas",
    "Test circuit-breaker thresholds under simulated 300% traffic load",
    "Review priority queues for transactional versus analytical queries",
    "Examine idempotency key cache TTL expiry bounds in key-value store",
    "Enable automated backpressure feedback loops inside ingest services",
    "Verify real-time Prometheus alert routing on all 429 response outputs",
    "Configure webhook dead-letter queues with automated retry policies",
    "Audit third-party dependency timeouts under network disconnect events"
  ];

  const alerts = [
    {
      title: "Optimal Load",
      tag: "SAFE",
      color: "#34d4ca",
      bg: "rgba(52,212,202,0.1)",
      desc: "System is breathing smoothly. Capacity metrics resting well within designed R-value thresholds."
    },
    {
      title: "Graceful Degrade",
      tag: "WARNING",
      color: "#ffb020",
      bg: "rgba(255,176,32,0.1)",
      desc: "Non-critical telemetry pipelines dropping queries to guarantee order execution for commerce traffic."
    },
    {
      title: "High Alert Mode",
      tag: "CRITICAL",
      color: "#ff5252",
      bg: "rgba(255,82,82,0.1)",
      desc: "Concurrency locks nearing capacity limits. Automated pacing engines actively throttle secondary webhooks."
    },
    {
      title: "Circuit Tripped",
      tag: "TRIPPED",
      color: "#ff5252",
      bg: "rgba(255,82,82,0.1)",
      desc: "Downstream database limits crossed. Traffic diverted into offline message queue pipelines."
    },
    {
      title: "Recovery Sequence",
      tag: "RECOVERING",
      color: "#34d4ca",
      bg: "rgba(52,212,202,0.1)",
      desc: "Database connections established. Jittered release mechanisms gradual-feeding backlogged transactions."
    }
  ];

  return (
    <section className="flex flex-col gap-[64px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-[#04141a] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-rate-limits/sec13-bg.png" />
        <div className="absolute bg-[rgba(4,20,26,0.87)] inset-0" />
      </div>

      <div className="flex flex-col items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[40px] text-[#f8fafc] tracking-[-0.8px] w-full">
          Turn expected traffic into launch confidence
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-[48px] items-start relative z-10 w-full">
        {/* Left Column: Checklist */}
        <div className="bg-[#0a1e24] border border-[#1e293b] border-solid flex flex-[1_0_0] flex-col gap-[16px] items-start p-[32px] relative rounded-[12px] w-full lg:w-auto">
          <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#f8fafc] text-[20px] w-full">
            Launch Checklist
          </p>
          <div className="flex flex-col gap-[16px] w-full mt-2">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex gap-[12px] items-center relative w-full">
                <div className="bg-[#1e5e5a] flex items-center justify-center relative rounded-[4px] shrink-0 w-[20px] h-[20px]">
                  <div className="relative shrink-0 w-[12px] h-[12px]">
                    <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src="/images/developers-rate-limits/sec13-check.svg" />
                  </div>
                </div>
                <p className="flex-[1_0_0] font-[family-name:var(--font-inter)] font-normal leading-[1.5] relative text-[#94a3b8] text-[14px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Alerts */}
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full lg:w-[480px]">
          {alerts.map((alert, idx) => (
            <div key={idx} className="bg-[#0a1e24] border border-[#1e293b] border-solid flex flex-col gap-[8px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full hover:bg-[rgba(16,21,30,0.8)] transition-colors">
              <div className="flex items-center justify-between relative shrink-0 w-full">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[16px] whitespace-nowrap">
                  {alert.title}
                </p>
                <div className="border border-solid flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" style={{ backgroundColor: alert.bg, borderColor: alert.color }}>
                  <p className="font-[family-name:var(--font-inter)] font-bold leading-[normal] relative shrink-0 text-[11px] whitespace-nowrap" style={{ color: alert.color }}>
                    {alert.tag}
                  </p>
                </div>
              </div>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.4] relative shrink-0 text-[#94a3b8] text-[13px] w-full">
                {alert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
