'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Play } from 'lucide-react';
import bgHero from '@/public/images/resource-videotutorial/bg.png';
import playerMockup from '@/public/images/resource-videotutorial/Player-Mockup.png';

export default function VideoTutorialHeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative w-full min-h-[600px] lg:h-[946px] px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-950/90 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgHero}
          alt="Resource Video Tutorials Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Left Column Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-start items-start gap-8 max-w-3xl">
        {/* Badge */}
        <div className="px-3.5 py-1.5 rounded-full outline outline-[1.50px] outline-offset-[-1.50px] outline-teal-400 bg-teal-400/10 inline-flex justify-start items-start">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] tracking-wide uppercase">
            VIDEO TUTORIALS
          </span>
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
          Watch the workflow. Understand the next step.
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
          Learn ZoikoStream through practical video tutorials with captions, transcripts, chapters, prerequisites, and links to the current written guidance behind each workflow.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-lg p-2 bg-slate-800/90 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-700 flex justify-between items-center gap-3 shadow-lg">
          <div className="flex items-center gap-3 flex-1 px-3">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by task, product area, or topic..."
              className="w-full bg-transparent text-slate-200 placeholder-slate-400 text-base font-normal font-['Inter'] outline-none"
            />
          </div>
          <button className="px-5 py-2.5 bg-teal-400 rounded-lg text-slate-900 text-sm font-bold font-['Space_Grotesk'] hover:bg-teal-300 transition-colors shrink-0">
            Search
          </button>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-wrap justify-start items-center gap-4">
          <Link
            href="#tutorials"
            className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity shadow-md"
          >
            <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
              Browse all tutorials
            </span>
          </Link>
          <Link
            href="/live-event-guide"
            className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 flex justify-center items-center hover:bg-white/5 transition-colors"
          >
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Explore Guides
            </span>
          </Link>
        </div>

        {/* Footer Subtext */}
        <p className="text-slate-400/80 text-xs font-normal font-['Inter']">
          Every current tutorial is transcript-backed and linked to authoritative supporting resources.
        </p>
      </div>

      {/* Right side Player Mockup Showcase */}
      <div className="relative z-10 w-full lg:w-[520px] h-80 sm:h-[380px] lg:h-[420px] p-3 sm:p-4 bg-zinc-900/80 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 backdrop-blur-sm shadow-2xl flex justify-center items-center overflow-hidden shrink-0 group">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
          <Image
            src={playerMockup}
            alt="ZoikoStream Video Player Mockup"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          {/* Subtle overlay gradient and Play Icon Badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-center justify-center">
            <div className="size-16 bg-teal-400/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-7 h-7 text-slate-950 fill-slate-950 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
