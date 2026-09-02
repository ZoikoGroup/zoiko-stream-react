import React from 'react';

const FAQS = [
  {
    question: 'Is there a public enterprise price list?',
    answer:
      'No. ZoikoStream enterprise configurations are currently in the Quote required commercial state — scope and pricing are determined individually rather than published as a fixed price list.',
  },
  {
    question: 'Does higher usage automatically mean a volume discount?',
    answer:
      'No. Usage volume can be a factor considered during scoping, but a discount is never assumed or implied unless an approved commercial terms record establishes it.',
  },
  {
    question: 'What is included in an enterprise configuration?',
    answer:
      'Only entitlements confirmed in an approved commercial record can be described as included. Where nothing is publicly established, this page will not use "custom" or "ask sales" as a substitute answer.',
  },
  {
    question: "I'm an existing customer — should I request a quote here?",
    answer:
      'Not for billing or contracted-scope questions. Use Usage and billing or your account team for those. This page is for evaluating new or separate enterprise scope.',
  },
  {
    question: 'What happens after I request an enterprise quote?',
    answer:
      "You'll see what information is shared before you submit it. A member of the ZoikoStream commercial team will follow up to scope your requirements — submitting a request does not create a contract.",
  },
];

export default function PricingEnterprisePlansFaqSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-white flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-400 rounded-[3px]" />
          <span className="text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
            Enterprise FAQ
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold font-['Sora'] leading-tight">
          Quick answers.
        </h2>
      </div>

      {/* FAQs List */}
      <div className="w-full max-w-5xl flex flex-col divide-y divide-zinc-200 border-t border-zinc-200">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="py-6 flex flex-col gap-2">
            <h3 className="text-gray-800 text-base font-bold font-['Sora']">
              {faq.question}
            </h3>
            <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
