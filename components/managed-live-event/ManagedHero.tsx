'use client';

import React, { useState } from 'react';

export default function ManagedHero() {
  const [activeTab, setActiveTab] = useState('Responsibilities');

  const tabs = [
    'Overview',
    'Scope',
    'Responsibilities',
    'Sources',
    'Production',
    'Audience',
    'Accessibility',
    'Readiness',
    'Run of show',
    'Live operations',
    'Post-event'
  ];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const scrollToBrief = () => {
    const element = document.getElementById('managed-brief-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[700px] flex items-center text-white overflow-hidden py-16 sm:py-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/managed-live-event/hero-bg (6).png')" }}
      />
      <div className="absolute inset-0 bg-zinc-955/70 pointer-events-none" />

      {/* Glow shapes */}
      <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-1/4 -bottom-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row justify-start items-center gap-12 text-left">
        
        {/* Left Info Column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          
          <div className="px-3.5 py-1.5 bg-teal-400/10 rounded-full outline outline-1 outline-teal-400/30 inline-flex justify-start items-center gap-2 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping" />
            <div className="text-teal-400 text-xs font-bold tracking-wider uppercase font-sans">
              MANAGED LIVE EVENT STREAMING
            </div>
          </div>

          <h1 className="text-slate-100 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-sans tracking-tight">
            Run the stream with every responsibility clear.
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Plan a managed live event around an agreed operating scope. ZoikoStream coordinates the streaming responsibilities assigned to the engagement while customer, venue, partner, accessibility, audience, and content decisions remain visibly owned.
          </p>

          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto font-sans">
            <a 
              href="/plan-a-live-event">
            <button 
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-[0px_4px_16px_rgba(51,217,199,0.25)] border-none text-center w-full sm:w-auto"
            >
              Plan a Live Event
            </button></a>
            <a 
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-lg border border-gray-500 bg-zinc-900/40 text-slate-100 text-base font-bold hover:bg-zinc-900/80 transition-colors cursor-pointer text-center w-full sm:w-auto"
            >
              Talk to an expert
            </a>
          </div>
        </div>

        {/* Right Dashboard Column */}
        <div className="w-full lg:w-[520px] p-5 sm:p-6 bg-gray-900/80 rounded-3xl border border-slate-800 backdrop-blur-md flex gap-5 shadow-2xl overflow-hidden self-stretch lg:self-center items-stretch">
          
          {/* Operations Menu Side */}
          <div className="w-36 flex flex-col justify-start items-start gap-4">
            <div className="text-teal-400 text-[10px] font-bold font-sans tracking-widest uppercase">
              OPERATIONS
            </div>
            
            <div className="flex flex-col gap-1 w-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`text-left text-[11px] py-1.5 px-2 rounded transition-colors border-none cursor-pointer w-full font-sans ${
                      isActive
                        ? 'bg-slate-800 text-slate-100 font-bold'
                        : 'bg-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-slate-800 self-stretch" />

          {/* Dashboard Details Side */}
          <div className="flex-1 flex flex-col justify-between gap-4 font-sans">
            
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center gap-2">
                <span className="text-slate-105 text-sm font-bold leading-tight">
                  Managed Event Brief
                </span>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[9px] font-bold rounded-sm border border-emerald-500/20">
                  VERIFIED
                </span>
              </div>

              {/* Operating Scope Card */}
              <div className="p-3 bg-gray-950 rounded-lg border border-slate-800 flex flex-col gap-1.5 text-left">
                <span className="text-slate-500 text-[9px] font-bold tracking-wider uppercase">
                  AGREED OPERATING SCOPE
                </span>
                <p className="text-slate-200 text-xs leading-relaxed">
                  ZoikoStream: Transcoding, redundant delivery, remote monitoring, backup stream target ingestion.
                </p>
              </div>

              {/* Readiness Metrics */}
              <div className="flex flex-col gap-2 text-left">
                <span className="text-slate-500 text-[9px] font-bold tracking-wider uppercase">
                  PREFLIGHT READINESS METRICS
                </span>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">CCLI Music Licensing</span>
                    <span className="text-emerald-450 font-bold text-[10px]">VERIFIED</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Sanctuary RTMP Source</span>
                    <span className="text-emerald-450 font-bold text-[10px]">VERIFIED</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Active Support Crew Assigned</span>
                    <span className="text-amber-400 font-bold text-[10px]">PENDING</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="flex flex-col gap-1.5 text-left pt-2 border-t border-slate-800/50">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-400">Verification Progress</span>
                <span className="text-teal-400 font-bold">85%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#33D9C7] rounded-full" style={{ width: '85%' }} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
