"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What is ZoikoStream Managed live events?",
    answer:
      "It is an end-to-end cloud routing and stream delivery solution. Our specialized team coordinates with your local physical AV setup, conducts preflight sanity checks, runs failover routes, and guarantees broadcast transmission to your audience.",
  },
  {
    id: "2",
    question: "How does a managed event differ from self-operated streaming?",
  },
  {
    id: "3",
    question:
      "What is the difference between Managed events and Enterprise media ops?",
  },
  {
    id: "4",
    question: "What service components are available for managed events?",
  },
  {
    id: "5",
    question: "How do I check if my event qualifies for managed service?",
  },
  {
    id: "6",
    question: "What is the lead time for a managed live event?",
  },
  {
    id: "7",
    question: "How is pricing determined for managed events?",
  },
  {
    id: "8",
    question: "What support is available during a live event?",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative min-h-[640px] w-full overflow-hidden text-white font-sans py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background Image - Clean overlay without dark filters */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event/bg8.png"
          alt="FAQ Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-white mb-2">
            Frequently asked questions
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-normal">
            Source-bounded answers for managed live events
          </p>
        </div>

        {/* 2-Column Grid Accordion Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl bg-[#111622CC] border border-[#232B3A] backdrop-blur-md overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm font-semibold text-white leading-snug">
                    {item.question}
                  </span>
                  <div className="shrink-0 text-[#34D4CA]">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2]" />
                    )}
                  </div>
                </button>

                {isOpen && item.answer && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-[#232B3A]/40 mt-1 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
