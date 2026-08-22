'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is every ZoikoStream live stream recorded?',
    answer:
      'No automatic assumption. Recording is a separate authorized decision. Any automated behavior must be confirmed for the applicable product, workflow, policy and scope.',
  },
  {
    question: 'What does "Automatic, durable capture" mean?',
    answer:
      'Automatic, durable capture means that once authorized, edge ingestion feeds are simultaneously written to high-availability, redundant storage targets with end-to-end cryptographic checksum verification.',
  },
  {
    question: 'When is a recording ready for replay?',
    answer:
      'A recording is ready for replay once boundary index validation, metadata tag verification, rights compliance checks, and target entitlement gates are confirmed.',
  },
  {
    question: 'Can a recording exist without replay?',
    answer:
      'Yes. Recorded assets can remain archived for compliance, auditing, or operational retention purposes without ever being published to public or client replay distribution nodes.',
  },
  {
    question: 'Can replay access differ from live access?',
    answer:
      'Yes. Access entitlements during a live broadcast do not automatically extend to post-live assets. Replay access is independently tokenized and governed by separate playback rules.',
  },
  {
    question: 'How long is a recording retained?',
    answer:
      'Retention duration is dictated by user-defined lifecycle policies, contract terms, and compliance requirements, ranging from immediate deletion post-event to permanent archival storage.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-24 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-recording-replay/bg (66).png"
          alt="FAQ Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-white">
            Recording and replay, answered
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="p-6 bg-zinc-900/90 rounded-xl border border-gray-800 backdrop-blur-md cursor-pointer transition-colors"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-white text-base font-bold  ">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`size-5 text-teal-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {isOpen && (
                  <p className="text-slate-400 text-sm font-normal   leading-relaxed mt-3 pt-3 border-t border-gray-800/80">
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
