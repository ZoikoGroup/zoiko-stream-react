import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import frame133 from '@/public/images/resource-blogs-and-insights/Frame 133.png';

export default function BlogHeroSection() {
  return (
    <section className="relative w-full min-h-[550px] lg:h-[952px] px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-center items-start gap-14 overflow-hidden">
      {/* Background image overlay */}
      

      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-14">
        {/* Left Column Content */}
        <div className="flex-1 flex flex-col justify-start items-start gap-10 max-w-3xl">
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <div className="px-3 py-1.5 rounded-full outline outline-[1.50px] outline-offset-[-1.50px] outline-teal-400 bg-teal-400/10 inline-flex justify-start items-start">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                BLOG &amp; INSIGHTS
              </span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
              Ideas, practices, and perspectives for better video
            </h1>
            <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              Explore streaming, live events, media operations, playback, architecture, APIs, security, and video-delivery insights from ZoikoStream contributors.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full max-w-2xl px-6 py-4 bg-gray-950 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex justify-between items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search topics, practices, protocols, operations…"
                className="w-full bg-transparent text-slate-200 placeholder-slate-400 text-base font-normal font-['Inter'] outline-none"
              />
            </div>
            <button className="px-4 py-2 bg-teal-400 rounded-md text-gray-950 text-sm font-bold font-['Space_Grotesk'] hover:bg-teal-300 transition-colors shrink-0">
              Search
            </button>
          </div>
        </div>

        {/* Right Graphic Frame */}
        <div className="w-full lg:w-[420px] h-[360px] relative rounded-2xl overflow-hidden border border-gray-800 shrink-0">
          <Image
            src={frame133}
            alt="ZoikoStream Insights Visual"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
