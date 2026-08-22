import React from 'react';
import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="w-full bg-zinc-950 py-24 text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-400/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold     text-white leading-tight">
          Build, operate, or scale with ZoikoStream.
        </h2>

        <p className="text-neutral-300 text-base md:text-lg font-normal     leading-relaxed max-w-2xl">
          Explore the developer platform, review trust and reliability evidence, or speak with the ZoikoStream team about your requirements.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/sdks"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg text-slate-950 text-base font-semibold     hover:opacity-90 transition-opacity"
          >
            Explore Developers
          </Link>
          <Link
            href="/talk-to-an-expert"
            className="px-7 py-3.5 rounded-lg border border-white/30 text-white text-base font-semibold     hover:bg-white/10 transition-colors"
          >
            Talk to an expert
          </Link>
          <Link
            href="/platform-media-security"
            className="text-blue-300 text-base font-semibold     hover:underline px-4 py-3"
          >
            Visit Trust Center →
          </Link>
        </div>
      </div>
    </section>
  );
}
