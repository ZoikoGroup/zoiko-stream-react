import React from 'react';
import { Check } from 'lucide-react';

const checklistItems = [
  'Access policy chosen deliberately, not left at default',
  'Token expiry and revocation behavior understood',
  'Denial and expiry states handled in the player UI',
];

export function TrustBoundariesSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              TRUST BOUNDARIES
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Secure playback starts before the player.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[850px]">
            Authentication, authorization, playback policy, and player behavior are different concerns — treat them separately.
          </p>
        </div>

        {/* 3 Security Tier Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-200 flex flex-col gap-2 shadow-xs">
            <h3 className="text-zinc-900 text-sm font-bold">Public</h3>
            <p className="text-gray-500 text-xs leading-5">Anyone with the playback ID can view.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 flex flex-col gap-2 shadow-xs">
            <h3 className="text-zinc-900 text-sm font-bold">Protected / signed</h3>
            <p className="text-gray-500 text-xs leading-5">A short-lived signed token gates access.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 flex flex-col gap-2 shadow-xs">
            <h3 className="text-zinc-900 text-sm font-bold">Player integration</h3>
            <p className="text-gray-500 text-xs leading-5">Embed or SDK handoff, never exposing credentials.</p>
          </div>
        </div>

        {/* Security Checklist */}
        <div className="w-full max-w-[760px] flex flex-col gap-3 pt-2">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 pb-3 border-b border-gray-200">
              <div className="w-5 h-5 rounded bg-white border border-gray-400 flex items-center justify-center shrink-0">
              </div>
              <span className="text-zinc-900 text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button className="px-6 py-3 bg-zinc-100 rounded-xl border border-gray-800 text-zinc-900 font-semibold text-base hover:bg-zinc-200 transition-colors">
            Read Secure playback
          </button>
          <button className="px-6 py-3 bg-zinc-100 rounded-xl border border-gray-800 text-zinc-900 font-semibold text-base hover:bg-zinc-200 transition-colors">
            Player integration
          </button>
        </div>
      </div>
    </section>
  );
}
