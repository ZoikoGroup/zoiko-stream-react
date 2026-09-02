'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const BOUNDARY_FAQS = [
  {
    question: 'How do I contact ZoikoStream support?',
    answer:
      'Use Contact support for general issues, or one of the specialist routes above (Developer, Enterprise, Live Events, Report an issue, Accessibility) when your issue matches that authority.',
  },
  {
    question: 'Is support available 24/7?',
    answer:
      'Standard support operates during business hours, while Enterprise and Live Events plans include dedicated 24/7 coverage as defined in your SLA.',
  },
  {
    question: 'How is Report an issue different from Contact support?',
    answer:
      'Report an issue creates a structured bug ticket for platform degradation or technical glitches, whereas Contact support routes to general customer assistance.',
  },
  {
    question: 'Where do I check if ZoikoStream is down?',
    answer:
      'Check the System Status widget or visit our live status page for real-time service availability and incident announcements.',
  },
  {
    question: 'Do I need to disclose a disability to get accessibility help?',
    answer:
      'No disability disclosure is required. Simply describe the accessibility barrier in your own words.',
  },
  {
    question: 'Can I get billing help here?',
    answer:
      'Yes, billing questions can be routed through Contact support or managed directly from your Account settings → Billing section.',
  },
];

export default function SupportHelpCenterFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-center overflow-hidden">
      <div className="w-full max-w-4xl flex flex-col justify-start items-start gap-10">
        {/* Header */}
        <div className="flex flex-col justify-start items-start gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-[3px]" />
            <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wider">
              SUPPORT-BOUNDARY FAQ
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
            Quick answers.
          </h2>
        </div>

        {/* FAQ Accordions List */}
        <div className="w-full flex flex-col">
          {BOUNDARY_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="py-5 border-b border-zinc-200 flex flex-col gap-3 cursor-pointer transition-colors"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="w-full flex justify-between items-center gap-4">
                  <h3 className="text-zinc-900 text-base font-semibold font-['Inter']">
                    {faq.question}
                  </h3>
                  <span className="text-blue-500 text-lg font-semibold font-['Inter'] shrink-0">
                    {isOpen ? <Minus className="size-5 text-blue-500" /> : <Plus className="size-5 text-blue-500" />}
                  </span>
                </div>

                {isOpen && (
                  <p className="text-gray-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed pt-1 max-w-3xl">
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
