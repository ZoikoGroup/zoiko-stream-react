import Image from 'next/image';
import React from 'react';

const CARDS = [
  {
    img: 'card-0.png',
    title: 'Same access works',
    desc: 'Route directly to Quickstart. No unnecessary forms or gating variables initialized.',
  },
  {
    img: 'card-1.png',
    title: 'Additional environment',
    desc: 'Cross-reference environment matrices and proceed via approved expansion pathways.',
  },
  {
    img: 'card-2.png',
    title: 'Higher quota or SLA',
    desc: 'Get transparent breakdown of gated capabilities before initiating organization review.',
  },
  {
    img: 'card-3.png',
    title: 'Enterprise terms',
    desc: 'Review approved commercial pathways. We never fabricate urgency or access scarcity.',
  },
];

export default function ProductionAccessSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-24 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/developer-access-page/production-access/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.82)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-tight text-white md:text-[38px] md:leading-[48px]">
            Production, expanded, and enterprise access
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Understand expansion options without getting stuck in high-pressure commercial sales funnels.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex w-full flex-col items-start overflow-hidden rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[#10151e]"
            >
              <div className="relative h-[140px] w-full shrink-0">
                <Image
                  src={`/images/developer-access-page/production-access/${card.img}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[12px] p-[20px]">
                <h3 className="w-full text-[18px] font-bold leading-normal text-white">
                  {card.title}
                </h3>
                <p className="w-full font-inter text-[13px] font-normal leading-[20px] text-[#aab3c4]">
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
