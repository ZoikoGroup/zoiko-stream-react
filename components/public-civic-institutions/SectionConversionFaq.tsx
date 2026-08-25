'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const imgSectionBg = "/images/public-civic-institutions/conversion-faq-section-bg.png";

const FAQS = [
  {
    question: "What is the Public & Civic Institutions solution?",
    answer: "A customized set of streaming, archiving, accessibility, and governance capabilities designed specifically for public councils, school boards, and state agencies. It integrates directly with public archive rules, guarantees Section 508 compliance, and respects distinct administrative workflows.",
  },
  {
    question: "Does ZoikoStream decide whether a recording is an official public record?",
    answer: "No. Your institution maintains sole sovereign authority to declare what constitutes an official record. ZoikoStream provides the technical capture, indexing, and tamper-resistant storage tools to enforce your record-schedule decisions.",
  },
  {
    question: "Can a session contain both public and restricted portions?",
    answer: "Yes. Using context authorization, you can split a broadcast so public sessions are streamed openly to citizen portals, while executive or closed sessions are recorded securely to restricted-access internal portals under distinct privacy policies.",
  },
  {
    question: "Does ZoikoStream provide public comment, voting, or meeting procedure?",
    answer: "No. ZoikoStream is dedicated exclusively to media delivery, capture, and archiving. It operates alongside, and integrates with, municipal voting and meeting administration platforms rather than trying to replace them.",
  },
  {
    question: "How is accessibility handled?",
    answer: "Our pipelines fully support WCAG 2.2 AA standards, featuring automated live speech-to-text generating high-fidelity closed captioning tracks (99%+ accuracy), screen-reader-safe player structures, and complete structured text indexes of all video metadata.",
  },
  {
    question: "Can this replace emergency alerting systems?",
    answer: "No. Emergency Broadcast workflows are optimized for high-volume public message delivery, but they are designed to supplement, rather than substitute for, official state-mandated emergency alert networks (EAS/WEA).",
  },
  {
    question: "How are retention and archives handled?",
    answer: "Retention durations are defined by your internal records schedule and locked against manual deletion. Upon schedule completion, we execute automated workflows to securely transfer the media manifest to your preservation storage or execute verified deletion cycles.",
  },
  {
    question: "How do we verify security, continuity, and current service state?",
    answer: "We publish all SOC 2 compliance reports, ISO audits, current VPAT accessibility logs, and real-time network SLA uptime indicators openly. You can view our verified operational evidence repository at any time.",
  },
];

export default function SectionConversionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[120px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(13,20,46,0.8)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[32px] items-start w-full">
          <p className="font-sans font-bold text-white text-[28px] lg:text-[32px] m-0 w-full">Frequently Asked Questions</p>
          <div className="flex flex-col gap-[12px] items-start w-full">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid rounded-[12px] p-[24px] flex flex-col gap-[12px] items-start w-full cursor-pointer"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex items-center justify-between w-full gap-[16px]">
                    <p className="font-sans font-bold text-white text-[16px] m-0 flex-1">{faq.question}</p>
                    <div className="bg-[#1e293b] rounded-[14px] flex items-center justify-center shrink-0 size-[28px]">
                      <ChevronDown
                        className={`size-[14px] text-white transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </div>
                  {isOpen && (
                    <p className="font-sans font-normal text-[#aab3c4] text-[14px] leading-[1.57] m-0 w-full">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-[#232b3a] border-solid w-full pt-[56px] flex flex-col gap-[40px] items-center justify-center">
          <div className="flex flex-col gap-[16px] items-center text-center max-w-[1000px]">
            <h2 className="font-sans font-bold text-white text-[28px] lg:text-[44px] leading-[1.27] tracking-[-0.5px] m-0 w-full">
              Evaluate the broadcast, access, accessibility, replay, and evidence model your institution needs
            </h2>
            <p className="font-sans font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
              Connect with our dedicated public-sector division to request VPAT documentation, draft custom record schedules, or align with state-specific archiving regulations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center w-full">
            <button className="bg-gradient-to-r from-[#34d4ca] to-[#4a8cfb] h-[52px] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity">
              <span className="font-sans font-bold text-[#0a0d14] text-[16px] whitespace-nowrap">Talk to an expert</span>
            </button>
            <button className="border border-[#aab3c4] border-solid px-[32px] py-[16px] rounded-[10px] bg-transparent cursor-pointer hover:bg-white/5 transition-colors">
              <span className="font-sans font-bold text-white text-[16px] whitespace-nowrap">Plan a live event</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
