'use client';

import Image from 'next/image';
import { useState } from 'react';

const CODE_TABS = [
  { id: 'create', title: 'Create a live stream' },
  { id: 'secure', title: 'Secure playback' },
  { id: 'asset', title: 'Retrieve an asset' },
  { id: 'analytics', title: 'Read analytics' },
  { id: 'event', title: 'Create an event workflow' },
];

export default function DevelopersSection() {
  const [activeTab, setActiveTab] = useState('create');

  return (
    <section className="w-full border-t border-zinc-900 bg-zinc-950 px-6 py-16   text-slate-100 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col items-start gap-6 lg:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            <span className="  text-xs uppercase tracking-wide text-teal-400">
              For developers
            </span>
          </div>

          <h2 className="  text-3xl font-bold leading-tight text-slate-100 sm:text-4xl lg:text-4xl">
            Video APIs that let your team ship faster.
          </h2>

          <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
            Create live streams, process video, control playback, manage access, retrieve analytics, and automate
            media workflows through programmable APIs, SDKs, webhooks, and supported media protocols.
          </p>

          <p className="text-sm font-normal text-slate-500">
            Create a developer workspace and begin with self-service tools.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              className="rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3.5 text-base font-semibold text-slate-950 transition-opacity hover:opacity-95"
            >
              Read the documentation
            </button>
            <button
              type="button"
              className="rounded-[10px] border border-gray-700 px-6 py-3.5 text-base font-semibold text-slate-100 transition-colors hover:border-gray-500"
            >
              Get started
            </button>
          </div>

          <ul className="flex flex-col gap-3 pt-4 text-sm font-normal text-slate-400">
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-xs bg-teal-400" />
              <span>API reference</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-xs bg-teal-400" />
              <span>SDKs</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-xs bg-teal-400" />
              <span>Sample applications</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-gray-800 bg-neutral-900 shadow-2xl">
            <div className="flex items-center overflow-x-auto border-b border-gray-800 bg-neutral-950/50 scrollbar-none">
              {CODE_TABS.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`border-b-2 px-4 py-3 text-xs font-normal whitespace-nowrap transition-colors   ${
                      isActive
                        ? 'border-teal-400 bg-neutral-900 text-white'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>

            <div className="p-5   text-xs leading-relaxed overflow-x-auto">
              <div className="mb-2 text-slate-500">POST /v1/streams</div>
              <pre className="text-white">
                <code>
                  {'{'}
                  {'\n'}
                  {'  '}
                  <span className="text-violet-400">&quot;name&quot;</span>: <span className="text-teal-400">&quot;quarterly-briefing&quot;</span>,
                  {'\n'}
                  {'  '}
                  <span className="text-violet-400">&quot;latency_mode&quot;</span>: <span className="text-teal-400">&quot;low&quot;</span>,
                  {'\n'}
                  {'  '}
                  <span className="text-violet-400">&quot;record&quot;</span>: <span className="text-orange-300">true</span>
                  {'\n'}
                  {'}'}
                </code>
              </pre>
              <div className="mt-3 border-t border-neutral-800 pt-3 text-slate-500">
                → 201 {'{'} &quot;stream_id&quot;: &quot;str_9K2m...&quot;, &quot;playback_id&quot;: &quot;pb_9K2m...&quot; {'}'}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-neutral-900">
            <Image
              src="/images/home/div.on-dark (1).png"
              alt="Developer API workspace preview"
              width={837}
              height={419}
              className="aspect-[837/419] h-full w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
