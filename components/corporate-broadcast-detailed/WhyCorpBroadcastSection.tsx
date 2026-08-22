'use client';

import React from 'react';

export default function WhyCorpBroadcastSection() {
  const steps = [
    {
      num: '1',
      title: 'Establish the event',
      desc: 'Define authoritative metadata, ownership, and core technical requirements.'
    },
    {
      num: '2',
      title: 'Define access',
      desc: 'Configure SSO, restricted directories, guest passes, or public pathways.'
    },
    {
      num: '3',
      title: 'Assign production',
      desc: 'Map local boardroom AV, backup WAN setups, and transcoders clearly.'
    },
    {
      num: '4',
      title: 'Plan inclusion',
      desc: 'Provision real-time WCAG captions, screen readers, and translation audio.'
    },
    {
      num: '5',
      title: 'Test and revalidate',
      desc: 'Run background latency checks and preflight rehearsals.'
    },
    {
      num: '6',
      title: 'Go live & preserve decisions',
      desc: 'Broadcast with sub-second latency and archive to compliant folders.'
    }
  ];

  return (
    <section className="relative w-full py-24  text-white overflow-hidden border-t border-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/corporate-broadcast-detailed/hero-bg (5).png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-start items-start gap-14">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-slate-100 text-4xl font-bold   leading-[60.80px]">
            Why corporate-broadcast delivery needs a governed plan
          </h2>
          <p className="max-w-[800px] text-slate-400 text-lg font-normal   leading-7">
            A corporate webcast is not simply a camera pointed at an executive. It demands structured management across identity, accessibility, and operational alignment. Our 6-step planning flow ensures zero configuration gaps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 bg-gray-900/80 rounded-xl border border-slate-800 flex flex-col justify-start items-start gap-4 hover:border-slate-700/60 transition-colors backdrop-blur-[10px]"
            >
              <div className="inline-flex justify-start items-center gap-3">
                <div className="w-8 h-8 bg-teal-400 rounded-full flex justify-center items-center select-none shrink-0">
                  <span className="text-zinc-955 text-sm font-bold  ">
                    {step.num}
                  </span>
                </div>
                <div className="text-slate-100 text-base font-bold  ">
                  {step.title}
                </div>
              </div>
              <div className="text-slate-400 text-xs font-normal   leading-relaxed">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
