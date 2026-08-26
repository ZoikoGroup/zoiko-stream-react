import React from 'react';

const navItems = [
  'Golden path',
  'Access & preflight',
  'Ingest path',
  'Create asset',
  'Reliable transfer',
  'Processing',
  'Asset lifecycle',
  'Playback',
  'Webhooks',
  'Errors',
  'Limits',
  'SDKs',
  'Readiness & FAQ',
];

export function OnThisPageNavSection() {
  return (
    <section className="w-full bg-slate-100 border-t border-b border-gray-200 py-4 px-6 lg:px-28">
      <div className="max-w-[1216px] mx-auto flex flex-col gap-3">
        <span className="text-gray-500 text-xs font-mono font-bold uppercase tracking-wide">
          On this page ▾
        </span>
        <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 font-medium">
          {navItems.map((item, idx) => (
            <span key={idx} className="cursor-pointer hover:text-slate-900 transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
