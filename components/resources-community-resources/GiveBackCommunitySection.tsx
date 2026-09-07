'use client';

import React from 'react';
import Image from 'next/image';

interface ContributionCard {
  id: string;
  title: string;
  description: string;
  image: string;
  route: string;
  rights: string;
  review: string;
}

const CARDS: ContributionCard[] = [
  {
    id: 'write-guide',
    title: 'Write a Guide',
    description:
      'Submit implementation guides, walkthroughs, and best-practice documentation for community review.',
    image: '/images/community-resources/cr18.png',
    route: 'Markdown PR',
    rights: 'Apache 2.0',
    review: '3 Business Days',
  },
  {
    id: 'contribute-code',
    title: 'Contribute Code',
    description:
      'Share SDKs, custom players, plugins, integrations, and serverless deployment templates.',
    image: '/images/community-resources/cr19.png',
    route: 'GitHub Repository',
    rights: 'MIT / Custom',
    review: '1 Week Core Check',
  },
  {
    id: 'speak-session',
    title: 'Speak at Session',
    description:
      'Apply to present real-world production cases at virtual meetups, workshops, or webinars.',
    image: '/images/community-resources/cr20.png',
    route: 'Speaker Proposal',
    rights: 'Recorded public replay',
    review: 'Bi-Weekly Review',
  },
  {
    id: 'provide-feedback',
    title: 'Provide Feedback',
    description:
      'Share critical product suggestions, feature requests, and edge case constraints.',
    image: '/images/community-resources/cr21.png',
    route: 'Product Board Portal',
    rights: 'Non-proprietary feedback',
    review: 'Monitored Daily',
  },
];

export default function GiveBackCommunitySection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Cyber Grid */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-30 mix-blend-screen bg-no-repeat bg-cover bg-center"
        // style={{
        //   backgroundImage: `url('/images/community-resources/cr-bg1.png')`,
        // }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Give back to the builder community
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Approved ways to share knowledge, code, and expertise with fellow ZoikoStream developers.
          </p>
        </div>

        {/* 4 Contribution Cards Grid */}
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

                {/* Title */}
                <h3 className="font-bold text-white text-base sm:text-lg mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              {/* Metadata Block */}
              <div className="pt-3 border-t border-slate-800/80 space-y-1 text-[11px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Route:</span>
                  <span className="text-slate-300">{card.route}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Rights:</span>
                  <span className="text-slate-300">{card.rights}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Review:</span>
                  <span className="text-teal-400 font-medium">{card.review}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
