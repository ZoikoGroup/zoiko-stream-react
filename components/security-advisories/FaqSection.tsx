'use client';

import React from 'react';

const imgBg = "/images/security-advisories/faq-bg.png";
const imgPlus = "/images/security-advisories/plus.svg";

const faqs = [
  {
    question: "What is a ZoikoStream security advisory?",
    answer: "A security advisory is an approved, structured technical record that details a verified platform vulnerability, its affected architectural scope, and direct remediation instructions.",
  },
  {
    question: "How do I know if an advisory affects my deployment?",
    answer: "Each published advisory defines an explicit 'Affected Scope' section listing product versions, SDK variants, and deployment architectures. Match these parameters against your configuration.",
  },
  {
    question: "What is the difference between a fix, mitigation, and workaround?",
    answer: "A fix permanently closes the security gap. A mitigation reduces the exposure or impact of the flaw. A workaround is a temporary configuration change that may carry operational trade-offs.",
  },
  {
    question: "Does every advisory have a CVE?",
    answer: "No. CVE identifiers are assigned for third-party cataloging. Many proprietary platform optimizations or SDK-specific patches receive distinct Zoiko internal identifiers instead.",
  },
  {
    question: "How will I know when a new advisory is published?",
    answer: "Customers can subscribe to security alert notifications inside the Zoiko Trust Center. Major disclosures are also cross-posted to coordinate disclosure partners and our developer mailing lists.",
  },
  {
    question: "What does 'superseded' mean?",
    answer: "A superseded status indicates that a subsequent, more comprehensive advisory has been published that updates, replaces, or fully consolidates the remediation instructions of the original report.",
  },
  {
    question: "Can I test my system against a published advisory?",
    answer: "Yes. We publish sanitized proof-of-concept testing logic for verified administrators within a restricted environment. Contact your security lead to request simulated verification keys.",
  },
  {
    question: "Does a security advisory mean my data was compromised?",
    answer: "No. An advisory documents a theoretical or discovered coding flaw. If active exploitation or unauthorized data access is verified during investigation, affected tenants are notified directly.",
  },
  {
    question: "Where do I report a new vulnerability?",
    answer: "All new, unadjudicated findings must be submitted privately via the protected portal link on our Responsible Disclosure page. Please do not publish exploit methods in open public threads.",
  },
  {
    question: "Does absence of advisories mean the product is fully secure?",
    answer: "Absence of a public advisory does not establish that no security flaws exist. Security requires active, continuous parameter monitoring and proactive code audits as threat landscapes evolve.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="FAQ-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.2)] inset-0" />
      </div>
      <div className="flex flex-col gap-[32px] sm:gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <h2 className="[word-break:break-word] font-sans font-bold leading-[36px] sm:leading-[46px] lg:leading-[56px] relative shrink-0 text-[#eef1f6] text-[28px] sm:text-[36px] lg:text-[44px] tracking-[-1px] w-full">
          Direct Answers
        </h2>
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="FAQ-List">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[rgba(17,23,34,0.9)] border border-[#232b3a] border-solid flex flex-col items-start overflow-hidden relative rounded-[10px] shrink-0 transition-colors w-full hover:border-[#3a4457]"
                data-name="FAQ-Item"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="cursor-pointer flex gap-[16px] items-center justify-between p-[18px] sm:p-[24px] relative shrink-0 text-left w-full"
                >
                  <span className="[word-break:break-word] flex-1 font-sans font-bold leading-[normal] min-w-0 text-[#eef1f6] text-[15px]">
                    {faq.question}
                  </span>
                  <span className="flex items-center justify-center relative shrink-0 size-[24px]">
                    <img
                      alt=""
                      className={`block max-w-none size-[14px] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                      src={imgPlus}
                    />
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  hidden={!isOpen}
                  className="px-[18px] sm:px-[24px] pb-[18px] sm:pb-[24px] relative shrink-0 w-full"
                >
                  <p className="[word-break:break-word] font-sans font-normal leading-[20px] text-[#aab3c4] text-[13px] w-full">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
