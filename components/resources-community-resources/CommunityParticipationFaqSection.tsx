'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Where can I find ZoikoStream developer communities?',
    answer:
      'ZoikoStream maintains an approved Community Resource Directory listing all operated, endorsed, and independent community destinations. Browse the directory above to find spaces matching your interests and expertise.',
  },
  {
    question: 'Are community answers the same as official documentation?',
    answer:
      'No. Community discussions provide helpful peer perspectives, but official product behavior, API contracts, and configuration specifications live in Developer Documentation and API Reference. Always verify implementation-critical claims against official sources.',
  },
  {
    question: 'How do I report inappropriate content or behavior?',
    answer:
      'ZoikoStream-operated spaces have dedicated moderation and reporting workflows. Use the Report an Issue link in the Community Standards section. External community resources link to their own reporting processes.',
  },
  {
    question: 'Can I contribute guides or code to the community?',
    answer:
      'Yes, through approved contribution programs. Submit guides via Markdown PR, contribute code through approved repositories, or apply to speak at community sessions. See the Contribution Pathways section for details.',
  },
  {
    question: 'What information should I never share in community spaces?',
    answer:
      'Never post API keys, passwords, tokens, stream keys, private customer data, confidential recordings, security vulnerabilities, or account-specific configuration details. Use the Before You Post safety checklist above.',
  },
  {
    question: 'How are community resources verified and maintained?',
    answer:
      'Every listed resource passes an eligibility gate including destination verification, operator classification, access state, moderation governance, and freshness review. Resources that fail verification are suppressed until re-approved.',
  },
  {
    question: 'What is the difference between operated, endorsed, and independent resources?',
    answer:
      'ZoikoStream-operated resources are directly managed by ZoikoStream. Endorsed external resources are approved third-party destinations. Community-led independent resources are listed for discovery but not operated by ZoikoStream.',
  },
  {
    question: 'How do I get help with an account-specific problem?',
    answer:
      'Account-specific issues require private context and should go through Contact Support, not public community spaces. Community discussions cannot access your account configuration, billing, or private stream settings.',
  },
];

export default function CommunityParticipationFaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 80 C 240 0, 520 200, 880 90 S 1280 -10, 1520 100" />
            <path d="M-80 150 C 270 60, 560 260, 920 150 S 1320 50, 1520 160" />
            <path d="M-80 220 C 300 120, 600 320, 960 210 S 1360 110, 1520 220" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            Common questions about community participation
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Everything you need to know about joining, contributing, and staying safe in ZoikoStream community spaces.
          </p>
        </div>

        {/* FAQ Cards Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:border-slate-300 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-blue-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-3 leading-relaxed">
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
