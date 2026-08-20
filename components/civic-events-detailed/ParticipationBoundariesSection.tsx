'use client';

import React from 'react';

export default function ParticipationBoundariesSection() {
  const cards = [
    {
      num: '1',
      title: 'Open contribution',
      desc: 'Standard public registration pathway active. Transparent system queuing rules displayed prior to entry.'
    },
    {
      num: '2',
      title: 'Moderated queue',
      desc: 'Contributor dashboard visible. Active timers detail waiting position and expected speaking schedule.'
    },
    {
      num: '3',
      title: 'Muted / removed',
      desc: 'Operator termination of feed loops. Automated transitions to official administrative placeholder graphics.'
    },
    {
      num: '4',
      title: 'Security restriction',
      desc: 'Automated generic video cover activated. Suppresses local identifier tags from active database listings.'
    },
    {
      num: '5',
      title: 'Feature unavailable',
      desc: 'Mutes interface participation elements based on local compliance policies or agenda rules.'
    },
    {
      num: '6',
      title: 'Emergency content',
      desc: 'Immediate routing authority back to primary chamber technician. Suppresses virtual input states.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-200 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Public participation boundaries without profiling
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-sans">
            Distinguish viewing from contribution. Never create a political profiling or surveillance system.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="p-8 bg-slate-100 rounded-xl border border-slate-200 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex justify-center items-center font-bold text-xs font-sans">
                {c.num}
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-zinc-900 text-xl font-bold font-sans">
                  {c.title}
                </h3>
                <p className="text-gray-550 text-sm font-sans leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
