'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import section15Bg from '@/public/images/live-events-plan-a-live-event/section-15bg.png';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'What information do I need before starting a plan?',
    answer: 'You only need high-level event context such as target dates, estimated audience scale band, event type, and general accessibility requirements. No hardware details or passwords are required.',
  },
  {
    question: 'Does submitting a plan mean my event is booked?',
    answer: 'No. Submitting this planning brief shares context with our team to help generate tailored operational recommendations. It does not confirm availability, pricing, or official booking.',
  },
  {
    question: 'How is my planning data used and protected?',
    answer: 'Your inputs are strictly processed to align technical recommendations and assign appropriate support authorities. Sensitive assets like API keys or passwords are blocked.',
  },
  {
    question: 'Can I save my plan and return later?',
    answer: 'Yes. Your staged plan summary can be saved to your account workspace so you can modify fields or invite team members before final submission.',
  },
  {
    question: 'What happens after I submit my event plan?',
    answer: 'Our event operations team reviews your brief, generates technical recommendations across all 8 go-live gates, and connects you with a specialist.',
  },
  {
    question: 'How do I get help with an active or in-progress event?',
    answer: 'For active or urgent live events, contact our 24/7 Live Event Operations hotline directly through your account dashboard or support portal.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-zinc-900 text-white overflow-hidden border-t border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section15Bg}
          alt="FAQ Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight text-slate-100">
            Frequently asked questions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Everything you need to know before initiating your live event plan.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 max-w-4xl">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-gray-900/90 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left font-bold text-slate-100 text-base sm:text-lg hover:text-teal-400 transition-colors gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-3 text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed border-t border-gray-800/80 mt-3">
                    {faq.answer}
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
