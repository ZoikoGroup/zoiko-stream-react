'use client';

import { useState } from 'react';

interface Faq {
  question: string;
  answer: string;
}

const FAQS: Faq[] = [
  {
    question: 'Is ZoikoStream a separate company?',
    answer:
      'ZoikoStream is presented on this site as the streaming platform brand. Do not infer legal status from the brand name. The legal entity providing or contracting for a specific service is stated in the applicable terms, order form, or agreement.',
  },
  {
    question: 'Who is behind ZoikoStream?',
    answer:
      'ZoikoStream sits within the wider Zoiko organization. Zoiko Group provides the parent-organization context, while Zoiko Tech is identified on this site as the technology company where ZoikoStream is built.',
  },
  {
    question: 'How does Zoiko Cloud relate to ZoikoStream?',
    answer:
      'Zoiko Cloud is presented as a shared technology and infrastructure layer that may support eligible ZoikoStream services. That technology relationship should not be read as a corporate-ownership or contracting relationship.',
  },
  {
    question: 'Where does Live Events fit?',
    answer:
      'Live Events is a specialized ZoikoStream capability for live broadcast and event-specific streaming experiences. Users planning or operating live broadcasts should use the dedicated Live Events routes and inquiry paths.',
  },
  {
    question: 'Which company do I contract with?',
    answer:
      'Use the legal entity named in the applicable service terms, order form, or customer agreement. The Operating Context page is explanatory and must never replace customer-specific contractual information.',
  },
  {
    question: 'Where can I verify security and service health?',
    answer:
      'Use the Trust Center for published security, privacy, resilience, and governance information, and System Status for public service-health and incident communications.',
  },
];

export default function OperatingContextFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
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

        <div className="mt-8 border-t border-zinc-200">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-zinc-200 py-7">
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
