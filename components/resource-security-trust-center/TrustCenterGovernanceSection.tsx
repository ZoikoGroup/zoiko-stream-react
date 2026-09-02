import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg5 from '@/public/images/resources-security-trust-center/section-5bg.png';
import img0 from '@/public/images/resources-security-trust-center/Rectangle.png';
import img1 from '@/public/images/resources-security-trust-center/Rectangle (1).png';
import img2 from '@/public/images/resources-security-trust-center/Rectangle (2).png';

const CARDS = [
  {
    title: 'Governance Model',
    description:
      'Corporate security structure led by principal architects. Independent audits conducted bi-annually.',
    linkText: 'View Evidence',
    href: '#evidence-inventory',
    image: img0,
  },
  {
    title: 'Control Families',
    description:
      'Continuous automated verification of access, posture, network boundary rules, and endpoint compliance.',
    linkText: 'View Evidence',
    href: '#evidence-inventory',
    image: img1,
  },
  {
    title: 'Review & Testing',
    description:
      'Rigorous continuous integration fuzzing, static analysis, and third-party penetration campaigns.',
    linkText: 'View Evidence',
    href: '#evidence-inventory',
    image: img2,
  },
];

export default function TrustCenterGovernanceSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg5}
          alt="Governance Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Security governance and practices
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {CARDS.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] pt-2 transition-colors"
              >
                <span>{item.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <span className="relative z-10 text-slate-500 text-xs font-normal font-['Inter']">
        Disclaimer: Evidence is scoped to stated products and periods. Not a universal security guarantee.
      </span>
    </section>
  );
}
