import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import img8 from '@/public/images/support-help-center/Img (8).png';
import img9 from '@/public/images/support-help-center/Img (9).png';
import img10 from '@/public/images/support-help-center/Img (10).png';

const CONTEXT_CARDS = [
  {
    title: 'Enterprise support',
    desc: 'Organization-specific eligibility and account handoff.',
    cta: 'Enterprise support →',
    href: '/pricing-enterprise-plans',
    image: img8,
  },
  {
    title: 'Live Events support',
    desc: 'Carries safe event-lifecycle context only.',
    cta: 'Plan or get event help →',
    href: '/live-events',
    image: img9,
  },
  {
    title: 'Developer support',
    desc: 'Implementation and integration issues.',
    cta: 'Get developer support →',
    href: '/resource-developer-documentation',
    image: img10,
  },
];

export default function SupportHelpCenterContextSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3 max-w-4xl">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wider">
            ORGANIZATION & EVENT CONTEXT
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          For organization or event-specific support.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed">
          These routes carry the context relevant to your account or event — never a generic support wall repeated on every page.
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {CONTEXT_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="h-56 bg-zinc-900 rounded-2xl overflow-hidden relative group cursor-pointer shadow-md"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 to-zinc-950/90 pointer-events-none" />

            <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2 z-10">
              <h3 className="text-white text-base sm:text-lg font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>
              <p className="text-white/80 text-xs font-normal font-['Inter'] leading-relaxed">
                {card.desc}
              </p>
              <Link
                href={card.href}
                className="text-teal-400 hover:text-teal-300 text-xs font-semibold font-['Inter'] pt-1 transition-colors"
              >
                {card.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
