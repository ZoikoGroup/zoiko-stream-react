'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const imgSectionBg = "/images/workflow-finder/faq-closure-section-bg.png";

const FAQS = [
  {
    question: "How do I choose the right ZoikoStream solution?",
    answer: "Determine your entrance path based on operational capacity. Developers should select raw APIs/SDKs; organizations needing secure controls should browse enterprise layouts; produced broadcasts map best to managed services.",
  },
  {
    question: "Can developers build video into their own product?",
    answer: "Yes. Our developer APIs allow you to embed ultra-low latency streams, ingest feeds, and trigger VOD replays directly within native apps with custom players and logic control.",
  },
  {
    question: "Can ZoikoStream support enterprise broadcasts?",
    answer: "Yes. We support SAML SSO, complete administrative logs, and highly governed workflow routing structures to restrict sensitive enterprise broadcasts to authorized staff only.",
  },
  {
    question: "How does ZoikoStream handle private or controlled audiences?",
    answer: "ZoikoStream uses token-gated access, geo-fencing, and domain-restricted embeds to ensure only verified viewers can join private or controlled audience streams.",
  },
  {
    question: "Does ZoikoStream support captions and multilingual video?",
    answer: "Yes. ZoikoStream includes real-time closed captioning, automated subtitle generation, and support for multilingual audio tracks across live and on-demand video content.",
  },
  {
    question: "Can live broadcasts be recorded and preserved?",
    answer: "Yes. All live broadcasts can be automatically recorded, stored, and converted into on-demand assets for replay, clipping, and long-term content preservation.",
  },
  {
    question: "What is the difference between a solution and a workflow?",
    answer: "A solution is a pre-configured product bundle designed for a specific use case, while a workflow is a customizable sequence of steps you define to match your operational process.",
  },
  {
    question: "When should I talk to an expert?",
    answer: "If your use case involves custom integrations, high-volume broadcast infrastructure, or compliance-sensitive environments, connecting with a ZoikoStream specialist ensures your architecture is optimized from day one.",
  },
];

export default function SectionFaqClosure() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.88)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[32px] items-start w-full">
          <div className="flex flex-col gap-[16px] items-start w-full">
            <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] leading-[1.26] tracking-[-0.8px] m-0 w-full">
              Questions about choosing a ZoikoStream solution
            </h2>
            <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
              Deterministic guidance for matching operational capacity to video outcomes.
            </p>
          </div>

          <div className="flex flex-col gap-[16px] items-start w-full">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[12px] p-[24px] flex flex-col gap-[12px] items-start w-full cursor-pointer"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex items-center justify-between w-full gap-[16px]">
                    <p className="font-sans font-bold text-[#0f1b2d] text-[16px] m-0 flex-1">{faq.question}</p>
                    <div className="border border-[#e1e6eb] border-solid rounded-[14px] flex items-center justify-center shrink-0 size-[28px]">
                      <Plus
                        className={`size-[14px] text-[#0f1b2d] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </div>
                  </div>
                  {isOpen && (
                    <p className="font-inter font-normal text-[#4f5e74] text-[14px] leading-[1.57] m-0 w-full">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[24px] lg:p-[48px] flex flex-col gap-[32px] items-center justify-center w-full">
          <div className="flex flex-col gap-[16px] items-center text-center max-w-[800px] w-full">
            <h3 className="font-sans font-bold text-white text-[28px] lg:text-[44px] leading-[1.27] tracking-[-0.5px] m-0 w-full">
              Ready to choose the right video path?
            </h3>
            <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
              Start with the outcome, workflow, or operating model that fits your team. If your requirements cross multiple paths, talk to an expert.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center w-full">
            <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto">
              <span className="font-sans font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">Find your path</span>
            </button>
            <button className="border-[1.5px] border-white border-solid px-[28px] py-[14px] rounded-[8px] bg-transparent cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors w-full sm:w-auto">
              <span className="font-sans font-bold text-white text-[15px] whitespace-nowrap">Talk to an expert</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
