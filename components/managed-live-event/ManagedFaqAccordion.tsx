'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ManagedFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      q: 'What does managed streaming scope actually cover?',
      a: 'Managed scope covers the ingest transcoders, redundant cloud-delivery pipelines, real-time audio caption generators, and remote platform monitoring. It explicitly excludes local venue physical audio and camera mixer operations.'
    },
    {
      q: 'Can we use physical RTMP sanctuary cameras?',
      a: 'Yes. ZoikoStream supports direct digital SRT/RTMP ingest from physical church hardware encoders, modern software rigs, or dedicated mobile feeds.'
    },
    {
      q: 'How do we coordinate remote guest speakers or missionaries?',
      a: 'Our platform provides low-latency WebRTC endpoints that route remote presenter audio and video feeds directly into your managed cloud switcher panel.'
    },
    {
      q: 'What music licensing safety tools are included?',
      a: 'We provide automated lower-third logging modules designed to cross-reference and catalog live musical cues for straightforward CCLI compliance reporting.'
    },
    {
      q: 'Is the platform WCAG and ADA compliant out of the box?',
      a: 'Yes. Our standard player layouts include real-time caption integration, custom color contrast adjustments, screen-reader optimizations, and secondary audio language tracks.'
    },
    {
      q: 'What is your broadcast uptime SLA?',
      a: 'Managed enterprise streams deployed through our governed Dual-WAN failover pipeline comply with a 99.99% active broadcast uptime guarantee.'
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-250 border-t border-slate-100">
      {/* Excluded from max-w-6xl constraint, using max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold font-sans tracking-tight">
          Managed Live Events FAQ
        </h2>

        <div className="flex flex-col gap-4 max-w-6xl">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left border-none bg-transparent text-zinc-955 font-sans text-base sm:text-lg font-bold cursor-pointer hover:bg-slate-100/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-gray-500 font-bold ml-4">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed font-sans border-t border-slate-100 pt-4">
                    {faq.a}
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
