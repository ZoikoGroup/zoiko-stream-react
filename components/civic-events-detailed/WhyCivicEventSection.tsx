'use client';

import React from 'react';

export default function WhyCivicEventSection() {
  const steps = [
    {
      num: '1',
      title: 'Establish the event',
      desc: 'Confirm public event type, date/time/time zone, organizer, location model'
    },
    {
      num: '2',
      title: 'Define access',
      desc: 'Choose public, controlled, credentialed, or hybrid audience behavior'
    },
    {
      num: '3',
      title: 'Assign production',
      desc: 'Identify venue/source/audio/graphics/contribution owners'
    },
    {
      num: '4',
      title: 'Plan inclusion',
      desc: 'Confirm captions, languages, alternate access, and accessibility'
    },
    {
      num: '5',
      title: 'Test and revalidate',
      desc: 'Run readiness checks; material changes reopen affected checks'
    },
    {
      num: '6',
      title: 'Go live and preserve',
      desc: 'Event-day help; recording/replay/archive follow configured policy'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-100 dark:border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0  select-none pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Why civic-event delivery needs a governed plan
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            A public proceeding is not simply a camera pointed at a room. It has an authoritative event identity, schedule or agenda context, venue/source chain, accessibility and language needs, public or controlled access, and recording/archive decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            return (
              <div 
                key={idx}
                className="p-6 bg-slate-50 dark:bg-zinc-900/50 rounded-xl border border-slate-100 dark:border-zinc-800 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-shadow backdrop-blur-sm"
              >
                <div className="flex justify-start items-center gap-4 w-full">
                  <div className="w-8 h-8 bg-teal-400 dark:bg-teal-500/20 text-zinc-900 dark:text-teal-400 rounded-full flex justify-center items-center font-bold text-sm font-sans">
                    {step.num}
                  </div>
                  <div className="flex-1 h-0.5 bg-slate-200 dark:bg-zinc-850" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-zinc-900 dark:text-white text-base font-bold font-sans">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 dark:text-slate-400 text-sm font-sans leading-relaxed">
                    {step.desc}
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
