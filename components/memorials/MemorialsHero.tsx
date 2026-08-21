'use client';

import React from 'react';

export default function MemorialsHero() {
  const scrollToForm = () => {
    const element = document.getElementById('intake-brief-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#0A0D13] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-8">
          <div className="px-3 py-1.5 rounded-full border border-blue-500 inline-flex items-center gap-2 bg-blue-500/10">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            <div className="text-blue-500 text-xs font-bold uppercase tracking-wider">
              LIVE EVENTS / MEMORIALS
            </div>
          </div>
          
          <h1 className="text-slate-100 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-[1.15]">
            Share the moment with people who cannot be there in person.
          </h1>
          
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Plan a memorial stream with clear choices for audience access, accessibility, recording, and replay.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={scrollToForm}
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity rounded-[10px] text-zinc-955 text-base font-bold text-center cursor-pointer border-none"
            >
              Start your event brief
            </button>
            <a 
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-[10px] border border-gray-500 hover:bg-white/5 transition-colors text-slate-100 text-base font-bold text-center cursor-pointer"
            >
              Talk to an expert
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-5 flex justify-center items-center">
          <img 
            className="w-full max-w-[476px] aspect-[476/483] object-cover rounded-3xl shadow-[0px_4px_24px_rgba(0,0,0,0.5)] border-2 border-slate-800" 
            src="/images/memorials/image (1).png" 
            alt="Memorial live stream interface"
          />
        </div>
        
      </div>
    </section>
  );
}
