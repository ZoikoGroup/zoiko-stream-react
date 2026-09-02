import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import section11Bg from '@/public/images/resource-guides/11sectionbg.png';

import cardImg3 from '@/public/images/resource-guides/card-image (3).png';
import cardImg4 from '@/public/images/resource-guides/card-image (4).png';
import cardImg5 from '@/public/images/resource-guides/card-image (5).png';

const BEYOND_CARDS = [
  {
    title: 'Help Center',
    desc: 'Self-service troubleshooting, account management, billing guides, and quick known-issue resolutions.',
    cta: 'Visit Help Center',
    href: '/resource-help-center',
    image: cardImg3,
  },
  {
    title: 'Contact Support',
    desc: 'Direct assistance from our technical engineering support team for complex integrations and production bugs.',
    cta: 'Get in touch',
    href: '/contact-us',
    image: cardImg4,
  },
  {
    title: 'Community Resources',
    desc: 'Connect with thousands of other video developers, share solutions, and access custom community-built plugins.',
    cta: 'Join the community',
    href: '#',
    image: cardImg5,
  },
];

export default function ResourceGuidesBeyondHelpSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background */}
      {section11Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section11Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
          Need help beyond guides?
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          When learning content isn&apos;t enough, get direct assistance.
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {BEYOND_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-zinc-900/80 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-950 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-4 flex-1">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>

              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>

              <div className="w-full h-0 border-b border-gray-800 my-1 mt-auto" />

              <Link
                href={card.href}
                className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-2 transition-colors"
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
