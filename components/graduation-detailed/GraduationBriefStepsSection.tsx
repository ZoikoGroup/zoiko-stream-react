'use client';

import React from 'react';

export default function GraduationBriefStepsSection() {
  const steps = [
    {
      num: 'Step 1',
      title: 'Event basics',
      desc: 'Organization, event type, date or range, authoritative time zone, city or remote/unknown.'
    },
    {
      num: 'Step 2',
      title: 'Ceremony model',
      desc: 'Single / multiple / multi-site / not decided. Production owner known/unknown. Program status.'
    },
    {
      num: 'Step 3',
      title: 'Audience & access',
      desc: 'Access intent: open, controlled, invite, portal, or not decided. Replay intent optional.'
    },
    {
      num: 'Step 4',
      title: 'Accessibility',
      desc: 'Caption need yes/no/not sure. Language need category. Accessibility contact preference.'
    },
    {
      num: 'Step 5',
      title: 'Production & readiness',
      desc: 'Venue/AV partner. Source and connectivity ownership. Rehearsal window if known.'
    },
    {
      num: 'Step 6',
      title: 'Contact & consent',
      desc: 'Work name, organization, business email. Marketing consent is not bundled with the inquiry.'
    },
    {
      num: 'Step 7',
      title: 'Review',
      desc: 'Human-readable summary with edit links. Save-and-return where authorized.'
    },
    {
      num: 'Submit',
      title: 'Start your brief',
      desc: 'Idempotent submit, success reference, edit path, and privacy links — no misleading "ready to book" flow.'
    }
  ];

  return (
    <section 
      id="graduation-brief-form"
      className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-t border-white/5"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/graduations-detailed/Section - SECTION 14 — EVENT BRIEF FORM (7-STEP PREVIEW).png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-slate-205 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Tell us what you know — nothing you shouldn't share
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            The brief collects only what's needed to plan next steps. It never asks for student names, rosters, credentials, technical secrets, or medical/accommodation detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const isSubmit = step.num === 'Submit';
            return (
              <div 
                key={idx}
                className={`p-5 rounded-xl border flex flex-col gap-4 min-h-[140px] hover:scale-[1.01] transition-transform backdrop-blur-sm ${
                  isSubmit 
                    ? 'bg-gradient-to-br from-cyan-900/40 via-indigo-900/30 to-violet-900/40 border-violet-500/30' 
                    : 'bg-slate-900/80 border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <span className="text-[#22D3EE] text-[10px] font-bold uppercase tracking-wider">
                  {step.num}
                </span>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-sm font-bold font-sans">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
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
