'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

const indexedDocs = [
  { title: 'Authentication', badge: 'Current', badgeCls: 'bg-emerald-50 text-teal-600', meta: 'Concept · Get started' },
  { title: 'Webhooks and events', badge: 'Current', badgeCls: 'bg-emerald-50 text-teal-600', meta: 'Reference · Build' },
  { title: 'Rate limits', badge: 'Review due', badgeCls: 'bg-orange-100 text-yellow-700', meta: 'Reference · Operate' },
  { title: 'Secure playback', badge: 'Current', badgeCls: 'bg-emerald-50 text-teal-600', meta: 'Guide · Build' },
  { title: 'Video-on-demand API', badge: 'Current', badgeCls: 'bg-emerald-50 text-teal-600', meta: 'Reference · Build' },
  { title: 'Stream monitoring', badge: 'Current', badgeCls: 'bg-emerald-50 text-teal-600', meta: 'Guide · Operate' },
  { title: 'Error handling', badge: 'Current', badgeCls: 'bg-emerald-50 text-teal-600', meta: 'Troubleshooting · Operate' },
  { title: 'Player integration', badge: 'Current', badgeCls: 'bg-emerald-50 text-teal-600', meta: 'Guide · Build' },
  { title: 'Core concepts', badge: 'Current', badgeCls: 'bg-emerald-50 text-teal-600', meta: 'Concept · Get started' },
];

export function FastTransparentRetrievalSection() {
  const [filterQuery, setFilterQuery] = useState('');
  const [phaseFilter, setPhaseFilter] = useState('All phases');
  const [typeFilter, setTypeFilter] = useState('All content types');

  const filteredDocs = indexedDocs.filter((doc) =>
    doc.title.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              FAST, TRANSPARENT RETRIEVAL
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Search current documentation — transparently ranked.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[850px]">
            Exact title and heading matches are prioritized. No ranking based on browsing history, company identity, or account value.
          </p>
        </div>

        {/* Search & Filter Console Container */}
        <div className="w-full p-6 sm:p-8 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col gap-6">
          {/* Search Box */}
          <div className="relative w-full flex items-center">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Try “webhook”, “rate limit”, or “playback”"
              className="w-full pl-11 pr-4 py-3 bg-white rounded-lg border border-gray-300 text-sm text-zinc-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Filter Dropdown Selectors */}
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={phaseFilter}
              onChange={(e) => setPhaseFilter(e.target.value)}
              className="px-3.5 py-2 bg-white rounded-lg border border-gray-300 text-xs font-normal text-zinc-900 focus:outline-none cursor-pointer"
            >
              <option value="All phases">All phases</option>
              <option value="Get started">Get started</option>
              <option value="Build">Build</option>
              <option value="Operate">Operate</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3.5 py-2 bg-white rounded-lg border border-gray-300 text-xs font-normal text-zinc-900 focus:outline-none cursor-pointer"
            >
              <option value="All content types">All content types</option>
              <option value="Concept">Concept</option>
              <option value="Reference">Reference</option>
              <option value="Guide">Guide</option>
              <option value="Troubleshooting">Troubleshooting</option>
            </select>

            <span className="text-gray-500 text-xs font-mono ml-auto">
              {filteredDocs.length} documents indexed
            </span>
          </div>

          {/* Document Rows List */}
          <div className="w-full divide-y divide-gray-100 border-t border-gray-100 pt-2">
            {filteredDocs.map((doc) => (
              <div
                key={doc.title}
                className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-slate-50 px-2 rounded-lg transition-colors cursor-pointer"
              >
                <h3 className="text-zinc-900 text-sm font-bold">{doc.title}</h3>
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${doc.badgeCls}`}>
                    {doc.badge}
                  </span>
                  <span className="text-gray-500 text-xs font-mono">{doc.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
