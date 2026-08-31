import React from 'react';

export default function Section2MentalModel() {
  const cards = [
    {
      title: "Platform Summary",
      desc: "Instant unified view of active operational parameters, updated automatically every sixty seconds.",
      img: "/images/developers-system-status/sec2-card1.png"
    },
    {
      title: "Component Status",
      desc: "Granular status tracking for individual services from ingress nodes to localized transcoding pipelines.",
      img: "/images/developers-system-status/sec2-card2.png"
    },
    {
      title: "Incident Tracking",
      desc: "Real-time updates on active degradations, categorized by impact severity with open timelines.",
      img: "/images/developers-system-status/sec2-card3.png"
    },
    {
      title: "Scheduled Maintenance",
      desc: "Planned maintenance windows, planned downtime, and downstream mitigation protocols.",
      img: "/images/developers-system-status/sec2-card4.png"
    },
    {
      title: "Historical Health",
      desc: "Complete 90-day archive of past performance, incident resolutions, and calculated SLA scores.",
      img: "/images/developers-system-status/sec2-card5.png"
    },
    {
      title: "Data Freshness",
      desc: "Attributable timestamps and telemetry lag metrics validating when data was pulled.",
      img: "/images/developers-system-status/sec2-card6.png"
    }
  ];

  return (
    <section className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-system-status/sec2-bg.png" />
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
            How status works.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#4f5e74] text-base md:text-[18px] w-full max-w-[1000px] mx-auto md:mx-0">
            A predictable taxonomy designed to keep engineers and operators aligned. We evaluate health on six core dimensions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] items-start relative w-full">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-[#fafafc] border border-[#e5e8ed] border-solid flex flex-col items-start overflow-clip relative rounded-[12px] w-full group hover:shadow-md transition-shadow duration-300">
              <div className="h-[140px] relative w-full overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src={card.img} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[24px] relative w-full">
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[18px] whitespace-nowrap">
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[22px] w-full not-italic relative text-[#4f5e74] text-[14px]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
