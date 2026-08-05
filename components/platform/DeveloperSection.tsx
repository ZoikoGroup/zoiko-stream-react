'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CAPABILITIES = [
  'Video APIs',
  'SDKs',
  'Media protocols',
  'Live streaming',
  'Real-time contribution',
  'Video on demand',
];

const RESOURCES = [
  'Documentation',
  'API reference',
  'Changelog',
  'Status',
  'Sample application',
];

const WORKFLOW_STEPS = ['Credential', 'Request', 'Stream', 'Player', 'Analytics'];

export default function DeveloperSection() {
  return (
    <section className="w-full bg-zinc-950 px-4 py-16 md:px-12 lg:px-20 lg:py-28 dark:bg-gray dark:text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-12 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-1 flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            <span className="  text-xs font-medium uppercase tracking-wide text-teal-400">
              FOR DEVELOPERS
            </span>
          </div>

          <h2 className="  text-3xl font-light leading-tight text-slate-100 sm:text-4xl md:text-5xl md:leading-[1.15]">
            Programmable foundations for <br className="hidden sm:inline" />
            every video workflow.
          </h2>

          <p className="  text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Build live, real-time, and on-demand video without building the underlying media infrastructure
            yourself. APIs, SDKs, webhooks, and supported protocols connect a credential to a working player in a
            few steps.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 py-2">
            {CAPABILITIES.map((item) => (
              <span key={item} className="  text-sm font-normal text-slate-400">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2.5 py-2">
            {RESOURCES.map((resource) => (
              <Link
                key={resource}
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-full border border-gray-800 bg-zinc-900/50 px-3.5   text-xs text-slate-400 transition-colors hover:border-gray-700 hover:text-white"
              >
                {resource}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/signup"
              className="inline-flex min-h-[48px] min-w-[192px] items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3.5   text-base font-normal text-slate-950 transition-opacity hover:opacity-95"
            >
              Start building
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col items-start gap-4">
          <div className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-neutral-900 shadow-2xl">
            <div className="border-b border-gray-800 bg-neutral-900/80 px-4 pt-3">
              <div className="inline-block border-b-2 border-teal-400 pb-2">
                <span className="  text-xs text-white">Sample path</span>
              </div>
            </div>

            <div className="overflow-x-auto p-5   text-xs leading-6">
              <div className="text-slate-500">POST /v1/streams</div>
              <div className="text-white">&#123;</div>
              <div className="pl-4">
                <span className="text-violet-400">&quot;name&quot;</span>
                <span className="text-white">: </span>
                <span className="text-teal-400">&quot;quarterly-briefing&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-violet-400">&quot;latency_mode&quot;</span>
                <span className="text-white">: </span>
                <span className="text-teal-400">&quot;low&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-violet-400">&quot;record&quot;</span>
                <span className="text-white">: </span>
                <span className="text-orange-300">true</span>
              </div>
              <div className="text-white">&#125;</div>
              <div className="mt-2 text-slate-500">
                &rarr; 201 &#123; &quot;stream_id&quot;: &quot;str_9K2m...&quot;, &quot;playback_id&quot;:
                &quot;pb_9K2m...&quot; &#125;
              </div>
            </div>
          </div>

          <div className="flex w-full flex-wrap gap-2 pt-1">
            {WORKFLOW_STEPS.map((step, index) => (
              <div
                key={step}
                className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-3 py-1.5   text-xs text-slate-400"
              >
                <span>{step}</span>
                {index < WORKFLOW_STEPS.length - 1 && <ArrowRight className="h-3 w-3 text-slate-500" />}
              </div>
            ))}
          </div>

          <p className="mt-1   text-xs leading-relaxed text-slate-500">
            Exact protocol, SDK, and access-state details require current engineering authority before
            publication.
          </p>
        </div>
      </div>
    </section>
  );
}
