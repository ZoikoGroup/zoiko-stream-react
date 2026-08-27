import React from 'react';

export default function Section4Components() {
  const components = [
    {
      name: "Video Ingest",
      group: "Media Pipeline",
      status: "Operational",
      statusColor: "#10b981",
      updated: "1 min ago",
      link: "https://status.zoikostream.com/components/video-ingest"
    },
    {
      name: "Playback CDN",
      group: "Edge Delivery",
      status: "Operational",
      statusColor: "#10b981",
      updated: "2 mins ago",
      link: "https://status.zoikostream.com/components/playback-cdn"
    },
    {
      name: "Control Plane API",
      group: "System Gateway",
      status: "Operational",
      statusColor: "#10b981",
      updated: "1 min ago",
      link: "https://status.zoikostream.com/components/control-plane-api"
    },
    {
      name: "Asset Processing",
      group: "VOD System",
      status: "Degraded Performance",
      statusColor: "#f59e0b",
      updated: "5 mins ago",
      link: "https://status.zoikostream.com/components/asset-processing"
    },
    {
      name: "Live Transcoding",
      group: "Media Pipeline",
      status: "Operational",
      statusColor: "#10b981",
      updated: "1 min ago",
      link: "https://status.zoikostream.com/components/live-transcoding"
    },
    {
      name: "Analytics Pipeline",
      group: "Insights Platform",
      status: "Operational",
      statusColor: "#10b981",
      updated: "3 mins ago",
      link: "https://status.zoikostream.com/components/analytics-pipeline"
    }
  ];

  return (
    <section className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-system-status/sec4-bg.png" />
      </div>

      <div className="flex flex-col gap-[40px] items-start relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.8px] w-full">
            Component status.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#4f5e74] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
            Deterministic metrics for individual platform subsystems. Switch between regions to view local system nodes.
          </p>
        </div>

        <div className="border border-[#e2e8f0] bg-[#ffffff] border-solid flex flex-col items-start relative rounded-[12px] w-full overflow-x-auto shadow-sm">
          <div className="bg-[#f8fafc] border-[#e2e8f0] border-b border-solid flex gap-[12px] items-center p-[20px] relative w-full min-w-[800px]">
            <p className="flex-[1_0_0] font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] min-w-px relative text-[#0f1b2d] text-[13px] uppercase tracking-wide">
              Component / Service
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[13px] uppercase tracking-wide w-[200px] shrink-0">
              Parent Group
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[13px] uppercase tracking-wide w-[180px] shrink-0">
              Status
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[13px] uppercase tracking-wide w-[160px] shrink-0">
              Last Sync
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[13px] text-right uppercase tracking-wide w-[120px] shrink-0">
              Action
            </p>
          </div>

          <div className="flex flex-col w-full min-w-[800px]">
            {components.map((comp, idx) => (
              <div 
                key={idx} 
                className={`flex gap-[12px] items-center p-[20px] relative w-full hover:bg-gray-50 transition-colors duration-200 ${idx !== components.length - 1 ? 'border-[#e2e8f0] border-b border-solid' : ''}`}
              >
                <p className="flex-[1_0_0] font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] min-w-px relative text-[#0f1b2d] text-[15px]">
                  {comp.name}
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[normal] not-italic relative text-[#4f5e74] text-[14px] w-[200px] shrink-0">
                  {comp.group}
                </p>
                <div className="flex gap-[8px] items-center relative w-[180px] shrink-0">
                  <div 
                    className="relative shrink-0 w-[8px] h-[8px] rounded-full"
                    style={{ backgroundColor: comp.statusColor }}
                  />
                  <p 
                    className="font-[family-name:var(--font-inter)] font-medium leading-[normal] not-italic relative text-[14px] whitespace-nowrap"
                    style={{ color: comp.statusColor }}
                  >
                    {comp.status}
                  </p>
                </div>
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[normal] not-italic relative text-[#4f5e74] text-[13px] w-[160px] shrink-0">
                  {comp.updated}
                </p>
                <div className="flex items-start justify-end relative w-[120px] shrink-0">
                  <a 
                    className="font-[family-name:var(--font-inter)] font-medium leading-[normal] relative text-[#4a8cfb] text-[13px] whitespace-nowrap hover:underline underline-offset-2" 
                    href={comp.link} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
