'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bg27 from '@/public/images/resources-case-studies/bg (27).png';
import { Minus, Plus } from 'lucide-react';

const METHODOLOGY_FAQS = [
  {
    question: 'How are metrics verified before publication?',
    answer:
      'Every single metric is generated directly from our database audit telemetry. A lead systems engineer compiles the log baseline, which is then verified against independent third-party network auditors before client-review sign-off.',
  },
  {
    question: 'What happens when a customer withdraws approval?',
    answer:
      'In compliance with our Customer Trust Commitment, any case study with withdrawn consent is completely purged from our active platforms within 24 hours. Archived offline cold replication vaults are purged at the next scheduled audit window.',
  },
  {
    question: 'How are anonymized case studies protected from re-identification?',
    answer:
      "To protect client identity, we strip explicit geographical markers, specific currency values, and precise network scale signatures. These details are replaced with generalized baseline categories (e.g. 'Global Sports Broadcaster').",
  },
  {
    question: 'How often are case studies reviewed for accuracy?',
    answer:
      'All active case studies are scheduled for a rigorous administrative accuracy review every six months. Content that no longer represents current platform architecture benchmarks is retired or marked as historical archive.',
  },
  {
    question: 'Can I request a case study about a specific use case?',
    answer:
      'Yes. Our Solutions Architecture group maintains a large library of internal, anonymized deployment logs. If you require proof regarding a highly specific network workflow, contact our team to request a review of eligible documents.',
  },
];

export default function CaseStudiesMethodologySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg27}
          alt="Methodology Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Customer-proof methodology
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          We are transparent about how evidence is collected, verified, and audited. Choose inspectable telemetry over marketing claims.
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        {METHODOLOGY_FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`w-full p-6 bg-slate-800 rounded-xl outline outline-1 outline-offset-[-1px] ${
                isOpen ? 'outline-teal-400' : 'outline-gray-800'
              } flex flex-col justify-start items-start gap-3 transition-all`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-white text-base font-bold font-['Space_Grotesk'] pr-4">
                  {faq.question}
                </span>
                <div className="size-7 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-700 flex justify-center items-center shrink-0 bg-slate-900">
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5 text-teal-400" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>
              </button>

              {isOpen && (
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5 pt-2 border-t border-gray-700/60 w-full">
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
