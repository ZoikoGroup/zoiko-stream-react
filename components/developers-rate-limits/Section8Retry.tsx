import React from 'react';

export default function Section8Retry() {
  const cards = [
    {
      title: "Mutation with Idempotency",
      desc: "Leverage idempotency tokens in request headers to safely retry failed tasks, ensuring the server blocks duplicate writes and safely resolves conflicts.",
      img: "/images/developers-rate-limits/sec8-rect0.png"
    },
    {
      title: "Mutation without Idempotency",
      desc: "Treat POST endpoints as highly volatile. Never retry blind. Implement automated system state inspection scripts before initiating secondary tasks.",
      img: "/images/developers-rate-limits/sec8-rect1.png"
    },
    {
      title: "Read-Only Requests",
      desc: "Safe to retry aggressively since GET endpoints are naturally idempotent, but still enforce systemic throttling to prevent cascading server load.",
      img: "/images/developers-rate-limits/sec8-rect2.png"
    }
  ];

  return (
    <section className="flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full z-0" src="/images/developers-rate-limits/sec8-bg.png" />
      
      <div className="absolute bottom-[-296px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
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
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[38px] text-[#0f1b2d] tracking-[-0.8px] w-full">
          Retry intelligently, never blindly.
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] md:leading-[28px] text-[#4f5e74] text-base md:text-[18px] w-full">
          Rate-limit recovery is a specialized branch of the canonical error handling model.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] relative z-10 w-full">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full hover:shadow-lg transition-shadow duration-300">
            <div className="h-[160px] relative w-full shrink-0">
              <img alt={card.title} className="absolute inset-0 object-cover w-full h-full" src={card.img} />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[24px] w-full h-full">
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0f1b2d] text-[20px]">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[22px] text-[#4f5e74] text-[14px] w-full">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
