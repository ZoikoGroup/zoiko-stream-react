import React from 'react';

export default function Section10Optimization() {
  const cards = [
    {
      title: "Pagination",
      desc: "Replaces bulk lookups with offset-limit models to slash memory consumption and gateway overhead.",
      img: "/images/developers-rate-limits/sec10-rect0.png"
    },
    {
      title: "Caching",
      desc: "Bypasses expensive DB execution by storing static read-only resources at high-performance edge layers.",
      img: "/images/developers-rate-limits/sec10-rect1.png"
    },
    {
      title: "Conditional Requests",
      desc: "Employs ETag validation headers to return empty 304 payloads when underlying data remains unchanged.",
      img: "/images/developers-rate-limits/sec10-rect2.png"
    },
    {
      title: "Request Coalescing",
      desc: "Merges identical simultaneous read requests into a single database hit to mitigate cache stampedes.",
      img: "/images/developers-rate-limits/sec10-rect3.png"
    }
  ];

  return (
    <section className="flex flex-col gap-[64px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-rate-limits/sec10-bg.png" />
      </div>

      <div className="absolute bottom-[-249px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-rate-limits/sec2-blob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-180px] w-[420px] h-[420px] top-[-54px] pointer-events-none z-0">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-rate-limits/sec2-blob1.svg" />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[40px] text-[#0f172a] tracking-[-0.8px] w-full">
          Reduce avoidable load without changing semantics
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] md:leading-[28px] text-[#4f5e74] text-base md:text-[16px] w-full">
          Every technique is conditional on the owning API supporting it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] relative z-10 w-full">
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
