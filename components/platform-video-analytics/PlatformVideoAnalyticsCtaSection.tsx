import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Code, ShieldCheck, Headphones, Activity, ArrowRight } from 'lucide-react';
import section12Bg from '@/public/images/platform-video-analytics/section-12bg.png';

const NEXT_STEPS = [
  {
    icon: Code,
    title: 'Start Building',
    desc: 'Access the Analytics API, sandbox keys and developer documentation.',
    cta: 'Get Started',
    href: '/resource-developer-documentation',
  },
  {
    icon: ShieldCheck,
    title: 'Review Governance',
    desc: 'Explore metric definitions, data lineage and quality evidence.',
    cta: 'View Evidence',
    href: '#governance',
  },
  {
    icon: Headphones,
    title: 'Talk to an Expert',
    desc: 'Connect with our solutions team after reviewing analytics capabilities.',
    cta: 'Contact Us',
    href: '/request-enterprise-quote',
  },
  {
    icon: Activity,
    title: 'Stream Monitoring',
    desc: 'Check current operational health of your media workflows.',
    cta: 'View Status',
    href: '#monitoring',
  },
];

export default function PlatformVideoAnalyticsCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 flex flex-col justify-start items-center gap-12 overflow-hidden z-10">
      {/* Background Image section-12bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section12Bg}
          alt="CTA Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 to-gray-950/80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-center gap-12">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-center gap-4 text-center">
          <h2 className="w-full text-slate-100 text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
            Choose your next step
          </h2>
          <p className="w-full max-w-2xl text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Every path is evidence-first. Pick the one that matches your intent.
          </p>
        </div>

        {/* 4 Action Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEXT_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="h-64 p-6 bg-gray-900/90 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col justify-between items-start hover:outline-teal-400 hover:shadow-xl transition-all group"
              >
                <div className="w-full flex flex-col gap-3">
                  <div className="size-10 bg-cyan-950/80 rounded-md flex items-center justify-center text-teal-400 shrink-0">
                    <Icon className="size-5 text-teal-400" />
                  </div>
                  <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk'] group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 inline-flex items-center gap-1">
                  <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk']">
                    {item.cta}
                  </span>
                  <ArrowRight className="size-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
