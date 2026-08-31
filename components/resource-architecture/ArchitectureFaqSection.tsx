'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Minus, Plus } from 'lucide-react';

const FAQS = [
  {
    question: 'What is the ZoikoStream Architecture resource?',
    answer:
      'It is a curated directory of authoritative reference architectures built by our solutions architects. Every design explains how to compose platform components to achieve specific business or technical outcomes.',
  },
  {
    question: 'Is an architecture pattern the same as implementation documentation?',
    answer:
      'No. Architecture patterns illustrate high-level design topology and integration options. Concrete implementation step-by-step configurations, credentials, and API fields are governed in Developer documentation.',
  },
  {
    question: 'Can I use these patterns as production blueprints?',
    answer:
      'Yes, they are designed as valid blueprints. However, we recommend confirming edge latency limits, target codecs, and redundancy requirements with a solutions engineer before deploying active nodes.',
  },
  {
    question: 'How do I choose between architecture patterns?',
    answer:
      'Use our interactive wizard tool to narrow down options by Media Mode, Access Level, and operational capability. Each choice leads to a tailored recommendation.',
  },
  {
    question: 'How are diagrams kept current?',
    answer:
      'Every reference diagram belongs to an architecture category owner and undergoes scheduled monthly evaluations. Superseded patterns are automatically deprecated.',
  },
  {
    question: 'Where do I find API details?',
    answer:
      'API endpoints, request schemas, authentication parameters, and sample response objects are thoroughly mapped out in the developers API Reference directory.',
  },
  {
    question: 'Where do I check current service health?',
    answer:
      'You can monitor current regional stream delivery performance, active incident logs, and service status updates on the platform system status dashboard.',
  },
  {
    question: 'Where do I get implementation help?',
    answer:
      'Reach out to our customer support desk or talk directly to our solutions engineering team to build custom, fault-tolerant configurations.',
  },
];

export default function ArchitectureFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background image & Glow overlay snippet */}
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
      <div className="size-[520px] left-[1044px] top-[964px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Frequently asked questions.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Common questions about ZoikoStream architecture patterns and reference designs.
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="w-full p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3 transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-slate-900 text-base font-bold font-['Space_Grotesk'] pr-4">
                  {faq.question}
                </span>
                <div className="size-7 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center shrink-0 bg-white">
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5 text-slate-900" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-slate-900" />
                  )}
                </div>
              </button>

              {isOpen && (
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5 pt-2 border-t border-gray-200/60 w-full">
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
