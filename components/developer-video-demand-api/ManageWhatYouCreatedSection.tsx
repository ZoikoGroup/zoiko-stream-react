'use client';

import React, { useState } from 'react';

const tabs = ['Summary', 'Status', 'Playback', 'Metadata / Tracks', 'Danger zone'];

export function ManageWhatYouCreatedSection() {
  const [activeTab, setActiveTab] = useState('Summary');

  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
              MANAGE WHAT YOU CREATED
            </span>
          </div>

          <h2 className="text-zinc-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Manage the asset after it is created.
          </h2>

          <p className="text-gray-500 text-base lg:text-lg font-normal leading-7">
            Tabs are pruned to only the fields and actions your contract actually supports.
          </p>
        </div>

        {/* Tabbed Card Box */}
        <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col shadow-sm">
          {/* Tab Header */}
          <div className="flex border-b border-gray-200 overflow-x-auto bg-slate-50">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3.5 text-xs font-semibold font-mono transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-zinc-900 border-b-2 border-blue-500 bg-white font-bold'
                    : 'text-gray-500 hover:text-zinc-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 flex flex-col divide-y divide-slate-100">
            <div className="py-3 flex justify-between items-center text-xs">
              <span className="text-zinc-900 font-bold">Asset ID</span>
              <span className="text-gray-500 font-mono">asset_9J2kd58xX02laK</span>
            </div>
            <div className="py-3 flex justify-between items-center text-xs">
              <span className="text-zinc-900 font-bold">Created</span>
              <span className="text-gray-500 font-mono">2026-08-20T09:14:02Z</span>
            </div>
            <div className="py-3 flex justify-between items-center text-xs">
              <span className="text-zinc-900 font-bold">Updated</span>
              <span className="text-gray-500 font-mono">2026-08-20T09:16:47Z</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
