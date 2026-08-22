import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import heroBg from '@/public/images/partners/Section - 01 HERO (1).png';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[640px] py-20 md:py-28 overflow-hidden flex items-center">
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Partners Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient Color Overlay (matching Figma purple/indigo/teal tone) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-indigo-950/80 to-indigo-900/60 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-[at_85%_20%] from-teal-400/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <div className="size-1.5 bg-teal-300 rounded-full" />
              <span className="text-teal-300 text-xs font-bold   uppercase tracking-wider">
                PARTNERS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold   text-white leading-[1.15]">
              Build and deliver better<br className="hidden sm:inline" /> video experiences,<br className="hidden sm:inline" /> together.
            </h1>

            <p className="text-slate-200 text-base md:text-lg font-normal   leading-relaxed max-w-xl">
              Find technology, implementation and live events expertise around ZoikoStream — or explore how your organization can work with us as a partner.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#choose-path"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg text-gray-900 text-base font-semibold   hover:opacity-90 transition-opacity"
              >
                Find a partner
              </Link>
              <Link
                href="#become-partner"
                className="px-7 py-3.5 rounded-lg border border-white/40 text-white text-base font-semibold   hover:bg-white/10 transition-colors"
              >
                Become a partner
              </Link>
            </div>

            <p className="text-slate-300 text-sm font-normal   pt-2">
              Partner type, capabilities, regions served, and relationship status are stated on each partner profile.
            </p>
          </div>

          {/* Right Floating Ecosystem Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-6 bg-white/10 rounded-3xl border border-white/30 backdrop-blur-md shadow-2xl flex flex-col gap-4">
              <div className="p-4 bg-zinc-900/80 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center gap-1">
                <span className="text-teal-300 text-xs font-bold   uppercase tracking-wider">
                  ECOSYSTEM
                </span>
                <span className="text-white text-xl font-bold  ">
                  ZoikoStream
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-white/90 rounded-xl border border-white/50 flex flex-col items-center text-center gap-2.5">
                  <div className="size-2 bg-blue-400 rounded-xs" />
                  <span className="text-gray-900 text-xs font-bold   leading-tight">
                    Technology &amp;<br />Integration
                  </span>
                </div>

                <div className="p-4 bg-white/90 rounded-xl border border-white/50 flex flex-col items-center text-center gap-2.5">
                  <div className="size-2 bg-teal-400 rounded-xs" />
                  <span className="text-gray-900 text-xs font-bold   leading-tight">
                    Solutions &amp;<br />Implementation
                  </span>
                </div>

                <div className="p-4 bg-white/90 rounded-xl border border-white/50 flex flex-col items-center text-center gap-2.5">
                  <div className="size-2 bg-indigo-500 rounded-xs" />
                  <span className="text-gray-900 text-xs font-bold   leading-tight">
                    Live Events &amp;<br />Production
                  </span>
                </div>

                <div className="p-4 bg-white/90 rounded-xl border border-white/50 flex flex-col items-center text-center gap-2.5">
                  <div className="size-2 bg-violet-500 rounded-xs" />
                  <span className="text-gray-900 text-xs font-bold   leading-tight">
                    Strategic Infrastructure<br />&amp; Alliances
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
