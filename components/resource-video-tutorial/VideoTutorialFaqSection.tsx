'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/resource-videotutorial/bg (9).png';
import { Minus, Plus } from 'lucide-react';

const FAQS = [
  {
    question: 'What are ZoikoStream video tutorials?',
    answer:
      'ZoikoStream video tutorials are structured learning assets designed to guide you through key media actions like contribution, streaming, transcribing, and compliance recording.',
  },
  {
    question: 'Do all tutorials have captions and transcripts?',
    answer:
      'Yes. In keeping with our strict accessibility requirements, every video tutorial features synchronized captions and a full, searchable HTML transcript.',
  },
  {
    question: 'Can I use tutorials as production implementation guides?',
    answer:
      'Our tutorials demonstrate validated product workflows. However, for production systems we strongly advise reviewing the linked written documentation and testing in your sandbox first.',
  },
  {
    question: 'How do I find the right tutorial for my workflow?',
    answer:
      'You can search the directory directly by system job, API feature, or product category using our filtered search bars above.',
  },
  {
    question: 'How are tutorials kept current when the product changes?',
    answer:
      'Our developer relations team conducts weekly reviews of our video library against live platform configurations, adding visual callouts or republishing when required.',
  },
  {
    question: 'Where do I find API details after watching a tutorial?',
    answer:
      'Every tutorial page provides direct, context-aware links to our reference pages, including endpoint models and SDK code samples.',
  },
  {
    question: 'What happens when a tutorial shows an older interface?',
    answer:
      'A banner will indicate the date of last review, along with a step-by-step mapping of any interface differences to our current console design.',
  },
  {
    question: 'Where do I get implementation help beyond video?',
    answer:
      'Our developer Slack, community forums, and concierge enterprise support packages are all fully accessible through our Help Center.',
  },
];

export default function VideoTutorialFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background overlay snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] left-[1044px] top-[964px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Frequently asked questions.
        </h2>
        <p className="text-white text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Common questions about ZoikoStream video tutorials and the learning experience.
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="w-full p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3 transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-slate-900 text-base font-bold font-['Space_Grotesk'] pr-4">
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
