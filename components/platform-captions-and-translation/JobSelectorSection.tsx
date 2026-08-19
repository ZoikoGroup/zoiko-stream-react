import React from 'react';
import Image from 'next/image';

const cards = [
  {
    title: 'Same-language captions',
    description: 'Automated or human-authored real-time speech-to-text within the native language context.',
    image: '/images/platform-captions-and-translation/card-img-0.png'
  },
  {
    title: 'Translated text',
    description: 'Cross-lingual subtitle delivery mapped onto frame timings under strict policy rules.',
    image: '/images/platform-captions-and-translation/card-img-1.png'
  },
  {
    title: 'Transcript',
    description: 'Complete searchable text output of spoken content with speaker labels and immutable logs.',
    image: '/images/platform-captions-and-translation/card-img-2.png'
  },
  {
    title: 'Interpreted audio',
    description: 'Live audio channels for human interpreters or real-time synthesized voice replacements.',
    image: '/images/platform-captions-and-translation/card-img-3.png'
  },
  {
    title: 'Replay language continuity',
    description: 'Keep live translation properties alive on subsequent video-on-demand playback and archival.',
    image: '/images/platform-captions-and-translation/card-img-4.png'
  },
  {
    title: 'Developer implementation',
    description: 'REST APIs and SDK methods to programmatically bind captions to asset metadata structures.',
    image: '/images/platform-captions-and-translation/card-img-5.png'
  },
  {
    title: 'Enterprise evaluation',
    description: 'Custom sandbox environments for verifying accuracy, latency, and Section 508 compliance.',
    image: '/images/platform-captions-and-translation/card-img-6.png'
  },
  {
    title: 'Active problem / Support',
    description: 'Real-time pipeline diagnostics, latency alerts, and rapid human-in-the-loop fallback options.',
    image: '/images/platform-captions-and-translation/card-img-7.png'
  }
];

export default function JobSelectorSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#232b3a] border-solid flex flex-col gap-[48px] items-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/job-selector-bg.png" 
          alt="Job Selector Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.26)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[38px] leading-[61px] tracking-[-0.38px]">
          Start with what you need
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[18px] leading-[29px]">
          Choose your outcome. Language availability is shown only after scope and capability are confirmed.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#141b2d] border border-[#232b3a] border-solid rounded-[12px] flex flex-col items-start overflow-hidden w-full transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="relative w-full h-[120px] shrink-0">
              <Image 
                src={card.image} 
                alt={card.title} 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex flex-col gap-[8px] items-start p-[20px] w-full">
              <h3 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[16px] leading-tight">
                {card.title}
              </h3>
              <p className="font-spaceGrotesk font-normal text-[#707a8c] text-[13px] leading-[20px]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
