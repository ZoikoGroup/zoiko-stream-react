'use client';

import React from 'react';

export default function CivicEventShapeSection() {
  const shapes = [
    {
      title: 'Council / board meeting',
      desc: 'Regular legislative public sessions with strict rules and minutes integration.',
      img: '/images/civic-events-detailed/Rectangle (6).png'
    },
    {
      title: 'Public hearing',
      desc: 'Gather testimony and feedback on specific land use, budgeting, or charters.',
      img: '/images/civic-events-detailed/Rectangle (7).png'
    },
    {
      title: 'Town hall / community forum',
      desc: 'Unscripted conversation sessions with live interactive remote or on-site Q&A.',
      img: '/images/civic-events-detailed/Rectangle (8).png'
    },
    {
      title: 'Public briefing',
      desc: 'Official announcements, emergency statements, and department updates.',
      img: '/images/civic-events-detailed/Rectangle (9).png'
    },
    {
      title: 'Civic ceremony',
      desc: 'Holiday parades, awards, memorial proceedings, or municipal dedication events.',
      img: '/images/civic-events-detailed/Rectangle (10).png'
    },
    {
      title: 'Agency program / multi-session',
      desc: 'Multi-track conferences, training programs, and inter-departmental symposiums.',
      img: '/images/civic-events-detailed/Rectangle (11).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-10"
        style={{ backgroundImage: "url('/images/civic-events-detailed/bg (3).png')" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Choose the shape that fits your civic event
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Not every civic event is a single city-council meeting in one room. Pick the operational shape that matches your event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {shapes.map((shape, idx) => {
            return (
              <div 
                key={idx}
                className="bg-gray-900/80 rounded-2xl border border-slate-800 flex flex-col justify-start items-start gap-4 overflow-hidden hover:border-teal-500/40 transition-colors backdrop-blur-sm shadow-lg group"
              >
                <div className="w-full h-44 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    src={shape.img} 
                    alt={shape.title} 
                  />
                </div>
                <div className="px-6 pb-6 flex flex-col justify-start items-start gap-3">
                  <h3 className="text-white text-xl font-bold font-sans">
                    {shape.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-sans leading-relaxed">
                    {shape.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
