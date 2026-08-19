'use client';

import React from 'react';

export default function OrganizationEventsSection() {
  const cards = [
    {
      title: 'Annual & recurring events',
      desc: 'Preserve and automatically replicate verified configurations for board schedules and general municipal council calendars.',
      img: '/images/civic-events-detailed/Rectangle (21).png'
    },
    {
      title: 'Multiple departments & agencies',
      desc: 'Maintain consistent security profiles, accessibility templates, and role hierarchies across independent program streams.',
      img: '/images/civic-events-detailed/Rectangle (22).png'
    },
    {
      title: 'Procurement & security review',
      desc: 'Gain ready access to security evidence, system data minimization audits, and defined platform implementation ownership logs.',
      img: '/images/civic-events-detailed/Rectangle (23).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24  text-white overflow-hidden border-t border-slate-800">
      {/* Background Court Building Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/civic-events-detailed/bg (2).png')" }}
      />
      {/* Transparent Black Overlay (Cover) */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Boards, municipalities, agencies, and recurring programs
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            Professional buyers need series planning, procurement resources, and consistent evidence across events.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 flex flex-col justify-start items-start gap-4 overflow-hidden hover:shadow-lg transition-all shadow-md group"
            >
              <div className="w-full h-48 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  src={c.img} 
                  alt={c.title} 
                />
              </div>
              
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-zinc-900 text-xl font-bold font-sans">
                  {c.title}
                </h3>
                <p className="text-gray-500 text-sm font-sans leading-relaxed">
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

