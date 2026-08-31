import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import bg16 from '@/public/images/resource-glossary/bg (20).png';

export default function GlossaryHeroSection() {
  return (
    <section className="relative w-full min-h-[500px] lg:h-[953px] px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-900/75 border-b border-gray-800 flex flex-col justify-center items-start gap-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg16}
          alt="Glossary Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-start items-start gap-6">
        {/* Badge */}
        <div className="px-3 py-1.5 rounded-full outline outline-[1.50px] outline-offset-[-1.50px] outline-teal-400 inline-flex justify-start items-start bg-teal-400/10">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] tracking-wide">
            GLOSSARY
          </span>
        </div>

        {/* Title & Description */}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
          Streaming and video terminology, clearly defined.
        </h1>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
          Find concise definitions for live streaming, video delivery, playback, APIs, media operations, security, and related ZoikoStream concepts.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="relative z-10 w-full max-w-3xl p-4 sm:p-6 bg-gray-800 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800">
        <div className="w-full px-5 py-3.5 bg-gray-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 flex-1">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search terms, protocols, playback, delivery..."
              className="w-full bg-transparent text-slate-200 placeholder-slate-400 text-base font-normal font-['Inter'] outline-none"
            />
          </div>
          <div className="px-2 py-1 bg-gray-800 rounded-sm shrink-0 flex justify-center items-center">
            <span className="text-teal-400 text-xs font-semibold font-['Inter']">
              ⌘ K
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
