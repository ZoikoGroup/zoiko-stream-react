import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HelpCircle, Headset, BookOpen, FileCode, User, Cpu, Book } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const HELP_CARDS = [
  {
    title: 'Help Center',
    icon: HelpCircle,
    description:
      'Detailed administrative documentation, setups, and general usage guidelines.',
    href: '/contact-us',
  },
  {
    title: 'Contact Support',
    icon: User,
    description:
      'Open a direct ticket with our global 24/7 technical operations desk.',
    href: '/contact-us',
  },
  {
    title: 'Developer Docs',
    icon: Book,
    description:
      'Explore our rich API parameters, player integration manuals, and SDK tutorials.',
    href: '/developer-documentation',
  },
  {
    title: 'API Reference',
    icon: Cpu,
    description:
      'Attributable code references, schemas, and live interactive endpoints.',
    href: '/api-reference',
  },
];

export default function StatusStillNeedHelpSection() {
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
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-center gap-4 text-center">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Still need help?
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          If your issue isn&apos;t reflected in current status, these resources can help.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {HELP_CARDS.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="p-6 bg-slate-100/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between items-start gap-5 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-full flex justify-between items-center">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <div className="p-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
              </div>

              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                {card.description}
              </p>

              <div className="w-full pt-4 border-t border-gray-200">
                <Link
                  href={card.href}
                  className="text-blue-600 hover:text-blue-700 text-xs font-bold font-['Space_Grotesk'] transition-colors"
                >
                  Go to resource →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
