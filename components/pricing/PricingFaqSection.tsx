import React from 'react';

const FAQS = [
  {
    question: 'Is there a public price list for Live Events?',
    answer:
      'No. Live Events commercial configurations are currently in the Quote required state — pricing is scoped individually based on your event\'s characteristics.',
  },
  {
    question: 'Does a bigger audience automatically cost more?',
    answer:
      'Audience scale can be a factor considered during scoping, but no surcharge, threshold, or viewer cap is implied unless an approved source publishes it.',
  },
  {
    question: 'Does filling out the scope builder commit me to anything?',
    answer:
      'No. The scope builder produces planning context only. It is not an estimate, quote, or contract, and no charge occurs from completing it.',
  },
  {
    question: 'Is recording and replay automatically included?',
    answer:
      'No inclusion is assumed. Recording, replay, and retention are scoped individually and confirmed only in your quote.',
  },
  {
    question: 'My event is already scheduled — do I need to request a quote?',
    answer:
      'Yes, for any event without existing contracted pricing. Existing customers with a current contract should use their account team instead of a new quote request.',
  },
];

export default function PricingFaqSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-50 flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-400 rounded-[3px]" />
          <span className="text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
            Live Events pricing FAQ
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
