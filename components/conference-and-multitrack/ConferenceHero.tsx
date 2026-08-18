'use client';

import React from 'react';
import Image from 'next/image';

export default function ConferenceHero() {
  const metrics = [
    { value: '500+', label: 'Live events per year', color: 'text-teal-400' },
    { value: '99.97%', label: 'Uptime SLA', color: 'text-blue-500' },
    { value: '48', label: 'Concurrent tracks', color: 'text-teal-400' },
    { value: 'WCAG 2.2', label: 'Accessibility certified', color: 'text-blue-500' },
  ];

  const tracks = [
    { label: 'TRACK A · KEYNOTE', title: 'Opening Ceremony - Main Stage', status: 'bg-emerald-500' },
    { label: 'TRACK B · TECHNICAL', title: 'Scale with SRT Listener Pipelines', status: 'bg-emerald-500' },
    { label: 'TRACK C · PRODUCT', title: 'Designing High-Integrity Event Briefs', status: 'bg-orange-300' },
    { label: 'TRACK D · WORKSHOP', title: 'Dynamic Failover Switch Drill', status: 'bg-emerald-500' },
    { label: 'TRACK E · COMPLIANCE', title: 'Unpublishing & Deletion Governance', status: 'bg-blue-500' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-black/75 text-white overflow-hidden border-b border-zinc-900">
      {/* Decorative blurred backgrounds */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none z-0"
        style={{ backgroundImage: "url('/images/conferences-and-multitrack/bg (17).png')" }}
      />
      <div className="absolute -left-[200px] top-[100px] w-[700px] h-[500px] bg-gradient-to-b from-teal-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -right-[200px] top-[200px] w-[600px] h-[500px] bg-gradient-to-b from-blue-500/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none z-0" />

     

      <div className="max-w-7xl mx-auto px-4 bg-black/55 sm:px-6 lg:px-8 pt-16 pb-20 lg:py-24 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 text-left">
        
        {/* Left Column - Main Intro & Metrics */}
        <div className="flex-1 flex flex-col justify-start items-start gap-7 max-w-3xl">
          <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-blue-500 bg-blue-500/10 inline-flex justify-start items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full animate-pulse" />
            <div className="text-blue-500 text-xs font-bold font-spaceGrotesk uppercase tracking-wide">CONFERENCE SOLUTIONS</div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-spaceGrotesk leading-[1.1] tracking-tight text-slate-100">
            Govern every session without losing the program view.
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Deliver beautiful multi-track virtual and hybrid conferences. Plan, deploy, and verify dozens of simultaneous streams inside a single integrated scheduling architecture.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={() => scrollToSection('conference-brief-section')}
              className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold font-spaceGrotesk rounded-[10px] shadow-[0px_4px_16px_0px_rgba(51,217,199,0.20)] cursor-pointer border-none text-center w-full sm:w-auto"
            >
              Plan a Live Event
            </button>
            <button 
              onClick={() => scrollToSection('conference-brief-section')}
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-teal-400 bg-transparent transition-colors text-slate-100 text-base font-medium font-spaceGrotesk text-center cursor-pointer w-full sm:w-auto"
            >
              Talk to an expert
            </button>
          </div>
          
          {/* Divider */}
          <div className="w-full pt-6 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col justify-start items-start gap-1">
                <div className={`${m.color} text-2xl font-bold font-spaceGrotesk`}>{m.value}</div>
                <div className="text-slate-500 text-xs font-normal font-spaceGrotesk leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Conference Control Console Mock */}
        <div className="w-full lg:w-[480px] shrink-0 p-5 bg-zinc-900/90 backdrop-blur-md rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-4 overflow-hidden shadow-2xl">
          <div className="self-stretch pb-3 border-b border-gray-800/60 inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <div className="size-2 bg-emerald-500 rounded-full animate-pulse" />
              <div className="text-slate-100 text-[10px] font-bold font-mono tracking-wider">CONFERENCE CONTROL</div>
            </div>
            <div className="text-slate-500 text-[10px] font-normal font-mono">6 TRACKS LIVE</div>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-3 w-full">
            {tracks.map((t, idx) => (
              <div 
                key={idx}
                className="self-stretch p-3 bg-zinc-950/60 hover:bg-zinc-950/90 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800/80 inline-flex justify-between items-center transition-all"
              >
                <div className="flex flex-col justify-start items-start gap-[3px] text-left">
                  <div className="text-slate-500 text-[8px] sm:text-[9px] font-normal font-mono">{t.label}</div>
                  <div className="text-slate-100 text-xs font-medium font-spaceGrotesk line-clamp-1">{t.title}</div>
                </div>
                <div className={`size-2 shrink-0 rounded-sm ${t.status}`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
