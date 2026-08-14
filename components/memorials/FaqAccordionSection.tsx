'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordionSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "How can people attend a memorial remotely?",
      answer: "A memorial can be shared through the ZoikoStream Live Events setup. Venue/source, audience access, accessibility, and support options depend on the event's specific configuration."
    },
    {
      question: "Can a memorial stream be private?",
      answer: "Yes. Available audience-access models include invite-only and credentialed options. Access control reduces who can join, and exact security options are configured during your planning phase."
    },
    {
      question: "Can the memorial be recorded or replayed later?",
      answer: "Recording, replay, archive, and retention are separate decisions configured during planning to match the family's or organizer's wishes."
    },
    {
      question: "Can captions or languages be provided?",
      answer: "Captions and language options are available. Methods, formats, and translation availability are confirmed with your support manager during planning."
    },
    {
      question: "What does ZoikoStream need before the event?",
      answer: "We need the scheduled date/time, venue/source context, expected audience size, accessibility requirements, recording/replay preferences, and chosen support tier."
    },
    {
      question: "Can ZoikoStream help with the event setup?",
      answer: "Yes. Managed and expert-help pathways are available depending on the level of support your event requires. Our technical experts can guide you through AV setups."
    },
    {
      question: "What happens if there is a problem during the event?",
      answer: "Active-event support routing and resilience paths are designated before the event, providing direct communication channels separate from standard sales intake."
    },
    {
      question: "How far in advance should I plan?",
      answer: "We recommend starting the event brief or talking to an expert as early as possible. Planning lead time depends heavily on your venue AV and security needs."
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-gray-900 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold mb-12 text-center sm:text-left">
          Frequently asked questions
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqItems.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-teal-400 dark:border-teal-500 bg-slate-50 dark:bg-zinc-950 shadow-sm' 
                    : 'border-slate-200 dark:border-gray-850 bg-white dark:bg-zinc-955/40 hover:border-slate-350 dark:hover:border-gray-800'
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none bg-transparent"
                >
                  <span className="text-zinc-900 dark:text-white text-base font-bold leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-blue-500 dark:text-blue-400 text-lg font-bold shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-500 dark:text-slate-350 text-sm leading-relaxed border-t border-slate-100 dark:border-gray-850/30">
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
