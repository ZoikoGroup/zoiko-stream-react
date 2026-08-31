import React from 'react';

export default function Section9HistoricalHealth() {
  const incidents = [
    {
      date: "Jan 29, 2026",
      title: "Edge playback packet jitter spikes in AP Southeast",
      affected: "Playback CDN",
      status: "RESOLVED",
      statusColor: "#10b981",
      statusBg: "rgba(16,185,129,0.1)",
      statusBorder: "rgba(16,185,129,0.3)"
    },
    {
      date: "Jan 12, 2026",
      title: "Rolling maintenance: Live Transcoding pipeline node upgrades",
      affected: "Live Transcoding",
      status: "MAINTENANCE",
      statusColor: "#f59e0b",
      statusBg: "rgba(245,158,11,0.12)",
      statusBorder: "rgba(245,158,11,0.3)"
    },
    {
      date: "Dec 15, 2025",
      title: "Asset Processing backlog processing load peak",
      affected: "Asset Processing",
      status: "RESOLVED",
      statusColor: "#10b981",
      statusBg: "rgba(16,185,129,0.1)",
      statusBorder: "rgba(16,185,129,0.3)"
    },
    {
      date: "Nov 30, 2025",
      title: "Video Ingest redundancy channel test",
      affected: "Video Ingest",
      status: "RESOLVED",
      statusColor: "#10b981",
      statusBg: "rgba(16,185,129,0.1)",
      statusBorder: "rgba(16,185,129,0.3)"
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full opacity-30" src="/images/developers-system-status/sec9-bg.png" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.7)]" />
      </div>

      <div className="flex flex-col gap-[56px] relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[24px] items-start relative w-full text-center md:text-left">
          <div className="flex flex-col gap-[16px] items-start relative w-full">
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
              Historical health.
            </h2>
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
              Detailed operational registry of past incidents, resolutions, and system performance metrics.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-[12px] items-start relative">
            {['All Components', 'Last 90 Days', 'All Event Types'].map((lbl, i) => (
              <div key={i} className="flex gap-[12px] items-center px-[16px] py-[8px] border border-[#232b3a] rounded-[6px] bg-[#111622] hover:bg-[#1e2638] cursor-pointer transition-colors">
                <span className="font-[family-name:var(--font-inter)] font-medium text-[13px] text-[#aab3c4]">{lbl}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="#34d4ca" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[16px] w-full relative">
          {incidents.map((inc, idx) => (
            <div key={idx} className="bg-[#111622] border border-[#232b3a] border-solid flex flex-col md:flex-row gap-[16px] items-start md:items-center justify-between p-[24px] relative rounded-[12px] w-full hover:border-[#34d4ca]/50 transition-colors duration-300">
              <div className="flex flex-col gap-[6px] items-start relative w-full">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#707a8c] text-[13px]">
                  {inc.date}
                </p>
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[18px] text-white">
                  {inc.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4] text-[14px]">
                  Affected: {inc.affected}
                </p>
              </div>
              
              <div 
                className="flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0 border border-solid"
                style={{ backgroundColor: inc.statusBg, borderColor: inc.statusBorder }}
              >
                <p 
                  className="font-[family-name:var(--font-inter)] font-semibold leading-[normal] not-italic relative text-[11px] uppercase whitespace-nowrap"
                  style={{ color: inc.statusColor }}
                >
                  {inc.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111622] border border-[#1e2638] border-solid flex gap-[12px] items-start md:items-center p-[20px] relative rounded-[12px] w-full mt-4">
          <div className="relative shrink-0 w-[20px] h-[20px] mt-1 md:mt-0">
            <img alt="Info" className="absolute inset-0 max-w-none w-full h-full" src="/images/developers-system-status/info.svg" />
          </div>
          <p className="flex-[1_0_0] font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[22px] not-italic relative text-[#aab3c4] text-[14px]">
            <span className="font-bold text-white">Availability metrics: </span>
            <span>Availability percentages are shown only when an approved measurement methodology exists. Standard global uptimes are measured at the API layer over rolling 90-day intervals.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
