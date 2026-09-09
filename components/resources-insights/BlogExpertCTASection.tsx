import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import lightBgPattern from '@/public/images/Organization-overview/bg (147).png';

export default function BlogExpertCTASection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      
      {/* Background Pattern and Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={lightBgPattern}
          alt="Pattern"
          fill
          className="object-cover opacity-30 mix-blend-multiply"
        />
        {/* Soft background orbs */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-teal-400/5 rounded-full blur-[45px]" />
        <div className="absolute top-0 right-[-10%] w-[520px] h-[520px] bg-blue-500/5 rounded-full blur-[55px]" />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
        
        {/* Left Text */}
        <div className="flex-1 flex flex-col justify-start items-start gap-4 max-w-2xl">
          <h2 className="text-slate-950 text-3xl sm:text-4xl lg:text-[32px] font-bold font-['Space_Grotesk'] leading-tight">
            Need Expert Guidance?
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Inter'] leading-relaxed">
            For enterprise architecture, custom deployment, or commercial consultation — connect with our team after exploring the authoritative resources above.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <Link
            href="#expert"
            className="px-8 py-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
          >
            Talk to an expert
          </Link>
          <Link
            href="#resources"
            className="px-8 py-4 bg-transparent border border-slate-600 rounded-lg text-slate-950 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-50 hover:border-slate-800 transition-colors whitespace-nowrap"
          >
            Explore resources
          </Link>
        </div>
      </div>

      <p className="relative z-10 text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-relaxed opacity-80 max-w-3xl">
        ZoikoStream provides authoritative information first. Commercial consultation is available for enterprise architecture and deployment needs.
      </p>

    </section>
  );
}
