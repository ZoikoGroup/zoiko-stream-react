import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import section11Bg from '@/public/images/resource-developer-documentation/section-11bg.png';

import rect0 from '@/public/images/resource-developer-documentation/Rectangle.png';
import rect1 from '@/public/images/resource-developer-documentation/Rectangle (1).png';
import rect2 from '@/public/images/resource-developer-documentation/Rectangle (2).png';
import rect3 from '@/public/images/resource-developer-documentation/Rectangle (3).png';

const TROUBLESHOOTING = [
  {
    title: 'System status',
    desc: 'Check real-time service availability and incident history.',
    cta: 'View status',
    href: '/resource-system-status',
    image: rect0,
  },
  {
    title: 'Help Center',
    desc: 'Search troubleshooting articles and self-service support.',
    cta: 'Browse Help Center',
    href: '/resource-help-center',
    image: rect1,
  },
  {
    title: 'Security & Trust',
    desc: 'Security evidence, privacy documentation, and compliance information.',
    cta: 'Visit Trust Center',
    href: '/resource-security-compliance',
    image: rect2,
  },
  {
    title: 'Contact support',
    desc: 'Reach human-assisted support when self-service is insufficient.',
    cta: 'Get support',
    href: '/contact-us',
    image: rect3,
  },
];

export default function ResourceDeveloperDocumentationTroubleshootingSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-gray-950/75 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background Image */}
      {section11Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section11Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Troubleshooting and security boundaries
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Safe diagnostics, operational handoffs, and secret-safe implementation guidance.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {TROUBLESHOOTING.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:border-gray-700 transition-all shadow-md group"
          >
            <div className="relative size-36 shrink-0 rounded-lg overflow-hidden bg-gray-950">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center items-start gap-3">
              <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                {item.desc}
              </p>
              <Link
                href={item.href}
                className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1 transition-colors"
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
