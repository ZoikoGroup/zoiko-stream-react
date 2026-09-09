import React from 'react';
import Image from 'next/image';
import section13Bg from '@/public/images/live-events-plan-a-live-event/section-13bg.png';

const ROLES = [
  { role: 'Event Owner', desc: 'Owns final decisions, establishes timeline and context parameters.' },
  { role: 'Producer/Tech Lead', desc: 'Oversees run-of-show, overlays, standby slate triggers.' },
  { role: 'Communications/Brand', desc: 'Coordinates marketing assets, invite codes & external outreach.' },
  { role: 'Accessibility Lead', desc: 'Approves automated translation tracks and subtitle routing.' },
  { role: 'Security/Privacy', desc: 'Reviews corporate SAML credentials & whitelisted IP locks.' },
  { role: 'Pricing/Commercial', desc: 'Manages contract review, quote sign-off, and budgets.' },
  { role: 'Support Authority', desc: 'Responsible for secondary encoder networks & failovers.' },
  { role: 'Archive/Replay Owner', desc: 'Defines lifetime storage caps, data compliance & master records.' },
];

export function RolesHandoffsSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-t border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section13Bg}
          alt="Roles & Handoffs Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight text-slate-100">
            Roles, Responsibilities &amp; Handoffs
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Clarify who owns each planning dimension — from event brief through go-live to post-event archive — with clean handoff boundaries.
          </p>
        </div>

        {/* 8 Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROLES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm space-y-4 hover:border-teal-500/50 transition-colors flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
                  {item.role}
                </h3>
                <span className="px-2 py-0.5 bg-teal-400/10 text-teal-400 text-[10px] font-bold font-['Space_Grotesk'] rounded">
                  AUTHORIZED
                </span>
              </div>
              <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
