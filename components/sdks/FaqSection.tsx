import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Which environments have official SDK support?',
    answer: 'We officially support JavaScript (browsers & Node.js), Python (Django, Fastapi), and Swift (iOS & iPadOS) natively. Android and Go packages are currently in beta.',
  },
  {
    question: 'How do I know if an SDK is maintained?',
    answer: "Maintained SDKs carry either a 'PRODUCTION' or 'PROSTABLE' tag in our environment directory and undergo security reviews every minor release.",
  },
  {
    question: 'What if my environment is not supported?',
    answer: 'Our raw HTTP REST and WebSocket signaling interfaces are fully documented. You can construct custom client wrappers on top of our exposed JSON protocols easily.',
  },
  {
    question: 'How are security issues handled?',
    answer: 'Vulnerabilities reported to security@zoikostream.com trigger an immediate patch cycle, with verified upgrades published within 24 hours of confirmation.',
  },
  {
    question: 'Can I use the SDK without authentication?',
    answer: 'No. All transport pipelines require active environmental API certificates signed by your enterprise administrator.',
  },
];

export default function FaqSection() {
  return (
    <section
      className="relative w-full flex flex-col gap-14 items-start py-16 sm:py-20 lg:py-[100px] px-4 sm:px-8 lg:px-28 bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/sdks/faq-bg.png')` }}
    >
      <h2 className="font-bold text-[#0a0d13] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
        Frequently asked questions
      </h2>

      <div className="flex flex-col gap-4 items-start w-full">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="flex flex-col gap-3 items-start w-full p-6 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]"
          >
            <div className="flex items-center justify-between w-full gap-4">
              <p className="font-bold text-[#0a0d13] text-base">{faq.question}</p>
              <div className="flex items-center justify-center size-6 shrink-0">
                <ChevronDown className="size-4 text-[#4f5e74]" strokeWidth={2} />
              </div>
            </div>
            <p className="text-[#4f5e74] text-sm leading-[22px] w-full">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
