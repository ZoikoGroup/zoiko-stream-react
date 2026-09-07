'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';

interface ApiFamily {
  id: string;
  title: string;
  category: 'Client-side' | 'Server-side' | 'Community';
  version: string;
  versionType: 'green' | 'blue';
  description: string;
  image: string;
  href: string;
}

const API_FAMILIES: ApiFamily[] = [
  {
    id: 'live-streaming',
    title: 'Live Streaming API',
    category: 'Server-side',
    version: 'v2.4 - CURRENT',
    versionType: 'green',
    description: 'Create, manage, and control live streams with full lifecycle operations.',
    image: '/images/api reference/ar1.png',
    href: '/live-streaming-api',
  },
  {
    id: 'vod',
    title: 'Video-on-Demand API',
    category: 'Server-side',
    version: 'v2.4 - CURRENT',
    versionType: 'green',
    description: 'Upload, transcode, manage, and deliver recorded video assets.',
    image: '/images/api reference/ar2.png',
    href: '/developer-video-demand-api',
  },
  {
    id: 'analytics',
    title: 'Analytics API',
    category: 'Client-side',
    version: 'v1.2 - CURRENT',
    versionType: 'blue',
    description: 'Query viewer engagement, playback quality, and usage telemetry.',
    image: '/images/api reference/ar3.png',
    href: '/developer-analytics-api',
  },
];

const FILTER_TABS = ['All Families', 'Client-side', 'Server-side', 'Community'] as const;

export default function ApiFamiliesSection() {
  const [selectedTab, setSelectedTab] = useState<typeof FILTER_TABS[number]>('All Families');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFamilies = API_FAMILIES.filter((family) => {
    const matchesTab =
      selectedTab === 'All Families' || family.category === selectedTab;
    const matchesSearch =
      family.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      family.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      family.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            API families
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Browse registry-backed API families. Each family groups related resources and operations.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_TABS.map((tab) => {
              const isActive = selectedTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  type="button"
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-[#27c3a7] text-[#06181f] shadow-[0_2px_10px_rgba(39,195,167,0.3)]'
                      : 'bg-[#101726]/80 text-slate-300 border border-slate-700/70 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64 md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter runtime or platform..."
              className="w-full bg-[#101726]/90 text-white placeholder-slate-500 text-xs rounded-lg pl-9 pr-3 py-2 border border-slate-700/80 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition-all"
            />
          </div>
        </div>

        {/* 3 Family Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredFamilies.map((family) => (
            <div
              key={family.id}
              className="group bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-slate-700/90 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              <div>
                {/* Image Cover */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-900">
                  <Image
                    src={family.image}
                    alt={family.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  {/* Title & Badge */}
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <h3 className="text-base sm:text-[17px] font-bold text-white group-hover:text-teal-300 transition-colors">
                      {family.title}
                    </h3>
                    <span
                      className={`shrink-0 font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                        family.versionType === 'green'
                          ? 'bg-[#064e3b]/80 border-[#059669]/60 text-[#34d399]'
                          : 'bg-[#1e3a8a]/80 border-[#2563eb]/60 text-[#60a5fa]'
                      }`}
                    >
                      {family.version}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                    {family.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <Link
                  href={family.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#27c3a7] hover:text-[#38d9a9] transition-colors"
                >
                  View operations
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredFamilies.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm">
            No API families found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
}
