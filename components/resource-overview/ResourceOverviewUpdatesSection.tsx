import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import rect1 from '@/public/images/resources-overview/Rectangle (6).png';
import rect2 from '@/public/images/resources-overview/Rectangle (7).png';
import rect3 from '@/public/images/resources-overview/Rectangle (8).png';
import rect4 from '@/public/images/resources-overview/Rectangle (9).png';
import rect5 from '@/public/images/resources-overview/Rectangle (10).png';
import rect6 from '@/public/images/resources-overview/Rectangle (11).png';

const PROOF_ITEMS = [
  {
    title: 'Case studies',
    description: 'Structured implementation proof with source-governed scope and outcomes.',
    actionText: 'Explore case studies →',
    image: rect1,
    href: '/resource-case-studies',
  },
  {
    title: 'Customer stories',
    description: 'Customer experiences and voice with approved attribution.',
    actionText: 'Read customer stories →',
    image: rect2,
    href: '/resource-case-studies',
  },
  {
    title: 'System status',
    description: 'Current platform/service health and incident information.',
    actionText: 'View system status →',
    image: rect3,
    href: '/resource-system-status',
  },
  {
    title: 'Accessibility',
    description: 'Accessibility approach, conformance information, and roadmap.',
    actionText: 'Review accessibility →',
    image: rect4,
    href: '/resource-accessibility',
  },
  {
    title: 'Release notes',
    description: 'Customer-readable release changes, applicability, and next steps.',
    actionText: 'Read release notes →',
    image: rect5,
    href: '/resource-release-notes',
  },
  {
    title: 'Security and Trust Center',
    description: 'Current security, trust, assurance, and evidence routes.',
    actionText: 'Visit Trust Center →',
    image: rect6,
    href: '/resource-security-trust-center',
  },
];

export default function ResourceOverviewUpdatesSection() {
  return (
    <section id="proof-updates" className="relative w-full px-4 sm:px-8 lg:px-28 py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
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
      <div className="size-96 -left-44 -top-14 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] left-[1068px] top-[620px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-950 text-4xl font-bold font-['Space_Grotesk'] leading-[48px]">
          Proof &amp; Updates
        </h2>
        <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-7">
          Customer evidence, platform health, product change, and trust
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROOF_ITEMS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden group shadow-xs hover:border-blue-400 transition-all"
          >
            <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-950 text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={item.href}
                  className="text-blue-500 hover:text-blue-600 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                >
                  {item.actionText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
