'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'How are audiences governed?',
    answer: 'Audiences are governed through policies linked directly to your corporate Identity Providers (IDPs). We enforce real-time entitlement lookup to check user eligibility before secure stream tokens are generated, keeping public and restricted audiences properly isolated.'
  },
  {
    question: 'Does ZoikoStream provide scheduling or orchestration?',
    answer: 'No. ZoikoStream is focused strictly on the delivery, policy enforcement, and evidence recording of live streams. We integrate natively with your existing directories, scheduling workflows, and event-management systems via robust developer APIs.'
  },
  {
    question: 'What is the difference between Enterprise broadcasting and Live Events?',
    answer: 'Live Events is a delivery pathway focused on individual public broadcasts. Enterprise broadcasting is a complete organizational operating framework that defines structural roles, auditable readiness checklists, evidence logging, and programmatic policy enforcement across all your stream workflows.'
  },
  {
    question: 'What accessibility standards are supported?',
    answer: 'Our media player and delivery networks support WCAG 2.2 AA guidelines as native requirements. This includes scalable text, high-contrast states, multi-language audio track routing, and reliable WebVTT caption streaming.'
  },
  {
    question: 'Is every broadcast automatically recorded?',
    answer: 'No. Recording is an explicit decision that requires role authorization and parameterized instructions before any ingestion port opens. No system state assumes capture implicitly, preventing accidental storage of sensitive material.'
  },
  {
    question: 'How do I evaluate security and compliance?',
    answer: 'We provide complete technical review packages for enterprise evaluation. This includes detailed SOC 2 compliance reports, cryptographic evidence timeline samples, and direct platform architecture evaluation desks.'
  }
];

export default function FaqSection() {
  // Using an array of booleans to manage open/close state.
  // By default, match the Figma design where they are all open, or just open the first one.
  // For a cleaner UX out-of-the-box, let's open them all to match the design perfectly.
  const [openItems, setOpenItems] = useState<boolean[]>(new Array(faqItems.length).fill(true));

  const toggleItem = (index: number) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] border-b border-[#232b3a] border-solid flex flex-col gap-[48px] items-start bg-[#0a0d12] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/faq-bg.png" 
          alt="FAQ Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,13,18,0.32)]" />
      </div>

      {/* Section Header */}
      <h2 className="relative z-10 font-spaceGrotesk font-bold text-white text-[32px] leading-normal w-full">
        Recording and replay, answered
      </h2>

      {/* FAQ List */}
      <div className="relative z-10 flex flex-col gap-[16px] w-full">
        {faqItems.map((item, idx) => {
          const isOpen = openItems[idx];
          return (
            <div 
              key={idx} 
              className="bg-[rgba(16,21,30,0.8)] backdrop-blur-sm border border-[#232b3a] border-solid rounded-[12px] p-[24px] flex flex-col gap-[12px] w-full cursor-pointer transition-colors hover:bg-[rgba(20,26,38,0.9)]"
              onClick={() => toggleItem(idx)}
            >
              <div className="flex items-center justify-between w-full">
                <h3 className="font-spaceGrotesk font-bold text-white text-[16px] leading-normal flex-1">
                  {item.question}
                </h3>
                <div className="shrink-0">
                  <ChevronDown className="w-[16px] h-[16px] text-[#aab3c4]" />
                </div>
              </div>
              {isOpen && (
                <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[14px] leading-[22px] w-full">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
