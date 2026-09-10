import React from 'react';
import Link from 'next/link';

const imgBg = "/images/webhooks/retries-background.webp";

const cards = [
  {
    image: "/images/webhooks/retry-backoff.webp",
    title: 'Retry & Backoff',
    badge: 'PROFILE-GOVERNED',
    tone: 'bg-[rgba(0,212,170,0.12)] text-[#00d4aa]',
    description:
      'Retry eligibility, schedule, and terminal conditions from current delivery profile only. No guessed counts or intervals.',
  },
  {
    image: "/images/webhooks/duplicate-handling.webp",
    title: 'Duplicate Handling',
    badge: 'CONSUMER-OWNED',
    tone: 'bg-[rgba(76,134,255,0.14)] text-[#4c86ff]',
    description:
      'Application handles duplicate delivery possibility. No exactly-once claim without explicit end-to-end contract.',
  },
  {
    image: "/images/webhooks/ordering-semantics.webp",
    title: 'Ordering Semantics',
    badge: 'SOURCE-DEFINED',
    tone: 'bg-[rgba(245,158,11,0.14)] text-[#f59e0b]',
    description:
      'No global or per-resource ordering assumed. Exact guarantee only from current delivery profile.',
  },
];

export default function RetriesIdempotencySection() {
  return (
    <section className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Retries-Idempotency-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.45] contrast-[1.05]" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.18)] inset-0" />
      </div>

      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#f1f5f9] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Retries, duplicates, ordering, and idempotency
          </h2>
          <p className="font-sans font-normal text-[#94a3b8] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            Design your consumer for the delivery reality — not an assumed guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[rgba(24,27,33,0.8)] border border-[#1e2530] border-solid flex flex-col items-start rounded-[16px] overflow-hidden"
            >
              <img alt="" className="h-[200px] object-cover w-full" src={card.image} />
              <div className="flex flex-col gap-[12px] items-start p-[24px] w-full">
                <div className="flex flex-wrap gap-2 justify-between items-center w-full">
                  <p className="font-sans font-bold text-[#f1f5f9] text-[18px]">{card.title}</p>
                  <div className={`${card.tone} flex items-start px-[8px] py-[3px] rounded-[3px]`}>
                    <span className="font-mono font-bold text-[9px]">{card.badge}</span>
                  </div>
                </div>
                <p className="font-sans font-normal text-[#94a3b8] text-[13px] leading-[20px] w-full">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="#delivery-profiles"
          className="bg-gradient-to-b from-[#00d4aa] to-[#4c86ff] flex items-start px-[24px] py-[14px] rounded-[10px] transition-opacity hover:opacity-90"
        >
          <span className="font-sans font-bold text-[#0a0d13] text-[16px]">View delivery profiles</span>
        </Link>
      </div>
    </section>
  );
}
