'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How early should I start planning a live event?',
    answer:
      'Start planning as soon as you have an event date. Complex events with remote contributors, accessibility requirements, or private audiences need more lead time.',
  },
  {
    question: 'Do I need to complete the entire planning guide?',
    answer:
      'No. The guide covers all planning dimensions, but many are conditional. Start with Define and Design, then address Protect and Rehearse topics that apply to your event.',
  },
  {
    question: "What's the difference between this guide and Plan a Live Event?",
    answer:
      'This guide is educational planning guidance. Plan a Live Event is the commercial intake when you\'re ready for specialist engagement.',
  },
  {
    question: 'Can I save my planning progress?',
    answer:
      'Planning worksheet state is session-scoped. For persistent planning, engage a specialist through Plan a Live Event.',
  },
  {
    question: 'How do I handle a memorial or private event?',
    answer:
      'Private and sensitive events receive restrained treatment — no urgency pressure, no audience counters, and minimal data collection. Route to specialist support early.',
  },
  {
    question: 'What if my event is happening now and something is wrong?',
    answer:
      'Go directly to System Status for platform health or Contact Support for active issues. Do not use this planning guide for live event problems.',
  },
  {
    question: 'Do I need a security review for my event?',
    answer:
      'If your event involves private/restricted access, attendee data collection, or compliance requirements, route to Security and Trust Center.',
  },
  {
    question: 'What accessibility accommodations are available?',
    answer:
      'Start with the Accessibility planning section, then route to the Accessibility authority for specific accommodation evidence.',
  },
];

export default function GuideFaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight">
            Common live event planning questions answered
          </h2>
        </div>

        {/* FAQ Cards Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={faq.question}
                className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-5 sm:p-6 shadow-lg hover:border-slate-700/90 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-teal-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
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
