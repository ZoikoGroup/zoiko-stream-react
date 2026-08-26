import Image from 'next/image';
import React from 'react';

const CARDS = [
  {
    img: 'card-0.png',
    title: 'Role or permission changed',
    desc: 'Show new permission context immediately after an authoritative session refresh.',
  },
  {
    img: 'card-1.png',
    title: 'Access suspended',
    desc: 'Clearly present active suspension reasons along with verified recovery pathways.',
  },
  {
    img: 'card-2.png',
    title: 'Access revoked',
    desc: 'Explain complete revocation logic while preserving safe sandbox workspace contexts.',
  },
  {
    img: 'card-3.png',
    title: 'Account disabled',
    desc: 'Route directly to verified account recovery portals, bypassing developer access barriers.',
  },
];

export default function LifecycleSection() {
  return (
    <section className="relative w-full border-b border-solid border-[#232b3a] px-6 py-24 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/developer-access-page/lifecycle/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.83)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-tight text-white md:text-[38px] md:leading-[48px]">
            Access changes, suspension, revocation, and recovery
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            What happens when your access state changes and how to recover your active configuration.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex w-full flex-col items-start gap-[20px] overflow-hidden rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[#10151e] p-[24px] sm:flex-row sm:items-center"
            >
              <div className="relative size-[120px] shrink-0 rounded-[8px]">
                <Image
                  src={`/images/developer-access-page/lifecycle/${card.img}`}
                  alt=""
                  fill
                  className="rounded-[8px] object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-[8px]">
                <h3 className="text-[18px] font-bold leading-normal text-white">
                  {card.title}
                </h3>
                <p className="font-inter text-[14px] font-normal leading-[22px] text-[#aab3c4]">
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
