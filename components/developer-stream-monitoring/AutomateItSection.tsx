import React from 'react';

export function AutomateItSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-50 border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              AUTOMATE IT
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Bring health evidence and alert state into your operational tooling.
          </h2>
        </div>

        {/* Code Box matching Figma mockup */}
        <div className="w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col">
          <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-zinc-600 rounded-full" />
              <div className="w-2.5 h-2.5 bg-zinc-600 rounded-full" />
              <div className="w-2.5 h-2.5 bg-zinc-600 rounded-full" />
            </div>
            <span className="text-zinc-500 text-xs font-mono">
              conceptual example — not a live endpoint
            </span>
          </div>

          <div className="p-6 lg:p-8 font-mono text-xs text-neutral-300 leading-relaxed bg-zinc-950 overflow-x-auto">
            <p className="text-gray-500 mb-1">// Read current monitoring state (conceptual anatomy)</p>
            <p className="mb-4">
              <span className="text-teal-400">const</span> health ={' '}
              <span className="text-teal-400">await</span> zoiko.
              <span className="text-indigo-400">monitoring</span>.
              <span className="text-indigo-400">getStreamHealth</span>(streamId);
            </p>

            <p className="mb-1">
              <span className="text-teal-400">console</span>.<span className="text-indigo-400">log</span>
              (health.lifecycle, health.state, health.lastObserved);
            </p>
            <p className="text-gray-500 mb-6">// → &quot;active&quot; &quot;stale&quot; &quot;2026-08-25T14:08:00Z&quot;</p>

            <p className="text-gray-500 mb-1">// Handle a state-change event from Webhooks and events</p>
            <p className="mb-1">
              <span className="text-teal-400">function</span>{' '}
              <span className="text-indigo-400">onStreamHealthChanged</span>(event) &#123;
            </p>
            <p className="text-gray-500 pl-4 mb-1">
              // dedupe/idempotent — fetch current state when ordering matters
            </p>
            <p>&#125;</p>
          </div>
        </div>

        {/* Footer inline text and link */}
        <p className="text-gray-400 text-xs font-normal">
          Exact endpoint paths, fields and event names are resolved from the approved API and Event Registry.{' '}
          <span className="text-blue-500 font-semibold cursor-pointer hover:underline inline-block ml-1">
            Read Webhooks and events →
          </span>
        </p>
      </div>
    </section>
  );
}
