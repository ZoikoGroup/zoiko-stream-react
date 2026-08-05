'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full bg-slate-950 bg-radial-[at_82%_8%] from-violet-500/20 via-slate-950 to-slate-950 px-4 py-12 md:px-12 lg:px-20 lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12">
        <div className="flex w-full flex-col items-start gap-4 lg:max-w-[620px]">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wide text-blue-500">
              ONE PLATFORM, COMPLETE LIFECYCLE
            </span>
          </div>

          <h1 className="font-['Space_Grotesk'] text-4xl font-light leading-tight text-slate-100 sm:text-5xl md:text-6xl md:leading-[1.1]">
            Secure media <br className="hidden sm:inline" />
            infrastructure for <br className="hidden sm:inline" />
            the complete video <br className="hidden sm:inline" />
            lifecycle.
          </h1>

          <p className="mt-2 font-['Space_Grotesk'] text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            ZoikoStream combines programmable APIs, enterprise media operations, secure delivery, recording,
            replay, captions, translation, analytics, and resilient workflows in one platform.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3.5">
            <Link
              href="/signup"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3.5 font-['Space_Grotesk'] text-base font-medium text-slate-950 transition-opacity hover:opacity-95"
            >
              Start building
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] border border-slate-700 px-6 py-3.5 font-['Space_Grotesk'] text-base font-medium text-white transition-colors hover:bg-slate-800/50"
            >
              Talk to an expert
            </Link>
          </div>
        </div>

        <div className="w-full lg:max-w-[580px]">
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-sm">
            <img
              src="/images/platform/Background+Border.png"
              alt="ZoikoStream Platform Preview"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
