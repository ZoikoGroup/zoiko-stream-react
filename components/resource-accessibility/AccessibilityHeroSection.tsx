import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg1 from '@/public/images/resource-accessibility/section-1bg.png';

export default function AccessibilityHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-center items-start gap-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg1}
          alt="Accessibility Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 bg-teal-400/10 inline-flex justify-start items-start">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
            ACCESSIBILITY TRUST CENTER
          </span>
        </div>

        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
          Accessibility at ZoikoStream.
        </h1>

        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
          Learn how accessibility is considered across ZoikoStream, review published conformance evidence and known limitations, and find help if you encounter a barrier.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#conformance-evidence"
            className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
          >
            <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
              Review Accessibility Evidence
            </span>
          </Link>
          <Link
            href="#report-barrier"
            className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 flex justify-center items-center hover:bg-white/5 transition-colors"
          >
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Report a Barrier
            </span>
          </Link>
        </div>

        <span className="text-slate-500 text-xm font-normal font-['Inter'] leading-relaxed">
          Conformance and test statements are published with their scope, method, environment, and review date.
        </span>
      </div>
    </section>
  );
}
