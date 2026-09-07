'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'What is the difference between Service Updates and System Status?',
    answer:
      'Service Updates communicate future planned, controlled maintenance actions. System Status reports active, unplanned real-time health incidents and metrics.',
  },
  {
    question: 'How far in advance are planned service changes communicated?',
    answer:
      'Standard maintenance changes require at least 14 days of advance notice. Urgent infrastructure security updates may utilize shorter windows if actively threatened.',
  },
  {
    question: "What does 'Expected Impact' represent on a notice?",
    answer:
      'It is an engineering risk assessment representing potential loss during execution, which may range from zero customer impact to expected short connectivity pause.',
  },
  {
    question: 'How are rescheduled updates handled in the history log?',
    answer:
      'Original scheduled times are mathematically preserved in our append-only log when an update is postponed, creating an accurate record of timeline shifts.',
  },
  {
    question: 'Can I automatically export these windows to my calendar?',
    answer:
      'Yes, our subscription management panel exposes direct iCal and secure system RSS feeds so your engineering team receives inline window indicators.',
  },
  {
    question: 'What happens if a live incident occurs during a maintenance window?',
    answer:
      'The maintenance notice will be linked directly to the System Status interface, and live updates will be handled by our operational incident managers.',
  },
  {
    question: "Why can't I see past updates from previous years?",
    answer:
      'We archive notice logs after 12 months. Full historical audit trails remain accessible via the secure Developer API endpoint indefinitely.',
  },
  {
    question: 'How does ZoikoStream ensure my live audio-video streams failover cleanly?',
    answer:
      'Our dual active-active ingest architecture allows you to route backup ingest lines to alternate geographic locations if a target region is scheduled for window maintenance.',
  },
];

export default function ServiceUpdatesFaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Common service update questions answered
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Everything you need to know about our planned windows, client-side actions, and how we preserve system integrity.
          </p>
        </div>

        {/* FAQ Cards Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={faq.question}
                className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-5 sm:p-6 shadow-lg hover:border-slate-700/90 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-teal-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
