'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Who leads ZoikoStream?',
    answer:
      'ZoikoStream is led within Zoiko Group by Founder & Executive Chairman Lennox McLeod, together with the publicly approved leaders shown on this page for product, engineering, Live Events, trust, commercial, and customer responsibilities.',
  },
  {
    question: 'Who founded the group behind ZoikoStream?',
    answer:
      'Lennox McLeod is the Founder & Executive Chairman of Zoiko Group. The Zoiko Group page and Operating Context page provide the current corporate relationship around ZoikoStream.',
  },
  {
    question: 'How are leadership responsibilities organized?',
    answer:
      'ZoikoStream presents public accountability by functional remit rather than exposing an internal reporting-line org chart. Key areas include product, engineering and reliability, Live Events, developer experience, trust and governance, and commercial and customer operations.',
  },
  {
    question: 'How can I contact ZoikoStream leadership?',
    answer:
      'Use the relevant public channel — Enterprise inquiries, Press & media, Developer relations, Careers, or Contact. Personal executive email addresses and direct phone numbers are not published on this page.',
  },
];

export default function LeadershipFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Support
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-neutral-700 sm:text-4xl">
            Quick answers.
          </h2>
        </div>

        {/* Items */}
        <div className="mt-10 border-t border-zinc-200">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-zinc-200 py-8">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 text-left"
                >
                  <h3 className="text-base font-bold leading-7 text-neutral-700">{faq.question}</h3>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-lg font-normal leading-7 text-neutral-700"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-base leading-6 text-gray-500">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
