import React from 'react';

const decisionCards = [
  {
    title: 'Architecture & integration',
    desc: 'Bring specialist expertise when ZoikoStream must fit an existing identity, content, data, commerce, player, or enterprise architecture.',
  },
  {
    title: 'Faster implementation',
    desc: 'Use experienced delivery teams to accelerate migrations, app builds, workflow changes, and multi-system programs where internal capacity is constrained.',
  },
  {
    title: 'Live event execution',
    desc: 'Add production, contribution, accessibility, operational, or event-specific expertise for broadcasts with time-bound execution requirements.',
  },
  {
    title: 'Specialized capabilities',
    desc: 'Connect adjacent technologies and services that solve a defined need without positioning ZoikoStream as the provider of every surrounding function.',
  },
  {
    title: 'Ongoing operations',
    desc: "Engage managed-service or implementation partners where customers need recurring operational help beyond ZoikoStream's own product/support scope.",
  },
];

export default function DecisionSupportSection() {
  return (
    <section className="w-full bg-slate-50 py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-xs font-bold   uppercase tracking-wider">
              DECISION SUPPORT
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-gray-800 leading-tight">
            When a partner can help.
          </h2>
        </div>

        {/* 5 Decision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {decisionCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-xs flex flex-col gap-3 h-48 hover:shadow-md transition-shadow"
            >
              <h3 className="text-indigo-500 text-base font-bold  ">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm font-normal   leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer Banner Box */}
        <div className="p-5 bg-slate-100 rounded-lg border border-gray-200">
          <p className="text-gray-500 text-sm font-normal   leading-relaxed max-w-4xl">
            Partner services remain the partner&apos;s services unless a contract explicitly states otherwise. This page does not blur ZoikoStream product obligations, partner obligations, or customer procurement decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
