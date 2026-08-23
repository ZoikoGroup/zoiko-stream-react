import React from 'react';
import Link from 'next/link';

export default function FinalCtaBannerSection() {
  return (
    <section className="relative w-full bg-zinc-950 text-white py-24 border-b border-gray-800 overflow-hidden text-center">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial-[at_15%_20%] from-teal-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-full" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            READY TO EXPLORE?
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold   text-slate-100 leading-tight max-w-2xl">
          Find the role where your work<br/> matters.
        </h2>

        <p className="text-slate-400 text-base font-normal     leading-relaxed max-w-xl">
          Browse current ZoikoStream opportunities and review the full location, employment, and application details before you apply.
        </p>

        <div className="pt-4">
          <Link
            href="#roles"
            className="px-8 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-semibold     hover:opacity-90 transition-opacity inline-block"
          >
            View open roles
          </Link>
        </div>
      </div>
    </section>
  );
}
