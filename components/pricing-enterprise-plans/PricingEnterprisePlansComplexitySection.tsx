import React from 'react';

const SIGNALS = [
  {
    title: 'Multiple teams or workspaces',
    desc: 'Coordinating ZoikoStream across several teams, business units, or legal entities may require broader commercial scoping.',
  },
  {
    title: 'Higher or variable usage',
    desc: 'Usage that grows quickly or varies significantly may affect the commercial model depending on the usage dimensions involved.',
  },
  {
    title: 'Security or procurement review',
    desc: 'A formal security, privacy, or procurement review may require an additional commercial or evidence workflow.',
  },
  {
    title: 'Custom integration needs',
    desc: 'Deep integration with existing identity, content, or commerce systems may involve additional technical and commercial coordination.',
  },
  {
    title: 'Live Events at scale',
    desc: 'Recurring or high-stakes live broadcasts may involve dedicated planning beyond standard self-service usage.',
  },
  {
    title: 'Multi-region deployment',
    desc: 'Operating across multiple regions may introduce data residency or delivery considerations worth discussing directly.',
  },
];

export default function PricingEnterprisePlansComplexitySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-white flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-400 rounded-[3px]" />
          <span className="text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
            When enterprise scoping may matter
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold font-['Sora'] leading-tight">
          Recognize enterprise-relevant complexity.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          These signals may mean broader commercial scoping is worth exploring — they don&apos;t automatically qualify any organization for a specific plan, discount, or support level.
        </p>
      </div>

      {/* 6 Complexity Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SIGNALS.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 p-7 flex flex-col justify-start items-start gap-3 hover:shadow-md transition-shadow"
          >
            <h3 className="text-gray-800 text-base font-bold font-['Sora']">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footnote Banner */}
      <div className="w-full bg-slate-50 rounded-[10px] p-4 text-gray-400 text-xs font-normal font-['Inter'] leading-relaxed">
        None of these signals guarantee eligibility for a specific configuration, discount, or support tier. They indicate where a scoping conversation is often useful.
      </div>
    </section>
  );
}
