"use client";

import Image from "next/image";
import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is global event streaming on ZukoStream?",
      answer: "A comprehensive workflow designed for high-availability live events, serving geographically distributed audiences with precise scheduling, localized delivery, and automated failover paths."
    },
    {
      question: "Does 'one event, every time zone' mean available everywhere?",
      answer: "No. It describes time-zone-aware scheduling and delivery structures. Ultimate geographic availability depends on regional compliance, network routing constraints, and edge coverage."
    },
    {
      question: "How should event time be chosen globally?",
      answer: "We recommend choosing a single canonical instant matched with the origin zone, accompanied by clearly labeled local timezone conversions. Avoid DST-ambiguous definitions."
    },
    {
      question: "Can regions have different live health?",
      answer: "Yes. Regional egress points monitor local telemetries independently. A single degraded edge node will trigger local failover without impacting the global broadcast stream."
    },
    {
      question: "Can the event be private?",
      answer: "Absolutely. Security parameters allow custom SSO integration, tokenized player signatures, geo-fencing policies, and corporate network entitlement rules."
    },
    {
      question: "Does the page guarantee failover?",
      answer: "Our architecture utilizes dual-ingest primary and secondary paths with automatic hot-swap. While it minimizes disruption, a true continuity strategy requires active rehearsal."
    },
    {
      question: "What about people who can't watch live?",
      answer: "Instant replay generation compiles the broadcast into secured VoD assets immediately upon session completion, undergoing automated metadata and compliance parsing."
    },
    {
      question: "When to use managed Live Events?",
      answer: "Opt for managed services when your production requires dedicated on-site technical directors, satellite bridge overrides, custom multi-language audio matrixing, or active rehearsals."
    }
  ];

  return (
    <section className="border border-[#e2e8f0] border-solid flex flex-col gap-[80px] items-start px-[112px] py-[120px] relative w-full overflow-hidden bg-white">
      {/* Background Image */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0 mix-blend-multiply opacity-[0.8]">
        <Image
          src="/images/global-event-streaming/faq-bg.png"
          alt="FAQ Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-[-8px] right-[-110px] w-[520px] h-[520px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-[-153px] top-[27px] w-[420px] h-[420px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-1.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-start relative shrink-0 w-full z-10">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-['Space_Grotesk'] font-bold leading-[56px] text-[#0f172a] text-[48px] tracking-[-1.5px] w-full">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter'] font-normal leading-[28px] text-[#475569] text-[18px] w-full max-w-[800px]">
            Everything you need to know about planning, configuring, and streaming your global live event.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-[#e2e8f0] border-solid drop-shadow-sm flex flex-col items-start p-[32px] rounded-[16px] w-full transition-all duration-300"
            style={{ paddingBottom: openIndex === idx ? '32px' : '28px' }}
          >
            <div 
              className="flex items-start justify-between w-full cursor-pointer select-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <p className={`flex-1 font-['Space_Grotesk'] font-bold leading-[24px] text-[18px] transition-colors ${openIndex === idx ? 'text-[#0f172a]' : 'text-[#334155]'}`}>
                {faq.question}
              </p>
              <div className="bg-[#f1f5f9] flex items-center justify-center rounded-[12px] size-[24px] shrink-0 ml-[24px] transition-transform duration-300" style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <div className="relative size-[10px]">
                  <Image src="/images/global-event-streaming/chevron-down.svg" alt="Toggle" fill />
                </div>
              </div>
            </div>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${openIndex === idx ? 'max-h-[200px] mt-[16px] opacity-100' : 'max-h-0 mt-0 opacity-0'}`}
            >
              <p className="font-['Inter'] font-normal leading-[22px] text-[#475569] text-[14px] w-full">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
