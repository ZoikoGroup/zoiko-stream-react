'use client';

import { Calendar, Folder, MessageSquare, Speaker, Target, User, Volume, Volume1 } from 'lucide-react';
import React from 'react';

export default function GraduationHero() {
  const scrollToForm = () => {
    const element = document.getElementById('graduation-brief-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[743px] flex items-center  text-white overflow-hidden py-16 sm:py-24 animate-fade-in">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center  select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/graduations-detailed/Section - SECTION 1 — HERO (2).png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />

      {/* Radial Glow overlays */}
      <div className="pointer-events-none absolute -left-1/3 -top-1/2 h-full w-full rounded-full bg-violet-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-6 sm:gap-8 text-left">
          
          <div className="px-3.5 py-1.5 bg-white/5 rounded-full outline outline-1 outline-white/10 inline-flex justify-start items-center gap-2 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
            <div className="text-cyan-400 text-xs font-bold tracking-wider uppercase">
              LIVE EVENTS / GRADUATIONS
            </div>
          </div>

          <h1 className="text-slate-100 text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight font-sans tracking-tight">
            Bring every guest closer to the ceremony.
          </h1>

          <p className="text-[#9CA3B4] text-base sm:text-lg leading-relaxed max-w-xl">
            Plan graduation streaming as an access and event-planning problem: ceremony schedule, program integrity, audience access, accessibility, recording &amp; replay, readiness, and support — with clear ownership at every step.
          </p>

          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
            <button 
              onClick={scrollToForm}
              className="px-7 py-3.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-600 rounded-lg text-white text-base font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-[0px_4px_16px_rgba(99,102,241,0.25)] border-none w-full sm:w-auto text-center"
            >
              Start your graduation brief
            </button>
            <a 
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-lg border border-white/25 bg-zinc-900/40 text-slate-105 text-base font-bold hover:bg-zinc-900/80 transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Talk to an event expert
            </a>
          </div>

          <div className="text-xs text-gray-500 max-w-md mt-2 leading-relaxed">
            <a href="/live-events-overview" className="text-[#22D3EE] cursor-pointer hover:underline">See how Live Events works →</a> &middot; Availability, accessibility, and rights depend on current service scope and are surfaced with verified states.
          </div>

        </div>

        {/* Right Side Illustrative Planning View Box */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[420px] p-6 sm:p-8 bg-slate-900/90 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <div className="px-2.5 py-1 self-start bg-white/5 rounded-md outline outline-1 outline-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                Illustrative planning view — synthetic data
              </div>
              <h3 className="text-white text-lg font-bold font-sans mt-2 text-left">
                Ceremony overview
              </h3>
              <p className="text-gray-400 text-xs text-left">
                Saturday, May 17, 2025 &middot; 10:00 AM PDT &middot; Central Auditorium
              </p>
            </div>

            <div className="flex flex-col gap-3">
              
              {/* Row 1 */}
              <div className="px-3.5 py-2.5 bg-gray-950/50 rounded-xl outline outline-1 outline-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Calendar className="w-3.5 h-3.5   flex items-center justify-center text-cyan-400 "/>
                  <span className="text-white text-xs font-medium">Program version</span>
                </div>
                <span className="px-2.5 py-1 bg-cyan-400/10 text-cyan-300 text-[10px] font-bold rounded-full outline outline-1 outline-cyan-400/20">
                  Approved
                </span>
              </div>
              
              {/* Row 2 */}
              <div className="px-3.5 py-2.5 bg-gray-950/50 rounded-xl outline outline-1 outline-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                   <User className="w-3.5 h-3.5   flex items-center justify-center text-cyan-400 "/>

                  <span className="text-white text-xs font-medium">Audience access</span>
                </div>
                <span className="px-2.5 py-1 bg-cyan-400/10 text-cyan-300 text-[10px] font-bold rounded-full outline outline-1 outline-cyan-400/20">
                  Configured
                </span>
              </div>
              
              {/* Row 3 */}
              <div className="px-3.5 py-2.5 bg-gray-950/50 rounded-xl outline outline-1 outline-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                   <Volume1 className="w-3.5 h-3.5   flex items-center justify-center text-cyan-400 "/>

                  <span className="text-white text-xs font-medium">Accessibility</span>
                </div>
                <span className="px-2.5 py-1 bg-yellow-500/10 text-amber-400 text-[10px] font-bold rounded-full outline outline-1 outline-yellow-500/20">
                  Needs review
                </span>
              </div>
              
              {/* Row 4 */}
              <div className="px-3.5 py-2.5 bg-gray-950/50 rounded-xl outline outline-1 outline-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                     <Target className="w-3.5 h-3.5   flex items-center justify-center text-cyan-400 "/>

                  <span className="text-white text-xs font-medium">Recording &amp; replay</span>
                </div>
                <span className="px-2.5 py-1 bg-violet-600/10 text-violet-300 text-[10px] font-bold rounded-full outline outline-1 outline-violet-600/20">
                  Decision needed
                </span>
              </div>
              
              {/* Row 5 */}
              <div className="px-3.5 py-2.5 bg-gray-950/50 rounded-xl outline outline-1 outline-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
               <MessageSquare className="w-3.5 h-3.5   flex items-center justify-center text-cyan-400 "/>

                  <span className="text-white text-xs font-medium">Support</span>
                </div>
                <span className="px-2.5 py-1 bg-cyan-400/10 text-cyan-300 text-[10px] font-bold rounded-full outline outline-1 outline-cyan-400/20">
                  Assigned
                </span>
              </div>

            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
              <span className="text-gray-400">Overall readiness</span>
              <span className="text-white font-bold">Ready with exceptions</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
