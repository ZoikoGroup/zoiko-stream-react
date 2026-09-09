'use client';

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface CookieRecord {
  name: string;
  category: 'Strictly necessary' | 'Functional' | 'Analytics' | 'Advertising';
  type: string;
  purpose: string;
  duration: string;
  status: 'Always active' | 'Optional';
}

const RECORDS: CookieRecord[] = [
  {
    name: 'zk_session',
    category: 'Strictly necessary',
    type: 'HTTP cookie',
    purpose: 'Maintains your signed-in session state.',
    duration: 'Session (deleted when browser closes)',
    status: 'Always active',
  },
  {
    name: 'zk_csrf',
    category: 'Strictly necessary',
    type: 'HTTP cookie',
    purpose: 'Protects forms from cross-site request forgery.',
    duration: 'Session',
    status: 'Always active',
  },
  {
    name: 'zk_cookie_consent',
    category: 'Strictly necessary',
    type: 'HTTP cookie',
    purpose: "Stores your cookie preference choices so we don't ask repeatedly.",
    duration: '12 months',
    status: 'Always active',
  },
  {
    name: 'zk_lang',
    category: 'Functional',
    type: 'HTTP cookie',
    purpose: 'Remembers your language and region preference.',
    duration: '12 months',
    status: 'Optional',
  },
  {
    name: 'zk_theme',
    category: 'Functional',
    type: 'Local storage',
    purpose: 'Remembers your light/dark interface preference.',
    duration: 'Persistent until cleared',
    status: 'Optional',
  },
  {
    name: 'zk_video_prefs',
    category: 'Functional',
    type: 'HTTP cookie',
    purpose: 'Remembers playback quality and volume preferences.',
    duration: '6 months',
    status: 'Optional',
  },
  {
    name: 'zk_an_id',
    category: 'Analytics',
    type: 'HTTP cookie',
    purpose: 'Distinguishes unique visitors for aggregate usage analytics.',
    duration: '24 months',
    status: 'Optional',
  },
  {
    name: 'zk_an_session',
    category: 'Analytics',
    type: 'HTTP cookie',
    purpose: 'Groups page views into a single visit for reporting.',
    duration: '30 minutes',
    status: 'Optional',
  },
  {
    name: 'zk_heatmap',
    category: 'Analytics',
    type: 'HTTP cookie',
    purpose: 'Aggregate interaction analytics used for product improvement.',
    duration: '12 months',
    status: 'Optional',
  },
  {
    name: 'zk_ad_id',
    category: 'Advertising',
    type: 'HTTP cookie',
    purpose: 'Measures marketing campaign effectiveness.',
    duration: '90 days',
    status: 'Optional',
  },
];

export default function CookieTrackerInventorySection() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');

  const filteredRecords = RECORDS.filter((rec) => {
    const matchesCategory =
      selectedCategory === 'All categories' || rec.category === selectedCategory;
    const matchesSearch =
      rec.name.toLowerCase().includes(search.toLowerCase()) ||
      rec.purpose.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="cookie-inventory" className="relative w-full bg-[#f0f4f8] py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            VERIFIED RECORD LIST
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Current cookie &amp; tracker inventory.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-6">
          Select any row to see its full record — purpose, provider, and duration. Records shown are illustrative examples for this demonstration.
        </p>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or purpose"
              className="w-full bg-white border border-slate-200/90 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 shadow-sm"
            />
          </div>
          <div className="relative min-w-[160px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none bg-white border border-slate-200/90 rounded-xl px-4 py-2 pr-9 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-500 cursor-pointer shadow-sm"
            >
              <option value="All categories">All categories</option>
              <option value="Strictly necessary">Strictly necessary</option>
              <option value="Functional">Functional</option>
              <option value="Analytics">Analytics</option>
              <option value="Advertising">Advertising</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Counter */}
        <div className="text-xs font-mono text-slate-500 mb-4">
          {filteredRecords.length} records shown (illustrative example set)
        </div>

        {/* Table Container */}
        <div className="border border-slate-200/90 rounded-2xl overflow-x-auto bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200/90 bg-slate-50/70 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">NAME</th>
                <th className="py-3 px-4">CATEGORY</th>
                <th className="py-3 px-4">TYPE</th>
                <th className="py-3 px-5">PURPOSE</th>
                <th className="py-3 px-5">DURATION</th>
                <th className="py-3 px-5">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredRecords.map((item) => (
                <tr
                  key={item.name}
                  className="hover:bg-slate-50/60 transition-colors"
                >
                  <td className="py-3.5 px-5 font-mono font-bold text-slate-900">
                    {item.name}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700">
                    {item.category}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {item.type}
                  </td>
                  <td className="py-3.5 px-5 text-slate-600 max-w-xs leading-relaxed">
                    {item.purpose}
                  </td>
                  <td className="py-3.5 px-5 text-slate-600">
                    {item.duration}
                  </td>
                  <td className="py-3.5 px-5">
                    {item.status === 'Always active' ? (
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        Always active
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-blue-50 text-blue-600 border border-blue-200/80">
                        Optional
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
