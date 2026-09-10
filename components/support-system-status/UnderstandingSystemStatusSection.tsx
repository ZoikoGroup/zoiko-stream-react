"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function UnderstandingSystemStatusSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqsLeft = [
    {
      question: "What does each status state mean?",
      answer: "Operational means all approved public components are healthy. Degraded performance, Partial outage, and Major outage indicate increasing severity. Unknown means current health cannot be verified."
    },
    {
      question: "How often is the status page updated?",
      answer: "Component health is verified continuously. During active incidents, updates are published as new information becomes available from the engineering team."
    },
    {
      question: "Does this page reflect my specific account?",
      answer: "No. This page shows public platform-wide operational health. For account-specific issues, contact Support."
    },
    {
      question: "What happens if the status page itself goes down?",
      answer: "A static fallback page displays the last known state with a stale data notice. Status never self-reports as operational when its own systems fail."
    }
  ];

  const faqsRight = [
    {
      question: "Are uptime percentages the same as my SLA?",
      answer: "No. Historical availability metrics shown here use a specific measurement methodology that may differ from contractual SLA terms."
    },
    {
      question: "How do I get notified about incidents?",
      answer: "Subscribe via email, RSS feed, or webhook integration. Notifications are operational-only and separate from marketing communications."
    },
    {
      question: "Can I see the full incident history?",
      answer: "Yes. The history page provides a complete chronological record of public incidents and maintenance events within the published retention window."
    },
    {
      question: "What is the difference between an incident and planned maintenance?",
      answer: "Incidents are unplanned service impact events. Maintenance is scheduled in advance with explicit time windows and expected impact."
    }
  ];

  return (
    <div className="border-[#1f2937] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full h-auto overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img
          alt=""
          className="absolute max-w-none object-cover size-full"
          src="/images/support-system-status/imgFaqSection.png"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/30" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-sans font-bold leading-[48px] text-[38px] text-white w-full">
          Understanding System Status
        </h2>
        <p className="font-sans font-normal leading-[28.8px] text-[#aab3c4] text-[18px] w-full">
          Common questions about how ZoikoStream communicates operational health.
        </p>
      </div>

      <div className="flex gap-[24px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-[16px] items-start relative">
          {faqsLeft.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-[#111827]/85 border border-[#1f2937] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[10px] w-full cursor-pointer transition-colors hover:bg-[#111827]"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between relative w-full">
                  <h3 className="flex-1 font-sans font-bold leading-none text-[16px] text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex flex-col items-center justify-center relative size-[24px] shrink-0">
                    <div className="relative size-[14px] transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      <img alt="Toggle" className="absolute block inset-0 size-full" src="/images/support-system-status/imgPlus.svg" />
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out w-full ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans font-normal leading-[20px] text-[#aab3c4] text-[13px] w-full">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex flex-1 flex-col gap-[16px] items-start relative">
          {faqsRight.map((faq, index) => {
            const rightIndex = index + faqsLeft.length;
            const isOpen = openIndex === rightIndex;
            return (
              <div 
                key={rightIndex}
                className="bg-[#111827]/85 border border-[#1f2937] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[10px] w-full cursor-pointer transition-colors hover:bg-[#111827]"
                onClick={() => toggleAccordion(rightIndex)}
              >
                <div className="flex items-center justify-between relative w-full">
                  <h3 className="flex-1 font-sans font-bold leading-none text-[16px] text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex flex-col items-center justify-center relative size-[24px] shrink-0">
                    <div className="relative size-[14px] transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      <img alt="Toggle" className="absolute block inset-0 size-full" src="/images/support-system-status/imgPlus.svg" />
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out w-full ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans font-normal leading-[20px] text-[#aab3c4] text-[13px] w-full">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
