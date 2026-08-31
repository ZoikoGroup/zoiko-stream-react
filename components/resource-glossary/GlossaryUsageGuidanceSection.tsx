'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Minus, Plus } from 'lucide-react';

const GUIDANCE_FAQS = [
  {
    question: 'How are glossary terms selected and approved?',
    answer:
      'Our standards and validation working group reviews emerging RFC specifications, broadcast engineering frameworks, and native protocol standards weekly. Approved terms are validated against current architectural documentation before publication.',
  },
  {
    question: 'How often are definitions reviewed and updated?',
    answer:
      'Definitions undergo scheduled quarterly reviews, as well as immediate updates following major platform API releases or new IETF/W3C protocol standardization events.',
  },
  {
    question: 'Can I suggest a new term or correction?',
    answer:
      'Yes. Developers and operators can submit term recommendations or technical feedback directly through our developer support portal or public documentation repository.',
  },
  {
    question: 'How do deprecated terms get handled?',
    answer:
      'Legacy or deprecated streaming terms are flagged with explicit deprecation banners and cross-linked to modern replacement protocols or architectural patterns.',
  },
  {
    question: 'Are these definitions the same as in the documentation?',
    answer:
      'Yes. The glossary is built directly from canonical platform schemas to ensure exact alignment across developer docs, API specifications, and architecture whitepapers.',
  },
];

export default function GlossaryUsageGuidanceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background overlay snippet */}
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
      <div className="size-[520px] left-[1068px] top-[620px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-gray-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60.80px]">
          Glossary usage guidance.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          How terms are governed, updated, and maintained.
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        {GUIDANCE_FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`w-full p-6 bg-slate-50 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] ${
                isOpen ? 'outline-teal-400' : 'outline-gray-200'
              } flex flex-col justify-start items-start gap-3 transition-all`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-slate-900 text-lg font-bold font-['Space_Grotesk'] pr-4">
                  {faq.question}
                </span>
                <div
                  className={`size-7 rounded-2xl outline outline-1 outline-offset-[-1px] ${
                    isOpen ? 'outline-teal-400' : 'outline-gray-300'
                  } flex justify-center items-center shrink-0 bg-white`}
                >
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5 text-teal-400" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-slate-600" />
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
