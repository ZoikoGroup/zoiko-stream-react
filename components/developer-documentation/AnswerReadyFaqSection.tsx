'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is ZoikoStream Documentation?',
    a: 'A technical guidance hub for concepts, implementation guides, troubleshooting, and production operation. It routes exact endpoint schemas to the API Reference.',
  },
  {
    q: 'Where should I start?',
    a: 'Start with the Quickstart guide if you want to create a live stream quickly, or explore Core Concepts if you are evaluating architecture.',
  },
  {
    q: 'Does Documentation include API endpoint details?',
    a: 'Documentation explains concepts and workflows, while exact typed endpoints and parameters are defined in the API Reference.',
  },
  {
    q: 'How do I know a page is current?',
    a: 'Each page features a currentness status tag and last-verified date badge.',
  },
  {
    q: 'Where do I find authentication guidance?',
    a: 'Review the Prerequisites before requests section or navigate to the dedicated Authentication page.',
  },
  {
    q: 'Where do I troubleshoot production issues?',
    a: 'Use the Symptom to safe resolution guide or check current platform status on System Status.',
  },
  {
    q: 'Can I get developer support without contacting sales?',
    a: 'Yes, Developer support is a direct technical route available to all registered developers.',
  },
  {
    q: 'Are code examples production-ready?',
    a: 'All code examples are validated against the current API version with clear dependency constraints.',
  },
];

export function AnswerReadyFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              ANSWER-READY FAQ
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Quick answers.
          </h2>
        </div>

        {/* 8 Accordion FAQ Items */}
        <div className="w-full max-w-[850px] flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 flex flex-col gap-2">
                <div
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center cursor-pointer gap-4"
                >
                  <h3 className="text-zinc-900 text-base font-semibold">{faq.q}</h3>
                  <span className="text-blue-600 text-lg font-bold">{isOpen ? '−' : '＋'}</span>
                </div>

                {isOpen && (
                  <p className="text-gray-500 text-sm leading-relaxed pt-2 max-w-[750px]">
                    {faq.a}
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
