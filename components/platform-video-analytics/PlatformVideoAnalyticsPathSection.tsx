import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  Code, Activity, ChevronRight, ChartColumn, Shield, Briefcase } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const PATHS = [
  {
    title: 'Understand Video Outcomes',
    desc: 'Browse source-backed metric families and definitions.',
    icon: ChartColumn,
    href: '#outcomes',
  },
  {
    title: 'Inspect API Data Fields',
    desc: 'Use the current Analytics API documentation.',
    icon: Code,
    href: '#api-fields',
  },
  {
    title: 'Check Stream Health',
    desc: 'Use operational health and monitoring tools.',
    icon: Activity,
    href: '#stream-health',
  },
  {
    title: 'Assess Privacy Governance',
    desc: 'Review data protection and security evidence.',
    icon: Shield,
    href: '#privacy-governance',
  },
  {
    title: 'Enterprise Evaluation',
    desc: 'Review governance, then speak with an expert.',
    icon: Briefcase,
    href: '#enterprise-eval',
  },
];

export default function PlatformVideoAnalyticsPathSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-white flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* White Background Snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-36 -top-20 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="w-full text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">
            Choose your analytics path
          </h2>
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk']">
            Different roles need different entry points into video analytics. Pick the path that matches your current intent.
          </p>
        </div>

        {/* 5 Cards Row Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PATHS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="h-64 p-6 bg-slate-50/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-xs flex flex-col justify-between items-start hover:outline-blue-500 hover:shadow-md transition-all group"
              >
                <div className="w-full flex flex-col justify-start items-start gap-3">
                  <div className="size-12 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-center text-blue-500 shrink-0">
                    <Icon className="size-6 text-blue-500" />
                  </div>
                  <h3 className="w-full text-zinc-950 text-base font-bold font-['Space_Grotesk'] leading-snug group-hover:text-blue-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="w-full text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-5">
                    {item.desc}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1">
                  <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">
                    Select Path
                  </span>
                  <ChevronRight className="size-3.5 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
