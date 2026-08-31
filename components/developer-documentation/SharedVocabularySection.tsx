'use client';

import React, { useState } from 'react';

const conceptsList = [
  {
    title: 'Account & workspace context',
    desc: 'How requests are scoped to your organization and environment.',
    category: 'Access & workspace',
  },
  {
    title: 'Resources & IDs',
    desc: 'Durable identifiers your application persists across the lifecycle.',
    category: 'Access & workspace',
  },
  {
    title: 'Live vs. on-demand',
    desc: 'Two distinct media models with different lifecycle guarantees.',
    category: 'Live vs. on-demand',
  },
  {
    title: 'Contribution & ingest',
    desc: 'How source media enters the platform before processing.',
    category: 'Live vs. on-demand',
  },
  {
    title: 'Events & state',
    desc: 'How asynchronous work is represented and observed over time.',
    category: 'Events & lifecycle',
  },
  {
    title: 'Playback & recording',
    desc: 'What happens once media is ready to be viewed or replayed.',
    category: 'Events & lifecycle',
  },
  {
    title: 'Monitoring & analytics',
    desc: 'How to observe operational and audience-facing behavior.',
    category: 'Monitoring & analytics',
  },
  {
    title: 'Lifecycle & state registry',
    desc: 'The canonical vocabulary used across every async workflow.',
    category: 'Monitoring & analytics',
  },
];

const categoryTabs = [
  'All concepts',
  'Access & workspace',
  'Live vs. on-demand',
  'Events & lifecycle',
  'Monitoring & analytics',
];

export function SharedVocabularySection() {
  const [activeTab, setActiveTab] = useState('All concepts');

  const filteredConcepts = conceptsList.filter((c) =>
    activeTab === 'All concepts' ? true : c.category === activeTab
  );

  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              SHARED VOCABULARY
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Read core concepts before you choose an implementation path.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[850px]">
            A stable conceptual foundation — object names remain evidence-gated to the authoritative reference.
          </p>
        </div>

        {/* 2 Column Layout: Sidebar Tabs + Concept Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Category Tabs */}
          <div className="lg:col-span-3 flex flex-col gap-2 bg-slate-100 p-2 rounded-xl">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-zinc-900 font-semibold shadow-xs'
                    : 'text-gray-600 hover:text-zinc-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right Concept Cards Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredConcepts.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl border border-gray-200 flex flex-col justify-between gap-4 shadow-xs hover:border-blue-400 transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-zinc-900 text-sm font-bold">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-5">{item.desc}</p>
                </div>
                <div className="flex flex-col gap-1 pt-2">
                  <span className="text-blue-600 text-xs font-semibold hover:underline cursor-pointer">
                    See definition →
                  </span>
                  <span className="text-slate-400 text-[10px] font-mono">
                    Applies to: current API version
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
