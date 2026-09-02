import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import section7Bg from '@/public/images/resource-contact-support/section-7bg.png';

import rect0 from '@/public/images/resource-contact-support/Rectangle.png';
import rect1 from '@/public/images/resource-contact-support/Rectangle (1).png';
import rect2 from '@/public/images/resource-contact-support/Rectangle (2).png';
import rect3 from '@/public/images/resource-contact-support/Rectangle (3).png';
import rect4 from '@/public/images/resource-contact-support/Rectangle (4).png';
import rect5 from '@/public/images/resource-contact-support/Rectangle (5).png';

const OTHER_RESOURCES = [
  {
    title: 'Help Center',
    desc: 'Search troubleshooting articles, guides, and FAQs.',
    cta: 'Browse Help Center',
    href: '/resource-help-center',
    image: rect0,
  },
  {
    title: 'Developer docs',
    desc: 'Technical implementation guidance for APIs, SDKs, and integrations.',
    cta: 'View documentation',
    href: '/resource-developer-documentation',
    image: rect1,
  },
  {
    title: 'API reference',
    desc: 'Endpoint specifications, parameters, and schema details.',
    cta: 'Explore API',
    href: '/developer-api-reference',
    image: rect2,
  },
  {
    title: 'System status',
    desc: 'Current service availability and incident reports.',
    cta: 'Check status',
    href: '/resource-system-status',
    image: rect3,
  },
  {
    title: 'Security & Trust',
    desc: 'Security evidence, privacy documentation, and compliance.',
    cta: 'Visit Trust Center',
    href: '/resource-security-compliance',
    image: rect4,
  },
  {
    title: 'Live Events guide',
    desc: 'Pre-event planning guidance and operational setup.',
    cta: 'Start planning',
    href: '/live-events',
    image: rect5,
  },
];

export default function ResourceContactSupportResourcesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950/90 border-t border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background Image */}
      {section7Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section7Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Explore other resources
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Find answers and guidance across ZoikoStream&apos;s authoritative resources.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OTHER_RESOURCES.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-gray-700 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-900 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-4 flex-1">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk'] leading-7">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-6">
                {item.desc}
              </p>

              <Link
                href={item.href}
                className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1 mt-auto pt-2 transition-colors"
              >
                {item.cta} <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
