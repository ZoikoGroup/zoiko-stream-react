'use client';

import { useState } from 'react';

interface Faq {
  question: string;
  answer: string;
}

const FAQS: Faq[] = [
  {
    question: 'What is Adaptive Video Delivery?',
    answer:
      'Adaptive Video Delivery explains how ZoikoStream can qualify and respond to changing delivery conditions across prepared media, playback environments, networks, policy, and service state.',
  },
  {
    question: 'Does adaptive delivery guarantee video quality?',
    answer:
      'No. Delivery behavior can respond to verified conditions, but the outcome is not guaranteed. Quality claims require current, scoped evidence.',
  },
  {
    question: 'What conditions affect delivery?',
    answer:
      'Six families: media preparation, playback environment, network, policy, service state, and user choice or accessibility preferences.',
  },
  {
    question: 'How does this relate to Secure Playback?',
    answer:
      'Secure Playback owns authorization upstream. An authorized playback request does not guarantee a particular delivery method or quality outcome.',
  },
  {
    question: 'What happens when conditions degrade?',
    answer:
      'The system exposes degraded or unavailable states with scope, evidence, and routes to System Status or Support.',
  },
  {
    question: 'Does ZoikoStream support all devices and browsers?',
    answer:
      'Only verified environments with maintained evidence appear as supported. Stale or unknown compatibility renders as unknown, not supported.',
  },
  {
    question: 'How are performance claims validated?',
    answer:
      'Every performance number requires definition, method, scope, sample, period, aggregation, evidence, and limitations before publication.',
  },
  {
    question: 'What is the next destination after Adaptive Video Delivery?',
    answer:
      'Global Distribution is the next sibling in the SECURE & DELIVER sequence. It remains blocked until this specification is approved.',
  },
];

export default function AdaptiveDeliveryFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="relative isolate w-full bg-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/platform-adaptive-video-delivery/faq-bg.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-28">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Frequently asked questions
          </h2>

          <p className="max-w-4xl text-base leading-7 text-slate-600 lg:text-lg">
            Explore detailed information about how we deliver adaptive playback streams.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 lg:mt-12">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-xl bg-white p-6 outline-1 -outline-offset-1 outline-slate-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 text-left"
                >
                  <h3 className="text-base font-bold text-slate-900">
                    {faq.question}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-500"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
