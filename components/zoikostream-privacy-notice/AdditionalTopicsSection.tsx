import React from 'react';

const TOPICS = [
  {
    title: "Children's privacy",
    description:
      "ZoikoStream's standard services are not directed to children under the age defined by applicable law.",
    tag: 'Illustrative example — see current notice for exact age and scope',
  },
  {
    title: 'Sensitive personal data',
    description:
      'We do not intentionally collect sensitive categories of personal data through standard service usage.',
    tag: 'Illustrative example',
  },
  {
    title: 'Automated decision-making',
    description:
      'A specific automated-decision or profiling disclosure has not been separately established for public statement at this time.',
    tag: 'Not established',
  },
  {
    title: 'Sale or sharing of personal data',
    description:
      'A specific "sale" or "sharing" disclosure under applicable law has not been separately established for public statement at this time.',
    tag: 'Not established',
  },
];

export default function AdditionalTopicsSection() {
  return (
    <section id="additional-topics" className="relative w-full bg-[#080d19] text-white py-16 lg:py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          <span className="font-mono text-xs font-semibold tracking-wider text-teal-400 uppercase">
            ONLY WHERE SOURCE-APPROVED
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          Additional topics.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          High-risk claims — like automated decision-making or data sales — are stated only when a real, approved source backs them.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TOPICS.map((item) => (
            <div
              key={item.title}
              className="bg-[#0d1424] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-white text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 block">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
