'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

const sidebarNav = [
  { label: 'Get started', active: false },
  { label: 'Fundamentals', active: true },
  { label: 'Quickstart', active: false },
  { label: 'Build', active: false },
  { label: 'SDKs & APIs', active: false },
  { label: 'Webhooks', active: false },
  { label: 'Operate', active: false },
  { label: 'Monitoring', active: false },
  { label: 'Rate limits', active: false },
];

export function HeroSection() {
  const [activeItem, setActiveItem] = useState('Fundamentals');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-zinc-950 text-slate-100 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-12 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/documentation-page/hero/section-bg.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
      </div>

      {/* Left Content Column */}
      <div className="relative z-10 flex-1 max-w-[620px] flex flex-col justify-start items-start gap-6">
        <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-blue-900/50">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-blue-400 text-xs font-mono font-semibold uppercase tracking-wide">
            DEVELOPERS / DOCUMENTATION
          </span>
        </div>

        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          Full technical guidance for building and operating with ZoikoStream.
        </h1>

        <p className="text-slate-400 text-base lg:text-lg leading-relaxed font-normal">
          Find concepts, implementation guides, troubleshooting, operational guidance, and current references across GET STARTED, BUILD, and OPERATE.
        </p>

        {/* Search Bar Input */}
        <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
          <div className="flex-1 relative flex items-center">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation — try “webhooks” or “authentication”"
              className="w-full pl-11 pr-4 py-3 bg-zinc-900 rounded-xl border border-gray-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl text-slate-950 font-bold text-sm hover:opacity-95 transition-opacity shrink-0">
            Search documentation
          </button>
        </div>

        {/* Category Phase Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="px-3.5 py-1.5 bg-zinc-900 rounded-full border border-teal-800 text-teal-400 text-xs font-mono font-semibold tracking-wider uppercase">
            GET STARTED
          </span>
          <span className="px-3.5 py-1.5 bg-zinc-900 rounded-full border border-blue-900 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase">
            BUILD
          </span>
          <span className="px-3.5 py-1.5 bg-zinc-900 rounded-full border border-slate-700 text-violet-400 text-xs font-mono font-semibold tracking-wider uppercase">
            OPERATE
          </span>
        </div>
      </div>

      {/* Right Mockup Console Box */}
      <div className="relative z-10 w-full lg:w-[540px] bg-zinc-900 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden backdrop-blur-md">
        {/* Top Header Bar */}
        <div className="w-full px-4 py-3 bg-zinc-950 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="px-2.5 py-0.5 bg-teal-500/10 rounded-full text-teal-400 text-[10px] font-mono font-semibold border border-teal-500/30">
            CURRENT · verified Aug 2026
          </span>
        </div>

        {/* Content Body Grid */}
        <div className="flex min-h-[260px]">
          {/* Left Sidebar */}
          <div className="w-36 border-r border-gray-800 p-3 flex flex-col gap-1 bg-zinc-950/50 text-xs">
            {sidebarNav.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveItem(item.label)}
                className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                  activeItem === item.label
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Main Console Panel */}
          <div className="flex-1 p-5 flex flex-col justify-start items-start gap-4">
            <h3 className="text-white text-sm font-bold">Core concepts</h3>
            <div className="w-full space-y-2">
              <div className="w-full h-2 bg-gray-800 rounded-sm" />
              <div className="w-5/6 h-2 bg-gray-800 rounded-sm" />
              <div className="w-2/3 h-2 bg-gray-800 rounded-sm" />
            </div>

            <div className="w-full mt-2 p-3 bg-neutral-950 rounded-lg border border-gray-800 font-mono text-xs text-slate-300 space-y-1">
              <div className="text-sky-400 font-semibold">GET /v1/assets/&#123;id&#125;</div>
              <div className="text-emerald-400 font-semibold">→ 200 OK &#123; &quot;status&quot;: &quot;ready&quot; &#125;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
