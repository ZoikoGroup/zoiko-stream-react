import React from 'react';

export default function Section8Maintenance() {
  const maintenances = [
    {
      title: "EU-West Database Engine Upgrade",
      time: "March 24, 2026 – 02:00 to 04:00 UTC",
      status: "Scheduled",
      statusColor: "#4a8cfb",
      statusBg: "rgba(74,140,251,0.1)",
      region: "US/EU/APAC",
      desc: "During the maintenance window, the Control Plane API in eu-west-1 may experience brief connection timeouts of up to 30 seconds. Video playback streams will continue uninterrupted.",
      img: "/images/developers-system-status/sec8-maintenance1.png"
    },
    {
      title: "Global Playback Edge Route Optimization",
      time: "March 21, 2026 – 01:00 to 03:00 UTC",
      status: "In Progress",
      statusColor: "#f59e0b",
      statusBg: "rgba(245,158,11,0.1)",
      region: "US/EU/APAC",
      desc: "We are migrating routing tables to optimize edge paths in AP Southeast. Viewer load is shifting to secondary endpoints dynamically, with no expected stream drops.",
      img: "/images/developers-system-status/sec8-maintenance2.png"
    }
  ];

  return (
    <section className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-system-status/sec4-bg.png" />
      </div>

      <div className="flex flex-col gap-[56px] relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.8px] w-full">
            Scheduled maintenance.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#4f5e74] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
            Upcoming maintenance windows planned to upgrade infrastructure. We prioritize zero-downtime rolling deploys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] items-start relative w-full">
          {maintenances.map((maint, idx) => (
            <div key={idx} className="bg-white border border-[#e2e8f0] border-solid flex flex-col items-start overflow-clip relative rounded-[16px] w-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-[160px] relative w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover w-full h-full" src={maint.img} />
              </div>
              
              <div className="flex flex-col gap-[16px] items-start p-[32px] relative w-full">
                <div className="flex items-center justify-between relative w-full">
                  <div 
                    className="flex items-start px-[10px] py-[4px] relative rounded-[100px]"
                    style={{ backgroundColor: maint.statusBg }}
                  >
                    <p 
                      className="font-[family-name:var(--font-inter)] font-bold leading-[normal] not-italic relative text-[12px] uppercase whitespace-nowrap"
                      style={{ color: maint.statusColor }}
                    >
                      {maint.status}
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] font-semibold leading-[normal] not-italic relative text-[#64748b] text-[12px] whitespace-nowrap uppercase">
                    {maint.region}
                  </p>
                </div>
                
                <div className="flex flex-col gap-[8px] items-start relative w-full">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[20px] w-full">
                    {maint.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] font-semibold not-italic relative text-[#4a8cfb] text-[13px] w-full">
                    {maint.time}
                  </p>
                </div>
                
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[24px] not-italic relative text-[#4f5e74] text-[15px] w-full mt-[4px]">
                  {maint.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
