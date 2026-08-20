'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is ZoikoStream Analytics?',
    answer:
      'Governed measurement and interpretation for approved media workflows; capabilities depend on verified sources and access.',
  },
  {
    question: 'What can ZoikoStream Analytics measure?',
    answer:
      'Approved domains only: media object performance, live workflow state, accessibility and language coverage, delivery and playback behavior, and audience context — each gated by a verified capability registry.',
  },
  {
    question: 'Is ZoikoStream Analytics real time?',
    answer:
      'Where source freshness allows. Live workflow and delivery metrics update within seconds; other domains follow their defined freshness and completeness bounds.',
  },
  {
    question: 'How is Analytics different from Stream Monitoring?',
    answer:
      'Monitoring watches infrastructure health in the moment. Analytics answers governed questions about outcomes over time, with full definitions, lineage and quality evidence attached to every result.',
  },
  {
    question: "Does a 'viewer' metric mean a verified person watched?",
    answer:
      'No. Viewer counts reflect verified session activity, not confirmed individual identity. Language and demographic inference are explicitly suppressed.',
  },
  {
    question: 'Can Analytics show trends and comparisons?',
    answer:
      'Yes, within the time basis and scope registered for each metric. Comparisons only render once object, definition, and quality checks are established.',
  },
  {
    question: 'How are privacy and access controlled?',
    answer:
      'Role-based permission scopes govern who may view raw, anonymized, or aggregated data, and every export is logged with cryptographic evidence.',
  },
  {
    question: 'Is there an Analytics API?',
    answer:
      'Yes. Programmable endpoints support authenticated queries, webhooks, and bulk export routes for production automation.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0a0f1a] border-[#1e293b] border-b border-solid flex flex-col gap-8 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/faq-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute bg-[rgba(10,15,26,0.62)] inset-0" />
      </div>

      <div className="flex flex-col gap-8 xl:gap-[56px] items-start max-w-[1216px] mx-auto relative z-10 w-full">
        {/* Section Header */}
        <h2 className="font-spaceGrotesk font-bold leading-[1.3] xl:leading-[60.8px] relative shrink-0 text-[28px] xl:text-[37.9px] text-white tracking-[-0.38px] w-full">
          Frequently asked questions
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-4 xl:gap-[16px] items-start relative shrink-0 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border border-[#232b3a] border-solid flex flex-col gap-3 xl:gap-[12px] items-start relative rounded-[12px] shrink-0 w-full p-6 xl:p-[24px] ${
                  isOpen ? 'bg-[#10151e]' : 'bg-[rgba(16,21,30,0.8)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between relative shrink-0 w-full text-left"
                >
                  <span className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[16px] text-white">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="text-white size-[16px] shrink-0" />
                  ) : (
                    <ChevronDown className="text-white size-[16px] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <p className="font-spaceGrotesk font-normal leading-[22px] relative shrink-0 text-[#aab3c4] text-[14px] w-full">
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
