import React from 'react';
import Link from 'next/link';

export default function FinalCtaBannerSection() {
  return (
    <section className="relative w-full bg-zinc-950 text-white py-24 border-b border-gray-800 overflow-hidden text-center">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial-[at_15%_20%] from-teal-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold    text-white leading-tight max-w-2xl">
          Need the right partner for a specific video challenge?
        </h2>

        <p className="text-neutral-300 text-base font-normal    leading-relaxed max-w-xl">
          Browse the ecosystem by capability, or tell our team what you are trying to build, integrate, or deliver.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <Link
            href="#become-partner"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg text-gray-800 text-base font-semibold    hover:opacity-90 transition-opacity"
          >
            Become a partner →
          </Link>
          <Link
            href="/talk-to-an-expert"
            className="px-7 py-3.5 rounded-lg border border-white/30 text-white text-base font-semibold    hover:bg-white/10 transition-colors"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}
