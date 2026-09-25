import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import bgPattern from '@/public/images/Organization-overview/bg (147).png';

const CARDS = [
  {
    tag: 'IMPLEMENTATION',
    title: 'Read the API reference',
    description: 'Confirm the current contract, parameters, response fields, and error semantics before changing production code.',
    linkText: 'Open API reference',
    image: '/images/zoikostream-changelog/Card image (8).png'
  },
  {
    tag: 'MIGRATION',
    title: 'Review sample applications',
    description: 'Compare a governed, runnable implementation with the runtime and dependency versions used by your integration.',
    linkText: 'Browse sample applications',
    image: '/images/zoikostream-changelog/Card image (9).png'
  },
  {
    tag: 'SOURCE OF RECORD',
    title: 'Check release authority',
    description: 'Use repository releases and the change ledger together to verify tags, corrections, and effective dates.',
    linkText: 'Visit GitHub',
    image: '/images/zoikostream-changelog/Card image (10).png'
  }
];

export default function ChangelogInformedCTASection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 bg-slate-50 flex flex-col items-center overflow-hidden">
      
      {/* Background Topo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgPattern}
          alt="Pattern"
          fill
          className="object-cover opacity-50 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12">
        
        {/* Header Area */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
            Move from a change notice to an informed implementation
          </h2>
          <p className="text-slate-500 text-lg font-normal font-['Inter'] leading-relaxed">
            Start with maintenance evidence, validate the affected surface, then continue to the canonical technical authority. No sales gate stands between you and the details.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {CARDS.map((card, idx) => (
            <div key={idx} className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              
              {/* Card Image */}
              <Image
                src={card.image}
                alt={`${card.title} illustration`}
                width={560}
                height={180}
                className="w-full h-44 object-cover"
              />
              
              {/* Bottom Text Area */}
              <div className="flex flex-col flex-1 p-6 sm:p-8 gap-3 bg-white">
                <span className="text-blue-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                  {card.tag}
                </span>
                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm font-normal font-['Inter'] leading-relaxed flex-1">
                  {card.description}
                </p>
                {card.linkText && (
                  <a href="#" className="flex items-center gap-1.5 text-blue-600 text-sm font-bold font-['Space_Grotesk'] mt-2 hover:text-blue-700 transition-colors">
                    {card.linkText} <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
