'use client';

import React from 'react';
import Image from 'next/image';

interface OnboardingCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const CARDS: OnboardingCard[] = [
  {
    id: 'developer-forum',
    title: 'Developer Forum',
    description:
      'Ask questions, share patterns, and connect with fellow builders. ZoikoStream-operated. Public access.',
    image: '/images/community-resources/cr8.png',
  },
  {
    id: 'getting-started-guide',
    title: 'Getting Started Guide',
    description:
      'Step-by-step onboarding for new community members with best practices and participation tips.',
    image: '/images/community-resources/cr9.png',
  },
  {
    id: 'community-code',
    title: 'Community Code',
    description:
      'Understand our community standards, moderation policies, and reporting procedures.',
    image: '/images/community-resources/cr10.png',
  },
  {
    id: 'welcome-webinar',
    title: 'Welcome Webinar',
    description:
      'Monthly live sessions introducing community resources, contribution pathways, and peer-learning opportunities.',
    image: '/images/community-resources/cr11.png',
  },
];

export default function NewToCommunitySection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Cyber Grid */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-30 mix-blend-screen bg-no-repeat bg-cover bg-center"

        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            New to the community? Begin here.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Curated entry points for developers joining the ZoikoStream builder community.
          </p>
        </div>

        {/* 4 Cards Grid */}
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
