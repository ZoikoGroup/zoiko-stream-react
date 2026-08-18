'use client';

import React, { useState } from 'react';

export default function A11yFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: 'Does ZoikoStream guarantee WCAG compliance?',
      answer: 'We provide compliant platforms and viewer player controls, but overall compliance depends on active testing of your specific streams, slide contrasts, and live captions.'
    },
    {
      question: 'Are captions always available?',
      answer: 'Yes, automated and manual caption engines can be mapped to active events depending on configuration and verified pre-air testing results.'
    },
    {
      question: 'Can viewers use screen readers and keyboards?',
      answer: 'Absolutely. Standard focus rings, ARIA live structures, and strict sequential tab orders are integrated natively within the viewer player.'
    },
    {
      question: 'Can I request an accessibility accommodation?',
      answer: 'Yes. Enterprise event setups allow organizers to provide private, simplified feedback portals for viewers to declare general requirements.'
    },
    {
      question: 'What happens if accessibility settings change after testing?',
      answer: 'Our Material Change system flags updated parameters and prompts the on-duty L2 ops team for targeted re-verification before go-live.'
    },
    {
      question: 'Does replay preserve accessibility?',
      answer: 'Yes. Video-on-demand packaging preserves live captions, secondary audio tracks, and descriptive transcripts in the permanent replay vault.'
    },
    {
      question: 'How are accessibility requests kept private?',
      answer: 'We run data minimization routines. User requests are processed temporarily to serve player preferences and never stored in long-term databases.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-cover bg-zinc-950 text-white overflow-hidden border-b border-zinc-900"
            style={{ backgroundImage: "url('/images/accessibility-inclusion/bg (30).png')" }}
>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden transition-all duration-300"
              >
                {/* Question row */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left bg-transparent border-none cursor-pointer focus:outline-none select-none group"
                >
                  <span className="text-slate-100 text-base sm:text-lg font-bold font-spaceGrotesk leading-snug group-hover:text-teal-400 transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Indicator */}
                  <span className="size-4 shrink-0 relative overflow-hidden flex justify-center items-center">
                    <span className={`w-3.5 h-0.5 bg-slate-100 absolute transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                    <span className={`w-0.5 h-3.5 bg-slate-100 absolute transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`} />
                  </span>
                </button>

                {/* Answer box */}
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-400 text-sm sm:text-base font-normal font-spaceGrotesk leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
