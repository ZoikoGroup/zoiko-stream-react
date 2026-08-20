'use client';

import React from 'react';
import { 
  Calendar, 
  UserCheck, 
  GraduationCap, 
  Accessibility, 
  Video, 
  CheckCircle2, 
  Target,
  CircleCheck,
  Volume2,
  Rows2
} from 'lucide-react';

export default function PlanningSurfacesSection() {
  const cards = [
    {
      title: 'Ceremony formats',
      desc: 'Plan a single ceremony, event series, or multi-site program - only where current delivery capability supports it.',
      icon: Calendar
    },
    {
      title: 'Audience access',
      desc: 'Make access intent explicit and show verified access modes - never assumptions or "unlimited" claims.',
      icon: UserCheck
    },
    {
      title: 'Graduate/program control',
      desc: 'Treat schedule, program version, name/pronunciation source, and late changes as governed inputs.',
      icon: Rows2
    },
    {
      title: 'Accessibility',
      desc: 'Plan captioning, languages, screen-reader and keyboard guest access, and accessibility support early.',
      icon: Volume2
    },
    {
      title: 'Recording & replay',
      desc: 'Keep live, recording, replay, retention, download, clipping, and sharing as separate decisions.',
      icon: Target
    },
    {
      title: 'Readiness & help',
      desc: 'Preflight state, changes since test, dependency health, support ownership, and active-event help.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-200 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Six planning surfaces, each with its own state
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            A graduation isn&apos;t one undifferentiated feed. Each planning surface below is a separate decision with its own readiness - none default to &quot;ready&quot; until verified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={idx}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-row items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-400 via-indigo-500 via 60% to-violet-600 rounded-xl flex justify-center items-center text-white">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-zinc-900 text-base font-bold font-sans leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    {card.desc}
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

