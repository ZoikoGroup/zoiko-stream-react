import React from 'react';
import Image from 'next/image';
import heroBg from '@/public/images/resources-insights/herobackground.png';
import { Search } from 'lucide-react';

export default function BlogHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-32 bg-slate-950 flex flex-col justify-center items-start overflow-hidden min-h-[600px]">
      
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-start items-start gap-6">
        
        {/* Pill */}
        <div className="px-3 py-1 rounded-full outline outline-1 outline-teal-500 bg-teal-500/10">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] tracking-[0.2em] uppercase">
            INSIGHTS
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-tight lg:leading-[72px]">
          Ideas, analysis, and practices for better video decisions.
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7 max-w-3xl">
          Source-governed explainers, engineering and operations perspectives, research analysis, and industry context — helping you understand video decisions without replacing Guides, Architecture, Case studies, or technical documentation.
        </p>

        {/* Interactive row */}
        <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
          
          {/* Search Bar */}
          <div className="flex-1 max-w-md bg-slate-900/50 backdrop-blur-md rounded-lg outline outline-1 outline-gray-800 flex items-center px-4 py-3">
            <Search className="w-4 h-4 text-slate-500 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search topics, practices, protocols, operations, architecture, events, security..."
              className="w-full bg-transparent border-none outline-none text-slate-300 text-sm font-['Inter'] placeholder:text-slate-500"
            />
          </div>

          {/* Action Buttons */}
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg text-gray-950 text-sm font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity whitespace-nowrap">
            Browse insights
          </button>
          
          <button className="px-6 py-3 rounded-lg outline outline-1 outline-gray-600 text-white text-sm font-bold font-['Space_Grotesk'] hover:bg-slate-800 transition-colors whitespace-nowrap">
            Talk to an expert
          </button>

        </div>
      </div>
    </section>
  );
}
