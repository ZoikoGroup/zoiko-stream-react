import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg2 from '@/public/images/resources-architecture/bg (2).png';

export default function ArchitectureCustomReviewCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-36 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-center items-center gap-10 overflow-hidden">
      {/* Background image overlay - bg (2) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg2}
          alt="Architecture Review CTA Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-[800px] flex flex-col justify-start items-center gap-4 text-center">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[56px]">
          Need a custom architecture review?
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          When your requirements cross multiple patterns or need enterprise-grade customization, our solutions architects can help design the right approach.
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-wrap justify-center items-center gap-4">
        <Link
          href="/contact-us"
          className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
        >
          <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
            Talk to an Expert
          </span>
        </Link>
        <Link
          href="#patterns"
          className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 flex justify-center items-center hover:bg-white/5 transition-colors"
        >
          <span className="text-white text-base font-bold font-['Space_Grotesk']">
            Browse architecture patterns
          </span>
        </Link>
      </div>

      <p className="relative z-10 text-slate-400 text-xs font-normal font-['Space_Grotesk'] text-center">
        One platform across contribution, ingest, production, security, delivery, understanding, and preservation.
      </p>
    </section>
  );
}
