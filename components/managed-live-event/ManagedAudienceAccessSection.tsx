'use client';

import React from 'react';
import { Eye, Shield, Languages, User2, User2Icon, Users2, Lock } from 'lucide-react';

export default function ManagedAudienceAccessSection() {
  const cards = [
    {
      title: 'Audience Access & Portals',
      desc: 'Configure secure SAML SSO, invited-only lists, or general public access settings.',
      icon: Users2,
      items: ['Active Directory Link', 'Temporary Passcodes', 'Public Embed Keys']
    },
    {
      title: 'Privacy & Safeguarding',
      desc: 'Safeguard attendee identities and minors with configurable overlay blurs.',
      icon: Lock,
      items: ['Minors Blurring Matrix', 'Camera Angle Zones', 'Pruned Metadata Logs']
    },
    {
      title: 'Accessibility & Languages',
      desc: 'Provide real-time captions and multiple language audio translation channels.',
      icon: Languages,
      items: ['Live CCLI Captions', 'Secondary Language Tracks', 'WCAG Compliant Player']
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-250 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Audience access, privacy boundaries, and accessibility
          </h2>
          <p className="text-slate-655 text-base sm:text-lg leading-relaxed font-sans">
            A comprehensive managed stream plan includes clear boundaries to protect and support your viewers.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 flex flex-col justify-start items-start gap-5 p-6 sm:p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex justify-center items-center text-blue-600">
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex flex-col gap-3 text-left">
                  <h3 className="text-zinc-900 text-lg font-bold font-sans">
                    {c.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="w-full h-px bg-slate-100" />

                <div className="flex flex-col gap-2.5 text-left font-sans">
                  {c.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2 text-xs">
                       <span className="w-1.5 h-1.5 bg-teal-450 rounded-full" />
                      <span className="text-zinc-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
