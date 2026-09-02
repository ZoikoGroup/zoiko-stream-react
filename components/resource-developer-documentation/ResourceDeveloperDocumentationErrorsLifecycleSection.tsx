import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const ERRORS = [
  { code: '400 Bad Request', desc: 'Invalid request parameters' },
  { code: '401 Unauthorized', desc: 'Missing or invalid authentication' },
  { code: '429 Too Many Requests', desc: 'Rate limit exceeded; retry after window' },
  { code: '503 Service Unavailable', desc: 'Temporary service disruption' },
];

const LIFECYCLES = [
  { badge: 'CURRENT', style: 'bg-emerald-100 text-emerald-800', desc: 'Source-backed and fresh' },
  { badge: 'PREVIEW', style: 'bg-blue-100 text-blue-800', desc: 'Non-GA, limited state' },
  { badge: 'DEPRECATED', style: 'bg-amber-100 text-amber-800', desc: 'Successor available; migration path documented' },
  { badge: 'SUNSET SCHEDULED', style: 'bg-red-100 text-red-800', desc: 'Exact deadline from deprecation record' },
  { badge: 'SUPERSEDED', style: 'bg-gray-100 text-gray-700', desc: 'Replaced; historical context maintained' },
  { badge: 'UNDER REVIEW', style: 'bg-gray-100 text-gray-700', desc: 'Cannot present as current truth' },
];

export default function ResourceDeveloperDocumentationErrorsLifecycleSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden z-10">
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
          Errors, versioning, and lifecycle
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Understand error behavior, version compatibility, and documentation lifecycle states.
        </p>
      </div>

      {/* 2 Columns */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Errors */}
        <div className="flex flex-col justify-start items-start gap-6">
          <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
            Error handling & rate limits
          </h3>

          <div className="w-full bg-gray-200 rounded-xl overflow-hidden flex flex-col gap-px">
            {ERRORS.map((err, idx) => (
              <div key={idx} className="p-4 bg-white flex items-center gap-4">
                <span className="w-40 text-red-500 text-xs font-bold font-['IBM_Plex_Mono'] shrink-0">
                  {err.code}
                </span>
                <span className="text-slate-600 text-sm font-normal font-['Space_Grotesk']">
                  {err.desc}
                </span>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] italic">
            * Error codes, retry behavior, and rate limits are published only from approved sources.
          </p>
        </div>

        {/* Right Column - Lifecycle */}
        <div className="flex flex-col justify-start items-start gap-6">
          <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
            Document lifecycle states
          </h3>

          <div className="w-full flex flex-col gap-3">
            {LIFECYCLES.map((lc, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-4"
              >
                <div className="w-28 shrink-0 flex items-center">
                  <span className={`px-2 py-0.5 rounded-sm text-[9px] font-bold font-['IBM_Plex_Mono'] ${lc.style}`}>
                    {lc.badge}
                  </span>
                </div>
                <span className="text-slate-600 text-sm font-normal font-['Space_Grotesk']">
                  {lc.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
