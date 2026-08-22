'use client';

import { useState } from 'react';

interface Faq {
  question: string;
  answer: string;
}

const FAQS: Faq[] = [
  {
    question: 'What does resilient delivery mean?',
    answer:
      'A failure-aware continuity model covering detection, qualified fallback/recovery, verification, communication, and evidence where supported.',
  },
  {
    question: 'Does resilient delivery guarantee uptime?',
    answer:
      'No. Resilient delivery is about qualified fallback and continuity when failures occur. Uptime targets are described in SLAs and service documentation.',
  },
  {
    question: 'Does it mean automatic failover?',
    answer:
      'Not always. Failover may be automatic in some scenarios, while others may require qualified intervention, verification, or evidence-based recovery.',
  },
  {
    question: 'Is adaptive delivery the same as resilient delivery?',
    answer:
      'No. Adaptive delivery focuses on bitrate switching and quality adaptation. Resilient delivery focuses on failure detection, fallback, and continuity.',
  },
  {
    question: 'Where do I see current service health?',
    answer:
      'Check System Status and Support for current availability, incidents, and maintenance windows. Resilient Delivery surfaces continuity state and routing.',
  },
];

export default function ResilientDeliveryFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="relative isolate w-full border-y border-gray-800 bg-slate-950">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/platform-resilient-delivery/faq-bg.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover brightness-150"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-28">
        <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 flex flex-col gap-4 lg:mt-14">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-xl bg-transparent p-6 outline-1 -outline-offset-1 outline-white/15"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 text-left"
                >
                  <h3 className="text-base font-bold text-white">{faq.question}</h3>

                  <span
                    aria-hidden="true"
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-sm text-slate-400 outline-1 -outline-offset-1 outline-white/20 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
