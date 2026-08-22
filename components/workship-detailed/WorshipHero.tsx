'use client';

import React from 'react';

export default function WorshipHero() {
  const scrollToForm = () => {
    const element = document.getElementById('worship-intake-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('worship-contact-panel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[743px] flex items-center bg-zinc-950 text-white overflow-hidden py-16 sm:py-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/workship-detailed/image (8).png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none" />

      {/* Glow overlay */}
      <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-6 sm:gap-8">
          
          <div className="px-3.5 py-1.5 rounded-full outline outline-1 outline-blue-500 inline-flex justify-start items-center gap-2 bg-blue-950/20 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
            <div className="text-blue-400 text-xs font-bold tracking-wider uppercase">
              LIVE EVENTS / WORSHIP
            </div>
          </div>

          <h1 className="text-slate-100 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-sans tracking-tight">
            Bring every service to people who cannot be in the room
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Plan a live or recurring worship stream with clear choices for audience access, production, remote contributors, captions and languages, recording and replay, and event support.
          </p>

          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={scrollToForm}
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-zinc-900 text-base font-bold hover:opacity-90 transition-opacity cursor-pointer border-none w-full sm:w-auto text-center"
            >
              Start your event brief
            </button>
            <a href="/talk-to-an-expert">
            <button 
              
              className="px-7 py-3.5 rounded-lg border border-slate-600 bg-zinc-900/40 text-slate-100 text-base font-bold hover:bg-zinc-900 transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Talk to an expert
            </button></a>
          </div>

        </div>

        {/* Right Side Verification Checklist Box */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[460px] p-6 sm:p-8 bg-gray-900/80 rounded-3xl border border-slate-800 backdrop-blur-md shadow-2xl flex flex-col gap-6">
            
            <h3 className="text-white text-xl font-bold font-sans">
              Live Checklist Setup
            </h3>

            <div className="flex flex-col gap-4">
              
              {/* Row 1 */}
              <div className="pb-3 border-b border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-105 text-sm font-medium">Service details</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-sm">
                  Verified
                </span>
              </div>
              
              {/* Row 2 */}
              <div className="pb-3 border-b border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-105 text-sm font-medium">Source/production</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-sm">
                  Verified
                </span>
              </div>
              
              {/* Row 3 */}
              <div className="pb-3 border-b border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-105 text-sm font-medium">Audience access</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-sm">
                  Verified
                </span>
              </div>
              
              {/* Row 4 */}
              <div className="pb-3 border-b border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-105 text-sm font-medium">Accessibility</span>
                <span className="px-3 py-1 bg-slate-500/10 text-slate-500 text-xs font-semibold rounded-sm">
                  Pending
                </span>
              </div>
              
              {/* Row 5 */}
              <div className="pb-1 flex justify-between items-center">
                <span className="text-slate-105 text-sm font-medium">Recording/replay</span>
                <span className="px-3 py-1 bg-slate-500/10 text-slate-500 text-xs font-semibold rounded-sm">
                  Draft
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
