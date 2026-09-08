'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'What personal data does ZoikoStream collect?',
    answer:
      "Account identifiers, usage and technical logs, payment/billing information, support communications, and marketing preferences you've opted into — see How personal data is handled above for the full breakdown.",
  },
  {
    question: 'Does ZoikoStream sell my personal data?',
    answer:
      'No. We do not sell personal data for monetary or other valuable consideration under applicable data privacy frameworks.',
  },
  {
    question: 'How do I exercise my privacy rights?',
    answer:
      'Use the "Submit a privacy request" form above or submit a request directly through our privacy portal. We verify your identity before releasing or altering any personal data.',
  },
  {
    question: 'Is this the same as the Cookie notice?',
    answer:
      'No. This Privacy Notice covers personal data across accounts and services. The Cookie Notice specifically handles browser tracking technologies and website preference controls.',
  },
  {
    question: 'How long does ZoikoStream keep my data?',
    answer:
      'Data retention is determined by account state, legal obligations, and operational necessity as outlined in the Retention disclosure section above.',
  },
  {
    question: 'Can this page tell me if a specific law applies to me?',
    answer:
      'No. This notice describes our general data processing practices. It does not provide individualized legal determinations. Consult qualified legal counsel for advice on specific regulatory frameworks.',
  },
];

export default function PrivacyQuickAnswersSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="relative w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-blue-600 text-xs">▸</span>
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            ANSWER-READY FAQ
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-8">
          Quick answers.
        </h2>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl divide-y divide-slate-200/80">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div key={faq.question} className={idx === 0 ? '' : 'pt-4'}>
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left py-2 group cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-blue-600 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 pb-3">
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
