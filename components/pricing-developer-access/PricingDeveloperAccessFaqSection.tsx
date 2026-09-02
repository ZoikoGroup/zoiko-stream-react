'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'Is there a free tier or trial for developer access?',
    answer:
      'No free tier, trial, or credit is stated as current on this page. Only an explicit, currently approved record can answer that question — this page never implies one by omission.',
  },
  {
    question: 'Do I need approval before I can build?',
    answer:
      'Standard developer self-service access allows instant credential generation upon account validation without manual review steps.',
  },
  {
    question: 'Is the estimate on this page my actual bill?',
    answer:
      'No. The estimate on this page is illustrative only to help you project potential usage costs. Your actual bill will reflect real-time usage metrics and active rate plans.',
  },
  {
    question: 'Where are exact endpoint and schema details documented?',
    answer:
      'Exact endpoints, request schemas, parameters, and authentication headers are documented in our interactive API Reference.',
  },
  {
    question: 'What if my account has different pricing?',
    answer:
      'Custom contracts, enterprise SLAs, and negotiated volume discounts supersede public illustrative estimates once logged into your account dashboard.',
  },
  {
    question: 'Can I get help with a custom or high-volume requirement?',
    answer:
      'Yes! Our solutions engineering team provides architecture reviews and customized commercial terms for high-volume enterprise workloads.',
  },
];

export default function PricingDeveloperAccessFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full px-4 items-center sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-100 flex flex-col justify-start  gap-12 overflow-hidden">
      {/* Header */}
      <div className="w-full  flex flex-col  gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs  font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            ANSWER-READY FAQ
          </span>
        </div>
        <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight">
          Quick answers.
        </h2>
      </div>

      {/* Accordions List */}
      <div className="w-full max-w-4xl flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="w-full py-5 flex flex-col justify-start items-start gap-3">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center text-left gap-4 focus:outline-none group"
              >
                <span className="text-zinc-900 text-base font-semibold font-['Inter'] group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                {isOpen ? (
                  <Minus className="size-5 text-blue-500 shrink-0" />
                ) : (
                  <Plus className="size-5 text-blue-500 shrink-0" />
                )}
              </button>

              {isOpen && (
                <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed pt-1 pr-8">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
