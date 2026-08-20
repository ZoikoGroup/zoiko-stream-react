'use client';

import Link from 'next/link';

export default function PurposeHero() {
  return (
    <section className="w-full overflow-hidden bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        {/* Left: copy */}
        <div className="flex w-full flex-col items-start lg:w-1/2">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-500" />
            <span className="font-mono text-xs uppercase leading-5 tracking-wide text-blue-500">
              Purpose &amp; Principles
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-100 sm:text-4xl lg:text-5xl lg:leading-[1.17]">
            Video should connect people — not complicate the technology behind it.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            ZoikoStream exists to help organizations build, deliver, and operate
            dependable on-demand and live video experiences with the reliability,
            control, and clarity serious teams require.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/platform-overview"
              className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-4 text-base font-semibold text-slate-950 transition-opacity hover:opacity-90"
            >
              Explore the platform
            </Link>
            <Link
              href="/live-events-overview"
              className="inline-flex items-center justify-center rounded-[10px] border border-white px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-slate-950"
            >
              Explore Live Events
            </Link>
          </div>
        </div>

        {/* Right: image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/purpose-principles/hero-video-call.png"
            alt="A team joining a video call on a desktop monitor"
            className="h-full w-full rounded-[10px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
