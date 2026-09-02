import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import section3Bg from '@/public/images/resource-guides/3sectionbg.png';

import cardImg6 from '@/public/images/resource-guides/CardImage (6).png';
import cardImg7 from '@/public/images/resource-guides/CardImage (7).png';
import cardImg8 from '@/public/images/resource-guides/CardImage (8).png';

const FILTERED_CARDS = [
  {
    category: 'Security',
    date: 'Updated Feb 2026',
    title: 'Custom Player Token Authorization',
    desc: 'Secure your playback streams using JSON Web Tokens. Learn to generate, sign, and verify client-side play requests.',
    level: 'Intermediate',
    time: '15 min',
    image: cardImg6,
    href: '#',
  },
  {
    category: 'Live Ops',
    date: 'Updated Jan 2026',
    title: 'Building a Live Town Hall Workflow',
    desc: 'Step-by-step assembly of an enterprise town hall setup with redundant active-active RTMP push ingest.',
    level: 'Advanced',
    time: '25 min',
    image: cardImg7,
    href: '#',
  },
  {
    category: 'Delivery',
    date: 'Updated Dec 2025',
    title: 'Optimizing Playback with Custom CDN Rules',
    desc: 'Improve first-frame load latency globally by configuring active geographical routing rules on Zoiko CDN.',
    level: 'Intermediate',
    time: '10 min',
    image: cardImg8,
    href: '#',
  },
];

export default function ResourceGuidesFilterSection() {
  return (
    <section id="all-guides" className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-gray-950/90 outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background */}
      {section3Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section3Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Title */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
          Find the right guide.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Search the complete guide library, or filter down to specific levels, topics, or developer tools.
        </p>
      </div>

      {/* Filter Bar & Cards Container */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-8">
        {/* Filter Toolbar */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 flex-1">
            {/* Search Filter */}
            <div className="min-w-[240px] flex-1 max-w-xs px-4 py-3 bg-zinc-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-2.5">
              <Search className="size-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Filter by keyword..."
                className="w-full bg-transparent text-slate-200 text-sm font-normal font-['Inter'] placeholder-slate-400 focus:outline-none"
              />
            </div>

            {/* Topic Dropdown */}
            <div className="px-4 py-3 bg-zinc-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-3 cursor-pointer">
              <span className="text-white text-sm font-normal font-['Inter']">
                All Topics
              </span>
              <ChevronDown className="size-4 text-slate-400" />
            </div>

            {/* Level Dropdown */}
            <div className="px-4 py-3 bg-zinc-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-3 cursor-pointer">
              <span className="text-white text-sm font-normal font-['Inter']">
                Intermediate Level
              </span>
              <ChevronDown className="size-4 text-slate-400" />
            </div>

            {/* Sort Dropdown */}
            <div className="px-4 py-3 bg-zinc-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-3 cursor-pointer">
              <span className="text-white text-sm font-normal font-['Inter']">
                Sort: Recently Updated
              </span>
              <ChevronDown className="size-4 text-slate-400" />
            </div>
          </div>

          {/* Count Badge */}
          <div className="p-2">
            <span className="text-teal-400 text-sm font-semibold font-['Inter']">
              24 guides found
            </span>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {FILTERED_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-all group"
            >
              <div className="relative w-full h-40 bg-gray-950 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="w-full p-6 flex flex-col justify-start items-start gap-4 flex-1">
                <div className="w-full flex justify-between items-center">
                  <div className="px-2 py-1 bg-teal-400/10 rounded-sm outline outline-1 outline-offset-[-1px] outline-teal-400/30 flex items-center justify-center">
                    <span className="text-teal-400 text-xs font-semibold font-['Inter'] uppercase">
                      {card.category}
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs font-normal font-['Inter']">
                    {card.date}
                  </span>
                </div>

                <h3 className="text-white text-lg font-bold font-['Space_Grotesk'] leading-snug">
                  {card.title}
                </h3>

                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5 line-clamp-2">
                  {card.desc}
                </p>

                <div className="w-full h-0 border-b border-gray-800 my-1" />

                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xs font-normal font-['Inter']">
                      {card.level}
                    </span>
                    <span className="text-slate-400 text-xs font-normal font-['Inter']">
                      •
                    </span>
                    <span className="text-slate-400 text-xs font-normal font-['Inter']">
                      {card.time}
                    </span>
                  </div>

                  <Link
                    href={card.href}
                    className="text-teal-400 hover:text-teal-300 text-xs font-bold font-['Space_Grotesk'] flex items-center gap-1 transition-colors"
                  >
                    Read guide <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
