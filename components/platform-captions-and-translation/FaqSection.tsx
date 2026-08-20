'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What does ZoikoStream Captions and translation cover?',
    answer: 'We cover live speech-to-text, translation, synchronous subtitle alignment, alternate descriptive audio, human operator review pools, and immutable compliance log verification.'
  },
  {
    question: 'Does ZoikoStream automatically caption every stream?',
    answer: 'No. All ingestion and accessibility tracks must undergo explicit policy confirmation and readiness checkmarks under corporate owner authorization.'
  },
  {
    question: 'Which languages are supported?',
    answer: 'We support over 72 major global languages and localized dialects for translation and synchronized text generation.'
  },
  {
    question: 'Are captions and translations guaranteed to be accurate?',
    answer: 'While native ASR provides speed, ZoikoStream employs direct human-in-the-loop validation blocks to guarantee accuracy limits.'
  },
  {
    question: 'Can live captions be used for replay?',
    answer: 'Yes, but live output is treated as preliminary. Post-live review gates are recommended to polish transcriptions for video-on-demand playback.'
  },
  {
    question: 'Can viewers choose their own language?',
    answer: 'Yes. Our player client provides explicit target selectors, allowing viewers to choose verified language tracks without silent fallbacks.'
  },
  {
    question: 'What happens if captions fail during a live event?',
    answer: 'ZoikoStream employs deterministic error-state webhooks, automatically signaling failover to secondary automated models or pre-designated back-up operators.'
  },
  {
    question: 'How do I discuss enterprise language requirements?',
    answer: "Click 'Talk to an expert' to request customized sandboxes and meet our enterprise solutions architects."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] border-b border-[#e2e8f0] border-solid flex flex-col gap-[48px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/faq-bg.png" 
          alt="FAQ Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-[#0a0d13] text-[38px] leading-[61px] tracking-[-0.38px]">
          Frequently asked questions
        </h2>
      </div>

      <div className="relative z-10 flex flex-col gap-[16px] items-start w-full">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="bg-[#f8fafc] border border-[#e2e8f0] border-solid rounded-[10px] flex flex-col items-start p-[20px] w-full transition-colors hover:border-[#34d4ca] cursor-pointer group"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between w-full">
                <h3 className="font-spaceGrotesk font-bold text-[#0a0d13] text-[15px] leading-tight pr-6">
                  {faq.question}
                </h3>
                <div className="shrink-0 flex items-center justify-center w-[14px] h-[14px] text-[#4a8cfb] transition-transform">
                  {isOpen ? (
                    <Minus strokeWidth={3} className="w-[14px] h-[14px]" />
                  ) : (
                    <Plus strokeWidth={3} className="w-[14px] h-[14px] group-hover:scale-110" />
                  )}
                </div>
              </div>
              <div 
                className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100 mt-[10px]' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[13px] leading-[20px] w-full">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
