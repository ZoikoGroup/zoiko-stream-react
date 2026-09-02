import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import section13Bg from '@/public/images/resource-developer-documentation/section-13bg.png';

export default function ResourceDeveloperDocumentationCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 lg:py-28 bg-gray-950/90 flex flex-col justify-center items-center gap-10 overflow-hidden z-10">
      {/* Background Image */}
      {section13Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section13Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      <div className="relative z-10 w-full max-w-3xl flex flex-col justify-start items-center text-center gap-6">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Ready to build?
        </h2>

        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-2xl">
          Start with source-governed documentation. No guesswork. No invented endpoints. No stale examples.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#tasks"
            className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-gray-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity text-center"
          >
            Browse documentation
          </Link>
          <Link
            href="/talk-to-an-expert"
            className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-white text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/10 transition-colors text-center"
          >
            Talk to an expert
          </Link>
        </div>

        <span className="text-gray-400 text-sm font-normal font-['Space_Grotesk'] leading-6 pt-2">
          Technical self-service and implementation recovery precede commercial routing.
        </span>
      </div>
    </section>
  );
}
