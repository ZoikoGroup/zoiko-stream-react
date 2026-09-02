import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import section7Bg from '@/public/images/resource-guides/7sectionbg.png';

import cardImg24 from '@/public/images/resource-guides/CardImage (24).png';
import cardImg25 from '@/public/images/resource-guides/CardImage (25).png';
import cardImg26 from '@/public/images/resource-guides/CardImage (26).png';

const LEARNING_PATHS = [
  {
    meta: '5 Guides • 2.5 hrs',
    level: 'Beginner → Intermediate',
    title: 'From Zero to First Stream',
    desc: 'A progressive path that takes you from an empty developer account to embedding your first low-latency interactive live stream inside a web app.',
    image: cardImg24,
    href: '#',
  },
  {
    meta: '4 Guides • 3 hrs',
    level: 'Intermediate → Advanced',
    title: 'Live Event Mastery',
    desc: 'Configure zero-fail active-active RTMP pushes, live failovers, low-latency CDN georouting rules, and monitor real-time stream diagnostics.',
    image: cardImg25,
    href: '#',
  },
  {
    meta: '6 Guides • 4 hrs',
    level: 'Intermediate → Advanced',
    title: 'Enterprise Security & Compliance',
    desc: 'Learn secure video delivery. Set up JWT player validation, geofencing blocks, administrative access logs, and complete DRM configurations.',
    image: cardImg26,
    href: '#',
  },
];

export default function ResourceGuidesLearningPathsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-gray-950/90 outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background */}
      {section7Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section7Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
          Structured learning paths.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Guided educational sequences designed to take you from initial setup to running complex, SLA-backed video pipelines.
        </p>
      </div>

      {/* 3 Learning Path Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {LEARNING_PATHS.map((card, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-all group"
          >
            <div className="relative w-full h-44 bg-gray-950 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-7 flex flex-col justify-start items-start gap-4 flex-1">
              <div className="w-full flex justify-between items-center text-xs font-['Inter']">
                <span className="text-teal-400 font-semibold">{card.meta}</span>
                <span className="text-slate-400 font-normal">{card.level}</span>
              </div>

              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>

              <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>

              <div className="w-full h-0 border-b border-gray-800 my-1" />

              <div className="w-full flex justify-between items-center mt-auto">
                <Link
                  href={card.href}
                  className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1 transition-colors"
                >
                  Start path <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
