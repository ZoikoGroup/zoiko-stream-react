'use client';

import React from 'react';
import { Mic, Music, Mail, RefreshCw } from 'lucide-react';

export default function WeddingContributors() {
  const items = [
    {
      title: 'Remote toasts & speeches',
      desc: 'Integrate virtual toasts from loved ones abroad directly into the local AV soundboard.',
      icon: Mic
    },
    {
      title: 'Virtual performances',
      desc: 'Support live virtual musicians streaming directly to local reception projection systems.',
      icon: Music
    },
    {
      title: 'Family messages',
      desc: 'Moderate incoming video cards from remote family members for live playback intervals.',
      icon: Mail
    },
    {
      title: 'Rehearsal & testing',
      desc: 'Dedicated latency testing before the live hour to ensure remote links remain stable.',
      icon: RefreshCw
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900"
                    style={{ backgroundImage: "url('/images/wedding-celebration/SectionBackground (1).png')" }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Remote contributors &amp; participation
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Plan remote speakers, performers, and family members with clear roles and fallback paths.
          </p>
        </div>

        {/* Vertical list items stacked */}
        <div className="flex flex-col gap-4 w-full">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-5 bg-zinc-900/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 hover:border-zinc-750 transition-colors shadow-sm"
              >
                <div className="size-10 bg-gray-850 rounded-lg flex justify-center items-center shrink-0">
                  <Icon className="size-5 text-[#34D4CA] stroke-[1.8]" />
                </div>
                
                <div className="flex-1 flex flex-col justify-start items-start gap-1 text-left w-full">
                  <h3 className="text-slate-100 text-base sm:text-lg font-bold font-spaceGrotesk leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore remote button */}
        <div className="flex justify-start pt-2">
          <button className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold font-spaceGrotesk rounded-[10px] cursor-pointer border-none shadow-md">
            Explore remote contribution
          </button>
        </div>

      </div>
    </section>
  );
}
