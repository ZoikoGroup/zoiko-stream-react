import React from 'react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import Image from 'next/image';
const securitySteps = [
  { num: '01', title: '1. Admin Authority', sub: 'OIDC SSO key mapping framework' },
  { num: '02', title: '2. Application Identity', sub: 'Vaulted server secret parameters' },
  { num: '03', title: '3. User Entitlement', sub: 'Server-side JWT signature' },
  { num: '04', title: '4. Playback Gating', sub: 'Domain, IP & device rules check' },
  { num: '05', title: '5. Audit Records', sub: 'Telemetry ledger immutable logging' },
];

export default function ServerSideSecretsSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-24 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-3xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Keep secrets server-side and authorization decisions explainable.
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Inter'] leading-relaxed max-w-6xl">
            Treat administrative authority, application identity, entitlement, playback authorization, media protection, and audit evidence as separate concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 5 Steps List */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {securitySteps.map((st, idx) => (
              <div
                key={idx}
                className="p-5 bg-slate-50 rounded-lg border border-gray-200 flex items-center gap-5 shadow-xs"
              >
                <div className="size-8 bg-teal-400 rounded-2xl flex items-center justify-center text-slate-950 font-bold font-['Space_Grotesk'] text-xs shrink-0">
                  {st.num}
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {st.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal font-['Inter']">
                    {st.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Deterministic Routing Card */}
          <div className="lg:col-span-5 p-8 bg-slate-50 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-6 justify-center">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Deterministic routing
            </h3>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
              Playback verification requests yield instant, attributable allowed/denied signals. No probabilistic threat score or heuristics logic is used for session validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
