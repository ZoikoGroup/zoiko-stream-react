'use client';

import React from 'react';
import Image from 'next/image';

export default function ConferenceCapabilities() {
  const modules = [
    {
      num: 'Module 01',
      title: 'Program Structure',
      desc: 'Define agendas, session blocks, and track hierarchies before a single stream goes live.',
      img: '/images/conferences-and-multitrack/Rectangle (44).png',
      badgeColor: 'text-teal-500'
    },
    {
      num: 'Module 02',
      title: 'Session Control',
      desc: 'Operator dashboards for per-session start/stop, cue management, and incident escalation.',
      img: '/images/conferences-and-multitrack/Rectangle (45).png',
      badgeColor: 'text-teal-500'
    },
    {
      num: 'Module 03',
      title: 'Track Management',
      desc: 'Group sessions into themed tracks. Viewers pivot between channels with zero configuration lag.',
      img: '/images/conferences-and-multitrack/Rectangle (46).png',
      badgeColor: 'text-teal-500'
    },
    {
      num: 'Module 04',
      title: 'Live Operations',
      desc: 'White-glove operator tooling for switcher control, signal failover, and real-time incident alerts.',
      img: '/images/conferences-and-multitrack/Rectangle (47).png',
      badgeColor: 'text-blue-500'
    },
    {
      num: 'Module 05',
      title: 'Audience Navigation',
      desc: 'Personalized agendas with timezone-aware scheduling and real-time session-switch notifications.',
      img: '/images/conferences-and-multitrack/Rectangle (48).png',
      badgeColor: 'text-blue-500'
    },
    {
      num: 'Module 06',
      title: 'Post-Event Continuity',
      desc: 'Replay access, archive retention, and lifecycle policy enforced per session - not per event.',
      img: '/images/conferences-and-multitrack/Rectangle (49).png',
      badgeColor: 'text-blue-500'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-50 dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-950 dark:text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Multi-Session Capabilities
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Six integrated modules power every conference deployment - from agenda structure to post-event continuity.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-zinc-900/60 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-zinc-800/80 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image box */}
              <div className="relative h-48 w-full bg-slate-100 dark:bg-zinc-950/40">
                <Image 
                  src={m.img} 
                  alt={m.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content box */}
              <div className="p-5 flex-1 flex flex-col justify-start items-start gap-2.5">
                <div className={`${m.badgeColor} text-[10px] font-bold font-mono uppercase tracking-wider`}>
                  {m.num}
                </div>
                <h3 className="text-zinc-950 dark:text-white text-xl font-bold font-spaceGrotesk">
                  {m.title}
                </h3>
                <p className="text-gray-500 dark:text-zinc-450 text-sm font-normal font-spaceGrotesk leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
