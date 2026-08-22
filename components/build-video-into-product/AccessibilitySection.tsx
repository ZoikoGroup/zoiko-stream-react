import React from 'react';
import Image from 'next/image';

const cards = [
  {
    title: 'Player Accessibility',
    description: 'Keyboard controls, natural tab focus order, distinct non-color statuses, seamless zoom, and reduced motion capabilities.',
    image: '/images/build-video-into-product/card-player-accessibility.png',
  },
  {
    title: 'Time-Based Media',
    description: 'Automated multi-language closed captions, alternative subtitle layouts, transcripts, and synchronized audio description tracks.',
    image: '/images/build-video-into-product/card-time-based-media.png',
  },
  {
    title: 'Human Review Boundary',
    description: 'Machine-generated tracks provide immediate convenience but always support human override steps before publishing.',
    image: '/images/build-video-into-product/card-human-review.png',
  },
  {
    title: 'Product Responsibility',
    description: "While our media stream meets compliance standards, the surrounding application layout remains your product's domain.",
    image: '/images/build-video-into-product/card-product-responsibility.png',
  },
];

export default function AccessibilitySection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[120px] border-b border-[#e1e6eb] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-white">
      <Image
        src="/images/build-video-into-product/accessibility-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute left-[-180px] top-[-120px] size-[420px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-1.svg" alt="" fill unoptimized />
      </div>
      <div className="absolute bottom-[58px] right-[-160px] size-[520px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-2.svg" alt="" fill unoptimized />
      </div>

      <div className="relative flex flex-col gap-[16px] items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[28px] sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px] w-full">
          Make video usable across interaction, hearing, language, and device contexts.
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[28.8px] w-full">
          Our players and captioning workflows are built from the ground up to satisfy strict global accessibility requirements automatically.
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-[24px] w-full">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid flex flex-col sm:flex-row gap-[24px] items-center p-[24px] rounded-[12px] w-full"
          >
            <div className="relative rounded-[8px] shrink-0 size-[160px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover rounded-[8px] pointer-events-none"
                unoptimized
              />
            </div>
            <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
              <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[18px] whitespace-nowrap">
                {card.title}
              </p>
              <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[14px] leading-[22px] w-full">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
