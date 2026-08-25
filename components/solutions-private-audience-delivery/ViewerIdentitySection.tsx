import React from 'react';
import Image from 'next/image';

const identityStatuses = [
  { badge: 'TEAL', badgeCls: 'bg-emerald-500/20 text-teal-400', title: 'Not Required', desc: 'Policy allows open viewing without credentials.' },
  { badge: 'AMBER', badgeCls: 'bg-amber-400/20 text-amber-400', title: 'Verification Req', desc: 'Requires validation before evaluating rules.' },
  { badge: 'AMBER', badgeCls: 'bg-amber-400/20 text-amber-400', title: 'Verifying', desc: 'Active verification check in progress.' },
  { badge: 'TEAL', badgeCls: 'bg-emerald-500/20 text-teal-400', title: 'Verified', desc: 'Identity established, evaluate entitlements.' },
  { badge: 'RED', badgeCls: 'bg-red-500/20 text-red-500', title: 'Failed', desc: 'Verification failed. Deny playback access.' },
  { badge: 'RED', badgeCls: 'bg-red-500/20 text-red-500', title: 'Unavailable', desc: 'Identity service offline. Fallback to default deny.' },
  { badge: 'RED', badgeCls: 'bg-red-500/20 text-red-500', title: 'Unknown/Stale', desc: 'Cache timeout reached. Re-verification required.' },
];

export function ViewerIdentitySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-private-audience-delivery/bg (3).png"
          alt="Viewer Identity Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Show who the viewer is without implying access
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Identity answers who is this — not may this identity watch.
          </p>
        </div>

        {/* 7 Status Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {identityStatuses.map((st, idx) => (
            <div
              key={idx}
              className="p-4 bg-zinc-900 rounded-lg border border-gray-800 flex flex-col justify-start items-start gap-3 hover:border-gray-700 transition-colors backdrop-blur-sm min-h-[144px]"
            >
              <span className={`px-2 py-1 rounded-xs text-[10px] font-bold  ${st.badgeCls}`}>
                {st.badge}
              </span>
              <h3 className="text-white text-base font-bold ">{st.title}</h3>
              <p className="text-slate-400 text-xs font-normal  leading-4">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Operational Principle Bar */}
        <div className="w-full p-5 bg-slate-900 rounded-lg border border-gray-800 flex items-start gap-3">
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
            <div className="w-3.5 h-4 border-2 border-teal-400 rounded-xs" />
          </div>
          <div className="text-sm ">
            <span className="text-white font-bold">Operational Principle:</span>
            <span className="text-slate-400 font-normal">
              {' '}Identity answers who is this. Entitlement and policy answer may this identity watch this media now. Keep these validation steps decoupled.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
