'use client';

import React from 'react';
import { 
  FileText, 
  User, 
  Sliders, 
  Globe, 
  Layout, 
  Target,
  Check,
  Plus,
  Clock,
  X
} from 'lucide-react';

export default function ProgramIntegritySection() {
  const items = [
    {
      title: 'Program-aware planning',
      desc: 'Ceremony timing and graduate sequence should be confirmed before final readiness. Program version and reviewer are named.',
      icon: FileText
    },
    {
      title: 'Name accuracy',
      desc: 'Where name/graphics workflows are supported, an authoritative source and review owner must be defined — no automated name inference.',
      icon: User
    },
    {
      title: 'Pronunciation readiness',
      desc: 'Offer a planning requirement for pronunciation source and owner. No claim of automated pronunciation or AI unless supported.',
      icon: Sliders
    },
    {
      title: 'Late changes',
      desc: 'Schedule or program changes after testing create a "review required" state. No silent green after a material change.',
      icon: Globe
    },
    {
      title: 'Graphics responsibility',
      desc: 'Lower-thirds, name cards, slides, or stage graphics are organizer, partner, or ZoikoStream responsibilities depending on service scope.',
      icon: Layout
    },
    {
      title: 'No academic inference',
      desc: 'Honors, awards, majors, degree status, or academic ranking are never derived from names or program data.',
      icon: Target
    }
  ];

  const states = [
    { label: 'Approved', style: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', icon: Check },
    { label: 'Draft', style: 'bg-purple-500/10 text-purple-400 border-purple-500/20', icon: Plus },
    { label: 'Submitted', style: 'bg-purple-500/10 text-purple-400 border-purple-500/20', icon: Check },
    { label: 'Changed since test', style: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: Clock },
    { label: 'Conflict', style: 'bg-red-500/10 text-red-400 border-red-500/20', icon: X },
    { label: 'Stale', style: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20', icon: Clock }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 text-white overflow-hidden border-t border-white/5 ">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/graduations-detailed/Section - SECTION 5 — PROGRAM & GRADUATE SEQUENCE (1).png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Names and program are identity-critical inputs
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A graduate&apos;s name is identity-critical presentation data — not marketing data, and not a feature promise unless supported. Sequence, source, pronunciation, correction, and late changes are governed inputs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 bg-slate-900/60 rounded-xl border border-white/5 flex flex-row items-center gap-6 hover:border-cyan-500/20 transition-all hover:bg-slate-900/80"
              >
                <div className="w-10 h-10 bg-slate-950/60 border border-cyan-500/20 rounded-lg flex justify-center items-center text-cyan-400 flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold font-sans">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* State Badges Row */}
        <div className="p-6 bg-slate-900/60 rounded-xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap">
          <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
            Program integrity states —
          </span>
          <div className="flex flex-wrap gap-2.5">
            {states.map((st, idx) => {
              const BadgeIcon = st.icon;
              return (
                <span 
                  key={idx}
                  className={`px-3.5 py-1 text-xs font-bold rounded-full border flex items-center gap-1.5 ${st.style}`}
                >
                  <BadgeIcon className="w-3.5 h-3.5" />
                  {st.label}
                </span>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

