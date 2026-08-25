import React from 'react';

const topics = [
  { title: 'Retention', desc: 'How long data is kept' },
  { title: 'International transfers', desc: 'Cross-border processing' },
  { title: 'Subprocessors & residency', desc: 'Approved providers' },
  { title: 'Children/minors', desc: 'Age-sensitive safeguards' },
  { title: 'Privacy Notice', desc: 'Current governed document' },
  { title: 'Cookie Notice', desc: 'Technology categories' },
  { title: 'Regional privacy notices', desc: 'Jurisdiction-specific rights' },
  { title: 'DPA / enterprise', desc: 'Data Processing Addendum' },
];

export function RelatedPrivacyTopicsSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            MORE PRIVACY INFORMATION
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Explore related topics.
        </h2>
      </div>

      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl border border-zinc-200 flex flex-col justify-center gap-1 min-h-[96px] shadow-xs hover:border-zinc-300 transition-colors cursor-pointer"
          >
            <h3 className="text-neutral-700 text-sm font-semibold">{topic.title}</h3>
            <span className="text-gray-400 text-xs font-normal">{topic.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
