import React from 'react';

const imgBg = "/images/responsible-disclosure/faq-section.png";

const faqs = [
  {
    question: "Is scanning permitted?",
    answer: "Yes, provided the rate does not exceed 5 requests per second and you do not impact stream availability.",
  },
  {
    question: "Do you offer financial bounties?",
    answer: "Details of active cash awards appear only when an officially governed commercial program is active.",
  },
  {
    question: "How long does triage take?",
    answer: "We target initial verification within 48 business hours, but complex platforms can take longer.",
  },
  {
    question: "Can I disclose on social media?",
    answer: "No. Unauthorized unilateral disclosure invalidates safe harbor protections instantly.",
  },
  {
    question: "Is safe harbor guaranteed?",
    answer: "Safe harbor depends entirely on your strict compliance with our published rules.",
  },
  {
    question: "What assets are out of bounds?",
    answer: "Third-party services, staging properties, and anything not explicitly in our scope registry.",
  },
  {
    question: "What should I do if I access data?",
    answer: "Stop immediately. Do not download, modify, or retain customer personal data.",
  },
  {
    question: "Can I test DDoS vulnerabilities?",
    answer: "No. Any volumetric load testing or service-degrading query is prohibited.",
  },
  {
    question: "How do I update an existing report?",
    answer: "Reply to your original ingestion thread with your assigned reference token.",
  },
  {
    question: "Can I request anonymous credit?",
    answer: "Yes. Specify your preferred pseudonym or request complete anonymity.",
  },
];

export default function FaqSection() {
  return (
    <div className="bg-white border-b border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="FAQ-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-146px] bottom-[-40px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
          Direct Answers
        </h2>
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 relative shrink-0 w-full" data-name="FAQ-Grid">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[12px] items-start p-[20px] sm:p-[24px] relative rounded-[10px] shrink-0" data-name="FAQ-Item">
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#0a0d13] text-[16px] w-full">
                {faq.question}
              </p>
              <p className="[word-break:break-word] font-sans font-normal leading-[20px] text-[#4f5e74] text-[13.5px] w-full">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
