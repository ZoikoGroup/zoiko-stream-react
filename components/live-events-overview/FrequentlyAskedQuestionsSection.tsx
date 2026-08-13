'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FrequentlyAskedQuestionsSection() {
  const faqs: FaqItem[] = [
    {
      question: 'What is ZoikoStream Live Events?',
      answer:
        'Live Events is the ZoikoStream event-focused pathway for planning and operating live broadcasts across different event types.',
    },
    {
      question: 'What kinds of live events can I plan?',
      answer:
        'Memorials, Worship, Weddings & celebrations, Graduations, Civic events, Corporate broadcasts, plus Conferences & multi-track.',
    },
    {
      question: 'Can ZoikoStream run the event for us?',
      answer:
        'A Managed live event streaming path is available. Exact scope and operational ownership are confirmed for specific events during briefing.',
    },
    {
      question: 'Can the stream be private or restricted?',
      answer:
        'Secure audience access and Private streaming paths are available. The configuration details and attendee validation depend on your preferred access model.',
    },
    {
      question: 'Can we add captions or multiple languages?',
      answer:
        'Yes, captions and language translation paths are standard configuration. Available methods can be confirmed during planning based on target region.',
    },
    {
      question: 'What happens if the event is high risk or cannot easily be repeated?',
      answer:
        'We offer dedicated Event resilience design and the premium Assured Event planning tier to provide active, professional operational oversight.',
    },
    {
      question: 'Can we record the event and make it available afterward?',
      answer:
        'Our Recording, replay & archive pathways cover post-event hosting, automatic cloud archiving, and secure on-demand publication.',
    },
    {
      question: 'Where should I start?',
      answer:
        "Begin by submitting your initial event parameters through 'Plan a live event', reviewing the Workflow overview, or reaching out directly to 'Talk to an expert'.",
    },
  ];

  // Keep track of open state for accordions (default open all or specific index as needed)
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 text-zinc-900 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-8 sm:gap-12">
        
        {/* Section Title */}
        <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2]">
          Frequently asked questions
        </h2>

        {/* FAQ Items Accordion List */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="w-full p-5 sm:p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col gap-3 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-zinc-900 dark:text-slate-100 text-base sm:text-lg font-bold   group-hover:text-blue-500 transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Toggle Indicator Icon */}
                  <span className="text-blue-500 text-xl font-bold   shrink-0 select-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <p className="text-gray-500 dark:text-slate-400 text-sm sm:text-base font-normal   leading-relaxed pt-1 border-t border-gray-100 dark:border-slate-800/60 mt-1">
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