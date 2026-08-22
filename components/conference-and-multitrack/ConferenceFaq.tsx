'use client';

import React, { useState } from 'react';

export default function ConferenceFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item expanded by default

  const faqs = [
    {
      question: 'What is Conferences & multi-track?',
      answer: 'It is our premium orchestration pipeline designed specifically for high-consequence concurrent broadcasts. Unlike standard streaming, it acts as an integrated program hub where tracks can be sandboxed, monitored, and recovery routines automated session by session.'
    },
    {
      question: 'Can multiple sessions run at the same time?',
      answer: 'Yes, ZoikoStream supports up to 48 concurrent tracks running simultaneously, allowing large-scale virtual summits and multi-track hybrid conferences to run in parallel under one consolidated agenda view.'
    },
    {
      question: 'Can sessions use different audience access rules?',
      answer: 'Absolutely. Audience access controls are managed granularly per session, allowing some tracks to be public while others require ticket codes, SSO integration, SAML authentication, or dynamic geo-blocks.'
    },
    {
      question: 'Can each session have captions or different languages?',
      answer: 'Yes. Accessibility features (WCAG 2.2 compliant captions, human sign-language video overlays, and audio descriptions) are assigned and verified on a session-by-session basis rather than event-wide.'
    },
    {
      question: 'How do remote speakers join?',
      answer: 'Speakers connect via secure, low-latency browser ingest links (WebRTC). These links connect remote presenters directly to the active session trancoding center with sub-second feedback cues.'
    },
    {
      question: 'Can ZoikoStream manage production?',
      answer: 'Yes, we offer white-glove event management services. From initial operator brief validation to live NOC switcher execution and final archive auditing, our team can manage the entire operational run-of-show.'
    },
    {
      question: 'What happens if a session is moved or delayed?',
      answer: 'Our timeline orchestration automatically propagates schedule shifts to attendee calendars in real-time, adjusts timezone offsets, and cues the network operators without disrupting other ongoing tracks.'
    },
    {
      question: 'Can sessions be recorded and replayed later?',
      answer: 'Yes. Each session can be configured to record automatically. The master audio/video packet integrity is verified post-session, and publication gates let you trim delay, add translation layers, and publish on-demand.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-t border-b border-gray-200 transition-colors duration-250">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-center items-center">
          <h2 className="text-gray-900 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-normal font-spaceGrotesk max-w-2xl">
            Everything you need to know about setting up and governing multi-track enterprise broadcasts.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-55 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden transition-all duration-300"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left bg-transparent border-none cursor-pointer focus:outline-none select-none group"
                >
                  <span className="text-slate-900 text-lg font-bold font-spaceGrotesk leading-snug group-hover:text-teal-500 transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus icon */}
                  <span className="size-4 shrink-0 relative overflow-hidden flex justify-center items-center">
                    <span className={`w-3.5 h-0.5 bg-slate-900 absolute transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    <span className={`w-0.5 h-3.5 bg-slate-900 absolute transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`} />
                  </span>
                </button>

                {/* Answer block */}
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-base font-normal font-spaceGrotesk leading-relaxed">
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
