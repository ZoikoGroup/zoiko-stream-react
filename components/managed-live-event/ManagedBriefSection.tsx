'use client';

import React from 'react';

export default function ManagedBriefSection() {
  

  return (
    <section 
      id="managed-brief-form"
      className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-250 border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-start items-center gap-12 sm:gap-16 text-left">
        
        {/* Left dashboard brief mockup card */}
        <form 
          className="w-full lg:flex-1 p-8 sm:p-10 bg-gray-900 text-white rounded-3xl border border-slate-800 flex flex-col gap-6 sm:gap-7 shadow-2xl"
        >
          <span className="text-slate-100 text-lg font-bold font-sans">
            Managed Stream Brief Briefing
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
            <div className="flex flex-col gap-2">
              <span className="text-slate-350 text-xs font-bold">Event Name</span>
              <div className="p-3 bg-gray-950 rounded-lg border border-slate-800 text-slate-400 text-xs font-sans">
                Sunday Morning Worship / AGM
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-slate-350 text-xs font-bold">Approximate Date / Time</span>
              <div className="p-3 bg-gray-950 rounded-lg border border-slate-800 text-slate-400 text-xs font-sans">
                March 20, 2026 - 11:00 AM EST
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-350 text-xs font-bold">Sanctuary / Venue</span>
              <div className="p-3 bg-gray-950 rounded-lg border border-slate-800 text-slate-400 text-xs font-sans">
                Main Hall / Remote Presenters
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-350 text-xs font-bold">Audience Access Mode</span>
              <div className="p-3 bg-gray-950 rounded-lg border border-slate-800 text-slate-400 text-xs font-sans">
                Federated SSO / Invited Guests Only
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer border-none text-center font-sans shadow-md"
          >
            Start event brief
          </button>
        </form>

        {/* Right text description */}
        <div className="w-full lg:w-[500px] flex flex-col justify-start items-start gap-6">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold font-sans leading-tight tracking-tight">
            Secure planning, simplified execution.
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-sans">
            Our briefing workflow asks only what is required to formulate your managed operating structure. No payment credentials or technical matrices are needed to reserve your support window.
          </p>
        </div>

      </div>
    </section>
  );
}
