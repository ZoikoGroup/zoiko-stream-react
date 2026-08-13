'use client';

import Image from 'next/image';
import { useState } from 'react';

const TAB_OPTIONS = ['Developer API', 'Enterprise Broadcast', 'Live Events'];

const FLOW_TAGS_ROW_1 = ['API request', 'Stream created', 'Playback identifier'];

const FLOW_TAGS_ROW_2 = ['Live status', 'Analytics event'];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('Developer API');

  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 px-6 py-14 text-white dark:bg-gray-900 dark:text-white sm:px-10 lg:px-20 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(100,116,255,0.18),transparent_30%),radial-gradient(circle_at_18%_20%,rgba(34,197,94,0.08),transparent_22%)]" />

      <div className="relative mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col items-start gap-8 lg:w-1/2">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="  text-xs uppercase tracking-[0.22em] text-blue-400">
              Secure media infrastructure
            </span>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="max-w-[560px]   text-4xl font-bold leading-[1.08] text-slate-100 dark:text-white sm:text-5xl lg:text-5xl">
              Secure video
              <br />
              infrastructure
              <br />
              for products,
              <br />
              broadcasts, and
              <br />
              live events.
            </h1>
            <p className="max-w-[520px]   text-base leading-relaxed text-slate-400 dark:text-gray-400 sm:text-lg">
              ZoikoStream combines programmable APIs, enterprise media operations, and professionally managed Live
              Events to ingest, produce, protect, deliver, record, replay, and analyze live and on-demand video
              worldwide.
            </p>
          </div>

          <div className="flex w-full flex-col gap-5 sm:w-auto sm:flex-row sm:items-center">
            <a href="/start-building">
            <button
              type="button"
              className="rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 px-7 py-3.5   text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/10 transition-opacity hover:opacity-95"
            >
              Start building
            </button></a>
            <a
              href="/plan-a-live-event"
              className="inline-flex items-center justify-center gap-1.5 py-2   text-lg font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Plan a live event <span className="text-xl">→</span>
            </a>
          </div>

          <div className="w-full border-t border-gray-800 pt-6 dark:border-gray-800">
            <p className="  text-xs text-slate-500 dark:text-gray-500">
              Operated within Zoiko Tech - Powered by Zoiko Cloud
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-1/2">
          <div className="flex w-full max-w-[596px] flex-col gap-6 rounded-[20px] border border-gray-800 bg-zinc-900/90 p-5 shadow-2xl dark:border-gray-700 dark:bg-gray-800/90 sm:p-6">
            <div className="grid grid-cols-3 gap-2 rounded-xl border border-gray-800/60 bg-zinc-950/40 p-1 dark:border-gray-700/60 dark:bg-gray-900/40">
              {TAB_OPTIONS.map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`truncate rounded-lg border px-2 py-2 text-center text-xs font-semibold transition-all   ${
                      isActive
                        ? 'border-teal-400/80 bg-teal-400/10 text-white shadow-sm'
                        : 'border-transparent text-slate-400 hover:text-slate-200 dark:text-gray-400 dark:hover:text-gray-200'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <div className="aspect-[555/347] overflow-hidden rounded-2xl border border-slate-700/80 bg-zinc-950 dark:border-gray-700/80 dark:bg-gray-900">
              <Image
                src="/images/home/div.on-dark.png"
                alt="Infrastructure preview"
                width={555}
                height={347}
                className="h-full w-full object-cover"
                priority
              />
            </div>


            <div className="flex flex-col gap-2.5 pt-0.5">
              <div className="flex flex-wrap items-center gap-2.5">
                {FLOW_TAGS_ROW_1.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-3 py-2   text-xs font-normal text-slate-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                  >
                    <span>{tag}</span>
                    <span className="text-slate-500 dark:text-gray-500">→</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {FLOW_TAGS_ROW_2.map((tag, index) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-3 py-2   text-xs font-normal text-slate-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                  >
                    <span>{tag}</span>
                    {index < FLOW_TAGS_ROW_2.length - 1 && <span className="text-slate-500 dark:text-gray-500">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}