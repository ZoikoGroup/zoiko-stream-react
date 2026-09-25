'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'What makes a changelog entry canonical?',
    answer: 'A canonical entry is source controlled, names the affected surface and version, includes published and effective dates, and links to the contract or authority that defines the change.'
  },
  {
    question: 'How do I know whether a change affects my integration?',
    answer: 'Match the affected API, SDK, event, or media profile against your implementation, then compare its version range and effective date. When scope is uncertain, treat the entry as review required.'
  },
  {
    question: 'Does every published change require migration work?',
    answer: 'No. Entries distinguish informational updates, additive changes, deprecations, and breaking changes. Only act when the compatibility assessment or action-required field applies to your implementation.'
  },
  {
    question: 'What happens when a changelog entry is corrected?',
    answer: 'The original record remains traceable. A correction adds its own timestamp, explains what changed, and preserves the prior wording so teams can reconcile decisions made from earlier guidance.'
  },
  {
    question: 'Can the changelog replace API reference or migration guidance?',
    answer: 'No. The changelog describes what changed and when. API reference remains authoritative for current contracts, while migration guidance provides the complete implementation path.'
  },
  {
    question: 'Where should I report a missing or unclear change?',
    answer: 'Use the documented developer support route and include the entry identifier, affected session, observed behavior, and source links. Do not rely on an unclassified repository issue as canonical guidance.'
  }
];

export default function ChangelogFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 bg-[#0A0D13] flex flex-col items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-emerald-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
              SOURCE-BOUNDED ANSWERS
            </span>
            <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
              Changelog questions, answered clearly
            </h2>
            <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed">
              Source-bounded guidance for currentness, compatibility, corrections, migration decisions, and the authority behind every change.
            </p>
          </div>

          <div className="w-full lg:w-[280px] shrink-0 p-5 rounded-xl border border-slate-800 bg-[#141A25] flex flex-col gap-2 shadow-sm">
            <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
              AUTHORITY REQUIRED
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-200 text-sm font-medium font-['Inter']">BG Changelog • Current</span>
              <span className="text-amber-500 text-xs font-['Inter']">Confirm API reference before implementation</span>
            </div>
          </div>
        </div>

        {/* FAQs List */}
        <div className="flex flex-col gap-4 w-full">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`w-full rounded-xl border ${isOpen ? 'bg-[#141A25] border-slate-700/80' : 'bg-[#0A0D13] border-slate-800/80 hover:border-slate-700'} transition-colors overflow-hidden`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className={`text-base font-bold font-['Space_Grotesk'] ${isOpen ? 'text-emerald-400' : 'text-slate-200'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-500">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pl-[38px]">
                    <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                      {faq.answer}
                    </p>
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
