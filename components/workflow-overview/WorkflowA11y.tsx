'use client';

import React from 'react';
import Image from 'next/image';
import { Subtitles, Globe2, Eye, PhoneCall } from 'lucide-react';

export default function WorkflowA11y() {
  const cards = [
    {
      title: 'Live Captions',
      desc: 'Real-time, low-latency automated caption streams rendered cleanly across standard browser displays.',
      icon: Subtitles,
      img: '/images/workflow-overview/CardImage (18).png'
    },
    {
      title: 'Multi-Language Support',
      desc: 'Inject secondary translation audio channels or multiple caption feeds for global offices or multi-lingual circles.',
      icon: Globe2,
      img: '/images/workflow-overview/CardImage (19).png'
    },
    {
      title: 'Accessible Controls',
      desc: 'Fully responsive player widgets fully compliant with keyboard navigation models and active screen-reader targets.',
      icon: Eye,
      img: '/images/workflow-overview/CardImage (20).png'
    },
    {
      title: 'Alternative Access',
      desc: 'Support telephone listen-in bridges or light-weight audio-only feeds optimized strictly for low-bandwidth regions.',
      icon: PhoneCall,
      img: '/images/workflow-overview/CardImage (21).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold tracking-tight">
            Plan captions, languages, and inclusive access before the event
          </h2>
          <p className="text-slate-655 text-base sm:text-lg font-normal leading-relaxed">
            Make inclusive participation an effortless engineering choice. Embed speech-to-text translators and alternative visual options natively in your player.
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl border border-gray-200 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[340px]"
              >
                {/* Image Box */}
                <div className="relative h-40 w-full bg-slate-100">
                  <Image 
                    src={c.img} 
                    alt={c.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="p-5 flex flex-col justify-start items-start gap-3 flex-1">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-zinc-955 text-base font-bold">
                      {c.title}
                    </h3>
                    {/* Small Blue Icon Box */}
                    <div className="size-7 bg-blue-500/10 rounded-lg flex justify-center items-center shrink-0">
                      <Icon className="size-3.5 text-blue-555 stroke-[1.8]" />
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-left">
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Button link */}
        <div className="flex justify-start pt-2">
          <a href="/captions-and-languages">
          <button className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-600 bg-transparent hover:outline-teal-400 transition-colors text-zinc-955 text-base font-bold">
            Explore Captions and languages
          </button></a>
        </div>

      </div>
    </section>
  );
}
