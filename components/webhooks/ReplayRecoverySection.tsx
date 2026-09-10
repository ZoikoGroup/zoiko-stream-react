import React from 'react';
import Link from 'next/link';

const imgBg = "/images/webhooks/replay-background.webp";

const cards = [
  {
    image: "/images/webhooks/replay-missed-delivery.webp",
    title: 'Missed Delivery',
    description: 'Use current replay or list-deliveries mechanism only when capability exists. No generic replay promise.',
  },
  {
    image: "/images/webhooks/replay-unknown-outcome.webp",
    title: 'Unknown Outcome',
    description: 'Verify delivery log and authoritative resource state. Do not force success or failure state.',
  },
  {
    image: "/images/webhooks/replay-window.webp",
    title: 'Replay Window',
    description: 'Only current public retention window. No assumed infinite event history in buffer logs.',
  },
  {
    image: "/images/webhooks/replay-authoritative-read.webp",
    title: 'Authoritative Read',
    description: 'API/read model remains the source of current resource truth when documented.',
  },
];

export default function ReplayRecoverySection() {
  return (
    <section className="bg-white flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Replay-Recovery-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-70px] top-[-133px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-160px] bottom-[-120px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />

      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Replay, recovery, and authoritative reconciliation
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            When delivery fails or outcomes are unknown, reconcile through current mechanisms — not assumptions about
            buffering or history.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
          {cards.map((card) => (
            <div key={card.title} className="border border-[#e2e8f0] border-solid flex flex-col items-start rounded-[12px] overflow-hidden">
              <img alt="" className="h-[140px] object-cover w-full" src={card.image} />
              <div className="bg-[#f8fafc] flex flex-col gap-[8px] items-start p-[20px] w-full">
                <p className="font-sans font-bold text-[#0a0d13] text-[16px]">{card.title}</p>
                <p className="font-sans font-normal text-[#4f5e74] text-[12px] leading-[18px] w-full">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="#recovery-documentation"
          className="bg-gradient-to-b from-[#00d4aa] to-[#4c86ff] flex items-start px-[24px] py-[14px] rounded-[10px] transition-opacity hover:opacity-90"
        >
          <span className="font-sans font-bold text-[#0a0d13] text-[16px]">View recovery documentation</span>
        </Link>
      </div>
    </section>
  );
}
