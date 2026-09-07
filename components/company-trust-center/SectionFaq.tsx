import React from 'react';

const FAQS = [
  {
    question: "What is the ZoikoStream Trust Center?",
    answer: "The Trust Center is ZoikoStream's public gateway to security, privacy, compliance, resilience, subprocessors, responsible disclosure, security advisories and due-diligence evidence. It routes each topic to its governed source.",
  },
  {
    question: "Where can I see ZoikoStream system status?",
    answer: "Use System Status for current production Live-mode service health, incidents and maintenance. The Trust Center may show a compact published status summary, but System Status remains authoritative.",
  },
  {
    question: "Does public status include test or non-production environments?",
    answer: "No. Public status exposes production Live mode only. Test mode and non-production environments do not appear on the public status surface.",
  },
  {
    question: "How do I request a security report or other trust evidence?",
    answer: "Open Trust Evidence, browse the catalog and submit a governed request for any restricted resource. Access depends on the resource policy, requester context and any required confidentiality or contractual controls.",
  },
  {
    question: "Where can I find ZoikoStream subprocessors?",
    answer: "Use the Privacy, Residency & Subprocessors section for the approved subprocessor registry and related data-handling information.",
  },
  {
    question: "How do I report a vulnerability?",
    answer: "Use the Vulnerability Disclosure page and the approved security reporting channel. Do not submit vulnerability details through general Contact, marketing forms or ordinary support channels.",
  },
  {
    question: "Does the Trust Center replace the Privacy Notice, DPA or Terms?",
    answer: "No. The Trust Center summarizes and routes trust information. Binding privacy, data-processing and legal terms remain in their authoritative notices and agreements.",
  },
  {
    question: "How do I know a trust document is current?",
    answer: "Each approved resource shows scope, access level and a review/validity state where applicable. Superseded, expired or withdrawn resources cannot be presented as current evidence.",
  },
];

export default function SectionFaq() {
  return (
    <div className="w-full px-6 lg:px-0 py-[48px] lg:py-[64px]">
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="flex gap-[12px] items-center">
          <div className="bg-[#5b8def] rounded-full h-[6px] w-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase m-0 whitespace-nowrap">AEO</p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[24px] lg:text-[26px] leading-[1.6] tracking-[-0.26px] m-0 w-full">
          Frequently asked questions.
        </h2>

        <div className="border-t border-[#dde2ea] border-solid w-full">
          {FAQS.map((faq, index) => (
            <div
              key={faq.question}
              className={`flex flex-col gap-[8px] items-start py-[24px] w-full ${
                index < FAQS.length - 1 ? "border-b border-[#dde2ea] border-solid" : ""
              }`}
            >
              <p className="font-sora font-bold text-[#32353c] text-[15.5px] leading-[1.6] tracking-[-0.155px] m-0 w-full">{faq.question}</p>
              <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[1.6] m-0 w-full">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
