import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import imgArea0 from '@/public/images/resources-case-studies/Image Area.png';
import imgArea1 from '@/public/images/resources-case-studies/Image Area (1).png';
import imgArea2 from '@/public/images/resources-case-studies/Image Area (2).png';
import imgArea3 from '@/public/images/resources-case-studies/Image Area (3).png';

const EVALUATION_CARDS = [
  {
    title: 'Reference Architectures',
    description:
      'Download complete infrastructure design schemas for multi-CDN setups and high-availability secure networks.',
    linkText: 'Explore architectures →',
    href: '/resource-architecture',
    image: imgArea0,
  },
  {
    title: 'Developer API & SDK Docs',
    description:
      'Integrate our sub-second latency streaming players natively into your iOS, Android, and web products.',
    linkText: 'Read API docs →',
    href: '/developer-documentation',
    image: imgArea1,
  },
  {
    title: 'Live Events Planning Guide',
    description:
      'A structural operational manual covering fallback matrices, broadcast signaling, and concierge setups.',
    linkText: 'View planner manual →',
    href: '/live-event-guide',
    image: imgArea2,
  },
  {
    title: 'Security & Trust Center',
    description:
      'Inspect compliance certifications, data residency boundaries, SSO governance settings, and audit standards.',
    linkText: 'Verify security →',
    href: '/about-us',
    image: imgArea3,
  },
];

export default function CaseStudiesEvaluationSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background overlay snippet */}
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
      <div className="size-[520px] left-[1048px] top-[388px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Continue your evaluation
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          From proof to production. Access our authoritative next steps and technical blueprints.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {EVALUATION_CARDS.map((card, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between items-start overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative w-full h-36 bg-slate-200 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full p-5 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                  {card.description}
                </p>
              </div>

              <Link
                href={card.href}
                className="text-blue-500 hover:text-blue-600 text-xs font-bold font-['Space_Grotesk'] transition-colors"
              >
                {card.linkText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
