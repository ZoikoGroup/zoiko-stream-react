'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const REFERENCES = [
  {
    method: 'POST',
    methodBg: 'bg-blue-50 text-blue-500',
    path: '/v1/streams',
    desc: 'Create a live stream',
    type: 'Operation',
    status: 'CURRENT',
  },
  {
    method: 'GET',
    methodBg: 'bg-blue-50 text-blue-500',
    path: '/v1/streams/{id}',
    desc: 'Retrieve stream details',
    type: 'Operation',
    status: 'CURRENT',
  },
  {
    method: 'EVENT',
    methodBg: 'bg-gray-100 text-slate-600',
    path: 'stream.connected',
    desc: 'Fired when encoder connects',
    type: 'Event',
    status: 'CURRENT',
  },
  {
    method: 'SCHEMA',
    methodBg: 'bg-gray-100 text-slate-600',
    path: 'StreamObject',
    desc: 'Stream resource schema',
    type: 'Schema',
    status: 'CURRENT',
  },
  {
    method: 'ERROR',
    methodBg: 'bg-gray-100 text-slate-600',
    path: 'rate_limit_exceeded',
    desc: '429 Too Many Requests',
    type: 'Error',
    status: 'CURRENT',
  },
];

export default function ResourceDeveloperDocumentationReferenceExplorerSection() {
  const [activeType, setActiveType] = useState<string>('All');

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
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

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3 max-w-4xl">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Reference explorer
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Search, filter, and browse approved resources, operations, schemas, events, and errors.
        </p>
      </div>

      {/* Main Explorer Box */}
      <div className="relative z-10 w-full p-6 sm:p-8 bg-white rounded-2xl shadow-sm outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-6">
        {/* Controls Bar */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Resources', 'Operations', 'Schemas', 'Events', 'Errors'].map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-4 py-2 rounded-[20px] outline outline-1 outline-offset-[-1px] text-xs font-bold font-['Space_Grotesk'] transition-colors ${
                  activeType === t
                    ? 'bg-sky-100 outline-blue-500 text-blue-700'
                    : 'bg-transparent outline-gray-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="w-full lg:w-80 px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-2 bg-white">
            <Search className="size-3.5 text-slate-600 shrink-0" />
            <input
              type="text"
              placeholder="Search resources, operations, events..."
              className="w-full bg-transparent text-xs text-gray-800 placeholder-gray-400 font-normal font-['Space_Grotesk'] focus:outline-none"
            />
          </div>
        </div>

        {/* Table Rows Container */}
        <div className="w-full bg-gray-200 rounded-lg overflow-hidden flex flex-col gap-px">
          {REFERENCES.map((row, idx) => (
            <div
              key={idx}
              className="p-4 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <span className={`w-20 px-2 py-1 rounded-sm text-xs font-bold font-['IBM_Plex_Mono'] text-center shrink-0 ${row.methodBg}`}>
                  {row.method}
                </span>
                <span className="text-zinc-950 text-sm font-semibold font-['IBM_Plex_Mono'] truncate">
                  {row.path}
                </span>
              </div>

              <span className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] flex-1">
                {row.desc}
              </span>

              <div className="flex items-center gap-4 shrink-0">
                <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
                  {row.type}
                </span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-sm text-[9px] font-bold font-['IBM_Plex_Mono']">
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Authentication Sub-card */}
      <div className="relative z-10 w-full flex flex-col gap-2 pt-2">
        <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
          Authentication & access
        </h3>
        <p className="text-slate-600 text-base font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
          Access approved authentication and credential documentation. Sign-in is required only when account-specific context demands it.
        </p>
        <Link
          href="/authentication"
          className="text-blue-500 hover:text-blue-600 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1 pt-1 transition-colors"
        >
          View authentication guide <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
