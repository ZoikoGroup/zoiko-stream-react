import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg11 from '@/public/images/resource-release-notes/section-11bg.png';

export default function ReleaseNotesAdoptionCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-36 bg-gray-950/80 border-t border-gray-800 flex flex-col justify-center items-center gap-10 overflow-hidden text-center">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg11}
          alt="Adoption CTA Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col justify-start items-center gap-4">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[56px]">
          Need guided adoption support?
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
          For enterprise teams requiring dedicated release guidance, migration planning, or managed operational transitions.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center items-center gap-4">
        <Link
          href="/contact-us"
          className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
        >
          <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
            Talk to an Expert
          </span>
        </Link>
        <Link
          href="/developer-documentation"
          className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 flex justify-center items-center hover:bg-white/5 transition-colors"
        >
          <span className="text-white text-base font-bold font-['Space_Grotesk']">
            Or visit Developer Support
          </span>
        </Link>
      </div>

      <span className="relative z-10 text-slate-400 text-xm font-normal font-['Inter']">
        No sales gate for release information. Full access under open protocol governance.
      </span>
    </section>
  );
}
