'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What is Assured Event?',
    answer:
      'A premium event-assurance service tier that provides pre-event verification, dedicated live-ops engineer monitoring, and cryptographically signed operational outcomes. It is engineered for enterprise-grade broadcasts where failures carry catastrophic cost.',
  },
  {
    question: 'Is it available for every event?',
    answer:
      'No. Assured Event requires a defined operational brief, custom pre-air testing, and allocated L1/L2 engineering team scheduling. It is reserved for high-stakes programs that pass our planning qualification process.',
  },
  {
    question: 'What is included in the service?',
    answer:
      'Included: Dual-path SRT ingestion, WCAG accessibility validation, dedicated communication hotlines, validated change queueing during live air, and comprehensive post-event closeout reporting.',
  },
  {
    question: 'Does it include managed production?',
    answer:
      'No. ZoikoStream is a secure, high-integrity transmission platform. We do not provide camera crews, switchers, or sound staging, but we cooperate closely with your existing production partners.',
  },
  {
    question: 'Does it include backup or failover?',
    answer:
      'Yes. Continuous automated primary/secondary SRT ingest switching is built natively into our CDN endpoints, paired with manual override triggers monitored by your dedicated team.',
  },
  {
    question: 'Are support response times guaranteed?',
    answer:
      'Yes. Our Assured Event agreement guarantees direct, sub-minute hotlines to senior engineers actively monitoring your specific stream session.',
  },
  {
    question: 'What happens if the event changes after testing?',
    answer:
      'Any post-testing change undergoes our formal Change Control Queue verification before go-live, ensuring modified settings are validated under simulated load.',
  },
  {
    question: 'What happens after the event?',
    answer:
      'Within 24 hours of closeout, we package, sign, and deliver a cryptographic operational audit log detailing exact performance, latency, resolved incidents, and VOD archival verification.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className="w-full bg-slate-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.35), rgba(2, 6, 23, 0.35)), url('/images/assured-event/faq-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Frequently asked questions
        </h2>
      </div>

      <div className="mx-auto w-full max-w-7xl flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="w-full bg-zinc-950/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full px-5 py-4 flex justify-between items-center gap-4 text-left"
              >
                <span className="text-slate-100 text-sm sm:text-base font-bold">{faq.question}</span>
                <span aria-hidden className="shrink-0 text-blue-500 text-lg font-normal leading-none">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-slate-400 text-xs sm:text-sm leading-6">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
