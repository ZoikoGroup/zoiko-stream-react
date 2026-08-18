'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is the Event Brief?',
    answer: 'A structured planning request that captures your event context, audience, production needs, access, accessibility, resilience, and post-event intent. It is not a booking or commitment.'
  },
  {
    question: 'How long does it take to complete?',
    answer: 'It usually takes about 10-15 minutes, depending on the complexity of your event and how much information you already have.'
  },
  {
    question: 'Do I need exact audience numbers?',
    answer: 'No, estimates are completely fine to start. We can refine these numbers during the planning review.'
  },
  {
    question: 'Can I plan a recurring series?',
    answer: 'Yes! The brief allows you to indicate if this is a single event or part of a recurring series.'
  },
  {
    question: 'Can I request private or ticketed access?',
    answer: 'Absolutely. You can specify any access control requirements including ticketing, private invites, or SSO.'
  },
  {
    question: 'Can I request captions or languages?',
    answer: 'Yes, there is a dedicated section for accessibility and language requirements including live captions, ASL, and translation.'
  },
  {
    question: 'Does the brief provide pricing?',
    answer: 'Not immediately. The brief helps us understand your needs so we can provide an accurate scope proposal and pricing.'
  },
  {
    question: 'What happens after submission?',
    answer: 'Your brief is routed to the planning team for review. We validate the scope and return a proposal with next steps.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section 
      className="relative w-full py-[100px] px-6 md:px-[112px] overflow-hidden"
      style={{ backgroundImage: "linear-gradient(90deg, rgba(37, 99, 235, 0.22) 0%, rgba(37, 99, 235, 0) 100%), linear-gradient(90deg, rgb(11, 16, 32) 0%, rgb(11, 16, 32) 100%)" }}
    >
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-clip">
        <div className="absolute left-[-180px] top-[-120px] w-[420px] h-[420px]">
          <img src="/images/planning-and-briefing/blob-1.svg" alt="" className="absolute inset-[-28.57%] w-full h-full max-w-none" />
        </div>
        <div className="absolute right-[-160px] top-[-140px] w-[360px] h-[360px]">
          <img src="/images/planning-and-briefing/blob-2.svg" alt="" className="absolute inset-[-30.56%] w-full h-full max-w-none" />
        </div>
        <div className="absolute right-[-220px] bottom-[-180px] w-[520px] h-[520px]">
          <img src="/images/planning-and-briefing/blob-3.svg" alt="" className="absolute inset-[-26.92%] w-full h-full max-w-none" />
        </div>
        <div className="absolute left-[-120px] bottom-[-160px] w-[320px] h-[320px]">
          <img src="/images/planning-and-briefing/blob-4.svg" alt="" className="absolute inset-[-31.25%] w-full h-full max-w-none" />
        </div>
        <div className="absolute left-[-120px] top-[170px] w-[235px] h-[52px] flex items-center justify-center">
          <div className="-rotate-12 flex-none">
            <div className="bg-[#2563eb] h-[2px] opacity-12 w-[240px]" />
          </div>
        </div>
        <div className="absolute right-[-127px] top-[360px] w-[248px] h-[82px] flex items-center justify-center">
          <div className="rotate-18 flex-none">
            <div className="bg-[#2563eb] h-[2px] opacity-10 w-[260px]" />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[48px]">
        
        {/* Header */}
        <div className="flex flex-col items-start w-full">
          <h2 className="font-space-grotesk font-bold text-[#f9fafb] text-3xl md:text-[40px] leading-[normal] w-full">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-[12px] w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="flex flex-col items-start p-[20px] bg-[#0f172a] border border-[#1f2937] rounded-[12px] w-full cursor-pointer transition-all duration-300"
                onClick={() => toggleFaq(idx)}
                style={{ gap: isOpen ? '12px' : '0' }}
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className="font-space-grotesk font-bold text-[#f9fafb] text-[16px] leading-[normal] flex-1">
                    {faq.question}
                  </h3>
                  <div className="w-[20px] h-[20px] flex-shrink-0">
                    <img 
                      src={isOpen ? "/images/planning-and-briefing/minus.svg" : "/images/planning-and-briefing/plus.svg"} 
                      alt={isOpen ? "Collapse" : "Expand"} 
                      className="w-full h-full"
                    />
                  </div>
                </div>
                {isOpen && (
                  <p className="font-space-grotesk font-normal text-[#cbd5e1] text-[14px] leading-[normal] w-full">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
