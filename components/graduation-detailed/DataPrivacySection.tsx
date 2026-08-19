'use client';

import React from 'react';
import { 
  User, 
  Shield, 
  Key, 
  Video, 
  MessageSquare, 
  Search, 
  Lock, 
  Link,
  Target
} from 'lucide-react';

export default function DataPrivacySection() {
  const cards = [
    {
      title: 'Minors may participate',
      desc: 'The public page never classifies age. Operational and legal review defines visibility and consent requirements where needed.',
      icon: User
    },
    {
      title: 'Names & photos may be sensitive',
      desc: 'Authoritative institutional source, minimum necessary access, restricted operational tooling, and explicit retention. No marketing reuse.',
      icon: Shield
    },
    {
      title: 'Guest credentials can be forwarded',
      desc: 'Access model limits are explained. Identity assurance is not claimed unless separately supported.',
      icon: Link
    },
    {
      title: 'Recording extends exposure',
      desc: 'Recording, replay, audience access, retention, download, and clipping permissions are separated and re-authorized.',
      icon: Target
    },
    {
      title: 'Chat & reactions',
      desc: 'Comments, chat, and social reactions are not added by default. Any such feature requires moderation, safeguarding design, and capability validation.',
      icon: MessageSquare
    },
    {
      title: 'Search indexing',
      desc: 'Replay and event pages carry explicit index/noindex behavior tied to organizer and publication policy.',
      icon: Search
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-955 text-white overflow-hidden border-t border-white/5 bg-slate-950">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/graduations-detailed/Section - SECTION 10 — PRIVACY & SAFEGUARDING.png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-10 sm:gap-12 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            A public ceremony is not unrestricted data use
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Marketing, viewing, operational production, recording, replay, and long-term retention are separate purposes — and stay separate. The public planning path never asks for student rosters, IDs, honors, or demographic detail.
          </p>
        </div>

        {/* Privacy lock banner */}
        <div className="p-6 bg-linear-to-r from-violet-900/20 to-cyan-500/10 rounded-2xl outline outline-1 outline-violet-500/30 backdrop-blur-sm flex flex-col gap-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Privacy lock</span>
          </div>
          <p className="text-slate-205 text-xs sm:text-sm leading-relaxed">
            No student roster, student ID, grade, degree status, honors, age, disability, demographic, immigration, financial-aid, family relationship, or academic-performance data in the public lead form. No ad targeting or CRM segmentation based on school level, inferred age, disability, language, name origin, religion, ethnicity, or viewing behavior. No session replay or heatmap on access-credential fields, guest lists, private event pages, or forms containing sensitive event details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={idx}
                className="p-5 bg-slate-900/60 rounded-xl border border-white/5 flex flex-col gap-4 hover:border-cyan-500/20 hover:bg-slate-900/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-955/60 border border-cyan-500/20 rounded-lg flex justify-center items-center text-cyan-400 flex-shrink-0">
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-white text-xs sm:text-sm font-bold font-sans">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}