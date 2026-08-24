import React from 'react';
import Image from 'next/image';

const dependencies = [
  {
    name: 'Presenter Hardware Source',
    status: { text: 'READY', cls: 'bg-emerald-500/10 text-emerald-500' },
    desc: 'Primary camera RTMP ingest confirmed, dual bandwidth path qualified.',
  },
  {
    name: 'Venue WebRTC Mesh',
    status: { text: 'READY', cls: 'bg-emerald-500/10 text-emerald-500' },
    desc: '200-seat mesh network negotiated, STUN/TURN rules verified.',
  },
  {
    name: 'Local Network Latency',
    status: { text: 'PLANNED', cls: 'bg-amber-500/10 text-amber-500' },
    desc: 'Final speed test scheduled 10 minutes prior to session trigger.',
  },
  {
    name: 'ASL Track Connection',
    status: { text: 'BLOCKED', cls: 'bg-red-500/10 text-red-500' },
    desc: 'Remote ASL translator feedback stream offline. Verification pending.',
  },
];

export function SessionReadinessSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Education-Page/bg (191).png"
          alt="Session Readiness Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Session, presenter and contribution readiness
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Track every dependency before going live — from source readiness to venue, network, and rehearsal.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Brief */}
          <div className="lg:col-span-6 w-full p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Current Session Brief
            </h3>
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <div className="w-full flex justify-between items-start pb-3 border-b border-gray-800 text-sm">
                <span className="text-slate-400 font-normal font-['Space_Grotesk']">Course/Session:</span>
                <span className="text-white font-semibold font-['Inter'] text-right">Advanced Neural Networks - Seminar 4</span>
              </div>
              <div className="w-full flex justify-between items-start pb-3 border-b border-gray-800 text-sm">
                <span className="text-slate-400 font-normal font-['Space_Grotesk']">Instructor/Owner:</span>
                <span className="text-white font-semibold font-['Inter'] text-right">Dr. Aris Thorne (AV-Verified)</span>
              </div>
              <div className="w-full flex justify-between items-start pb-3 border-b border-gray-800 text-sm">
                <span className="text-slate-400 font-normal font-['Space_Grotesk']">Date &amp; Window:</span>
                <span className="text-white font-semibold font-['Inter'] text-right">March 24, 2026 · 10:00 AM — 11:30 AM EST</span>
              </div>
              <div className="w-full flex justify-between items-start text-sm">
                <span className="text-slate-400 font-normal font-['Space_Grotesk']">Audience Boundary:</span>
                <span className="text-white font-semibold font-['Inter'] text-right">Institution SSO Restricted (500 expected)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dependencies */}
          <div className="lg:col-span-6 w-full p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Dependency Checks
            </h3>
            <div className="w-full flex flex-col justify-start items-start gap-4">
              {dependencies.map((dep, idx) => (
                <div key={idx} className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                      {dep.name}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-['Space_Grotesk'] ${dep.status.cls}`}>
                      {dep.status.text}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs font-normal font-['Inter']">
                    {dep.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
