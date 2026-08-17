'use client';

import React from 'react';
import { 
  Globe, 
  Link, 
  Lock, 
  Layout, 
  Clock 
} from 'lucide-react';

export default function GuestAccessSection() {
  const cards = [
    {
      title: 'Open / public-like',
      desc: 'Broadest practical access.',
      sub: 'Only if registry authorizes; discoverability and sharing implications shown.',
      icon: Globe
    },
    {
      title: 'Controlled link',
      desc: 'Shareable but controlled pathway.',
      sub: 'Explain link/expiry/recovery only if supported.',
      icon: Link
    },
    {
      title: 'Invite / credentialed',
      desc: 'Named or credential-based access.',
      sub: 'Only where capability exists; no identity assurance implied.',
      icon: Lock
    },
    {
      title: 'Institution portal / embed',
      desc: 'Viewing inside an institutional experience.',
      sub: 'Conditional; requires integration and accessibility review.',
      icon: Layout
    },
    {
      title: 'Not decided',
      desc: 'Still evaluating.',
      sub: 'Continue planning; expert review recommended.',
      icon: Clock
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24  text-white overflow-hidden border-t border-white/5">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/graduations-detailed/Section - SECTION 6 — AUDIENCE ACCESS & GUEST EXPERIENCE.png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            How guests reach the ceremony
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Access intent is set by the organizer; capability is shown only where verified. Nothing here implies &quot;unlimited,&quot; &quot;global,&quot; or &quot;identity verified&quot; unless the exact claim is authorized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={idx}
                className="p-5 bg-slate-900/60 rounded-xl border border-white/5 flex flex-col gap-4 hover:border-cyan-500/20 transition-all hover:bg-slate-900/80"
              >
                <div className="w-10 h-10 bg-slate-955/60 border border-cyan-500/20 rounded-lg flex justify-center items-center text-cyan-400 flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-white text-sm font-bold font-sans">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {card.desc}
                  </p>
                  <p className="text-slate-500 text-[11px] leading-normal mt-auto">
                    {card.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contract Box */}
        <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5 flex flex-col gap-3">
          <h3 className="text-white text-base font-bold font-sans">
            Guest experience contract
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Guest landing prioritizes event title, date and authoritative time zone, accessibility controls, support and recovery, and the viewing action. No forced account creation for one-time viewers. No bundled marketing consent, newsletter, alumni solicitation, donation request, or app install in the critical viewing path. If access fails, recovery is actionable and named — not a generic &quot;something went wrong.&quot; States distinguish &quot;not started,&quot; &quot;access window closed,&quot; &quot;event changed,&quot; &quot;event ended,&quot; &quot;credential problem,&quot; and &quot;service issue.&quot;
          </p>
        </div>

      </div>
    </section>
  );
}

