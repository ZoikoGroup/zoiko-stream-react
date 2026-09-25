"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'Are these examples maintained and trustworthy?',
    answer: 'A public sample must come from the current Code Sample Registry, stay coupled to its stated contract and runtime, and pass the required validation and security gates. Evidence is scoped to that tested context—not a production-readiness guarantee.'
  },
  {
    question: 'How do I know a sample matches the exact contract I use?',
    answer: 'Check its sample version, contract references, language and runtime, dependency context, verified date, and lifecycle state before copying. A conflict moves the sample to Review required and disables copy.'
  },
  {
    question: 'Can every current sample be copied safely?',
    answer: 'No. Copy is available only when currentness, tests, security scans, prerequisites, and side-effect risk all permit it. Stale, destructive, security-held, or unknown-impact samples fail closed.'
  },
  {
    question: 'What happens on timeout, duplicate, partial, retry, or unknown outcome?',
    answer: 'Only source-backed failure and reconciliation guidance is shown. The library does not invent retry values or encourage blind retries for mutating operations.'
  },
  {
    question: 'Are Code samples the same as Sample applications or GitHub repositories?',
    badge: 'GitHub gate - Blocked',
    answer: 'No. Code samples are focused governed artifacts. Sample applications are runnable projects, while repository links require separate current classification and approval.'
  },
  {
    question: 'What if an older copied sample is stale or replaced?',
    badge: 'Changelog gate - Blocked',
    answer: 'Copy is disabled and the lifecycle state stays visible. A replacement, migration, canonical contract, or support route appears only when a current source provides it.'
  }
];

export default function CodeSamplesFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 bg-[#0A0D13] flex flex-col items-center overflow-hidden border-t border-slate-800">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center opacity-30">
        <div className="w-full h-full bg-[url('/images/zoikostream-codesamples/Hero-Graphic.png')] bg-cover bg-center opacity-30 mix-blend-screen"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-[40px] font-bold font-['Space_Grotesk'] leading-tight">
              Frequently asked questions
            </h2>
            <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed">
              Clear answers about currentness, copy eligibility, failure behavior, and the boundaries between samples and their canonical authorities.
            </p>
          </div>

          <div className="w-full lg:w-[280px] shrink-0 p-5 rounded-xl border border-slate-800 bg-[#141A25] flex flex-col gap-3 shadow-lg">
            <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
              APPROVAL SEQUENCE
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-emerald-400 text-sm font-['Inter']">03 Code samples - Current</span>
              <span className="text-amber-500 text-sm font-['Inter']">04 Changelog - Blocked</span>
              <span className="text-amber-500 text-sm font-['Inter']">05 GitHub - Blocked</span>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="w-full flex flex-col gap-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`w-full border rounded-xl overflow-hidden transition-colors ${
                openIndex === idx ? 'bg-[#141A25] border-slate-700' : 'bg-transparent border-slate-800 hover:bg-[#141A25]/50'
              }`}
            >
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <div className="flex flex-col items-start gap-2 pr-8">
                  <h3 className={`text-base sm:text-lg font-bold font-['Space_Grotesk'] ${openIndex === idx ? 'text-white' : 'text-slate-300'}`}>
                    {faq.question}
                  </h3>
                  {faq.badge && (
                    <span className="px-2 py-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                      {faq.badge}
                    </span>
                  )}
                </div>
                <div className="shrink-0">
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-teal-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-teal-500" />
                  )}
                </div>
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 pr-12">
                  <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
