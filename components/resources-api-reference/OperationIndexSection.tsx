'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

type HttpMethod = 'POST' | 'GET' | 'PATCH' | 'DELETE';

interface OperationItem {
  method: HttpMethod;
  path: string;
  description: string;
  family: string;
  version: string;
}

const OPERATIONS: OperationItem[] = [
  {
    method: 'POST',
    path: '/v1/streams',
    description: 'Create a live stream',
    family: 'Live Streaming',
    version: 'v2.4',
  },
  {
    method: 'GET',
    path: '/v1/streams/{id}',
    description: 'Retrieve stream details',
    family: 'Live Streaming',
    version: 'v2.4',
  },
  {
    method: 'PATCH',
    path: '/v1/streams/{id}',
    description: 'Update stream configuration',
    family: 'Live Streaming',
    version: 'v2.4',
  },
  {
    method: 'DELETE',
    path: '/v1/streams/{id}',
    description: 'Delete a live stream',
    family: 'Live Streaming',
    version: 'v2.4',
  },
  {
    method: 'POST',
    path: '/v1/assets',
    description: 'Create a video asset',
    family: 'VOD',
    version: 'v2.4',
  },
  {
    method: 'GET',
    path: '/v1/analytics/views',
    description: 'Query view metrics',
    family: 'Analytics',
    version: 'v1.2',
  },
  {
    method: 'POST',
    path: '/v1/webhooks',
    description: 'Create webhook subscription',
    family: 'Webhooks',
    version: 'v2.0',
  },
  {
    method: 'GET',
    path: '/v1/player/embed',
    description: 'Get player embed config',
    family: 'Player',
    version: 'v3.1',
  },
];

const FILTER_PILLS = ['All', 'Live Streaming', 'VOD', 'Analytics', 'Webhooks'] as const;

export default function OperationIndexSection() {
  const [activeFilter, setActiveFilter] = useState<typeof FILTER_PILLS[number]>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOperations = OPERATIONS.filter((op) => {
    const matchesFilter =
      activeFilter === 'All' || op.family === activeFilter;
    const matchesSearch =
      op.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
      op.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      op.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
      op.family.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getMethodBadgeStyle = (method: HttpMethod) => {
    switch (method) {
      case 'POST':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-200/80';
      case 'GET':
        return 'bg-blue-50 text-blue-600 border border-blue-200/80';
      case 'PATCH':
        return 'bg-amber-50 text-amber-600 border border-amber-200/80';
      case 'DELETE':
        return 'bg-rose-50 text-rose-600 border border-rose-200/80';
      default:
        return 'bg-slate-50 text-slate-600 border border-slate-200';
    }
  };

  return (
    <section className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 100 C 220 20, 520 220, 880 110 S 1280 10, 1520 120" />
            <path d="M-80 170 C 250 80, 560 280, 920 170 S 1320 70, 1520 180" />
            <path d="M-80 240 C 280 140, 600 340, 960 230 S 1360 130, 1520 240" />
            <path d="M-80 520 C 210 600, 500 460, 830 560 S 1240 640, 1520 520" />
            <path d="M-80 590 C 240 670, 540 520, 870 630 S 1280 700, 1520 590" />
            <path d="M-80 660 C 270 740, 580 580, 910 700 S 1320 760, 1520 660" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            Operation index
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Canonical inventory of approved public API operations.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_PILLS.map((pill) => {
              const isActive = activeFilter === pill;
              return (
                <button
                  key={pill}
                  onClick={() => setActiveFilter(pill)}
                  type="button"
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'border border-blue-500 bg-blue-50/80 text-blue-600 shadow-sm'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter operations..."
              className="w-full bg-white text-slate-900 placeholder-slate-400 text-xs rounded-lg pl-9 pr-3 py-2 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Operations Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-slate-200/80 text-[11px] font-mono font-bold text-slate-700 tracking-wider">
                  <th className="py-3.5 px-5 sm:px-6">METHOD</th>
                  <th className="py-3.5 px-4 sm:px-6">ENDPOINT PATH</th>
                  <th className="py-3.5 px-4 sm:px-6">DESCRIPTION</th>
                  <th className="py-3.5 px-4 sm:px-6">FAMILY</th>
                  <th className="py-3.5 px-5 sm:px-6">VERSION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-[13px]">
                {filteredOperations.map((op, idx) => (
                  <tr
                    key={`${op.method}-${op.path}-${idx}`}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    {/* Method */}
                    <td className="py-4 px-5 sm:px-6 whitespace-nowrap">
                      <span
                        className={`inline-block px-2 py-0.5 rounded font-mono text-[10px] font-bold ${getMethodBadgeStyle(
                          op.method
                        )}`}
                      >
                        {op.method}
                      </span>
                    </td>

                    {/* Path */}
                    <td className="py-4 px-4 sm:px-6 font-mono font-medium text-slate-900 whitespace-nowrap">
                      {op.path}
                    </td>

                    {/* Description */}
                    <td className="py-4 px-4 sm:px-6 text-slate-600">
                      {op.description}
                    </td>

                    {/* Family */}
                    <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {op.family}
                    </td>

                    {/* Version */}
                    <td className="py-4 px-5 sm:px-6 font-mono text-slate-400 whitespace-nowrap">
                      {op.version}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredOperations.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-xs sm:text-sm">
              No operations found matching your filter.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
