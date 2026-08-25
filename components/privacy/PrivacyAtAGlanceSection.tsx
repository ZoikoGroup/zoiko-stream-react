import React from 'react';

const overviewItems = [
  {
    title: 'What we collect',
    desc: 'Category-level examples with product/context scope — see Data Practices below.',
  },
  {
    title: 'Why we use it',
    desc: 'Service delivery, security, support, billing, communications, product improvement and other approved purposes.',
  },
  {
    title: 'When we share it',
    desc: 'Service providers/subprocessors, affiliates, customer-designated recipients and legal/compliance recipients only as approved.',
  },
  {
    title: 'How long we keep it',
    desc: 'Category-based periods or objective retention criteria — see Retention below.',
  },
  {
    title: 'How we protect it',
    desc: 'High-level security and governance summary — see the Trust Center for evidence.',
  },
  {
    title: 'How you control it',
    desc: 'Cookies, marketing, privacy signals and applicable rights — see Your Privacy Choices below.',
  },
];

export function PrivacyAtAGlanceSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-slate-50 border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            OVERVIEW
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Privacy at a glance.
        </h2>
      </div>

      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {overviewItems.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-slate-50 rounded-2xl border border-zinc-200 flex flex-col justify-start gap-3 min-h-[144px] shadow-xs"
          >
            <h3 className="text-neutral-700 text-base font-bold">{item.title}</h3>
            <p className="text-gray-500 text-sm font-normal leading-5">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
