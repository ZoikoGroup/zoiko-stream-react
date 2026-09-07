'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How do I find a specific API operation?',
    answer:
      'Search by operation ID, method+path, resource name, or schema ID. Exact identity outranks fuzzy relevance.',
  },
  {
    question: "What does 'Current' lifecycle mean?",
    answer:
      'The operation has a validated contract source, assigned owners, fresh review, and passed publication gate.',
  },
  {
    question: 'Can I try API requests directly?',
    answer:
      'Interactive execution is not available by default. Use verified examples and approved developer access.',
  },
  {
    question: 'How are errors documented?',
    answer:
      'Each error is a canonical object with identity, applicable operations, and recovery authority. No fabricated error catalogs.',
  },
  {
    question: 'What happens when an API version is deprecated?',
    answer:
      'Deprecated operations show reason, successor, effective date, and migration guidance from the contract registry.',
  },
  {
    question: 'Are rate limits published per operation?',
    answer:
      'Only when source-backed. Otherwise, the Rate limits authority provides policy guidance.',
  },
  {
    question: 'How do I report an API documentation issue?',
    answer:
      'Contact support with redacted context. Material corrections are tracked with corrected_at metadata.',
  },
  {
    question: "Where do I start if I'm new to ZoikoStream APIs?",
    answer:
      'Developer documentation for concepts and guides, then Authentication for access, then API reference for exact contracts.',
  },
];

export default function ApiFaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Graphic */}
      <div
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/api%20reference/hero-bg.png')`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight">
            Direct answers to common API reference questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-slate-800/80 border-t border-b border-slate-800/80">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div key={faq.question} className="py-5">
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
                  <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed max-w-4xl">
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
