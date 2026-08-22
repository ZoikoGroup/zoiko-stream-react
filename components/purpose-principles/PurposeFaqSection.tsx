'use client';

import { useState } from 'react';

interface Faq {
  question: string;
  answer: string;
}

const FAQS: Faq[] = [
  {
    question: "What is ZoikoStream's purpose?",
    answer:
      'To make professional video and live streaming easier to build, dependable to operate, and trustworthy for the people who rely on it.',
  },
  {
    question: 'What principles guide ZoikoStream?',
    answer:
      'Six principles: reliability, simplicity, clarity, experience, trust, and accessibility. Together they describe how we build the platform and how we operate it.',
  },
  {
    question: 'How do these principles affect ZoikoStream Live Events?',
    answer:
      'Live Events applies them as role-aware controls, readiness checks, run-of-show clarity, clear operational ownership, and incident-aware workflows built around the pressure of a live broadcast.',
  },
  {
    question: "How can customers verify ZoikoStream's trust and reliability commitments?",
    answer:
      'Through the evidence paths above — System Status for current service health and incident communications, the Trust Center for security and privacy information, and developer resources for the implementation model.',
  },
];

export default function PurposeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#EEF1F6]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-500" />
            <span className="font-mono text-xs uppercase leading-5 tracking-wide text-blue-500">
              SEO + AEO
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-9 text-zinc-900 sm:text-3xl">
            Quick answers.
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-8 max-w-4xl">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-zinc-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-semibold text-zinc-900">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-lg font-semibold leading-none text-blue-500">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <p className="pb-6 pr-8 text-base leading-6 text-gray-500">
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
