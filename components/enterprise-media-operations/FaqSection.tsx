"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is enterprise media operations?",
    answer:
      "It is a connected, governed operating model designed to manage all repeatable media steps—from source intakes and role assignments to captions, cloud archives, and audits—under one structured lifecycle.",
  },
  {
    question: "How does it differ from managed live events?",
    answer:
      "Enterprise operations are optimized for repeating broadcasts run by your teams using configured templates. Managed events are bespoke, high-overhead streams physically run by on-site ZoikoStream engineers.",
  },
  {
    question: "What operating models are available?",
    answer:
      "We support Customer-operated, Shared responsibility, Professionally managed, and Partner-operated setups depending on your local hardware capabilities and team structure.",
  },
  {
    question: "What capabilities are included?",
    answer:
      "Ingest management (SRT/RTMP), live graphics compositing, SAML SSO integration, multi-redundant cellular failovers, speech-to-text captions, Cloud master recording, and telemetry analytics.",
  },
  {
    question: "How is monitoring handled?",
    answer:
      "We separate live stream observability (bitrates, packet jitters) from long-term trends analytics and contractual obligations, routing critical anomalies instantly to assigned on-shift operators.",
  },
  {
    question: "What SLAs are supported?",
    answer:
      "SLA limits are configured transparently beforehand based on the selected responsibility path, ensuring clear support window parameters without hidden clauses.",
  },
  {
    question: "How does security work?",
    answer:
      "We enforce least-privilege administrative access controls alongside corporate whitelists, passcode gates, SAML tokens, and IP restrictions.",
  },
  {
    question: "What analytics are available?",
    answer:
      "Source-approved telemetry tracing attendance, drop-offs, and buffered seconds cleanly. Data is queried via developer APIs or secure executive dashboards.",
  },
  {
    question: "How is implementation handled?",
    answer:
      "Implementation follows structured logical phases—Discovery, Architecture review, Onboarding, Pilot, Go-live, and Adoption—each linked to explicit authority gates.",
  },
  {
    question: "What accessibility is supported?",
    answer:
      "Automated real-time speech captions, multi-language translation audio tracks, fully-responsive players, and telephone listen-in bridges.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Items Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/60 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-start justify-between focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-emerald-500 font-normal text-xl leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
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
