'use client';

import React, { useState } from 'react';

export default function FaqSection() {
  const faqs = [
    {
      question: 'What is real-time contribution?',
      answer: 'Real-time contribution is the secure protocol-driven handshake and operational process of injecting live video feeds directly from authorized locations/contributors into production routing engines.'
    },
    {
      question: 'How is it different from live streaming?',
      answer: 'Real-time contribution targets the source-to-production path, handling transport formats like SRT/RTMP with focused verification and diagnostic recovery, whereas live streaming handles delivery output.'
    },
    {
      question: 'Which sources or devices can I use?',
      answer: 'Supported sources encompass professional hardware SRT encoders, high-grade mobile field cameras, and browser-based WebRTC webcams.'
    },
    {
      question: 'Can contributors join from a browser?',
      answer: 'Yes. WebRTC support permits authorized presenters to establish reliable handshakes directly inside custom-branded client portals without external app overhead.'
    },
    {
      question: 'What happens if a connection drops?',
      answer: 'Autonomous failover thresholds redirect routing pipelines immediately. Known-good session identifiers are retained so contributors can reconnect without re-authorizing.'
    },
    {
      question: 'Does contribution mean the source is on air?',
      answer: 'No. Connected streams enter an isolated pre-flight verification state. Feeds only pass to final distribution once explicitly accepted by production operators.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open the first by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white flex flex-col gap-[56px] items-start px-6 md:px-[112px] py-[100px] relative w-full overflow-hidden">
      
      {/* Background Graphic */}
      <img 
        alt="" 
        className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full opacity-40 z-0" 
        src="/images/real-time-contribution/faq-bg.png" 
      />

      {/* Header */}
      <div className="flex flex-col items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[32px] md:text-[38px] leading-[1.2]">
          Frequently asked questions
        </h2>
      </div>

      {/* FAQ Accordion */}
      <div className="flex flex-col gap-[16px] relative z-10 w-full max-w-[1216px] mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`bg-white border ${isOpen ? 'border-[#00d4aa]' : 'border-[#e1e6eb]'} flex flex-col gap-[12px] p-[24px] rounded-[12px] transition-colors cursor-pointer shadow-sm hover:shadow-md`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between w-full">
                <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[16px]">
                  {faq.question}
                </h3>
                <div className="flex items-center justify-center w-[20px] h-[20px] shrink-0">
                  <img 
                    alt="" 
                    src="/images/real-time-contribution/chevron-down.svg" 
                    className={`w-full h-full transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0 opacity-50'}`} 
                  />
                </div>
              </div>
              
              {/* Answer (Expandable) */}
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="font-['Space_Grotesk'] font-normal leading-[22px] text-[#4f5e74] text-[14px] mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
