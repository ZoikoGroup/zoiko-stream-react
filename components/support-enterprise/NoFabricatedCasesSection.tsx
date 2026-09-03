'use client';

import React from 'react';
import Image from 'next/image';

interface StateCard {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  image: string;
}

const CARDS: StateCard[] = [
  {
    id: 'accepted',
    title: 'Accepted',
    badge: 'SUCCESS',
    badgeColor: 'text-emerald-400 bg-emerald-950/80 border-emerald-500/40',
    description:
      'Authoritative success mapping with native backend case references generated.',
    image: '/images/Enterprise Page/se18.png',
  },
  {
    id: 'outcome-unknown',
    title: 'Outcome Unknown',
    badge: 'PENDING',
    badgeColor: 'text-amber-400 bg-amber-950/80 border-amber-500/40',
    description:
      'Reconcile local transmission logs systematically before attempting a retry.',
    image: '/images/Enterprise Page/se19.png',
  },
  {
    id: 'existing-case',
    title: 'Existing Case',
    badge: 'FOUND',
    badgeColor: 'text-blue-400 bg-blue-950/80 border-blue-500/40',
    description:
      'A current ticket matches. Automatically redirected to authorize continuing logs.',
    image: '/images/Enterprise Page/se20.png',
  },
  {
    id: 'recovery',
    title: 'Recovery',
    badge: 'ACTIVE',
    badgeColor: 'text-sky-400 bg-sky-950/80 border-sky-500/40',
    description:
      'Safe diagnostic alternatives triggered instantly if the direct ingestion fails.',
    image: '/images/Enterprise Page/se21.png',
  },
];

export default function NoFabricatedCasesSection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Circuit Grid */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-30 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/Enterprise Page/se-bg2.png')`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            No fabricated cases. No duplicate submissions.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Idempotent submission, truthful outcomes, and backend-authoritative case references protect transaction history.
          </p>
        </div>

        {/* 4 Outcome State Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 overflow-hidden p-5 shadow-lg flex flex-col justify-between hover:border-slate-700/90 transition-all duration-300"
            >
              <div>
                {/* Photo Banner */}
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-slate-900">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Title & Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-base sm:text-lg">
                    {card.title}
                  </h3>
                  <span
                    className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider uppercase shrink-0 ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
