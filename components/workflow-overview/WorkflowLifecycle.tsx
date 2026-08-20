'use client';

import React from 'react';

export default function WorkflowLifecycle() {
  const steps = [
    { num: '01', title: 'Brief', desc: 'Define basic parameters.' },
    { num: '02', title: 'Operating Scope', desc: 'Apportion team roles.' },
    { num: '03', title: 'Contribution', desc: 'Register source streams.' },
    { num: '04', title: 'Production', desc: 'Build visual overlays.' },
    { num: '05', title: 'Audience Access', desc: 'Establish privacy gates.' },
    { num: '06', title: 'Accessibility', desc: 'Plan captions & language.' },
    { num: '07', title: 'Resilience', desc: 'Test network failovers.' },
    { num: '08', title: 'Go Live', desc: 'Broadcast with support.' },
    { num: '09', title: 'Replay & Archive', desc: 'Compile final video master.' }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            The Complete Event Lifecycle
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            A connected 9-step pathway designed to lock down every technical and audience parameter before launch.
          </p>
        </div>

        {/* 9 Cards Pill Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="pl-5 pr-6 py-5 bg-slate-50 rounded-full border border-slate-200 flex items-center justify-start gap-4 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
            >
              {/* Number Circle */}
              <div className="size-11 bg-blue-600 rounded-full flex justify-center items-center shrink-0">
                <span className="text-white text-base font-bold font-spaceGrotesk">
                  {s.num}
                </span>
              </div>

              {/* Text Blocks */}
              <div className="flex-1 flex flex-col justify-start items-start text-left">
                <h3 className="text-zinc-955 text-base font-bold font-spaceGrotesk leading-tight">
                  {s.title}
                </h3>
                <p className="text-slate-505 text-xs font-normal font-spaceGrotesk">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
