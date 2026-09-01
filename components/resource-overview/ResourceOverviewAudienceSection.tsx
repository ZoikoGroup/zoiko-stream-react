import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Activity, HelpCircle } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

const CARDS = [
  {
    icon: BookOpen,
    iconBg: 'bg-blue-500/10 text-blue-500',
    title: 'Learn',
    description: 'Explore guides, architecture, tutorials, events, terminology, and expert insights.',
    active: false,
    href: '#learn',
  },
  {
    icon: Activity,
    iconBg: 'bg-teal-400/10 text-teal-400',
    title: 'Proof & Updates',
    description: 'See customer proof, service health, product change, trust information, and accessibility.',
    active: true,
    href: '#proof-updates',
  },
  {
    icon: HelpCircle,
    iconBg: 'bg-blue-500/10 text-blue-500',
    title: 'Support',
    description: 'Get self-service help, technical references, live-event planning guidance, service updates, and community pathways.',
    active: false,
    href: '#support',
  },
];

export default function ResourceOverviewAudienceSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 border-b border-gray-200 flex flex-col justify-start items-start gap-10 bg-white overflow-hidden min-h-[556px]">
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
      <div className="size-96 -left-36 -top-20 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3 overflow-hidden">
        <h2 className="text-slate-950 text-3xl font-bold font-['Space_Grotesk']">
          Explore Resources
        </h2>
        <p className="text-slate-600 text-base font-normal font-['Inter'] leading-6">
          Find the tools, documentation, and support you need to get started.
        </p>
      </div>

      {/* 3 Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {CARDS.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <Link
              key={idx}
              href={card.href}
              className={`p-8 rounded-xl flex flex-col justify-start items-start gap-5 transition-all shadow-xs ${
                card.active
                  ? 'bg-slate-50 outline outline-[1.50px] outline-offset-[-1.50px] outline-blue-500'
                  : 'bg-slate-50 outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 hover:outline-blue-400'
              }`}
            >
              <div className={`size-10 rounded-lg flex justify-center items-center shrink-0 ${card.iconBg}`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="text-slate-950 text-xl font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                {card.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
