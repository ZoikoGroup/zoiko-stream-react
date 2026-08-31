import React from 'react';

export default function Section6ActiveIncidents() {
  const incidents = [
    {
      title: "Asset processing latency under high queue load",
      status: "Investigating",
      statusColor: "#f59e0b",
      statusBg: "rgba(245,158,11,0.1)",
      time: "Started 14 minutes ago",
      desc: "VOD asset transcoding is experiencing delays. Live stream recording and playback are unaffected.",
      component: "Asset Processing (Global)",
      link: "https://status.zoikostream.com/incidents/1",
      img: "/images/developers-system-status/sec6-incident1.png"
    },
    {
      title: "Temporary metrics dashboard sync lag",
      status: "Identified",
      statusColor: "#4a8cfb",
      statusBg: "rgba(74,140,251,0.1)",
      time: "Started 32 minutes ago",
      desc: "Developer analytics sync is delayed by up to 3 minutes. Live stream pipelines remain operational.",
      component: "Analytics Pipeline",
      link: "https://status.zoikostream.com/incidents/2",
      img: "/images/developers-system-status/sec6-incident2.png"
    }
  ];

  return (
    <section id="active-incidents" className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full opacity-50" src="/images/developers-system-status/sec6-bg.png" />
      </div>

      <div className="absolute bottom-[-73px] right-[-147px] w-[520px] h-[520px] pointer-events-none z-0">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-system-status/sec2-blob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-180px] w-[420px] h-[420px] top-[-54px] pointer-events-none z-0">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-system-status/sec2-blob1.svg" />
        </div>
      </div>

      <div className="flex flex-col gap-[56px] items-start relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.8px] w-full">
            Active incidents.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#4f5e74] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
            Live tracking of ongoing service degradations, engineering responses, and estimated resolution timelines.
          </p>
        </div>

        <div className="flex flex-col gap-[24px] items-start relative w-full">
          {incidents.map((incident, idx) => (
            <div key={idx} className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col md:flex-row items-stretch overflow-clip relative rounded-[16px] w-full hover:shadow-md transition-shadow duration-300">
              <div className="relative w-full md:w-[200px] h-[160px] md:h-auto shrink-0">
                <img alt="" className="absolute inset-0 max-w-none object-cover w-full h-full" src={incident.img} />
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[16px] items-start p-[24px] md:p-[28px] relative w-full">
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between relative w-full gap-2">
                  <div 
                    className="flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0"
                    style={{ backgroundColor: incident.statusBg }}
                  >
                    <p 
                      className="font-[family-name:var(--font-inter)] font-bold leading-[normal] not-italic relative text-[12px] uppercase whitespace-nowrap"
                      style={{ color: incident.statusColor }}
                    >
                      {incident.status}
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] font-normal leading-[normal] not-italic relative text-[#4f5e74] text-[13px] whitespace-nowrap">
                    {incident.time}
                  </p>
                </div>
                
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[20px] w-full">
                  {incident.title}
                </h3>
                
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[22px] not-italic relative text-[#4f5e74] text-[14px] w-full">
                  {incident.desc}
                </p>
                
                <div className="w-full h-px bg-[#e2e8f0] my-[4px]" />
                
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between relative text-[13px] w-full gap-2">
                  <p className="font-[family-name:var(--font-inter)] font-normal leading-[normal] not-italic relative text-[#4f5e74]">
                    <span className="font-bold text-[#0f1b2d]">Affected Component: </span>
                    <span>{incident.component}</span>
                  </p>
                  <a href={incident.link} className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#4a8cfb] hover:underline underline-offset-2 whitespace-nowrap">
                    View timeline
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
