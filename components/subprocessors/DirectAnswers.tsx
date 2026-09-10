"use client";

import React, { useState } from 'react';

export default function DirectAnswers() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is a ZoikoStream subprocessor?',
      answer: 'A listed third-party service provider or infrastructure vendor approved by our security team to process customer payload or logging data within our active service flow.',
    },
    {
      question: "Who are ZoikoStream's current subprocessors?",
      answer: 'Our core subprocessors include AWS, Google Cloud, Twilio, Datadog, and Stripe. Each is linked to specific DPAs and audited service scopes.',
    },
    {
      question: 'What data does each subprocessor process?',
      answer: 'Data processing is restricted to stated purposes. AWS manages databases and hosting; Google Cloud runs the Anycast CDN edge gateways; Datadog monitors telemetry.',
    },
    {
      question: 'Where do subprocessors process data?',
      answer: 'Locations are disclosed in our table registry (e.g. AWS US-East, Datadog EU-Central). This provides transparent compliance context but does not alter contractual residency terms.',
    },
    {
      question: 'How will I know when the list changes?',
      answer: 'We notify customers through approved legal and account channels as specified in our master Data Processing Addendum (DPA) agreements.',
    },
    {
      question: 'Can I object to a subprocessor?',
      answer: 'Yes. Objection procedures, timelines, and resolution pathways are explicitly defined under our mutual DPA contractual authority.',
    },
    {
      question: 'Are integrations automatically subprocessors?',
      answer: 'No. Integrations, external tools, or software applications do not automatically act as subprocessors unless they process customer master payloads within our system scope.',
    },
    {
      question: 'Do provider certifications cover ZoikoStream?',
      answer: "No. Each partner's SOC 2 or ISO certification covers their specific boundary. ZoikoStream maintains its own independent framework certification audits.",
    },
    {
      question: 'Does a removed provider stop processing immediately?',
      answer: 'Active processing ceases instantly upon de-provisioning. Backups and temporary logging archives purge automatically on standard 30-day compliance cycles.',
    },
    {
      question: 'Is the registry contractual?',
      answer: 'This registry dashboard is an informational transparency portal. Binding commitments, notices, and legal remedies live only within your signed contracts.',
    },
  ];

  return (
    <section className="relative w-full bg-zinc-950 py-16 md:py-24 px-6 md:px-12 lg:px-28 border-y border-gray-800 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-zinc-950/60 pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <h2 className="text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60px]">
          Direct Answers
        </h2>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3 w-full">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="w-full bg-zinc-900/80 rounded-[10px] border border-gray-800 flex flex-col overflow-hidden transition-colors hover:border-gray-700"
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-slate-100 text-base md:text-lg font-bold font-['Space_Grotesk'] pr-4">
                    {faq.question}
                  </span>

                  {/* Plus / Minus Icon */}
                  <span className="shrink-0 ml-4 text-teal-500 transition-transform duration-300">
                    {isOpen ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Accordion Content (Animated via CSS Grid) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-400 text-xs md:text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
