'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'pre-register',
    question: 'Can I pre-register a support case before an event goes live?',
    answer:
      'Yes. You can initiate pre-live case context up to 72 hours before your scheduled broadcast. This establishes active encoder metadata, whitelists, and assigns preflight routing prior to your team going on air.',
  },
  {
    id: 'platform-incident',
    question: 'What happens if my event goes live during a platform incident?',
    answer:
      'Active live events are automatically prioritized in our incident triage matrix. Regional traffic is rerouted through secondary redundant ingestion points, and dedicated L1 event coordinators monitor fallback stream health.',
  },
  {
    id: 'priority-difference',
    question: 'How is live-event priority different from standard priority?',
    answer:
      'Live-event priority bypasses standard ticketing queues, instantly notifying on-shift Tier-1 network operations engineers with guaranteed sub-3-minute acknowledgment during live broadcast windows.',
  },
  {
    id: 'escalate-during-event',
    question: 'Can I escalate during a live event?',
    answer:
      'Yes. If stream anomalies worsen or local redundancy fails, the "Dispatch L1 Support Engineers" action instantly pages on-call operations teams directly into your active case session.',
  },
  {
    id: 'evidence-gather',
    question: 'What evidence should I gather during a live issue?',
    answer:
      'Capture browser console logs, current encoder output settings, regional network HAR traces, and brief timestamped recordings of observed anomalies for rapid diagnostic isolation.',
  },
  {
    id: 'cases-retained',
    question: 'How long are event-related cases retained?',
    answer:
      'Diagnostic telemetry and active chat sessions remain accessible in hot storage for 72 hours post-event for cold recovery, after which sensitive data is archived according to compliance standards.',
  },
  {
    id: 'transfer-case',
    question: 'Can I transfer a case between team members?',
    answer:
      'Yes. Case permissions can be delegated to any authorized organization member or third-party AV production engineer via your organization management dashboard.',
  },
  {
    id: 'wrong-phase',
    question: 'What if I selected the wrong event phase?',
    answer:
      'You can modify your case phase or adjust impact parameters at any time from your case review panel without losing previously entered technical context.',
  },
];

export default function EventSupportFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#040813] text-white py-16 lg:py-24 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Live Events Support Page/les-bg-1.png"
          alt="Support questions background"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040813]/85 via-[#040813]/60 to-[#040813]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight mb-2.5">
            Event support questions.
          </h2>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-800/90 bg-[#080f1d]/85 backdrop-blur-md overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4.5 sm:px-6 sm:py-5 flex items-center justify-between text-left hover:bg-[#0c1626]/80 transition-colors cursor-pointer gap-4"
                >
                  <span className="font-inter font-medium text-slate-200 text-xs sm:text-sm leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-400 text-xs sm:text-[13px] leading-relaxed font-inter border-t border-slate-800/60">
                    {item.answer}
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
