import React from 'react';
import Image from 'next/image';

export function FirstHealthCheckSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-50 border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              FIRST HEALTH CHECK
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Check one stream before you build a monitoring system.
          </h2>

          <p className="text-gray-500 text-base font-normal leading-6">
            Illustrative example — signal names, states and freshness timing are resolved from approved registries in your account.
          </p>
        </div>

        {/* Dashboard Box Container matching Figma image */}
        <div className="w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex flex-col shadow-2xl">
          {/* Top Half: Dark Dashboard Analytics Chart Image */}
          <div className="w-full h-[380px] lg:h-[460px] relative bg-neutral-950 overflow-hidden">
            <Image
              src="/images/stream-monitoring/image (7).jpg"
              alt="Dashboard Analytics Chart"
              fill
              className="object-cover object-top opacity-20"
              priority
            />
          </div>

          {/* Bottom Half: 4 Status Cards + Note Bar */}
          <div className="w-full p-6 lg:p-8 bg-zinc-900/95 border-t border-zinc-800 flex flex-col gap-6">
            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Lifecycle */}
              <div className="p-4 bg-zinc-800/80 rounded-xl border border-zinc-700/80 flex flex-col gap-2">
                <span className="text-gray-400 text-xs font-mono uppercase tracking-wide">
                  Lifecycle
                </span>
                <span className="text-white text-sm font-semibold">Active</span>
              </div>

              {/* Health */}
              <div className="p-4 bg-zinc-800/80 rounded-xl border border-zinc-700/80 flex flex-col gap-2">
                <span className="text-gray-400 text-xs font-mono uppercase tracking-wide">
                  Health
                </span>
                <div className="px-3 py-1 bg-stone-800 rounded-full w-fit flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-300 rounded-full" />
                  <span className="text-orange-300 text-xs font-bold">
                    Stale — last observed 6m ago
                  </span>
                </div>
              </div>

              {/* Active Alerts */}
              <div className="p-4 bg-zinc-800/80 rounded-xl border border-zinc-700/80 flex flex-col gap-2">
                <span className="text-gray-400 text-xs font-mono uppercase tracking-wide">
                  Active alerts
                </span>
                <div className="px-3 py-1 bg-gray-800 rounded-full w-fit flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-300 rounded-full" />
                  <span className="text-teal-300 text-xs font-bold">1 open</span>
                </div>
              </div>

              {/* Last Significant Change */}
              <div className="p-4 bg-zinc-800/80 rounded-xl border border-zinc-700/80 flex flex-col gap-2">
                <span className="text-gray-400 text-xs font-mono uppercase tracking-wide">
                  Last significant change
                </span>
                <span className="text-white text-sm font-semibold">Ingest reconnect</span>
              </div>
            </div>

            {/* Note & CTA Link */}
            <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-gray-400 font-normal">
              <p className="max-w-[880px] leading-5">
                Status stale — last observed evidence is no longer current. Stale supersedes a &quot;healthy&quot; visual treatment until fresh evidence arrives.{' '}
                <span className="text-blue-400 font-semibold cursor-pointer hover:underline">
                  Inspect ingest →
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
