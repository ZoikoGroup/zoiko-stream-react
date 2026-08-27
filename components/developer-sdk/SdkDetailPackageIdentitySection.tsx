'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const tabs = [
  'Install',
  'Initialize',
  'API Mapping',
  'Behavior',
  'Compatibility',
  'Security',
  'Releases',
  'Support',
];

export function SdkDetailPackageIdentitySection() {
  const [activeTab, setActiveTab] = useState('Install');

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            SDK detail — package identity before installation.
          </h2>
        </div>

        {/* 2 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Package Information */}
          <div className="p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <h3 className="text-slate-900 text-xl font-bold font-mono">Package Information</h3>
            <div className="flex flex-col divide-y divide-gray-200 text-sm">
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600">Package Coordinator</span>
                <span className="text-slate-900 font-bold font-mono">@zoikostream/sdk-node</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600">GitHub Repository</span>
                <span className="text-blue-500 font-bold font-mono">zoikostream/sdk-node</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600">Lifecycle Status</span>
                <span className="text-emerald-500 font-bold font-mono">GA (Production-Ready)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Assurance & Signatures */}
          <div className="p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <h3 className="text-slate-900 text-xl font-bold font-mono">Assurance &amp; Signatures</h3>
            <div className="flex flex-col divide-y divide-gray-200 text-sm">
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600">PGP Signature Key</span>
                <span className="text-slate-900 font-bold font-mono">0x9F44E72C (Verified)</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600">Registry Origin</span>
                <span className="text-slate-900 font-bold font-mono">registry.npmjs.org</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600">Vulnerability Scan</span>
                <span className="text-emerald-500 font-bold font-mono">0 Vulnerabilities detected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="w-full border-b border-gray-200 pb-2 flex flex-wrap items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 rounded-md text-sm font-bold font-mono transition-colors cursor-pointer ${
                activeTab === tab
                  ? 'bg-slate-100 text-blue-500'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
