import React from 'react';
import Image from 'next/image';

const cards = [
  {
    image: 'quality-card-0.png',
    title: 'Coverage / completeness',
    question: 'Q: Are all spoken segments accounted for?',
    evidence: 'EVIDENCE: Silent zone and speech density reports check for gaps.'
  },
  {
    image: 'quality-card-1.png',
    title: 'Timing / alignment',
    question: 'Q: Do the words match the speaker timing accurately?',
    evidence: 'EVIDENCE: Automated latency checks flag alignment drift beyond 1.5s.'
  },
  {
    image: 'quality-card-2.png',
    title: 'Meaning / fidelity',
    question: 'Q: Is the context maintained?',
    evidence: 'EVIDENCE: Translation dictionaries block literal machine errors.'
  },
  {
    image: 'quality-card-3.png',
    title: 'Terminology',
    question: 'Q: Are corporate and technical terms correct?',
    evidence: 'EVIDENCE: Custom whitelist mapping enforces strict vocabulary bounds.'
  },
  {
    image: 'quality-card-4.png',
    title: 'Speaker attribution',
    question: 'Q: Are speaker boundaries clearly assigned?',
    evidence: 'EVIDENCE: Voice-id checks match speaker names with confidence intervals.'
  },
  {
    image: 'quality-card-5.png',
    title: 'Accessibility interaction',
    question: 'Q: Does the output function with screen readers?',
    evidence: 'EVIDENCE: Output is mapped onto explicit WCAG standard layers.'
  }
];

export default function QualitySection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start bg-[#0a0f1a] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/quality-bg.png" 
          alt="Quality Review Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.69)]" />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[38px] leading-[61px] tracking-[-0.38px]">
          Quality review — no hidden universal score
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-[#141b2d] border border-[#232b3a] border-solid rounded-[12px] flex flex-col overflow-hidden w-full transition-colors hover:border-[#34d4ca] group"
          >
            {/* Top Image Area */}
            <div className="relative w-full h-[120px] overflow-hidden">
              <Image 
                src={`/images/platform-captions-and-translation/${card.image}`}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
            
            {/* Content Area */}
            <div className="flex flex-col gap-[12px] items-start p-[20px] w-full">
              <h3 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[15px] leading-tight">
                {card.title}
              </h3>
              <p className="font-spaceGrotesk font-normal text-[#34d4ca] text-[13px] leading-tight">
                {card.question}
              </p>
              <p className="font-spaceGrotesk font-normal text-[#707a8c] text-[13px] leading-[20px]">
                {card.evidence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
