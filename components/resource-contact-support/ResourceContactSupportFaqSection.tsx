'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, X } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const FAQS = [
  {
    question: 'How do I contact ZoikoStream support?',
    answer:
      'Use the support router above to select your issue type. We route you to the right path and collect only what is needed.',
  },
  {
    question: 'What information do I need to submit a request?',
    answer:
      'A short subject, description of the issue, and issue category. Additional fields appear based on your selection.',
  },
  {
    question: 'Can I attach files to my support request?',
    answer:
      'Yes. Supported file types and size limits are shown in the upload area. Files are scanned for safety before processing.',
  },
  {
    question: 'How long will it take to get a response?',
    answer:
      'Response times depend on your account entitlement and support path. We do not publish response targets without an authoritative source.',
  },
  {
    question: 'What happens if I submit the same request twice?',
    answer:
      'Duplicate submissions are handled idempotently. Repeated activation will not create duplicate cases.',
  },
  {
    question: 'Do I need to sign in to get support?',
    answer:
      'Sign-in is required only when account-specific context, case history, or entitlement verification is needed. Public support entry remains accessible.',
  },
  {
    question: 'How do I report a security vulnerability?',
    answer:
      'Use the Security vulnerability link in the urgent diversion section. Security reports route through our responsible disclosure process.',
  },
  {
    question: 'Can I get help with an active Live Event?',
    answer:
      'Yes. Use the Active Live Event issue path for operational support during a live broadcast.',
  },
];

export default function ResourceContactSupportFaqSection() {
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
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
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
                <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
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
