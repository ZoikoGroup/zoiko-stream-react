import React from 'react';
import Link from 'next/link';

const PIPELINE = [
  { title: 'Capture requested', sub: 'Authorized to begin' },
  { title: 'Recording state', sub: 'Active or complete' },
  { title: 'Asset registration', sub: 'Identity assigned' },
  { title: 'Processing', sub: 'Readiness pending' },
  { title: 'Access decision', sub: 'Replay policy applied' },
  { title: 'Ongoing lifecycle', sub: 'Retained or retired' },
];

const TABLE = [
  { state: 'Not configured', meaning: 'Recording was not requested for this session' },
  { state: 'Recording / Active', meaning: 'Capture is currently in progress' },
  { state: 'Complete', meaning: 'Capture finished — asset processing may still be pending' },
  { state: 'Replay pending', meaning: 'Asset exists but is not yet ready for playback' },
  { state: 'Replay ready', meaning: 'Asset is ready under its access policy' },
  { state: 'Withheld', meaning: 'Ready, but access is intentionally restricted' },
];

export default function DevelopersRecordingLifecycleSection() {
  return (
    <section id="recording-lifecycle" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-slate-100 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            KEEP STORED MEDIA GOVERNED
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          A recording is not automatically a replay.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Stored-media availability, access, and lifecycle are separate product truths.
        </p>
      </div>

      {/* Stepper Pipeline */}
      <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 overflow-x-auto py-2">
        {PIPELINE.map((p, idx) => (
          <React.Fragment key={idx}>
            <div className="min-w-[140px] p-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-1 shrink-0">
              <span className="text-zinc-900 text-xs font-bold font-['Space_Grotesk']">
                {p.title}
              </span>
              <span className="text-gray-500 text-xs font-normal font-['Inter']">
                {p.sub}
              </span>
            </div>
            {idx < PIPELINE.length - 1 && (
              <span className="text-neutral-300 text-xs font-normal font-['Inter'] shrink-0">
                →
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* State Meaning Table */}
      <div className="w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden shadow-xs">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 bg-slate-100 border-b border-gray-200 py-3 px-6">
          <span className="text-zinc-900 text-xs font-semibold font-['IBM_Plex_Mono'] uppercase tracking-wide">
            State
          </span>
          <span className="md:col-span-2 text-zinc-900 text-xs font-semibold font-['IBM_Plex_Mono'] uppercase tracking-wide">
            Meaning
          </span>
        </div>

        <div className="flex flex-col">
          {TABLE.map((row, idx) => (
            <div
              key={idx}
              className="w-full grid grid-cols-1 md:grid-cols-3 py-3.5 px-6 border-b border-gray-200 last:border-b-0"
            >
              <span className="text-gray-600 text-xs font-medium font-['Inter']">
                {row.state}
              </span>
              <span className="md:col-span-2 text-gray-500 text-xs font-normal font-['Inter']">
                {row.meaning}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link
          href="/developer-recording-assest"
          className="px-6 py-3.5 bg-zinc-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 text-zinc-900 text-base font-semibold font-['Inter'] hover:bg-zinc-200 transition-colors"
        >
          Explore Recording and assets
        </Link>
        <Link
          href="/developer-analytics-api"
          className="px-6 py-3.5 bg-zinc-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 text-zinc-900 text-base font-semibold font-['Inter'] hover:bg-zinc-200 transition-colors"
        >
          Analytics API
        </Link>
      </div>
    </section>
  );
}
