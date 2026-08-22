'use client';

import { useState } from 'react';

interface Faq {
  question: string;
  answer: string;
}

const FAQS: Faq[] = [
  {
    question: 'Where is ZoikoStream delivery available?',
    answer:
      'Availability is determined by governed capability-to-geography records with state, conditions, dates, evidence, and limitations. Check the distribution scope for current verified regions.',
  },
  {
    question: 'Does global distribution mean worldwide coverage?',
    answer:
      'No. Global distribution is a category label, not a coverage claim. Verified scope, explicit exclusions, and current evidence determine actual availability.',
  },
  {
    question: 'Is delivery availability the same as data residency?',
    answer:
      'No. Delivery geography, infrastructure presence, processing location, storage location, and legal residency are five separate concepts and are never inferred from one another.',
  },
  {
    question: 'Which regions support live versus on-demand delivery?',
    answer:
      'Availability can vary by context. A geography may be available for VOD but not live streaming, or for enterprise but not developer sandbox environments.',
  },
  {
    question: 'How does ZoikoStream choose delivery routes?',
    answer:
      'Route selection is described at a public-safe conceptual level only. Exact routing algorithms, CDN architecture, and provider details require Engineering documentation authority.',
  },
  {
    question: 'What performance should I expect in a specific region?',
    answer:
      'Performance evidence is published only with approved methodology including metric definition, measurement period, conditions, sample, and limitations.',
  },
  {
    question: 'What happens if a delivery path fails?',
    answer:
      'Failure handling and continuity are owned by Resilient Delivery. Global Distribution shows current availability state and routes to System Status and Support.',
  },
  {
    question: 'How is media protected during distribution?',
    answer:
      'Media protection is owned by Secure Playback and Media Security. This page describes distribution scope, not authorization or encryption details.',
  },
];

export default function GlobalDistributionFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="relative isolate w-full border-y border-gray-800 bg-slate-900">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/platform-global-distribution/faq-bg.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover brightness-150"
        />
        <div className="absolute inset-0 bg-slate-900/25" />
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
                    className={`shrink-0 text-sm text-slate-400 transition-transform ${
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
