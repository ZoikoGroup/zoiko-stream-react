'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function WorshipFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      q: 'How can remote members access our Sunday service streams?',
      a: 'You can securely invite home-bound or traveling members via direct secure link access or embed keys on your community portal.'
    },
    {
      q: 'Can we restrict the public from viewing specific intimate services?',
      a: 'Yes. Our direct access parameters allow you to easily define private, invite-only, or password-restricted streams for specific services.'
    },
    {
      q: 'Does the system record the worship streams automatically?',
      a: 'Yes. High-definition cloud recording can be enabled automatically or run entirely manually depending on your privacy specifications.'
    },
    {
      q: 'What hardware setup is required inside our sanctuary?',
      a: 'We support standard digital inputs from common sanctuary cameras, physical RTMP encoders, and modern software streaming setups.'
    },
    {
      q: 'How does the system help with music license reporting?',
      a: 'Our integrated media helpers track and cue musical elements for straightforward integration with CCLI or other license portals.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-200 border-t border-slate-200 overflow-hidden">
      
      {/* Background underlay for visual texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03] blur-[2px] pointer-events-none select-none"
        style={{ backgroundImage: "url('/images/workship-detailed/image (26).png')" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold mb-12 text-center sm:text-left tracking-tight">
          Questions about worship service streaming
        </h2>
        
        <div className="flex flex-col gap-4 w-full">
          {faqItems.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-xl border transition-all duration-350 overflow-hidden ${
                  isOpen 
                    ? 'border-teal-400 bg-slate-50 shadow-sm' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none bg-transparent cursor-pointer border-none"
                >
                  <span className="text-zinc-900 text-base font-bold leading-snug font-sans">
                    {faq.q}
                  </span>
                  <span className="text-blue-500 text-lg font-bold shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-500 text-sm leading-relaxed border-t border-slate-100">
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
