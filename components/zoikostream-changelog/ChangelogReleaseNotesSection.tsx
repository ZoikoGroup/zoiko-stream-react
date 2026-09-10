import React from 'react';
import Image from 'next/image';

import { ArrowRight } from 'lucide-react';

const CARDS = [
  {
    image: '/images/zoikostream-changelog/Image (1).png',
    title: 'Customer-facing impact',
    description: 'Release notes describe what changed for users, operators, and support teams without exposing implementation detail.',
    linkText: 'Open release notes'
  },
  {
    image: '/images/zoikostream-changelog/Card image (6).png',
    title: 'Rollout intent',
    description: 'Release notes explain whether a change is phased, automatic, or gated by configuration, and when it becomes visible.',
    linkText: 'Review rollout plan'
  },
  {
    image: '/images/zoikostream-changelog/Card image (7).png',
    title: 'Recommended review path',
    description: 'Release notes point developers to the changelog, API reference, and sample applications before implementation work begins.',
    linkText: 'Start review'
  }
];

export default function ChangelogReleaseNotesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 bg-[#0F1219] flex flex-col items-center overflow-hidden border-t border-slate-800">
      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
              What the release means for your implementation
            </h2>
            <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed">
              Release notes explain the customer-facing impact, rollout intent, and recommended review path for the same approved changes shown in the changelog.
            </p>
          </div>

          <div className="w-full lg:w-[280px] shrink-0 p-5 rounded-xl border border-slate-800 bg-[#141A25] flex flex-col gap-2 shadow-sm">
            <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
              RELEASE NOTE
            </span>
            <p className="text-slate-300 text-sm font-['Inter'] leading-relaxed">
              Customer meaning stays in Release notes. Implementation behavior stays in API reference and Documentation.
            </p>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {CARDS.map((card, idx) => (
            <div key={idx} className="w-full bg-[#141A25] border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:border-slate-700 transition-colors">
              
              {/* Card Image */}
              <Image
                src={card.image}
                alt={`${card.title} illustration`}
                width={560}
                height={180}
                className="w-full h-44 object-cover"
              />
              
              {/* Bottom Text Area */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <h3 className="text-slate-200 text-xl font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed flex-1">
                  {card.description}
                </p>
                <a href="#" className="flex flex-col items-start gap-1.5 text-emerald-400 text-xs font-bold font-['Space_Grotesk'] mt-2 hover:text-emerald-300 transition-colors">
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
