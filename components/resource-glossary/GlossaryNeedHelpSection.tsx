import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg21 from '@/public/images/resource-glossary/bg (16).png';

export default function GlossaryNeedHelpSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-20 bg-slate-900/90 border-t border-b border-gray-800 flex flex-col justify-start items-center gap-8 text-center overflow-hidden">
      {/* Background Image - bg (21).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg21}
          alt="Need Help Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col justify-start items-center gap-3">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          Need help with implementation?
        </h2>
        <p className="text-slate-400 text-base font-normal font-['Inter'] leading-6">
          Our solutions engineers can help you navigate architecture decisions, live-event planning, and security requirements.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center items-center gap-4">
        <Link
          href="/contact-us"
          className="px-6 py-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
        >
          <span className="text-gray-950 text-sm font-bold font-['Space_Grotesk']">
            Talk to an expert
          </span>
        </Link>
        <Link
          href="/solutions"
          className="px-6 py-3 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 flex justify-center items-center hover:bg-white/5 transition-colors"
        >
          <span className="text-white text-sm font-bold font-['Space_Grotesk']">
            Browse solutions
          </span>
        </Link>
      </div>
    </section>
  );
}
