'use client';

import React from 'react';
import { ShieldCheck, Subtitles, HelpCircle } from 'lucide-react';

export default function WeddingA11y() {
  const cards = [
    {
      title: 'Live captions',
      desc: "Automated real-time speech-to-text rendering with high accuracy parameters, ensuring older family members don't miss a single vow.",
      icon: Subtitles
    },
    {
      title: 'Multi-language support',
      desc: 'Configure dual-channel audio streams or dedicated subtitle feeds for international family circles attending across timezones.',
      icon: ShieldCheck
    },
    {
      title: 'Accessible viewing',
      desc: 'Fully responsive web players supporting standard screen readers, keyboard navigation, and custom text-scaling options.',
      icon: HelpCircle
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Captions, languages &amp; accessibility
          </h2>
          <p className="text-slate-655 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Make inclusive participation a planning decision, not an afterthought.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="p-7 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                {/* Custom Icon Wrapper */}
                <div className="size-12 bg-teal-400/10 rounded-xl flex justify-center items-center shrink-0">
                  <Icon className="size-5 text-teal-500 stroke-[1.8]" />
                </div>
                
                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-zinc-955 text-lg font-bold font-spaceGrotesk leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
                    {c.desc}
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
