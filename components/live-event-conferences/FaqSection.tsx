'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the difference between Conferences and Corporate Broadcasts?',
      answer: 'Conferences support multi-session tracks, public breakouts, and complex schedule networks with parallel language feeds. Corporate Broadcasts are streamlined, high-security townhalls optimized for direct single-timeline delivery.',
    },
    {
      question: 'Does ZoikoStream support multi-track conferences?',
      answer: 'Yes. Our Enterprise tier enables dozens of concurrent program pipelines, giving your observers the freedom to transition between parallel workshop stages without stream interruption.',
    },
    {
      question: 'Can I record individual conference sessions?',
      answer: 'Absolutely. The recording scheduler isolates discrete program chunks automatically, compiling clean post-event master files within 4 hours of session closeout.',
    },
    {
      question: 'How do I plan accessibility for my conference?',
      answer: 'Accessibility parameters can be mapped in Step 6 of your planner. Embed real-time automated translations, custom audio channels, and keyboard-compliant player configurations instantly.',
    },
    {
      question: 'What happens after I submit my conference plan?',
      answer: 'Our system compiles your technical layout and runs preflight connectivity checks. If physical venue hardware needs validation, an engineering review session will schedule automatically.',
    },
    {
      question: 'How do I get help during a live conference?',
      answer: 'Dedicated L1 support engineers are assigned strictly to your live broadcast window. A direct operations chat line is active at the dashboard throughout your stream.',
    },
  ];

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-gradient-to-b from-slate-950 to-gray-950 text-white overflow-hidden border-t border-b border-gray-800">
      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-slate-100 leading-tight lg:leading-[56px]">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="p-6 bg-zinc-900/80 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-3 backdrop-blur-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="flex-1 text-slate-100 text-base sm:text-lg font-bold font-['Space_Grotesk']">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-slate-400 text-xs sm:text-sm font-normal font-['Space_Grotesk'] leading-5 pt-1">
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
