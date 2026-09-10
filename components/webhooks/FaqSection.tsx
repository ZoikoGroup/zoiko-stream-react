'use client';

import React from 'react';

const faqs = [
  {
    question: 'What webhook events does ZoikoStream support?',
    answer: 'Only events with Current Event Registry records. No invented event names from industry convention.',
  },
  {
    question: 'Are webhooks delivered via POST with JSON?',
    answer: 'Current delivery profile controls method and content type. No assumption from industry convention.',
  },
  {
    question: 'How do I verify webhook signatures?',
    answer: 'Current Verification Profile only. No assumed HMAC-SHA256 or header names.',
  },
  {
    question: 'How many times will delivery retry?',
    answer: 'Current delivery profile if public. No invented retry counts or backoff schedules.',
  },
  {
    question: 'Are events delivered exactly once?',
    answer: 'No exactly-once claim without explicit end-to-end source contract. Design consumers for duplicate-safe processing.',
  },
  {
    question: 'Are events delivered in order?',
    answer: 'No ordering guarantee without current delivery profile. Application must handle out-of-order possibility.',
  },
  {
    question: 'Can I replay missed events?',
    answer: 'Only current replay capability with exact scope and retention window. No assumed infinite history.',
  },
  {
    question: 'What should I share with support?',
    answer: 'Safe event and delivery IDs only. Never share secrets, full signed payloads, or signature header values.',
  },
  {
    question: 'Does documentation mean I have access?',
    answer: 'No. Documentation does not establish environment availability, account entitlement, or plan eligibility.',
  },
  {
    question: 'How do I get started?',
    answer: 'Review event catalog, configure endpoint per requirements, implement verification, test safely, then monitor via diagnostics.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="FAQ-Section">
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <h2 className="[word-break:break-word] font-sans font-bold text-[#f1f5f9] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] w-full">
          Frequently asked questions
        </h2>

        <div className="flex flex-col gap-[16px] items-start w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[#181b21] border border-[#1e2530] border-solid rounded-[12px] w-full overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex gap-4 justify-between items-center px-[24px] py-[20px] text-left w-full cursor-pointer"
                >
                  <span className="font-sans font-bold text-[#f1f5f9] text-[15px] sm:text-[16px]">{faq.question}</span>
                  <span className="font-sans font-normal text-[#94a3b8] text-[20px] leading-none shrink-0" aria-hidden>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <p className="font-sans font-normal text-[#94a3b8] text-[13px] leading-[20px] px-[24px] pb-[20px]">
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
