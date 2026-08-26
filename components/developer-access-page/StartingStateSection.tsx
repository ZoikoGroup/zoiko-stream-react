import Image from 'next/image';
import React from 'react';

const CARDS = [
  {
    img: 'card-0.png',
    title: 'I am new to ZoikoStream',
    desc: 'Start fresh with a secure workspace build from scratch.',
  },
  {
    img: 'card-1.png',
    title: 'I was invited to a workspace',
    desc: 'Join an existing workspace with a pending developer pass.',
  },
  {
    img: 'card-2.png',
    title: 'I already have active access',
    desc: 'Proceed directly to managing active client credentials.',
  },
  {
    img: 'card-3.png',
    title: 'My access was restricted',
    desc: 'Diagnose policy changes or fix active compliance blocks.',
  },
  {
    img: 'card-4.png',
    title: 'I need expanded capabilities',
    desc: 'Upgrade role permissions or request production environments.',
  },
];

export default function StartingStateSection() {
  return (
    <section className="relative w-full border-b border-solid border-[#232b3a] px-6 py-24 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/developer-access-page/starting-state/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.59)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Choose your starting point
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Select the path that matches your current situation. No profiling or hidden logic.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start overflow-hidden rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(10,13,20,0.9)]"
            >
              <div className="relative h-[120px] w-full shrink-0">
                <Image
                  src={`/images/developer-access-page/starting-state/${card.img}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[8px] p-[20px]">
                <h3 className="w-full text-[15px] font-bold leading-normal text-white">
                  {card.title}
                </h3>
                <p className="w-full font-inter text-[12px] font-normal leading-[18px] text-[#aab3c4]">
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
