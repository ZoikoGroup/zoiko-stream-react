'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function WorkflowTemplateReuse() {
  const cards = [
    {
      title: 'Reuse Configuration',
      desc: 'Instantly inherit pre-event whitelists, visual overlays layouts, translation settings, and recording tiers. Reduce build cycles.',
      img: '/images/workflow-overview/CardImage (29).png'
    },
    {
      title: 'Revalidate Inputs',
      desc: 'Isolate on-site variables. Run mandatory 10-point network speed tests at the new venue without altering audience rules.',
      img: '/images/workflow-overview/CardImage (30).png'
    },
    {
      title: 'Per-Event Readiness Review',
      desc: 'Execute a fast, focused, single-day gate sweep to approve fresh timeline cues and authorize final stream start.',
      img: '/images/workflow-overview/CardImage (31).png'
    }
  ];

  const scrollToBrief = () => {
    const el = document.getElementById('workflow-cta-band');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold tracking-tight">
            Reuse proven setup while revalidating what changes
          </h2>
          <p className="text-slate-655 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
            Duplicate successful event patterns instantly. Copy pre-event whitelists, overlay graphics formats, and caption profiles, then isolate and test only fresh on-site parameters.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Image Box */}
              <div className="relative h-44 w-full bg-slate-100 dark:bg-zinc-955">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Padding */}
              <div className="p-6 flex flex-col justify-start items-start gap-2 flex-1">
                <h3 className="text-zinc-955 dark:text-white text-lg font-bold">
                  {c.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed text-left">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inherited Event Panel */}
        <div className="p-6 bg-slate-55 dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-8 w-full mt-4">
          
          {/* Prior Staged event */}
          <div className="w-full lg:w-72 flex flex-col gap-2 text-left">
            <span className="text-slate-500 text-xs font-bold font-mono tracking-wider">PRIOR STAGED EVENT</span>
            <div className="p-3 bg-white dark:bg-zinc-950 rounded-lg border border-emerald-500 flex justify-start items-center gap-2.5">
              <div className="size-2 bg-emerald-555 rounded-full" />
              <span className="text-zinc-955 dark:text-white text-xs font-bold">9 / 9 Gates Approved</span>
            </div>
          </div>

          {/* Right Arrow indicator */}
          <div className="size-8 bg-blue-500/10 rounded-full flex justify-center items-center shrink-0 self-center">
            <ArrowRight className="size-4 text-blue-500 stroke-[1.8]" />
          </div>

          {/* New inherited event */}
          <div className="flex-1 flex flex-col gap-2 text-left w-full">
            <span className="text-slate-500 text-xs font-bold font-mono tracking-wider">NEW INHERITED EVENT</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              
              <div className="p-3 bg-white dark:bg-zinc-950 rounded-lg border border-slate-205 dark:border-zinc-800 flex justify-between items-center text-xs">
                <span className="text-zinc-955 dark:text-white font-bold">7 Gates Copied</span>
                <span className="text-emerald-500 font-semibold">✓ Locked</span>
              </div>

              <div className="p-3 bg-white dark:bg-zinc-950 rounded-lg border border-slate-205 dark:border-zinc-800 flex justify-between items-center text-xs">
                <span className="text-zinc-955 dark:text-white font-bold">Venue Ingest</span>
                <span className="text-amber-500 font-semibold">● Retest Required</span>
              </div>

              <div className="p-3 bg-white dark:bg-zinc-950 rounded-lg border border-slate-205 dark:border-zinc-800 flex justify-between items-center text-xs">
                <span className="text-zinc-955 dark:text-white font-bold">Stream Authorize</span>
                <span className="text-slate-505 font-medium">Awaiting Sign-off</span>
              </div>

            </div>
          </div>

        </div>

        {/* Start template button */}
        <div className="flex justify-start pt-2">
          <button 
            onClick={scrollToBrief}
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold rounded-[10px] cursor-pointer border-none shadow-md"
          >
            Start new brief from template
          </button>
        </div>

      </div>
    </section>
  );
}
