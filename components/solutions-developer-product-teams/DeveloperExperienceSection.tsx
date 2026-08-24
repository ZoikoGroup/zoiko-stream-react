import React from 'react';
import Image from 'next/image';

import bg162 from '@/public/images/Developers-product-teams/bg (158).png';
import rect10 from '@/public/images/Developers-product-teams/Rectangle  (25).png';
import rect11 from '@/public/images/Developers-product-teams/Rectangle  (24).png';
import rect12 from '@/public/images/Developers-product-teams/Rectangle  (23).png';
import rect13 from '@/public/images/Developers-product-teams/Rectangle  (21).png';
import rect14 from '@/public/images/Developers-product-teams/Rectangle  (20).png';
import rect15 from '@/public/images/Developers-product-teams/Rectangle  (22).png';

const devCards = [
  { title: 'Docs', owner: 'Tech Writers', state: 'Current', rev: 'Feb 2026', image: rect10 },
  { title: 'Reference', owner: 'Dev Rel', state: 'Current', rev: 'Jan 2026', image: rect11 },
  { title: 'Samples', owner: 'Media team', state: 'Review due', rev: 'Dec 2025', image: rect12 },
  { title: 'Status Check', owner: 'SRE / Ops', state: 'Current', rev: 'Feb 2026', image: rect13 },
  { title: 'Support Hub', owner: 'Solutions Architect', state: 'Current', rev: 'Feb 2026', image: rect14 },
  { title: 'Release Evidence', owner: 'Product', state: 'Current', rev: 'Jan 2026', image: rect15 },
];

export default function DeveloperExperienceSection() {
  return (
    <section className="relative w-full bg-slate-950/75 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg162}
          alt="Developer Experience Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Good developer experience includes what happens after the first successful request
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed max-w-4xl">
            Keep documentation current, make support routes obvious, expose status and release/change evidence, and give teams a governed path for compatibility and migration decisions.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devCards.map((c, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col group hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-32 bg-slate-900 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {c.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal font-['Inter']">
                    Owner: {c.owner}
                  </p>
                </div>

                <div className="flex flex-col gap-1 text-xs font-['Inter'] pt-2 border-t border-gray-800/60">
                  <div>
                    <span className="text-teal-400 font-bold">State: </span>
                    <span className="text-slate-400">{c.state}</span>
                  </div>
                  <div>
                    <span className="text-teal-400 font-bold">Reviewed: </span>
                    <span className="text-slate-400">{c.rev}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
