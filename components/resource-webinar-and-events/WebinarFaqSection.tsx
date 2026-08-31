'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Minus, Plus } from 'lucide-react';

const FAQS = [
  {
    question: 'How do I register for an event?',
    answer:
      'Select any event and click Register. We collect only the information needed to administer your attendance — typically your name and email. Marketing and sales communications require separate, optional consent. You will receive an on-screen confirmation with exact timing, timezone details, and a calendar export option.',
  },
  {
    question: 'Are events free to attend?',
    answer:
      'Yes, all ZoikoStream webinars, workshops, and technical deep-dive sessions are completely free to attend for community members and customers.',
  },
  {
    question: 'How do timezone conversions work?',
    answer:
      'Our event schedule automatically detects your local timezone and displays adjusted session times, complete with calendar file downloads (.ics) for Outlook, Google, and Apple Calendar.',
  },
  {
    question: 'Will there be a replay available?',
    answer:
      'Yes. On-demand replays, searchable transcripts, and presentation decks are made available in our Replay directory within 24 hours of live broadcast completion.',
  },
  {
    question: 'What accessibility accommodations are provided?',
    answer:
      'All live broadcasts and replays adhere to WCAG 2.2 AA standards, featuring live real-time closed captions, screen reader-friendly player controls, and full HTML transcripts.',
  },
  {
    question: 'Can I cancel my registration?',
    answer:
      'Yes. You can manage or cancel your attendance at any time using the direct link provided in your email confirmation message.',
  },
  {
    question: 'How do I join a live session?',
    answer:
      "When a session goes live, click the 'Join Live Session' button on the event page or use your personalized access link sent via email.",
  },
  {
    question: 'What happens if I miss the live event?',
    answer:
      'If you cannot attend live, registered participants automatically receive an email alert as soon as the on-demand recording and transcript are published.',
  },
];

export default function WebinarFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background overlay snippet */}
     
      <div className="size-[520px] left-[1068px] top-[620px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Frequently asked questions
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Common questions about registration, events, replays, and accessibility.
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="w-full p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3 transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-slate-900 text-lg font-bold font-['Space_Grotesk'] pr-4">
                  {faq.question}
                </span>
                <div className="size-7 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center shrink-0 bg-white">
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5 text-slate-900" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-slate-900" />
                  )}
                </div>
              </button>

              {isOpen && (
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5 pt-2 border-t border-gray-200/60 w-full">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
