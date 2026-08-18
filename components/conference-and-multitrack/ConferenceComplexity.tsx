'use client';

import React from 'react';
import Image from 'next/image';
import { Grid, Calendar, RefreshCw } from 'lucide-react';

export default function ConferenceComplexity() {
  const items = [
    {
      title: 'Track orchestration',
      desc: 'Group sessions into thematic tracks (e.g., Keynotes, Technical, Workshops). Viewers pivot between channels effortlessly.',
      img: '/images/conferences-and-multitrack/Rectangle (50).png',
      icon: Grid,
      iconColor: 'text-teal-400',
      bgColor: 'bg-teal-400/10',
      borderColor: 'outline-teal-400/25'
    },
    {
      title: 'Audience timelines',
      desc: 'Personalized agendas automatically update for individual attendees, adjusting for timezone offsets and schedule shifts.',
      img: '/images/conferences-and-multitrack/Rectangle (51).png',
      icon: Calendar,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'outline-blue-500/25'
    },
    {
      title: 'Session continuity',
      desc: 'Transitioning from live feed to immediate on-demand replay works as an auditable, role-gated publication gate.',
      img: '/images/conferences-and-multitrack/Rectangle (52).png',
      icon: RefreshCw,
      iconColor: 'text-teal-400',
      bgColor: 'bg-teal-400/10',
      borderColor: 'outline-teal-400/25'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-black/65 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/conferences-and-multitrack/bg (18).png')" }}
      />
      <div className="absolute -left-[100px] top-[-80px] w-[600px] h-[500px] bg-gradient-to-b from-blue-500/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Managing multi-session complexity
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Virtual conferences shouldn&apos;t feel like a collection of disjointed meeting links. Our platform orchestrates track-based schedules seamlessly.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-zinc-900 rounded-2xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.16)] outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden transition-all duration-300 hover:outline-zinc-700 hover:bg-zinc-900/80"
              >
                {/* Card Image */}
                <div className="self-stretch h-48 flex flex-col justify-start items-start overflow-hidden relative">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="self-stretch px-6 pt-6 pb-7 flex flex-col justify-start items-start gap-3">
                  <div className="flex justify-start items-center gap-2.5">
                    <div className={`size-8 ${item.bgColor} rounded-lg outline outline-1 outline-offset-[-1px] ${item.borderColor} inline-flex flex-col justify-center items-center shrink-0`}>
                      <Icon className={`size-4 ${item.iconColor}`} />
                    </div>
                    <h4 className="text-slate-100 text-lg font-bold font-spaceGrotesk">{item.title}</h4>
                  </div>
                  <p className="self-stretch text-slate-400 text-sm font-normal font-spaceGrotesk leading-5 text-left">
                    {item.desc}
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
