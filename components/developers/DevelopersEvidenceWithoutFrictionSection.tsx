import React from 'react';
import Link from 'next/link';

const ITEMS = [
  { label: 'Documentation' },
  { label: 'System status' },
  { label: 'Changelog' },
  { label: 'Developer support' },
  { label: 'Accessibility help' },
];

export default function DevelopersEvidenceWithoutFrictionSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-slate-100 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            EVIDENCE WITHOUT SALES FRICTION
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          Verify what is current.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Status comes from validated operational sources; documentation carries implementation authority; support is for unresolved technical or account issues.
        </p>
      </div>

      {/* 5 Cards Row */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col items-center justify-center gap-3 text-center shadow-xs"
          >
            <span className="text-zinc-900 text-xs font-bold font-['Inter']">
              {item.label}
            </span>
            <div className="px-2.5 py-1 bg-emerald-50 rounded-full">
              <span className="text-teal-600 text-[9.50px] font-normal font-['IBM_Plex_Mono']">
                Current
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link
          href="/developer-documentation"
          className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
        >
          <span className="text-slate-950 text-base font-semibold font-['Inter']">
            Read documentation
          </span>
        </Link>
        <Link
          href="/developers-system-status"
          className="px-6 py-3.5 bg-zinc-100 rounded-[10px] outline outline-1 outline-gray-800 text-zinc-900 text-base font-semibold font-['Inter'] hover:bg-zinc-200 transition-colors"
        >
          System status
        </Link>
        <Link
          href="/faqs-and-support"
          className="px-6 py-3.5 bg-zinc-100 rounded-[10px] outline outline-1 outline-gray-800 text-zinc-900 text-base font-semibold font-['Inter'] hover:bg-zinc-200 transition-colors"
        >
          Developer support
        </Link>
      </div>
    </section>
  );
}
