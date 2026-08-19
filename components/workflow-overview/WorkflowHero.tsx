'use client';

import React from 'react';

export default function WorkflowHero() {
  const scrollToBrief = () => {
    const el = document.getElementById('workflow-cta-band');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-slate-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-75"
        style={{ backgroundImage: "url('/images/workflow-overview/bg (37).png')" }}
      />
      <div className="absolute right-[-100px] top-[-100px] w-[600px] h-[500px] bg-gradient-to-b from-blue-500/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-left">
        
        {/* Left Column: Hero Text */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6 max-w-xl">
          <div className="px-3 py-1.5 bg-teal-500/10 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-500/30 inline-flex items-center gap-2">
            <div className="size-1.5 bg-teal-500 rounded-full animate-ping" />
            <span className="text-teal-400 text-xs font-bold font-spaceGrotesk uppercase tracking-wider">
              LIVE EVENTS WORKFLOW
            </span>
          </div>

          <h1 className="text-slate-100 text-5xl sm:text-6xl font-bold font-spaceGrotesk leading-[1.1] tracking-tight">
            Plan the path from event brief to broadcast.
          </h1>

          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            See the decisions, owners, readiness checks, audience and accessibility choices, support planning, and post-event handoffs that shape a live event.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToBrief}
              className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold font-spaceGrotesk rounded-[10px] cursor-pointer border-none"
            >
              Start your event brief
            </button>
            <a 
              href="mailto:support@zoikostream.com"
              className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-teal-400 transition-colors text-slate-100 text-base font-medium font-spaceGrotesk"
            >
              Talk to an event expert
            </a>
          </div>

          <div className="pt-4 border-t border-zinc-800/80 w-full">
            <p className="text-slate-500 text-xs font-normal font-spaceGrotesk leading-relaxed">
              Every high-fidelity live stream deserves clear structural milestones, failover planning, and respectful compliance rules.
            </p>
          </div>
        </div>

        {/* Right Column: Workflow Board Status */}
        <div className="w-full lg:w-[500px] p-6 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col gap-5 shadow-2xl">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-slate-100 text-xs font-bold font-mono uppercase tracking-wider">
                ZOIKOSTREAM MASTER WORKFLOW
              </span>
            </div>
            <span className="text-slate-505 text-[10px] font-mono tracking-wider">STATUS: ACTIVE PLANNING</span>
          </div>

          {/* Status Step Card */}
          <div className="w-full p-4 bg-teal-500/5 rounded-lg flex flex-col justify-start items-start gap-3 border border-teal-500/10">
            <div className="flex justify-between items-center w-full">
              <span className="text-slate-100 text-sm font-bold font-spaceGrotesk">
                01 / EVENT BRIEF INTAKE
              </span>
              <span className="text-teal-400 text-xs font-semibold font-spaceGrotesk">
                COMPLETE
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-teal-550" />
            </div>
            <p className="text-slate-400 text-xs font-normal font-spaceGrotesk leading-relaxed text-left">
              Target parameters locked. Transitioning to step 2: Operating Scope.
            </p>
          </div>

          <div className="flex justify-between items-center w-full pt-1 border-t border-zinc-800 text-xs font-spaceGrotesk">
            <span className="text-slate-100 font-bold">9 Workflow Stages Active</span>
            <span className="text-teal-500 font-semibold">Integrity Check: Valid</span>
          </div>
        </div>

      </div>
    </section>
  );
}
