import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import heroBg from '@/public/images/resource-guides/1sectionbg.png';

export default function ResourceGuidesHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-gray-950/90 outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-center items-start gap-10 overflow-hidden z-10">
      {/* Background Overlay */}
      {heroBg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
          <Image
            src={heroBg}
            alt="Hero Background"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
      )}
      <div className="absolute size-96 -right-20 -top-20 bg-teal-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[800px] flex flex-col justify-start items-start gap-7">
        {/* Badge */}
        <div className="px-3 py-1.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-teal-400 inline-flex justify-start items-start bg-teal-400/10">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
            GUIDES
          </span>
        </div>

        {/* Heading & Paragraph */}
        <h1 className="w-full text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
          Practical guides for building and operating better video.
        </h1>
        <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Find step-by-step guidance for implementation, live delivery, media operations, integrations, security, and day-to-day ZoikoStream workflows.
        </p>
      </div>

      {/* Search Bar & Action Buttons */}
      <div className="relative z-10 w-full max-w-[640px] flex flex-col justify-start items-start gap-6">
        <div className="w-full px-5 py-4 bg-zinc-900 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 inline-flex justify-start items-center gap-3 shadow-inner">
          <Search className="size-5 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search guides by task, topic, or outcome..."
            className="w-full bg-transparent text-slate-200 placeholder-slate-400 text-sm sm:text-base font-normal font-['Inter'] focus:outline-none"
          />
        </div>

        <div className="w-full flex flex-wrap items-center gap-4">
          <button className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-gray-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity">
            Search guides
          </button>
          <Link
            href="#all-guides"
            className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            Browse all guides
            <ArrowRight className="size-4 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
