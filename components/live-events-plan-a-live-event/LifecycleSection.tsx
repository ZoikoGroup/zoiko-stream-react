import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const STEPS = [
  { num: '01', title: 'Brief', desc: 'Define basic parameters' },
  { num: '02', title: 'Operating Scope', desc: 'Apportion team roles' },
  { num: '03', title: 'Contribution', desc: 'Register source streams' },
  { num: '04', title: 'Production', desc: 'Build visual overlays' },
  { num: '05', title: 'Audience Access', desc: 'Establish privacy gates' },
  { num: '06', title: 'Accessibility', desc: 'Plan captions & language' },
  { num: '07', title: 'Resilience', desc: 'Test network failovers' },
  { num: '08', title: 'Go Live', desc: 'Broadcast with support' },
  { num: '09', title: 'Replay & Archive', desc: 'Compile final video master' },
];

export function LifecycleSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden">
      {/* Required White Background Graphics */}
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
        <div className="space-y-3 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-slate-950 leading-tight">
            The Complete Event Lifecycle
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            A connected 9-step pathway designed to lock down every technical and audience parameter before a single frame goes live.
          </p>
        </div>

        {/* 9 Step Pills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="p-4 sm:p-5 bg-white/90 backdrop-blur-sm rounded-[100px] outline outline-1 outline-offset-[-1px] outline-slate-200 shadow-sm flex items-center gap-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base font-['Space_Grotesk'] shrink-0">
                {step.num}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-slate-950 text-base font-bold font-['Space_Grotesk'] truncate">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] truncate">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
