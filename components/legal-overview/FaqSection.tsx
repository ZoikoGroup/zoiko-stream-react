'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Where do I find ZoikoStream's legal documents?",
    answer: "This Legal overview page lists all current ZoikoStream legal documents and routes you to each one's operative source — Terms of service, Privacy notice, Cookie notice, Acceptable use, Data processing addendum, Service-specific terms, Accessibility statement, and Trademark guidelines.",
  },
  {
    question: "What's the difference between Terms of service and Service-specific terms?",
    answer: "Terms of service apply generally across all platform features, whereas Service-specific terms apply only to an explicitly identified product or feature.",
  },
  {
    question: 'Is this page itself a legal document?',
    answer: 'No. This Legal overview is a navigational directory and discovery surface. The operative legal obligations live exclusively within the approved source documents linked here.',
  },
  {
    question: 'Can this page tell me which document applies to my situation?',
    answer: 'This page provides task-based routing to help you locate relevant terms, but your specific subscription tier or executed enterprise agreement determines operative applicability.',
  },
  {
    question: 'How do I know if a legal document is current?',
    answer: 'Every document card displays its active state (e.g. Current, Scheduled, Superseded) and version number backed by the Legal Document Registry.',
  },
  {
    question: 'Where do I find the current Subprocessors list?',
    answer: 'The current list of authorized subprocessors is linked within the Data processing addendum (DPA) and Trust Center.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAFAFC] px-6 sm:px-12 lg:px-20 py-14 lg:py-18">
      <div className="w-full max-w-[820px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              ANSWER-READY FAQ
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Quick answers.
          </h2>
        </div>

        {/* Accordions List */}
        <div className="flex flex-col divide-y divide-slate-200 border-t border-b border-slate-200">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none py-1"
                >
                  <span className="text-slate-900 text-base font-semibold font-['Inter'] pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#0D6EFD] text-lg font-semibold shrink-0">
                    {isOpen ? '−' : '＋'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-1 text-slate-600 text-base font-normal font-['Inter'] leading-relaxed">
                    {faq.answer}
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
