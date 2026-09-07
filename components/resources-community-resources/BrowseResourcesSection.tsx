'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ResourceCard {
  id: string;
  title: string;
  badge: string;
  badgeType: 'operated' | 'external' | 'community';
  description: string;
  meta: string;
  image: string;
  category: string;
  imageClass?: string;
  href: string;
}

const CATEGORIES = [
  'All',
  'Discussion Spaces',
  'Q&A',
  'Events',
  'Contributions',
  'Learning',
  'Code Projects',
];

const CARDS: ResourceCard[] = [
  {
    id: 'developer-forum',
    title: 'Developer Forum',
    badge: 'ZOIKOSTREAM-OPERATED',
    badgeType: 'operated',
    description: 'Exchange implementation patterns and best practices with fellow builders.',
    meta: 'Public Access \u2022 Discussion Space',
    image: '/images/community-resources/cr12.png',
    category: 'Discussion Spaces',
    href: '/developer-documentation',
  },
  {
    id: 'video-engineering-qa',
    title: 'Video Engineering Q&A',
    badge: 'ZOIKOSTREAM-OPERATED',
    badgeType: 'operated',
    description: 'Technical Q&A focused on low-latency encoding, transcoding, and playback optimization.',
    meta: 'Account Required \u2022 Technical Q&A',
    image: '/images/community-resources/cr13.png',
    category: 'Q&A',
    href: '/resources-api-reference',
  },
  {
    id: 'community-events-hub',
    title: 'Community Events Hub',
    badge: 'ENDORSED EXTERNAL',
    badgeType: 'external',
    description: 'Discover community-led meetups, virtual workshops, and technical demo sessions.',
    meta: 'Public Access \u2022 Events Directory',
    image: '/images/community-resources/cr14.png',
    category: 'Events',
    href: '/live-events',
  },
  {
    id: 'open-source-projects',
    title: 'Open Source Projects',
    badge: 'COMMUNITY-LED',
    badgeType: 'community',
    description: 'Explore community-contributed SDKs, OBS plugins, and serverless workflow models.',
    meta: 'Public Access \u2022 Code Repositories',
    image: '/images/community-resources/cr15.png',
    category: 'Code Projects',
    href: '/developer-documentation',
  },
  {
    id: 'live-streaming-group',
    title: 'Live Streaming Group',
    badge: 'ZOIKOSTREAM-OPERATED',
    badgeType: 'operated',
    description: 'Connect with live video practitioners managing high-scale contribution pipelines.',
    meta: 'Account Required \u2022 User Group',
    image: '/images/community-resources/cr16.png',
    category: 'Discussion Spaces',
    href: '/live-events',
  },
  {
    id: 'media-ops-community',
    title: 'Media Ops Community',
    badge: 'ENDORSED EXTERNAL',
    badgeType: 'external',
    description: 'Share operational insights for massive VOD processing, cold storage, and delivery CDNs.',
    meta: 'External Account \u2022 Slack workspace',
    image: '/images/community-resources/cr17.png',
    category: 'Discussion Spaces',
    imageClass: 'scale-[1.08]',
    href: '/contact-us',
  },
];

export default function BrowseResourcesSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCards = CARDS.filter((card) => {
    if (activeCategory === 'All') return true;
    return card.category === activeCategory;
  });

  const getBadgeStyle = (type: ResourceCard['badgeType']) => {
    switch (type) {
      case 'operated':
        return 'text-teal-700 bg-teal-50 border-teal-200/80';
      case 'external':
        return 'text-amber-700 bg-amber-50 border-amber-200/80';
      case 'community':
        return 'text-slate-700 bg-slate-100 border-slate-200';
    }
  };

  return (
    <section id="community-spaces" className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 80 C 240 0, 520 200, 880 90 S 1280 -10, 1520 100" />
            <path d="M-80 150 C 270 60, 560 260, 920 150 S 1320 50, 1520 160" />
            <path d="M-80 220 C 300 120, 600 320, 960 210 S 1360 110, 1520 220" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            Browse all community resources
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            The canonical registry of approved community spaces, peer-learning destinations, and contribution programs.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                  isActive
                    ? 'bg-[#38bdf8] text-[#06181f] font-semibold shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 6 Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Photo Banner */}
                <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-4 bg-slate-900">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={`object-cover object-center ${card.imageClass || ''}`}
                  />
                </div>

                {/* Title & Badge */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    {card.title}
                  </h3>
                  <span
                    className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider uppercase shrink-0 ${getBadgeStyle(
                      card.badgeType
                    )}`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {card.description}
                </p>

                {/* Metadata */}
                <span className="text-[11px] text-blue-600 font-medium mb-4 block">
                  {card.meta}
                </span>
              </div>

              {/* Visit Link */}
              <div>
                <Link
                  href={card.href}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Visit Resource</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
