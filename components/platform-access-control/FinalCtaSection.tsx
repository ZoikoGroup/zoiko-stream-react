import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-access-control/bg (89).png"
          alt="Final CTA Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="max-w-3xl flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-white leading-tight">
              Ready to govern your media with confidence?
            </h2>
            <p className="text-slate-300 text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
              Connect with our team to explore how ZoikoStream Access Control fits your organization&apos;s security needs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/talk-to-an-expert"
              className="px-8 py-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-lg shadow-black/40"
            >
              Talk to an expert
            </Link>
            <Link
              href="/start-building"
              className="px-8 py-4 rounded-lg border border-slate-300 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/10 transition-colors"
            >
              Start building
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
