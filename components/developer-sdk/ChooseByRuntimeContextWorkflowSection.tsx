'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const runtimes = ['All Runtimes', 'Node.js', 'Python', 'Go', 'Ruby', 'PHP', 'Java', 'Swift', 'Kotlin', '.NET'];
const contexts = ['All Contexts', 'Server-Side', 'Browser / Client', 'Mobile App', 'Edge Workers', 'CLI Tools'];
const workflows = ['All Workflows', 'Live Streaming', 'VOD Encoding', 'Direct Uploads', 'Analytics & Logs', 'Player Integrations'];

export function ChooseByRuntimeContextWorkflowSection() {
  const [selectedRuntime, setSelectedRuntime] = useState('All Runtimes');
  const [selectedContext, setSelectedContext] = useState('All Contexts');
  const [selectedWorkflow, setSelectedWorkflow] = useState('All Workflows');

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
            Choose by runtime, context, and workflow.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Narrow the catalog using explicit dimensions, without popularity rankings.
          </p>
        </div>

        {/* Filter Card Container */}
        <div className="w-full p-6 lg:p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-xs">
          {/* Runtime Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="w-40 text-slate-900 text-sm font-bold font-mono">
              Runtime / Language
            </span>
            <div className="flex-1 flex flex-wrap items-center gap-2">
              {runtimes.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedRuntime(item)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    selectedRuntime === item
                      ? 'bg-teal-400 text-gray-950 font-bold'
                      : 'bg-white text-slate-600 border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gray-200" />

          {/* Execution Context Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="w-40 text-slate-900 text-sm font-bold font-mono">
              Execution Context
            </span>
            <div className="flex-1 flex flex-wrap items-center gap-2">
              {contexts.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedContext(item)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    selectedContext === item
                      ? 'bg-teal-400 text-gray-950 font-bold'
                      : 'bg-white text-slate-600 border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gray-200" />

          {/* Primary Workflow Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="w-40 text-slate-900 text-sm font-bold font-mono">
              Primary Workflow
            </span>
            <div className="flex-1 flex flex-wrap items-center gap-2">
              {workflows.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedWorkflow(item)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    selectedWorkflow === item
                      ? 'bg-teal-400 text-gray-950 font-bold'
                      : 'bg-white text-slate-600 border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Count & Sort Header */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-slate-600 text-sm font-normal">
            Showing <strong className="text-slate-900 font-bold">6 official SDK packages</strong> matching your criteria.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-slate-600 text-sm font-normal">Sort by:</span>
            <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-slate-900 text-xs font-bold font-mono cursor-pointer">
              Recently Updated ▾
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
