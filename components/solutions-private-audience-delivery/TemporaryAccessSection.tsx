import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const temporaryCards = [
  {
    title: 'Time-Window Gating',
    desc: 'Access opens and closes automatically based on precise scheduling constraints, avoiding manual link revocation or stale permissions.',
  },
  {
    title: 'Guest & Passcode Auth',
    desc: 'Grant single-session access codes to external contractors, auditors, or board members without requiring full SSO onboarding.',
  },
  {
    title: 'Dynamic Expiration',
    desc: 'Active streams evaluate session TTL continuously. When access expires, playback halts immediately with non-cached enforcement.',
  },
  {
    title: 'Single-Device Token Limits',
    desc: 'Bind temporary access tokens to specific client devices or IP blocks, preventing unauthorized link sharing during sensitive broadcasts.',
  },
  {
    title: 'Self-Serve Access Requests',
    desc: 'Empower unregistered viewers to request temporary approval directly through an integrated, audited access workflow.',
  },
  {
    title: 'Revocation Readiness',
    desc: 'Administrators can terminate temporary active sessions globally or individually with real-time token invalidation.',
  },
];

export function TemporaryAccessSection() {
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Prevent temporary access from becoming permanent
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Guest and partner access needs lifecycle governance.
          </p>
        </div>

        {/* Lifecycle Policy Table */}
        <div className="w-full rounded-xl border border-gray-200 overflow-hidden shadow-sm backdrop-blur-sm bg-white/90">
          <div className="p-4 bg-slate-50 border-b-2 border-gray-200 flex justify-start items-center gap-3">
            <span className="w-64 text-slate-900 text-sm font-bold  uppercase">Dimension</span>
            <span className="flex-1 text-slate-900 text-sm font-bold  uppercase">Lifecycle Policy Requirement</span>
          </div>

          <div className="divide-y divide-gray-200">
            {temporaryCards.map((r, idx) => (
              <div
                key={idx}
                className={`p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                  idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'
                } hover:bg-slate-100/60 transition-colors`}
              >
                <span className="w-64 text-teal-400 text-sm font-bold  flex-shrink-0">{r.title}</span>
                <span className="flex-1 text-slate-600 text-sm font-normal  leading-5">{r.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
