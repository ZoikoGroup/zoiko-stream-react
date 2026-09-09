'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Do these Terms apply to Live Events?',
    answer: 'Yes, alongside additional service-specific terms for Live Events. Where the two conflict, the Live Events-specific terms control for that service only.',
  },
  {
    question: 'Who owns the video content I upload?',
    answer: 'You retain ownership of the video, data, and other content you upload or stream through the services ("Your Content"). You grant us a limited license to host, process, and transmit Your Content solely as needed to provide the services to you.',
  },
  {
    question: 'Can my account be suspended without notice?',
    answer: 'Immediate suspension may occur without prior notice if we reasonably believe your account presents a security or legal risk to the services or others.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'Upon voluntary cancellation by you, access ends at the close of your current billing period, unless stated otherwise. Provisions that by their nature should survive will continue to apply.',
  },
  {
    question: 'How will I know if these Terms change?',
    answer: 'We may update these Terms from time to time. Material changes will be notified with reasonable advance notice before they take effect.',
  },
  {
    question: 'Is this page legal advice?',
    answer: 'This page is public contract information. It does not replace legal advice for your specific situation — for account-specific questions, contact Legal.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-[#f8fafc]">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col justify-start items-start gap-5">
        
        {/* Header */}
        <div className="w-full max-w-[740px] pt-1.5 flex flex-col justify-start items-start gap-3.5">
          <div className="inline-flex justify-start items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#4483f9] rounded-[3px]"></div>
            <span className="text-[#4483f9] text-xs font-normal font-mono uppercase leading-5 tracking-wide">
              ANSWER-READY FAQ
            </span>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <h2 className="text-[#0f172a] text-2xl font-semibold font-sans leading-8">
              Quick answers.
            </h2>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full max-w-[820px] flex flex-col justify-start items-start">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="w-full border-b border-slate-200 flex flex-col justify-start items-start"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-1 py-5 flex justify-between items-center text-left hover:text-[#4483f9] transition-colors"
                >
                  <div className="flex flex-col justify-start items-start">
                    <span className="text-[#0f172a] text-base font-semibold font-sans">
                      {faq.question}
                    </span>
                  </div>
                  <div className="pt-px pb-0.5 flex flex-col justify-start items-start">
                    <span className="text-[#4483f9] text-lg font-semibold font-sans">
                      {isOpen ? '−' : '＋'}
                    </span>
                  </div>
                </button>
                {isOpen && (
                  <div className="w-full max-w-[760px] px-1 pb-5 flex flex-col justify-start items-start">
                    <p className="text-slate-600 text-base font-normal font-sans leading-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
