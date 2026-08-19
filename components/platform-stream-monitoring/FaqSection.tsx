'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is ZoikoStream Stream monitoring?',
    answer:
      'A public capability area for understanding how authorized teams can evaluate scoped media-workflow state and health, inspect evidence/freshness, and route troubleshooting or incidents to the correct owner.',
  },
  {
    question: 'Is Stream monitoring the same as Analytics?',
    answer:
      'No. Monitoring focuses on operational state, health and incidents. Analytics interprets governed observations for defined questions and periods.',
  },
  {
    question: "Does 'live health and diagnostics' mean real-time automatic diagnosis?",
    answer:
      'Not by itself. The navigation descriptor is information scent; observation freshness, diagnostic methods and automation require separate verified authority.',
  },
  {
    question: 'How is Stream monitoring different from System Status?',
    answer:
      'System Status covers provider-confirmed public service health. Stream monitoring covers authorized customer/workflow-specific operational context.',
  },
  {
    question: 'Can monitoring identify root cause automatically?',
    answer:
      'The public page does not make that claim. Diagnostics must separate observed evidence, possible contributing conditions and verified root cause.',
  },
  {
    question: 'Can I receive alerts or notifications?',
    answer:
      'Only verified alert/notification capabilities and channels should be published. The page does not invent thresholds, channels, delivery guarantees or response times.',
  },
  {
    question: 'What happens when monitoring data is stale or missing?',
    answer:
      'The state becomes visibly stale/partial/unknown as applicable; the UI must not present the last known result as current.',
  },
  {
    question: 'Where do I go if I have an active issue?',
    answer:
      'A specific stream/workflow problem should route to authorized monitoring or Support; a broad provider incident question routes to System Status.',
  },
];

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>(faqs.map((_, index) => index));

  const toggle = (index: number) =>
    setOpenItems((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    );

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0f1a] px-6 py-20 md:px-[112px] md:py-24">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/platform-stream-monitoring/faq-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full max-w-none object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/55" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.4px] text-white md:text-[37.9px]">
            Frequently asked questions
          </h2>
          <p className="text-base text-[#aab3c4] md:text-[18px] md:leading-7">
            Clear answers to common monitoring questions.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-[#232b3a] bg-[#161d2b] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-bold text-white">{faq.question}</span>
                  <span className="shrink-0 text-[#00d4aa]" aria-hidden="true">
                    {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-[13px] leading-[1.7] text-[#aab3c4]">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
