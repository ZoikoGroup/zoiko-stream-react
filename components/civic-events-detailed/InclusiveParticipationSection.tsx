'use client';

import React from 'react';
import { MessageSquareText, Languages, Accessibility, Keyboard, ScanText, ZoomIn, Contrast, Activity, HelpCircle, Network, Eye, MousePointer2, Volume2Icon, PhoneCall, PhoneCallIcon, LucidePhoneCall, Expand, Globe, MousePointer2Icon, MousePointerIcon, Sun } from 'lucide-react';
import { getNextBuildDebuggerPortOffset } from 'next/dist/lib/worker';

export default function InclusiveParticipationSection() {
  const cards = [
    {
      title: 'Captions',
      desc: 'Live and post-event automated speech-to-text with quick revision templates.',
      icon: MessageSquareText
    },
    {
      title: 'Language access',
      desc: 'Multilingual selectors supporting direct audio overrides and translation tracks.',
      icon:Globe
    },
    {
      title: 'Sign language',
      desc: 'Dedicated secondary feed with picture-in-picture stream layout options.',
      icon: Eye
    },
    {
      title: 'Keyboard',
      desc: 'All system player modules are completely navigable via tab indexes.',
      icon:MousePointerIcon
    },
    {
      title: 'Screen reader',
      desc: 'Fully semantic HTML layers, alt properties, and screen-readable updates.',
      icon: Volume2Icon
    },
    {
      title: 'Zoom / reflow',
      desc: 'Responsive video framing supporting up to 200% magnification layouts.',
      icon: Expand
    },
    {
      title: 'Color / contrast',
      desc: 'Default styling sheets tested rigorously to confirm WCAG 2.2 AA standards.',
      icon: Sun
    },
    {
      title: 'Reduced motion',
      desc: 'Disables animations and visual transitions based on user OS parameters.',
      icon: Activity
    },
    {
      title: 'Alternative help',
      desc: 'Request emergency direct support loops without disclosing personal details.',
      icon: LucidePhoneCall
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
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Inclusive participation planned from the start
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Accessibility is a primary service-quality and public-access dimension.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="p-8 bg-gray-900/80 rounded-xl border border-slate-800 flex flex-col justify-start items-start gap-4 hover:border-teal-500/30 transition-colors backdrop-blur-sm shadow-md"
              >
                <div className="w-10 h-10 bg-zinc-950 rounded-lg flex justify-center items-center text-teal-400 shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-100 text-xl font-bold font-sans">
                    {c.title}
                  </h3>
                  <p className="text-slate-455 text-sm font-sans leading-relaxed">
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
