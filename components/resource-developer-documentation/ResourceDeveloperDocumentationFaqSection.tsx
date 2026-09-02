'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, X } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const FAQS = [
  {
    question: 'How does ZoikoStream ensure documentation accuracy?',
    answer:
      'Every Current page requires approved source references, source ownership, review ownership, freshness dates, and lifecycle state — enforced by a publish guard.',
  },
  {
    question: 'What does Verified mean on a code example?',
    answer:
      'Verified examples have been tested against the documented version, carry dependency IDs, and are automatically flagged when dependencies change.',
  },
  {
    question: 'Can I trust the API reference to be current?',
    answer:
      'API reference content is source-governed. Objects missing source refs or past their review date cannot remain Current.',
  },
  {
    question: 'How are deprecated features handled?',
    answer:
      'Deprecated docs show successor, deadline, compatibility, and migration steps — only when source-backed.',
  },
  {
    question: 'Does documentation cover all environments?',
    answer:
      'Environment selectors appear only when source-backed environment-specific content exists.',
  },
  {
    question: 'How do I report a documentation issue?',
    answer:
      'Use Contact support with the Developer/API category. Documentation feedback routes to the technical writing team.',
  },
  {
    question: 'Are code examples safe to use in production?',
    answer:
      'Verified examples are tested and use synthetic data. Always verify against the current API reference before production use.',
  },
  {
    question: 'What SDKs are officially supported?',
    answer:
      'SDK support is determined by the SDK registry. Documentation does not imply support from syntax alone.',
  },
];

export default function ResourceDeveloperDocumentationFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3 max-w-4xl">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Frequently asked questions
        </h2>
      </div>

      {/* FAQs List */}
      <div className="relative z-10 w-full flex flex-col gap-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-4 cursor-pointer hover:shadow-xs transition-shadow"
              onClick={() => toggleFaq(idx)}
            >
              <div className="w-full flex justify-between items-center gap-4">
                <h3 className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                  {faq.question}
                </h3>
                <span className="text-blue-500 text-lg font-bold font-['Space_Grotesk'] shrink-0">
                  {isOpen ? <X className="size-5" /> : <Plus className="size-5" />}
                </span>
              </div>

              {isOpen && (
                <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-6 pt-1">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
