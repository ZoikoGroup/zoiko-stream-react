import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg105 from '@/public/images/Broadcast-globally/bg (105).png';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-slate-900 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg105}
          alt="Global Broadcasting Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="px-3.5 py-1.5 rounded-full border border-teal-400 bg-teal-400/10 inline-flex items-center">
              <span className="text-teal-400 text-xs font-bold   uppercase tracking-wide">
                GLOBAL BROADCASTING
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold   text-white leading-tight md:leading-[60px]">
              Broadcast once. Reach distributed audiences with control.
            </h1>

            <p className="text-slate-400 text-base md:text-lg font-normal   leading-relaxed">
              Plan, operate, protect, deliver, observe, and preserve one-to-many video for audiences across approved regions and channels with ZoikoStream&apos;s secure media infrastructure and enterprise operations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/talk-to-an-expert"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
              >
                Talk to an expert
              </Link>
              <Link
                href="/platform-delivery-and-trust-overview"
                className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold   hover:bg-white/10 transition-colors"
              >
                Explore global delivery
              </Link>
            </div>
          </div>

          {/* Right Engine Status Box */}
          <div className="lg:col-span-5">
            <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-teal-400 rounded-full animate-pulse" />
                  <span className="text-white text-sm font-bold  ">
                    BROADCAST LIVE ENGINE
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold   rounded">
                  ONLINE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800 rounded-lg flex flex-col gap-1">
                  <span className="text-slate-400 text-xs font-normal  ">
                    CONCURRENT VIEWERS
                  </span>
                  <span className="text-white text-xl font-bold  ">
                    1,240,582
                  </span>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg flex flex-col gap-1">
                  <span className="text-slate-400 text-xs font-normal  ">
                    AVG. LATENCY
                  </span>
                  <span className="text-teal-400 text-xl font-bold  ">
                    0.84s
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="text-slate-400 text-xs font-bold   uppercase tracking-wider">
                  DELIVERY HEALTH BY REGION
                </span>

                <div className="p-3 bg-gray-800 rounded-md flex justify-between items-center">
                  <span className="text-white text-xs font-normal  ">
                    North America (East)
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="size-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-slate-400 text-xs font-normal  ">
                      99.98% SLA
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-gray-800 rounded-md flex justify-between items-center">
                  <span className="text-white text-xs font-normal  ">
                    Europe (Central)
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="size-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-slate-400 text-xs font-normal  ">
                      99.99% SLA
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-gray-800 rounded-md flex justify-between items-center">
                  <span className="text-white text-xs font-normal  ">
                    Asia Pacific (Tokyo)
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="size-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-slate-400 text-xs font-normal  ">
                      99.95% SLA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
