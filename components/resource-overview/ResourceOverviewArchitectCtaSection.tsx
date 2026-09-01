import React from 'react';
import Link from 'next/link';

export default function ResourceOverviewArchitectCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col items-center justify-center gap-8 overflow-hidden text-center">
      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-4">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight">
          Need Dedicated Architectural Support?
        </h2>

        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed">
          Our senior video solutions architects can review your media distribution topologies, optimize encoding profiles, and assist with enterprise integrations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/contact-us"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
          >
            Contact Architect Support
          </Link>
          <Link
            href="/solutions-enterprise"
            className="px-7 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors"
          >
            View Enterprise Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
