'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import section13Bg from '@/public/images/resource-guides/13sectionbg.png';

const FAQS = [
  {
    question: 'What are ZoikoStream Guides?',
    answer:
      'ZoikoStream Guides are goal-oriented, outcome-based manuals designed by our solution engineering team. While our API documentation explains what individual endpoints do, the guides show you exactly how to compose those endpoints together to fulfill real-world product workflows and operational security requirements.',
  },
  {
    question: 'How are Guides different from Developer documentation?',
    answer:
      'Developer documentation focuses on technical API specifications, endpoint parameters, and request/response payloads. Guides provide end-to-end architectural instructions, code samples, and operational best practices for building complete workflows.',
  },
  {
    question: 'Can I filter guides by topic or goal?',
    answer:
      'Yes! You can filter guides by technical domain (Security, Delivery, Ingest, Integrations), difficulty level (Introductory, Intermediate, Advanced), or search directly by keywords in the search bar.',
  },
  {
    question: 'How do I know if a guide is current?',
    answer:
      'Every guide displays its last updated date at the top. Our technical content team routinely updates code samples and configuration guidelines whenever new API features or SDK versions release.',
  },
  {
    question: 'Where do I go for direct support?',
    answer:
      'If you run into issues during implementation, visit our Help Center, contact technical support directly via ticket, or ask questions in our active developer Discord community.',
  },
  {
    question: 'Where can I find exact API details?',
    answer:
      'Exact API contracts, endpoints, parameter schemas, and error dictionaries can be found in our interactive API Reference document.',
  },
  {
    question: 'Are guides available for all skill levels?',
    answer:
      'Yes, guides are categorized from Introductory (first live stream setup) to Advanced (multi-region redundant RTMP ingest, custom CDN routing, and enterprise SAML SSO).',
  },
  {
    question: 'How often are guides updated?',
    answer:
      'Guides are updated continuously alongside our product release cycles. Recently updated guides are highlighted in the Recently Updated section on this page.',
  },
];

export default function ResourceGuidesFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background */}
      {section13Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section13Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
          Frequently asked questions.
        </h2>
      </div>

      {/* Accordions */}
      <div className="relative z-10 w-full flex flex-col gap-4 max-w-5xl">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`w-full p-6 bg-zinc-900/80 rounded-xl transition-all ${
                isOpen
                  ? 'outline outline-[1.50px] outline-offset-[-1.50px] outline-teal-400'
                  : 'outline outline-1 outline-offset-[-1px] outline-gray-800 hover:border-gray-700'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center text-left gap-4 focus:outline-none"
              >
                <span className="text-white text-base sm:text-lg font-bold font-['Space_Grotesk']">
                  {faq.question}
                </span>
                <div
                  className={`size-7 rounded-2xl outline flex justify-center items-center shrink-0 transition-colors ${
                    isOpen
                      ? 'outline-1 outline-teal-400 text-teal-400'
                      : 'outline-1 outline-gray-800 text-slate-400'
                  }`}
                >
                  {isOpen ? (
                    <Minus className="size-4 text-teal-400" />
                  ) : (
                    <Plus className="size-4 text-slate-400" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="pt-4 text-slate-400 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed border-t border-gray-800/50 mt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
