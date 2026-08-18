'use client';

import React, { useState } from 'react';

export default function PlatformFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: 'What is ZoikoStream Platform?',
      answer: 'ZoikoStream is an enterprise media-infrastructure platform combining secure delivery, customizable APIs, transcode routing, and live operations in a unified workspace.'
    },
    {
      question: 'What parts of the video lifecycle does it cover?',
      answer: 'We cover all seven stages: Contribution, Ingest, Production Overlays, Security whitelists, Global delivery, Analytics, and redundant Archive preservation.'
    },
    {
      question: 'Can developers build with ZoikoStream?',
      answer: 'Yes, our fully documented, low-latency APIs and native SDKs are engineered specifically for rapid developer integration.'
    },
    {
      question: 'Does ZoikoStream support enterprise media operations?',
      answer: 'Absolutely. Gain active control of transcoding paths, cue sequences, lower-third graphic overlays, and diagnostic logs in real-time.'
    },
    {
      question: 'How does ZoikoStream handle security and delivery?',
      answer: 'We combine federal-grade payload encryption with corporate SAML SSO whitelists and multi-region CDN delivery nodes.'
    },
    {
      question: 'What happens after a live stream?',
      answer: 'ZoikoStream packages clean master recording directories automatically, indexes transcript archives, and enables instant DVR-supported on-demand replays.'
    },
    {
      question: 'Can ZoikoStream support managed Live Events?',
      answer: 'Yes. Our expert L1 support engineering team operates directly on-shift for high-profile broadcasts to guarantee zero downtime failovers.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      {/* Background Decorator overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/platform-overview/FAQBackground.png')" }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 font-spaceGrotesk">
          <h2 className="text-slate-101 text-3xl sm:text-4xl font-bold tracking-tight">
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
                className="bg-gray-900/90 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Question row */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left bg-transparent border-none cursor-pointer focus:outline-none select-none group"
                >
                  <span className="text-slate-101 text-base sm:text-lg font-bold font-spaceGrotesk leading-snug group-hover:text-teal-400 transition-colors">
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
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] pb-6 opacity-100 font-spaceGrotesk' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-400 text-sm sm:text-base font-normal leading-relaxed">
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
