'use client';

import React from 'react';

export default function ProcurementReviewSection() {
  const cards = [
    {
      title: 'Annual & recurring ceremonies',
      desc: "Reusable event templates with explicit versioning and re-verification. Last year's capability or settings are never assumed still valid."
    },
    {
      title: 'Multiple schools & colleges',
      desc: 'Series and ceremony-instance hierarchy with inherited settings — and visible local overrides and exceptions.'
    },
    {
      title: 'Procurement & security review',
      desc: 'Authoritative security, privacy, accessibility, and legal resources. Evidence-backed claims. Sales handoff carries the technical context.'
    },
    {
      title: 'Brand consistency',
      desc: 'Approved public event naming, brand asset responsibility, and accessible logo and image requirements — verified per event preview.'
    },
    {
      title: 'Operational contacts',
      desc: 'Role-based owner fields and contact verification. Personal contact data is not published on public pages.'
    },
    {
      title: 'Production partners',
      desc: 'Partner invite and role path, a shared responsibility matrix, preflight checklist, and restricted access to technical detail.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24  text-white overflow-hidden border-t border-white/5">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/graduations-detailed/section-12.png')" }}
      />
      <div className="absolute inset-0 bg-slate-950/80 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Districts, universities, and recurring ceremonies
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Professional buyers need series planning, procurement resources, and consistent branding — without making the personal guest experience feel enterprise-only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="p-6 bg-white rounded-xl border border-white/10 flex flex-col gap-3 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-black text-base sm:text-lg font-bold font-sans">
                {card.title}
              </h3>
              <p className="text-[#5B6172] text-xs sm:text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
