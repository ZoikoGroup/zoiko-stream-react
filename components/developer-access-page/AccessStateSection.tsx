import Image from 'next/image';
import React from 'react';

const CARDS = [
  {
    img: 'card-0.png',
    title: 'Checking State',
    status: 'LOADING',
    statusColor: 'text-[#33d9c7]',
    desc: 'Currently resolving verified auth tokens.',
  },
  {
    img: 'card-1.png',
    title: 'Active Member',
    status: 'ACTIVE',
    statusColor: 'text-[#33d9c7]',
    desc: 'Workspace credentials verified and valid.',
  },
  {
    img: 'card-2.png',
    title: 'Available to Start',
    status: 'START',
    statusColor: 'text-[#33d9c7]',
    desc: 'Initial steps verified, workspace ready to build.',
  },
  {
    img: 'card-3.png',
    title: 'Pending Review',
    status: 'REVIEW',
    statusColor: 'text-[#33d9c7]',
    desc: 'Awaiting workspace admin credentials validation.',
  },
  {
    img: 'card-4.png',
    title: 'Restricted',
    status: 'RESTRICTED',
    statusColor: 'text-[#33d9c7]',
    desc: 'Access altered due to strict policy updates.',
  },
  {
    img: 'card-5.png',
    title: 'Suspended',
    status: 'SUSPENDED',
    statusColor: 'text-[#33d9c7]',
    desc: 'Access revoked. Contact administrator.',
  },
];

export default function AccessStateSection() {
  return (
    <section className="relative w-full border-b border-solid border-[#232b3a] px-6 py-24 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/developer-access-page/access-state/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.83)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Your current access state and next action
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start overflow-hidden rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)]"
            >
              <div className="relative h-[140px] w-full shrink-0">
                <Image
                  src={`/images/developer-access-page/access-state/${card.img}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[12px] p-[20px]">
                <div className="flex w-full items-center justify-between">
                  <h3 className="text-[18px] font-bold leading-normal text-white">
                    {card.title}
                  </h3>
                  <div className="flex items-start rounded-[4px] bg-[#1b2330] px-[8px] py-[4px]">
                    <p className={`text-[10px] font-bold ${card.statusColor}`}>
                      {card.status}
                    </p>
                  </div>
                </div>
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
