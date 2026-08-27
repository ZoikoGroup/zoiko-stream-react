import React from 'react';
import Image from 'next/image';

export default function Section4Scope() {
  const cards = [
    {
      title: "Counting Entity",
      desc: "Is it scoped to Organization, project, credential, user, resource, or individual endpoint class?",
      img: "/images/developers-rate-limits/sec4-rect0.png"
    },
    {
      title: "Aggregation",
      desc: "Determine if counts are shared across child entities, independent, pooled, or unspecified.",
      img: "/images/developers-rate-limits/sec4-rect1.png"
    },
    {
      title: "Override Behavior",
      desc: "Are limits inherited from parents, overrideable globally, fixed, or dynamically negotiated?",
      img: "/images/developers-rate-limits/sec4-rect2.png"
    },
    {
      title: "Environment",
      desc: "Separate semantic parameters govern limits inside sandbox testbeds versus critical production scales.",
      img: "/images/developers-rate-limits/sec4-rect3.png"
    },
    {
      title: "Region",
      desc: "Limits are regional only when semantics are explicitly localized to cluster geographic availability.",
      img: "/images/developers-rate-limits/sec4-rect4.png"
    },
    {
      title: "Credential Relationship",
      desc: "Are request allocations mapped strictly per credential key or aggregated across all key assets?",
      img: "/images/developers-rate-limits/sec4-rect5.png"
    }
  ];

  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full z-0" src="/images/developers-rate-limits/sec4-bg.png" />
      
      <div className="absolute bottom-[-5px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
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
          Know exactly what each limit counts against.
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] md:leading-[28px] text-[#4f5e74] text-base md:text-[18px] w-full">
          A published number without a specified counting scope is incomplete.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] relative z-10 w-full">
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
