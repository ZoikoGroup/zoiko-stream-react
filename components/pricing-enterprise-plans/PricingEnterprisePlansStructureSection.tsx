import React from 'react';

const STATES = [
  {
    title: 'Public price',
    desc: 'Exact price published',
    dotColor: 'bg-gray-400',
    isHighlighted: false,
  },
  {
    title: 'Estimate available',
    desc: 'Calculator-based range',
    dotColor: 'bg-gray-400',
    isHighlighted: false,
  },
  {
    title: 'Quote required',
    desc: 'Scoped individually',
    dotColor: 'bg-indigo-500',
    isHighlighted: true,
  },
  {
    title: 'Account-specific',
    desc: 'Contracted customers',
    dotColor: 'bg-gray-400',
    isHighlighted: false,
  },
  {
    title: 'Not established',
    desc: 'No public record yet',
    dotColor: 'bg-gray-400',
    isHighlighted: false,
  },
];

export default function PricingEnterprisePlansStructureSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-50 flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-400 rounded-[3px]" />
          <span className="text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
            Commercial structure
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold font-['Sora'] leading-tight">
          How ZoikoStream pricing is presented.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Every ZoikoStream pricing destination uses one of five governed commercial states. Enterprise plans is currently in the Quote required state, shown highlighted below.
        </p>
      </div>

      {/* 5 Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {STATES.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 flex flex-col justify-center items-center text-center gap-3 transition-all ${
              item.isHighlighted
                ? 'bg-violet-50 outline outline-1 outline-offset-[-1px] outline-indigo-500 shadow-sm'
                : 'bg-white outline outline-1 outline-offset-[-1px] outline-zinc-200'
            }`}
          >
            <div className={`size-2.5 rounded-full ${item.dotColor}`} />
            <h3 className="text-gray-800 text-xs font-bold font-['Sora']">
              {item.title}
            </h3>
            <span className="text-gray-400 text-xs font-normal font-['Inter']">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
