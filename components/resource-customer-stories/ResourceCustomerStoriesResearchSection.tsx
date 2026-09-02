import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import cardImg9 from '@/public/images/resource-customer-stories/Card-Image (9).png';
import cardImg10 from '@/public/images/resource-customer-stories/Card-Image (10).png';
import cardImg11 from '@/public/images/resource-customer-stories/Card-Image (11).png';
import cardImg12 from '@/public/images/resource-customer-stories/Card-Image (12).png';
import cardImg13 from '@/public/images/resource-customer-stories/Card-Image (13).png';
import cardImg14 from '@/public/images/resource-customer-stories/Card-Image (14).png';

const RESEARCH_CARDS = [
  {
    title: 'Case Studies',
    desc: 'Evidence-led evaluation with governed metrics, methodology, and implementation proof.',
    cta: 'Browse Case Studies',
    href: '/resource-case-studies',
    image: cardImg9,
  },
  {
    title: 'Architecture Guides',
    desc: 'Reference architectures for live streaming, VOD, multi-region delivery, and enterprise deployment.',
    cta: 'Explore Architecture',
    href: '/resource-architecture',
    image: cardImg10,
  },
  {
    title: 'Developer Documentation',
    desc: 'Comprehensive SDK references, integration guides, and technical specifications.',
    cta: 'Read Documentation',
    href: '/developer-documentation',
    image: cardImg11,
  },
  {
    title: 'Video Tutorials',
    desc: 'Step-by-step visual guides for encoding, player integration, and media workflows.',
    cta: 'Watch Tutorials',
    href: '/resource-video-tutorial',
    image: cardImg12,
  },
  {
    title: 'Webinars & Events',
    desc: 'Live and on-demand sessions covering product updates, best practices, and customer panels.',
    cta: 'View Schedule',
    href: '/resource-webinar-and-events',
    image: cardImg13,
  },
  {
    title: 'Community Resources',
    desc: 'Connect with fellow builders, ask questions, share patterns, and discover community content.',
    cta: 'Join Community',
    href: '#',
    image: cardImg14,
  },
];

export default function ResourceCustomerStoriesResearchSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3 max-w-4xl">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Continue your research
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Explore authoritative resources for evidence-led evaluation, implementation guidance, and technical documentation.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESEARCH_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="relative w-full h-40 bg-gray-900 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>

              <p className="text-gray-500 text-sm font-normal font-['Space_Grotesk'] leading-5">
                {card.desc}
              </p>

              <Link
                href={card.href}
                className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1 mt-auto transition-colors"
              >
                {card.cta} <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
