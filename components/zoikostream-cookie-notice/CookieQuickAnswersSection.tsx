'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Does ZoikoStream use cookies?',
    answer:
      'Yes — strictly necessary cookies are always active for core functionality like sign-in and security. Functional, analytics, and advertising cookies are optional and only activate if you approve that category.',
  },
  {
    question: 'Can I reject all non-essential cookies?',
    answer:
      'Yes. Click "Reject non-essential" in the settings panel above to disable functional, analytics, and advertising cookies immediately.',
  },
  {
    question: 'Does ZoikoStream honor Global Privacy Control (GPC)?',
    answer:
      'Signal recognition is being technically audited. When signal integration is active and verified, exact behavioral effects will be published here.',
  },
  {
    question: 'Is this the complete list of every cookie ZoikoStream uses?',
    answer:
      'This table provides an illustrative, source-controlled demonstration of representative cookies across all categories. Actual tokens scale by verified feature requirements.',
  },
  {
    question: 'Can I change my choice later?',
    answer:
      'Yes, you can return to this page and update your cookie preferences at any time. Changes take effect on subsequent requests.',
  },
  {
    question: 'What if saving my preferences fails?',
    answer:
      'If a local storage or network fault prevents saving, your prior safe preference remains strictly preserved. We never silently default to accepting all tracking.',
  },
];

export default function CookieQuickAnswersSection() {
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
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
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
