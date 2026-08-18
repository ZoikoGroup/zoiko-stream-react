'use client';

import React from 'react';

export default function ApiHero() {
  const scrollToBrief = () => {
    const el = document.getElementById('api-cta-band');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-slate-955 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/video-api/bg (49).png')" }}
      />
      {/* slate-950/70 mask */}
      <div className="absolute inset-0 bg-slate-955/70 pointer-events-none z-0" />
      <div className="absolute right-[-100px] top-[-100px] w-[600px] h-[500px] bg-gradient-to-b from-teal-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-left">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6 max-w-xl">
          <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-405 inline-flex items-center gap-2 bg-teal-500/10">
            <div className="size-1.5 bg-teal-400 rounded-full animate-ping" />
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
              PLATFORM / BUILD / VIDEO APIS
            </span>
          </div>

          <h1 className="text-slate-101 text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight">
            Video APIs for building programmable video workflows
          </h1>

          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
            ZoikoStream Video APIs help teams discover the verified programmable controls available for approved live, real-time, on-demand, playback/access, analytics, and automation workflows, then continue to authoritative implementation guidance.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToBrief}
              className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold rounded-[10px] cursor-pointer border-none shadow-md"
            >
              Start Building
            </button>
            <a 
              href="#api-doc-handoff"
              className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-teal-450 transition-colors text-slate-100 text-base font-medium"
            >
              Read Documentation
            </a>
          </div>
          
          <p className="text-slate-500 text-xs font-normal leading-relaxed">
            Technical examples are illustrative until verified against the maintained API reference and test suite.
          </p>
        </div>

        {/* Right Column: Programmable Pipeline Telemetry */}
        <div className="w-full lg:w-[500px] p-7 bg-zinc-900/85 rounded-2xl border border-gray-800 backdrop-blur-sm flex flex-col gap-5 shadow-2xl">
          <h3 className="text-teal-400 text-sm font-bold tracking-wide">
            PROGRAMMABLE PIPELINE REFERENCE
          </h3>
          
          <div className="flex flex-col gap-3 w-full text-xs">
            <div className="p-3 bg-slate-900 rounded-lg border border-gray-800 flex justify-between items-center text-left">
              <span className="text-slate-100 font-bold">Application Trigger</span>
              <span className="text-teal-400 font-mono">API POST /v1/streams</span>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-gray-800 flex justify-between items-center text-left">
              <span className="text-slate-100 font-bold">Credential / Access</span>
              <span className="text-teal-400 font-mono">HMAC Token Verified</span>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-gray-800 flex justify-between items-center text-left">
              <span className="text-slate-100 font-bold">Request / Control Routing</span>
              <span className="text-teal-400 font-mono">Edge Gateway L7</span>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-gray-800 flex justify-between items-center text-left">
              <span className="text-slate-100 font-bold">Media Workflow Orchestrator</span>
              <span className="text-teal-400 font-mono">Transcode Active</span>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-gray-800 flex justify-between items-center text-left">
              <span className="text-slate-100 font-bold">Authorized Output + Event</span>
              <span className="text-teal-400 font-mono">Secure egress &amp; Webhook</span>
            </div>
          </div>
          
          <div className="h-px bg-gray-800 w-full" />
          
          <div className="flex justify-between items-center w-full">
            <span className="text-slate-400 text-xs font-normal">Control Plane Status</span>
            <span className="px-2 py-1 bg-teal-500/10 text-teal-400 text-xs font-bold rounded-sm tracking-wider">
              OPERATIONAL
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
