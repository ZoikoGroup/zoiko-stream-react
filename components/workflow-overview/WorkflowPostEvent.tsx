'use client';

import React from 'react';
import Image from 'next/image';

export default function WorkflowPostEvent() {
  const cards = [
    {
      title: 'Recording',
      desc: 'Initiate redundant multi-region master records. Choose clean feeds vs embedded overlays archives.',
      question: 'Choose Cloud Captures?',
      img: '/images/workflow-overview/CardImage (25).png'
    },
    {
      title: 'Replay Access',
      desc: 'Permit remote observers to skip back, pause, or catch up instantly during live transmission hours.',
      question: 'Allow DVR scrubbing?',
      img: '/images/workflow-overview/CardImage (26).png'
    },
    {
      title: 'Captions & Transcripts',
      desc: 'Index physical vows and speeches directly to search-ready post-event script assets automatically.',
      question: 'Compile index files?',
      img: '/images/workflow-overview/CardImage (27).png'
    },
    {
      title: 'Archive & Retention',
      desc: 'Define lifetime storage limits. Set default compliance closeout thresholds (90 days, 1 year, or forever).',
      question: 'Select retention tier?',
      img: '/images/workflow-overview/CardImage (28).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-black/75 text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/workflow-overview/bg (42).png')" }}
      />
      <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-4xl font-spaceGrotesk">
          <h2 className="text-slate-105 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Decide what remains afterward
          </h2>
          <p className="text-slate-400 text-base sm:text-xm font-normal leading-relaxed">
            Define absolute rules for video  retention, instant highlights availability, download permissions, and transcript accessibility before broadcast launch.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900 rounded-2xl border border-gray-800 flex flex-col overflow-hidden hover:border-zinc-700 transition-all duration-300 shadow-md min-h-[350px]"
            >
              {/* Image Box */}
              <div className="relative h-40 w-full bg-slate-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Padding */}
              <div className="p-6 flex flex-col justify-start items-start gap-3 flex-1 text-left font-spaceGrotesk">
                <h3 className="text-slate-105 text-lg font-bold leading-tight">
                  {c.title}
                </h3>
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
                  {c.question}
                </span>
                <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore button at bottom */}
        <div className="flex justify-start pt-2">
          <a href="/recording-replay-archive">
          <button className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold font-spaceGrotesk rounded-[10px] cursor-pointer border-none shadow-md">
            Explore Recording, replay &amp; archive
          </button></a>
        </div>

      </div>
    </section>
  );
}
