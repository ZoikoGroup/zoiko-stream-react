import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, AlertTriangle, Hourglass, Minus } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-16 md:py-24 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-recording-replay/bg (62).png"
          alt="Hero Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="px-4 py-1.5 rounded-full border border-teal-400/80 bg-teal-400/10 inline-flex items-center gap-2">
              <span className="text-teal-400 text-xs font-bold   tracking-wider uppercase">
                PLATFORM / RECORDING AND REPLAY
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold   text-white leading-tight md:leading-[1.15]">
              Turn approved live media into governed replay continuity
            </h1>

            <p className="text-slate-300 text-base md:text-lg font-normal   leading-relaxed">
              ZoikoStream Recording and replay helps authorized teams govern capture, verify completion, manage replay readiness, and enforce retention policies.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/talk-to-an-expert"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 font-bold   text-sm hover:opacity-90 transition-opacity shadow-lg shadow-teal-500/10"
              >
                Talk to an expert
              </Link>
              <Link
                href="/start-building"
                className="px-6 py-3.5 rounded-lg border border-slate-400 text-white font-bold   text-sm hover:bg-white/10 transition-colors"
              >
                Start building
              </Link>
            </div>
          </div>

          {/* Right Column: Readiness Card */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-zinc-900/90 rounded-2xl shadow-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-5">
              <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span className="text-white text-base font-bold  ">
                  Recording Readiness Review
                </span>
                <span className="px-2 py-0.5 bg-teal-400/10 rounded text-teal-400 text-xs font-bold  ">
                  LIVE CONTEXT
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-sm  ">Purpose/policy</span>
                  <span className="px-2.5 py-1 bg-emerald-950/80 border border-emerald-800/50 rounded text-teal-400 text-xs font-bold   flex items-center gap-1">
                    Satisfied <Check className="size-3" />
                  </span>
                </div>

                <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-sm  ">Rights/privacy</span>
                  <span className="px-2.5 py-1 bg-amber-950/80 border border-amber-800/50 rounded text-amber-500 text-xs font-bold   flex items-center gap-1">
                    Needs review <AlertTriangle className="size-3" />
                  </span>
                </div>

                <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-sm  ">Source/track scope</span>
                  <span className="px-2.5 py-1 bg-emerald-950/80 border border-emerald-800/50 rounded text-teal-400 text-xs font-bold   flex items-center gap-1">
                    Satisfied <Check className="size-3" />
                  </span>
                </div>

                <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-sm  ">Authorization</span>
                  <span className="px-2.5 py-1 bg-blue-950/80 border border-blue-800/50 rounded text-blue-400 text-xs font-bold   flex items-center gap-1">
                    Pending <Hourglass className="size-3" />
                  </span>
                </div>

                <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-sm  ">Automation</span>
                  <span className="px-2.5 py-1 bg-slate-800 rounded text-slate-400 text-xs font-bold   flex items-center gap-1">
                    Not applicable <Minus className="size-3" />
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
