'use client';

import React, { useState } from 'react';

export default function ApiFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: 'What are ZoikoStream Video APIs?',
      answer: 'ZoikoStream Video APIs are RESTful programmable entryways to our streaming architecture, enabling custom deployment, control, and tracking of video assets.'
    },
    {
      question: 'Which workflows can I control through APIs?',
      answer: 'You can control high-latency low-jitter Live streaming, real-time WebRTC contribution pathways, On-Demand media assets, Playback tokens, and Telemetry queries.'
    },
    {
      question: 'Where is the API reference?',
      answer: 'The fully documented REST API reference resides inside our Developer Documentation portal, with instant Swagger schemas updated daily.'
    },
    {
      question: 'Can I see a code example?',
      answer: 'Yes, our sample code libraries contain tested, maintained requests for Node.js, Python, and Go frameworks inside the Resource Center.'
    },
    {
      question: 'How do I authenticate and manage credentials?',
      answer: 'Authentication uses cryptographically signed HMAC Bearer tokens generated securely via your administrator dashboard.'
    },
    {
      question: 'How are errors, retries, and limits handled?',
      answer: 'We employ strict rate limits (Tiered bucket algorithms) with transparent HTTP 429 indicators and automatic exponential backoff retry recommendations.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left font-spaceGrotesk">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 font-spaceGrotesk">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordions */}
        <div className="flex flex-col gap-3 w-full relative z-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-50 dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Question row */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left bg-transparent border-none cursor-pointer focus:outline-none select-none group"
                >
                  <span className="text-zinc-955 dark:text-white text-base sm:text-lg font-bold font-spaceGrotesk leading-snug group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Indicator */}
                  <span className="size-4 shrink-0 relative overflow-hidden flex justify-center items-center">
                    <span className={`w-3.5 h-0.5 bg-blue-600 dark:bg-blue-400 absolute transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                    <span className={`w-0.5 h-3.5 bg-blue-600 dark:bg-blue-400 absolute transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`} />
                  </span>
                </button>

                {/* Answer box */}
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] pb-6 opacity-100 font-spaceGrotesk' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-655 dark:text-zinc-400 text-sm sm:text-base font-normal leading-relaxed">
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
