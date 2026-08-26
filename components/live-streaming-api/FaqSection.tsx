"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "What is a live streaming API?",
    answer: "A live streaming API lets an application create and manage the resources used to publish and deliver live video — from stream creation through ingest, playback, and lifecycle management."
  },
  {
    question: "How do I create my first live stream?",
    answer: "Start with Authentication and Developer access, then run the contract-valid create request shown on this page. Use the returned publisher handoff to connect your encoder."
  },
  {
    question: "What should I do with a stream key?",
    answer: "Treat publishing credentials as secrets. Store them server-side, avoid client-side exposure and logs, and rotate or revoke them using the supported workflow."
  },
  {
    question: "How do I know when the stream is live?",
    answer: "Use the documented stream state from the API and the corresponding webhook or monitoring signal to confirm the live state."
  },
  {
    question: "Should I retry a create request after a timeout?",
    answer: "Do not blindly repeat a mutation when the result is unknown. Follow the documented idempotency or lookup-before-retry pattern."
  },
  {
    question: "Can a live stream become a recording?",
    answer: "If recording is enabled for the stream and supported by the account configuration, the live session can hand off to the Recording and assets workflow."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full border-t border-b border-[#232b3a] flex flex-col items-center bg-[#06080c] px-6 xl:px-[112px] py-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/images/live-streaming-api/faq-bg.png"
          alt="" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute bg-[rgba(10,13,20,0.75)] inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-[960px] flex flex-col items-center gap-[64px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[20px] items-center text-center w-full">
          <h2 className="font-sora font-bold text-white text-[38px] tracking-[-0.8px] leading-[48px]">
            Frequently asked questions
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[28px]">
            Common developer questions answered directly.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col w-full rounded-[12px] overflow-hidden border border-[#232b3a]">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-[rgba(16,21,30,0.8)] flex flex-col items-start px-[24px] py-[28px] w-full ${index !== faqItems.length - 1 ? 'border-b border-[#232b3a]' : ''}`}
            >
              <div 
                className="flex items-center justify-between w-full cursor-pointer group"
                onClick={() => toggleOpen(index)}
              >
                <h3 className="font-sora font-bold text-white text-[18px] leading-[24px] pr-4">
                  {item.question}
                </h3>
                <div className="flex items-center justify-center w-[32px] h-[32px] shrink-0 transition-transform duration-200" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <ChevronDown className="text-[#34d4ca]" size={20} />
                </div>
              </div>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out w-full ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="font-inter text-[#aab3c4] text-[16px] leading-[26px] pt-[16px] md:pr-[48px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
