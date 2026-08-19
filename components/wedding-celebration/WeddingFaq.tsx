'use client';

import React, { useState } from 'react';

export default function WeddingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: 'What types of weddings and celebrations does ZoikoStream support?',
      answer: 'We support formal ceremonies, multi-day receptions, complex multi-venue transitions, and private celebrations requiring clean, low-latency transmission channels and strict access controls.'
    },
    {
      question: 'Can I control who watches my event?',
      answer: 'Yes. You maintain complete sovereignty over guest lists. You can configure invite-only lists, passcode prompts, or restricted public links optimized for broader social groups.'
    },
    {
      question: 'What happens if something goes wrong during the live event?',
      answer: 'Our system actively deploys dual-WAN stream paths natively. If the local venue internet drops, the system seamlessly redirects to secondary cellular backup links within 4 seconds, backed by L1 support monitors.'
    },
    {
      question: 'Do I need to provide my own cameras and equipment?',
      answer: 'Yes. ZoikoStream is a secure cloud-routing transmission platform. We interface seamlessly with your physical AV crews, but we do not supply local camera operators, tripods, or on-site hardware.'
    },
    {
      question: 'Can remote guests give speeches or perform?',
      answer: 'Yes. Our platform supports dual-path ingestion. Remote speakers can stream their feeds into the local venue projection equipment, complete with low-latency communication checks during testing.'
    },
    {
      question: 'How does recording and replay work?',
      answer: 'We offer automated cloud recording. Live streams have immediate DVR scrubbing, and a clean master MP4 archive is compiled, certified, and ready for digital download within 4 hours of closeout.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900 "
                    style={{ backgroundImage: "url('/images/wedding-celebration/bg (35).png')" }}
>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3">
          <h2 className="text-slate-105 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight font-bold">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordions */}
        <div className="flex flex-col gap-3 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden transition-all duration-300"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left bg-transparent border-none cursor-pointer focus:outline-none select-none group"
                >
                  <span className="text-slate-100 text-base sm:text-lg font-bold font-spaceGrotesk leading-snug group-hover:text-teal-405 transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Indicator */}
                  <span className="size-4 shrink-0 relative overflow-hidden flex justify-center items-center">
                    <span className={`w-3.5 h-0.5 bg-slate-100 absolute transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    <span className={`w-0.5 h-3.5 bg-slate-100 absolute transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`} />
                  </span>
                </button>

                {/* Answer box */}
                <div 
                  className={`px-6 overflow-hidden transition-all duration-305 ease-in-out ${
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
