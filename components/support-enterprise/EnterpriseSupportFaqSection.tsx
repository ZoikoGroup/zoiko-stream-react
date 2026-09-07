'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'What is ZoikoStream Enterprise support?',
    answer:
      'Direct L1 developer/engineering support with SLA compliance bounds built strictly for contracted organizations.',
  },
  {
    question: 'Who can access Enterprise support?',
    answer:
      'Authorized administrative users registered under a verified Enterprise-tier ORG_ID signature.',
  },
  {
    question: 'Is support available 24/7?',
    answer:
      'Yes. Our L1 operations engineering staff maintains constant active shift rotations globally.',
  },
  {
    question: 'What is the response time or SLA?',
    answer:
      'Target response times scale by diagnostic context. Mission-critical live broadcast routes triage within 15 minutes.',
  },
  {
    question: 'How do I contact Enterprise support?',
    answer:
      'By authorizing account context through our Structured Case Intake bridge to ensure instant routing.',
  },
  {
    question: 'Where do I report a service outage?',
    answer:
      'Directly through Section B ingestion or our dedicated Service Availability / Incident triage channel.',
  },
  {
    question: 'Where do I get API or SDK help?',
    answer:
      'Submit an integration brief to receive immediate technical code consultation from Developer Support.',
  },
  {
    question: 'Where do I get Live Event help?',
    answer:
      'Active broadcast support slots are directly routed to the L1 operations on-shift engineers.',
  },
];

export default function EnterpriseSupportFaqSection() {
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
            Enterprise support answers from current sources only
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={faq.question}
                className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-5 shadow-lg transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-teal-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="text-xs sm:text-[13px] text-slate-400 mt-2.5 leading-relaxed">
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
