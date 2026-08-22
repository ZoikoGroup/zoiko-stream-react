'use client';

import { useState } from 'react';

interface Faq {
  question: string;
  answer: string;
}

const FAQS: Faq[] = [
  {
    question: 'What is Zoiko Group?',
    answer:
      'Zoiko Group is the parent organization behind ZoikoStream and the wider Zoiko technology portfolio.',
  },
  {
    question: 'How is Zoiko Group related to ZoikoStream?',
    answer:
      'ZoikoStream is built within Zoiko Tech and operates within the wider Zoiko organization. For the fuller relationship model, see Operating Context.',
  },
  {
    question: 'Is Zoiko Group the same as ZoikoStream?',
    answer:
      'No. Zoiko Group is the parent organization; ZoikoStream is the streaming platform. The legal provider for a specific customer service is determined by the applicable agreement.',
  },
  {
    question: 'Does Zoiko Group contract for every ZoikoStream service?',
    answer:
      'Not necessarily. The applicable service terms, order form, or agreement are authoritative for the contracting entity and customer obligations.',
  },
  {
    question: 'Does being part of Zoiko Group mean my data is shared across the Group?',
    answer:
      'No such conclusion should be drawn from group affiliation alone. Data handling follows the applicable privacy notice, agreement, permissions, architecture, and law.',
  },
  {
    question: 'Where can I find verified corporate information?',
    answer:
      'Use the official Zoiko Group destination for group-level corporate information and ZoikoStream Company, Trust Center, Legal, and Newsroom surfaces for platform-specific information.',
  },
];

export default function ZoikoGroupFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              SEO + AEO
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            Quick answers.
          </h2>
        </div>

        <div className="mt-8">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-zinc-200 py-6">
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
                  <p className="mt-3 text-sm leading-6 text-gray-500">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
