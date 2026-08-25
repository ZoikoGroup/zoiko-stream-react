import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const readinessStates = [
  {
    title: 'Ready',
    desc: 'Configuration is sound, verified pipelines receiving nominal metrics.',
    color: 'bg-emerald-500',
  },
  {
    title: 'Ready with Exception',
    desc: 'A minor fallback route is disabled, operationally allowed.',
    color: 'bg-blue-500',
  },
  {
    title: 'In Progress',
    desc: 'Initial connections established, waiting for telemetry handshake.',
    color: 'bg-amber-500',
  },
  {
    title: 'Not Evaluated',
    desc: 'Section parameters filled but validation script has not run.',
    color: 'bg-slate-600',
  },
  {
    title: 'Blocked',
    desc: 'Security certificate missing or active pipeline broken.',
    color: 'bg-red-500',
  },
  {
    title: 'Stale',
    desc: 'Configuration has mismatch with active network parameters.',
    color: 'bg-red-500',
  },
  {
    title: 'Unknown',
    desc: 'No active gateway signals detected, checking endpoints.',
    color: 'bg-slate-600',
  },
];

export function GovernedReadinessSection() {
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
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[48px]">
            Make Ready a governed state, not a visual impression
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            A versioned broadcast brief captures every decision before going live.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Broadcast Brief */}
          <div className="p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-lg font-bold ">
              Broadcast Brief (Active Configuration)
            </h3>

            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold ">Broadcast Identity</span>
                <div className="p-3 bg-white rounded-md border border-gray-200 text-slate-900 text-xs font-normal ">
                  Q1 Global Leadership All-Hands
                </div>
              </div>

              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold ">Schedule Plan</span>
                <div className="p-3 bg-white rounded-md border border-gray-200 text-slate-900 text-xs font-normal ">
                  March 20, 2026 at 1:00 PM ET (45m)
                </div>
              </div>

              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold ">Operating Model</span>
                <div className="p-3 bg-white rounded-md border border-gray-200 text-slate-900 text-xs font-normal ">
                  In-house Operated (Dedicated Enterprise Gateway)
                </div>
              </div>

              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold ">Source Input Plan</span>
                <div className="p-3 bg-white rounded-md border border-gray-200 text-slate-900 text-xs font-normal ">
                  Primary SRT Gateway (New York) + Standby RTMP (Boston)
                </div>
              </div>

              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold ">Audience Intent</span>
                <div className="p-3 bg-white rounded-md border border-gray-200 text-slate-900 text-xs font-normal ">
                  Internal Corporate restricted to Staff and Board Members
                </div>
              </div>

              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold ">Access &amp; SSO Plan</span>
                <div className="p-3 bg-white rounded-md border border-gray-200 text-slate-900 text-xs font-normal ">
                  Azure AD SAML SSO Integration Active
                </div>
              </div>

              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold ">Accessibility Mode</span>
                <div className="p-3 bg-white rounded-md border border-gray-200 text-slate-900 text-xs font-normal ">
                  Auto-captioning (EN, ES, FR) + Human Override Track
                </div>
              </div>

              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold ">Escalation Matrix</span>
                <div className="p-3 bg-white rounded-md border border-gray-200 text-slate-900 text-xs font-normal ">
                  Tier 1 Media Ops -&gt; Zoiko Concierge Standby Eng
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Evaluated Readiness States */}
          <div className="p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-lg font-bold ">
              Evaluated Readiness States
            </h3>

            <div className="w-full flex flex-col gap-3">
              {readinessStates.map((st, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-lg border border-gray-200 flex items-start gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${st.color} mt-1 flex-shrink-0`} />
                  <div className="flex-1 flex flex-col gap-0.5">
                    <span className="text-slate-900 text-sm font-bold ">{st.title}</span>
                    <span className="text-slate-600 text-xs font-normal ">{st.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
