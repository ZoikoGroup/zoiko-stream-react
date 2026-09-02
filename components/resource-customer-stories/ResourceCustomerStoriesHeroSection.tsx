import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ShieldQuestion } from 'lucide-react';
import section1Bg from '@/public/images/resource-customer-stories/section1bg.png';

const CATEGORIES = [
  'All',
  'Live Events',
  'Media Operations',
  'Enterprise Video',
  'Developer Workflows',
  'VOD Delivery',
];

export default function ResourceCustomerStoriesHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-zinc-950/80 border-b border-gray-800 flex flex-col justify-center items-start gap-12 overflow-hidden z-10">
      {/* Background Overlay */}
      {section1Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
          <Image
            src={section1Bg}
            alt="Customer Stories Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="absolute size-96 -right-20 -top-20 bg-teal-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Header Container */}
      <div className="relative z-10 w-full flex flex-col justify-center items-start gap-6 max-w-5xl">
        {/* Badge */}
        <div className="px-3 py-1.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-teal-400 inline-flex items-center gap-2 bg-teal-400/10">
          <div className="size-1.5 bg-teal-400 rounded-full" />
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase">
            CUSTOMER STORIES
          </span>
        </div>

        {/* Heading */}
        <h1 className="w-full text-slate-100 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[74px]">
          Hear how teams build, launch, and operate with ZoikoStream
        </h1>

        {/* Subtitle */}
        <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-3xl">
          Explore approved stories from organizations using ZoikoStream for live events, video delivery, media operations, developer workflows, and enterprise video.
        </p>
      </div>

      {/* Search & Filter Container Box */}
      <div className="relative z-10 w-full max-w-[960px] p-6 sm:p-8 bg-slate-900 rounded-2xl shadow-[0px_16px_32px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-6">
        {/* Search Bar & Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-4">
          {/* Input */}
          <div className="w-full sm:flex-1 px-4 py-3 bg-slate-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-3">
            <Search className="size-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search customer stories..."
              className="w-full bg-transparent text-slate-200 placeholder-slate-400 text-base font-normal font-['Space_Grotesk'] focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="w-full sm:w-auto flex items-center gap-3 shrink-0">
            <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-zinc-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity">
              Browse stories
            </button>
            <Link
              href="/resource-case-studies"
              className="px-6 py-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-slate-100 text-base font-bold font-['Space_Grotesk'] hover:bg-slate-800 transition-colors"
            >
              See case studies
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="w-full flex flex-wrap items-center gap-2.5">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-[20px] text-xs font-bold font-['Space_Grotesk'] transition-colors ${
                idx === 0
                  ? 'bg-teal-400 text-zinc-950'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Information Disclaimer */}
      <div className="relative z-10 flex items-center gap-2 text-slate-400 text-xm font-normal font-['Space_Grotesk'] leading-6">
        <ShieldQuestion className="size-5 text-teal-400 shrink-0" />
        <span>
          Names, quotes, images, and customer details appear only when approved for public use.
        </span>
      </div>
    </section>
  );
}
