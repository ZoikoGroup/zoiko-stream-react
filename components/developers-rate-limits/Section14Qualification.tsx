import React from 'react';

export default function Section14Qualification() {
  const cards = [
    {
      title: "Published Limit Fits",
      desc: "Your system capacity requirements align precisely with our default tier rate assignments.",
      img: "/images/developers-rate-limits/sec14-rect0.png"
    },
    {
      title: "Almost Fits",
      desc: "Capacity demands closely approach tier ceilings. Requires basic database indexing optimization.",
      img: "/images/developers-rate-limits/sec14-rect1.png"
    },
    {
      title: "Does Not Fit",
      desc: "Scale needs exceed baseline capabilities. Custom server allocation schedules required.",
      img: "/images/developers-rate-limits/sec14-rect2.png"
    },
    {
      title: "Limit Unpublished",
      desc: "Specific limit scopes aren't publicly listed. Contact solutions engineer for profiling.",
      img: "/images/developers-rate-limits/sec14-rect3.png"
    },
    {
      title: "Major Event",
      desc: "High-profile product launches requiring specialized reserve headroom and live war-room monitoring.",
      img: "/images/developers-rate-limits/sec14-rect4.png"
    },
    {
      title: "Regulated Requirements",
      desc: "SLA compliance structures needing dedicated single-tenant database execution sandboxes.",
      img: "/images/developers-rate-limits/sec14-rect5.png"
    }
  ];

  return (
    <section className="flex flex-col gap-[64px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-rate-limits/sec14-bg.png" />
      </div>

      <div className="absolute bottom-[-76px] right-[-156px] w-[520px] h-[520px] pointer-events-none z-0">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-rate-limits/sec2-blob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-180px] w-[420px] h-[420px] top-[-54px] pointer-events-none z-0">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-rate-limits/sec2-blob1.svg" />
        </div>
      </div>

      <div className="flex flex-col items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[40px] text-[#0f172a] tracking-[-0.8px] w-full">
          Technical evidence before commercial routing
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] relative z-10 w-full">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white border border-[#e2e8f0] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300">
            <div className="h-[160px] relative w-full shrink-0">
              <img alt={card.title} className="absolute inset-0 object-cover w-full h-full" src={card.img} />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[24px] w-full h-full">
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0f172a] text-[20px]">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] text-[#4f5e74] text-[14px] w-full">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
