'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Code2, Building2, Radio, ShieldCheck, Search } from 'lucide-react';

const pathways = [
  {
    role: 'For Developers',
    icon: Code2,
    bullets: [
      'Authentication docs & JWT validation',
      'Idempotent POST/PUT pathways',
      'API scopes & Webhook subscriptions',
      'SDKs for Browser, Python & Swift',
    ],
  },
  {
    role: 'For Enterprise',
    icon: Building2,
    bullets: [
      'Okta / Azure OIDC directory sync',
      'Delegated stewardship configurations',
      'Forensic audit report exports',
      'ISO 27001 & SOC 2 compliance reports',
    ],
  },
  {
    role: 'For Live Events',
    icon: Radio,
    bullets: [
      'Secure ingest RTMP/SRT keys',
      'Instant viewer whitelist configuration',
      'Real-time key rotation & stream monitors',
      'Emergency stream-termination overrides',
    ],
  },
  {
    role: 'Trust & Support',
    icon: ShieldCheck,
    bullets: [
      'Trust Center security disclosures',
      'Continuous system uptime monitoring',
      'Developer community forums',
      'Account-specific dedicated SLAs',
    ],
  },
];

const sdks = [
  {
    title: 'JavaScript SDK',
    desc: 'Browser & Node.js client',
    version: 'v4.2.1',
    badge: 'PROSTABLE',
    image: '/images/platform-access-control/CardImage (41).png',
    type: 'client',
  },
  {
    title: 'Python SDK',
    desc: 'Server-side pipelines & Django',
    version: 'v3.8.0',
    badge: 'PRODUCTION',
    image: '/images/platform-access-control/CardImage (42).png',
    type: 'server',
  },
  {
    title: 'Swift SDK',
    desc: 'Native iOS & iPadOS apps',
    version: 'v2.5.3',
    badge: 'ACTIVE',
    image: '/images/platform-access-control/CardImage (43).png',
    type: 'client',
  },
];

export default function ImplementationPathwaysSection() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredSdks = sdks.filter((sdk) => {
    const matchesFilter = filter === 'all' || sdk.type === filter;
    const matchesSearch =
      sdk.title.toLowerCase().includes(search.toLowerCase()) ||
      sdk.desc.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Implementation &amp; Evaluation Pathways
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Whether writing code, setting policies, or managing events, access the exact wrapper designed for your role.
          </p>
        </div>

        {/* 4 Role Pathways */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pathways.map((pw, idx) => {
            const Icon = pw.icon;
            return (
              <div
                key={idx}
                className="p-7 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-5"
              >
                <div className="size-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                  <Icon className="size-5" />
                </div>

                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {pw.role}
                </h3>

                <div className="flex flex-col gap-2.5">
                  {pw.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <div className="size-1 bg-slate-600 rounded-full shrink-0" />
                      <span className="text-slate-600 text-xs font-normal font-['Inter']">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sub-section: Choose your environment / SDKs */}
        <div className="flex flex-col gap-8 pt-8 border-t border-slate-200">
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-950 text-3xl font-bold font-['Space_Grotesk']">
              Choose your environment
            </h3>
            <p className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
              Access native wrappers built to manage core signaling, network transit, and edge audio-video buffering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold font-['Space_Grotesk'] transition-colors ${
                  filter === 'all'
                    ? 'bg-sky-100 border border-blue-500 text-blue-700'
                    : 'border border-gray-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                All SDKs
              </button>
              <button
                type="button"
                onClick={() => setFilter('client')}
                className={`px-4 py-2 rounded-full text-xs font-medium font-['Space_Grotesk'] transition-colors ${
                  filter === 'client'
                    ? 'bg-sky-100 border border-blue-500 text-blue-700'
                    : 'border border-gray-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                Client-side
              </button>
              <button
                type="button"
                onClick={() => setFilter('server')}
                className={`px-4 py-2 rounded-full text-xs font-medium font-['Space_Grotesk'] transition-colors ${
                  filter === 'server'
                    ? 'bg-sky-100 border border-blue-500 text-blue-700'
                    : 'border border-gray-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                Server-side
              </button>
            </div>

            <div className="w-full sm:w-80 px-4 py-2 rounded-lg border border-gray-200 flex items-center gap-2">
              <Search className="size-4 text-gray-400 shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter runtime or platform..."
                className="w-full text-xs font-normal font-['Space_Grotesk'] bg-transparent text-slate-900 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredSdks.map((sdk, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition-all"
              >
                <div className="relative w-full h-40 bg-slate-100 overflow-hidden">
                  <Image
                    src={sdk.image}
                    alt={sdk.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 bg-white flex flex-col gap-4 flex-1 justify-between">
                  <div className="flex justify-between items-center">
                    <h4 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
                      {sdk.title}
                    </h4>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[9px] font-bold font-mono">
                      {sdk.badge}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-slate-600 text-sm font-normal font-['Space_Grotesk']">
                      {sdk.desc}
                    </span>
                    <span className="text-gray-400 text-xs font-normal font-mono">
                      Latest stable: {sdk.version}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
