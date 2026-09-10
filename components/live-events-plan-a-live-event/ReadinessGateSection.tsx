import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const GATES = [
  { num: '01', title: 'Brief Locked', desc: 'Basic intent & scale target approved' },
  { num: '02', title: 'Scope Confirmed', desc: 'AV and Engineering roles assigned' },
  { num: '03', title: 'Sources Registered', desc: 'Local and remote inputs matched' },
  { num: '04', title: 'Production Tested', desc: 'Graphics & rundown elements configured' },
  { num: '05', title: 'Access Configured', desc: 'SSO and whitelist rules compiled' },
  { num: '06', title: 'Accessibility Verified', desc: 'Subtitles and audio routing checked' },
  { num: '07', title: 'Resilience Passed', desc: 'Primary/backup speed tests valid' },
  { num: '08', title: 'Rehearsal Complete', desc: 'On-site presenter rundown signed off' },
];

export function ReadinessGateSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden">
      {/* Required White Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-slate-950 leading-tight">
            Go-Live Readiness Gate
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Before broadcast, every workflow stage must reach verified readiness. This dashboard tracks each gate — from brief lock to final rehearsal sign-off.
          </p>
        </div>

        {/* 8 Gate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GATES.map((gate) => (
            <div
              key={gate.num}
              className="p-5 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-between space-y-3 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-blue-600 text-lg font-bold font-['Space_Grotesk']">
                  {gate.num}
                </span>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold font-['Space_Grotesk'] rounded-full">
                  Ready
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                  {gate.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  {gate.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="p-6 bg-slate-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="space-y-1">
            <h4 className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
              Preflight compliance enforces standard pipeline security
            </h4>
            <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
              All 8 gates must pass before the go-live signal is issued to the broadcast pipeline.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
