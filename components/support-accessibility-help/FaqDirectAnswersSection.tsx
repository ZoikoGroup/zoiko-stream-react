"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

export default function FaqDirectAnswersSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is Accessibility help for?",
      a: "It is the support path for help with an accessibility barrier, accessible alternative, or accessibility feedback while using ZoikoStream.",
    },
    {
      q: "Do I need to disclose a disability?",
      a: "No. No diagnosis or disability category should be required to describe an accessibility barrier or request help.",
    },
    {
      q: "Can I report a screen reader or keyboard issue?",
      a: "Yes. Describe the task and barrier. Assistive-technology details are optional unless a specific troubleshooting step needs them.",
    },
    {
      q: "Where can I read ZoikoStream accessibility information?",
      a: "Use the separate public Accessibility authority for conformance evidence, testing scope, known limitations, and accessibility information.",
    },
    {
      q: "Can I get captions or a transcript?",
      a: "Availability must be checked for the specific content or workflow. This page cannot promise universal availability.",
    },
    {
      q: "How do I report an accessibility problem during a live event?",
      a: "Accessibility help preserves the accessibility need and routes event-specific support to Live Events when appropriate.",
    },
    {
      q: "Will ZoikoStream fix the issue by a certain date?",
      a: "We do not publish a remediation date unless an approved source explicitly establishes it.",
    },
    {
      q: "Can I use a different support channel?",
      a: "Only approved channels are shown. The page should not force a channel that creates another accessibility barrier.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="border-b border-[#232b3a] flex flex-col items-center px-6 lg:px-[112px] py-[80px] lg:py-[100px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/support-accessibility-help/sec9-bg.png"
          alt=""
          className="absolute max-w-none object-cover size-full"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/90" />
      </div>

      <div className="flex flex-col gap-[48px] relative z-10 w-full max-w-[1216px]">
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold leading-[1.2] lg:leading-[60.8px] text-[#eef1f6] text-[32px] lg:text-[37.9px] tracking-[-0.38px]">
            Common questions about accessibility help.
          </h2>
          <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[1.6] text-[#aab3c4] text-[16px] lg:text-[18px]">
            Operational answers only. For conformance evidence, testing scope, or limitations, visit the Accessibility information page.
          </p>
        </div>

        <div className="flex flex-col gap-[12px] w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#111827]/85 border border-[#232b3a] flex flex-col items-start p-[24px] rounded-[10px] w-full transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between w-full focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[#eef1f6] text-[16px] text-left pr-4">
                    {faq.q}
                  </h3>
                  <div className="flex items-center justify-center w-6 h-6 shrink-0 transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="w-[18px] h-[18px] text-[#34d4ca]" />
                    ) : (
                      <Plus className="w-[18px] h-[18px] text-[#34d4ca]" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`grid transition-all duration-300 ease-in-out w-full ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-['Space_Grotesk',sans-serif] font-normal leading-[20px] text-[#9ca3af] text-[13px]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
