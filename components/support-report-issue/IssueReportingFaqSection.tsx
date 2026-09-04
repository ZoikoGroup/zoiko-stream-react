'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-can-i-report',
    question: 'What can I report here?',
    answer:
      'You can report functional software bugs, browser player exceptions, video on demand processing failures, live stream connection timeouts, UI clipping, keyboard accessibility blocks, or errors in our API documentation.',
  },
  {
    id: 'report-outage',
    question: 'Should I report an outage here?',
    answer:
      'No. If you suspect a platform outage or active regional transmission failure, check our global system status page first for real-time diagnostics before logging an incident.',
  },
  {
    id: 'security-vulnerability',
    question: 'How do I report a security vulnerability?',
    answer:
      'Please do not use this general report form for threats or data exposure. Route immediately to our Responsible Disclosure program to ensure secure and encrypted triage.',
  },
  {
    id: 'accessibility-problem',
    question: 'Can I report an accessibility problem?',
    answer:
      'Yes, we prioritize accessibility barriers. Selecting the Accessibility category automatically escalates your ticket to screen-reader and compliance specialist teams.',
  },
  {
    id: 'information-include',
    question: 'What information should I include?',
    answer:
      'Provide clear reproduction steps, actual vs. expected outcomes, browser/OS specifications, and context-safe logs. Never include tokens, passwords, or payment cards.',
  },
  {
    id: 'receive-reply',
    question: 'Will I receive a reply?',
    answer:
      "Individual replies are determined by your organization's support tier. Standard reports receive automated confirmation and are routed for systemic triage without guaranteed responses.",
  },
  {
    id: 'how-quickly-fixed',
    question: 'How quickly will it be fixed?',
    answer:
      'Bugs are triaged by operational severity and aggregate impact. While we do not promise contractual fix windows here, critical platform defects undergo hotfix review immediately.',
  },
];

export default function IssueReportingFaqSection() {
  // Default all items to open as displayed in the screenshot reference, while allowing toggle
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'what-can-i-report': true,
    'report-outage': true,
    'security-vulnerability': true,
    'accessibility-problem': true,
    'information-include': true,
    'receive-reply': true,
    'how-quickly-fixed': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative w-full bg-[#fbfcfe] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-slate-100">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none translate-y-1/3" />

      {/* Topographic background SVG pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.3] overflow-hidden">
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,100 C200,50 400,220 720,160 C1040,100 1200,260 1540,180"
            stroke="#cbd5e1"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />
          <path
            d="M-100,220 C180,160 460,320 760,250 C1060,180 1240,340 1540,290"
            stroke="#cbd5e1"
            strokeWidth="0.8"
          />
          <path
            d="M-100,340 C240,300 480,460 820,380 C1160,300 1320,470 1540,410"
            stroke="#cbd5e1"
            strokeWidth="0.8"
            strokeDasharray="3 5"
          />
          <path
            d="M-100,460 C260,400 540,540 880,490 C1220,440 1380,560 1540,520"
            stroke="#e2e8f0"
            strokeWidth="0.7"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            Issue reporting questions.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal max-w-3xl leading-relaxed">
            Have questions about how we handle, triage, and route platform feedback? Find answers below.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-slate-300 transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-slate-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-50">
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                      {item.answer}
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
