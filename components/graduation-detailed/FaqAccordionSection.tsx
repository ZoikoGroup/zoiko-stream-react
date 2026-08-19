'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordionSection() {
  const faqs = [
    {
      question: 'Can ZoikoStream support our graduation ceremony?',
      answer: 'Yes. ZoikoStream is purpose-built for graduation ceremonies of any size. We handle multi-camera live production, graduate name display, digital diplomas, and remote viewing - all from a single platform.'
    },
    {
      question: 'Can families and guests watch remotely?',
      answer: 'Absolutely. We provide a branded, password-optional viewing page families can access from any device - no app download required. Viewers get a smooth HD experience whether they\'re across town or across the world.'
    },
    {
      question: 'Do you support captions or multiple languages?',
      answer: 'Yes. We support live auto-generated captions and can integrate human-verified captioning for accessibility compliance. Multilingual subtitle tracks can be added for international audiences.'
    },
    {
      question: 'Can the ceremony be recorded or replayed?',
      answer: 'Yes. Every ceremony can be recorded in full and made available for on-demand replay. Recording, replay access, download permissions, and archive duration are separate decisions — each configured independently by the organizer.'
    },
    {
      question: 'What if our venue already has an AV team?',
      answer: 'We work alongside your existing AV team. ZoikoStream handles the streaming, viewer experience, and digital production layer while your venue team manages cameras, audio, and physical setup — clear ownership with no overlap.'
    },
    {
      question: 'What happens if something changes after rehearsal?',
      answer: 'Changes after rehearsal are expected. The platform tracks what changed since the last test, flags affected areas, and provides active-event help so your team can adapt confidently without starting over.'
    }
  ];

  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true
  });

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-start items-start gap-12">
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold font-sans leading-tight tracking-tight">
            Questions organizers ask first
          </h2>
        </div>
        
        <div className="w-full flex flex-col justify-start items-start">
          {faqs.map((faq, idx) => {
            const isOpen = !!openIndexes[idx];
            return (
              <div 
                key={idx}
                className="w-full py-6 border-b border-slate-200 dark:border-zinc-800 flex flex-col justify-start items-start gap-3 cursor-pointer"
                onClick={() => toggleIndex(idx)}
              >
                <div className="w-full flex justify-between items-center gap-4">
                  <span className="flex-1 text-zinc-900 dark:text-white text-base sm:text-lg font-bold font-sans">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 bg-indigo-50 dark:bg-indigo-950/40 rounded-full flex justify-center items-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </div>
                
                {isOpen && (
                  <div className="w-full text-zinc-500 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed pr-8">
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
