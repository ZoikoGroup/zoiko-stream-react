'use client';

import React from 'react';
import { 
  MessageSquare, 
  Languages, 
  Volume2, 
  Keyboard, 
  Contrast, 
  ZapOff 
} from 'lucide-react';

export default function InclusiveParticipationSection() {
  const cards = [
    {
      title: 'Captions',
      desc: 'Requirements are identified during planning. No claim of automatic or human captioning unless supported.',
      icon: "/images/graduations-detailed/SVG.png"
    },
    {
      title: 'Languages',
      desc: 'Organizers indicate needs without a language list being presented as universally supported.',
      icon: "/images/graduations-detailed/SVG (1).png"
    },
    {
      title: 'Screen readers',
      desc: 'Semantic headings, labels, status text, and accessible player controls with QA-verified pass state.',
      icon: "/images/graduations-detailed/SVG (2).png"
    },
    {
      title: 'Keyboard',
      desc: 'All navigation, forms, accordions, dialogs, player controls, help, and recovery — keyboard-operable.',
      icon: "/images/graduations-detailed/SVG (3).png"
    },
    {
      title: 'Color / contrast',
      desc: 'No meaning by color alone. Every status pairs a text label with its icon.',
      icon: "/images/graduations-detailed/SVG (4).png"
    },
    {
      title: 'Reduced motion',
      desc: 'Motion is optional; no auto-moving ceremony content without a pause or user control.',
      icon: "/images/graduations-detailed/SVG (5).png"
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-955 text-white overflow-hidden border-t border-white/5 ">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/graduations-detailed/Section - SECTION 8 — ACCESSIBILITY, CAPTIONS & LANGUAGES.png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Inclusive participation planned from the start
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Accessibility is part of the ceremony, not a footer statement. Event-specific caption and language availability is evidence-backed — &quot;needs review&quot; and &quot;unavailable&quot; are honest states, not hidden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            return (
              <div 
                key={idx}
                className="p-6 bg-slate-900/60 rounded-xl border border-white/5 flex flex-col gap-4 hover:border-cyan-500/20 hover:bg-slate-900/80 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-indigo-500 via 60% to-violet-600 rounded-lg flex justify-center items-center text-[#7C3AED] flex-shrink-0">
                  <img className="w-5 h-5" src={card.icon} />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-base sm:text-lg font-bold font-sans">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl text-gray-500 text-xs sm:text-sm leading-relaxed">
          Accessibility contacts and alternative access paths are available without requiring any disability disclosure. If automated captions or translation are ever used, the page describes uncertainty and correction boundaries — output is never presented as authoritative.
        </div>

      </div>
    </section>
  );
}

