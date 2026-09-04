'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface AuthorityResourceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  href: string;
}

const CARDS: AuthorityResourceCard[] = [
  {
    id: 'dev-docs',
    title: 'Developer Documentation',
    description:
      'Authoritative implementation guides, SDK references, and technical specifications for all ZoikoStream products.',
    image: '/images/community-resources/cr8.png',
    linkText: 'Browse Documentation',
    href: '/developer-documentation',
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    description:
      'Complete REST and WebSocket API contracts, authentication, rate limits, and response schemas.',
    image: '/images/community-resources/cr9.png',
    linkText: 'Explore API Reference',
    href: '/resources-api-reference',
  },
  {
    id: 'video-tutorials',
    title: 'Video Tutorials & Guides',
    description:
      'Step-by-step video learning content for encoding, player integration, live streaming, and media workflows.',
    image: '/images/community-resources/cr10.png',
    linkText: 'Watch Tutorials',
    href: '/developer-documentation',
  },
  {
    id: 'help-center',
    title: 'Help Center',
    description:
      'Self-service troubleshooting, account management, billing, and configuration guides.',
    image: '/images/community-resources/cr11.png',
    linkText: 'Visit Help Center',
    href: '/faqs-and-support',
  },
  {
    id: 'contact-support',
    title: 'Contact Support',
    description:
      'Direct access to ZoikoStream support engineers for account-specific issues and technical escalation.',
    image: '/images/community-resources/cr22.png',
    linkText: 'Open Support Ticket',
    href: '/contact-us',
  },
  {
    id: 'system-status',
    title: 'System Status & Updates',
    description:
      'Live platform health, planned maintenance windows, and operational change notifications.',
    image: '/images/community-resources/cr24.png',
    linkText: 'Check System Status',
    href: '/zoikostream-status',
  },
];

export default function WhenCommunityNotAnswerSection() {
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
            When community isn&apos;t the answer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Official ZoikoStream resources for authoritative technical truth, direct support, and platform status.
          </p>
        </div>

        {/* 6 Authority Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 overflow-hidden p-5 shadow-lg flex flex-col justify-between hover:border-slate-700/90 transition-all duration-300"
            >
              <div>
                {/* Photo Banner */}
                <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-4 bg-slate-900">
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

              {/* Action Link */}
              <div>
                <Link
                  href={card.href}
                  className="text-xs font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 transition-colors"
                >
                  <span>{card.linkText}</span>
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
