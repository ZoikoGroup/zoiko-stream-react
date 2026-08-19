'use client';

import React from 'react';
import Image from 'next/image';

export default function WeddingHero() {
  const scrollToBrief = () => {
    const el = document.getElementById('wedding-cta-band');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-slate-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/wedding-celebration/bg (32).png')" }}
      />
      <div className="absolute right-[-100px] top-[-100px] w-[600px] h-[500px] bg-gradient-to-b from-blue-500/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-left">
        
        {/* Left Column: Hero Text */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6 max-w-xl">
          <div className="px-3 py-1.5 bg-teal-500/10 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-500/30 inline-flex items-center gap-2">
            <div className="size-1.5 bg-teal-500 rounded-full animate-ping" />
            <span className="text-teal-400 text-xs font-bold font-spaceGrotesk uppercase tracking-wider">
              LIVE EVENTS / WEDDINGS &amp; CELEBRATIONS
            </span>
          </div>

          <h1 className="text-slate-100 text-5xl sm:text-6xl font-bold font-spaceGrotesk leading-[1.1] tracking-tight">
            Share the moment your way.
          </h1>

          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Plan remote participation for a wedding or celebration with clear choices for audience access, production, captions, recording/replay, and event support.
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
              Personal events deserve clear control, respectful data handling, and truthful expectations.
            </p>
          </div>
        </div>

        {/* Right Column: Video player mockup panel */}
        <div className="w-full lg:w-[500px] p-5 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col gap-4 shadow-2xl">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-slate-100 text-[10px] font-bold font-mono uppercase tracking-wider">
                REMOTE BROADCAST STREAM ALPHA
              </span>
            </div>
            <span className="text-slate-500 text-[10px] font-mono tracking-wider">1080P PRO / SECURE</span>
          </div>

          {/* Video Container Screen */}
          <div className="relative h-60 w-full rounded-lg overflow-hidden bg-black shadow-inner">
            <Image 
              src="/images/wedding-celebration/VideoFrame.png" 
              alt="Remote Wedding Stream View"
              fill
              className="object-cover"
            />
          </div>

          {/* Info Details */}
          <div className="flex justify-between items-center w-full text-xs font-spaceGrotesk pt-1">
            <span className="text-slate-100 font-bold">142 Virtual Guests Joined</span>
            <span className="text-teal-500 font-semibold">Stream Quality: Excellent</span>
          </div>
        </div>

      </div>
    </section>
  );
}
