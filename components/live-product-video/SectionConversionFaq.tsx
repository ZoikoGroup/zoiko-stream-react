'use client';

import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const imgSectionBg = "/images/live-product-video/conversion-faq-section-bg.png";

const CONVERSION_ROWS = [
  { need: "New developer matching API solution", action: "Start building immediately", cta: "Start building →" },
  { need: "Needs validated architectural proof", action: "Read documentation and spec sheets", cta: "Read documentation →" },
  { need: "Enterprise buyer with integration SLA needs", action: "Talk to our systems solutions expert", cta: "Talk to expert →" },
  { need: "Existing customer integrating live workflow", action: "Access direct platform developer support", cta: "Developer support →" },
  { need: "User with critical WCAG accessibility requirement", action: "Access audited accessibility logs and guides", cta: "Accessibility help →" },
  { need: "Managed broadcast event planning request", action: "Plan a live event with concierge services", cta: "Plan a live event →" },
];

const FAQS = [
  {
    question: "What is live product video?",
    answer: "Live product video embeds video streaming directly into app feature logic, players, and workflow engines, controlled entirely by developer integrations.",
  },
  {
    question: "Does ZoikoStream provide APIs and SDKs for live video?",
    answer: "Yes, we provide first-class React, iOS, Android, and web player SDKs alongside a comprehensive GraphQL API for total system orchestrations.",
  },
  {
    question: "Can live product video be private?",
    answer: "Absolutely. Playback can be gated dynamically at the edge using cryptographic authorization tokens, domain filters, and corporate SAML SSO.",
  },
  {
    question: "Does every live session become a recording?",
    answer: "You have complete control. Standard policies can trigger instant VOD recording, conversion to storage archives, or discard sessions immediately.",
  },
  {
    question: "How should the product handle failures?",
    answer: "We expose deterministic exception models including source loss states, idempotency checks for retries, and clean failover paths.",
  },
  {
    question: "Where do developers get implementation details?",
    answer: "Visit the ZoikoStream Developer Surface Registry to access code snippets, verified SDKs, sandbox details, and direct support.",
  },
];

const ADJACENT_SOLUTIONS = ["Build video into a product", "Private audience delivery", "Operational analytics"];

export default function SectionConversionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.71)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[42px] leading-[1.24] m-0 w-full">
            Move users forward without trapping them
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
            One dominant contextual action; evidence and support remain available.
          </p>
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[24px] w-full overflow-x-auto">
          <div className="min-w-[820px]">
            <div className="bg-[#141e33] border-b-2 border-[#232b3a] border-solid flex gap-[12px] items-start p-[16px] w-full">
              <p className="font-sans font-bold text-white text-[13px] m-0 w-[300px] shrink-0">Visitor State / Operational Need</p>
              <p className="font-sans font-bold text-white text-[13px] m-0 flex-1 min-w-0">Dominant Contextual Action</p>
              <p className="font-sans font-bold text-white text-[13px] m-0 w-[200px] shrink-0 text-right">Action Primary Surface</p>
            </div>
            {CONVERSION_ROWS.map((row, index) => (
              <div
                key={row.need}
                className={`flex gap-[12px] items-center p-[16px] w-full ${index < CONVERSION_ROWS.length - 1 ? "border-b border-[#232b3a] border-solid" : ""}`}
              >
                <p className="font-sans font-bold text-[#34d4ca] text-[14px] m-0 w-[300px] shrink-0">{row.need}</p>
                <p className="font-inter font-normal text-[#aab3c4] text-[14px] m-0 flex-1 min-w-0">{row.action}</p>
                <div className="w-[200px] shrink-0 flex justify-end">
                  <p className="font-sans font-bold text-[#4a8cfb] text-[13px] underline m-0 whitespace-nowrap cursor-pointer">{row.cta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[24px] items-start w-full">
          <p className="font-sans font-bold text-white text-[28px] m-0 whitespace-nowrap">Frequently Asked Questions</p>
          <div className="flex flex-col gap-[16px] items-start w-full">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-[#0f1b2d] border border-[#232b3a] border-solid rounded-[12px] p-[24px] flex flex-col gap-[12px] items-start w-full cursor-pointer"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex items-center justify-between w-full gap-[16px]">
                    <p className="font-sans font-bold text-white text-[16px] m-0 flex-1">{faq.question}</p>
                    <div className="border border-[#232b3a] border-solid rounded-[14px] flex items-center justify-center shrink-0 size-[28px]">
                      {isOpen ? <Minus className="size-[12px] text-white" /> : <Plus className="size-[12px] text-white" />}
                    </div>
                  </div>
                  {isOpen && (
                    <p className="font-inter font-normal text-[#aab3c4] text-[14px] leading-[1.57] m-0 w-full">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[24px] lg:p-[32px] flex flex-col lg:flex-row gap-[16px] lg:gap-[32px] items-start lg:items-center justify-between w-full">
          <p className="font-sans font-bold text-white text-[16px] m-0 whitespace-nowrap">Adjacent Solutions:</p>
          <div className="flex flex-wrap gap-[16px] lg:gap-[32px] items-start">
            {ADJACENT_SOLUTIONS.map((label) => (
              <p key={label} className="font-sans font-bold text-[#34d4ca] text-[14px] underline m-0 whitespace-nowrap cursor-pointer">
                {label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
