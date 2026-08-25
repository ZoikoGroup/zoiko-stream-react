import { AlertTriangle } from 'lucide-react';
import React from 'react';

const routes = [
  { label: 'Active customer incident', link: 'Get Support →' },
  { label: 'Security vulnerability', link: 'Vulnerability Disclosure →' },
  { label: 'Privacy rights request', link: 'Privacy →' },
  { label: 'Legal notice', link: 'Legal →' },
  { label: 'Recruiting accommodation', link: 'Careers →' },
  { label: 'Accessibility documentation', link: 'Trust Center →' },
];

export function ScopeAndBoundariesSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            RIGHT ROUTE, RIGHT TEAM
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Scope & boundaries.
        </h2>
      </div>

      {/* Alert Box */}
      <div className="w-full max-w-[1216px] mx-auto p-6 bg-orange-50 rounded-2xl border border-orange-400/30 flex items-start gap-4 shadow-xs">
        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
          <AlertTriangle className="w-3.5 h-3.5 text-orange-400 " />
        </div>
        <p className="text-neutral-700 text-sm font-normal leading-5">
          Responsibility for captions, transcripts or other accessible media depends on the feature and content owner. If you&apos;re not sure, submit the form anyway — we&apos;ll route it rather than ask you to determine ownership.
        </p>
      </div>

      {/* 6 Route Cards Grid */}
      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl border border-zinc-200 flex flex-col justify-center gap-2 min-h-[96px] shadow-xs"
          >
            <span className="text-gray-400 text-xs font-normal">{route.label}</span>
            <span className="text-blue-400 text-sm font-bold cursor-pointer">{route.link}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
