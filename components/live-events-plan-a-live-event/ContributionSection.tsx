import React from 'react';
import Image from 'next/image';
import { Video, Users, Code } from 'lucide-react';
import section5Bg from '@/public/images/live-events-plan-a-live-event/section-5bg.png';

const CARDS = [
  {
    title: 'Source Types',
    icon: Video,
    desc: 'Categorize camera feeds, screen shares, and media inputs by approved coarse bands, allowing easy classification for downstream switching matrices.',
  },
  {
    title: 'Remote Contributors',
    icon: Users,
    desc: 'Flag remote participant needs for specialist low-latency routing without assuming portal features, simplifying green room planning.',
  },
  {
    title: 'Technical Integration',
    icon: Code,
    desc: 'Route API, SDK, and custom workflow needs to Developer/Architecture authorities up front to ensure custom player layers align.',
  },
];

export function ContributionSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-t border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section5Bg}
          alt="Contribution Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight text-slate-100">
            Contribution &amp; Source Planning
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Capture high-level source types, remote contributor needs, and integration requirements without assuming specific protocols or technical implementations.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-7 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm space-y-4 hover:border-teal-500/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                    {card.title}
                  </h3>
                  <div className="w-8 h-8 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
