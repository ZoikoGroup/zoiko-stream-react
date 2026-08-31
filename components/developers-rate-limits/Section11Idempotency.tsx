import React from 'react';

export default function Section11Idempotency() {
  const cards = [
    {
      title: "Idempotency Capability",
      desc: "Permits repetitive transaction attempts safely without risking duplicate processing or billing charges.",
      img: "/images/developers-rate-limits/sec11-rect0.png"
    },
    {
      title: "Dead-Letter Recovery",
      desc: "Sequesters corrupted or repeatedly failing payloads into secure holding queues for manual administrator review.",
      img: "/images/developers-rate-limits/sec11-rect3.png"
    },
    {
      title: "Queue Payload",
      desc: "Ensures every packet contains strict correlation IDs embedded inside the core metadata layers.",
      img: "/images/developers-rate-limits/sec11-rect1.png"
    },
    {
      title: "Ordering",
      desc: "Guarantees chronological execution sequence for dependent payloads using monotonic sequence identifiers.",
      img: "/images/developers-rate-limits/sec11-rect4.png"
    },
    {
      title: "Retry Ownership",
      desc: "Configures strict protocol rules establishing whether client or gateway triggers the next retry sequence.",
      img: "/images/developers-rate-limits/sec11-rect2.png"
    },
    {
      title: "Unknown Outcome",
      desc: "Applies defensive safety state checks when connection cuts out mid-flight before receiving confirmation.",
      img: "/images/developers-rate-limits/sec11-rect5.png"
    }
  ];

  return (
    <section className="flex flex-col gap-[64px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-[#04141a] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-rate-limits/sec11-bg.png" />
        <div className="absolute bg-[rgba(4,20,26,0.9)] inset-0" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[40px] text-[#f8fafc] tracking-[-0.8px] w-full">
          Prevent duplicates when work is deferred or retried
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] relative z-10 w-full">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[#0a1e24] border border-[#1e293b] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full hover:shadow-[0_0_20px_rgba(52,212,202,0.15)] transition-shadow duration-300">
            <div className="h-[160px] relative w-full shrink-0">
              <img alt={card.title} className="absolute inset-0 object-cover w-full h-full" src={card.img} />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[24px] w-full h-full">
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#f8fafc] text-[20px]">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] text-[#94a3b8] text-[14px] w-full">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
