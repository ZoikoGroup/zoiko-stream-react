import Image from 'next/image';
import React from 'react';

const CARDS = [
  {
    img: 'card-0.png',
    title: 'Why is review needed?',
    desc: 'Display approved reason category; avoid opaque not-eligible labels.',
  },
  {
    img: 'card-1.png',
    title: 'What information is needed?',
    desc: 'List only approved required inputs; no hidden scoring mechanisms.',
  },
  {
    img: 'card-2.png',
    title: 'How long does review take?',
    desc: 'Show only source-backed timing or state clearly if timing is not published.',
  },
  {
    img: 'card-3.png',
    title: 'What happens after?',
    desc: 'Explain state transitions and next steps immediately after review completes.',
  },
];

export default function ReviewProcessSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-24 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image */}
      <Image
        src="/images/developer-access-page/review-process/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover mix-blend-multiply opacity-[0.8]"
      />
      
      {/* Background Blobs */}
      <div className="pointer-events-none absolute left-[-174px] top-[-153px] size-[420px]">
        <Image src="/images/developer-access-page/review-process/bg-blob-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="pointer-events-none absolute bottom-[-179px] right-[-122px] size-[520px]">
        <Image src="/images/developer-access-page/review-process/bg-blob-2.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] tracking-tight text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
            Review, approval, and eligibility
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            When access is not purely self-service, the page describes the real review model.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex h-auto flex-col items-start overflow-hidden rounded-[12px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] sm:h-[336px]"
            >
              <div className="relative h-[180px] w-full shrink-0">
                <Image
                  src={`/images/developer-access-page/review-process/${card.img}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[12px] p-[24px]">
                <h3 className="w-full text-[18px] font-bold leading-normal text-[#0f1b2d] xl:text-[20px]">
                  {card.title}
                </h3>
                <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
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
