'use client';

import React from 'react';

interface ProtectCard {
  id: string;
  title: string;
  description: string;
}

const CARDS: ProtectCard[] = [
  {
    id: 'access-model',
    title: 'Audience Access Model',
    description:
      'Public, private, restricted, or credentialed. Planning intent only — enforcement defined in Authorization systems.',
  },
  {
    id: 'privacy-data',
    title: 'Privacy & Data',
    description:
      'Attendee registration data, telemetry, and registration data protection. Governed by Privacy authority.',
  },
  {
    id: 'recording-consent',
    title: 'Recording Consent',
    description:
      'If recording, who is informed? Presenters, speakers, and public attendees consent.',
  },
  {
    id: 'captions-languages',
    title: 'Captions & Languages',
    description:
      'Automated vs human captions, multilingual interpretation. Primary target languages defined.',
  },
  {
    id: 'accessible-content',
    title: 'Accessible Content',
    description:
      'Accessible player controls, readable font contrast, audio description options.',
  },
  {
    id: 'security-review',
    title: 'Security Review',
    description:
      'Procurement and security audit requirements. Trust Center integration.',
  },
];

export default function ProtectAudienceSection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/live-events-planning-guide/bg1.png')`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Protect your audience, content, and accessibility standards
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Plan who can watch, how access is governed, what accessibility needs exist, and how privacy and security requirements are addressed — before event day.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-6 sm:p-7 shadow-lg hover:border-slate-700/90 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <h3 className="font-bold text-white text-base sm:text-lg">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
